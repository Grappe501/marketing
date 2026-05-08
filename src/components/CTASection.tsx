import Link from "next/link";

export function CTASection({
  title,
  body,
  primary,
  secondary,
  tertiary,
}: {
  title: string;
  body?: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
  tertiary?: { label: string; href: string };
}) {
  return (
    <section className="rd-section">
      <div className="rd-container">
        <div className="rd-panel rd-panel-glow rd-visual-surface" style={{ padding: "clamp(1.5rem, 4vw, 2.25rem)" }}>
          <h2 className="rd-h2">{title}</h2>
          {body ? <p className="rd-lead">{body}</p> : null}
          <div className="rd-cta-row">
            <Link className="rd-btn rd-btn-primary rd-btn-glow" href={primary.href}>
              {primary.label}
            </Link>
            {secondary ? (
              <Link className="rd-btn rd-btn-ghost" href={secondary.href}>
                {secondary.label}
              </Link>
            ) : null}
            {tertiary ? (
              <Link className="rd-btn rd-btn-ghost" href={tertiary.href}>
                {tertiary.label}
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
