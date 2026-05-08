export function RiskReductionPanel({ text }: { text: string }) {
  return (
    <div className="rd-panel" style={{ padding: "1rem", borderLeft: "4px solid rgba(196,92,42,0.75)" }}>
      <p className="rd-eyebrow" style={{ letterSpacing: "0.16em", fontSize: "0.72rem" }}>
        Risk reduced
      </p>
      <p style={{ margin: "0.45rem 0 0", color: "var(--text)", fontSize: "0.98rem" }}>{text}</p>
    </div>
  );
}
