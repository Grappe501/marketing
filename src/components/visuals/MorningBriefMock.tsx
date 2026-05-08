const LINES = [
  { time: "06:40", tag: "EXCEPTION", body: "County briefing drift — 3 counties past SLA" },
  { time: "06:52", tag: "GATE", body: "Volunteer send — suppression diff awaiting second sign-off" },
  { time: "07:05", tag: "WINDOW", body: "Filing prep packet — 2 vendor gaps flagged for finance" },
  { time: "07:18", tag: "QUEUE", body: "Calendar — 4 requests; 1 conflicts with tour hold" },
] as const;

function tagClass(tag: (typeof LINES)[number]["tag"]) {
  if (tag === "EXCEPTION") return "rd-brief-tag rd-brief-tag--exc";
  if (tag === "GATE") return "rd-brief-tag rd-brief-tag--gate";
  if (tag === "WINDOW") return "rd-brief-tag rd-brief-tag--win";
  return "rd-brief-tag rd-brief-tag--queue";
}

/** Monday brief strip — illustration only. */
export function MorningBriefMock() {
  return (
    <div className="rd-brief-mock" role="img" aria-label="Illustration: morning command brief line items">
      <div className="rd-brief-mock-head" aria-hidden="true">
        <span>Morning brief</span>
        <span>Operator view</span>
      </div>
      <ul className="rd-brief-mock-list">
        {LINES.map((l) => (
          <li key={l.time} className="rd-brief-mock-row">
            <span className="rd-brief-mock-time">{l.time}</span>
            <span className={tagClass(l.tag)}>{l.tag}</span>
            <span className="rd-brief-mock-body">{l.body}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
