const STEPS = ["Audience", "Sync", "Message", "Packet", "Preflight", "Test", "Final", "SEND APPROVED"] as const;

export function EmailLaunchMock() {
  return (
    <div className="rd-email-mock" role="img" aria-label="Illustration: governed email launch sequence from audience through operator-approved send concept">
      <div className="rd-email-mock-track">
        {STEPS.map((s, i) => (
          <div key={s} className="rd-email-mock-step">
            <span className={i === STEPS.length - 1 ? "rd-email-mock-badge rd-email-mock-badge--final" : "rd-email-mock-badge"}>{s}</span>
            {i < STEPS.length - 1 ? <span className="rd-email-mock-arrow" aria-hidden="true">→</span> : null}
          </div>
        ))}
      </div>
      <p className="rd-email-mock-note">Visual concept only — operator confirmation and provider rules still govern real sends.</p>
    </div>
  );
}
