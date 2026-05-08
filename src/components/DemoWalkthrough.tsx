const STEPS = [
  { t: "Monday morning", d: "Campaign Cockpit ranks readiness: sends, calendar, counties, fundraising, compliance windows, field exceptions—one command stack." },
  { t: "Email: volunteer activation", d: "Audience studio + message studio produce an explainable segment; governance attaches approvals; send execution requires final operator confirmation." },
  { t: "Calendar: new event request", d: "Request becomes an object: owners, dependencies, surrogate posture—routed through approval workflow before public visibility transitions." },
  { t: "Fundraising: pledge follow-up", d: "Pledge aging surfaces in the lane; finance review queue gets the same object the organizers see—no parallel spreadsheet truth." },
  { t: "County: briefing reviewed", d: "County intelligence updates drive comms and field adjustments; stale briefing becomes a visible exception, not a silent mistake." },
  { t: "Field: GOTV risk", d: "Readiness gates show coverage gaps early enough to re-sequence capacity; exceptions route to Cockpit with owners." },
  { t: "Compliance: finance deadline visible", d: "Deadline proximity is an operational signal with owners—preparation/export/handoff posture, not a filing guarantee." },
  { t: "Leadership: next actions ranked", d: "Principals leave with three agreed priorities and a clear view of what is blocked versus what is ready." },
];

export function DemoWalkthrough() {
  return (
    <div style={{ display: "grid", gap: "0.65rem" }}>
      {STEPS.map((s, i) => (
        <div key={s.t} className="rd-panel" style={{ padding: "0.85rem 1rem", display: "grid", gridTemplateColumns: "auto 1fr", gap: "0.85rem", alignItems: "start" }}>
          <span style={{ fontFamily: "var(--font-mono)", color: "var(--accent-2)", fontSize: "0.85rem" }}>{String(i + 1).padStart(2, "0")}</span>
          <div>
            <p style={{ margin: 0, fontWeight: 650 }}>{s.t}</p>
            <p className="rd-muted" style={{ margin: "0.35rem 0 0", fontSize: "0.9rem" }}>
              {s.d}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
