const STEPS = [
  { role: "Author", state: "done" },
  { role: "Research", state: "done" },
  { role: "Compliance", state: "active" },
  { role: "Principal", state: "wait" },
] as const;

/** Multi-step approval chain — illustration only. */
export function ApprovalChainMock() {
  return (
    <div className="rd-approval-mock" role="img" aria-label="Illustration: multi-role approval chain">
      <div className="rd-approval-mock-track">
        {STEPS.map((s, i) => (
          <div key={s.role} className="rd-approval-mock-step">
            <div className={`rd-approval-mock-node rd-approval-mock-node--${s.state}`}>
              <span className="rd-approval-mock-role">{s.role}</span>
              <span className="rd-approval-mock-state">{s.state === "done" ? "✓" : s.state === "active" ? "●" : "…"}</span>
            </div>
            {i < STEPS.length - 1 ? <span className="rd-approval-mock-arrow" aria-hidden="true" /> : null}
          </div>
        ))}
      </div>
      <p className="rd-approval-mock-note">High-risk path — not every object uses four roles in your deployment.</p>
    </div>
  );
}
