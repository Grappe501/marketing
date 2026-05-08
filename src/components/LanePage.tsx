import type { ComponentProps } from "react";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { FeatureCard } from "@/components/FeatureCard";
import { OriginalVisualFrame } from "@/components/OriginalVisualFrame";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { VisualPlaceholder } from "@/components/VisualPlaceholder";
import { LaneHeroVisual } from "@/components/visuals/LaneHeroVisual";
import { LANE_PAGE_COPY } from "@/data/pass2/lanePageCopy";
import { getCtas, getFeaturesForLane } from "@/lib/marketingData";
import type { Lane } from "@/lib/types";
import { routes } from "@/lib/routes";

type VisualVariant = ComponentProps<typeof VisualPlaceholder>["variant"];

function visualVariant(lane: Lane): VisualVariant {
  const t = lane.visualTheme;
  if (t === "county-map") return "county-map";
  if (t === "fundraising") return "fundraising";
  if (t === "compliance") return "compliance";
  if (t === "calendar") return "calendar";
  if (t === "outreach") return "outreach";
  if (t === "field") return "field";
  if (t === "intelligence") return "intelligence";
  if (t === "governance") return "governance";
  return "cockpit";
}

export function LanePage({ lane }: { lane: Lane }) {
  const features = getFeaturesForLane(lane.slug);
  const ctas = getCtas();
  const copy = LANE_PAGE_COPY[lane.slug];

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: routes.home },
          { label: "Lanes", href: routes.lanes },
          { label: lane.shortTitle },
        ]}
      />
      <PageHero
        eyebrow={lane.eyebrow}
        title={lane.title}
        subtitle={lane.summary}
        ctas={[
          { label: ctas.primary.label, href: ctas.primary.href, variant: "primary" },
          { label: ctas.demo.label, href: ctas.demo.href, variant: "ghost" },
        ]}
      />

      {copy ? (
        <>
          <Section title="Why this lane breaks in normal campaigns" intro={copy.whyBreaks} />
          <Section title="What RedDirt OS gives the operator" intro={copy.whatOperatorGets}>
            <OriginalVisualFrame title={copy.visualTitle} caption={copy.visualCaption}>
              <LaneHeroVisual laneSlug={lane.slug} />
            </OriginalVisualFrame>
          </Section>
          <Section title="Core workflows" intro="These are the motions a serious statewide operation should be able to run without improvising a new system every Monday.">
            <div style={{ display: "grid", gap: "0.75rem" }}>
              {copy.coreWorkflows.map((w) => (
                <div key={w.id} className="rd-panel" style={{ padding: "1rem" }}>
                  <p style={{ margin: 0, fontWeight: 650 }}>{w.title}</p>
                  <p className="rd-muted" style={{ margin: "0.55rem 0 0", fontSize: "0.92rem" }}>
                    {w.body}
                  </p>
                </div>
              ))}
            </div>
          </Section>
        </>
      ) : (
        <>
          <Section title="Why this lane matters" intro={lane.whyItMatters} />
          <Section title="What RedDirt OS gives the operator" intro={lane.operatorPromise}>
            <VisualPlaceholder variant={visualVariant(lane)} title={lane.shortTitle} caption="Lane copy pack missing — add in lanePageCopy.ts." />
          </Section>
        </>
      )}

      <Section title="Connected features" intro="Drill into capabilities. Language stays disciplined: designed, configurable, operator-guided—not a guarantee of production-live status for every envisioned module.">
        <div className="rd-card-grid">
          {features.map((f) => (
            <FeatureCard key={f.slug} feature={f} />
          ))}
        </div>
        <p style={{ marginTop: "1rem" }}>
          <Link className="rd-link-arrow" href={routes.features} style={{ color: "var(--accent-2)" }}>
            Browse the full feature map
          </Link>
        </p>
      </Section>

      <Section title="Lane architecture (reference)" intro="Structured sections for continuity with Pass 1 data—Pass 3 can fold these into richer visuals.">
        <div style={{ display: "grid", gap: "0.75rem" }}>
          {lane.sections.map((s) => (
            <div key={s.id} className="rd-panel" style={{ padding: "1rem" }}>
              <p style={{ margin: 0, fontWeight: 650 }}>{s.title}</p>
              <p className="rd-muted" style={{ margin: "0.55rem 0 0", fontSize: "0.92rem" }}>
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="How this lane connects to the rest of the race" intro={copy?.connectsToRace ?? "Lanes are designed to reinforce each other: governance, calendar truth, county intelligence, and cockpit exceptions should not live in separate brains."} />

      <Section title="Operator example" intro={copy?.operatorExample ?? "Pass 2 lane copy should include a concrete cadence example for this lane."} />

      <CTASection
        title="Walk it like a real week"
        body="See the end-to-end demo narrative—still static, no backend intake."
        primary={ctas.primary}
        secondary={ctas.demo}
        tertiary={ctas.lanes}
      />
    </>
  );
}
