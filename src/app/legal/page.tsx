import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { getSite } from "@/lib/marketingData";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta(
  "Legal",
  "Non-affiliation with government offices, no official endorsement, compliance-support and preparation-only posture, operator responsibility, treasurer/counsel review, privacy placeholder, product vision language.",
  { path: "/legal", ogVariant: "default" },
);

export default function Page() {
  const site = getSite();

  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Hard boundaries, plainly stated."
        subtitle="This marketing site is not legal advice. It is written to be careful about government affiliation, compliance guarantees, and filing responsibility—while still selling a serious operating system story."
      />
      <Section
        title="Statements we intend every reader to see"
        intro="Plain language guardrails for campaigns, finance leads, and counsel—without turning the page into fear-mongering. The goal is clarity: what the product is designed to support, what it explicitly does not replace, and where human responsibility remains non-negotiable."
      >
        <div className="rd-panel" style={{ padding: "1rem", color: "var(--muted)" }}>
          <ul style={{ margin: 0, paddingLeft: "1.1rem" }}>
            <li style={{ marginBottom: "0.55rem" }}>
              RedDirt OS is not affiliated with, endorsed by, or certified by any Secretary of State office or government filing portal.
            </li>
            <li style={{ marginBottom: "0.55rem" }}>
              RedDirt OS supports preparation, review, export, handoff, and operator workflows—it does not replace legal counsel, treasurer review, official filing responsibility, or jurisdiction-specific
              compliance advice.
            </li>
            <li style={{ marginBottom: "0.55rem" }}>
              Campaigns remain responsible for final filings, records, permissions, and legal obligations.
            </li>
            <li>
              Product pages may describe platform vision and configurable capabilities; implementation details depend on deployment.
            </li>
          </ul>
        </div>
      </Section>
      <Section
        title="Non-affiliation"
        intro="RedDirt Operating Systems is not affiliated with any government office, state portal, or election authority. This matters because campaigns operate adjacent to official systems—and marketing language can accidentally imply endorsement, certification, or guaranteed access if it is not disciplined."
      >
        <div className="rd-panel" style={{ padding: "1rem", color: "var(--muted)" }}>
          Nothing in this site should be read as official endorsement by the Arkansas Secretary of State or any government office. Any Arkansas SOS reference used in this site is strictly to clarify
          non-affiliation and to describe preparation/export/handoff posture—not to imply partnership, certification, or guaranteed access to official systems.
        </div>
      </Section>
      <Section
        title="Compliance-support posture"
        intro="Campaigns remain responsible for filings, disclosures, and legal obligations. Software can improve preparation, visibility, and record discipline—but it cannot absorb legal accountability, and it should not pretend to."
      >
        <div className="rd-panel" style={{ padding: "1rem", color: "var(--muted)" }}>
          The platform narrative emphasizes preparation, visibility, record discipline, and operator-guided review. It does not claim to replace counsel, automated filing, or deterministic regulatory outcomes.
          Where workflows are described as integration-ready, that means configuration posture—not a universal guarantee.
        </div>
      </Section>
      <Section
        title="Treasurer / counsel review"
        intro="Finance and legal judgment remain human responsibilities. The OS story is built to support review queues, completeness checks, and export packages that make closing the loop easier—not to remove the humans who sign, file, and defend the campaign’s obligations."
      >
        <div className="rd-panel" style={{ padding: "1rem", color: "var(--muted)" }}>
          RedDirt OS language is designed to support export packages, completeness checks, and review queues that make treasurer and counsel work easier—not to remove their authority or accountability.
        </div>
      </Section>
      <Section
        title="Operator responsibility"
        intro="Governance reduces risk; it does not eliminate human judgment. Tools can make the dangerous path harder to walk by accident—but operators remain responsible for what they approve, what they send, and what they export."
      >
        <div className="rd-panel" style={{ padding: "1rem", color: "var(--muted)" }}>
          Operators are responsible for approvals, list correctness, message content, data handling practices, and adherence to provider and legal requirements. Audit trails support accountability; they do
          not replace it.
        </div>
      </Section>
      <Section
        title="Data privacy placeholder"
        intro="Publish a real privacy policy when intake exists. Until then, this page should still be explicit about what the static build does not do: no analytics trackers, no third-party embeds, and no silent collection—because trust is part of the product story, not an afterthought."
      >
        <div className="rd-panel" style={{ padding: "1rem", color: "var(--muted)" }}>
          This static marketing build includes no analytics trackers or third-party embeds by design. When intake exists, document what you collect, why, retention, access controls, and subprocessors—then
          link it here.
        </div>
      </Section>
      <Section
        title="Product vision / implementation status"
        intro="Capabilities are described with disciplined product language unless your deployment contract explicitly states otherwise. ‘Designed’, ‘configurable’, and ‘operator-guided’ are intentional verbs: they describe intent and posture without claiming universal production-live guarantees."
      >
        <div className="rd-panel" style={{ padding: "1rem", color: "var(--muted)" }}>
          {site.legalShort}
        </div>
      </Section>
    </>
  );
}
