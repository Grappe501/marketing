import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { NarrativeBlock } from "@/components/NarrativeBlock";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CockpitMockup } from "@/components/visuals/CockpitMockup";
import { ComplianceLedgerMock } from "@/components/visuals/ComplianceLedgerMock";
import { ArkansasCountyHeatMock } from "@/components/visuals/ArkansasCountyHeatMock";
import { PrecinctHeatMock } from "@/components/visuals/PrecinctHeatMock";
import { StaticBuildGraphicMock } from "@/components/visuals/StaticBuildGraphicMock";
import { EmailLaunchMock } from "@/components/visuals/EmailLaunchMock";
import { BudgetBarsMock } from "@/components/visuals/BudgetBarsMock";
import { CalendarRequestMock } from "@/components/visuals/CalendarRequestMock";
import { CommsDownstreamMock } from "@/components/visuals/CommsDownstreamMock";
import { EventWorkstreamMock } from "@/components/visuals/EventWorkstreamMock";
import { FundraisingLaneMock } from "@/components/visuals/FundraisingLaneMock";
import { LaneOverviewStripMock } from "@/components/visuals/LaneOverviewStripMock";
import { RankedActionsMock } from "@/components/visuals/RankedActionsMock";
import { TourHoldConflictMock } from "@/components/visuals/TourHoldConflictMock";
import { WeekGridMock } from "@/components/visuals/WeekGridMock";
import { WorkflowRail } from "@/components/visuals/WorkflowRail";
import { MorningBriefMock } from "@/components/visuals/MorningBriefMock";
import { SuppressionDiffMock } from "@/components/visuals/SuppressionDiffMock";
import { OriginalVisualFrame } from "@/components/OriginalVisualFrame";
import { ProductScreenshotFrame } from "@/components/ProductScreenshotFrame";
import { getCtas } from "@/lib/marketingData";
import { pageMeta } from "@/lib/seo";
import { routes } from "@/lib/routes";

export const metadata: Metadata = pageMeta(
  "Walk the race",
  "Guided walkthrough: Cockpit rhythm, governed outreach launch, calendar HQ (request rail, dependencies, week density, tour collisions, comms handoff), fundraising follow-up, county pressure, compliance posture—static marketing build, no backend.",
  { path: "/demo", ogVariant: "default" },
);

