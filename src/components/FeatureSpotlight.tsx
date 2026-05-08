import Link from "next/link";
import type { Feature } from "@/lib/types";
import { routes } from "@/lib/routes";
import { StatusPill } from "@/components/StatusPill";

export function FeatureSpotlight({ feature }: { feature: Feature }) {
  return (
    <div className="rd-panel" style={{ padding: "1.1rem" }}>
      <p className="rd-eyebrow" style={{ letterSpacing: "0.14em", fontSize: "0.68rem" }}>
        Feature spotlight
      </p>
      <h3 style={{ margin: "0.35rem 0 0.5rem", fontSize: "1.15rem" }}>{feature.title}</h3>
      <p className="rd-muted" style={{ margin: 0, fontSize: "0.92rem" }}>
        {feature.heroStatement}
      </p>
      <div style={{ marginTop: "0.75rem" }}>
        <StatusPill status={feature.statusLabel} depth={feature.depthLevel} />
      </div>
      <p style={{ marginTop: "1rem" }}>
        <Link href={routes.feature(feature.slug)} className="rd-link-arrow" style={{ color: "var(--accent-2)" }}>
          Open drilldown
        </Link>
      </p>
    </div>
  );
}
