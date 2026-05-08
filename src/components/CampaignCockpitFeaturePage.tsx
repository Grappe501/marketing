import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { OriginalVisualFrame } from "@/components/OriginalVisualFrame";
import { RiskReductionPanel } from "@/components/RiskReductionPanel";
import { Section } from "@/components/Section";
import { StatusPill } from "@/components/StatusPill";
import { WorkflowSteps } from "@/components/WorkflowSteps";
import { ApprovalChainMock } from "@/components/visuals/ApprovalChainMock";
import { AuditTrailMock } from "@/components/visuals/AuditTrailMock";
import { CockpitMockup } from "@/components/visuals/CockpitMockup";
import {
  CockpitFragmentedMock,
  CockpitLeadershipRowMock,
  CockpitVisionBoardMock,
} from "@/components/visuals/CockpitVisionMocks";
import { CommsDownstreamMock } from "@/components/visuals/CommsDownstreamMock";
import { FeatureConstellation } from "@/components/visuals/FeatureConstellation";
import { GovernanceShield } from "@/components/visuals/GovernanceShield";
import { LaneOverviewStripMock } from "@/components/visuals/LaneOverviewStripMock";
import { MorningBriefMock } from "@/components/visuals/MorningBriefMock";
import { RankedActionsMock } from "@/components/visuals/RankedActionsMock";
import { TourHoldConflictMock } from "@/components/visuals/TourHoldConflictMock";
import { WorkflowRail } from "@/components/visuals/WorkflowRail";
import { getCtas, getFeature, getFeaturesForLane, getLane } from "@/lib/marketingData";
import { routes } from "@/lib/routes";
import type { Feature } from "@/lib/types";

