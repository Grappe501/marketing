import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { DrilldownList } from "@/components/DrilldownList";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { WorkflowSteps } from "@/components/WorkflowSteps";
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

      <Section title="Phased adoption (operator sequence)" intro="Pass 3 can add diagrams and screenshots. Pass 2 establishes the sequence serious campaigns recognize from painful experience.">
        <WorkflowSteps steps={PHASES} />
      </Section>

      <Section title="Where teams usually get stuck" intro="Naming the failure modes early prevents the adoption project from becoming a morale problem.">
        <ul style={{ margin: 0, paddingLeft: "1.1rem", color: "var(--muted)" }}>
          <li style={{ marginBottom: "0.55rem" }}>Trying to import everything at once without readiness checks and suppression posture.</li>
          <li style={{ marginBottom: "0.55rem" }}>Turning governance into punishment instead of fast trusted paths for low-risk repeats.</li>
          <li style={{ marginBottom: "0.55rem" }}>Letting the cockpit become another dashboard nobody owns—instead of a Monday decision ritual.</li>
          <li style={{ marginBottom: "0.55rem" }}>Treating counties as a slide deck instead of operational objects with freshness and owners.</li>
        </ul>
      </Section>

      <Section title="Drilldowns" intro="Implementation is also a lane inside the OS: onboarding, migration maps, runbooks, training mode, checklists, launch plans.">
        <DrilldownList
          items={[
            { title: "Implementation lane (features)", href: routes.lane("implementation-ops"), description: "Onboarding, migration, runbooks, training, checklists, launch plan objects." },
            { title: "Governance lane", href: routes.governance, description: "Make safe execution habits default before you scale operators." },
            { title: "Cockpit lane", href: routes.lane("cockpit-command"), description: "Establish the Monday rhythm that makes adoption measurable." },
          ]}
        />
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
