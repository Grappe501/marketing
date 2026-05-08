/**
 * Vision-board style cockpit mocks for marketing — not screenshots of production software.
 * Inspired by operator-manual language: command floor, lane posture, readiness vs blocked,
 * ranked next actions, principal queue, overnight deltas, route surfaces (map/readiness/Daily).
 */

/** Disconnected tools — “the break” story */
export function CockpitFragmentedMock() {
  return (
    <div className="rd-cv-frag" role="img" aria-label="Illustration: fragmented tools instead of one command surface">
      <div className="rd-cv-frag-win" style={{ transform: "rotate(-2deg)" }}>
        <span>Inbox A</span>
      </div>
      <div className="rd-cv-frag-win" style={{ transform: "rotate(1.5deg)", marginTop: "0.5rem" }}>
        <span>Sheet B</span>
      </div>
      <div className="rd-cv-frag-win" style={{ transform: "rotate(-1deg)", marginTop: "0.35rem" }}>
        <span>Deck C</span>
      </div>
      <div className="rd-cv-frag-win" style={{ transform: "rotate(2deg)", marginTop: "0.45rem" }}>
        <span>Calendar D</span>
      </div>
      <p className="rd-cv-frag-note">Same race — no shared object model — no cockpit.</p>
    </div>
  );
}

/** Principal-facing three-up: ready / blocked / needs authority */
export function CockpitLeadershipRowMock() {
  return (
    <div className="rd-cv-lead" role="img" aria-label="Illustration: executive readiness row with ready, blocked, and principal queue">
      <div className="rd-cv-lead-card rd-cv-lead-card--ok">
        <span className="rd-cv-lead-k">Ready</span>
        <span className="rd-cv-lead-v">6 gates</span>
        <span className="rd-cv-lead-s">Launches + sends clear through Friday</span>
      </div>
      <div className="rd-cv-lead-card rd-cv-lead-card--bad">
        <span className="rd-cv-lead-k">Blocked</span>
        <span className="rd-cv-lead-v">3 objects</span>
        <span className="rd-cv-lead-s">Suppression · vendor gap · calendar conflict</span>
      </div>
      <div className="rd-cv-lead-card rd-cv-lead-card--prin">
        <span className="rd-cv-lead-k">Principal</span>
        <span className="rd-cv-lead-v">2 decisions</span>
        <span className="rd-cv-lead-s">Message risk + surrogate line</span>
      </div>
    </div>
  );
}

/** Full paneled command-floor vision — one coherent surface */
export function CockpitVisionBoardMock() {
  return (
    <div className="rd-cv-board" role="img" aria-label="Illustration: paneled campaign cockpit command floor with rail, readiness wall, and ranked actions">
      <header className="rd-cv-board-top">
        <span className="rd-cv-board-brand">Campaign OS</span>
        <span className="rd-cv-board-meta">Monday · 07:12 · Command floor</span>
        <span className="rd-cv-board-pill">overnight deltas ingested</span>
      </header>
      <div className="rd-cv-board-body">
        <nav className="rd-cv-board-rail" aria-hidden="true">
          <span className="rd-cv-rail-i rd-cv-rail-i--on">Cockpit</span>
          <span className="rd-cv-rail-i">Daily</span>
          <span className="rd-cv-rail-i">Map</span>
          <span className="rd-cv-rail-i">Readiness</span>
          <span className="rd-cv-rail-i">Queues</span>
          <span className="rd-cv-rail-i">Lanes</span>
        </nav>
        <div className="rd-cv-board-center">
          <p className="rd-cv-board-h">Readiness wall</p>
          <div className="rd-cv-board-grid">
            {[
              { t: "Email launch", s: "Preflight OK", st: "ok" },
              { t: "County briefing", s: "Draft drift", st: "bad" },
              { t: "Calendar", s: "3 requests", st: "warn" },
              { t: "Field / GOTV", s: "2 counties thin", st: "warn" },
              { t: "Fundraising", s: "Pledges aging", st: "warn" },
              { t: "Compliance", s: "Window open", st: "ok" },
            ].map((c) => (
              <div key={c.t} className={`rd-cv-tile rd-cv-tile--${c.st}`}>
                <span className="rd-cv-tile-t">{c.t}</span>
                <span className="rd-cv-tile-s">{c.s}</span>
              </div>
            ))}
          </div>
          <div className="rd-cv-board-strip">
            <span>Lane posture</span>
            <span className="rd-cv-strip-dot ok" />
            <span className="rd-cv-strip-dot warn" />
            <span className="rd-cv-strip-dot ok" />
            <span className="rd-cv-strip-dot risk" />
            <span className="rd-cv-strip-dot warn" />
            <span className="rd-cv-strip-dot ok" />
          </div>
        </div>
        <aside className="rd-cv-board-aside">
          <p className="rd-cv-board-h">Ranked next actions</p>
          <ol className="rd-cv-board-ol">
            <li>
              <strong>1</strong> Approve suppression diff <span>Outreach · high</span>
            </li>
            <li>
              <strong>2</strong> Publish county packet v3 <span>Comms · med</span>
            </li>
            <li>
              <strong>3</strong> Route vendor receipt gap <span>Finance · med</span>
            </li>
          </ol>
          <div className="rd-cv-board-principal">
            <span className="rd-cv-prin-label">Principal queue</span>
            <span>Message risk sign-off · surrogate packet</span>
          </div>
        </aside>
      </div>
      <footer className="rd-cv-board-foot">
        <span>Route surfaces: map · readiness · operator path — one posture object behind the tiles</span>
      </footer>
    </div>
  );
}
