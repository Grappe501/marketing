export function CampaignStackComparison() {
  return (
    <svg viewBox="0 0 420 160" width="100%" height="200" role="img" aria-label="Illustration: scattered tools versus unified cockpit layer">
      <text x="20" y="28" fill="#9aa3b2" fontSize="11" fontFamily="system-ui">
        Scattered stack
      </text>
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={i} x={20 + i * 34} y={40 + (i % 2) * 16} width="28" height="20" rx="4" fill="rgba(226,85,85,0.18)" stroke="rgba(226,85,85,0.5)" />
      ))}
      <text x="20" y="118" fill="#e25555" fontSize="9" fontFamily="system-ui">
        Drift · duplicate lists · late surprises
      </text>
      <text x="240" y="28" fill="#9aa3b2" fontSize="11" fontFamily="system-ui">
        RedDirt OS layer
      </text>
      <rect x="240" y="42" width="160" height="72" rx="12" fill="rgba(196,92,42,0.14)" stroke="rgba(196,92,42,0.6)" strokeWidth="1.5" />
      <rect x="254" y="56" width="132" height="10" rx="3" fill="rgba(244,241,234,0.14)" />
      <rect x="254" y="74" width="88" height="10" rx="3" fill="rgba(244,241,234,0.1)" />
      <rect x="254" y="92" width="110" height="10" rx="3" fill="rgba(244,241,234,0.1)" />
      <text x="254" y="128" fill="#5bd39a" fontSize="9" fontFamily="system-ui">
        One cockpit · governed lanes
      </text>
      <path d="M198 72 L232 72" stroke="rgba(196,92,42,0.55)" strokeWidth="2.5" markerEnd="url(#rd-cmp-arr)" />
      <defs>
        <marker id="rd-cmp-arr" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <path d="M0,0 L7,3.5 L0,7 Z" fill="rgba(196,92,42,0.75)" />
        </marker>
      </defs>
    </svg>
  );
}
