export function ComparisonTable({
  beforeTitle,
  afterTitle,
  before,
  after,
}: {
  beforeTitle: string;
  afterTitle: string;
  before: string[];
  after: string[];
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "1rem",
      }}
    >
      <div className="rd-panel" style={{ padding: "1.1rem", borderTop: "3px solid rgba(226,85,85,0.55)" }}>
        <p className="rd-eyebrow" style={{ letterSpacing: "0.16em", color: "var(--danger)" }}>
          Before
        </p>
        <h3 className="rd-h2" style={{ fontSize: "1.15rem" }}>
          {beforeTitle}
        </h3>
        <ul style={{ margin: "0.75rem 0 0", paddingLeft: "1.1rem", color: "var(--muted)" }}>
          {before.map((x) => (
            <li key={x} style={{ marginBottom: "0.45rem" }}>
              {x}
            </li>
          ))}
        </ul>
      </div>
      <div className="rd-panel rd-panel-glow" style={{ padding: "1.1rem", borderTop: "3px solid rgba(91,211,154,0.65)" }}>
        <p className="rd-eyebrow" style={{ letterSpacing: "0.16em", color: "var(--success)" }}>
          With RedDirt OS
        </p>
        <h3 className="rd-h2" style={{ fontSize: "1.15rem" }}>
          {afterTitle}
        </h3>
        <ul style={{ margin: "0.75rem 0 0", paddingLeft: "1.1rem", color: "var(--muted)" }}>
          {after.map((x) => (
            <li key={x} style={{ marginBottom: "0.45rem" }}>
              {x}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
