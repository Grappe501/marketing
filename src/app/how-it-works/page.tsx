import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { LaneConnectionMap } from "@/components/LaneConnectionMap";
import { WorkflowSteps } from "@/components/WorkflowSteps";
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

      <Section title="The operating model" intro="Six steps your team can teach a new organizer in one sitting—then repeat every week until it becomes muscle memory.">
        <WorkflowSteps steps={MODEL} />
      </Section>

      <Section title="Every high-risk path gets a rail" intro="This is the moral core: intake → review → approve → execute → record. Not paperwork for its own sake—traceability under pressure.">
        <WorkflowRail />
      </Section>

      <Section title="Layers, not logos" intro="Enterprise buyers ask for architecture. Campaign operators ask for relief. This diagram is both: connective tissue, not a slide decoration.">
        <LaneConnectionMap />
      </Section>

      <CTASection title="See the lanes" body="Move from model to map: twelve lanes, eighty-two drilldowns, real operator language." primary={ctas.lanes} secondary={ctas.features} />
    </>
  );
}
