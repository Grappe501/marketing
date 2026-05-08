import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { NarrativeBlock } from "@/components/NarrativeBlock";
import { DrilldownList } from "@/components/DrilldownList";
import { OriginalVisualFrame } from "@/components/OriginalVisualFrame";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { WorkflowSteps } from "@/components/WorkflowSteps";
import { AdoptionPhasesMock } from "@/components/visuals/AdoptionPhasesMock";
import { CockpitMockup } from "@/components/visuals/CockpitMockup";
import { LaneOverviewStripMock } from "@/components/visuals/LaneOverviewStripMock";
import { MorningBriefMock } from "@/components/visuals/MorningBriefMock";
import { RankedActionsMock } from "@/components/visuals/RankedActionsMock";
import { getCtas } from "@/lib/marketingData";
import { pageMeta } from "@/lib/seo";
import { routes } from "@/lib/routes";

export const metadata: Metadata = pageMeta(
  "Implementation",
  "Adopting RedDirt OS means building the campaign’s operating rhythm: map the campaign, load lanes, align data, set governance, train operators, launch cockpit cadence, expand by county and function—sequencing without fantasy dates.",
  { path: "/implementation" },
);

const PHASES = [
  "Map the campaign: lanes, owners, dependencies, vendors, lists, and where truth lives today (even if it is ugly).",
  "Load the lanes you need first—Cockpit + governance + your highest-risk lane (often outreach or finance posture).",
  "Align data with import readiness: staging, validation, dedupe strategy, suppression/consent posture—no ‘big bang’ without checkpoints.",
  "Set governance defaults: approvals, roles, audit habits—before you scale volunteers and shifts.",
  "Train operators using safe rehearsal posture; run a practice launch object through gates.",
  "Launch cockpit rhythm: morning brief, exception queue, ranked next actions—make Monday repeatable.",
  "Expand by county and function: deepen county intelligence, field/GOTV readiness, and fundraising lane maturity as the race accelerates.",
];

export default function Page() {
  const ctas = getCtas();

  return (
    <>
      <PageHero
        eyebrow="Implementation"
        title="Adopting RedDirt OS means building the campaign’s operating rhythm."
        subtitle="This is not a slide deck migration. It is sequencing: map reality, load lanes, align data, set governance, train operators, launch a cockpit cadence, then expand without shattering the operating picture. Timelines vary by team size, data cleanliness, and risk tolerance—what matters is the order, not a fake universal deadline."
      />

      <Section
        title="Phased adoption (operator sequence)"
        intro="The sequence serious campaigns recognize from painful experience — illustrated here as rails and cockpit posture, not a fixed calendar promise. Timelines vary by team size, data cleanliness, and risk tolerance; what does not vary is the order. If you load everything at once without governance defaults, you recreate the fracture—just inside a newer UI."
      >
        <WorkflowSteps steps={PHASES} />
        <OriginalVisualFrame title="Adoption spine (illustration)" caption="Map → load → align → govern → train → rhythm → expand — conceptual only." style={{ marginTop: "1.25rem" }}>
          <AdoptionPhasesMock />
        </OriginalVisualFrame>
      </Section>

      <Section
        title="Where teams usually get stuck"
        intro="Naming the failure modes early prevents the adoption project from becoming a morale problem. Most stalls are not technical—they are sequencing mistakes: governance treated as punishment, cockpit treated as vanity metrics, counties treated as slides, and imports treated as a big bang without suppression posture and validation checkpoints."
      >
        <NarrativeBlock kicker="Reality" title="Adoption fails when Monday does not change">
          If operators still live in side threads after go-live, the system did not win—regardless of how polished the onboarding deck was. The adoption story is measurable: fewer duplicate lists, fewer accidental publishes, fewer Friday afternoon comms scrambles, and a cockpit ritual leadership will actually use.
        </NarrativeBlock>
        <OriginalVisualFrame title="Cockpit rhythm target (mock)" caption="What “Monday repeatable” is aiming at — CSS mock, not a screenshot." style={{ marginTop: "1rem", marginBottom: "1.25rem" }}>
          <CockpitMockup />
        </OriginalVisualFrame>
        <ul style={{ margin: 0, paddingLeft: "1.1rem", color: "var(--muted)" }}>
          <li style={{ marginBottom: "0.55rem" }}>Trying to import everything at once without readiness checks and suppression posture.</li>
          <li style={{ marginBottom: "0.55rem" }}>Turning governance into punishment instead of fast trusted paths for low-risk repeats.</li>
          <li style={{ marginBottom: "0.55rem" }}>Letting the cockpit become another dashboard nobody owns—instead of a Monday decision ritual.</li>
          <li style={{ marginBottom: "0.55rem" }}>Treating counties as a slide deck instead of operational objects with freshness and owners.</li>
        </ul>
      </Section>

      <Section
        title="Drilldowns"
        intro="Implementation is also a lane inside the OS: onboarding, migration maps, runbooks, training mode, checklists, launch plans, and the boring work of making Monday repeatable. Treat it as part of the product—not an afterthought—because campaigns do not get a second October to relearn habits."
      >
        <DrilldownList
          items={[
            { title: "Implementation lane (features)", href: routes.lane("implementation-ops"), description: "Onboarding, migration, runbooks, training, checklists, launch plan objects." },
            { title: "Governance lane", href: routes.governance, description: "Make safe execution habits default before you scale operators." },
            { title: "Cockpit lane", href: routes.lane("cockpit-command"), description: "Establish the Monday rhythm that makes adoption measurable." },
          ]}
        />
        <div className="rd-stack-2col" style={{ marginTop: "1.25rem" }}>
          <OriginalVisualFrame title="Monday brief rhythm (mock)" caption="What leadership and operators align on before noon — illustration only.">
            <MorningBriefMock />
          </OriginalVisualFrame>
          <OriginalVisualFrame title="Lane posture after load (mock)" caption="Schematic readiness scan — not deployment telemetry.">
            <LaneOverviewStripMock />
          </OriginalVisualFrame>
        </div>
        <OriginalVisualFrame title="Adoption week still ranks like a race (mock)" caption="Implementation tasks compete with sends and deadlines — same queue metaphor." style={{ marginTop: "1.25rem" }}>
          <RankedActionsMock />
        </OriginalVisualFrame>
      </Section>

      <CTASection
        title="Request a walkthrough"
        body="Static narrative today; intake wiring later."
        primary={ctas.primary}
        secondary={ctas.demo}
        tertiary={ctas.features}
      />
    </>
  );
}
