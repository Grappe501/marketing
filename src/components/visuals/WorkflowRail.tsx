const STEPS = ["Intake", "Review", "Approve", "Execute", "Record"];

export function WorkflowRail() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem", alignItems: "center" }}>
      {STEPS.map((s, i) => (
        <div key={s} style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
          <span className="rd-pill" style={{ fontSize: "0.78rem" }}>
            {s}
          </span>
          {i < STEPS.length - 1 ? <span style={{ color: "var(--muted)" }}>→</span> : null}
        </div>
      ))}
    </div>
  );
}
