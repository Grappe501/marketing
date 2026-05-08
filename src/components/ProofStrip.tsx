import type { ProofPoint } from "@/lib/types";

export function ProofStrip({ points }: { points: ProofPoint[] }) {
  return (
    <div
      style={{
        display: "grid",
        gap: "0.75rem",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      }}
    >
      {points.map((p) => (
        <div key={p.id} className="rd-panel" style={{ padding: "1rem" }}>
          <p style={{ margin: 0, fontWeight: 650 }}>{p.label}</p>
          <p className="rd-muted" style={{ margin: "0.55rem 0 0", fontSize: "0.9rem" }}>
            {p.detail}
          </p>
        </div>
      ))}
    </div>
  );
}
