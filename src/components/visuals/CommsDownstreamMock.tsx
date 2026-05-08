const ROWS = [
  { art: "Email plan stub", gate: "After public-ready", st: "ready" as const },
  { art: "SMS segment (local)", gate: "Suppression check", st: "wait" as const },
  { art: "Field captain brief", gate: "Staffing confirmed", st: "ready" as const },
  { art: "Press advisory", gate: "Principal sign-off", st: "wait" as const },
] as const;

function stClass(st: (typeof ROWS)[number]["st"]) {
  return st === "ready" ? "rd-cal-comms-st rd-cal-comms-st--ready" : "rd-cal-comms-st rd-cal-comms-st--wait";
}

/** Downstream comms artifacts tied to approved calendar truth — illustration only. */
export function CommsDownstreamMock() {
  return (
    <div className="rd-cal-comms" role="img" aria-label="Illustration: communications artifacts generated from an approved calendar event">
      <div className="rd-cal-comms-head">
        <span>Approved event</span>
        <span className="rd-cal-comms-ev">Rally — NWA · public-ready</span>
      </div>
      <div className="rd-cal-comms-table" aria-hidden="true">
        <div className="rd-cal-comms-row rd-cal-comms-row--h">
          <span>Artifact</span>
          <span>Gate</span>
          <span>Status</span>
        </div>
        {ROWS.map((r) => (
          <div key={r.art} className="rd-cal-comms-row">
            <span>{r.art}</span>
            <span className="rd-cal-comms-gate">{r.gate}</span>
            <span className={stClass(r.st)}>{r.st === "ready" ? "Unlocked" : "Held"}</span>
          </div>
        ))}
      </div>
      <p className="rd-cal-comms-note">Comms should not start from a forwarded thread — it should inherit the same object the calendar lane approved.</p>
    </div>
  );
}
