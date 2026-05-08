import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { NarrativeBlock } from "@/components/NarrativeBlock";
import { MetricStyleCard } from "@/components/MetricStyleCard";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { OriginalVisualFrame } from "@/components/OriginalVisualFrame";
import { CockpitMockup } from "@/components/visuals/CockpitMockup";
import { CockpitVisionBoardMock } from "@/components/visuals/CockpitVisionMocks";
import { LaneOverviewStripMock } from "@/components/visuals/LaneOverviewStripMock";
import { MorningBriefMock } from "@/components/visuals/MorningBriefMock";
import { RankedActionsMock } from "@/components/visuals/RankedActionsMock";
import { TourHoldConflictMock } from "@/components/visuals/TourHoldConflictMock";
import { WeekGridMock } from "@/components/visuals/WeekGridMock";
import { getCtas } from "@/lib/marketingData";
import { pageMeta } from "@/lib/seo";
import { routes } from "@/lib/routes";

export const metadata: Metadata = pageMeta(
  "Campaign Cockpit",
  "Morning command surface: executive readiness, morning brief, ranked next actions, launch gates, calendar pressure, county health, fundraising follow-ups, compliance windows, field/GOTV exceptions—one stack.",
  { path: "/cockpit" },
);

export default function Page() {
  const ctas = getCtas();

  return (
    <>
      <PageHero
        eyebrow="Cockpit"
        title="The morning command surface for a serious race."
        subtitle="The Cockpit is designed to compress noise into a ranked command stack: readiness vs blocked, deadline proximity, county pressure, calendar queue depth, fundraising aging, compliance preparation signals, and field/GOTV exceptions—each with owners and next actions."
      />
      <Section
        title="Vision board: paneled command floor"
        intro="We build toward one governed surface—not a pile of dashboards. The board below is the marketing north star: left rail for route posture (Daily, Map, Readiness, Queues, Lanes), center readiness wall for cross-lane objects, right column for ranked next actions and the principal queue, top bar for day context and overnight deltas, bottom strip for twelve-lane posture. Drilldown stays in each lane; the cockpit answers what the race looks like before noon."
      >
        <OriginalVisualFrame
          title="Full cockpit vision (illustration)"
          caption="Vision-only layout for build alignment—not a screenshot of shipping software."
          style={{ marginTop: "0.5rem" }}
        >
          <CockpitVisionBoardMock />
        </OriginalVisualFrame>
        <div style={{ marginTop: "1.25rem" }}>
          <NarrativeBlock kicker="How to read the panels" title="Map the vision to what we ship">
            <p style={{ margin: 0 }}>
              <strong>Rail:</strong> switches route context without losing command posture. <strong>Readiness wall:</strong> tiles are cross-lane objects (email, calendar, counties, field, fundraising, compliance) with explicit status—not vanity metrics.{" "}
              <strong>Ranked column:</strong> consequence-ordered work with lane labels. <strong>Principal queue:</strong> authority-only decisions separated from operator throughput. <strong>Lane strip:</strong> same twelve-lane object the morning brief and deep lanes reference—so the room does not invent three different truths.
            </p>
          </NarrativeBlock>
        </div>
      </Section>
      <Section
        title="What leadership should see before noon"
        intro="Not vanity charts—exceptions, approvals, readiness gates, and the true top five moves. Principals should be able to decide without opening six tools. The Cockpit is not meant to replace lane depth; it is meant to compress lane depth into posture: what is ready, what is blocked, what needs a signature, and what will hurt doors or message if it slips another day."
      >
        <NarrativeBlock kicker="Monday" title="If it is not ranked, it is not command—it is noise">
          A cockpit that shows everything equally teaches nothing. The product story is consequence ordering: money, doors, deadlines, message risk, and public moments colliding with compliance windows—each with owners and explicit next actions.
        </NarrativeBlock>
        <OriginalVisualFrame title="Cockpit composition (original)" caption="CSS mock of readiness cards and exception queue—not a product screenshot." style={{ marginTop: "1rem" }}>
          <CockpitMockup />
        </OriginalVisualFrame>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "0.75rem", marginTop: "1rem" }}>
          <MetricStyleCard label="Readiness" value="Green / yellow / red" hint="Posture by object class, not vibes." />
          <MetricStyleCard label="Blockers" value="Owned queue" hint="Every blocker has an owner or it is invalid." />
          <MetricStyleCard label="Principal calls" value="Ranked" hint="Only what requires authority—not trivia." />
        </div>
        <OriginalVisualFrame title="Ranked next actions (detail mock)" caption="Same idea as the cockpit cards, expressed as a tight queue — illustration only." style={{ marginTop: "1.25rem" }}>
          <RankedActionsMock />
        </OriginalVisualFrame>
        <div className="rd-stack-2col" style={{ marginTop: "1.25rem" }}>
          <OriginalVisualFrame title="Calendar week density (mock)" caption="How tour holds and locals read on the same surface — schematic only.">
            <WeekGridMock />
          </OriginalVisualFrame>
          <OriginalVisualFrame title="Tour vs local collision (mock)" caption="Example overlap story — not scheduling automation.">
            <TourHoldConflictMock />
          </OriginalVisualFrame>
        </div>
      </Section>

      <Section
        title="The Cockpit reads the same week the lanes produce"
        intro="Morning brief lines, lane posture strips, and ranked queues are the same story told three ways: time-stamped signals, twelve-lane scan, and consequence ordering. If those three disagree, your operating picture is still fractured—regardless of how polished the CSS is."
      >
        <NarrativeBlock kicker="Alignment" title="Operators and principals should argue about decisions—not about facts">
          The goal is shared truth objects: the same calendar pressure field sees, the same pledge aging finance sees, the same suppression gate comms sees—then the debate moves to what to do next, not what reality is.
        </NarrativeBlock>
        <div className="rd-stack-2col" style={{ marginTop: "1.25rem" }}>
          <OriginalVisualFrame title="Morning brief strip (mock)" caption="Time-stamped posture signals — illustration only.">
            <MorningBriefMock />
          </OriginalVisualFrame>
          <OriginalVisualFrame title="Lane posture strip (mock)" caption="Twelve lanes as a schematic scan — not live monitoring.">
            <LaneOverviewStripMock />
          </OriginalVisualFrame>
        </div>
      </Section>

      <CTASection title="Drill the Cockpit lane" body="Morning brief, next actions, readiness dashboards, launch gates, statewide map posture." primary={{ label: "Open lane", href: routes.lane("cockpit-command") }} secondary={ctas.features} />
    </>
  );
}
