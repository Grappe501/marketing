import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { NarrativeBlock } from "@/components/NarrativeBlock";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { OriginalVisualFrame } from "@/components/OriginalVisualFrame";
import { EmailLaunchMock } from "@/components/visuals/EmailLaunchMock";
import { RankedActionsMock } from "@/components/visuals/RankedActionsMock";
import { pageMeta } from "@/lib/seo";
import { routes } from "@/lib/routes";

export const metadata: Metadata = pageMeta(
  "Outreach + distribution",
  "Distribution is governance: audience studio, message studio, email command center, suppression management, preflight, final operator confirmation—designed so dangerous sends are hard to do accidentally.",
  { path: "/outreach" },
);

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Outreach"
        title="Distribution is governance, not just sending."
        subtitle="RedDirt OS treats outreach as a governed workflow from audience definition through message approval, suppression posture, readiness checks, and final operator confirmation—so speed does not require abandoning control."
      />
      <Section title="The real risk is the last mile" intro="Most damage happens when fatigue meets a send button: wrong segment, wrong approval state, wrong suppression snapshot. The OS story is deliberate confirmation patterns—not paranoia, but adult supervision.">
        <NarrativeBlock kicker="Execution" title="Preflight is a campaign habit">
          Provider sync readiness can be integration-ready where configured—but the moral requirement is operator-guided validation: mapping, permissions, suppression deltas, and proof that the launch object matches reality.
        </NarrativeBlock>
        <OriginalVisualFrame title="What still has to surface before send (queue mock)" caption="Ranked work across lanes — outreach is not an island." style={{ marginTop: "1.25rem" }}>
          <RankedActionsMock />
        </OriginalVisualFrame>
      </Section>
      <Section title="Launch rail (illustrative)" intro="Original CSS/SVG-style rail—not a screenshot.">
        <OriginalVisualFrame title="Email launch mock" caption="Audience → message → preflight → test → final approval → send.">
          <EmailLaunchMock />
        </OriginalVisualFrame>
      </Section>
      <CTASection
        title="Open outreach lane"
        body="Email command center, audience studio, message studio, suppression, distribution planning."
        primary={{ label: "Open lane", href: routes.lane("outreach-distribution") }}
        secondary={{ label: "Governance + safety", href: routes.governance }}
      />
    </>
  );
}
