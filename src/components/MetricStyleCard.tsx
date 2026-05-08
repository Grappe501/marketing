export function MetricStyleCard({ label, value, hint }: { label: string; value: string; hint?: string }) {
  return (
    <div className="rd-panel rd-panel-glow rd-visual-surface" style={{ padding: "1rem" }}>
      <p className="rd-muted" style={{ margin: 0, fontSize: "0.78rem", letterSpacing: "0.14em", textTransform: "uppercase" }}>
        {label}
      </p>
      <p style={{ margin: "0.35rem 0 0", fontSize: "1.65rem", fontWeight: 700, fontFamily: "var(--font-mono)" }}>{value}</p>
      {hint ? (
        <p className="rd-muted" style={{ margin: "0.45rem 0 0", fontSize: "0.85rem" }}>
          {hint}
        </p>
      ) : null}
    </div>
  );
}
