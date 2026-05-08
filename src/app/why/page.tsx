import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { MetricStyleCard } from "@/components/MetricStyleCard";
import { NarrativeBlock } from "@/components/NarrativeBlock";
import { OriginalVisualFrame } from "@/components/OriginalVisualFrame";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { SystemDiagram } from "@/components/SystemDiagram";
import { ArkansasCountyHeatMock } from "@/components/visuals/ArkansasCountyHeatMock";
import { ApprovalChainMock } from "@/components/visuals/ApprovalChainMock";
import { CampaignStackComparison } from "@/components/visuals/CampaignStackComparison";
import { CockpitMockup } from "@/components/visuals/CockpitMockup";
import { ComplianceLedgerMock } from "@/components/visuals/ComplianceLedgerMock";
import { CountyMapIllustration } from "@/components/visuals/CountyMapIllustration";
import { LaneOverviewStripMock } from "@/components/visuals/LaneOverviewStripMock";
import { MorningBriefMock } from "@/components/visuals/MorningBriefMock";
import { PrecinctHeatMock } from "@/components/visuals/PrecinctHeatMock";
import { RankedActionsMock } from "@/components/visuals/RankedActionsMock";
import { CountyBriefingFactSheetMock, DataFactsStripMock } from "@/components/visuals/StoryDataFactMocks";
import { SuppressionDiffMock } from "@/components/visuals/SuppressionDiffMock";
import { WorkflowRail } from "@/components/visuals/WorkflowRail";
import { getCtas } from "@/lib/marketingData";
import { pageMeta } from "@/lib/seo";
import { routes } from "@/lib/routes";

export const metadata: Metadata = pageMeta(
  "Why RedDirt OS",
  "Story-first case for a statewide campaign operating system: fragmented tools vs governed facts, county and briefing surfaces as data objects, compliance and list posture, and the cockpit that compresses the week into ranked truth.",
  { path: "/why" },
);

