/**
 * Platform vision page illustrations — not financial advice, live analytics, or binding pricing.
 */

/** Simon Sinek–style Golden Circle — belief → mechanism → artifacts */
export function GoldenCircleMock() {
  return (
    <svg viewBox="0 0 360 360" className="rd-pv-golden-svg" role="img" aria-label="Diagram: Golden Circle with Why at center, How in middle ring, What on outer ring">
      <defs>
        <radialGradient id="rd-pv-g-why" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(212,101,46,0.35)" />
          <stop offset="100%" stopColor="rgba(18,22,30,0.95)" />
        </radialGradient>
        <linearGradient id="rd-pv-g-how" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(122,162,247,0.2)" />
          <stop offset="100%" stopColor="rgba(26,32,46,0.9)" />
        </linearGradient>
      </defs>
      <circle cx="180" cy="180" r="165" fill="url(#rd-pv-g-how)" stroke="rgba(250,249,247,0.12)" strokeWidth="1.5" />
      <circle cx="180" cy="180" r="108" fill="rgba(26,32,46,0.88)" stroke="rgba(232,207,136,0.25)" strokeWidth="1.5" />
      <circle cx="180" cy="180" r="52" fill="url(#rd-pv-g-why)" stroke="rgba(212,101,46,0.55)" strokeWidth="2" />
      <text x="180" y="168" textAnchor="middle" fill="#faf9f7" fontSize="11" fontWeight="700" letterSpacing="0.2em">
        WHY
      </text>
      <text x="180" y="188" textAnchor="middle" fill="rgba(250,249,247,0.75)" fontSize="8.5" fontWeight="600">
        Belief
      </text>
      <text x="180" y="118" textAnchor="middle" fill="rgba(232,207,136,0.9)" fontSize="10" fontWeight="700" letterSpacing="0.18em">
        HOW
      </text>
      <text x="180" y="132" textAnchor="middle" fill="rgba(127,138,160,0.95)" fontSize="7.5">
        Mechanism
      </text>
      <text x="180" y="258" textAnchor="middle" fill="rgba(250,249,247,0.55)" fontSize="10" fontWeight="700" letterSpacing="0.16em">
        WHAT
      </text>
      <text x="180" y="274" textAnchor="middle" fill="rgba(127,138,160,0.9)" fontSize="7.5">
        Product & lanes
      </text>
      <text x="52" y="182" textAnchor="middle" fill="rgba(127,138,160,0.75)" fontSize="7" transform="rotate(-58 52 182)">
        fewer surprises
      </text>
      <text x="308" y="182" textAnchor="middle" fill="rgba(127,138,160,0.75)" fontSize="7" transform="rotate(58 308 182)">
        governed speed
      </text>
    </svg>
  );
}

const CHAOS_VS_GOVERNED = [
  { label: "Decision latency", frag: 88, gov: 38 },
  { label: "Rework / thrash hours", frag: 92, gov: 35 },
  { label: "Message safety posture", frag: 45, gov: 86 },
  { label: "CFO / treasurer confidence", frag: 40, gov: 88 },
] as const;

/** Comparative index bars — illustrative scores only */
export function FragmentedVsGovernedBarsMock() {
  return (
    <div className="rd-pv-compare" role="img" aria-label="Illustration: comparative bars for fragmented stack versus governed operating system on four dimensions">
      <div className="rd-pv-compare-legend">
        <span className="rd-pv-compare-lg rd-pv-compare-lg--bad">Fragmented tools</span>
        <span className="rd-pv-compare-lg rd-pv-compare-lg--ok">Governed OS posture</span>
      </div>
      {CHAOS_VS_GOVERNED.map((row) => (
        <div key={row.label} className="rd-pv-compare-row">
          <div className="rd-pv-compare-label">{row.label}</div>
          <div className="rd-pv-compare-bars">
            <div className="rd-pv-compare-track">
              <div className="rd-pv-compare-fill rd-pv-compare-fill--bad" style={{ width: `${row.frag}%` }} />
            </div>
            <div className="rd-pv-compare-track">
              <div className="rd-pv-compare-fill rd-pv-compare-fill--ok" style={{ width: `${row.gov}%` }} />
            </div>
          </div>
        </div>
      ))}
      <p className="rd-pv-compare-note">Index-style illustration — not measured from your campaign.</p>
    </div>
  );
}

function pentagonRing(cx: number, cy: number, radius: number, n = 5) {
  return Array.from({ length: n }, (_, i) => {
    const a = (-90 + (360 / n) * i) * (Math.PI / 180);
    return `${cx + radius * Math.cos(a)},${cy + radius * Math.sin(a)}`;
  }).join(" ");
}

function pentagonData(cx: number, cy: number, values: number[], maxR: number, n = 5) {
  return values
    .map((v, i) => {
      const a = (-90 + (360 / n) * i) * (Math.PI / 180);
      const r = (v / 100) * maxR;
      return `${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`;
    })
    .join(" ");
}

