/**
 * Stylized Arkansas-ish county heat map — schematic only, not survey geography.
 * Counties are abstract regions inside a simplified state outline.
 */
const COUNTIES = [
  { id: "nw", d: "M 42 28 L 118 22 L 132 78 L 88 92 L 36 72 Z", fill: "rgba(212,101,46,0.55)" },
  { id: "ne", d: "M 120 24 L 198 38 L 188 96 L 134 80 Z", fill: "rgba(212,101,46,0.28)" },
  { id: "nc", d: "M 90 94 L 186 100 L 172 148 L 96 142 Z", fill: "rgba(122,162,247,0.35)" },
  { id: "ct", d: "M 98 146 L 168 152 L 158 198 L 92 192 Z", fill: "rgba(240,102,102,0.42)" },
  { id: "sw", d: "M 34 76 L 86 96 L 78 168 L 28 148 Z", fill: "rgba(212,101,46,0.38)" },
  { id: "sc", d: "M 82 196 L 154 202 L 142 252 L 76 244 Z", fill: "rgba(94,224,168,0.22)" },
  { id: "se", d: "M 156 200 L 210 188 L 218 248 L 148 258 Z", fill: "rgba(212,101,46,0.48)" },
  { id: "delta", d: "M 118 256 L 188 262 L 172 312 L 108 306 Z", fill: "rgba(122,162,247,0.28)" },
  { id: "river", d: "M 52 152 L 94 198 L 72 238 L 38 198 Z", fill: "rgba(250,249,247,0.12)" },
] as const;

/** Rough state rim for visual framing only */
const STATE_RIM =
  "M 24 48 Q 32 8 108 14 Q 198 18 214 72 Q 228 120 206 188 Q 198 248 168 288 Q 132 318 88 308 Q 44 292 28 240 Q 16 168 22 96 Z";

export function ArkansasCountyHeatMock() {
  return (
    <div className="rd-ar-heat" role="img" aria-label="Illustration: stylized Arkansas-shaped region with schematic county heat, not official geography">
      <svg viewBox="0 0 240 340" width="100%" height="min(360px, 52vw)" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="rd-ar-rim" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(122,162,247,0.25)" />
            <stop offset="100%" stopColor="rgba(212,101,46,0.15)" />
          </linearGradient>
        </defs>
        <text x="8" y="18" fill="#7f8aa0" fontSize="10" fontFamily="system-ui">
          Schematic statewide county heat (mock)
        </text>
        <path d={STATE_RIM} fill="url(#rd-ar-rim)" stroke="rgba(250,249,247,0.14)" strokeWidth="1.5" />
        {COUNTIES.map((c) => (
          <path key={c.id} d={c.d} fill={c.fill} stroke="rgba(9,11,16,0.35)" strokeWidth="1" />
        ))}
        <text x="8" y="328" fill="#7f8aa0" fontSize="8" fontFamily="system-ui">
          Warmer = higher operator attention this week — not voter file or certified map data
        </text>
      </svg>
    </div>
  );
}