export function CampaignCockpitFeaturePage({ feature }: { feature: Feature }) {
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
        title="North star: the paneled command floor"
        intro="This is the vision board—not a screenshot. One surface: left rail for route posture (Daily, Map, Readiness, Queues, Lanes), center readiness wall for cross-lane objects, right column for ranked next actions and the principal queue, top bar for overnight deltas and time context, bottom strip for lane posture at a glance. Operator manuals describe the cockpit as where posture becomes legible before the room argues about tactics; this layout is what we build toward."
      >
        <OriginalVisualFrame
          title="Paneled cockpit — full vision (illustration)"
          caption="Marketing vision board: rail + readiness wall + ranked actions + principal queue + lane strip. Final product will vary by deployment."
          style={{ marginTop: "0.5rem" }}
        >
          <CockpitVisionBoardMock />
        </OriginalVisualFrame>
      </Section>

      <Section
        title="Capability status"
        intro="This label describes product vision and design intent—not a blanket claim that every module is live in production today unless your deployment explicitly includes it. The cockpit is core to how we narrate the OS: compressing lanes into posture without hiding drilldown depth."
      >
        <StatusPill status={feature.statusLabel} depth={feature.depthLevel} />
        <OriginalVisualFrame
          title="Twelve-lane scan from the cockpit (mock)"
          caption="How the cockpit is designed to read the same week the lanes produce—schematic posture strip, not live telemetry."
          style={{ marginTop: "1.25rem" }}
        >
          <LaneOverviewStripMock />
        </OriginalVisualFrame>
      </Section>

      <Section
        title="The break (problem)"
        intro={`${feature.problem} If this paragraph feels uncomfortably specific, it is probably describing a week you have already lived—because feature pages are written to be operator-legible, not vendor-generic.`}
      >
        <OriginalVisualFrame
          title="Fragmented tools (illustration)"
          caption="Inboxes, sheets, and decks that never share an object model—the break the cockpit is designed to heal."
          style={{ marginTop: "0.75rem" }}
        >
          <CockpitFragmentedMock />
        </OriginalVisualFrame>
      </Section>

      <Section
        title="Why campaigns need this now"
        intro={`${feature.whyCampaignsNeedIt} The “now” is not hype—it is the part of the calendar where small gaps become public mistakes: debate week, finance close, GOTV crunch, surrogate tours, and rapid response collisions.`}
      >
        <OriginalVisualFrame
          title="Morning deltas as a brief strip (mock)"
          caption="Time-stamped posture signals the cockpit is designed to ingest first thing—illustration only."
          style={{ marginTop: "0.75rem" }}
        >
          <MorningBriefMock />
        </OriginalVisualFrame>
      </Section>

      <Section
        title="What RedDirt is designed to do here"
        intro={`${feature.capability} “Designed” is an intentional verb: it describes intent, gates, and operator posture—not a guarantee that every integration is live without configuration work.`}
      >
        <OriginalVisualFrame
          title="Governance spine behind the tiles (illustrative)"
          caption="Intake → review → approve → execute → record — the pattern that keeps high-consequence work from living in side threads."
          style={{ marginTop: "0.75rem" }}
        >
          <WorkflowRail />
        </OriginalVisualFrame>
      </Section>

      <Section
        title="What it does (operator-visible)"
        intro="Concrete behaviors the lane is built to support—implementation remains configuration-dependent. Read the list as what your staff should be able to rehearse in a walkthrough: observable actions, visible owners, and explicit transitions—not a buzzword cloud."
      >
        <OriginalVisualFrame
          title="Readiness cards + exception queue (mock)"
          caption="CSS composition of cockpit tiles—conceptual layout, not a product screenshot."
          style={{ marginBottom: "1.1rem" }}
        >
          <CockpitMockup />
        </OriginalVisualFrame>
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
        intro="A disciplined sequence your campaign can run weekly—or tighten during crunch windows. If a step feels bureaucratic, compare it to the alternative: improvising the same decision in a side thread at 10pm. The ranked queue is the same story as the cockpit cards: consequence ordering with owners."
      >
        <WorkflowSteps steps={feature.operatorWorkflow} />
        <OriginalVisualFrame
          title="Ranked next actions (detail mock)"
          caption="Same governance objects as the cockpit, expressed as a tight queue — illustration only."
          style={{ marginTop: "1.25rem" }}
        >
          <RankedActionsMock />
        </OriginalVisualFrame>
        <OriginalVisualFrame
          title="Governance spine (repeat reference)"
          caption="The cockpit does not replace this pattern—it surfaces where it is blocked."
          style={{ marginTop: "1rem" }}
        >
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
        <OriginalVisualFrame
          title="Executive row: ready / blocked / principal (mock)"
          caption="Three-up posture for principals—what ships, what is stuck, what needs authority."
          style={{ marginTop: "1.1rem" }}
        >
          <CockpitLeadershipRowMock />
        </OriginalVisualFrame>
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
        <OriginalVisualFrame
          title="Capability mesh (abstract)"
          caption="Cockpit sits on command—lanes hand off objects, not vibes."
          style={{ marginTop: "1.1rem" }}
        >
          <FeatureConstellation />
        </OriginalVisualFrame>
      </Section>

      <Section
        title="Risk reduced"
        intro="This is the blunt version of the story: what becomes less likely to go wrong when the capability is treated as part of a governed operating picture—not a miracle promise. Risk language stays grounded: governance reduces accident rates; it does not erase politics, humans, or law."
      >
        <RiskReductionPanel text={feature.riskReduced} />
        <OriginalVisualFrame
          title="Governance posture (icon treatment)"
          caption="Shield + check as shorthand for approval-backed execution—marketing symbol, not a compliance certificate."
          style={{ marginTop: "1.1rem", display: "flex", justifyContent: "center" }}
        >
          <GovernanceShield />
        </OriginalVisualFrame>
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
        <div className="rd-stack-2col" style={{ marginTop: "1.1rem" }}>
          <OriginalVisualFrame
            title="Approval chain (mock)"
            caption="How gates attach to motion between lanes—schematic."
          >
            <ApprovalChainMock />
          </OriginalVisualFrame>
          <OriginalVisualFrame title="Audit trail excerpt (mock)" caption="Receipts implied by design—not a claim about your logging stack.">
            <AuditTrailMock />
          </OriginalVisualFrame>
        </div>
        <OriginalVisualFrame
          title="Comms downstream handoff (mock)"
          caption="Cockpit ranks; outreach executes with governed context—illustration only."
          style={{ marginTop: "1rem" }}
        >
          <CommsDownstreamMock />
        </OriginalVisualFrame>
      </Section>

      <Section
        title="Example use case"
        intro={`${feature.exampleUseCase} Use cases are deliberately concrete: they should feel like a staff meeting example, not a generic persona paragraph—so you can tell whether the capability matches your race.`}
      >
        <OriginalVisualFrame
          title="Calendar collision pressure (mock)"
          caption="Example overlap story the cockpit is meant to surface alongside sends and county posture—not scheduling automation."
          style={{ marginTop: "0.75rem" }}
        >
          <TourHoldConflictMock />
        </OriginalVisualFrame>
      </Section>

      <Section
        title="Connected lane"
        intro={
          lane
            ? `${lane.summary} The lane page is the next level down: core workflows, operator examples, connected features, and architecture references—so you can keep drilling without losing the thread.`
            : "Lane metadata missing (should not happen)."
        }
      >
        {lane ? (
          <>
            <Link className="rd-btn rd-btn-ghost" href={routes.lane(lane.slug)} style={{ marginBottom: "1rem", display: "inline-flex" }}>
              Open {lane.shortTitle} lane
            </Link>
            <OriginalVisualFrame
              title="Lane posture at a glance (mock)"
              caption="Same strip concept as the cockpit vision footer—twelve lanes as a schematic scan."
            >
              <LaneOverviewStripMock />
            </OriginalVisualFrame>
          </>
        ) : null}
      </Section>

      <Section
        title="Related features"
        intro="Capabilities are not isolated SKUs—they hand off. This grid is a curated crosswalk: adjacent features you should read next if you are mapping workflows, governance gates, or cross-lane dependencies. If the list feels short, the lane index still carries the full mesh."
      >
        <OriginalVisualFrame
          title="Related capabilities as a mesh (abstract)"
          caption="Read next: morning brief, next actions, launch gates—each deepens the cockpit story."
          style={{ marginBottom: "1rem" }}
        >
          <FeatureConstellation />
        </OriginalVisualFrame>
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
