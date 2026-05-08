import type { Metadata } from "next";
import Link from "next/link";
import { CoverageMatrix } from "@/components/CoverageMatrix";
import { CTASection } from "@/components/CTASection";
import { NarrativeBlock } from "@/components/NarrativeBlock";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { getCtas, getLanes } from "@/lib/marketingData";
import { pageMeta } from "@/lib/seo";
import { routes } from "@/lib/routes";

export const metadata: Metadata = pageMeta(
  "Platform overview",
  "Command layer, workflow layer, data layer, governance layer, lane execution, and cockpit visibility—connective tissue for a statewide campaign operating system.",
  { path: "/platform" },
);

export default function Page() {
  const lanes = getLanes();
  const ctas = getCtas();

  return (
    <>
      <PageHero
        eyebrow="Platform"
        title="The platform is the connective tissue."
        subtitle="RedDirt OS is designed as layers working together: leadership sees readiness in the cockpit, operators execute inside governed lanes, data stays source-aware, governance constrains high-risk actions, and workflows turn requests into audit-friendly outcomes."
      />

      <Section title="Six layers serious teams should demand" intro="This is the enterprise backbone expressed in campaign language—no buzzword bingo, just the parts a statewide race actually runs on.">
        <div style={{ display: "grid", gap: "0.75rem" }}>
          <NarrativeBlock kicker="Command" title="Cockpit / command layer">
            Morning rhythm, ranked exceptions, readiness vs blocked, principal decisions only when the object model proves it is necessary.
          </NarrativeBlock>
          <NarrativeBlock kicker="Workflow" title="Workflow layer">
            Intake, review, approvals, execution eligibility, downstream task generation—especially for calendar and comms collisions.
          </NarrativeBlock>
          <NarrativeBlock kicker="Data" title="Data layer">
            Profiles, provenance, segmentation explainability, suppression/consent posture—designed to reduce silent corruption.
          </NarrativeBlock>
          <NarrativeBlock kicker="Governance" title="Governance layer">
            Approvals, audit trails, role-safe workflows, no-accidental-send patterns—speed with control.
          </NarrativeBlock>
          <NarrativeBlock kicker="Lanes" title="Lane execution layer">
            Fundraising + Good Change, outreach, calendar, field, counties, content, intelligence, compliance preparation, implementation.
          </NarrativeBlock>
          <NarrativeBlock kicker="Execution" title="Operator surfaces">
            The screens operators live in: queues, editors, checklists, maps—always tied back to the cockpit posture.
          </NarrativeBlock>
        </div>
      </Section>

      <Section title="Coverage at a glance" intro="Try to find the missing lane. This matrix is intentionally dense—Pass 3 will add motion; Pass 2 adds the persuasive weight.">
        <CoverageMatrix lanes={lanes} />
      </Section>

      <p className="rd-container" style={{ marginTop: "1rem" }}>
        <Link className="rd-btn rd-btn-primary" href={routes.features}>
          Open the feature map
        </Link>
      </p>

      <CTASection
        title="Walk the demo narrative"
        body="See the week told as one operating system—static, but specific."
        primary={ctas.primary}
        secondary={ctas.demo}
        tertiary={ctas.lanes}
      />
    </>
  );
}
