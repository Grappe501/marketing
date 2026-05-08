import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { NarrativeBlock } from "@/components/NarrativeBlock";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { OriginalVisualFrame } from "@/components/OriginalVisualFrame";
import { EmailLaunchMock } from "@/components/visuals/EmailLaunchMock";
import { SuppressionDiffMock } from "@/components/visuals/SuppressionDiffMock";
import { RankedActionsMock } from "@/components/visuals/RankedActionsMock";
import { WeekGridMock } from "@/components/visuals/WeekGridMock";
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
        <div className="rd-stack-2col">
          <OriginalVisualFrame title="Email launch mock" caption="Audience → message → preflight → test → final approval → send.">
            <EmailLaunchMock />
          </OriginalVisualFrame>
          <OriginalVisualFrame title="Suppression snapshot (mock)" caption="Pre-flight vs locked posture — sample numbers, not a list export.">
            <SuppressionDiffMock />
          </OriginalVisualFrame>
        </div>
      </Section>
      <Section
        title="Send timing is a calendar discipline"
        intro="Rapid response, volunteer activation, and surrogate pushes inherit timing from the same week the calendar lane owns — so outreach does not fire into a tour hold, a county fair, or a conflicting principal moment by accident."
      >
        <NarrativeBlock kicker="Cross-lane" title="Distribution is not an island">
          When calendar truth is weak, comms invents urgency that field cannot staff and finance cannot absorb. Calendar HQ is designed to keep the week legible before the send rail opens.
        </NarrativeBlock>
        <OriginalVisualFrame title="Week at a glance (shared metaphor) (mock)" caption="Schematic density — not list export or sync claims." style={{ marginTop: "1.25rem" }}>
          <WeekGridMock />
        </OriginalVisualFrame>
        <p style={{ marginTop: "1rem" }}>
          <Link className="rd-link-arrow" href={routes.calendar} style={{ color: "var(--accent-2)" }}>
            Calendar + events lane
          </Link>
        </p>
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
