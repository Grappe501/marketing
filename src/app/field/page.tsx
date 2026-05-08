import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { NarrativeBlock } from "@/components/NarrativeBlock";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { OriginalVisualFrame } from "@/components/OriginalVisualFrame";
import { CountyMapIllustration } from "@/components/visuals/CountyMapIllustration";
import { RankedActionsMock } from "@/components/visuals/RankedActionsMock";
import { WeekGridMock } from "@/components/visuals/WeekGridMock";
import { pageMeta } from "@/lib/seo";
import { routes } from "@/lib/routes";

export const metadata: Metadata = pageMeta(
  "Volunteers, field, GOTV",
  "Volunteer intake, relational organizing, staffing, precinct priorities, GOTV readiness gates, door/phone program planning, supporter follow-up—connected to county intelligence and cockpit exceptions.",
  { path: "/field" },
);

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Field"
        title="Field wins when people, priorities, and follow-up connect."
        subtitle="RedDirt OS is designed to structure volunteer intake, relational organizing, staffing, precinct priorities, GOTV readiness, and supporter follow-up—so field pressure shows up in the same operating picture as calendar density and county targets."
      />
      <Section title="GOTV is readiness, not a weekend mood" intro="Readiness gates are designed to surface coverage gaps early—when you can still fix them—instead of discovering holes during the final sprint.">
        <NarrativeBlock kicker="Capacity" title="Volunteers are inventory">
          Shifts and staffing are operational objects: gaps should become visible exceptions with owners, not last-minute group texts.
        </NarrativeBlock>
        <OriginalVisualFrame title="Field exceptions as ranked work (mock)" caption="Same cockpit discipline — doors, counties, and deadlines in one queue." style={{ marginTop: "1.25rem" }}>
          <RankedActionsMock />
        </OriginalVisualFrame>
      </Section>
      <Section title="County pressure (illustrative map)" intro="Illustrative tile heat—not a geographic survey product claim.">
        <OriginalVisualFrame title="Attention surface" caption="Use drilldown county pages for real local truth; this is a visual metaphor.">
          <CountyMapIllustration />
        </OriginalVisualFrame>
      </Section>
      <Section
        title="Field reads the same week the calendar lane owns"
        intro="Canvasses, blitzes, and surrogate hits only work when they are sequenced against tour holds, public events, and finance moments — not when field improvises against a schedule nobody trusts."
      >
        <NarrativeBlock kicker="Shared surface" title="Capacity is a calendar story too">
          When the week is visible as pressure — not as scattered invites — field directors can negotiate gaps before GOTV, not during it.
        </NarrativeBlock>
        <OriginalVisualFrame title="Week density (shared metaphor) (mock)" caption="Same schematic as Calendar HQ — field and calendar should argue with data, not with inbox threads." style={{ marginTop: "1.25rem" }}>
          <WeekGridMock />
        </OriginalVisualFrame>
        <p style={{ marginTop: "1rem" }}>
          <Link className="rd-link-arrow" href={routes.calendar} style={{ color: "var(--accent-2)" }}>
            Calendar + events lane
          </Link>
        </p>
      </Section>
      <CTASection
        title="Open field lane"
        body="Volunteer command, relational organizing, staffing, GOTV readiness, precinct priorities, programs."
        primary={{ label: "Open lane", href: routes.lane("volunteer-field-gotv") }}
        secondary={{ label: "County intelligence", href: routes.counties }}
      />
    </>
  );
}
