export function CalendarRequestMock() {
  return (
    <svg viewBox="0 0 420 120" width="100%" height="140" role="img" aria-label="Calendar request queue through review to draft event and public-ready comms plan">
      <text x="12" y="22" fill="#9aa3b2" fontSize="11" fontFamily="system-ui">
        Request queue → review → draft event → public-ready → comms plan
      </text>
      <rect x="12" y="38" width="72" height="44" rx="10" fill="rgba(122,162,247,0.12)" stroke="rgba(122,162,247,0.35)" />
      <text x="48" y="66" textAnchor="middle" fill="#f4f1ea" fontSize="9" fontFamily="system-ui">
        Queue
      </text>
      <path d="M88 60h28" stroke="rgba(196,92,42,0.45)" strokeWidth="2" />
      <rect x="122" y="38" width="72" height="44" rx="10" fill="rgba(196,92,42,0.12)" stroke="rgba(196,92,42,0.45)" />
      <text x="158" y="66" textAnchor="middle" fill="#f4f1ea" fontSize="9" fontFamily="system-ui">
        Review
      </text>
      <path d="M198 60h28" stroke="rgba(196,92,42,0.45)" strokeWidth="2" />
      <rect x="232" y="38" width="78" height="44" rx="10" fill="rgba(212,167,86,0.1)" stroke="rgba(212,167,86,0.4)" />
      <text x="271" y="66" textAnchor="middle" fill="#f4f1ea" fontSize="9" fontFamily="system-ui">
        Draft
      </text>
      <path d="M314 60h28" stroke="rgba(196,92,42,0.45)" strokeWidth="2" />
      <rect x="348" y="38" width="60" height="44" rx="10" fill="rgba(91,211,154,0.1)" stroke="rgba(91,211,154,0.35)" />
      <text x="378" y="66" textAnchor="middle" fill="#f4f1ea" fontSize="9" fontFamily="system-ui">
        Public
      </text>
      <rect x="12" y="92" width="396" height="22" rx="8" fill="rgba(244,241,234,0.06)" stroke="rgba(244,241,234,0.1)" />
      <text x="24" y="107" fill="#9aa3b2" fontSize="9" fontFamily="system-ui">
        Comms plan stub — generated after calendar truth is approved
      </text>
    </svg>
  );
}
