import type { Metadata } from "next";
import Link from "next/link";
import { CommandGrid } from "@/components/CommandGrid";
import { ComparisonTable } from "@/components/ComparisonTable";
import { CoverageMatrix } from "@/components/CoverageMatrix";
import { CTASection } from "@/components/CTASection";
import { DemoWalkthrough } from "@/components/DemoWalkthrough";
import { FeatureSpotlight } from "@/components/FeatureSpotlight";
import { GoldenCircle } from "@/components/GoldenCircle";
import { HomeHero } from "@/components/HomeHero";
import { InteractiveFeatureGrid } from "@/components/InteractiveFeatureGrid";
import { LaneCard } from "@/components/LaneCard";
import { MotionReveal } from "@/components/MotionReveal";
import { NarrativeBlock } from "@/components/NarrativeBlock";
import { OriginalVisualFrame } from "@/components/OriginalVisualFrame";
import { ProofStrip } from "@/components/ProofStrip";
import { Section } from "@/components/Section";
import { CampaignStackComparison } from "@/components/visuals/CampaignStackComparison";
import { CockpitMockup } from "@/components/visuals/CockpitMockup";
import { FeatureConstellation } from "@/components/visuals/FeatureConstellation";
import type { Feature } from "@/lib/types";
import { getCtas, getFeature, getLanes, getProofPoints } from "@/lib/marketingData";
import { pageMeta } from "@/lib/seo";
import { routes } from "@/lib/routes";

export const metadata: Metadata = pageMeta(
  "RedDirt Operating Systems — Campaign operating system",
  "Run the whole race from one governed command system. RedDirt OS is designed for serious statewide campaigns: outreach, fundraising + Good Change, calendar, field + GOTV, counties, compliance preparation, and executive cockpit command—less chaos, more command.",
  { path: "/", absoluteTitle: true, ogVariant: "default" },
);

const SPOTLIGHT_SLUGS = [
  "campaign-cockpit",
  "morning-command-brief",
  "operator-next-actions",
  "launch-readiness-gates",
  "good-change-fundraising-lane",
  "donor-pipeline",
  "call-time-command",
  "budget-command-center",
  "compliance-preparation",
  "email-command-center",
  "audience-studio",
  "message-studio",
  "send-execution",
  "suppression-management",
  "calendar-hq",
  "event-request-intake",
  "volunteer-command-center",
  "relational-organizing",
];

