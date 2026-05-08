import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { NarrativeBlock } from "@/components/NarrativeBlock";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { getCtas } from "@/lib/marketingData";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta(
  "About RedDirt OS",
  "Built from campaign operator reality: governance-first, speed with control, statewide complexity, and whole-race coverage—not a single-tool story.",
  { path: "/about" },
);

export default function Page() {
  const ctas = getCtas();

  return (
    <>
      <PageHero
        eyebrow="About"
        title="Built from the operating reality of campaigns."
        subtitle="RedDirt Operating Systems is positioned as a governed campaign OS: it assumes operators are tired, deadlines are real, counties matter, and dangerous actions should be hard to do by accident. It is written to respect counsel and treasurer authority—especially around compliance preparation and filing responsibility."
      />
      <Section title="What we optimize for" intro="If you stripped the marketing, the product thesis would still be legible: less chaos, more command.">
        <NarrativeBlock kicker="Operators" title="Serious teams, serious constraints">
          The copy is intentionally operational: readiness gates, approval chains, morning brief rhythm, county pressure, GOTV readiness, donor follow-up decay, calendar collisions, and compliance windows.
          This is not generic SaaS positioning—it is a statewide race described the way staffers actually talk in October.
        </NarrativeBlock>
      </Section>
      <Section title="What we refuse to fake" intro="Trust is cumulative; sloppy claims destroy it in one sentence.">
        <ul style={{ margin: 0, paddingLeft: "1.1rem", color: "var(--muted)" }}>
          <li style={{ marginBottom: "0.55rem" }}>No implied official government endorsement or guaranteed portal integration.</li>
          <li style={{ marginBottom: "0.55rem" }}>No guaranteed compliance outcomes or automated filing fantasy.</li>
          <li style={{ marginBottom: "0.55rem" }}>No fake customer logos or unsourced opponent attack stories as marketing props.</li>
          <li style={{ marginBottom: "0.55rem" }}>No analytics or tracking in this static marketing build.</li>
        </ul>
      </Section>
      <CTASection title="See the system" body="Start at the platform map, then drill lanes and features until the coverage feels inevitable." primary={ctas.primary} secondary={ctas.features} />
    </>
  );
}
