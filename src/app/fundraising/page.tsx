import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { NarrativeBlock } from "@/components/NarrativeBlock";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { OriginalVisualFrame } from "@/components/OriginalVisualFrame";
import { FundraisingLaneMock } from "@/components/visuals/FundraisingLaneMock";
import { RankedActionsMock } from "@/components/visuals/RankedActionsMock";
import { getCtas } from "@/lib/marketingData";
import { pageMeta } from "@/lib/seo";
import { routes } from "@/lib/routes";

export const metadata: Metadata = pageMeta(
  "Fundraising + Good Change",
  "Good Change stays in the fundraising lane: donor pipeline, call time, pledges, events, finance workflow, contribution tracking, and compliance preparation connection—governed motion, not side spreadsheets.",
  { path: "/fundraising" },
);

export default function Page() {
  const ctas = getCtas();

  return (
    <>
      <PageHero
        eyebrow="Fundraising"
        title="Good Change turns fundraising into an operating lane, not a side spreadsheet."
        subtitle="Fundraising connects donor intent, call time, events, pledges, finance workflow, and compliance preparation into one governed lane—so leadership sees the same pipeline finance trusts, and follow-up does not die in inboxes."
      />
      <Section title="What breaks without a lane" intro="Warm leads cool. Pledges age. Finance learns late. Principals hear numbers that are not operational truth. That is not a motivation problem—it is an object model problem.">
        <NarrativeBlock kicker="Good Change" title="A lane, not a slogan">
          Good Change is positioned as structured fundraising motion inside the OS: stages, owners, checkpoints, and treasurer-visible posture—without claiming every processor integration unless configured.
        </NarrativeBlock>
        <OriginalVisualFrame title="Finance + field pressure in one queue (mock)" caption="Fundraising does not float alone — ranked illustration." style={{ marginTop: "1.25rem" }}>
          <RankedActionsMock />
        </OriginalVisualFrame>
      </Section>
      <Section title="Lane flow (illustrative)" intro="Original illustration: donor motion as a connected rail—not stock photography.">
        <OriginalVisualFrame title="Fundraising lane mock" caption="Illustrative flow only; your deployment determines live integrations.">
          <FundraisingLaneMock />
        </OriginalVisualFrame>
      </Section>
      <CTASection title="Open the fundraising lane" body="Donor pipeline, call time, events, pledges, finance workflow, contribution tracking." primary={{ label: "Open lane", href: routes.lane("fundraising-good-change") }} secondary={ctas.demo} />
    </>
  );
}
