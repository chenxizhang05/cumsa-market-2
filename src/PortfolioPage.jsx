import { lmsrPrices, C, CAND_COLS, ELECTION_DATE } from "./constants";

export default function PortfolioPage({ userData, markets }) {
  const portfolio = userData.portfolio || {};
  const keys      = Object.keys(portfolio);

  const totalCost = keys.reduce((s,k) => s + portfolio[k].cost, 0);
  const totalVal  = keys.reduce((s,k) => {
    const pos = portfolio[k];
    const m   = markets.find(x => x.id === pos.marketId);
    if (!m || m.unc) return s;
    const p = lmsrPrices(m.q);
    return s + pos.shares * (pos.side === "YES" ? p[pos.ci] : (1 - p[pos.ci]));
  }, 0);
  const pnl    = totalVal - totalCost;
  const pnlPct = totalCost > 0 ? (pnl / totalCost * 100).toFixed(1) : "0";

  const kpis = [
    ["Balance",         userData.balance.toLocaleString(),           userData.balance < 200 ? C.red : C.amber, "pts remaining"],
    ["Invested",        totalCost.toFixed(0),                        C.blue,                                   "pts deployed"],
    ["Portfolio Value", totalVal.toFixed(0),                         pnl >= 0 ? C.green : C.red,               "mark-to-market"],
    ["Unrealised P&L",  (pnl >= 0 ? "+" : "") + pnl.toFixed(0),     pnl >= 0 ? C.green : C.red,               (pnl>=0?"+":"") + pnlPct + "%"],
    ["Open Positions",  keys.length,                                 C.blue,                                   "trades"],
  ];

  return (
    <div style={{ padding:"2rem", maxWidth:1100, margin:"0 auto" }}>

      {/* Header */}
      <div style={{ marginBottom:"2rem" }}>
        <h1 style={{ fontSize:24, fontWeight:600, letterSpacing:"-.04em", marginBottom:6 }}>Portfolio · {userData.username}</h1>
        <div style={{ fontSize:12, color:C.muted }}>CUMSA Election Market 2026–27 · Election: {ELECTION_DATE}</div>
      </div>

      {/* KPI grid */}
      <div style={{ display:"grid", gridTemplateColumns:"repeat(5,1fr)", gap:1, background:C.border, border:`1px solid ${C.border}`, borderRadius:8, overflow:"hidden", marginBottom:"2rem" }}>
        {kpis.map(([label,val,color,sub]) => (
          <div key={label} style={{ background:C.surface, padding:"1.25rem 1.5rem" }}>
            <div style={{ fontSize:9, letterSpacing:".14em", textTransform:"uppercase", color:C.muted, marginBottom:6 }}>{label}</div>
            <div style={{ fontSize:22, fontWeight:600, letterSpacing:"-.04em", lineHeight:1, color }}>{val}</div>
            <div style={{ fontSize:10, color:C.muted, marginTop:3 }}>{sub}</div>
          </div>
        ))}
      </div>

      {/* Positions table */}
      <SectionTitle>Open Positions</SectionTitle>
      {keys.length === 0 ? (
        <EmptyState>No positions yet — head to Markets to start trading</EmptyState>
      ) : (
        <div style={{ background:C.surface, border:`1px solid ${C.border}`, borderRadius:8, overflow:"hidden", marginBottom:"2rem" }}>
          <table style={{ width:"100%", borderCollapse:"collapse", fontSize:12 }}>
            <thead>
              <tr style={{ background:C.s2 }}>
                {["Candidate","Role","Side","Shares","Avg Cost","Cur Price","Mkt Value","P&L","P&L %"].map(h => (
                  <th key={h} style={{ fontSize:9, letterSpacing:".12em", textTransform:"uppercase", color:C.muted, textAlign:"left", padding:".6rem 1rem", borderBottom:`1px solid ${C.border}`, fontWeight:600 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {keys.map(key => {
                const pos    = portfolio[key];
                const m      = markets.find(x => x.id === pos.marketId);
                const p      = m && !m.unc ? lmsrPrices(m.q) : null;
                const curP   = p ? (pos.side==="YES" ? p[pos.ci] : 1-p[pos.ci]) : 0.5;
                const curVal = pos.shares * curP;
                const avgCst = pos.cost / pos.shares;
                const posP   = curVal - pos.cost;
                const posPct = pos.cost > 0 ? (posP/pos.cost*100).toFixed(1) : "0";
                return (
                  <tr key={key} style={{ borderBottom:`1px solid ${C.border}` }}>
                    <td style={{ padding:".75rem 1rem", fontWeight:600, fontSize:13 }}>{pos.name}</td>
                    <td style={{ padding:".75rem 1rem", color:C.muted, fontSize:11 }}>{pos.role}</td>
                    <td style={{ padding:".75rem 1rem" }}>
                      <span style={{ background:pos.side==="YES"?"rgba(57,211,83,.12)":"rgba(248,81,73,.12)", color:pos.side==="YES"?C.green:C.red, border:`1px solid ${pos.side==="YES"?"rgba(57,211,83,.2)":"rgba(248,81,73,.2)"}`, fontSize:9, fontWeight:700, padding:"2px 7px", borderRadius:100 }}>{pos.side}</span>
                    </td>
                    <td style={{ padding:".75rem 1rem" }}>{pos.shares.toFixed(2)}</td>
                    <td style={{ padding:".75rem 1rem" }}>{(avgCst*100).toFixed(1)}¢</td>
                    <td style={{ padding:".75rem 1rem" }}>{(curP*100).toFixed(1)}¢</td>
                    <td style={{ padding:".75rem 1rem", fontWeight:600 }}>{curVal.toFixed(0)} pts</td>
                    <td style={{ padding:".75rem 1rem", fontWeight:600, color:posP>=0?C.green:C.red }}>{posP>=0?"+":""}{posP.toFixed(0)}</td>
                    <td style={{ padding:".75rem 1rem", fontWeight:600, color:posP>=0?C.green:C.red }}>{posP>=0?"+":""}{posPct}%</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {/* Trade history */}
      <SectionTitle>Trade History ({userData.trades?.length || 0})</SectionTitle>
      <div style={{ background:C.surface, border:`1px solid ${C.border}`, borderRadius:8, overflow:"hidden" }}>
        {!userData.trades?.length ? (
          <EmptyState>No trades yet</EmptyState>
        ) : userData.trades.slice(0,50).map((t,i) => (
          <div key={i} style={{ display:"flex", alignItems:"center", gap:"1rem", padding:".7rem 1.25rem", borderBottom:`1px solid ${C.border}`, fontSize:11 }}>
            <div style={{ width:8, height:8, borderRadius:"50%", background:t.side==="YES"?C.green:C.red, flexShrink:0 }} />
            <div style={{ flex:1 }}>
              <div style={{ fontWeight:600, color:C.text }}>{t.name} — {t.side}</div>
              <div style={{ fontSize:10, color:C.muted, marginTop:2 }}>{t.role} · {t.shares.toFixed(2)} shares @ {(t.price*100).toFixed(1)}¢</div>
            </div>
            <div style={{ fontWeight:600, color:t.side==="YES"?C.green:C.red }}>{t.side==="YES"?"+":"−"}{t.amt} pts</div>
            <div style={{ fontSize:9, color:C.muted2, flexShrink:0 }}>{new Date(t.time).toLocaleString(undefined,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SectionTitle({ children }) {
  return <div style={{ fontSize:11, fontWeight:600, letterSpacing:".1em", textTransform:"uppercase", color:C.muted, marginBottom:"1rem", paddingBottom:".5rem", borderBottom:`1px solid ${C.border}` }}>{children}</div>;
}

function EmptyState({ children }) {
  return <div style={{ padding:"2rem", textAlign:"center", fontSize:12, color:C.muted2, fontStyle:"italic" }}>{children}</div>;
}