export default function HomePage() {
  const lanes = getLanes();
  const proof = getProofPoints();
  const ctas = getCtas();
  const spotlights = SPOTLIGHT_SLUGS.map((s) => getFeature(s)).filter((f): f is Feature => Boolean(f));

  const commandCards = [
    { title: "Email distribution readiness", status: "Gate", detail: "Audience locked, suppression reviewed, approvals attached—execution waits on final operator confirmation." },
    { title: "Calendar requests", status: "Queue", detail: "Three events awaiting approval; comms queue not generated until calendar truth is approved." },
    { title: "County priorities", status: "Map", detail: "Six counties flagged: briefing drift plus field coverage gaps tied to the same county objects." },
    { title: "Fundraising follow-up", status: "Pipeline", detail: "Pledged-but-open items routed to finance review with documentation posture—not a side spreadsheet myth." },
    { title: "Compliance deadlines", status: "Window", detail: "Filing-adjacent preparation tasks owned and dated—counsel/treasurer remain responsible for official filing." },
    { title: "Field / GOTV exceptions", status: "Risk", detail: "Precinct priorities misaligned to volunteer staffing plan—exceptions visible early enough to fix." },
  ];

  const chips = [
    "Communications",
    "Fundraising",
    "Good Change lane",
    "Calendar",
    "Volunteers",
    "Field / GOTV",
    "County intelligence",
    "Data + contact",
    "Publishing",
    "Compliance preparation",
    "Governance",
    "Implementation",
  ];

  return (
    <>
      <HomeHero />

      <MotionReveal>
      <Section
        id="stakes"
        eyebrow="Stakes"
        title="The campaign stack was never designed to run the campaign."
        intro="A serious statewide operation is dozens of urgent lanes at once: donor spreadsheets, email platforms, disconnected calendars, volunteer lists, county docs, compliance trackers, message drafts, event requests, surrogate packets, and leadership updates. The issue is not how many tools you own. The issue is that nobody can see the same race at the same time—so the campaign starts running on heroic memory instead of a system."
      >
        <NarrativeBlock kicker="Operator reality" title="Less chaos. More command.">
          The emotional promise is simple: less thrash. The practical promise is operational: a campaign can see what is ready, what is blocked, what needs approval, and what action moves the race forward—without pretending dangerous work should be easy to do by accident.
        </NarrativeBlock>
      </Section>
      </MotionReveal>

      <MotionReveal>
      <Section
        eyebrow="Golden Circle"
        title="Why → How → What"
        intro="This is the spine of the story: fracture, governance, full-stack coverage—written for campaign managers, finance leads, field directors, and principals."
      >
        <GoldenCircle
          why={{
            title: "Campaigns are not one workflow",
            body: "They are dozens of urgent lanes moving at once. When those lanes live in disconnected tools, leadership loses visibility, operators duplicate work, approvals drift, and the race starts running on memory instead of a governed operating picture.",
          }}
          how={{
            title: "Governed workflows + shared operating data",
            body: "RedDirt OS connects the campaign through readiness checks, approval gates, operator checkpoints, and command surfaces that show the next action. It is designed to make high-consequence work visible and reviewed—not to turn dangerous actions loose for speed.",
          }}
          what={{
            title: "A campaign operating system",
            body: "Outreach, fundraising + Good Change, calendar + events, volunteers + field + GOTV, county intelligence, data + contact, content + website, intelligence + briefings, budget + compliance preparation, governance, implementation—and the Cockpit that reads posture across all of it.",
          }}
        />
      </Section>
      </MotionReveal>

      <MotionReveal>
      <Section
        eyebrow="Coverage"
        title="Full campaign coverage"
        intro="Try to find the missing lane. If a serious statewide race needs it, RedDirt OS is structured to speak it as an operating object—not a forgotten tab."
      >
        <CoverageMatrix lanes={lanes} />
      </Section>
      </MotionReveal>

      <MotionReveal>
      <Section
        eyebrow="Command"
        title="The Cockpit is the emotional center"
        intro="Monday morning is not a mood. It is a command rhythm: readiness, blockers, ranked next actions, calendar pressure, county health, fundraising follow-ups, compliance windows, and field/GOTV exceptions—one stack."
      >
        <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
          <OriginalVisualFrame title="Cockpit mock — original illustration" caption="CSS composition: readiness cards, exception queue, and lane signals (not a screenshot).">
            <CockpitMockup />
          </OriginalVisualFrame>
          <CommandGrid cards={commandCards} />
        </div>
      </Section>
      </MotionReveal>

      <MotionReveal>
      <Section eyebrow="Stack replacement" title="Fragments vs operating picture">
        <ComparisonTable
          beforeTitle="Before RedDirt OS (typical scattered stack)"
          afterTitle="With RedDirt OS (governed lanes + command)"
          before={[
            "Fragmented spreadsheets and side threads become the system of record",
            "Hidden blockers surface only after something breaks publicly",
            "Last-minute approvals and rubber-stamp rituals under fatigue",
            "Unclear ownership: everyone busy, nobody accountable",
            "Duplicate lists and divergent segments across tools",
            "Message drift between email, site, surrogates, and counties",
            "Compliance scramble reconstructed at the deadline",
          ]}
          after={[
            "Governed lanes with tracked objects: owners, status, dependencies",
            "Shared readiness: green, yellow, blocked—visible in the Cockpit",
            "Visible approvals and audit-friendly decision records",
            "Operator next actions ranked by consequence: money, doors, deadlines, message risk",
            "Connected audiences and explainable segmentation rules",
            "Command rhythm: brief → exceptions → approvals → execution → record",
            "Compliance preparation built into weekly posture—still counsel/treasurer-owned for filing",
          ]}
        />
        <div style={{ marginTop: "1rem" }}>
          <OriginalVisualFrame title="Stack → command layer" caption="Original SVG: scattered tools consolidating into a governed cockpit layer.">
            <CampaignStackComparison />
          </OriginalVisualFrame>
        </div>
      </Section>
      </MotionReveal>

      <MotionReveal>
      <Section
        eyebrow="Lanes"
        title="Twelve lanes. One operating system."
        intro="Each card is a contract: what the lane controls, why it matters in a real race, and what the operator gets—not a generic feature blur."
      >
        <div className="rd-card-grid">
          {lanes.map((lane) => (
            <LaneCard key={lane.slug} lane={lane} />
          ))}
        </div>
      </Section>
      </MotionReveal>

      <MotionReveal>
      <Section
        eyebrow="Feature depth"
        title="Proof by taxonomy"
        intro="Eighteen spotlight features across lanes—enough to feel the map. The full index is built to answer: where is the gap?"
      >
        <div style={{ display: "grid", gap: "0.75rem", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
          {spotlights.map((f) => (
            <FeatureSpotlight key={f!.slug} feature={f!} />
          ))}
        </div>
        <div style={{ marginTop: "1rem", display: "flex", flexWrap: "wrap", gap: "0.75rem", alignItems: "center" }}>
          <Link className="rd-btn rd-btn-primary" href={routes.features}>
            Open the full feature map
          </Link>
          <OriginalVisualFrame title="Capability constellation" caption="Abstract node illustration — not a data diagram.">
            <FeatureConstellation />
          </OriginalVisualFrame>
        </div>
        <div style={{ marginTop: "1.25rem" }}>
          <p className="rd-muted" style={{ margin: "0 0 0.5rem", fontSize: "0.88rem" }}>
            Quick links into spotlight capabilities (same pages as the cards above):
          </p>
          <InteractiveFeatureGrid
            cells={spotlights.slice(0, 8).map((f) => ({
              label: f!.shortTitle,
              href: routes.feature(f!.slug),
            }))}
          />
        </div>
      </Section>
      </MotionReveal>

      <MotionReveal>
      <Section
        eyebrow="Walkthrough"
        title="Walk the race from the Cockpit"
        intro="This is a narrative demo—static marketing build (no backend). It is written so a serious campaign staffer recognizes their week."
      >
        <DemoWalkthrough />
        <p style={{ marginTop: "1rem" }}>
          <Link className="rd-btn rd-btn-ghost" href={routes.demo}>
            Open the full walkthrough page
          </Link>
        </p>
      </Section>
      </MotionReveal>

      <MotionReveal>
      <Section eyebrow="Proof posture" title="What serious looks like" intro="Structural commitments the product story must keep earning—no lazy AI hype, no compliance fantasy.">
        <ProofStrip points={proof} />
      </Section>
      </MotionReveal>

      <MotionReveal>
      <Section
        eyebrow="Challenge"
        title="Try to find the missing lane."
        intro="The question is not which tool replaces which spreadsheet. The question is what happens when the whole campaign finally runs from the same operating picture."
      >
        <div className="rd-panel rd-panel-glow" style={{ padding: "1.25rem" }}>
          <div className="rd-chip-row">
            {chips.map((c) => (
              <span key={c} className="rd-chip">
                {c}
              </span>
            ))}
          </div>
        </div>
      </Section>
      </MotionReveal>

      <MotionReveal>
      <Section
        eyebrow="Implementation"
        title="Adoption is operational sequencing"
        intro="Software fails mid-race when onboarding is a single meeting. RedDirt OS is designed around migration maps, runbooks, training posture, readiness checklists, and a cockpit cadence that becomes the campaign’s weekly rhythm."
      >
        <ol style={{ margin: 0, paddingLeft: "1.1rem", color: "var(--muted)" }}>
          <li style={{ marginBottom: "0.55rem" }}>Map the campaign: lanes, owners, dependencies, and where the stack lies today.</li>
          <li style={{ marginBottom: "0.55rem" }}>Load the lanes you need first—then expand without breaking the operating picture.</li>
          <li style={{ marginBottom: "0.55rem" }}>Align data with import readiness, consent/suppression posture, and explainable audiences.</li>
          <li style={{ marginBottom: "0.55rem" }}>Set governance defaults: approvals, roles, audit habits—before you scale operators.</li>
          <li style={{ marginBottom: "0.55rem" }}>Train operators in a safe posture; rehearse launches and high-risk sends.</li>
          <li style={{ marginBottom: "0.55rem" }}>Launch cockpit rhythm: morning brief, exception queue, ranked next actions.</li>
          <li>Expand by county and function as the race matures—same command surface, deeper drilldowns.</li>
        </ol>
        <p style={{ marginTop: "1rem" }}>
          <Link className="rd-link-arrow" href={routes.implementation} style={{ color: "var(--accent-2)" }}>
            Read the implementation plan
          </Link>
        </p>
      </Section>
      </MotionReveal>

      <CTASection
        title="Stop assembling the campaign from fragments."
        body="See the operating system the way operators will actually run it: lanes, drilldowns, governance, and command."
        primary={ctas.primary}
        secondary={ctas.secondary}
        tertiary={ctas.lanes}
      />
    </>
  );
}
