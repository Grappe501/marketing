import Link from "next/link";
import type { Feature } from "@/lib/types";
import { routes } from "@/lib/routes";
import { StatusPill } from "@/components/StatusPill";

export function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <Link href={routes.feature(feature.slug)} className="rd-panel" style={{ padding: "1rem", display: "block" }}>
      <div style={{ display: "flex", justifyContent: "space-between", gap: "0.5rem", alignItems: "flex-start" }}>
        <div>
          <p className="rd-eyebrow" style={{ letterSpacing: "0.14em", fontSize: "0.68rem" }}>
            Feature
          </p>
          <p style={{ margin: "0.25rem 0 0", fontWeight: 650 }}>{feature.shortTitle}</p>
        </div>
      </div>
      <p className="rd-muted" style={{ margin: "0.65rem 0 0", fontSize: "0.9rem" }}>
        {feature.heroStatement.length > 200 ? `${feature.heroStatement.slice(0, 200)}…` : feature.heroStatement}
      </p>
      <div style={{ marginTop: "0.75rem" }}>
        <StatusPill status={feature.statusLabel} depth={feature.depthLevel} />
      </div>
    </Link>
  );
}
