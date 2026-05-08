const PHASES = ["Map", "Load", "Align", "Govern", "Train", "Rhythm", "Expand"] as const;

/** Horizontal adoption sequence — illustration only. */
export function AdoptionPhasesMock() {
  return (
    <div className="rd-adopt-mock" role="img" aria-label="Illustration: phased adoption timeline">
      <div className="rd-adopt-mock-track">
        {PHASES.map((p, i) => (
          <div key={p} className="rd-adopt-mock-step">
            <span className="rd-adopt-mock-badge">{p}</span>
            {i < PHASES.length - 1 ? <span className="rd-adopt-mock-line" aria-hidden="true" /> : null}
          </div>
        ))}
      </div>
      <p className="rd-adopt-mock-note">Operator sequencing — calendar dates depend on your team and data posture.</p>
    </div>
  );
}
