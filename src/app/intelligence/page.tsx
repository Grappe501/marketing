import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { NarrativeBlock } from "@/components/NarrativeBlock";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { OriginalVisualFrame } from "@/components/OriginalVisualFrame";
import { FeatureConstellation } from "@/components/visuals/FeatureConstellation";
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
      <Section title="Intelligence only matters if it changes decisions" intro="If it does not route to message governance, surrogates, county pages, and field posture, it is expensive wallpaper.">
        <NarrativeBlock kicker="Handoff" title="Research → approvals → outbound artifacts">
          The operating story is a rail: intake and sourcing discipline, review, approvals where configured, then execution artifacts tied to the same objects the Cockpit can read.
        </NarrativeBlock>
        <OriginalVisualFrame title="Intel feeding the lane mesh (abstract)" caption="Briefings and research attach to execution lanes — schematic nodes only." style={{ marginTop: "1.25rem" }}>
          <FeatureConstellation />
        </OriginalVisualFrame>
      </Section>
      <Section title="Operational rail (illustrative)" intro="Original workflow rail.">
        <OriginalVisualFrame title="Intelligence handoff rail" caption="Illustrative: intake → review → approve → publish/execute → record.">
          <WorkflowRail />
        </OriginalVisualFrame>
      </Section>
      <Section title="Drilldowns" intro="Split across two lanes in the taxonomy: data/contact graph and intelligence briefings—both feed decisions.">
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
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
