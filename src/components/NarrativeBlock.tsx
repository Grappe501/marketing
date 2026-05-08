import type { ReactNode } from "react";

export function NarrativeBlock({ kicker, title, children }: { kicker?: string; title: string; children: ReactNode }) {
  return (
    <div className="rd-panel rd-panel-glow rd-visual-surface" style={{ padding: "1.1rem" }}>
      {kicker ? (
        <p className="rd-eyebrow" style={{ letterSpacing: "0.16em" }}>
          {kicker}
        </p>
      ) : null}
      <h3 className="rd-h2" style={{ fontSize: "1.2rem", marginTop: kicker ? "0.35rem" : 0 }}>
        {title}
      </h3>
      <div className="rd-muted" style={{ marginTop: "0.65rem", fontSize: "0.98rem", color: "var(--muted)" }}>
        {children}
      </div>
    </div>
  );
}
