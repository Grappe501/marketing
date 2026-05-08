/**
 * Story / “why OS” page — fictional data + briefing screens for illustration only.
 * Not voter file, not official geography, not survey results.
 */

const BRIEF_ROWS = [
  { region: "River City (sample)", leader: "Mayor coalition · stable", issues: "Housing cost ↑", field: "Captains 6/9", fresh: "T−4d", src: "Field + local press" },
  { region: "North Delta (sample)", leader: "Sheriff race cross-pressure", issues: "Ag water tension", field: "Doors −18% vs plan", fresh: "Stale 11d", src: "County chair notes" },
  { region: "Metro East (sample)", leader: "Surrogate line pending", issues: "School bond noise", field: "GOTV pack v2 draft", fresh: "T−1d", src: "Intel packet 14" },
] as const;

/** County briefing “fact sheet” — schematic table, not a live briefing product */
export function CountyBriefingFactSheetMock() {
  return (
    <div className="rd-story-brief" role="img" aria-label="Illustration: fictional county briefing fact table with freshness and sources">
      <header className="rd-story-brief-head">
        <span className="rd-story-brief-title">County briefing — HQ snapshot</span>
        <span className="rd-story-brief-pill">read-only posture</span>
      </header>
      <div className="rd-story-brief-table">
        <div className="rd-story-brief-row rd-story-brief-row--head" aria-hidden="true">
          <span>Region</span>
          <span>Leader / posture</span>
          <span>Issue signal</span>
          <span>Field fact</span>
          <span>Freshness</span>
          <span>Source object</span>
        </div>
        {BRIEF_ROWS.map((r) => (
          <div key={r.region} className="rd-story-brief-row">
            <span className="rd-story-brief-cell">{r.region}</span>
            <span className="rd-story-brief-cell">{r.leader}</span>
            <span className="rd-story-brief-cell">{r.issues}</span>
            <span className="rd-story-brief-cell">{r.field}</span>
            <span
              className={`rd-story-brief-cell rd-story-brief-fresh${r.fresh.startsWith("Stale") ? " rd-story-brief-fresh--bad" : ""}`}
            >
              {r.fresh}
            </span>
            <span className="rd-story-brief-cell rd-story-brief-src">{r.src}</span>
          </div>
        ))}
      </div>
      <p className="rd-story-brief-note">Fictional regions and numbers — demonstrates the kind of object row a cockpit can surface when counties are first-class.</p>
    </div>
  );
}

/** Aggregate “facts strip” — invented totals, list hygiene framing */
export function DataFactsStripMock() {
  return (
    <div className="rd-story-facts" role="img" aria-label="Illustration: schematic aggregate data facts strip for a statewide program">
      <div className="rd-story-facts-row">
        <div>
          <p className="rd-story-facts-k">Audience universe</p>
          <p className="rd-story-facts-v">482k</p>
          <p className="rd-story-facts-s">Explainable segment tree (mock)</p>
        </div>
        <div>
          <p className="rd-story-facts-k">Suppressed / held</p>
          <p className="rd-story-facts-v">14.2k</p>
          <p className="rd-story-facts-s">Consent + bounce + county holds (mock)</p>
        </div>
        <div>
          <p className="rd-story-facts-k">Source freshness</p>
          <p className="rd-story-facts-v">62%</p>
          <p className="rd-story-facts-s">Files newer than 21d (mock)</p>
        </div>
        <div>
          <p className="rd-story-facts-k">Briefings overdue</p>
          <p className="rd-story-facts-v">7</p>
          <p className="rd-story-facts-s">Counties past SLA (mock)</p>
        </div>
      </div>
    </div>
  );
}