/** Pentagon radar: candidate-facing outcomes — before vs after posture */
export function CandidateOutcomeRadarMock() {
  const cx = 100;
  const cy = 92;
  const maxR = 72;
  const n = 5;
  const before = pentagonData(cx, cy, [55, 48, 42, 50, 45], maxR, n);
  const after = pentagonData(cx, cy, [82, 78, 88, 85, 80], maxR, n);
  const axes = ["Message", "Money truth", "Calendar", "Field doors", "Crisis calm"];

  return (
    <div className="rd-pv-radar-wrap">
      <svg viewBox="0 0 200 200" className="rd-pv-radar-svg" role="img" aria-label="Illustration: radar chart comparing campaign posture before and after a governed operating system">
        {[20, 40, 60, 80].map((r) => (
          <polygon key={r} points={pentagonRing(cx, cy, r, n)} fill="none" stroke="rgba(250,249,247,0.06)" strokeWidth="1" />
        ))}
        {axes.map((_, i) => {
          const a = (-90 + (360 / n) * i) * (Math.PI / 180);
          return (
            <line
              key={i}
              x1={cx}
              y1={cy}
              x2={cx + maxR * Math.cos(a)}
              y2={cy + maxR * Math.sin(a)}
              stroke="rgba(250,249,247,0.08)"
              strokeWidth="1"
            />
          );
        })}
        <polygon points={before} fill="rgba(240,102,102,0.12)" stroke="rgba(240,102,102,0.55)" strokeWidth="1.5" />
        <polygon points={after} fill="rgba(94,224,168,0.14)" stroke="rgba(94,224,168,0.75)" strokeWidth="1.8" />
        <text x="100" y="196" textAnchor="middle" fill="rgba(127,138,160,0.9)" fontSize="6.5">
          red = fragmented · green = governed (illustrative)
        </text>
      </svg>
      <ul className="rd-pv-radar-axes">
        {axes.map((a) => (
          <li key={a}>{a}</li>
        ))}
      </ul>
    </div>
  );
}

function Spark() {
  return (
    <div className="rd-pv-spark" aria-hidden="true">
      {[40, 65, 52, 78, 70, 88, 82, 95].map((h, i) => (
        <span key={i} className="rd-pv-spark-bar" style={{ height: `${h}%` }} />
      ))}
    </div>
  );
}

/** Board-level scorecard — qualitative trend strips */
export function BoardReadinessScorecardMock() {
  const rows = [
    { k: "Readiness objects", v: "12 lanes", sub: "Named, not implied", trend: "up" as const },
    { k: "Governance coverage", v: "High-risk paths", sub: "Approvals + receipts", trend: "up" as const },
    { k: "Exception queue depth", v: "Ranked", sub: "Owners attachable", trend: "flat" as const },
  ];
  return (
    <div className="rd-pv-board" role="img" aria-label="Illustration: executive readiness scorecard with trend sparks">
      {rows.map((r) => (
        <div key={r.k} className="rd-pv-board-row">
          <div>
            <p className="rd-pv-board-k">{r.k}</p>
            <p className="rd-pv-board-v">{r.v}</p>
            <p className="rd-pv-board-s">{r.sub}</p>
          </div>
          <div className="rd-pv-board-spark-wrap">
            <Spark />
            <span className={`rd-pv-board-tag rd-pv-board-tag--${r.trend}`}>
              {r.trend === "up" ? "↑ posture" : r.trend === "flat" ? "→ steady" : "—"}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

/** Illustrative engagement shape — not a quote or contract */
export function EngagementShapeMock() {
  return (
    <div className="rd-pv-engage" role="img" aria-label="Illustration: example shape of program setup fee plus monthly operating fee over time">
      <div className="rd-pv-engage-chart">
        <div className="rd-pv-engage-bar rd-pv-engage-bar--setup">
          <div>
            <span>Program setup</span>
            <span className="rd-pv-engage-sub">Illustrative anchor — not a quote</span>
          </div>
          <strong>~$25k</strong>
        </div>
        <p className="rd-pv-engage-rail-label">Operating rhythm — illustrative monthly cadence</p>
        <div className="rd-pv-engage-rail">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="rd-pv-engage-month" title="Month">
              <span className="rd-pv-engage-month-cap" />
              <span className="rd-pv-engage-month-label">{i + 1}</span>
            </div>
          ))}
        </div>
      </div>
      <p className="rd-pv-engage-caption">
        Example mental model: material setup plus roughly <strong>~$5k / month</strong> operating rhythm (each bar is decorative, not invoiced time) — <strong>not a price list or offer</strong>. Real economics depend on scope, data, integrations, and training.
      </p>
    </div>
  );
}

/** Simple line chart: confidence vs weeks — schematic */
export function ConfidenceTrajectoryMock() {
  const w = 320;
  const h = 120;
  const pathGov =
    "M 20 95 Q 80 88, 140 72 T 300 38";
  const pathFrag =
    "M 20 88 Q 100 82, 180 78 T 300 74";
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="rd-pv-line-svg" role="img" aria-label="Illustration: confidence over time for governed rollout versus fragmented tools">
      <rect x="0" y="0" width={w} height={h} fill="rgba(0,0,0,0.2)" rx="10" />
      <text x="16" y="22" fill="rgba(127,138,160,0.95)" fontSize="9" fontWeight="650">
        Time → board confidence (schematic)
      </text>
      {[40, 70, 100].map((y) => (
        <line key={y} x1="16" y1={y} x2={w - 12} y2={y} stroke="rgba(250,249,247,0.05)" strokeWidth="1" />
      ))}
      <path d={pathFrag} fill="none" stroke="rgba(240,102,102,0.65)" strokeWidth="2.2" strokeLinecap="round" />
      <path d={pathGov} fill="none" stroke="rgba(94,224,168,0.85)" strokeWidth="2.5" strokeLinecap="round" />
      <text x="230" y="100" fill="rgba(240,102,102,0.85)" fontSize="8">
        fragmented
      </text>
      <text x="210" y="48" fill="rgba(94,224,168,0.9)" fontSize="8">
        governed OS
      </text>
    </svg>
  );
}
