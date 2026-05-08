/** Marketing build posture — illustration only. */
export function StaticBuildGraphicMock() {
  return (
    <div className="rd-static-graphic" role="img" aria-label="Illustration: static marketing build boundaries">
      <svg viewBox="0 0 420 140" width="100%" height="160" preserveAspectRatio="xMidYMid meet">
        <rect x="8" y="12" width="404" height="116" rx="12" fill="rgba(20,26,38,0.9)" stroke="rgba(250,249,247,0.12)" />
        <text x="24" y="38" fill="#faf9f7" fontSize="12" fontFamily="system-ui" fontWeight="600">
          This walkthrough page (static build)
        </text>
        <g fontFamily="system-ui" fontSize="9" fill="#7f8aa0">
          <rect x="24" y="52" width="120" height="26" rx="6" fill="rgba(240,102,102,0.12)" stroke="rgba(240,102,102,0.35)" />
          <text x="34" y="69">
            No analytics / trackers
          </text>
          <rect x="154" y="52" width="120" height="26" rx="6" fill="rgba(240,102,102,0.12)" stroke="rgba(240,102,102,0.35)" />
          <text x="164" y="69">
            No third-party embeds
          </text>
          <rect x="284" y="52" width="112" height="26" rx="6" fill="rgba(240,102,102,0.12)" stroke="rgba(240,102,102,0.35)" />
          <text x="294" y="69">
            Form submit off
          </text>
        </g>
        <rect x="24" y="90" width="372" height="28" rx="6" fill="rgba(94,224,168,0.1)" stroke="rgba(94,224,168,0.35)" />
        <text x="34" y="108" fill="#b8f5d8" fontSize="9" fontFamily="system-ui">
          Graphics + copy are narrative mockups — not live product telemetry or voter data
        </text>
      </svg>
    </div>
  );
}