export default function Page() {
  const ctas = getCtas();

  return (
    <>
      <PageHero
        eyebrow="Guided walkthrough"
        title="Seven beats. One operating week."
        subtitle="This is the story a serious campaign staff should recognize—told as governed objects and operator checkpoints, not as a generic template. No video yet; the sequence is the proof."
        ctas={[
          { label: ctas.primary.label, href: ctas.primary.href, variant: "primary" },
          { label: ctas.secondary.label, href: ctas.secondary.href, variant: "ghost" },
        ]}
      />

      <Section title="1. Start in the Cockpit" intro="Monday morning is a command surface: readiness, blockers, ranked next actions—not a mood board.">
        <NarrativeBlock kicker="Command" title="One place to read posture">
          Leadership and operators align on what is green, yellow, or blocked before anyone chases a side thread. The Cockpit is designed to make consequence visible early—not after something breaks publicly.
        </NarrativeBlock>
        <ProductScreenshotFrame title="Cockpit — readiness mock">
          <CockpitMockup />
        </ProductScreenshotFrame>
        <OriginalVisualFrame title="Brief after readiness (mock)" caption="Same Monday rhythm as time-stamped signals — static illustration." style={{ marginTop: "1.25rem" }}>
          <MorningBriefMock />
        </OriginalVisualFrame>
      </Section>

      <Section title="2. Launch an outreach run" intro="Audience, message, packet, preflight, test, final operator posture—governed sequence, not a panic button.">
        <div className="rd-stack-2col">
          <OriginalVisualFrame title="Email launch rail" caption="Illustration only; real sends remain provider- and policy-bound.">
            <EmailLaunchMock />
          </OriginalVisualFrame>
          <OriginalVisualFrame title="Suppression diff (mock)" caption="Illustrative list posture before final sign-off — not live data.">
            <SuppressionDiffMock />
          </OriginalVisualFrame>
        </div>
      </Section>

      <Section
        title="3. Calendar HQ — event requests and everything they drag in"
        intro="Calendar is a workflow bomb: one approved moment should unlock logistics, surrogates, press, field staffing, and comms stubs — without losing the thread between internal coordination and public-ready truth."
      >
        <NarrativeBlock kicker="Calendar lane" title="Truth first, then downstream artifacts">
          Requests become objects with owners and gates. Public visibility is a transition, not a leak. Tour holds and local pushes share the same density surface so collisions show up early.
        </NarrativeBlock>
        <div className="rd-stack-2col" style={{ marginTop: "1.25rem" }}>
          <OriginalVisualFrame title="Request → visibility rail (mock)" caption="Schematic flow — not a live calendar integration claim.">
            <CalendarRequestMock />
          </OriginalVisualFrame>
          <OriginalVisualFrame title="Event dependencies (mock)" caption="One rally with cross-functional gates — illustration only.">
            <EventWorkstreamMock />
          </OriginalVisualFrame>
        </div>
        <div className="rd-stack-2col" style={{ marginTop: "1.25rem" }}>
          <OriginalVisualFrame title="Week density + collision hint (mock)" caption="Tour holds vs local energy — sample week, not sync data.">
            <WeekGridMock />
          </OriginalVisualFrame>
          <OriginalVisualFrame title="Tour vs local overlap (mock)" caption="Narrative example resolution — not automated scheduling.">
            <TourHoldConflictMock />
          </OriginalVisualFrame>
        </div>
        <OriginalVisualFrame title="Comms downstream from approved truth (mock)" caption="Artifacts inherit calendar state — explicit gates where policy requires." style={{ marginTop: "1.25rem" }}>
          <CommsDownstreamMock />
        </OriginalVisualFrame>
      </Section>

      <Section
        title="4. Move fundraising follow-up"
        intro="Money motion stays connected to finance review queues—not a detached spreadsheet myth. Fundraising is where campaigns most often invent parallel truth: organizers track pledges one way, finance tracks documentation another way, and leadership hears a third number in the Friday update. The lane story is one object model: pipeline stages, call time outcomes, pledge aging, and treasurer-visible posture."
      >
        <div className="rd-panel" style={{ padding: "1rem", color: "var(--muted)" }}>
          Pledged-but-open items, call-time outcomes, and documentation posture route into the same operating picture the manager already trusts for weekly command.
        </div>
        <div style={{ marginTop: "1.25rem" }}>
          <ProductScreenshotFrame title="Walkthrough — ledger + pipeline (mock)">
            <div
              style={{
                display: "grid",
                gap: "0.75rem",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                alignItems: "start",
              }}
            >
              <ComplianceLedgerMock />
              <FundraisingLaneMock />
            </div>
          </ProductScreenshotFrame>
        </div>
        <OriginalVisualFrame title="Budget mix (mock)" caption="Illustrative spend posture alongside pipeline work — not certified totals." style={{ marginTop: "1.25rem" }}>
          <BudgetBarsMock />
        </OriginalVisualFrame>
        <OriginalVisualFrame title="Ranked pressure includes finance windows (mock)" caption="Same cross-lane queue metaphor — illustration only." style={{ marginTop: "1.25rem" }}>
          <RankedActionsMock />
        </OriginalVisualFrame>
      </Section>

      <Section
        title="5. Read county pressure"
        intro="County intelligence as attention surface—schematic, not survey-grade geography. A statewide race is many local races: the map is a coordination metaphor for drift and priority, not a certified cartography product. The point is operational: stale briefings and thin field coverage should become visible exceptions with owners—before they become election-week surprises."
      >
        <NarrativeBlock kicker="Local reality" title="HQ goes blind in inches">
          County work is not decoration—it is where message, surrogates, and field programs meet local truth. The heat tiles below are illustrative posture, not voter data.
        </NarrativeBlock>
        <div className="rd-stack-2col" style={{ marginTop: "1rem" }}>
          <OriginalVisualFrame
            title="Arkansas — schematic county heat (mock)"
            caption="Stylized state outline with invented county regions — not official geography or voter data."
          >
            <ArkansasCountyHeatMock />
          </OriginalVisualFrame>
          <OriginalVisualFrame
            title="Sample county — precinct attention (mock)"
            caption="Fictional county footprint with invented precinct cells — not real boundaries or results."
          >
            <PrecinctHeatMock />
          </OriginalVisualFrame>
        </div>
        <OriginalVisualFrame title="Twelve-lane scan includes counties (mock)" caption="County lane sits next to field, calendar, and comms in the same posture strip — schematic only." style={{ marginTop: "1.25rem" }}>
          <LaneOverviewStripMock />
        </OriginalVisualFrame>
      </Section>

      <Section
        title="6. Check compliance posture"
        intro="Preparation, deadlines, review status, export-ready posture—treasurer and counsel remain accountable for official filing. Compliance preparation is a weekly rhythm in the OS story: contribution and expenditure discipline, vendor documentation posture, and filing proximity signals that make ‘review week’ less like archaeology."
      >
        <NarrativeBlock kicker="Handoff" title="Export and review—not magic filing">
          The ledger view is support workflow illustration. The rail reminds you the same governance spine exists here too: prepare, review, package, human responsibility.
        </NarrativeBlock>
        <div className="rd-stack-2col" style={{ marginTop: "1rem" }}>
          <OriginalVisualFrame title="Ledger-style preparation view" caption="Support workflow illustration—not deterministic compliance.">
            <ComplianceLedgerMock />
          </OriginalVisualFrame>
          <OriginalVisualFrame title="Handoff spine (illustrative)" caption="Prepare → review → export/package → human filing responsibility — schematic only.">
            <WorkflowRail />
          </OriginalVisualFrame>
        </div>
      </Section>

      <Section
        title="7. End with operator next actions"
        intro="The week closes with ranked work: what moves doors, money, deadlines, and message risk—without pretending dangerous actions should be easy to do by accident. If the walkthrough stopped at pretty pages, it would fail; the ending has to return to the same cockpit discipline the campaign actually runs on Monday."
      >
        <NarrativeBlock kicker="Close" title="Command, not chaos">
          If the walkthrough felt specific, the product story is working. If it felt generic, we failed—regardless of how polished the CSS is.
        </NarrativeBlock>
        <div style={{ marginTop: "1.25rem" }}>
          <ProductScreenshotFrame title="Walkthrough — close where the week actually lives (mock)">
            <div
              style={{
                display: "grid",
                gap: "0.75rem",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                alignItems: "start",
              }}
            >
              <CockpitMockup />
              <RankedActionsMock />
            </div>
          </ProductScreenshotFrame>
        </div>
        <div className="rd-stack-2col" style={{ marginTop: "1.25rem" }}>
          <OriginalVisualFrame title="Morning brief strip (mock)" caption="Same rhythm as step 1 — static illustration.">
            <MorningBriefMock />
          </OriginalVisualFrame>
          <OriginalVisualFrame title="Twelve-lane posture (mock)" caption="Where counties sit next to field, calendar, and comms — schematic only.">
            <LaneOverviewStripMock />
          </OriginalVisualFrame>
        </div>
      </Section>

      <Section
        title="What stays static (on purpose)"
        intro="No analytics, no embeds, no automatic intake. Conversion architecture is real; plumbing is a deployment decision. Static is not embarrassment—it is honesty: the marketing site should not fake backend behaviors, collect data silently, or pretend intake exists before security and privacy posture are real."
      >
        <OriginalVisualFrame title="What “static” means on this build (mock)" caption="Narrative diagram only — not a live security audit or deployment manifest.">
          <StaticBuildGraphicMock />
        </OriginalVisualFrame>
        <div className="rd-panel" style={{ padding: "1rem", color: "var(--muted)", marginTop: "1.25rem" }}>
          When intake is wired, this page should deepen into scheduling and agenda capture. Until then, use{" "}
          <Link href={routes.contact} style={{ color: "var(--accent-2)" }}>
            Contact
          </Link>{" "}
          as the human path—still without automatic submission in this build.
        </div>
      </Section>

      <CTASection
        title="Request a walkthrough"
        body="Tell us which lane is on fire first—we will map the conversation to real operator objects, not vendor bingo."
        primary={ctas.primary}
        secondary={ctas.features}
        tertiary={ctas.lanes}
      />
    </>
  );
}
