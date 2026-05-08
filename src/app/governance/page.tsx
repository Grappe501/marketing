import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { NarrativeBlock } from "@/components/NarrativeBlock";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { OriginalVisualFrame } from "@/components/OriginalVisualFrame";
import { GovernanceShield } from "@/components/visuals/GovernanceShield";
import { RankedActionsMock } from "@/components/visuals/RankedActionsMock";
import { pageMeta } from "@/lib/seo";
import { routes } from "@/lib/routes";

export const metadata: Metadata = pageMeta(
  "Governance + safety",
  "Approvals, audit trails, role-safe workflows, no-accidental-send design, suppression/consent awareness, privacy posture, compliance-conscious operations—speed with control.",
  { path: "/governance" },
);

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Governance"
        title="The best campaign systems make the dangerous action hard to do by accident."
        subtitle="Approvals, audit trails, readiness gates, suppression checks, and role-safe workflows keep speed and control in the same system—without pretending risk can be reduced to zero or that governance replaces human judgment."
      />
      <Section title="Governance is how you scale humans" intro="Campaigns scale volunteers, shifts, sends, and spend. If dangerous actions are easy under fatigue, the system failed the humans—not the other way around.">
        <NarrativeBlock kicker="Design principle" title="Deliberate friction in the right places">
          No-accidental-send design is not hostility to operators—it is respect for October. The goal is fast trusted paths for low-risk repeats and strict traceability for high-risk actions.
        </NarrativeBlock>
        <OriginalVisualFrame title="What still needs a human signature (queue mock)" caption="Approvals surface as ranked, owned objects — illustration only." style={{ marginTop: "1.25rem" }}>
          <RankedActionsMock />
        </OriginalVisualFrame>
      </Section>
      <Section title="Shield + trail (illustration)" intro="Original SVG mark—not a certification badge.">
        <OriginalVisualFrame title="Governance mark" caption="Illustrative shield + check path.">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <GovernanceShield />
          </div>
        </OriginalVisualFrame>
      </Section>
      <CTASection
        title="Open governance lane"
        body="Approval gates, audit trails, role-safe workflows, privacy posture, compliance-conscious operations."
        primary={{ label: "Open lane", href: routes.lane("governance-security") }}
        secondary={{ label: "Outreach + distribution", href: routes.outreach }}
      />
    </>
  );
}
