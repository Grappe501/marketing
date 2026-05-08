import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { NarrativeBlock } from "@/components/NarrativeBlock";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { OriginalVisualFrame } from "@/components/OriginalVisualFrame";
import { ComplianceLedgerMock } from "@/components/visuals/ComplianceLedgerMock";
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

      <Section title="Exact safe framing (read this twice)" intro="This sentence is intentional legal hygiene for Arkansas-facing races and similar contexts.">
        <NarrativeBlock kicker="Legal discipline" title="Preparation and handoff—not replacement">
          RedDirt OS is designed to support operator-guided preparation and handoff workflows for filing requirements. It does not replace legal counsel, treasurer review, or official filing responsibility.
          Nothing on this site claims partnership with the Arkansas Secretary of State’s office or any government filing system; any Arkansas SOS mention belongs only as non-affiliation and preparation/export
          posture—not as endorsement or guaranteed integration.
        </NarrativeBlock>
      </Section>

      <Section title="What the operator sees" intro="Ledger discipline as a weekly habit: contributions, expenditures, vendors, deadlines—owned objects, not panic spreadsheets.">
        <OriginalVisualFrame title="Ledger mock (original illustration)" caption="Illustrative ledger rows—not a filing system screenshot.">
          <ComplianceLedgerMock />
        </OriginalVisualFrame>
      </Section>

      <Section
        title="What RedDirt does not claim"
        intro="No guaranteed compliance. No official certification. No deterministic regulatory outcome. No substitute for counsel. No implied government endorsement."
      />

      <CTASection title="Open the budget + compliance lane" body="Explore budget command center, vendor controls, audit-ready records, and filing proximity signals as features—not magic." primary={{ label: "Open lane", href: routes.lane("budget-compliance") }} secondary={ctas.contact} />
    </>
  );
}
