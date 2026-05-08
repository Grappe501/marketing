import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { NarrativeBlock } from "@/components/NarrativeBlock";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { OriginalVisualFrame } from "@/components/OriginalVisualFrame";
import { CalendarRequestMock } from "@/components/visuals/CalendarRequestMock";
import { CommsDownstreamMock } from "@/components/visuals/CommsDownstreamMock";
import { EventWorkstreamMock } from "@/components/visuals/EventWorkstreamMock";
import { MorningBriefMock } from "@/components/visuals/MorningBriefMock";
import { RankedActionsMock } from "@/components/visuals/RankedActionsMock";
import { TourHoldConflictMock } from "@/components/visuals/TourHoldConflictMock";
import { WeekGridMock } from "@/components/visuals/WeekGridMock";
import { getCtas } from "@/lib/marketingData";
import { pageMeta } from "@/lib/seo";
import { routes } from "@/lib/routes";

export const metadata: Metadata = pageMeta(
  "Calendar + events",
  "Calendar HQ: governed event requests, approval chains, public vs private visibility, tour holds and collision detection, week density as an operator surface, downstream comms and field artifacts tied to approved calendar truth — not a passive grid.",
  { path: "/calendar" },
);

export default function Page() {
  const ctas = getCtas();

  return (
    <>
      <PageHero
        eyebrow="Calendar + events"
        title="Calendar HQ is where public truth meets operator reality."
        subtitle="A serious race does not lose in the grid UI — it loses in the gap between an approved moment and everything that must exist afterward: comms plans, staffing, surrogate packets, press posture, field windows, and finance hooks. RedDirt OS is designed so calendar objects carry dependencies, approvals, and downstream queues — so 'yes' always includes 'what happens next'."
      />

      <Section
        eyebrow="Operating truth"
        title="An event is not a row. It is a bundle of consequences."
        intro="Rallies, tours, fundraisers, and county moments spawn logistics, intelligence review, press, volunteer staffing, and message timing. Calendar HQ is the lane where those consequences stay attached to one governed object — instead of dissolving into side threads the Monday after."
      >
        <NarrativeBlock kicker="Object model" title="Request → review → draft → public-ready → downstream">
          The transition from internal coordination to voter-visible schedule is a governance moment — not a checkbox. Comms queues, field tasks, and briefing updates should inherit the same approved truth the principal already trusted.
        </NarrativeBlock>
        <div className="rd-stack-2col" style={{ marginTop: "1.25rem" }}>
          <OriginalVisualFrame
            title="Request rail (original mock)"
            caption="Queue → review → draft → public-ready — schematic flow only; integrations are deployment decisions."
          >
            <CalendarRequestMock />
          </OriginalVisualFrame>
          <OriginalVisualFrame
            title="Event dependency surface (mock)"
            caption="One rally object with owners and gate states — illustration, not live workflow rules."
          >
            <EventWorkstreamMock />
          </OriginalVisualFrame>
        </div>
      </Section>

      <Section
        eyebrow="Capacity"
        title="The week is a pressure map — tour holds, locals, and collisions."
        intro="Statewide campaigns run principal travel, surrogate tours, county partner pushes, and volunteer surges on top of each other. The product story is early collision visibility: when two truths compete, operators should see it before invitations and press advisories harden."
      >
        <NarrativeBlock kicker="Tour planning" title="Holds are not decoration">
          A tour block is expensive truth: it constrains surrogates, press, and local energy. Calendar HQ is designed to treat holds as first-class constraints that other events must negotiate — not as background color.
        </NarrativeBlock>
        <div className="rd-stack-2col" style={{ marginTop: "1.25rem" }}>
          <OriginalVisualFrame title="Week density + overlap hint (mock)" caption="Seven-day schematic — not Google Calendar or a sync claim.">
            <WeekGridMock />
          </OriginalVisualFrame>
          <OriginalVisualFrame title="Principal travel vs local push (mock)" caption="Overlap story only — resolution text is a narrative example.">
            <TourHoldConflictMock />
          </OriginalVisualFrame>
        </div>
      </Section>

      <Section
        eyebrow="Downstream"
        title="Approved calendar truth should unlock comms — deliberately."
        intro="Email drafts, SMS holds, press advisories, and field captain briefs should not be reinvented from memory. They should attach to the same object the calendar lane approved — with explicit gates where suppression, principal sign-off, or staffing still matter."
      >
        <div className="rd-stack-2col">
          <OriginalVisualFrame title="Comms artifact handoff (mock)" caption="Artifacts and gates are illustrative — your deployment defines which stubs generate automatically.">
            <CommsDownstreamMock />
          </OriginalVisualFrame>
          <OriginalVisualFrame title="Morning brief picks up calendar pressure (mock)" caption="Same operating rhythm as the Cockpit — static illustration only.">
            <MorningBriefMock />
          </OriginalVisualFrame>
        </div>
      </Section>

      <Section
        eyebrow="Visibility"
        title="Public vs private is a controlled transition — not a leak roulette."
        intro="Operators need rich internal calendars; voters need consistent public schedules. RedDirt OS is designed around disciplined visibility states so drafts do not accidentally become public-facing truth — without forcing every internal meeting onto the voter-facing surface."
      >
        <NarrativeBlock kicker="Discipline" title="What voters see should match what leadership approved">
          When public schedules drift from operator reality, counties get angry, press gets messy, and volunteers burn. Calendar discipline is comms discipline.
        </NarrativeBlock>
        <OriginalVisualFrame title="Ops queue behind calendar decisions (mock)" caption="Calendar pressure surfaces as ranked cross-lane work — illustration only." style={{ marginTop: "1.25rem" }}>
          <RankedActionsMock />
        </OriginalVisualFrame>
      </Section>

      <Section
        eyebrow="Integration posture"
        title="Google Calendar readiness is a posture — not a magic sync promise."
        intro="Where configured, external calendar connectors can reduce double-entry — but the moral requirement is operator-guided truth: mapping, permissions, visibility rules, and conflict review. Nothing here claims partnership with Google or guaranteed two-way sync."
      >
        <div className="rd-panel" style={{ padding: "1rem", maxWidth: "72ch" }}>
          <p className="rd-muted" style={{ margin: 0, fontSize: "0.92rem", lineHeight: 1.6 }}>
            Treat external calendars as inputs and outputs to governed objects — not as the system of record that bypasses approvals. The win is one operating picture: the Cockpit reads calendar depth alongside outreach gates, field gaps, and compliance windows.
          </p>
        </div>
      </Section>

      <CTASection
        title="Open the full calendar + events lane"
        body="HQ, intake, approvals, tour planning, visibility discipline, comms queues — drill the feature map for every calendar capability the taxonomy tracks."
        primary={{ label: "Open calendar lane", href: routes.lane("calendar-events") }}
        secondary={ctas.demo}
        tertiary={ctas.features}
      />
    </>
  );
}
