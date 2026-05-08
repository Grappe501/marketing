export function SignalPanel({
  lines,
}: {
  lines: { label: string; value: string; tone?: "ok" | "warn" | "crit" }[];
}) {
  const toneColor = (t: NonNullable<(typeof lines)[number]["tone"]>) =>
    t === "ok" ? "var(--success)" : t === "warn" ? "var(--gold)" : "var(--danger)";

  return (
    <div className="rd-panel" style={{ padding: "1rem", fontFamily: "var(--font-mono)", fontSize: "0.85rem" }}>
      {lines.map((l) => (
        <div
          key={l.label}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: "0.75rem",
            padding: "0.55rem 0",
            borderBottom: "1px solid rgba(244,241,234,0.08)",
          }}
        >
          <span style={{ color: "var(--muted)" }}>{l.label}</span>
          <span style={{ color: l.tone ? toneColor(l.tone) : "var(--text)", textAlign: "right" }}>{l.value}</span>
        </div>
      ))}
    </div>
  );
}
