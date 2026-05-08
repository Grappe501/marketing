import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { NarrativeBlock } from "@/components/NarrativeBlock";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { LaneConnectionMap } from "@/components/LaneConnectionMap";
import { WorkflowSteps } from "@/components/WorkflowSteps";
import { OriginalVisualFrame } from "@/components/OriginalVisualFrame";
import { CalendarRequestMock } from "@/components/visuals/CalendarRequestMock";
import { EmailLaunchMock } from "@/components/visuals/EmailLaunchMock";
import { LaneOverviewStripMock } from "@/components/visuals/LaneOverviewStripMock";
import { RankedActionsMock } from "@/components/visuals/RankedActionsMock";
import { WorkflowRail } from "@/components/visuals/WorkflowRail";
import { getCtas } from "@/lib/marketingData";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta(
  "How RedDirt OS works",
  "Governed workflows, shared operating data, readiness checks, approval gates, and command surfaces that show the next action—designed so dangerous work stays visible and operator-confirmed.",
  { path: "/how-it-works" },
);

const MODEL = [
  "Capture the work as objects: requests, audiences, pledges, events, county updates—not inbox mythology.",
  "Structure objects into lanes with owners, dependencies, and explicit status transitions.",
  "Apply approvals and readiness gates appropriate to risk tier: sends, spends, publishes, sensitive exports.",
  "Connect posture across lanes so the cockpit reads the same truth as operators in each lane.",
  "Push ranked next actions to operators—consequence-ordered, not notification-ordered.",
  "Preserve audit-friendly records: what changed, who approved, what executed—accountability without fantasy guarantees.",
];

export default function Page() {
  const ctas = getCtas();

  return (
    <>
      <PageHero
        eyebrow="How"
        title="Governed workflows. Shared data. Operator-safe execution."
        subtitle="RedDirt OS connects the campaign through approval gates, readiness checks, reusable records, and command surfaces that show what is ready, what is blocked, and what needs action next. It is designed so speed does not require abandoning control—because the dangerous path is made harder to walk by accident."
      />

      <Section
        title="The operating model"
        intro="Six steps your team can teach a new organizer in one sitting—then repeat every week until it becomes muscle memory. The model is deliberately boring on purpose: boring systems survive October. Exciting systems become a new pile of tabs by Thanksgiving."
      >
        <NarrativeBlock kicker="Discipline" title="Objects first, notifications second">
          If work is not represented as objects—owners, dependencies, readiness, approvals, timestamps—operators will continue to optimize for inbox speed instead of campaign safety. The six steps are the minimum grammar for a statewide race that refuses to run on heroic memory.
        </NarrativeBlock>
        <WorkflowSteps steps={MODEL} />
        <OriginalVisualFrame title="Monday still ranks work (mock)" caption="Even with a clean model, consequence ordering matters — illustration only." style={{ marginTop: "1.25rem" }}>
          <RankedActionsMock />
        </OriginalVisualFrame>
      </Section>

      <Section
        title="Every high-risk path gets a rail"
        intro="This is the moral core: intake → review → approve → execute → record. Not paperwork for its own sake—traceability under pressure. The rails below are examples, not an exhaustive list: the same spine should appear anywhere the campaign can hurt itself quickly—sends, publishes, sensitive exports, calendar public-ready transitions, and high-stakes segmentation changes."
      >
        <div className="rd-stack-2col">
          <OriginalVisualFrame title="Generic governance rail" caption="Intake → review → approve → execute → record — the spine across lanes.">
            <WorkflowRail />
          </OriginalVisualFrame>
          <OriginalVisualFrame title="Example: governed send rail" caption="Outreach is one high-risk path — illustration only.">
            <EmailLaunchMock />
          </OriginalVisualFrame>
        </div>
        <OriginalVisualFrame
          title="Example: calendar request rail"
          caption="Calendar HQ uses the same spine — request → review → draft → public-ready before comms stubs unlock (schematic only)."
          style={{ marginTop: "1.25rem" }}
        >
          <CalendarRequestMock />
        </OriginalVisualFrame>
      </Section>

      <Section
        title="Layers, not logos"
        intro="Enterprise buyers ask for architecture. Campaign operators ask for relief. This diagram is both: connective tissue, not a slide decoration. It is meant to answer the question ‘how does this hang together?’ without pretending every arrow is a live integration—deployment determines wiring, discipline determines posture."
      >
        <NarrativeBlock kicker="Whole race" title="Architecture should reduce fear, not increase buzzword density">
          If the diagram helps a finance lead and a field director point at the same object on a Monday call, it worked. If it becomes a slide trophy disconnected from operator habits, it failed.
        </NarrativeBlock>
        <LaneConnectionMap />
        <OriginalVisualFrame title="Twelve lanes as a scan line (mock)" caption="Lane posture as a quick read — schematic only." style={{ marginTop: "1.25rem" }}>
          <LaneOverviewStripMock />
        </OriginalVisualFrame>
      </Section>

      <CTASection title="See the lanes" body="Move from model to map: twelve lanes, eighty-two drilldowns, real operator language." primary={ctas.lanes} secondary={ctas.features} />
    </>
  );
}
