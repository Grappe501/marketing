import type { Metadata } from "next";
import Link from "next/link";
import { FeatureCard } from "@/components/FeatureCard";
import { OriginalVisualFrame } from "@/components/OriginalVisualFrame";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { FeatureConstellation } from "@/components/visuals/FeatureConstellation";
import { getFeatures, getLanes } from "@/lib/marketingData";
import { pageMeta } from "@/lib/seo";
import { routes } from "@/lib/routes";

export const metadata: Metadata = pageMeta(
  "Feature map",
  "Eighty-two governed capabilities across twelve lanes—each drilldown includes operator workflow, leadership value, connected systems, risk reduced, and example use case language (templated + deep overrides for priority capabilities).",
  { path: "/features", ogVariant: "feature" },
);

export default function Page() {
  const lanes = getLanes();
  const features = getFeatures();

  return (
    <>
      <PageHero
        eyebrow="Feature map"
        title="Drill from category to exact capability"
        subtitle="Eighty-two capabilities, each written like a serious staffer is asking: what breaks, what RedDirt is designed to do, how operators run it, what leadership gains, and what risk drops—without claiming every module is live in production unless your deployment says so."
      />
      <Section title="Taxonomy as a mesh" intro="The list below is grouped by lane. This illustration is an abstract reminder that capabilities hand off across lanes—not isolated SKUs.">
        <OriginalVisualFrame title="Capability constellation (abstract)" caption="Not a dependency graph — a visual metaphor for cross-lane connections.">
          <FeatureConstellation />
        </OriginalVisualFrame>
      </Section>
      {lanes.map((lane) => {
        const laneFeatures = features.filter((f) => f.laneSlug === lane.slug);
        return (
          <Section
            key={lane.slug}
            eyebrow={lane.eyebrow}
            title={lane.shortTitle}
            intro={
              <>
                {lane.summary}{" "}
                <Link href={routes.lane(lane.slug)} style={{ color: "var(--accent-2)" }} className="rd-link-arrow">
                  Open lane page
                </Link>
              </>
            }
          >
            <div className="rd-card-grid">
              {laneFeatures.map((f) => (
                <FeatureCard key={f.slug} feature={f} />
              ))}
            </div>
          </Section>
        );
      })}
    </>
  );
}
