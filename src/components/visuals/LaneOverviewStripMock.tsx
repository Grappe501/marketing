/** Twelve-lane overview strip — schematic status, not live data. */
const LANES = [
  { id: "Cockpit", s: "ok" },
  { id: "Fundraise", s: "warn" },
  { id: "Compliance", s: "ok" },
  { id: "Outreach", s: "risk" },
  { id: "Calendar", s: "warn" },
  { id: "Field", s: "warn" },
  { id: "Counties", s: "ok" },
  { id: "Data", s: "ok" },
  { id: "Content", s: "ok" },
  { id: "Intel", s: "ok" },
  { id: "Govern", s: "ok" },
  { id: "Adopt", s: "ok" },
] as const;

function dot(s: (typeof LANES)[number]["s"]) {
  if (s === "ok") return "rgba(91,211,154,0.9)";
  if (s === "risk") return "rgba(226,85,85,0.95)";
  return "rgba(212,167,86,0.95)";
}

export function LaneOverviewStripMock() {
  return (
    <div className="rd-lane-strip-mock" role="img" aria-label="Illustration: twelve operating lanes with schematic readiness dots">
      <div className="rd-lane-strip-mock-grid">
        {LANES.map((l) => (
          <div key={l.id} className="rd-lane-strip-cell">
            <span className="rd-lane-strip-dot" style={{ background: dot(l.s) }} aria-hidden="true" />
            <span className="rd-lane-strip-label">{l.id}</span>
          </div>
        ))}
      </div>
      <p className="rd-lane-strip-note">Dots = schematic posture (ready / watch / risk) — not a deployment health claim.</p>
    </div>
  );
}
