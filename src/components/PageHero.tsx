import Link from "next/link";

type Cta = { label: string; href: string; variant?: "primary" | "ghost" };

export function PageHero({
  eyebrow,
  title,
  subtitle,
  ctas,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  ctas?: Cta[];
}) {
  return (
    <section className="rd-section" style={{ borderTop: "none", paddingTop: "clamp(2.5rem, 6vw, 4.5rem)" }}>
      <div className="rd-container rd-grid-bg" style={{ borderRadius: "var(--radius-xl)", padding: "clamp(1.5rem, 4vw, 2.5rem)" }}>
        {eyebrow ? <p className="rd-eyebrow">{eyebrow}</p> : null}
        <h1 className="rd-h1">{title}</h1>
        {subtitle ? <p className="rd-lead">{subtitle}</p> : null}
        {ctas && ctas.length > 0 ? (
          <div className="rd-cta-row" style={{ marginTop: "1.25rem" }}>
            {ctas.map((c) => (
              <Link
                key={c.href + c.label}
                href={c.href}
                className={`rd-btn ${c.variant === "ghost" ? "rd-btn-ghost" : "rd-btn-primary rd-btn-glow"}`}
              >
                {c.label}
              </Link>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
