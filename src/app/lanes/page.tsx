import type { Metadata } from "next";
import { LaneCard } from "@/components/LaneCard";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
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
        title="Choose a lane to drill down"
        intro="Pass 2 adds lane-specific narrative depth and original illustrations. Pass 3 adds motion and screenshot proof where you want it."
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
