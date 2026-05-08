type Card = { title: string; status: string; detail: string };

export function CommandGrid({ cards }: { cards: Card[] }) {
  return (
    <div
      style={{
        display: "grid",
        gap: "0.75rem",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      }}
    >
      {cards.map((c) => (
        <div key={c.title} className="rd-panel" style={{ padding: "1rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: "0.5rem" }}>
            <p style={{ margin: 0, fontWeight: 650 }}>{c.title}</p>
            <span className="rd-pill" style={{ alignSelf: "flex-start" }}>
              {c.status}
            </span>
          </div>
          <p className="rd-muted" style={{ margin: "0.65rem 0 0", fontSize: "0.9rem" }}>
            {c.detail}
          </p>
        </div>
      ))}
    </div>
  );
}
