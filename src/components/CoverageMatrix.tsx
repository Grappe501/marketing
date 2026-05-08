import Link from "next/link";
import type { Lane } from "@/lib/types";
import { routes } from "@/lib/routes";

export function CoverageMatrix({ lanes }: { lanes: Lane[] }) {
  return (
    <div className="rd-panel" style={{ padding: "1.25rem" }}>
      <div
        style={{
          display: "grid",
          gap: "0.5rem",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        }}
      >
        {lanes.map((lane) => (
          <Link
            key={lane.slug}
            href={routes.lane(lane.slug)}
            className="rd-panel"
            style={{
              padding: "0.85rem",
              borderRadius: "var(--radius-lg)",
              border: "1px solid rgba(196, 92, 42, 0.22)",
              background: "rgba(10,12,15,0.35)",
            }}
          >
            <p style={{ margin: 0, fontWeight: 650, fontSize: "0.95rem" }}>{lane.shortTitle}</p>
            <p className="rd-muted" style={{ margin: "0.35rem 0 0", fontSize: "0.82rem", lineHeight: 1.45 }}>
              {lane.whyItMatters.slice(0, 120)}
              {lane.whyItMatters.length > 120 ? "…" : ""}
            </p>
          </Link>
        ))}
      </div>
      <p className="rd-muted" style={{ marginTop: "1rem", fontSize: "0.88rem" }}>
        Coverage is expressed as operating lanes—each with drilldown features, operator promises, and connection points to the rest of the campaign.
      </p>
    </div>
  );
}
