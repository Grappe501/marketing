const EVENTS = [
  { ts: "14:02:08", actor: "operator_a", action: "approved segmentation diff (audience v4)" },
  { ts: "14:04:51", actor: "finance_lead", action: "flagged vendor receipt gap on line 12" },
  { ts: "14:07:22", actor: "counsel_note", action: "comment attached — no block, visibility only" },
  { ts: "14:11:03", actor: "principal", action: "confirmed launch window for outbound batch" },
];

/** Immutable-style audit lines — illustration only. */
export function AuditTrailMock() {
  return (
    <div className="rd-audit-mock" role="img" aria-label="Illustration: audit trail event lines">
      <div className="rd-audit-mock-head" aria-hidden="true">
        <span>Timestamp</span>
        <span>Actor</span>
        <span>Event</span>
      </div>
      <ul className="rd-audit-mock-list">
        {EVENTS.map((e) => (
          <li key={e.ts + e.action} className="rd-audit-mock-row">
            <span className="rd-audit-mock-ts">{e.ts}</span>
            <span className="rd-audit-mock-actor">{e.actor}</span>
            <span className="rd-audit-mock-action">{e.action}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
