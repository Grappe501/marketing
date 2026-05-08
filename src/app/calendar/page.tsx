import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { NarrativeBlock } from "@/components/NarrativeBlock";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { OriginalVisualFrame } from "@/components/OriginalVisualFrame";
import { CalendarRequestMock } from "@/components/visuals/CalendarRequestMock";
import { RankedActionsMock } from "@/components/visuals/RankedActionsMock";
import { getCtas } from "@/lib/marketingData";
import { pageMeta } from "@/lib/seo";
import { routes } from "@/lib/routes";

export const metadata: Metadata = pageMeta(
  "Calendar + events",
  "Event request intake, approvals, public/private visibility, Google Calendar readiness posture, tour planning, event comms queue—governed path from request to communications execution.",
  { path: "/calendar" },
);

export default function Page() {
  const ctas = getCtas();

  return (
    <>
      <PageHero
        eyebrow="Calendar"
        title="Every request, event, and public moment needs a governed path."
        subtitle="Calendar HQ is designed to route event requests through review, approval, scheduling, visibility, and communications planning—so the campaign does not lose the operator thread between 'yes' and 'what happens next'."
      />
      <Section title="Events are workflow bombs" intro="A rally is not one calendar row. It is staffing, surrogates, security posture, press, fundraising hooks, and field coverage—each should spawn tracked work from approved calendar truth.">
        <NarrativeBlock kicker="Truth" title="Public vs private is a governance transition">
          Public-private calendar views are about controlled visibility: what voters see vs what operators coordinate—designed to reduce accidental leaks and inconsistent public schedules.
        </NarrativeBlock>
        <OriginalVisualFrame title="Ops queue behind the calendar (mock)" caption="Calendar pressure shows up as ranked work — illustration only." style={{ marginTop: "1.25rem" }}>
          <RankedActionsMock />
        </OriginalVisualFrame>
      </Section>
      <Section title="Request → comms queue (illustrative)" intro="Original SVG mock.">
        <OriginalVisualFrame title="Calendar request mock" caption="Request → review → comms queue (illustrative).">
          <CalendarRequestMock />
        </OriginalVisualFrame>
      </Section>
      <CTASection title="Open calendar lane" body="HQ, intake, approvals, tour planning, comms queues." primary={{ label: "Open lane", href: routes.lane("calendar-events") }} secondary={ctas.features} />
    </>
  );
}
