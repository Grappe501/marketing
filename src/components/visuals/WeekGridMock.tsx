const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] as const;

const CELLS: Record<number, { t: string; tone: "calm" | "hot" | "conflict" }[]> = {
  0: [{ t: "Staff call", tone: "calm" }],
  1: [{ t: "Tour hold", tone: "hot" }],
  2: [{ t: "County fair", tone: "conflict" }, { t: "Volunteer blitz", tone: "calm" }],
  3: [{ t: "Tour hold", tone: "hot" }, { t: "Press avail", tone: "calm" }],
  4: [{ t: "Fundraiser", tone: "calm" }],
  5: [{ t: "Canvass", tone: "calm" }],
  6: [],
};

function pillClass(tone: "calm" | "hot" | "conflict") {
  if (tone === "hot") return "rd-cal-week-pill rd-cal-week-pill--hot";
  if (tone === "conflict") return "rd-cal-week-pill rd-cal-week-pill--conflict";
  return "rd-cal-week-pill rd-cal-week-pill--calm";
}

/** Seven-day density + overlap hints — not a real calendar sync. */
export function WeekGridMock() {
  return (
    <div className="rd-cal-week" role="img" aria-label="Illustration: week grid with sample events and a conflict hint">
      <div className="rd-cal-week-head">
        <span>Week at a glance</span>
        <span className="rd-cal-week-flag">Wed: overlap flagged</span>
      </div>
      <div className="rd-cal-week-grid">
        {DAYS.map((d, i) => (
          <div key={d} className="rd-cal-week-col">
            <span className="rd-cal-week-day">{d}</span>
            <div className="rd-cal-week-cell">
              {(CELLS[i] ?? []).map((c) => (
                <span key={c.t} className={pillClass(c.tone)}>
                  {c.t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="rd-cal-week-note">Density is the product story: when two truths compete, the OS should surface it early—not after invites go out.</p>
    </div>
  );
}
