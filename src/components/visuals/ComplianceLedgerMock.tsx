const rows = [
  { kind: "Contribution", review: "Needs review", deadline: "T-18d", status: "Export packet draft" },
  { kind: "Expenditure", review: "2 gaps", deadline: "T-9d", status: "Owner: finance" },
  { kind: "Vendor", review: "OK", deadline: "—", status: "Approvals attached" },
  { kind: "Deadline window", review: "Watch", deadline: "T-12d", status: "Prep tasks queued" },
];

export function ComplianceLedgerMock() {
  return (
    <div className="rd-ledger-mock" role="img" aria-label="Illustration: compliance preparation ledger rows">
      <div className="rd-ledger-mock-head" aria-hidden="true">
        <span>Type</span>
        <span>Review</span>
        <span>Deadline</span>
        <span>Status</span>
      </div>
      <div style={{ display: "grid", gap: "0.25rem", fontFamily: "var(--font-mono)", fontSize: "0.76rem" }}>
        {rows.map((r) => (
          <div key={r.kind} className="rd-ledger-mock-row">
            <span style={{ color: "var(--muted)" }}>{r.kind}</span>
            <span style={{ color: "var(--gold)" }}>{r.review}</span>
            <span style={{ color: "var(--accent-2)" }}>{r.deadline}</span>
            <span style={{ color: "var(--text)", textAlign: "right" }}>{r.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
