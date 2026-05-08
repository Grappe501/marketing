import type { Metadata } from "next";
import Link from "next/link";
import { FeatureCard } from "@/components/FeatureCard";
import { NarrativeBlock } from "@/components/NarrativeBlock";
import { OriginalVisualFrame } from "@/components/OriginalVisualFrame";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { FeatureConstellation } from "@/components/visuals/FeatureConstellation";
import { LaneOverviewStripMock } from "@/components/visuals/LaneOverviewStripMock";
import { RankedActionsMock } from "@/components/visuals/RankedActionsMock";
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
      <Section
        title="Taxonomy as a mesh"
        intro="The list below is grouped by lane. This illustration is an abstract reminder that capabilities hand off across lanes—not isolated SKUs. Eighty-two drilldowns is a lot on purpose: a skeptical campaign manager should be able to find their pain named explicitly, then read operator workflow, leadership value, connected systems, risk reduced, and an example use case—without the copy collapsing into generic ‘automation.’"
      >
        <NarrativeBlock kicker="How to read this page" title="Start at your fire, not at the alphabet">
          If calendar collisions are killing you, jump to Calendar + events. If sends scare you, jump to Outreach. If finance posture is the panic, jump to budget + compliance preparation. The mesh exists so you do not have to read linearly—lanes reinforce each other in real races, and the taxonomy is shaped to match that reality.
        </NarrativeBlock>
        <OriginalVisualFrame title="Capability constellation (abstract)" caption="Not a dependency graph — a visual metaphor for cross-lane connections." style={{ marginTop: "1rem" }}>
          <FeatureConstellation />
        </OriginalVisualFrame>
        <div className="rd-stack-2col" style={{ marginTop: "1.25rem" }}>
          <OriginalVisualFrame title="Twelve lanes as posture scan (mock)" caption="Where the week hurts should be visible as lane pressure — schematic only.">
            <LaneOverviewStripMock />
          </OriginalVisualFrame>
          <OriginalVisualFrame title="Capabilities still rank on Monday (mock)" caption="Even a deep map has to return to consequence ordering — illustration only.">
            <RankedActionsMock />
          </OriginalVisualFrame>
        </div>
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
