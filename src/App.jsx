import { useState, useEffect, useRef, useCallback } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, onSnapshot, updateDoc, collection, getDocs, orderBy, query, limit } from "firebase/firestore";
import { ref, onValue, set, push, serverTimestamp, get } from "firebase/database";
import { auth, db, rtdb } from "./firebase";
import { lmsrPrices, sharesFor, isClosed, C, CAND_COLS, INITIAL_MARKETS, NICKS, BOT_MSGS, GLOBAL_CSS, ELECTION_DATE, STARTING_BAL } from "./constants";
import AuthScreen from "./AuthScreen";
import PortfolioPage from "./PortfolioPage";
import LeaderboardPage from "./LeaderboardPage";

// ─────────────────────────────────────────────────────────────────────────────
// COUNTDOWN HOOK
// ─────────────────────────────────────────────────────────────────────────────
function useCountdown() {
  const CLOSE = new Date("2026-03-07T23:59:59");
  const calc = () => {
    const diff = CLOSE - new Date();
    if (diff <= 0) return { h:"00", m:"00", s:"00", closed:true, label:"" };
    const days = Math.floor(diff / 86400000);
    const h    = Math.floor((diff % 86400000) / 3600000);
    const m    = Math.floor((diff % 3600000)  / 60000);
    const s    = Math.floor((diff % 60000)    / 1000);
    if (days > 0) return { h:String(days).padStart(2,"0"), m:String(h).padStart(2,"0"), s:String(m).padStart(2,"0"), closed:false, label:"days:hrs:min" };
    return { h:String(h).padStart(2,"0"), m:String(m).padStart(2,"0"), s:String(s).padStart(2,"0"), closed:false, label:"hrs:min:sec" };
  };
  const [cd, setCd] = useState(calc);
  useEffect(() => { const id = setInterval(() => setCd(calc()), 1000); return () => clearInterval(id); }, []);
  return cd;
}

