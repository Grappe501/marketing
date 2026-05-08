const ROWS = [
  { n: 1, t: "Approve suppression delta", lane: "Outreach", tier: "high" },
  { n: 2, t: "Publish county packet v3", lane: "Comms", tier: "med" },
  { n: 3, t: "Route vendor receipt gap", lane: "Finance", tier: "med" },
  { n: 4, t: "Staff GOTV gap — 2 counties", lane: "Field", tier: "high" },
  { n: 5, t: "Filing prep packet review", lane: "Compliance", tier: "med" },
] as const;

function tierStyle(tier: (typeof ROWS)[number]["tier"]) {
  if (tier === "high") return { border: "1px solid rgba(226,85,85,0.45)", color: "#f0b4b4" };
  return { border: "1px solid rgba(212,167,86,0.45)", color: "var(--gold)" };
}

/** Ranked operator queue — illustrative only. */
export function RankedActionsMock() {
  return (
    <div className="rd-ranked-mock" role="img" aria-label="Illustration: ranked operator next actions">
      <div className="rd-ranked-mock-head" aria-hidden="true">
        <span>Rank</span>
        <span>Next action</span>
        <span>Lane</span>
        <span>Consequence</span>
      </div>
      <ul className="rd-ranked-mock-list">
        {ROWS.map((r) => (
          <li key={r.n} className="rd-ranked-mock-row">
            <span className="rd-ranked-mock-num">{r.n}</span>
            <span className="rd-ranked-mock-title">{r.t}</span>
            <span className="rd-ranked-mock-lane">{r.lane}</span>
            <span className="rd-ranked-mock-tier" style={tierStyle(r.tier)}>
              {r.tier}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
