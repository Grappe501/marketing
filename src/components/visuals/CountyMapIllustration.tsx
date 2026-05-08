/** Illustrative county tile map — not geographic survey precision. */
export function CountyMapIllustration() {
  const cols = 11;
  const rows = 7;
  const tiles = Array.from({ length: cols * rows }, (_, i) => {
    const r = (i * 13) % 97;
    const heat = r > 70 ? "rgba(196,92,42,0.55)" : r > 45 ? "rgba(196,92,42,0.22)" : "rgba(244,241,234,0.06)";
    return heat;
  });
  return (
    <svg viewBox="0 0 240 160" width="100%" height="220" role="img" aria-label="Illustrative map of county tiles showing attention heat, not precise geography">
      <text x="4" y="14" fill="#9aa3b2" fontSize="9" fontFamily="system-ui">
        Illustrative statewide attention surface
      </text>
      <text x="4" y="152" fill="#9aa3b2" fontSize="8" fontFamily="system-ui">
        Warmer tiles = higher operator attention this week (schematic)
      </text>
      {tiles.map((fill, i) => {
        const x = 4 + (i % cols) * 20;
        const y = 22 + Math.floor(i / cols) * 16;
        return <rect key={i} x={x} y={y} width="18" height="13" rx="2" fill={fill} stroke="rgba(244,241,234,0.08)" />;
      })}
    </svg>
  );
}
