export function WorkflowSteps({ steps }: { steps: string[] }) {
  return (
    <ol style={{ margin: 0, padding: 0, listStyle: "none", counterReset: "step" }}>
      {steps.map((s, i) => (
        <li
          key={i}
          style={{
            counterIncrement: "step",
            display: "grid",
            gridTemplateColumns: "auto 1fr",
            gap: "0.85rem",
            marginBottom: "0.85rem",
            alignItems: "start",
          }}
        >
          <span
            aria-hidden
            style={{
              width: 34,
              height: 34,
              borderRadius: 10,
              border: "1px solid rgba(196,92,42,0.45)",
              display: "grid",
              placeItems: "center",
              fontFamily: "var(--font-mono)",
              fontSize: "0.85rem",
              color: "var(--accent-2)",
            }}
          >
            {i + 1}
          </span>
          <div className="rd-panel" style={{ padding: "0.75rem 0.9rem" }}>
            <p style={{ margin: 0, color: "var(--muted)", fontSize: "0.95rem" }}>{s}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
