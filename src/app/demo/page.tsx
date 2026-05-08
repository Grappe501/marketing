import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { NarrativeBlock } from "@/components/NarrativeBlock";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CockpitMockup } from "@/components/visuals/CockpitMockup";
import { ComplianceLedgerMock } from "@/components/visuals/ComplianceLedgerMock";
import { CountyMapIllustration } from "@/components/visuals/CountyMapIllustration";
import { EmailLaunchMock } from "@/components/visuals/EmailLaunchMock";
import { CalendarRequestMock } from "@/components/visuals/CalendarRequestMock";
import { OriginalVisualFrame } from "@/components/OriginalVisualFrame";
import { ProductScreenshotFrame } from "@/components/ProductScreenshotFrame";
import { getCtas } from "@/lib/marketingData";
import { pageMeta } from "@/lib/seo";
import { routes } from "@/lib/routes";

export const metadata: Metadata = pageMeta(
  "Walk the race",
  "Guided walkthrough: Cockpit rhythm, governed outreach launch, calendar request triage, fundraising follow-up, county pressure read, compliance posture, operator next actions—static marketing build, no backend.",
  { path: "/demo", ogVariant: "default" },
);

export default function Page() {
  const ctas = getCtas();

  return (
    <>
      <PageHero
        eyebrow="Guided walkthrough"
        title="Seven beats. One operating week."
        subtitle="This is the story a serious campaign staff should recognize—told as governed objects and operator checkpoints, not as a generic template. No video yet; the sequence is the proof."
        ctas={[
          { label: ctas.primary.label, href: ctas.primary.href, variant: "primary" },
          { label: ctas.secondary.label, href: ctas.secondary.href, variant: "ghost" },
        ]}
      />

      <Section title="1. Start in the Cockpit" intro="Monday morning is a command surface: readiness, blockers, ranked next actions—not a mood board.">
        <NarrativeBlock kicker="Command" title="One place to read posture">
          Leadership and operators align on what is green, yellow, or blocked before anyone chases a side thread. The Cockpit is designed to make consequence visible early—not after something breaks publicly.
        </NarrativeBlock>
        <ProductScreenshotFrame title="Cockpit — readiness mock">
          <CockpitMockup />
        </ProductScreenshotFrame>
      </Section>

      <Section title="2. Launch an outreach run" intro="Audience, message, packet, preflight, test, final operator posture—governed sequence, not a panic button.">
        <OriginalVisualFrame title="Email launch rail" caption="Illustration only; real sends remain provider- and policy-bound.">
          <EmailLaunchMock />
        </OriginalVisualFrame>
      </Section>

      <Section title="3. Review event requests" intro="Calendar truth stays in one lane: requests, review, draft, public-ready, comms plan stub.">
        <OriginalVisualFrame title="Calendar queue" caption="Schematic flow—not a live calendar integration claim.">
          <CalendarRequestMock />
        </OriginalVisualFrame>
      </Section>

      <Section title="4. Move fundraising follow-up" intro="Money motion stays connected to finance review queues—not a detached spreadsheet myth.">
        <div className="rd-panel" style={{ padding: "1rem", color: "var(--muted)" }}>
          Pledged-but-open items, call-time outcomes, and documentation posture route into the same operating picture the manager already trusts for weekly command.
        </div>
      </Section>

      <Section title="5. Read county pressure" intro="County intelligence as attention surface—schematic, not survey-grade geography.">
        <OriginalVisualFrame title="County attention heat" caption="Illustrative tiles only.">
          <CountyMapIllustration />
        </OriginalVisualFrame>
      </Section>

      <Section title="6. Check compliance posture" intro="Preparation, deadlines, review status, export-ready posture—treasurer and counsel remain accountable for official filing.">
        <OriginalVisualFrame title="Ledger-style preparation view" caption="Support workflow illustration—not deterministic compliance.">
          <ComplianceLedgerMock />
        </OriginalVisualFrame>
      </Section>

      <Section title="7. End with operator next actions" intro="The week closes with ranked work: what moves doors, money, deadlines, and message risk—without pretending dangerous actions should be easy to do by accident.">
        <NarrativeBlock kicker="Close" title="Command, not chaos">
          If the walkthrough felt specific, the product story is working. If it felt generic, we failed—regardless of how polished the CSS is.
        </NarrativeBlock>
      </Section>

      <Section title="What stays static (on purpose)" intro="No analytics, no embeds, no automatic intake. Conversion architecture is real; plumbing is a deployment decision.">
        <div className="rd-panel" style={{ padding: "1rem", color: "var(--muted)" }}>
          When intake is wired, this page should deepen into scheduling and agenda capture. Until then, use{" "}
          <Link href={routes.contact} style={{ color: "var(--accent-2)" }}>
            Contact
          </Link>{" "}
          as the human path—still without automatic submission in this build.
        </div>
      </Section>

      <CTASection
        title="Request a walkthrough"
        body="Tell us which lane is on fire first—we will map the conversation to real operator objects, not vendor bingo."
        primary={ctas.primary}
        secondary={ctas.features}
        tertiary={ctas.lanes}
      />
    </>
  );
}
