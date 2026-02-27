import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import { lmsrPrices, C } from "./constants";

export default function LeaderboardPage({ currentUid, markets }) {
  const [rows,    setRows]    = useState([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    try {
      const snap = await getDocs(collection(db, "users"));
      const entries = snap.docs.map(d => {
        const data = d.data();
        const portVal = Object.values(data.portfolio || {}).reduce((s, pos) => {
          const m = markets.find(x => x.id === pos.marketId);
          if (!m || m.unc) return s;
          const p = lmsrPrices(m.q);
          return s + pos.shares * (pos.side === "YES" ? p[pos.ci] : 1 - p[pos.ci]);
        }, 0);
        return { uid: d.id, username: data.username, balance: data.balance || 0, portVal, total: (data.balance || 0) + portVal };
      });
      entries.sort((a, b) => b.total - a.total);
      setRows(entries.slice(0, 20));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);

  const MEDALS = ["🥇","🥈","🥉"];

  return (
    <div style={{ padding:"2rem", maxWidth:680, margin:"0 auto" }}>
      <div style={{ marginBottom:"2rem", display:"flex", alignItems:"flex-end", justifyContent:"space-between" }}>
        <div>
          <h1 style={{ fontSize:24, fontWeight:600, letterSpacing:"-.04em", marginBottom:6 }}>🏆 Leaderboard</h1>
          <div style={{ fontSize:12, color:C.muted }}>Ranked by total value · balance + open positions</div>
        </div>
        <button onClick={load} style={{ padding:"6px 16px", background:C.s2, border:`1px solid ${C.border}`, borderRadius:6, color:C.muted, fontSize:11, cursor:"pointer", transition:"all .15s" }}>↻ Refresh</button>
      </div>

      {loading ? (
        <div style={{ textAlign:"center", padding:"3rem", color:C.muted }}>
          <div style={{ width:32, height:32, border:`3px solid ${C.border}`, borderTopColor:C.green, borderRadius:"50%", animation:"spin 1s linear infinite", margin:"0 auto 1rem" }} />
          Loading…
        </div>
      ) : rows.length === 0 ? (
        <div style={{ textAlign:"center", padding:"3rem", color:C.muted2, fontSize:12 }}>No traders yet — be the first to register!</div>
      ) : (
        <div style={{ background:C.surface, border:`1px solid ${C.border}`, borderRadius:8, overflow:"hidden" }}>
          {rows.map((entry, i) => (
            <div key={entry.uid} style={{ display:"flex", alignItems:"center", gap:"1rem", padding:"1rem 1.25rem", borderBottom:`1px solid ${C.border}`, background:entry.uid===currentUid?"rgba(57,211,83,.04)":"transparent", transition:"background .2s" }}>
              <div style={{ fontSize:i<3?20:14, fontWeight:600, color:i<3?C.amber:C.muted2, width:28, textAlign:"center", letterSpacing:"-.03em", flexShrink:0 }}>
                {i < 3 ? MEDALS[i] : i + 1}
              </div>
              <div style={{ flex:1, minWidth:0 }}>
                <div style={{ fontWeight:600, fontSize:14, color:entry.uid===currentUid?C.green:C.text }}>
                  {entry.username}{entry.uid===currentUid && <span style={{ color:C.green, fontSize:10, marginLeft:6 }}>(you)</span>}
                </div>
                <div style={{ fontSize:10, color:C.muted, marginTop:2 }}>
                  Balance: <span style={{ color:C.text }}>{entry.balance.toFixed(0)}</span> pts
                  &nbsp;·&nbsp; Portfolio: <span style={{ color:C.text }}>{entry.portVal.toFixed(0)}</span> pts
                </div>
              </div>
              <div style={{ fontWeight:600, fontSize:16, color:entry.total >= 1000 ? C.green : C.red, letterSpacing:"-.02em", flexShrink:0 }}>
                {entry.total.toFixed(0)} pts
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
