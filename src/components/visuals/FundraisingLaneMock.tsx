const STEPS = ["Donor", "Call time", "Pledge", "Follow-up", "Finance review"];

export function FundraisingLaneMock() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.25rem", alignItems: "center", justifyContent: "center" }}>
      {STEPS.map((s, i) => (
        <div key={s} style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
          <span style={{ padding: "0.4rem 0.6rem", borderRadius: 10, border: "1px solid rgba(196,92,42,0.4)", fontSize: "0.75rem", background: "rgba(196,92,42,0.08)" }}>{s}</span>
          {i < STEPS.length - 1 ? <span style={{ color: "var(--muted)" }}>→</span> : null}
        </div>
      ))}
    </div>
  );
}
