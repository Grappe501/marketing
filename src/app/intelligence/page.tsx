import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { NarrativeBlock } from "@/components/NarrativeBlock";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { OriginalVisualFrame } from "@/components/OriginalVisualFrame";
import { FeatureConstellation } from "@/components/visuals/FeatureConstellation";
import { ApprovalChainMock } from "@/components/visuals/ApprovalChainMock";
import { MorningBriefMock } from "@/components/visuals/MorningBriefMock";
import { RankedActionsMock } from "@/components/visuals/RankedActionsMock";
import { WorkflowRail } from "@/components/visuals/WorkflowRail";
import { getCtas } from "@/lib/marketingData";
import { pageMeta } from "@/lib/seo";
import { routes } from "@/lib/routes";

export const metadata: Metadata = pageMeta(
  "Strategic intelligence",
  "Research becomes operational: opposition intelligence with sourcing discipline, briefings, message risk review, debate prep packets, county-specific briefs—connected to approvals and execution lanes.",
  { path: "/intelligence" },
);

export default function Page() {
  const ctas = getCtas();

  return (
    <>
      <PageHero
        eyebrow="Intelligence"
        title="Strategy gets sharper when research becomes operational."
        subtitle="RedDirt OS is designed to turn briefings, county intelligence, opposition research, message risk, and strategic notes into campaign-ready context—without unsourced attack fantasy and without pretending certainty where discipline matters more."
      />
      <Section
        title="Intelligence only matters if it changes decisions"
        intro="If it does not route to message governance, surrogates, county pages, and field posture, it is expensive wallpaper. Research that stays in PDFs becomes politics-by-vibes at the worst moments: surrogates repeat stale lines, county chairs get blindsided, and rapid response invents urgency that calendar and field cannot actually support. The OS story is operational routing: intelligence artifacts attach to approvals and execution objects the Cockpit can read."
      >
        <NarrativeBlock kicker="Handoff" title="Research → approvals → outbound artifacts">
          The operating story is a rail: intake and sourcing discipline, review, approvals where configured, then execution artifacts tied to the same objects the Cockpit can read.
        </NarrativeBlock>
        <OriginalVisualFrame title="Intel feeding the lane mesh (abstract)" caption="Briefings and research attach to execution lanes — schematic nodes only." style={{ marginTop: "1.25rem" }}>
          <FeatureConstellation />
        </OriginalVisualFrame>
      </Section>
      <Section
        title="Operational rail (illustrative)"
        intro="The rail below is the same moral spine used elsewhere on the site: intake → review → approve → publish/execute → record. Intelligence is not exempt from that spine—if anything, it needs it more, because the damage from unsourced attack fantasy or sloppy certainty is reputational and legal, not just operational."
      >
        <OriginalVisualFrame title="Intelligence handoff rail" caption="Illustrative: intake → review → approve → publish/execute → record.">
          <WorkflowRail />
        </OriginalVisualFrame>
        <div className="rd-stack-2col" style={{ marginTop: "1.25rem" }}>
          <OriginalVisualFrame title="Brief as operating surface (mock)" caption="Intel and gates show up alongside exceptions in the same rhythm — illustration only.">
            <MorningBriefMock />
          </OriginalVisualFrame>
          <OriginalVisualFrame title="Multi-role review (mock)" caption="Research and message risk can require explicit review steps — illustration only.">
            <ApprovalChainMock />
          </OriginalVisualFrame>
        </div>
        <OriginalVisualFrame title="Ranked consequences still win Monday (mock)" caption="Intel work competes with sends, deadlines, and field gaps — same queue discipline." style={{ marginTop: "1.25rem" }}>
          <RankedActionsMock />
        </OriginalVisualFrame>
      </Section>
      <Section
        title="Drilldowns"
        intro="The taxonomy splits the story across two lanes on purpose: the data + contact graph is where provenance, segmentation explainability, and list hygiene live; intelligence + briefings is where research artifacts, county packets, debate prep, and message risk review live. Both feed decisions—and both should connect back to governance and execution rails instead of living as separate libraries."
      >
        <NarrativeBlock kicker="Where to go next" title="Pick the lane that matches the work you are holding">
          If your pain is list corruption and explainability, start in data + contact. If your pain is briefing freshness and surrogate discipline, start in intelligence briefings. Either way, the feature map is written so operators can recognize their week in concrete objects—not vendor categories.
        </NarrativeBlock>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginTop: "1rem" }}>
          <Link className="rd-btn rd-btn-ghost" href={routes.lane("data-voter-contact")}>
            Data + contact lane
          </Link>
          <Link className="rd-btn rd-btn-ghost" href={routes.lane("intelligence-briefings")}>
            Intelligence briefings lane
          </Link>
          <Link className="rd-btn rd-btn-primary" href={routes.features}>
            Feature map
          </Link>
        </div>
      </Section>
      <CTASection title="Keep drilling" body="Opposition intelligence, research briefings, message risk, debate prep, county briefs." primary={ctas.features} secondary={ctas.demo} />
    </>
  );
}
