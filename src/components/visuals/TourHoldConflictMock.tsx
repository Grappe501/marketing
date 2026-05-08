/** Principal tour block vs local event pressure — schematic overlap story. */
export function TourHoldConflictMock() {
  return (
    <div className="rd-cal-tour" role="img" aria-label="Illustration: principal tour travel block overlapping a county event window">
      <div className="rd-cal-tour-row">
        <span className="rd-cal-tour-label">Principal travel</span>
        <div className="rd-cal-tour-track" aria-hidden="true">
          <span className="rd-cal-tour-bar rd-cal-tour-bar--principal" style={{ left: "8%", width: "55%" }} />
        </div>
        <span className="rd-cal-tour-meta">Tue 06:00 → Thu 20:00</span>
      </div>
      <div className="rd-cal-tour-row">
        <span className="rd-cal-tour-label">County partner push</span>
        <div className="rd-cal-tour-track" aria-hidden="true">
          <span className="rd-cal-tour-bar rd-cal-tour-bar--local" style={{ left: "38%", width: "22%" }} />
        </div>
        <span className="rd-cal-tour-meta">Wed daypart</span>
      </div>
      <p className="rd-cal-tour-resolve">
        <strong>Resolution (example):</strong> shift county push to Tue AM surrogate hit · keep tour hold intact · regenerate comms stub v2.
      </p>
      <p className="rd-cal-tour-note">Tour planning is not vanity — it is collision detection for the most expensive mistakes.</p>
    </div>
  );
}
