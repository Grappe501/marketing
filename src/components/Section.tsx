import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  intro?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="rd-section" id={id}>
      <div className="rd-container">
        {eyebrow ? <p className="rd-eyebrow">{eyebrow}</p> : null}
        <h2 className="rd-h2">{title}</h2>
        {intro ? <div className="rd-lead">{intro}</div> : null}
        {children != null ? <div style={{ marginTop: "1.5rem" }}>{children}</div> : null}
      </div>
    </section>
  );
}
