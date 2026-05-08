import type { Metadata } from "next";
import { LaneCard } from "@/components/LaneCard";
import { NarrativeBlock } from "@/components/NarrativeBlock";
import { OriginalVisualFrame } from "@/components/OriginalVisualFrame";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { LaneOverviewStripMock } from "@/components/visuals/LaneOverviewStripMock";
import { RankedActionsMock } from "@/components/visuals/RankedActionsMock";
import { WorkflowRail } from "@/components/visuals/WorkflowRail";
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
      <Section
        title="Lane posture at a glance"
        intro="Twelve governed lanes as a single scan line — schematic readiness dots, not live monitoring. The strip is a deliberate density trick: if your brain can hold the whole race in one glance, you are closer to an operating system than a tool zoo. Drilldown pages carry the operator language, workflows, and connected features for each lane."
      >
        <NarrativeBlock kicker="Taxonomy" title="Lanes are contracts, not categories">
          Each lane answers what breaks in a normal stack, what RedDirt is designed to give the operator, how it connects to the rest of the race, and which features belong in the drilldown map. If a lane feels “thin” on this index, open it—the depth is intentionally pushed to the lane page so this screen stays scannable.
        </NarrativeBlock>
        <OriginalVisualFrame title="Operating lane strip (illustration)" caption="Abbreviated labels for layout density; drill down via cards below." style={{ marginTop: "1rem" }}>
          <LaneOverviewStripMock />
        </OriginalVisualFrame>
        <div className="rd-stack-2col" style={{ marginTop: "1.25rem" }}>
          <OriginalVisualFrame title="Cross-lane ranked pressure (mock)" caption="Monday still arrives as consequence ordering — illustration only.">
            <RankedActionsMock />
          </OriginalVisualFrame>
          <OriginalVisualFrame title="Governance spine across lanes (illustrative)" caption="Intake → review → approve → execute → record — same rail everywhere high risk exists.">
            <WorkflowRail />
          </OriginalVisualFrame>
        </div>
      </Section>
      <Section
        title="Choose a lane to drill down"
        intro="Each card opens lane narrative copy, core workflows, operator examples, connected features, and architecture references. This index is the map room; the lane pages are where the campaign staffer should recognize their actual week: calendar collisions, pledge aging, GOTV gaps, suppression posture, county drift, and compliance windows as objects—not vibes."
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
