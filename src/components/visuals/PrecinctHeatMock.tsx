/** Fictional county outline with schematic precinct heat — not real precinct boundaries. */

const COLS = 14;
const ROWS = 10;

function heatFor(i: number, j: number) {
  const n = (i * 17 + j * 23 + (i * j)) % 100;
  if (n > 78) return "rgba(240,102,102,0.65)";
  if (n > 52) return "rgba(212,101,46,0.45)";
  if (n > 28) return "rgba(122,162,247,0.35)";
  return "rgba(250,249,247,0.08)";
}

function inCountyShape(i: number, j: number) {
  const nx = (i + 0.5) / COLS - 0.5;
  const ny = (j + 0.5) / ROWS - 0.48;
  const r = nx * nx * 1.1 + ny * ny * 1.35;
  return r < 0.38;
}

export function PrecinctHeatMock() {
  const cells: { x: number; y: number; fill: string }[] = [];
  for (let j = 0; j < ROWS; j++) {
    for (let i = 0; i < COLS; i++) {
      if (!inCountyShape(i, j)) continue;
      cells.push({
        x: 28 + i * 13,
        y: 36 + j * 13,
        fill: heatFor(i, j),
      });
    }
  }

  return (
    <div className="rd-pc-heat" role="img" aria-label="Illustration: fictional county with schematic precinct-level heat, not real boundaries">
      <svg viewBox="0 0 240 200" width="100%" height="min(220px, 48vw)" preserveAspectRatio="xMidYMid meet">
        <text x="8" y="16" fill="#7f8aa0" fontSize="9" fontFamily="system-ui">
          Sample county — precinct attention (mock)
        </text>
        <rect x="20" y="28" width="200" height="150" rx="10" fill="rgba(12,15,22,0.5)" stroke="rgba(250,249,247,0.1)" />
        {cells.map((c, idx) => (
          <rect key={idx} x={c.x} y={c.y} width="11" height="11" rx="1.5" fill={c.fill} stroke="rgba(9,11,16,0.25)" strokeWidth="0.5" />
        ))}
        <text x="8" y="194" fill="#7f8aa0" fontSize="7.5" fontFamily="system-ui">
          Red / orange / blue tiles = schematic coverage gaps and priority — not canvassing results
        </text>
      </svg>
    </div>
  );
}
