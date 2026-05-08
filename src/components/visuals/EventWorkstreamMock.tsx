const DEPS = [
  { id: "log", label: "Logistics checklist", owner: "ops_lead", st: "done" as const },
  { id: "sur", label: "Surrogate packet", owner: "intel_review", st: "active" as const },
  { id: "prs", label: "Press advisory draft", owner: "comms", st: "wait" as const },
  { id: "fld", label: "Field staffing window", owner: "field_dir", st: "warn" as const },
  { id: "sec", label: "Venue + security posture", owner: "ops_lead", st: "wait" as const },
] as const;

function statusClass(st: (typeof DEPS)[number]["st"]) {
  if (st === "done") return "rd-cal-dep-st rd-cal-dep-st--done";
  if (st === "active") return "rd-cal-dep-st rd-cal-dep-st--active";
  if (st === "warn") return "rd-cal-dep-st rd-cal-dep-st--warn";
  return "rd-cal-dep-st rd-cal-dep-st--wait";
}

function statusLabel(st: (typeof DEPS)[number]["st"]) {
  if (st === "done") return "Done";
  if (st === "active") return "In review";
  if (st === "warn") return "Gap";
  return "Blocked";
}

/** One public event object with dependent workstreams — illustration only. */
export function EventWorkstreamMock() {
  return (
    <div className="rd-cal-dep" role="img" aria-label="Illustration: event object with dependent tasks and owners">
      <div className="rd-cal-dep-head">
        <div>
          <span className="rd-cal-dep-eyebrow">Calendar object</span>
          <p className="rd-cal-dep-title">Rally — NWA (draft → public)</p>
        </div>
        <span className="rd-cal-dep-badge">Approvals: 2 of 4</span>
      </div>
      <ul className="rd-cal-dep-list">
        {DEPS.map((d) => (
          <li key={d.id} className="rd-cal-dep-row">
            <span className="rd-cal-dep-label">{d.label}</span>
            <span className="rd-cal-dep-owner">{d.owner}</span>
            <span className={statusClass(d.st)}>{statusLabel(d.st)}</span>
          </li>
        ))}
      </ul>
      <p className="rd-cal-dep-note">Nothing publishes until dependencies clear — your deployment defines which gates are mandatory.</p>
    </div>
  );
}
