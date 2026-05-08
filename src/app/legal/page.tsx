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
        intro="Plain language guardrails for campaigns, finance leads, and counsel—without turning the page into fear-mongering."
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
      <Section title="Non-affiliation" intro="RedDirt Operating Systems is not affiliated with any government office, state portal, or election authority.">
        <div className="rd-panel" style={{ padding: "1rem", color: "var(--muted)" }}>
          Nothing in this site should be read as official endorsement by the Arkansas Secretary of State or any government office. Any Arkansas SOS reference used in this site is strictly to clarify
          non-affiliation and to describe preparation/export/handoff posture—not to imply partnership, certification, or guaranteed access to official systems.
        </div>
      </Section>
      <Section title="Compliance-support posture" intro="Campaigns remain responsible for filings, disclosures, and legal obligations.">
        <div className="rd-panel" style={{ padding: "1rem", color: "var(--muted)" }}>
          The platform narrative emphasizes preparation, visibility, record discipline, and operator-guided review. It does not claim to replace counsel, automated filing, or deterministic regulatory outcomes.
          Where workflows are described as integration-ready, that means configuration posture—not a universal guarantee.
        </div>
      </Section>
      <Section title="Treasurer / counsel review" intro="Finance and legal judgment remain human responsibilities.">
        <div className="rd-panel" style={{ padding: "1rem", color: "var(--muted)" }}>
          RedDirt OS language is designed to support export packages, completeness checks, and review queues that make treasurer and counsel work easier—not to remove their authority or accountability.
        </div>
      </Section>
      <Section title="Operator responsibility" intro="Governance reduces risk; it does not eliminate human judgment.">
        <div className="rd-panel" style={{ padding: "1rem", color: "var(--muted)" }}>
          Operators are responsible for approvals, list correctness, message content, data handling practices, and adherence to provider and legal requirements. Audit trails support accountability; they do
          not replace it.
        </div>
      </Section>
      <Section title="Data privacy placeholder" intro="Publish a real privacy policy when intake exists.">
        <div className="rd-panel" style={{ padding: "1rem", color: "var(--muted)" }}>
          This static marketing build includes no analytics trackers or third-party embeds by design. When intake exists, document what you collect, why, retention, access controls, and subprocessors—then
          link it here.
        </div>
      </Section>
      <Section title="Product vision / implementation status" intro="Capabilities are described with disciplined product language unless your deployment contract explicitly states otherwise.">
        <div className="rd-panel" style={{ padding: "1rem", color: "var(--muted)" }}>
          {site.legalShort}
        </div>
      </Section>
    </>
  );
}