export default function Page() {
  const ctas = getCtas();

  return (
    <>
      <PageHero
        eyebrow="Story"
        title="Campaigns do not lose control all at once. They lose it one disconnected tool at a time."
        subtitle="This page is the story tab’s spine: why a statewide race needs an operating system—not another dashboard. You will see the same mock surfaces we use on Counties, Intelligence, Field, and Demo: briefing tables, aggregate fact strips, suppression and compliance posture, maps and heat—each standing in for the kind of object a serious HQ should argue from, not recreate from memory every Monday."
      />

      <Section
        title="The stack was never designed to run the campaign"
        intro="Tools are not the enemy. Disconnection is. When lanes do not share an object model, operators duplicate work, approvals disappear into side channels, and leadership learns about risk when it is already expensive."
      >
        <NarrativeBlock kicker="Operator overload" title="Everyone is busy. Nobody is accountable.">
          Urgent work becomes invisible when it is not represented as objects: owners, dependencies, readiness, approvals, and timestamps. RedDirt OS is designed to capture that work as governed lanes so the next action is obvious—and high-consequence actions are hard to do accidentally.
        </NarrativeBlock>
        <div className="rd-stack-2col" style={{ marginTop: "1.25rem" }}>
          <OriginalVisualFrame title="Fragments vs governed cockpit layer" caption="Original SVG — scattered tools consolidating into one command surface (illustration).">
            <CampaignStackComparison />
          </OriginalVisualFrame>
          <OriginalVisualFrame title="Readiness + exception density (mock)" caption="CSS composition — not a live dashboard or customer deployment.">
            <CockpitMockup />
          </OriginalVisualFrame>
        </div>
      </Section>

      <Section
        title="Leadership blind spots are a design failure"
        intro="Principals should not have to micromanage trivia to feel safe. They should be able to see readiness and exceptions without drowning in operational noise. Blind spots are not a personality problem—they are a visibility design problem: the campaign never built a single object model for what is blocked, what is ready, and what requires authority."
      >
        <NarrativeBlock kicker="Command" title="The cockpit is not vanity metrics">
          Executive visibility should be about readiness gates, deadline proximity, message risk, county pressure, and field/GOTV exceptions—ranked, owned, and tied to real decisions.
        </NarrativeBlock>
        <OriginalVisualFrame
          title="Ranked next actions (illustration)"
          caption="Operator queue ordered by consequence — conceptual layout only."
          style={{ marginTop: "1.25rem" }}
        >
          <RankedActionsMock />
        </OriginalVisualFrame>
      </Section>

      <Section
        title="Chapter 1 — Facts without a spine become folklore"
        intro="Data is not the same as truth. Spreadsheets, exports, and decks drift. A statewide program generates real quantities: audiences, suppressions, filing windows, county briefings, field coverage. Without an OS, those quantities live in different brains. With an OS, they are designed to become rows you can interrogate: freshness, owner, source object, and what changed since yesterday."
      >
        <NarrativeBlock kicker="Data + facts" title="HQ deserves aggregates that do not gaslight the field">
          The strip below is fictional—but the categories are not. This is the shape of “what we think we know” when list hygiene, compliance preparation, and county SLAs are supposed to show up in the same week as a launch.
        </NarrativeBlock>
        <OriginalVisualFrame title="Aggregate fact strip (mock)" caption="Illustrative statewide numbers — not your file, not your list." style={{ marginTop: "1rem" }}>
          <DataFactsStripMock />
        </OriginalVisualFrame>
        <div className="rd-stack-2col" style={{ marginTop: "1.25rem" }}>
          <OriginalVisualFrame title="Send-time suppression diff (mock)" caption="Pre-flight vs locked snapshot — conceptual only.">
            <SuppressionDiffMock />
          </OriginalVisualFrame>
          <OriginalVisualFrame title="Compliance preparation ledger (mock)" caption="Same posture language as the Budget + Compliance lane — illustration only.">
            <ComplianceLedgerMock />
          </OriginalVisualFrame>
        </div>
      </Section>

      <Section
        title="Chapter 2 — Seventy-five local races, one statewide clock"
        intro="The Counties lane and Field lane pages already show this visually: a statewide race is attention across geographies, not a single headline. When county truth is weak, surrogates improvise, comms ships into local collisions, and GOTV discovers gaps too late. The maps below reuse the same marketing mocks as `/counties`, `/field`, and the guided `/demo`—schematic heat, not voter data or official boundaries."
      >
        <NarrativeBlock kicker="County intelligence" title="Local truth has to be an object, not a slide deck">
          Drilldown county pages are where the story deepens; here we show the HQ-wide posture: where attention is clustering, where a fictional county’s precincts look thin, and the abstract tile surface that stands in for “we know where we are blind.”
        </NarrativeBlock>
        <OriginalVisualFrame title="Statewide attention tiles (illustration)" caption="Same SVG metaphor as the Counties + Field pages — not a certified map product.">
          <CountyMapIllustration />
        </OriginalVisualFrame>
        <div className="rd-stack-2col" style={{ marginTop: "1.25rem" }}>
          <OriginalVisualFrame title="Schematic statewide county heat (mock)" caption="Stylized region with invented counties — not official geography or results.">
            <ArkansasCountyHeatMock />
          </OriginalVisualFrame>
          <OriginalVisualFrame title="Fictional county — precinct attention (mock)" caption="Invented footprint — not real precinct boundaries.">
            <PrecinctHeatMock />
          </OriginalVisualFrame>
        </div>
        <p className="rd-container" style={{ marginTop: "1rem", marginBottom: 0 }}>
          <Link className="rd-btn rd-btn-ghost" href={routes.counties}>
            Open the Counties story
          </Link>
          <Link className="rd-btn rd-btn-ghost" href={routes.field} style={{ marginLeft: "0.5rem" }}>
            Field + GOTV posture
          </Link>
        </p>
      </Section>

      <Section
        title="Chapter 3 — Briefings rot when they are not operational objects"
        intro="The Intelligence lane shows the moral spine: research and briefings have to route to approvals and execution. Otherwise PDFs age in silence while the principal hears something newer in a hallway. The table mock below is a briefing fact sheet shape: regions, leader posture, issue signals, field facts, freshness, and the source object that row came from—exactly the kind of screen a cockpit can lift when counties are first-class."
      >
        <OriginalVisualFrame title="County briefing fact table (mock)" caption="Fictional regions — demonstrates row-level briefing discipline, not live intel." style={{ marginTop: "0.5rem" }}>
          <CountyBriefingFactSheetMock />
        </OriginalVisualFrame>
        <div className="rd-stack-2col" style={{ marginTop: "1.25rem" }}>
          <OriginalVisualFrame title="Morning brief strip (mock)" caption="Same component as Intelligence + Cockpit pages — time-stamped deltas as operating surface.">
            <MorningBriefMock />
          </OriginalVisualFrame>
          <OriginalVisualFrame title="Multi-role review (mock)" caption="Briefings and risky lines attach to explicit review — illustration only.">
            <ApprovalChainMock />
          </OriginalVisualFrame>
        </div>
        <OriginalVisualFrame title="Governance spine (illustrative)" caption="Intake → review → approve → execute → record — intelligence is not exempt." style={{ marginTop: "1rem" }}>
          <WorkflowRail />
        </OriginalVisualFrame>
        <p className="rd-container" style={{ marginTop: "1rem", marginBottom: 0 }}>
          <Link className="rd-btn rd-btn-primary" href={routes.intelligence}>
            Strategic intelligence + briefings
          </Link>
          <Link className="rd-btn rd-btn-ghost" href={routes.demo} style={{ marginLeft: "0.5rem" }}>
            See it in the guided demo
          </Link>
        </p>
      </Section>

      <Section
        title="Why a serious statewide race needs an operating system"
        intro="Because the alternative is expensive folklore: finance reconstructs reality during filing proximity, comms discovers suppression gaps under pressure, field learns county truth from texts, and leadership gets a fifth version of the story on Sunday night. An OS is how you buy the campaign a shared spine—data and facts in, governance on high-risk paths, cockpit posture out—without pretending humans disappear."
      >
        <SystemDiagram />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "0.75rem", marginTop: "1.25rem" }}>
          <MetricStyleCard label="Fact discipline" value="Source-aware rows" hint="Segments, briefings, and spend objects carry provenance where configured." />
          <MetricStyleCard label="Operational truth" value="One week object" hint="Calendar, counties, field, money, and comms align to the same clock." />
          <MetricStyleCard label="Governed speed" value="Receipts, not vibes" hint="Approvals and diffs exist so speed does not rely on heroic memory." />
        </div>
      </Section>

      <Section
        title="Closing truth — twelve lanes is coverage, not sprawl"
        intro="RedDirt OS exists because a statewide campaign is too important to run from scattered tabs and heroic memory. The product story is built to earn trust with discipline: designed capabilities, operator-guided workflows, and careful language around compliance and government systems. If the map feels dense, that is the point: serious races are dense—and the OS is supposed to absorb that density instead of hiding it behind a prettier dashboard."
      >
        <NarrativeBlock kicker="Whole race" title="You should be able to name the missing lane">
          If you cannot, the taxonomy is failing. The lane strip below is the same scan metaphor as everywhere else on the site—so the story tab stays consistent from Why → How it works → Platform → Demo.
        </NarrativeBlock>
        <div className="rd-stack-2col" style={{ marginTop: "1.25rem" }}>
          <OriginalVisualFrame title="Lane posture strip (mock)" caption="Twelve governed lanes as a schematic scan — not live monitoring.">
            <LaneOverviewStripMock />
          </OriginalVisualFrame>
          <OriginalVisualFrame title="Ranked next actions (mock)" caption="The same discipline as the Cockpit — illustration only.">
            <RankedActionsMock />
          </OriginalVisualFrame>
        </div>
      </Section>

      <CTASection
        title="Continue the story tab"
        body="How it works walks workflows; Platform sells the capital case; Demo runs the week with the same mocks you saw here."
        primary={{ label: "How it works", href: routes.howItWorks }}
        secondary={{ label: "Platform vision", href: routes.platform }}
        tertiary={ctas.demo}
      />
    </>
  );
}
