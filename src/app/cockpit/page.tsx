import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { MetricStyleCard } from "@/components/MetricStyleCard";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { OriginalVisualFrame } from "@/components/OriginalVisualFrame";
import { CockpitMockup } from "@/components/visuals/CockpitMockup";
import { RankedActionsMock } from "@/components/visuals/RankedActionsMock";
import { TourHoldConflictMock } from "@/components/visuals/TourHoldConflictMock";
import { WeekGridMock } from "@/components/visuals/WeekGridMock";
import { getCtas } from "@/lib/marketingData";
import { pageMeta } from "@/lib/seo";
import { routes } from "@/lib/routes";

export const metadata: Metadata = pageMeta(
  "Campaign Cockpit",
  "Morning command surface: executive readiness, morning brief, ranked next actions, launch gates, calendar pressure, county health, fundraising follow-ups, compliance windows, field/GOTV exceptions—one stack.",
  { path: "/cockpit" },
);

export default function Page() {
  const ctas = getCtas();

  return (
    <>
      <PageHero
        eyebrow="Cockpit"
        title="The morning command surface for a serious race."
        subtitle="The Cockpit is designed to compress noise into a ranked command stack: readiness vs blocked, deadline proximity, county pressure, calendar queue depth, fundraising aging, compliance preparation signals, and field/GOTV exceptions—each with owners and next actions."
      />
      <Section title="What leadership should see before noon" intro="Not vanity charts—exceptions, approvals, readiness gates, and the true top five moves. Principals should be able to decide without opening six tools.">
        <OriginalVisualFrame title="Cockpit composition (original)" caption="CSS mock of readiness cards and exception queue—not a product screenshot.">
          <CockpitMockup />
        </OriginalVisualFrame>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "0.75rem", marginTop: "1rem" }}>
          <MetricStyleCard label="Readiness" value="Green / yellow / red" hint="Posture by object class, not vibes." />
          <MetricStyleCard label="Blockers" value="Owned queue" hint="Every blocker has an owner or it is invalid." />
          <MetricStyleCard label="Principal calls" value="Ranked" hint="Only what requires authority—not trivia." />
        </div>
        <OriginalVisualFrame title="Ranked next actions (detail mock)" caption="Same idea as the cockpit cards, expressed as a tight queue — illustration only." style={{ marginTop: "1.25rem" }}>
          <RankedActionsMock />
        </OriginalVisualFrame>
        <div className="rd-stack-2col" style={{ marginTop: "1.25rem" }}>
          <OriginalVisualFrame title="Calendar week density (mock)" caption="How tour holds and locals read on the same surface — schematic only.">
            <WeekGridMock />
          </OriginalVisualFrame>
          <OriginalVisualFrame title="Tour vs local collision (mock)" caption="Example overlap story — not scheduling automation.">
            <TourHoldConflictMock />
          </OriginalVisualFrame>
        </div>
      </Section>
      <CTASection title="Drill the Cockpit lane" body="Morning brief, next actions, readiness dashboards, launch gates, statewide map posture." primary={{ label: "Open lane", href: routes.lane("cockpit-command") }} secondary={ctas.features} />
    </>
  );
}
