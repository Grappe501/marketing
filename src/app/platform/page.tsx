import type { Metadata } from "next";
import Link from "next/link";
import { CoverageMatrix } from "@/components/CoverageMatrix";
import { CTASection } from "@/components/CTASection";
import { MetricStyleCard } from "@/components/MetricStyleCard";
import { NarrativeBlock } from "@/components/NarrativeBlock";
import { OriginalVisualFrame } from "@/components/OriginalVisualFrame";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { AdoptionPhasesMock } from "@/components/visuals/AdoptionPhasesMock";
import { ApprovalChainMock } from "@/components/visuals/ApprovalChainMock";
import { BudgetBarsMock } from "@/components/visuals/BudgetBarsMock";
import { CalendarRequestMock } from "@/components/visuals/CalendarRequestMock";
import { CampaignStackComparison } from "@/components/visuals/CampaignStackComparison";
import { CockpitVisionBoardMock } from "@/components/visuals/CockpitVisionMocks";
import { CommsDownstreamMock } from "@/components/visuals/CommsDownstreamMock";
import { ComplianceLedgerMock } from "@/components/visuals/ComplianceLedgerMock";
import { EventWorkstreamMock } from "@/components/visuals/EventWorkstreamMock";
import { FeatureConstellation } from "@/components/visuals/FeatureConstellation";
import { MorningBriefMock } from "@/components/visuals/MorningBriefMock";
import {
  BoardReadinessScorecardMock,
  CandidateOutcomeRadarMock,
  ConfidenceTrajectoryMock,
  EngagementShapeMock,
  FragmentedVsGovernedBarsMock,
  GoldenCircleMock,
} from "@/components/visuals/PlatformVisionMocks";
import { RankedActionsMock } from "@/components/visuals/RankedActionsMock";
import { WeekGridMock } from "@/components/visuals/WeekGridMock";
import { getCtas, getLanes } from "@/lib/marketingData";
import { pageMeta } from "@/lib/seo";
import { routes } from "@/lib/routes";

export const metadata: Metadata = pageMeta(
  "Platform vision — why RedDirt OS exists",
  "Golden Circle narrative for serious statewide campaigns: why a governed operating system exists, how it reduces thrash and public risk, what layers and lanes deliver, and how principals think about capital, confidence, and monthly operating rhythm.",
  { path: "/platform" },
);

