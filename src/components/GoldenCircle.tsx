export function GoldenCircle({
  why,
  how,
  what,
}: {
  why: { title: string; body: string };
  how: { title: string; body: string };
  what: { title: string; body: string };
}) {
  const items = [
    { k: "Why", ...why, accent: "var(--accent)" },
    { k: "How", ...how, accent: "var(--gold)" },
    { k: "What", ...what, accent: "rgba(122, 162, 247, 0.9)" },
  ] as const;

  return (
    <div
      style={{
        display: "grid",
        gap: "1rem",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
      }}
    >
      {items.map((item) => (
        <div key={item.k} className="rd-panel" style={{ padding: "1.1rem", borderTop: `3px solid ${item.accent}` }}>
          <p className="rd-eyebrow" style={{ letterSpacing: "0.18em" }}>
            {item.k}
          </p>
          <p style={{ margin: "0.35rem 0 0.5rem", fontWeight: 650 }}>{item.title}</p>
          <p className="rd-muted" style={{ margin: 0, fontSize: "0.92rem" }}>
            {item.body}
          </p>
        </div>
      ))}
    </div>
  );
}
