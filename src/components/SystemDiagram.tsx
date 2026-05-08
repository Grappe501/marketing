export function SystemDiagram() {
  return (
    <div className="rd-panel" style={{ padding: "1.25rem" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          gap: "0.75rem",
          alignItems: "center",
        }}
      >
        <div className="rd-panel" style={{ padding: "0.85rem", borderRadius: "var(--radius-lg)" }}>
          <p style={{ margin: 0, fontWeight: 650 }}>Data + facts</p>
          <p className="rd-muted" style={{ margin: "0.35rem 0 0", fontSize: "0.85rem" }}>
            Source-aware records and governed segmentation.
          </p>
        </div>
        <div aria-hidden style={{ textAlign: "center", color: "var(--muted)", fontFamily: "var(--font-mono)", fontSize: "0.85rem" }}>
          ⇄
        </div>
        <div className="rd-panel" style={{ padding: "0.85rem", borderRadius: "var(--radius-lg)" }}>
          <p style={{ margin: 0, fontWeight: 650 }}>Governance</p>
          <p className="rd-muted" style={{ margin: "0.35rem 0 0", fontSize: "0.85rem" }}>
            Approvals, audit trails, suppression posture.
          </p>
        </div>
      </div>
      <div
        className="rd-panel"
        style={{ marginTop: "0.75rem", padding: "0.95rem", borderRadius: "var(--radius-lg)" }}
      >
        <p style={{ margin: 0, fontWeight: 650 }}>Campaign Cockpit</p>
        <p className="rd-muted" style={{ margin: "0.35rem 0 0", fontSize: "0.85rem" }}>
          Readiness, blockers, exceptions, and next actions across lanes—operator guided, integration-ready where configured.
        </p>
      </div>
      <div
        style={{
          marginTop: "0.75rem",
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gap: "0.5rem",
        }}
      >
        {["Outreach", "Fundraising", "Field"].map((label) => (
          <div key={label} className="rd-panel" style={{ padding: "0.75rem", borderRadius: 12, border: "1px solid rgba(196,92,42,0.25)" }}>
            <p style={{ margin: 0, fontWeight: 650, fontSize: "0.9rem" }}>{label}</p>
            <p className="rd-muted" style={{ margin: "0.35rem 0 0", fontSize: "0.78rem" }}>
              Execution lane
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