export default function Page() {
  const lanes = getLanes();
  const ctas = getCtas();

  return (
    <>
      <PageHero
        eyebrow="Platform vision"
        title="Built for the moment when the race is too expensive to run on heroic memory."
        subtitle="If you are protecting eight figures of spend, staff careers, and a candidate’s name, you are not buying “another dashboard.” You are buying fewer midnight surprises, faster coordinated truth, and governance that lets you move hard without moving stupid. This page is the argument—psychology first, architecture second, proof density third."
        ctas={[
          { label: ctas.demo.label, href: ctas.demo.href, variant: "primary" },
          { label: ctas.features.label, href: ctas.features.href, variant: "ghost" },
        ]}
      />

      <Section
        title="Why this product exists (the center of the Golden Circle)"
        intro="Campaigns do not lose because people lack courage. They lose because reality fractures: finance hears one number, field sees another calendar, comms ships from a third truth, and leadership discovers the gap in public. The fear underneath every serious statewide effort is not “we need more software”—it is humiliation at the wrong moment, treasurer shock, a bad send, a staffing hole nobody named until doors are open. RedDirt OS exists to shrink the gap between what leadership believes is true and what operators can prove is true—before a reporter, an opponent, or a donor teaches you the lesson for free."
      >
        <OriginalVisualFrame
          title="Golden Circle — belief → mechanism → artifacts"
          caption="Simon Sinek’s frame applied honestly: WHY is emotional safety under pressure; HOW is governed objects and workflows; WHAT is lanes, cockpit, and integrations you configure."
          style={{ marginTop: "0.5rem" }}
        >
          <GoldenCircleMock />
        </OriginalVisualFrame>
        <NarrativeBlock kicker="Psychology" title="What a $20M-class principal is actually buying">
          Sleep. Reputation. The ability to walk into a room and know the briefing matches execution. A statewide race is a portfolio of high-risk projects running in parallel—money, message, time, people, law, and ego. The product thesis is simple: coordination failure is the silent tax. You do not invest in “features”; you invest in reducing the probability that your team invents three different realities and argues about all of them on the week that matters.
        </NarrativeBlock>
      </Section>

      <Section
        title="How RedDirt changes the game (the middle ring)"
        intro="Mechanism beats manifesto. The OS is designed around shared objects—calendar truth, readiness posture, approval-backed sends, county intelligence, pipeline aging—so the cockpit can compress noise without lying. Workflows are not paperwork for its own sake; they are how you keep speed when consequences are real. The chart below is deliberately schematic: it is the shape of confidence boards expect once operators stop rebuilding the week from screenshots."
      >
        <OriginalVisualFrame
          title="Confidence trajectory (schematic)"
          caption="Illustrative only — not measured from your deployment. Governed rollout is designed to separate truth early; fragmented stacks often plateau in debate."
          style={{ marginTop: "0.5rem" }}
        >
          <ConfidenceTrajectoryMock />
        </OriginalVisualFrame>
        <div className="rd-stack-2col" style={{ marginTop: "1.25rem" }}>
          <NarrativeBlock kicker="How" title="Objects, not vibes">
            Every lane is supposed to produce legible objects with owners and next actions. The cockpit ranks consequences; governance constrains muscle memory mistakes; audit posture is designed so “I thought someone checked that” dies as an excuse.
          </NarrativeBlock>
          <NarrativeBlock kicker="How" title="Speed with receipts">
            High-consequence work stays visible and reviewable. The point is not to slow the campaign down—it is to stop improvising the same risk in six Slack threads because nobody shares a source of truth.
          </NarrativeBlock>
        </div>
      </Section>

      <Section
        title="What the platform is (the outer ring)"
        intro="Concrete layers and lanes—this is the catalog serious teams use to pressure-test completeness. If you cannot name the layer, you cannot hold a vendor accountable when the week goes hot. RedDirt OS is designed so leadership sees posture, operators execute inside governed lanes, and integrations remain honest about what is configured vs what is marketing fantasy."
      >
        <div style={{ display: "grid", gap: "0.75rem" }}>
          <NarrativeBlock kicker="Command" title="Cockpit / command layer">
            Morning rhythm, ranked exceptions, readiness vs blocked, principal decisions only when the object model proves authority is required—not when someone is loud on text.
          </NarrativeBlock>
          <NarrativeBlock kicker="Workflow" title="Workflow layer">
            Intake, review, approvals, execution eligibility, downstream task generation—especially where calendar and comms collide.
          </NarrativeBlock>
          <NarrativeBlock kicker="Data" title="Data layer">
            Profiles, provenance, segmentation explainability, suppression and consent posture—designed to reduce silent corruption and list fantasy.
          </NarrativeBlock>
          <NarrativeBlock kicker="Governance" title="Governance layer">
            Approvals, audit trails, role-safe workflows, no-accidental-send patterns—velocity with adult supervision.
          </NarrativeBlock>
          <NarrativeBlock kicker="Lanes" title="Lane execution layer">
            Fundraising + Good Change, outreach, calendar, field, counties, content, intelligence, compliance preparation, implementation—each drillable without losing the command narrative.
          </NarrativeBlock>
          <NarrativeBlock kicker="Surfaces" title="Operator execution">
            Queues, editors, checklists, maps—the work staff actually does—always tied back to cockpit posture so leadership is not guessing.
          </NarrativeBlock>
        </div>
        <div className="rd-stack-2col" style={{ marginTop: "1.5rem" }}>
          <OriginalVisualFrame title="Stack → cockpit consolidation" caption="Metaphor: scattered tools vs one governed command layer — original illustration.">
            <CampaignStackComparison />
          </OriginalVisualFrame>
          <OriginalVisualFrame title="Capability mesh across lanes" caption="Abstract constellation — not a live dependency graph.">
            <FeatureConstellation />
          </OriginalVisualFrame>
        </div>
        <OriginalVisualFrame
          title="Fragmented stack vs governed OS (index illustration)"
          caption="Higher is not “better” on every axis—read the labels. The story is latency and thrash down, safety and CFO confidence up."
          style={{ marginTop: "1.25rem" }}
        >
          <FragmentedVsGovernedBarsMock />
        </OriginalVisualFrame>
      </Section>

      <Section
        title="What the candidate and principal get (outcomes, not slogans)"
        intro="Candidates feel chaos before staff do: whiplash messaging, schedule conflicts that become public, donor stories that do not match finance, field energy that does not match the map the principal saw. The OS is designed so the principal’s world gets calmer—not because problems disappear, but because problems arrive as ranked objects with owners instead of as emotional ambushes."
      >
        <div className="rd-stack-2col" style={{ marginTop: "0.5rem" }}>
          <OriginalVisualFrame
            title="Candidate-facing posture (radar — illustrative)"
            caption="Five dimensions campaigns fight over simultaneously. Polygons are conceptual, not scored from your race."
          >
            <CandidateOutcomeRadarMock />
          </OriginalVisualFrame>
          <div style={{ display: "grid", gap: "0.65rem" }}>
            <MetricStyleCard label="Principal time" value="Fewer 10pm fires" hint="Because exceptions are ranked before they become crises." />
            <MetricStyleCard label="Message discipline" value="One truth object" hint="Comms, press, surrogates inherit the same approved posture where configured." />
            <MetricStyleCard label="Money confidence" value="Treasurer legibility" hint="Pipeline aging and preparation signals show up in the same week field sees doors." />
          </div>
        </div>
      </Section>

      <Section
        title="What serious capital asks before it writes the check"
        intro="Boards and finance chairs do not fall in love with UI screenshots. They fall in love with reduced tail risk: fewer unforced errors, fewer lawyer weekends, fewer earned-media disasters born from internal misalignment. The scorecard below is a communication device—illustrative metrics that match the questions disciplined capital actually asks."
      >
        <OriginalVisualFrame title="Board readiness scorecard (mock)" caption="Trend sparks are decorative—representative of posture reviews, not your analytics stack." style={{ marginTop: "0.5rem" }}>
          <BoardReadinessScorecardMock />
        </OriginalVisualFrame>
        <NarrativeBlock kicker="Capital lens" title="What diligence sounds like when it is done well">
          “Show me the object model.” “Show me approvals on high-risk paths.” “Show me how calendar truth propagates.” “Show me what the principal sees at 7am.” “Show me what breaks first under GOTV pressure.” RedDirt’s platform story is built to survive those questions—not because every module is magically live everywhere, but because the architecture is honest about layers, lanes, and configuration depth.
        </NarrativeBlock>
      </Section>

      <Section
        title="Operator reality: consequence ordering in one glance"
        intro="This is the human spine of the OS: the same week expressed as ranked work, morning deltas, and multi-step approvals. If your operators cannot rehearse this narrative in a walkthrough, your platform purchase is still theoretical."
      >
        <OriginalVisualFrame title="Ranked next actions (mock)" caption="Queues tied to lanes — illustration only." style={{ marginTop: "0.5rem" }}>
          <RankedActionsMock />
        </OriginalVisualFrame>
        <div className="rd-stack-2col" style={{ marginTop: "1.25rem" }}>
          <OriginalVisualFrame title="Morning brief strip (mock)" caption="Time-stamped posture signals — schematic.">
            <MorningBriefMock />
          </OriginalVisualFrame>
          <OriginalVisualFrame title="Multi-role approval chain (mock)" caption="High-risk paths can require more than one signature — illustration, not policy.">
            <ApprovalChainMock />
          </OriginalVisualFrame>
        </div>
      </Section>

      <Section
        title="Calendar + events: where collisions become visible early"
        intro="Calendar is the cross-lane hub where races often break invisibly—until they break publicly. The platform story is governed intake, approval chains, tour holds, week density, and downstream comms and field artifacts tied to the same approved object. Pretty grids are optional; collision visibility is not."
      >
        <NarrativeBlock kicker="Workflow spine" title="Calendar is not a side app">
          When calendar truth is weak, outreach timing, field staffing, press, and finance hooks all improvise in parallel. RedDirt OS is designed so calendar objects carry dependencies and unlock downstream work deliberately—so the principal is not the accidental integrator of last resort.
        </NarrativeBlock>
        <div className="rd-stack-2col" style={{ marginTop: "1.25rem" }}>
          <OriginalVisualFrame title="Request rail (mock)" caption="Queue → review → draft → public-ready — schematic only.">
            <CalendarRequestMock />
          </OriginalVisualFrame>
          <OriginalVisualFrame title="Event dependency surface (mock)" caption="Illustrative gates on one event object.">
            <EventWorkstreamMock />
          </OriginalVisualFrame>
        </div>
        <div className="rd-stack-2col" style={{ marginTop: "1.25rem" }}>
          <OriginalVisualFrame title="Week at a glance (mock)" caption="Density + overlap hint — not a sync product.">
            <WeekGridMock />
          </OriginalVisualFrame>
          <OriginalVisualFrame title="Comms handoff (mock)" caption="Downstream artifacts after public-ready — illustrative gates.">
            <CommsDownstreamMock />
          </OriginalVisualFrame>
        </div>
      </Section>

      <Section
        title="Budget truth under pressure (finance psychology)"
        intro="Money is emotion in a campaign. When burn is opaque, leadership fills the gap with anxiety. The bars below are illustrative composition— not your ledger—but the psychological job is real: make tradeoffs discussable before they become irreversible."
      >
        <OriginalVisualFrame title="Burn composition (illustrative bars)" caption="Percentages are schematic— not a calculator or official allocation.">
          <BudgetBarsMock />
        </OriginalVisualFrame>
      </Section>

      <Section
        title="Implementation confidence: map, load, govern, train, expand"
        intro="No serious statewide deployment is a weekend flip. Capital invests when it sees a phased path that respects data reality and human adoption. The sequence below is an operator storyboard—dates and depth depend on your team, scope, and integrations."
      >
        <div className="rd-stack-2col" style={{ marginTop: "0.5rem" }}>
          <OriginalVisualFrame title="Adoption phases (mock)" caption="Horizontal sequence — not a project plan.">
            <AdoptionPhasesMock />
          </OriginalVisualFrame>
          <OriginalVisualFrame title="Compliance preparation ledger excerpt (mock)" caption="Preparation posture as objects — not filing advice.">
            <ComplianceLedgerMock />
          </OriginalVisualFrame>
        </div>
      </Section>

      <Section
        title="Command floor: the cockpit vision you are building toward"
        intro="The platform is not complete without a believable command surface. This paneled cockpit vision board ties layers back to one morning posture: rail, readiness wall, ranked actions, principal queue, lane strip—so operators and principals rehearse the same movie."
      >
        <OriginalVisualFrame title="Paneled cockpit — vision board (illustration)" caption="Marketing north star — not a screenshot of shipping software.">
          <CockpitVisionBoardMock />
        </OriginalVisualFrame>
      </Section>

      <Section
        title="Coverage at a glance"
        intro="Pressure-test completeness. If a serious statewide race needs it, the taxonomy is built to name it as an operating object—not a forgotten tab. Skeptical skims are a feature: density is how you earn the next meeting."
      >
        <CoverageMatrix lanes={lanes} />
      </Section>

      <Section
        title="Investment posture: carrying cost of coordination (illustrative)"
        intro="Some teams mentally model a material program fee to stand the system up—training, configuration, governance design—plus a monthly operating fee that pays for rhythm, support, and evolution. Think in terms of tens of thousands to start and single-digit thousands per month as a planning anchor, not a quote. If that sounds expensive, compare it to one week of senior staff thrash, one bad send, or one treasurer surprise during finance close. The illustration below is deliberately abstract: it is the shape sophisticated buyers sketch on a whiteboard before procurement turns it into a contract."
      >
        <OriginalVisualFrame
          title="Example engagement shape (not a price list)"
          caption="Illustrative structure only — every real deployment varies by scope, data, integrations, and training."
          style={{ marginTop: "0.5rem" }}
        >
          <EngagementShapeMock />
        </OriginalVisualFrame>
        <NarrativeBlock kicker="Sell the vision" title="If you would write $20M of checks to win, you should fund the coordination layer like infrastructure">
          Software is not the hero—posture is. The question is whether your operating picture is an asset your general consultant can defend in a board packet, or a fragile story held together by three exhausted directors and a group chat. RedDirt OS is designed to replace the fragile model: governed objects, visible readiness, explicit approvals, and a cockpit that makes the week legible before noon.
        </NarrativeBlock>
      </Section>

      <p className="rd-container" style={{ marginTop: "1rem", marginBottom: "0" }}>
        <Link className="rd-btn rd-btn-primary" href={routes.features}>
          Open the full feature map
        </Link>
        <Link className="rd-btn rd-btn-ghost" href={routes.contact} style={{ marginLeft: "0.5rem" }}>
          Talk scope and deployment
        </Link>
      </p>

      <CTASection
        title="Walk the demo like you mean it"
        body="Static narrative, specific week—built so a skeptical finance brain and a hungry field brain can both see themselves in the same operating system."
        primary={ctas.primary}
        secondary={ctas.demo}
        tertiary={ctas.lanes}
      />
    </>
  );
}
