import type { DepthLevel } from "@/lib/types";

const depthLabel: Record<DepthLevel, string> = {
  core: "Core",
  advanced: "Advanced",
  enterprise: "Enterprise",
};

export function StatusPill({ status, depth }: { status: string; depth?: DepthLevel }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", alignItems: "center" }}>
      <span className="rd-pill">{status}</span>
      {depth ? (
        <span className="rd-pill" style={{ borderColor: "rgba(211, 167, 86, 0.35)", color: "var(--gold)" }}>
          {depthLabel[depth]}
        </span>
      ) : null}
    </div>
  );
}
