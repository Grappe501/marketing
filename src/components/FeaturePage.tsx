import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { RiskReductionPanel } from "@/components/RiskReductionPanel";
import { Section } from "@/components/Section";
import { StatusPill } from "@/components/StatusPill";
import { WorkflowSteps } from "@/components/WorkflowSteps";
import { getCtas, getFeature, getFeaturesForLane, getLane } from "@/lib/marketingData";
import type { Feature } from "@/lib/types";
import { routes } from "@/lib/routes";

export function FeaturePage({ feature }: { feature: Feature }) {
  const lane = getLane(feature.laneSlug);
  const ctas = getCtas();
  const laneFeatures = getFeaturesForLane(feature.laneSlug).filter((f) => f.slug !== feature.slug);
  const related = feature.relatedFeatureSlugs
    .map((s) => getFeature(s))
    .filter((f): f is Feature => Boolean(f));

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: routes.home },
          { label: "Lanes", href: routes.lanes },
          ...(lane ? [{ label: lane.shortTitle, href: routes.lane(lane.slug) }] : []),
          { label: feature.shortTitle },
        ]}
      />

      <PageHero
        title={feature.title}
        subtitle={feature.heroStatement}
        ctas={[
          { label: ctas.primary.label, href: ctas.primary.href, variant: "primary" },
          { label: ctas.features.label, href: ctas.features.href, variant: "ghost" },
        ]}
      />

      <Section title="Capability status" intro="This label describes product vision and design intent—not a blanket claim that every module is live in production today unless your deployment explicitly includes it.">
        <StatusPill status={feature.statusLabel} depth={feature.depthLevel} />
      </Section>

      <Section title="The break (problem)" intro={feature.problem} />
      <Section title="Why campaigns need this now" intro={feature.whyCampaignsNeedIt} />
      <Section title="What RedDirt is designed to do here" intro={feature.capability} />

      <Section title="What it does (operator-visible)" intro="Concrete behaviors the lane is built to support—implementation remains configuration-dependent.">
        <ul style={{ margin: 0, paddingLeft: "1.1rem", color: "var(--muted)" }}>
          {feature.whatItDoes.map((x) => (
            <li key={x} style={{ marginBottom: "0.5rem" }}>
              {x}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Operator workflow" intro="A disciplined sequence your campaign can run weekly—or tighten during crunch windows.">
        <WorkflowSteps steps={feature.operatorWorkflow} />
      </Section>

      <Section title="Leadership value" intro="What principals and campaign managers get when this capability is treated as part of the operating picture—not a side project.">
        <ul style={{ margin: 0, paddingLeft: "1.1rem", color: "var(--muted)" }}>
          {feature.leadershipValue.map((x) => (
            <li key={x} style={{ marginBottom: "0.5rem" }}>
              {x}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Campaign value" intro="Why the whole race gets stronger when this lane is connected—not siloed.">
        <ul style={{ margin: 0, paddingLeft: "1.1rem", color: "var(--muted)" }}>
          {feature.campaignValue.map((x) => (
            <li key={x} style={{ marginBottom: "0.5rem" }}>
              {x}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Risk reduced">
        <RiskReductionPanel text={feature.riskReduced} />
      </Section>

      <Section title="Connected systems / lanes" intro="Where this capability is designed to hand off—without implying automatic integrations you have not configured.">
        <ul style={{ margin: 0, paddingLeft: "1.1rem", color: "var(--muted)" }}>
          {feature.connectedSystems.map((x) => (
            <li key={x} style={{ marginBottom: "0.4rem" }}>
              {x}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Example use case" intro={feature.exampleUseCase} />

      <Section title="Connected lane" intro={lane ? lane.summary : "Lane metadata missing (should not happen)."}>
        {lane ? (
          <Link className="rd-btn rd-btn-ghost" href={routes.lane(lane.slug)}>
            Open {lane.shortTitle} lane
          </Link>
        ) : null}
      </Section>

      <Section title="Related features">
        <div style={{ display: "grid", gap: "0.5rem" }}>
          {(related.length ? related : laneFeatures.slice(0, 6)).map((f) => (
            <Link key={f.slug} href={routes.feature(f.slug)} className="rd-panel" style={{ padding: "0.85rem 1rem", display: "block" }}>
              <p style={{ margin: 0, fontWeight: 650 }}>{f.title}</p>
              <p className="rd-muted" style={{ margin: "0.35rem 0 0", fontSize: "0.88rem" }}>
                {f.summary}
              </p>
            </Link>
          ))}
        </div>
      </Section>

      <CTASection
        title="Keep walking the system"
        body="The feature map is built to prove depth: serious statewide campaigns do not run on one tool."
        primary={ctas.primary}
        secondary={ctas.features}
        tertiary={ctas.demo}
      />
    </>
  );
}
