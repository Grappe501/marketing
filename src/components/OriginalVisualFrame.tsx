import type { CSSProperties, ReactNode } from "react";

export function OriginalVisualFrame({
  title,
  caption,
  children,
  className,
  style,
}: {
  title: string;
  caption?: string;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <figure className={`rd-panel rd-panel-glow rd-visual-surface ${className ?? ""}`.trim()} style={{ margin: 0, padding: "1rem", ...style }}>
      <figcaption style={{ marginBottom: "0.75rem" }}>
        <p style={{ margin: 0, fontWeight: 650 }}>{title}</p>
        {caption ? (
          <p className="rd-muted" style={{ margin: "0.35rem 0 0", fontSize: "0.88rem" }}>
            {caption}
          </p>
        ) : null}
      </figcaption>
      <div>{children}</div>
    </figure>
  );
}
