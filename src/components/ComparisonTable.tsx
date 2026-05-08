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
    <div className="rd-compare-grid">
      <div className="rd-panel rd-compare-panel rd-compare-panel--before" style={{ padding: "1.1rem" }}>
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
      <div className="rd-panel rd-panel-glow rd-compare-panel rd-compare-panel--after" style={{ padding: "1.1rem" }}>
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
