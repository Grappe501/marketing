type Variant =
  | "cockpit"
  | "county-map"
  | "fundraising"
  | "compliance"
  | "calendar"
  | "outreach"
  | "field"
  | "intelligence"
  | "governance";

const variantAccent: Record<Variant, string> = {
  cockpit: "rgba(122, 162, 247, 0.35)",
  "county-map": "rgba(91, 211, 154, 0.35)",
  fundraising: "rgba(196, 92, 42, 0.45)",
  compliance: "rgba(211, 167, 86, 0.35)",
  calendar: "rgba(122, 162, 247, 0.35)",
  outreach: "rgba(196, 92, 42, 0.35)",
  field: "rgba(91, 211, 154, 0.28)",
  intelligence: "rgba(122, 162, 247, 0.28)",
  governance: "rgba(226, 85, 85, 0.28)",
};

export function VisualPlaceholder({
  variant,
  title,
  caption,
}: {
  variant: Variant;
  title: string;
  caption?: string;
}) {
  const accent = variantAccent[variant];

  return (
    <div
      className="rd-panel"
      style={{
        padding: "1.25rem",
        position: "relative",
        overflow: "hidden",
        minHeight: 220,
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(244,241,234,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(244,241,234,0.06) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          opacity: 0.55,
          maskImage: "radial-gradient(circle at 30% 20%, black 0%, transparent 62%)",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: "-40% -20%",
          background: `radial-gradient(circle at 30% 30%, ${accent}, transparent 55%)`,
          opacity: 0.55,
        }}
      />
      <div style={{ position: "relative" }}>
        <p className="rd-eyebrow" style={{ letterSpacing: "0.18em" }}>
          Visual pass 1
        </p>
        <p style={{ fontWeight: 650, fontSize: "1.1rem", margin: "0.35rem 0 0.5rem" }}>{title}</p>
        {caption ? <p className="rd-muted" style={{ fontSize: "0.92rem", maxWidth: "52ch" }}>{caption}</p> : null}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "0.5rem", marginTop: "1rem" }}>
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              style={{
                height: 46,
                borderRadius: 10,
                border: `1px solid ${accent}`,
                background: "rgba(10,12,15,0.35)",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
