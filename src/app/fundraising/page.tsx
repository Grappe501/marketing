import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { NarrativeBlock } from "@/components/NarrativeBlock";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { OriginalVisualFrame } from "@/components/OriginalVisualFrame";
import { BudgetBarsMock } from "@/components/visuals/BudgetBarsMock";
import { CalendarRequestMock } from "@/components/visuals/CalendarRequestMock";
import { ComplianceLedgerMock } from "@/components/visuals/ComplianceLedgerMock";
import { FundraisingLaneMock } from "@/components/visuals/FundraisingLaneMock";
import { MorningBriefMock } from "@/components/visuals/MorningBriefMock";
import { RankedActionsMock } from "@/components/visuals/RankedActionsMock";
import { WorkflowRail } from "@/components/visuals/WorkflowRail";
import { getCtas } from "@/lib/marketingData";
import { pageMeta } from "@/lib/seo";
import { routes } from "@/lib/routes";

export const metadata: Metadata = pageMeta(
  "Fundraising + Good Change",
  "Good Change stays in the fundraising lane: donor pipeline, call time, pledges, events, finance workflow, contribution tracking, and compliance preparation connection—governed motion, not side spreadsheets.",
  { path: "/fundraising" },
);

export default function Page() {
  const ctas = getCtas();

  return (
    <>
      <PageHero
        eyebrow="Fundraising"
        title="Good Change turns fundraising into an operating lane, not a side spreadsheet."
        subtitle="Fundraising connects donor intent, call time, events, pledges, finance workflow, and compliance preparation into one governed lane—so leadership sees the same pipeline finance trusts, and follow-up does not die in inboxes."
      />
      <Section
        title="What breaks without a lane"
        intro="Warm leads cool. Pledges age. Finance learns late. Principals hear numbers that are not operational truth. That is not a motivation problem—it is an object model problem. Without a lane, fundraising becomes heroic hustle: call sheets in one place, pledges in another, documentation gaps discovered during review week, and the same donor story told three different ways in leadership updates."
      >
        <NarrativeBlock kicker="Good Change" title="A lane, not a slogan">
          Good Change is positioned as structured fundraising motion inside the OS: stages, owners, checkpoints, and treasurer-visible posture—without claiming every processor integration unless configured.
        </NarrativeBlock>
        <OriginalVisualFrame title="Finance + field pressure in one queue (mock)" caption="Fundraising does not float alone — ranked illustration." style={{ marginTop: "1.25rem" }}>
          <RankedActionsMock />
        </OriginalVisualFrame>
      </Section>
      <Section
        title="Fundraising events are calendar objects first"
        intro="Fundraising dinners, finance deadlines, and principal travel compete for the same week as field and comms. When events live only in a donor tool, staffing and message timing improvise in parallel. RedDirt OS is designed to connect fundraising moments to calendar HQ patterns so hosts, tiers, follow-ups, and documentation posture stay attached to the same public-ready discipline as rallies and tours."
      >
        <NarrativeBlock kicker="Cross-lane" title="Money moments inherit the same collision detection as everything else">
          The product story is not “more event pages.” It is that a fundraiser should carry the same dependency and approval posture as any other high-visibility calendar object—so finance sees the same object operators already approved.
        </NarrativeBlock>
        <div className="rd-stack-2col" style={{ marginTop: "1.25rem" }}>
          <OriginalVisualFrame title="Calendar request rail (shared metaphor) (mock)" caption="Schematic flow — fundraising events should ride the same rail as HQ events.">
            <CalendarRequestMock />
          </OriginalVisualFrame>
          <OriginalVisualFrame title="Monday brief picks up pipeline + windows (mock)" caption="Same cockpit rhythm — illustration only.">
            <MorningBriefMock />
          </OriginalVisualFrame>
        </div>
      </Section>

      <Section
        title="Lane flow (illustrative)"
        intro="Donor motion is staged work: pipeline stages, call time outcomes, pledge aging, finance review queues, and documentation gaps. The illustration below is original CSS/SVG composition—not stock photography—meant to show a connected rail instead of a disconnected spreadsheet myth."
      >
        <OriginalVisualFrame title="Fundraising lane mock" caption="Illustrative flow only; your deployment determines live integrations.">
          <FundraisingLaneMock />
        </OriginalVisualFrame>
        <div className="rd-stack-2col" style={{ marginTop: "1.25rem" }}>
          <OriginalVisualFrame title="Budget mix at a glance (mock)" caption="Schematic bars for leadership posture — not certified reporting.">
            <BudgetBarsMock />
          </OriginalVisualFrame>
          <OriginalVisualFrame title="Treasurer-visible ledger posture (mock)" caption="Illustrative ledger rows — preparation support, not a filing screenshot.">
            <ComplianceLedgerMock />
          </OriginalVisualFrame>
        </div>
        <OriginalVisualFrame title="Governed handoff pattern (illustrative)" caption="Intake → review → approve → execute → record — same spine as other high-risk lanes." style={{ marginTop: "1.25rem" }}>
          <WorkflowRail />
        </OriginalVisualFrame>
      </Section>
      <CTASection title="Open the fundraising lane" body="Donor pipeline, call time, events, pledges, finance workflow, contribution tracking." primary={{ label: "Open lane", href: routes.lane("fundraising-good-change") }} secondary={ctas.demo} />
    </>
  );
}
