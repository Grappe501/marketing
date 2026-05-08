const BARS = [
  { label: "Programs / paid media", pct: 58, tone: "accent" as const },
  { label: "Raise pipeline (30d)", pct: 42, tone: "cool" as const },
  { label: "Reserve + contingency", pct: 22, tone: "muted" as const },
];

/** Budget posture bars — schematic, not real ledger math. */
export function BudgetBarsMock() {
  return (
    <div className="rd-budget-mock" role="img" aria-label="Illustration: budget allocation posture bars">
      {BARS.map((b) => (
        <div key={b.label} className="rd-budget-mock-row">
          <div className="rd-budget-mock-label">{b.label}</div>
          <div className="rd-budget-mock-track">
            <div className={`rd-budget-mock-fill rd-budget-mock-fill--${b.tone}`} style={{ width: `${b.pct}%` }} />
          </div>
          <div className="rd-budget-mock-pct">{b.pct}%</div>
        </div>
      ))}
      <p className="rd-budget-mock-note">Percentages are illustrative composition — not a calculator.</p>
    </div>
  );
}
