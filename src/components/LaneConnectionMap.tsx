/** Compact “how lanes connect” diagram for platform-style pages. */
export function LaneConnectionMap() {
  const nodes = [
    { id: "data", label: "Data + facts", x: 8, y: 42 },
    { id: "gov", label: "Governance", x: 50, y: 18 },
    { id: "lane", label: "Execution lanes", x: 50, y: 68 },
    { id: "cockpit", label: "Cockpit", x: 88, y: 42 },
  ];

  return (
    <div className="rd-panel" style={{ padding: "1rem" }}>
      <svg viewBox="0 0 100 90" width="100%" height="220" role="img" aria-label="Diagram showing data and governance feeding execution lanes and cockpit command">
        <defs>
          <linearGradient id="wire" x1="0" x2="1">
            <stop offset="0%" stopColor="rgba(196,92,42,0.15)" />
            <stop offset="100%" stopColor="rgba(196,92,42,0.65)" />
          </linearGradient>
        </defs>
        <line x1="18" y1="42" x2="38" y2="28" stroke="url(#wire)" strokeWidth="0.9" />
        <line x1="18" y1="42" x2="38" y2="62" stroke="url(#wire)" strokeWidth="0.9" />
        <line x1="62" y1="28" x2="78" y2="42" stroke="url(#wire)" strokeWidth="0.9" />
        <line x1="62" y1="62" x2="78" y2="42" stroke="url(#wire)" strokeWidth="0.9" />
        {nodes.map((n) => (
          <g key={n.id} transform={`translate(${n.x - 10},${n.y - 8})`}>
            <rect width="20" height="16" rx="3" fill="rgba(18,22,29,0.95)" stroke="rgba(244,241,234,0.14)" />
            <text x="10" y="10" textAnchor="middle" fontSize="4" fill="#f4f1ea" fontFamily="system-ui, sans-serif">
              {n.label.split(" ")[0]}
            </text>
          </g>
        ))}
      </svg>
      <p className="rd-muted" style={{ marginTop: "0.5rem", fontSize: "0.85rem" }}>
        Illustrative: governed data feeds execution lanes; the Cockpit reads posture across lanes without pretending every integration is automatic.
      </p>
    </div>
  );
}
