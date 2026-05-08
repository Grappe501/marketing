import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { NarrativeBlock } from "@/components/NarrativeBlock";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { OriginalVisualFrame } from "@/components/OriginalVisualFrame";
import { GovernanceShield } from "@/components/visuals/GovernanceShield";
import { ApprovalChainMock } from "@/components/visuals/ApprovalChainMock";
import { AuditTrailMock } from "@/components/visuals/AuditTrailMock";
import { EmailLaunchMock } from "@/components/visuals/EmailLaunchMock";
import { LaneOverviewStripMock } from "@/components/visuals/LaneOverviewStripMock";
import { RankedActionsMock } from "@/components/visuals/RankedActionsMock";
import { SuppressionDiffMock } from "@/components/visuals/SuppressionDiffMock";
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
      <Section
        title="Governance is how you scale humans"
        intro="Campaigns scale volunteers, shifts, sends, and spend. If dangerous actions are easy under fatigue, the system failed the humans—not the other way around. Governance here means deliberate paths: fast repeats where risk is low, strict traceability where risk is high, and a cockpit that surfaces what still needs a signature before someone guesses under pressure."
      >
        <NarrativeBlock kicker="Design principle" title="Deliberate friction in the right places">
          No-accidental-send design is not hostility to operators—it is respect for October. The goal is fast trusted paths for low-risk repeats and strict traceability for high-risk actions.
        </NarrativeBlock>
        <OriginalVisualFrame title="What still needs a human signature (queue mock)" caption="Approvals surface as ranked, owned objects — illustration only." style={{ marginTop: "1.25rem" }}>
          <RankedActionsMock />
        </OriginalVisualFrame>
      </Section>
      <Section
        title="Shield + trail (illustration)"
        intro="The shield mark is a visual shorthand for operator-safe posture—not a certification badge, not a legal guarantee, and not a substitute for counsel. Pair it with the concrete rails next to it: approvals as a chain, audit lines as accountability support, and high-risk execution paths that stay visible before they execute."
      >
        <OriginalVisualFrame title="Governance mark" caption="Illustrative shield + check path.">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <GovernanceShield />
          </div>
        </OriginalVisualFrame>
        <div className="rd-stack-2col" style={{ marginTop: "1.25rem" }}>
          <OriginalVisualFrame title="Approval chain (mock)" caption="Roles and steps vary by deployment — four-stage illustration only.">
            <ApprovalChainMock />
          </OriginalVisualFrame>
          <OriginalVisualFrame title="Audit-style event log (mock)" caption="Immutable-style lines for narrative clarity — not a legal record claim.">
            <AuditTrailMock />
          </OriginalVisualFrame>
        </div>
      </Section>

      <Section
        title="Distribution and segmentation are governance surfaces too"
        intro="The most politically expensive mistakes are often list mistakes: wrong segment, wrong suppression snapshot, wrong approval state. Governance is not only ‘who signed the PDF’—it is how the campaign proves the launch object matched reality before execution. The illustrations below sit next to outreach pages on purpose: the same discipline should read as one system."
      >
        <NarrativeBlock kicker="No accidental send" title="Speed with control means the dangerous path is hard to walk by accident">
          Preflight, suppression deltas, final operator confirmation, and audit references are not paranoia—they are respect for October. The product story is that these gates live in the same operating picture as calendar and finance—not as a hidden vendor setting.
        </NarrativeBlock>
        <div className="rd-stack-2col" style={{ marginTop: "1.25rem" }}>
          <OriginalVisualFrame title="Email launch rail (illustrative)" caption="Audience → message → preflight → test → final approval → send — illustration only.">
            <EmailLaunchMock />
          </OriginalVisualFrame>
          <OriginalVisualFrame title="Suppression snapshot (mock)" caption="Conceptual pre/post diff — sample numbers only.">
            <SuppressionDiffMock />
          </OriginalVisualFrame>
        </div>
        <OriginalVisualFrame title="Twelve-lane posture strip (mock)" caption="Governance posture should be visible where lanes meet — schematic dots only." style={{ marginTop: "1.25rem" }}>
          <LaneOverviewStripMock />
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
