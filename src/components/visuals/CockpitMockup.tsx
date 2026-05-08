const READINESS = [
  { k: "READY", title: "Email launch", sub: "Preflight OK · test send logged", tone: "ok" as const },
  { k: "BLOCKED", title: "County briefing", sub: "Owner: research · draft drift", tone: "bad" as const },
  { k: "QUEUE", title: "Calendar requests", sub: "3 pending review", tone: "warn" as const },
  { k: "RISK", title: "Field / GOTV", sub: "2 counties understaffed", tone: "warn" as const },
  { k: "PIPE", title: "Fundraising follow-up", sub: "Pledges aging · finance queue", tone: "warn" as const },
  { k: "WINDOW", title: "Compliance deadline", sub: "Prep tasks · counsel-owned filing", tone: "ok" as const },
];

const NEXT_ACTIONS = [
  { t: "Approve suppression diff", p: "Outreach · high" },
  { t: "Publish county packet v3", p: "Comms · medium" },
  { t: "Route vendor receipt gap", p: "Finance · medium" },
];

const COMMAND = ["cockpit.sync", "lanes=all", "posture=governed", "gates=strict"];

function toneBorder(tone: (typeof READINESS)[number]["tone"]) {
  if (tone === "ok") return "rgba(91,211,154,0.35)";
  if (tone === "bad") return "rgba(226,85,85,0.45)";
  return "rgba(212,167,86,0.45)";
}

export function CockpitMockup() {
  return (
    <div className="rd-cockpit-mock">
      <div className="rd-cockpit-mock-stack" aria-hidden="true">
        {COMMAND.map((c) => (
          <span key={c} className="rd-cockpit-cmd-pill">
            {c}
          </span>
        ))}
      </div>
      <div className="rd-cockpit-mock-body">
        <div className="rd-cockpit-cards">
          {READINESS.map((c) => (
            <div key={c.title} className="rd-cockpit-card" style={{ borderColor: toneBorder(c.tone) }}>
              <p className="rd-cockpit-card-k">{c.k}</p>
              <p className="rd-cockpit-card-t">{c.title}</p>
              <p className="rd-cockpit-card-s">{c.sub}</p>
            </div>
          ))}
        </div>
        <aside className="rd-cockpit-next" aria-label="Operator next actions (illustration)">
          <p className="rd-cockpit-next-h">Next action</p>
          <ul className="rd-cockpit-next-list">
            {NEXT_ACTIONS.map((a) => (
              <li key={a.t}>
                <span className="rd-cockpit-next-t">{a.t}</span>
                <span className="rd-cockpit-next-p">{a.p}</span>
              </li>
            ))}
          </ul>
          <div className="rd-cockpit-pills" aria-hidden="true">
            <span className="rd-cockpit-pill rd-cockpit-pill--blocked">Blocked</span>
            <span className="rd-cockpit-pill rd-cockpit-pill--ready">Ready</span>
            <span className="rd-cockpit-pill rd-cockpit-pill--review">Needs review</span>
          </div>
        </aside>
      </div>
    </div>
  );
}
