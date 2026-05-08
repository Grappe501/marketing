import type { Metadata } from "next";
import { LaneCard } from "@/components/LaneCard";
import { OriginalVisualFrame } from "@/components/OriginalVisualFrame";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { LaneOverviewStripMock } from "@/components/visuals/LaneOverviewStripMock";
import { getLanes } from "@/lib/marketingData";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta(
  "Product lanes",
  "Twelve governed lanes: Cockpit, fundraising + Good Change, budget + compliance preparation, outreach, calendar + events, volunteers + field + GOTV, county intelligence, data + contact, content + website, intelligence + briefings, governance, implementation—each with drilldown features and operator copy.",
  { path: "/lanes", ogVariant: "lanes" },
);

export default function Page() {
  const lanes = getLanes();

  return (
    <>
      <PageHero
        eyebrow="Lanes"
        title="Twelve lanes. One operating picture."
        subtitle="Each lane is a contract for a serious statewide race: what it controls, why it breaks in normal stacks, what the operator gets, and how it connects to the rest of the operating picture."
      />
      <Section title="Lane posture at a glance" intro="Twelve governed lanes as a single scan line — schematic readiness dots, not live monitoring.">
        <OriginalVisualFrame title="Operating lane strip (illustration)" caption="Abbreviated labels for layout density; drill down via cards below.">
          <LaneOverviewStripMock />
        </OriginalVisualFrame>
      </Section>
      <Section
        title="Choose a lane to drill down"
        intro="Each card opens lane narrative copy, workflows, and connected features — depth lives at the drilldown, not on this index alone."
      >
        <div className="rd-card-grid">
          {lanes.map((lane) => (
            <LaneCard key={lane.slug} lane={lane} />
          ))}
        </div>
      </Section>
    </>
  );
}