// ─────────────────────────────────────────────────────────────────────────────
// ROOT
// ─────────────────────────────────────────────────────────────────────────────
export default function App() {
  const [authUser, setAuthUser] = useState(undefined); // undefined = loading
  useEffect(() => onAuthStateChanged(auth, u => setAuthUser(u ?? null)), []);
  if (authUser === undefined) return <LoadingScreen />;
  if (!authUser) return <AuthScreen />;
  return <Market firebaseUser={authUser} />;
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN MARKET APP  (shown after login)
// ─────────────────────────────────────────────────────────────────────────────
function Market({ firebaseUser }) {
  const [page,       setPage]       = useState("markets");
  const [userData,   setUserData]   = useState(null);
  const [markets,    setMarkets]    = useState(INITIAL_MARKETS);
  const [totalVol,   setTotalVol]   = useState(INITIAL_MARKETS.reduce((s,m)=>s+m.vol,0));
  const [traders,    setTraders]    = useState(418);
  const [volDelta,   setVolDelta]   = useState(0);
  const [feedItems,  setFeedItems]  = useState([]);
  const [chatMsgs,   setChatMsgs]   = useState([]);
  const [chatInput,  setChatInput]  = useState("");
  const [onlineCnt,  setOnlineCnt]  = useState(12);
  const [toast,      setToast]      = useState(null);
  const [activeOrder,setActiveOrder]= useState(null);
  const [tpAmt,      setTpAmt]      = useState(50);
  const [mFilter,    setMFilter]    = useState("all");
  const chatRef   = useRef(null);
  const toastRef  = useRef(null);
  const cd = useCountdown();

  // ── 1. Listen to current user's Firestore document ──────────────────────
  useEffect(() => {
    const unsub = onSnapshot(doc(db, "users", firebaseUser.uid), snap => {
      if (snap.exists()) setUserData(snap.data());
    });
    return unsub;
  }, [firebaseUser.uid]);

  // ── 2. Listen to shared market state in Realtime Database ───────────────
  useEffect(() => {
    const mRef = ref(rtdb, "marketState");
    const unsub = onValue(mRef, snap => {
      if (snap.exists()) {
        const s = snap.val();
        if (s.markets)   setMarkets(s.markets);
        if (s.totalVol)  setTotalVol(s.totalVol);
        if (s.traders)   setTraders(s.traders);
      } else {
        // First ever load — seed the market state
        set(mRef, { markets: INITIAL_MARKETS, totalVol: INITIAL_MARKETS.reduce((s,m)=>s+m.vol,0), traders: 418 });
      }
    });
    return () => unsub();
  }, []);

  // ── 3. Listen to live chat in Realtime Database ──────────────────────────
  useEffect(() => {
    const cRef = ref(rtdb, "chat");
    const unsub = onValue(cRef, snap => {
      if (snap.exists()) {
        const raw = snap.val();
        const msgs = Object.values(raw).sort((a,b) => (a.ts||0)-(b.ts||0)).slice(-80);
        setChatMsgs(msgs);
      }
    });
    return () => unsub();
  }, []);

  useEffect(() => {
    if (chatRef.current) chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [chatMsgs]);

  // ── 4. Bot simulation (trading + chat) ───────────────────────────────────
  useEffect(() => {
    if (!userData || isClosed()) return;
    const cMkts = markets.filter(m => !m.unc);
    let timeout;
    const runBot = async () => {
      if (isClosed()) return;

      // Trading bot
      if (Math.random() < 0.65 && cMkts.length > 0) {
        const m  = cMkts[Math.floor(Math.random() * cMkts.length)];
        const mi = markets.findIndex(x => x.id === m.id);
        const ci = Math.floor(Math.random() * m.cands.length);
        const buy = Math.random() > 0.38;
        const amt = [15,20,30,50,50,75,100,100,150][Math.floor(Math.random()*9)];
        const nick = NICKS[Math.floor(Math.random() * NICKS.length)];

        const updMkts = markets.map((mk, idx) => {
          if (idx !== mi) return mk;
          const nq = [...mk.q];
          if (buy) { const sh = sharesFor(nq, ci, amt); nq[ci] += sh; }
          else { const np = Math.max(0.05, 1 - lmsrPrices(nq)[ci]); nq[ci] = Math.max(10, nq[ci] - (amt/np)*0.3); }
          const newP = lmsrPrices(nq).map(p => Math.round(p*100));
          return { ...mk, q:nq, vol:mk.vol+amt, hist:[...mk.hist, newP].slice(-80) };
        });
        const newVol = totalVol + amt;
        const newTr  = Math.random() < 0.15 ? traders + 1 : traders;

        // Push to Firebase RTDB
        await set(ref(rtdb, "marketState"), { markets:updMkts, totalVol:newVol, traders:newTr });

        setFeedItems(fi => [{
          name:m.cands[ci].name, role:m.role,
          type:buy?"buy":"sell", amt, user:nick, id:Date.now()+Math.random()
        }, ...fi].slice(0,14));
        setVolDelta(v => v + amt);
      }

      // Chat bot
      if (Math.random() < 0.3) {
        const nick = NICKS[Math.floor(Math.random()*NICKS.length)];
        const text = BOT_MSGS[Math.floor(Math.random()*BOT_MSGS.length)];
        await push(ref(rtdb, "chat"), { user:nick, text, type:"bot", ts:Date.now() });
      }

      if (Math.random() < 0.1) setOnlineCnt(c => Math.max(8, Math.min(30, c+(Math.random()<.5?1:-1))));
      timeout = setTimeout(runBot, 2500 + Math.random()*4000);
    };
    timeout = setTimeout(runBot, 1500 + Math.random()*2000);
    return () => clearTimeout(timeout);
  }, [userData, markets]);

  // ── 5. Execute a real user trade ─────────────────────────────────────────
  const executeTrade = useCallback(async (mi, ci, tab, amt) => {
    if (!userData || isClosed()) return;
    if (amt <= 0)              { showToast("Enter a valid amount","err"); return; }
    if (amt > userData.balance){ showToast("Insufficient balance","err"); return; }

    const m      = markets[mi];
    const prices = lmsrPrices(m.q);
    const curP   = prices[ci];
    let newShares, newQ;

    if (tab === "buy") {
      newShares = sharesFor(m.q, ci, amt);
      newQ = [...m.q]; newQ[ci] += newShares;
    } else {
      const np = Math.max(0.05, 1 - curP);
      newShares = amt / np;
      newQ = [...m.q]; newQ[ci] = Math.max(10, newQ[ci] - newShares * 0.4);
    }

    const newHist   = [...m.hist, lmsrPrices(newQ).map(p=>Math.round(p*100))].slice(-80);
    const updMkts   = markets.map((mk,idx) => idx===mi ? {...mk, q:newQ, vol:mk.vol+amt, hist:newHist} : mk);
    const newVol    = totalVol + amt;
    const side      = tab === "buy" ? "YES" : "NO";
    const portKey   = `${m.id}_${ci}${tab==="sell"?"_no":""}`;
    const existing  = userData.portfolio?.[portKey] || { name:m.cands[ci].name, role:m.role, side, shares:0, cost:0, marketId:m.id, ci };
    const tradeRec  = { name:m.cands[ci].name, role:m.role, side, amt, shares:newShares, price:curP, time:new Date().toISOString() };

    // Update Firestore atomically
    await updateDoc(doc(db, "users", firebaseUser.uid), {
      balance:  userData.balance - amt,
      [`portfolio.${portKey}`]: { ...existing, shares:existing.shares+newShares, cost:existing.cost+amt },
      trades:   [tradeRec, ...(userData.trades||[])].slice(0,100),
    });

    // Update shared market state
    await set(ref(rtdb, "marketState"), { markets:updMkts, totalVol:newVol, traders });

    setFeedItems(fi => [{ name:m.cands[ci].name, role:m.role, type:tab==="buy"?"buy":"sell", amt, user:userData.username, id:Date.now() }, ...fi].slice(0,14));
    setVolDelta(v => v+amt);
    showToast(`✓ ${side==="YES"?"Bought YES":"Bought NO"} on ${m.cands[ci].name.split(" ")[0]} — ${amt} pts`, "ok");
    setActiveOrder(null);
  }, [userData, markets, totalVol, traders, firebaseUser.uid]);

  // ── 6. Send chat message ──────────────────────────────────────────────────
  const sendChat = async () => {
    const text = chatInput.trim();
    if (!text || !userData) return;
    await push(ref(rtdb, "chat"), { user:userData.username, text, type:"you", ts:Date.now() });
    setChatInput("");
    // Occasional bot reply
    if (Math.random() < 0.4) {
      setTimeout(async () => {
        const nick = NICKS[Math.floor(Math.random()*NICKS.length)];
        const reply = BOT_MSGS[Math.floor(Math.random()*BOT_MSGS.length)];
        await push(ref(rtdb, "chat"), { user:nick, text:reply, type:"bot", ts:Date.now()+500 });
      }, 900 + Math.random()*2000);
    }
  };

  const showToast = (msg, type="ok") => {
    setToast({ msg, type });
    clearTimeout(toastRef.current);
    toastRef.current = setTimeout(() => setToast(null), 3500);
  };

  if (!userData) return <LoadingScreen />;

  const filtMkts  = markets.filter(m => mFilter==="contested"?!m.unc : mFilter==="uncontested"?m.unc : true);
  const posCount  = Object.keys(userData.portfolio||{}).length;

  // ── TRADE PANEL CALC ─────────────────────────────────────────────────────
  const calcOrder = () => {
    if (!activeOrder) return null;
    const m   = markets[activeOrder.mi];
    const p   = lmsrPrices(m.q);
    const cur = p[activeOrder.ci];
    if (activeOrder.tab === "buy") {
      const sh  = sharesFor(m.q, activeOrder.ci, tpAmt);
      const avg = sh > 0 ? tpAmt/sh : 0;
      return { avg:(avg*100).toFixed(1), shares:sh.toFixed(2), slip:(Math.abs(avg-cur)/cur*100).toFixed(2), ret:(sh-tpAmt).toFixed(0) };
    }
    const np = 1-cur, sh = tpAmt/np;
    return { avg:(np*100).toFixed(1), shares:sh.toFixed(2), slip:"0.30", ret:(sh-tpAmt).toFixed(0) };
  };
  const order = calcOrder();

  return (
    <div style={{ background:C.bg, minHeight:"100vh", color:C.text, fontFamily:"'IBM Plex Mono',monospace" }}>
      <style>{GLOBAL_CSS}</style>

      {/* ── HEADER ── */}
      <div style={{ height:52, background:C.surface, borderBottom:`1px solid ${C.border}`, display:"flex", alignItems:"center", padding:"0 1.5rem", gap:"1.5rem", position:"sticky", top:0, zIndex:300 }}>
        <div style={{ display:"flex", alignItems:"center", gap:8, flexShrink:0 }}>
          <div style={{ width:30, height:30, borderRadius:6, background:`linear-gradient(135deg,${C.green2},#1a7a3c)`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:13, fontWeight:600, color:"#fff" }}>C</div>
          <span style={{ fontSize:14, fontWeight:600, letterSpacing:"-.02em" }}>CUMSA</span>
          <span style={{ color:C.muted2 }}>·</span>
          <span style={{ fontSize:10, color:C.muted, letterSpacing:".04em" }}>ELECTION MARKET</span>
        </div>

        <nav style={{ display:"flex", marginLeft:"auto" }}>
          {[["markets","Markets"],["portfolio",`Portfolio${posCount>0?` (${posCount})`:""}`],["leaderboard","Leaderboard"]].map(([id,label]) => (
            <button key={id} onClick={() => setPage(id)}
              style={{ padding:"0 1rem", height:52, fontSize:12, fontWeight:500, color:page===id?C.text:C.muted, cursor:"pointer", borderBottom:`2px solid ${page===id?C.green:"transparent"}`, borderTop:"none", borderLeft:"none", borderRight:"none", background:"none", transition:"all .15s", letterSpacing:".02em" }}>
              {label}
            </button>
          ))}
        </nav>

        <div style={{ display:"flex", alignItems:"center", gap:"1rem", marginLeft:"auto" }}>
          {!cd.closed && <LivePill />}
          {cd.closed  && <span style={{ fontSize:10, fontWeight:600, color:C.red, background:"rgba(248,81,73,.1)", border:"1px solid rgba(248,81,73,.2)", borderRadius:100, padding:"3px 10px" }}>🔒 CLOSED</span>}
          <span style={{ fontSize:12, fontWeight:600, color:C.amber }}>{userData.balance.toLocaleString()} pts</span>
          <span style={{ fontSize:11, color:C.muted }}>{userData.username}</span>
          <button onClick={() => signOut(auth)} style={{ fontSize:10, color:C.muted2, background:"none", border:`1px solid ${C.border}`, borderRadius:4, padding:"3px 8px", cursor:"pointer" }}>sign out</button>
        </div>
      </div>

      {/* ── STATS BAR ── */}
      <div style={{ background:C.surface, borderBottom:`1px solid ${C.border}`, display:"flex", padding:"0 1.5rem", overflowX:"auto" }}>
        {[
          ["Total Volume",   totalVol.toLocaleString(), C.green,  `+${Math.floor(volDelta)} today`],
          ["Live Traders",   traders,                   C.blue,   null],
          ["Election",       ELECTION_DATE,             C.amber,  null],
          ["Market Closes",  "7 Mar 2026",              C.amber,  null],
          ["Your Balance",   userData.balance.toLocaleString()+" pts", userData.balance<100?C.red:C.green, null],
        ].map(([label,val,color,sub]) => (
          <div key={label} style={{ padding:".9rem 2rem .9rem 0", borderRight:`1px solid ${C.border}`, marginRight:"2rem", flexShrink:0 }}>
            <div style={{ fontSize:9, letterSpacing:".14em", textTransform:"uppercase", color:C.muted, marginBottom:4 }}>{label}</div>
            <div style={{ fontSize:18, fontWeight:600, letterSpacing:"-.03em", lineHeight:1, color }}>{val}</div>
            {sub && <div style={{ fontSize:10, color:C.green, marginTop:2 }}>{sub}</div>}
          </div>
        ))}
      </div>

      {/* ── CLOSED BANNER ── */}
      {cd.closed && (
        <div style={{ background:"linear-gradient(90deg,#1a0a0a,#1f0d0d)", borderBottom:"2px solid rgba(248,81,73,.6)", padding:"1rem 2rem", textAlign:"center" }}>
          <div style={{ fontSize:16, fontWeight:600, color:C.red, marginBottom:3 }}>🔒 Market Closed — Trading Has Ended</div>
          <div style={{ fontSize:11, color:C.muted }}>Results finalised on <strong style={{color:C.amber}}>7 March 2026</strong>. Thanks for playing! 🇲🇾🇸🇬</div>
        </div>
      )}

      {/* ── PAGE ROUTER ── */}
      {page === "markets" && (
        <div style={{ display:"grid", gridTemplateColumns:"1fr 340px", minHeight:"calc(100vh - 107px)" }}>

          {/* LEFT: market list */}
          <div style={{ borderRight:`1px solid ${C.border}`, padding:"1.5rem", overflowY:"auto" }}>
            <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:"1rem" }}>
              <span style={{ fontSize:11, fontWeight:600, letterSpacing:".1em", textTransform:"uppercase", color:C.muted }}>All Markets · 2026–27</span>
              <FilterTabs value={mFilter} onChange={setMFilter} />
            </div>
            {filtMkts.map(m => {
              const mi     = markets.findIndex(x => x.id===m.id);
              const prices = m.unc ? [1] : lmsrPrices(m.q);
              return (
                <div key={m.id} style={{ background:C.surface, border:`1px solid ${C.border}`, borderRadius:8, marginBottom:8, overflow:"hidden" }}>
                  <div style={{ padding:"1rem 1.25rem", display:"flex", alignItems:"flex-start", gap:"1rem" }}>
                    <div style={{ width:36, height:36, borderRadius:8, background:C.s2, display:"flex", alignItems:"center", justifyContent:"center", fontSize:16, flexShrink:0 }}>{m.icon}</div>
                    <div style={{ flex:1, minWidth:0 }}>
                      <div style={{ fontSize:9, fontWeight:600, letterSpacing:".12em", textTransform:"uppercase", color:C.muted, marginBottom:3 }}>{m.role}</div>
                      <div style={{ fontSize:14, fontWeight:600, letterSpacing:"-.02em" }}>{m.title}</div>
                      <div style={{ fontSize:10, color:C.muted, marginTop:4 }}>Vol: <strong style={{color:C.text}}>{m.vol.toLocaleString()}</strong> pts</div>
                    </div>
                    <div style={{ display:"flex", flexDirection:"column", alignItems:"flex-end", gap:4, flexShrink:0 }}>
                      {m.unc   && <Badge color={C.amber} bg="rgba(227,179,65,.12)" border="rgba(227,179,65,.2)">Uncontested</Badge>}
                      {m.multi && <Badge color={C.blue}  bg="rgba(88,166,255,.12)" border="rgba(88,166,255,.2)">Multi-winner</Badge>}
                    </div>
                  </div>
                  <div style={{ padding:"0 1.25rem 1rem" }}>
                    {m.cands.map((c,ci) => {
                      const pct   = Math.round(prices[ci]*100);
                      const prev  = m.hist[m.hist.length-1]?.[ci] ?? pct;
                      const delta = pct - prev;
                      return (
                        <div key={ci} style={{ display:"grid", gridTemplateColumns:"1fr auto auto", alignItems:"center", gap:".75rem", padding:".5rem 0", borderTop:`1px solid ${C.border}` }}>
                          <div>
                            <div style={{ fontSize:13, fontWeight:600, display:"flex", alignItems:"center", gap:6 }}>
                              {c.name}
                              {!m.unc && Math.abs(delta)>0 && (
                                <span style={{ fontSize:9, fontWeight:600, padding:"1px 5px", borderRadius:3, background:delta>0?"rgba(57,211,83,.12)":"rgba(248,81,73,.12)", color:delta>0?C.green:C.red }}>{delta>0?"+":""}{delta}%</span>
                              )}
                            </div>
                            <div style={{ marginTop:4, height:4, background:C.s3, borderRadius:2, overflow:"hidden" }}>
                              <div style={{ height:"100%", width:(m.unc?100:pct)+"%", background:CAND_COLS[ci%4], borderRadius:2, transition:"width .6s cubic-bezier(.4,0,.2,1)" }} />
                            </div>
                          </div>
                          <div style={{ fontSize:15, fontWeight:600, color:CAND_COLS[ci%4], minWidth:44, textAlign:"right" }}>{m.unc?"—":pct+"%"}</div>
                          {!m.unc && !isClosed() ? (
                            <div style={{ display:"flex", gap:4 }}>
                              <button onClick={() => { setActiveOrder({mi,ci,tab:"buy"}); setTpAmt(50); }} style={{ padding:"5px 10px", borderRadius:5, fontSize:11, fontWeight:600, cursor:"pointer", background:"rgba(57,211,83,.12)", color:C.green, border:"1px solid rgba(57,211,83,.3)", transition:"all .12s" }}>Buy {pct}¢</button>
                              <button onClick={() => { setActiveOrder({mi,ci,tab:"sell"}); setTpAmt(50); }} style={{ padding:"5px 10px", borderRadius:5, fontSize:11, fontWeight:600, cursor:"pointer", background:"rgba(248,81,73,.12)", color:C.red, border:"1px solid rgba(248,81,73,.3)", transition:"all .12s" }}>No {100-pct}¢</button>
                            </div>
                          ) : <div />}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT: sidebar */}
          <div style={{ padding:"1.25rem", overflowY:"auto", display:"flex", flexDirection:"column", gap:"1rem" }}>

            {/* Countdown */}
            <div style={{ background:C.surface, border:`1px solid ${cd.closed?"rgba(248,81,73,.3)":C.border}`, borderRadius:8, padding:".85rem 1rem", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
              <div style={{ fontSize:10, color:cd.closed?C.red:C.muted, letterSpacing:".06em" }}>{cd.closed?"🔒 Market closed":`Closes in (${cd.label})`}</div>
              <div style={{ display:"flex", alignItems:"baseline", gap:4 }}>
                {[cd.h,cd.m,cd.s].map((v,i) => (
                  <span key={i} style={{ display:"flex", flexDirection:"column", alignItems:"center" }}>
                    <span style={{ fontSize:18, fontWeight:600, letterSpacing:"-.04em", color:cd.closed?C.red:C.amber, minWidth:28, textAlign:"center" }}>{v}</span>
                    {i<2 && <span style={{ color:C.muted2, fontSize:14, margin:"0 2px" }}>:</span>}
                  </span>
                ))}
              </div>
            </div>

            {/* Trade Panel */}
            {activeOrder && (() => {
              const m = markets[activeOrder.mi];
              const p = lmsrPrices(m.q);
              return (
                <div className="fadein" style={{ background:C.surface, border:`1px solid ${C.border}`, borderRadius:8, overflow:"hidden" }}>
                  <div style={{ padding:".85rem 1rem", borderBottom:`1px solid ${C.border}`, display:"flex", alignItems:"center", justifyContent:"space-between" }}>
                    <span style={{ fontSize:12, fontWeight:600 }}>Place Order</span>
                    <button onClick={() => setActiveOrder(null)} style={{ background:"none", border:"none", color:C.muted, fontSize:18, cursor:"pointer", lineHeight:1 }}>×</button>
                  </div>
                  <div style={{ padding:"1rem" }}>
                    <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:"1rem", padding:".6rem .8rem", background:C.s2, borderRadius:6, border:`1px solid ${C.border}` }}>
                      <div style={{ fontSize:13, fontWeight:600, flex:1 }}>{m.cands[activeOrder.ci].name}</div>
                      <div style={{ fontSize:16, fontWeight:600, color:C.green }}>{Math.round(p[activeOrder.ci]*100)}¢</div>
                    </div>
                    <div style={{ display:"flex", border:`1px solid ${C.border}`, borderRadius:6, overflow:"hidden", marginBottom:"1rem" }}>
                      {[["buy","BUY YES"],["sell","BUY NO"]].map(([t,label]) => (
                        <button key={t} onClick={() => setActiveOrder(a=>({...a,tab:t}))}
                          style={{ flex:1, padding:7, background:activeOrder.tab===t?(t==="buy"?C.green2:"#c0392b"):"transparent", color:activeOrder.tab===t?"#fff":C.muted, border:"none", cursor:"pointer", fontSize:11, fontWeight:600, letterSpacing:".06em", transition:"all .15s" }}>
                          {label}
                        </button>
                      ))}
                    </div>
                    <div style={{ fontSize:9, letterSpacing:".14em", textTransform:"uppercase", color:C.muted, marginBottom:5 }}>Amount (pts)</div>
                    <div style={{ position:"relative", marginBottom:".5rem" }}>
                      <input type="number" value={tpAmt} onChange={e => setTpAmt(Math.max(1,parseInt(e.target.value)||0))}
                        style={{ width:"100%", background:C.s2, border:`1px solid ${C.border}`, borderRadius:6, padding:".6rem 2.5rem .6rem .75rem", color:C.text, fontSize:16, fontWeight:600, outline:"none" }} />
                      <span style={{ position:"absolute", right:".75rem", top:"50%", transform:"translateY(-50%)", fontSize:11, color:C.muted }}>pts</span>
                    </div>
                    <div style={{ display:"flex", gap:4, marginBottom:"1rem" }}>
                      {[25,50,100,250].map(v => (
                        <button key={v} onClick={() => setTpAmt(Math.min(v===250?userData.balance:v, userData.balance))}
                          style={{ flex:1, padding:4, background:C.s3, border:`1px solid ${C.border}`, borderRadius:4, color:C.muted, fontSize:10, cursor:"pointer", transition:"all .12s" }}>
                          {v===250?"Max":v}
                        </button>
                      ))}
                    </div>
                    {order && (
                      <div style={{ background:C.s2, border:`1px solid ${C.border}`, borderRadius:6, padding:".75rem", marginBottom:"1rem" }}>
                        {[["Avg price",order.avg+"¢"],["Shares",order.shares],["Slippage",order.slip+"%"],["Potential return","+"+order.ret+" pts"]].map(([l,v],i) => (
                          <div key={l} style={{ display:"flex", justifyContent:"space-between", fontSize:11, marginBottom:i<3?5:0, alignItems:"center" }}>
                            <span style={{ color:C.muted }}>{l}</span>
                            <span style={{ fontWeight:600, color:i===3?C.green:C.text, fontSize:i===3?13:11 }}>{v}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    <button onClick={() => executeTrade(activeOrder.mi, activeOrder.ci, activeOrder.tab, tpAmt)}
                      style={{ width:"100%", padding:11, background:activeOrder.tab==="buy"?C.green2:"#c0392b", color:"#fff", border:"none", borderRadius:6, fontSize:13, fontWeight:600, cursor:"pointer", letterSpacing:".04em", transition:"all .15s" }}>
                      {activeOrder.tab==="buy"?"BUY YES":"BUY NO"} — {tpAmt} pts
                    </button>
                  </div>
                </div>
              );
            })()}

            {/* Live Activity */}
            <div style={{ background:C.surface, border:`1px solid ${C.border}`, borderRadius:8, overflow:"hidden" }}>
              <div style={{ padding:".75rem 1rem", borderBottom:`1px solid ${C.border}`, display:"flex", alignItems:"center", justifyContent:"space-between" }}>
                <span style={{ fontSize:11, fontWeight:600, letterSpacing:".06em", textTransform:"uppercase", color:C.muted }}>Live Activity</span>
                <LivePill small />
              </div>
              <div style={{ maxHeight:200, overflowY:"auto" }}>
                {feedItems.length===0 && <div style={{ padding:"1rem", fontSize:11, color:C.muted2, textAlign:"center" }}>Waiting for trades…</div>}
                {feedItems.map(item => (
                  <div key={item.id} className="fadein" style={{ padding:".6rem 1rem", borderBottom:`1px solid ${C.border}`, fontSize:11 }}>
                    <div style={{ display:"flex", justifyContent:"space-between" }}><strong>{item.user}</strong><span style={{ fontSize:9, color:C.muted2 }}>just now</span></div>
                    <div style={{ color:C.muted, fontSize:10, margin:"2px 0" }}>
                      <span style={{ color:item.type==="buy"?C.green:C.red, fontWeight:600 }}>{item.type==="buy"?"BUY YES":"BUY NO"}</span>
                      {" on "}<strong style={{ color:C.text }}>{item.name.split(" ")[0]}</strong> · {item.role}
                    </div>
                    <span style={{ fontWeight:600, color:item.type==="buy"?C.green:C.red }}>{item.type==="buy"?"+":"−"}{item.amt} pts</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Live Chat */}
            <div style={{ background:C.surface, border:`1px solid ${C.border}`, borderRadius:8, overflow:"hidden", display:"flex", flexDirection:"column" }}>
              <div style={{ padding:".75rem 1rem", borderBottom:`1px solid ${C.border}`, display:"flex", alignItems:"center", justifyContent:"space-between", flexShrink:0 }}>
                <span style={{ fontSize:11, fontWeight:600, letterSpacing:".06em", textTransform:"uppercase", color:C.muted }}>💬 Live Chat</span>
                <span style={{ fontSize:10, color:C.green, display:"flex", alignItems:"center", gap:4 }}>
                  <span style={{ width:5, height:5, background:C.green, borderRadius:"50%", display:"inline-block", animation:"pulse 1.4s infinite" }} />
                  {onlineCnt} online
                </span>
              </div>
              <div ref={chatRef} style={{ height:190, overflowY:"auto", padding:".5rem" }}>
                {chatMsgs.map((msg,i) => (
                  <div key={msg.id||i} style={{ padding:".3rem .5rem", borderRadius:4, marginBottom:2, fontSize:11, lineHeight:1.5 }}>
                    <span style={{ fontWeight:600, marginRight:6, color:msg.user===userData.username?C.green:C.amber }}>{msg.user}</span>
                    <span style={{ color:C.muted }}>{msg.text}</span>
                    <span style={{ float:"right", fontSize:9, color:C.muted2, marginLeft:8 }}>{new Date(msg.ts).toLocaleTimeString(undefined,{hour:"2-digit",minute:"2-digit"})}</span>
                  </div>
                ))}
              </div>
              <div style={{ display:"flex", gap:6, padding:".6rem", borderTop:`1px solid ${C.border}`, flexShrink:0 }}>
                <input value={chatInput} onChange={e=>setChatInput(e.target.value)} onKeyDown={e=>e.key==="Enter"&&sendChat()} placeholder="Say something…" maxLength={120}
                  style={{ flex:1, background:C.s2, border:`1px solid ${C.border}`, borderRadius:6, padding:".45rem .75rem", color:C.text, fontSize:12, outline:"none" }} />
                <button onClick={sendChat} style={{ padding:".45rem .9rem", background:C.green2, color:"#fff", border:"none", borderRadius:6, fontSize:11, fontWeight:600, cursor:"pointer", transition:"all .15s" }}>Send</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {page === "portfolio"   && <PortfolioPage userData={userData} markets={markets} />}
      {page === "leaderboard" && <LeaderboardPage currentUid={firebaseUser.uid} markets={markets} />}

      {/* Toast */}
      {toast && (
        <div className="slideup" style={{ position:"fixed", bottom:"1.5rem", right:"1.5rem", background:C.s2, border:`1px solid ${toast.type==="ok"?"rgba(57,211,83,.4)":"rgba(248,81,73,.4)"}`, borderRadius:8, padding:".75rem 1.25rem", fontSize:12, fontWeight:600, color:toast.type==="ok"?C.green:C.red, zIndex:1000, maxWidth:300 }}>
          {toast.msg}
        </div>
      )}
    </div>
  );
}

// ─── SMALL SHARED COMPONENTS ─────────────────────────────────────────────────
export function LivePill({ small }) {
  return (
    <div style={{ display:"flex", alignItems:"center", gap:5, background:"rgba(57,211,83,.1)", border:"1px solid rgba(57,211,83,.2)", borderRadius:100, padding:"3px 10px", fontSize:10, fontWeight:600, color:C.green, letterSpacing:".08em", ...(small?{transform:"scale(.85)"}:{}) }}>
      <div style={{ width:5, height:5, background:C.green, borderRadius:"50%", animation:"pulse 1.4s infinite" }} />LIVE
    </div>
  );
}

function Badge({ children, color, bg, border }) {
  return <span style={{ background:bg, color, border:`1px solid ${border}`, fontSize:9, fontWeight:600, letterSpacing:".08em", padding:"2px 8px", borderRadius:100 }}>{children}</span>;
}

function FilterTabs({ value, onChange }) {
  return (
    <div style={{ display:"flex", gap:2, background:C.s2, border:`1px solid ${C.border}`, borderRadius:6, padding:2 }}>
      {["all","contested","uncontested"].map(f => (
        <button key={f} onClick={() => onChange(f)} style={{ padding:"3px 10px", borderRadius:4, fontSize:10, fontWeight:600, cursor:"pointer", background:value===f?C.s3:"none", color:value===f?C.text:C.muted, border:"none", transition:"all .15s", letterSpacing:".04em" }}>{f}</button>
      ))}
    </div>
  );
}

function LoadingScreen() {
  return (
    <div style={{ minHeight:"100vh", display:"flex", alignItems:"center", justifyContent:"center", background:C.bg, flexDirection:"column", gap:16 }}>
      <style>{GLOBAL_CSS}</style>
      <div style={{ width:40, height:40, border:`3px solid ${C.border}`, borderTopColor:C.green, borderRadius:"50%", animation:"spin 1s linear infinite" }} />
      <div style={{ fontSize:12, color:C.muted }}>Loading CUMSA Markets…</div>
    </div>
  );
}
