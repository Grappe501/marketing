import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { NarrativeBlock } from "@/components/NarrativeBlock";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { OriginalVisualFrame } from "@/components/OriginalVisualFrame";
import { CountyMapIllustration } from "@/components/visuals/CountyMapIllustration";
import { FeatureConstellation } from "@/components/visuals/FeatureConstellation";
import { pageMeta } from "@/lib/seo";
import { routes } from "@/lib/routes";

export const metadata: Metadata = pageMeta(
  "County intelligence",
  "Statewide races are many local races: county workbench posture, briefings, leader intelligence, issue landscape, pathway framing, regional strategy—HQ visibility without pretending every county is complete on day one.",
  { path: "/counties" },
);

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Counties"
        title="A statewide race is 75 local races running at once."
        subtitle="RedDirt OS is built to give every county a place in the operating picture: leaders, issues, pathways, briefings, events, and field needs—operator-guided, drilldown-first, and designed to connect HQ planning to local execution."
      />
      <Section title="HQ goes blind in inches, not miles" intro="County intelligence fails when it lives in decks nobody updates. The lane is designed for freshness signals, owners, and briefing artifacts that become comms and field actions—not archives.">
        <NarrativeBlock kicker="Illustrative" title="Map posture, not fantasy precision">
          The map is a coordination metaphor for attention and drift. Your implementation determines how complete county datasets are at a given moment—language stays careful.
        </NarrativeBlock>
      </Section>
      <Section title="County attention surface" intro="Original tile illustration plus an abstract mesh for how county work ties back to other lanes.">
        <div className="rd-stack-2col">
          <OriginalVisualFrame title="County map illustration" caption="Illustrative heat tiles—not a certified map product.">
            <CountyMapIllustration />
          </OriginalVisualFrame>
          <OriginalVisualFrame title="County intel in the capability mesh" caption="Abstract constellation — coordination metaphor, not a data graph.">
            <FeatureConstellation />
          </OriginalVisualFrame>
        </div>
      </Section>
      <CTASection
        title="Open county intelligence lane"
        body="Workbench, map posture, briefings, leaders, issues, pathways, regional strategy."
        primary={{ label: "Open lane", href: routes.lane("county-intelligence") }}
        secondary={{ label: "Field + GOTV", href: routes.field }}
      />
    </>
  );
}
