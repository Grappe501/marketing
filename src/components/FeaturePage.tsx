import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { RiskReductionPanel } from "@/components/RiskReductionPanel";
import { Section } from "@/components/Section";
import { StatusPill } from "@/components/StatusPill";
import { OriginalVisualFrame } from "@/components/OriginalVisualFrame";
import { WorkflowSteps } from "@/components/WorkflowSteps";
import { WorkflowRail } from "@/components/visuals/WorkflowRail";
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

      <Section
        title="Capability status"
        intro="This label describes product vision and design intent—not a blanket claim that every module is live in production today unless your deployment explicitly includes it. Status language is how we keep the map honest: depth can be ambitious while still distinguishing what is templated narrative versus what your contract and configuration actually turn on."
      >
        <StatusPill status={feature.statusLabel} depth={feature.depthLevel} />
      </Section>

      <Section
        title="The break (problem)"
        intro={`${feature.problem} If this paragraph feels uncomfortably specific, it is probably describing a week you have already lived—because feature pages are written to be operator-legible, not vendor-generic.`}
      />
      <Section
        title="Why campaigns need this now"
        intro={`${feature.whyCampaignsNeedIt} The “now” is not hype—it is the part of the calendar where small gaps become public mistakes: debate week, finance close, GOTV crunch, surrogate tours, and rapid response collisions.`}
      />
      <Section
        title="What RedDirt is designed to do here"
        intro={`${feature.capability} “Designed” is an intentional verb: it describes intent, gates, and operator posture—not a guarantee that every integration is live without configuration work.`}
      />

      <Section
        title="What it does (operator-visible)"
        intro="Concrete behaviors the lane is built to support—implementation remains configuration-dependent. Read the list as what your staff should be able to rehearse in a walkthrough: observable actions, visible owners, and explicit transitions—not a buzzword cloud."
      >
        <ul style={{ margin: 0, paddingLeft: "1.1rem", color: "var(--muted)" }}>
          {feature.whatItDoes.map((x) => (
            <li key={x} style={{ marginBottom: "0.5rem" }}>
              {x}
            </li>
          ))}
        </ul>
      </Section>

      <Section
        title="Operator workflow"
        intro="A disciplined sequence your campaign can run weekly—or tighten during crunch windows. If a step feels bureaucratic, compare it to the alternative: improvising the same decision in a side thread at 10pm. The rail below is the shared governance spine repeated across high-risk capabilities."
      >
        <WorkflowSteps steps={feature.operatorWorkflow} />
        <OriginalVisualFrame title="Governance spine (illustrative)" caption="Intake → review → approve → execute → record — schematic pattern, not your deployment’s exact policy tree." style={{ marginTop: "1.25rem" }}>
          <WorkflowRail />
        </OriginalVisualFrame>
      </Section>

      <Section
        title="Leadership value"
        intro="What principals and campaign managers get when this capability is treated as part of the operating picture—not a side project. Leadership value should be legible as fewer surprises: readiness, ranked exceptions, and explicit gates—not another dashboard that hides risk behind charts."
      >
        <ul style={{ margin: 0, paddingLeft: "1.1rem", color: "var(--muted)" }}>
          {feature.leadershipValue.map((x) => (
            <li key={x} style={{ marginBottom: "0.5rem" }}>
              {x}
            </li>
          ))}
        </ul>
      </Section>

      <Section
        title="Campaign value"
        intro="Why the whole race gets stronger when this lane is connected—not siloed. Campaign value is the cross-lane story: calendar truth reduces comms improvisation, finance posture reduces compliance archaeology, and field readiness reduces GOTV panic—when the objects connect."
      >
        <ul style={{ margin: 0, paddingLeft: "1.1rem", color: "var(--muted)" }}>
          {feature.campaignValue.map((x) => (
            <li key={x} style={{ marginBottom: "0.5rem" }}>
              {x}
            </li>
          ))}
        </ul>
      </Section>

      <Section
        title="Risk reduced"
        intro="This is the blunt version of the story: what becomes less likely to go wrong when the capability is treated as part of a governed operating picture—not a miracle promise. Risk language stays grounded: governance reduces accident rates; it does not erase politics, humans, or law."
      >
        <RiskReductionPanel text={feature.riskReduced} />
      </Section>

      <Section
        title="Connected systems / lanes"
        intro="Where this capability is designed to hand off—without implying automatic integrations you have not configured. Treat this list as a coordination contract: what should notify what, what should block what, and what should inherit truth from which lane when the week gets hot."
      >
        <ul style={{ margin: 0, paddingLeft: "1.1rem", color: "var(--muted)" }}>
          {feature.connectedSystems.map((x) => (
            <li key={x} style={{ marginBottom: "0.4rem" }}>
              {x}
            </li>
          ))}
        </ul>
      </Section>

      <Section
        title="Example use case"
        intro={`${feature.exampleUseCase} Use cases are deliberately concrete: they should feel like a staff meeting example, not a generic persona paragraph—so you can tell whether the capability matches your race.`}
      />

      <Section
        title="Connected lane"
        intro={
          lane
            ? `${lane.summary} The lane page is the next level down: core workflows, operator examples, connected features, and architecture references—so you can keep drilling without losing the thread.`
            : "Lane metadata missing (should not happen)."
        }
      >
        {lane ? (
          <Link className="rd-btn rd-btn-ghost" href={routes.lane(lane.slug)}>
            Open {lane.shortTitle} lane
          </Link>
        ) : null}
      </Section>

      <Section
        title="Related features"
        intro="Capabilities are not isolated SKUs—they hand off. This grid is a curated crosswalk: adjacent features you should read next if you are mapping workflows, governance gates, or cross-lane dependencies. If the list feels short, the lane index still carries the full mesh."
      >
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
