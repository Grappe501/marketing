import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { NarrativeBlock } from "@/components/NarrativeBlock";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { SystemDiagram } from "@/components/SystemDiagram";
import { getCtas } from "@/lib/marketingData";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta(
  "Why RedDirt OS",
  "Campaigns lose control one disconnected tool at a time: fragmented stack, operator overload, approval drift, leadership blind spots, field/fundraising/calendar disconnect. RedDirt OS exists to turn scattered tabs into a governed operating picture.",
  { path: "/why" },
);

export default function Page() {
  const ctas = getCtas();

  return (
    <>
      <PageHero
        eyebrow="Why"
        title="Campaigns do not lose control all at once. They lose it one disconnected tool at a time."
        subtitle="Most stacks are assembled under pressure: email here, donors there, calendars elsewhere, volunteer lists in another place, compliance trackers in PDFs, county plans in slides, and leadership updates invented fresh each morning. The fracture is operational: nobody can see the same race at the same time—so the campaign starts running on heroic memory instead of a system."
      />

      <Section
        title="The stack was never designed to run the campaign"
        intro="Tools are not the enemy. Disconnection is. When lanes do not share an object model, operators duplicate work, approvals disappear into side channels, and leadership learns about risk when it is already expensive."
      >
        <NarrativeBlock kicker="Operator overload" title="Everyone is busy. Nobody is accountable.">
          Urgent work becomes invisible when it is not represented as objects: owners, dependencies, readiness, approvals, and timestamps. RedDirt OS is designed to capture that work as governed lanes so the next action is obvious—and high-consequence actions are hard to do accidentally.
        </NarrativeBlock>
      </Section>

      <Section title="Leadership blind spots are a design failure" intro="Principals should not have to micromanage trivia to feel safe. They should be able to see readiness and exceptions without drowning in operational noise.">
        <NarrativeBlock kicker="Command" title="The cockpit is not vanity metrics">
          Executive visibility should be about readiness gates, deadline proximity, message risk, county pressure, and field/GOTV exceptions—ranked, owned, and tied to real decisions.
        </NarrativeBlock>
      </Section>

      <Section title="Why a serious statewide race needs an operating system" intro="A statewide campaign is many urgent workflows at once. Without a governed operating picture, you get message drift, calendar collisions, donor follow-up decay, field gaps, and compliance reconstruction at the worst possible week.">
        <SystemDiagram />
      </Section>

      <Section
        title="Closing truth"
        intro="RedDirt OS exists because a statewide campaign is too important to run from scattered tabs and heroic memory. The product story is built to earn trust with discipline: designed capabilities, operator-guided workflows, and careful language around compliance and government systems."
      />

      <CTASection title="See the structure" body="Move from why to how: governed workflows, shared data, operator-safe execution." primary={{ label: "How it works", href: "/how-it-works" }} secondary={ctas.primary} />
    </>
  );
}
