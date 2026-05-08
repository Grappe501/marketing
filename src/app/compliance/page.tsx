import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { NarrativeBlock } from "@/components/NarrativeBlock";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { OriginalVisualFrame } from "@/components/OriginalVisualFrame";
import { CalendarRequestMock } from "@/components/visuals/CalendarRequestMock";
import { ComplianceLedgerMock } from "@/components/visuals/ComplianceLedgerMock";
import { AuditTrailMock } from "@/components/visuals/AuditTrailMock";
import { BudgetBarsMock } from "@/components/visuals/BudgetBarsMock";
import { RankedActionsMock } from "@/components/visuals/RankedActionsMock";
import { WorkflowRail } from "@/components/visuals/WorkflowRail";
import { SuppressionDiffMock } from "@/components/visuals/SuppressionDiffMock";
import { getCtas } from "@/lib/marketingData";
import { pageMeta } from "@/lib/seo";
import { routes } from "@/lib/routes";

export const metadata: Metadata = pageMeta(
  "Budget + compliance preparation",
  "Budget command, vendor posture, contribution/expenditure reporting support, filing-adjacent deadline awareness, and audit-friendly records—operator-guided preparation and export/handoff workflows, not official filing guarantees.",
  { path: "/compliance" },
);

export default function Page() {
  const ctas = getCtas();

  return (
    <>
      <PageHero
        eyebrow="Compliance posture"
        title="Compliance preparation belongs in the operating rhythm—not reconstructed at the deadline."
        subtitle="RedDirt OS is designed to keep contribution, expenditure, vendor, budget, and reporting-support workflows connected so finance and leadership can see posture early—without claiming official portal filing, certification, or guaranteed compliance outcomes."
      />

      <Section
        title="Exact safe framing (read this twice)"
        intro="Campaign finance and filing language is where marketing usually gets sloppy—and where trust evaporates in a single careless sentence. This section is intentionally repetitive: it sets boundaries for Arkansas-facing races and any similar context. If the language feels conservative, that is the point: the OS story is preparation, visibility, and export discipline—not a substitute for counsel or the treasurer’s official role."
      >
        <NarrativeBlock kicker="Legal discipline" title="Preparation and handoff—not replacement">
          RedDirt OS is designed to support operator-guided preparation and handoff workflows for filing requirements. It does not replace legal counsel, treasurer review, or official filing responsibility.
          Nothing on this site claims partnership with the Arkansas Secretary of State’s office or any government filing system; any Arkansas SOS mention belongs only as non-affiliation and preparation/export
          posture—not as endorsement or guaranteed integration.
        </NarrativeBlock>
      </Section>

      <Section
        title="What the operator sees"
        intro="Ledger discipline is a weekly habit, not a quarterly panic: contributions, expenditures, vendors, deadlines, and documentation gaps should appear as owned objects with reviewers and dates. The point is not prettier spreadsheets—it is that finance posture becomes visible in the same operating picture as outreach gates, calendar density, and field exceptions, so leadership stops hearing three different versions of “we’re fine.”"
      >
        <OriginalVisualFrame title="Ledger mock (original illustration)" caption="Illustrative ledger rows—not a filing system screenshot.">
          <ComplianceLedgerMock />
        </OriginalVisualFrame>
        <div className="rd-stack-2col" style={{ marginTop: "1.25rem" }}>
          <OriginalVisualFrame title="Deadlines collide with public moments" caption="Calendar + compliance posture intersect — schematic flow only.">
            <CalendarRequestMock />
          </OriginalVisualFrame>
          <OriginalVisualFrame title="Cross-lane ranked pressure (mock)" caption="Finance and compliance windows compete with comms and field — ranked illustration.">
            <RankedActionsMock />
          </OriginalVisualFrame>
        </div>
        <div className="rd-stack-2col" style={{ marginTop: "1.25rem" }}>
          <OriginalVisualFrame title="Budget posture bars (mock)" caption="Illustrative allocation mix — not ledger math or a calculator.">
            <BudgetBarsMock />
          </OriginalVisualFrame>
          <OriginalVisualFrame title="Send-adjacent suppression snapshot (mock)" caption="Conceptual pre/post diff — numbers are sample composition only.">
            <SuppressionDiffMock />
          </OriginalVisualFrame>
        </div>
        <OriginalVisualFrame title="Review + handoff trail (mock)" caption="Operator-facing event lines for posture — not a filing or certification artifact." style={{ marginTop: "1.25rem" }}>
          <AuditTrailMock />
        </OriginalVisualFrame>
      </Section>

      <Section
        title="What RedDirt does not claim"
        intro="No guaranteed compliance. No official certification. No deterministic regulatory outcome. No substitute for counsel. No implied government endorsement. Those are not small-print tricks—they are product boundaries: the system is designed to make posture legible early and handoffs clean, while humans remain accountable for what actually gets filed and signed."
      >
        <NarrativeBlock kicker="Trust" title="Disciplined claims earn the right to depth elsewhere">
          When marketing promises magic, operators stop believing the rest of the map. The compliance lane is written to connect budget command, vendor documentation, contribution and expenditure tracking, deadline proximity, and review queues—so finance leads can run the week without reconstructing reality at the deadline.
        </NarrativeBlock>
        <div className="rd-stack-2col" style={{ marginTop: "1.25rem" }}>
          <OriginalVisualFrame
            title="Handoff rail (illustrative)"
            caption="Prepare → review → export/package → human filing responsibility — schematic only, not a filing system."
          >
            <WorkflowRail />
          </OriginalVisualFrame>
          <OriginalVisualFrame
            title="Cross-lane pressure still shows up here (mock)"
            caption="Compliance windows compete with sends, field, and calendar in the same ranked posture — illustration only."
          >
            <RankedActionsMock />
          </OriginalVisualFrame>
        </div>
      </Section>

      <CTASection title="Open the budget + compliance lane" body="Explore budget command center, vendor controls, audit-ready records, and filing proximity signals as features—not magic." primary={{ label: "Open lane", href: routes.lane("budget-compliance") }} secondary={ctas.contact} />
    </>
  );
}
