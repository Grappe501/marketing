const clusters = [
  { label: "Command", cx: 42, cy: 32, fill: "rgba(196,92,42,0.35)" },
  { label: "Comms", cx: 118, cy: 22, fill: "rgba(122,162,247,0.35)" },
  { label: "Money", cx: 168, cy: 58, fill: "rgba(212,167,86,0.35)" },
  { label: "Field", cx: 88, cy: 78, fill: "rgba(91,211,154,0.3)" },
  { label: "Gov", cx: 38, cy: 96, fill: "rgba(196,92,42,0.25)" },
];

const edges = [
  [0, 1],
  [1, 2],
  [0, 3],
  [3, 4],
  [2, 3],
];

export function FeatureConstellation() {
  return (
    <svg viewBox="0 0 200 118" width="100%" height="150" role="img" aria-label="Abstract capability clusters connected across lanes">
      <defs>
        <filter id="rd-glow-constellation" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.2" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {edges.map(([a, b], i) => {
        const A = clusters[a]!;
        const B = clusters[b]!;
        return (
          <line
            key={`e-${i}`}
            x1={A.cx}
            y1={A.cy}
            x2={B.cx}
            y2={B.cy}
            stroke="rgba(196,92,42,0.35)"
            strokeWidth="1.2"
            filter="url(#rd-glow-constellation)"
          />
        );
      })}
      {clusters.map((c) => (
        <g key={c.label}>
          <circle cx={c.cx} cy={c.cy} r={8} fill="rgba(244,241,234,0.08)" stroke={c.fill} strokeWidth="1.4" />
          <text x={c.cx} y={c.cy + 28} textAnchor="middle" fill="#9aa3b2" fontSize="8" fontFamily="system-ui">
            {c.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
