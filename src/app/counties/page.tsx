import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { NarrativeBlock } from "@/components/NarrativeBlock";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { OriginalVisualFrame } from "@/components/OriginalVisualFrame";
import { CountyMapIllustration } from "@/components/visuals/CountyMapIllustration";
import { FeatureConstellation } from "@/components/visuals/FeatureConstellation";
import { WeekGridMock } from "@/components/visuals/WeekGridMock";
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
      <Section
        title="HQ goes blind in inches, not miles"
        intro="County intelligence fails when it lives in decks nobody updates. The lane is designed for freshness signals, owners, and briefing artifacts that become comms and field actions—not archives. A statewide race is won locally: leaders, issues, pathways, surrogates, and volunteer reality have to stay attached to the same operating picture as calendar density and outreach timing—or HQ becomes a rumor mill."
      >
        <NarrativeBlock kicker="Illustrative" title="Map posture, not fantasy precision">
          The map is a coordination metaphor for attention and drift. Your implementation determines how complete county datasets are at a given moment—language stays careful. The product story is still operational: stale briefing becomes a visible exception, not a silent mistake.
        </NarrativeBlock>
        <NarrativeBlock kicker="Handoff" title="County intel should route to execution lanes">
          Briefings should connect to county pages, surrogate packets, field priorities, and comms pushes—otherwise intelligence becomes expensive wallpaper.
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
      <Section
        title="County moments belong on the same calendar spine as HQ"
        intro="Local briefings, surrogate hits, and partner events only land cleanly when the calendar lane owns density and visibility — so county pushes do not surprise field, finance, or comms."
      >
        <NarrativeBlock kicker="Coordination" title="One week surface for many local truths">
          County work is not separate from the statewide clock: it competes for the same volunteer energy, press cycles, and principal travel as HQ events.
        </NarrativeBlock>
        <OriginalVisualFrame title="Week density (shared metaphor) (mock)" caption="Same schematic as Calendar HQ — counties and HQ should read the same pressure map." style={{ marginTop: "1.25rem" }}>
          <WeekGridMock />
        </OriginalVisualFrame>
        <p style={{ marginTop: "1rem" }}>
          <Link className="rd-link-arrow" href={routes.calendar} style={{ color: "var(--accent-2)" }}>
            Calendar + events
          </Link>
        </p>
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
