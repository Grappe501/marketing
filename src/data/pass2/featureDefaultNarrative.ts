import type { Feature } from "@/lib/types";
import { laneTitleFromSlug } from "@/lib/laneTitles";

type Pass2Keys =
  | "heroStatement"
  | "whyCampaignsNeedIt"
  | "operatorWorkflow"
  | "leadershipValue"
  | "connectedSystems"
  | "exampleUseCase"
  | "riskReduced";

export type FeatureCore = Omit<Feature, Pass2Keys>;

function connectedSystemsForLane(laneSlug: string): string[] {
  const cockpit = "Campaign Cockpit";
  const gov = "Governance + audit trails";
  const cal = "Calendar + events";
  const outreach = "Outreach + distribution";
  const data = "Data + contact graph";
  const counties = "County intelligence";
  const field = "Volunteers + field + GOTV";
  const money = "Fundraising + Good Change";
  const compliance = "Budget + compliance preparation";
  const intel = "Intelligence + briefings";
  const web = "Content + website";
  const impl = "Implementation + runbooks";

  const map: Record<string, string[]> = {
    "cockpit-command": [gov, outreach, cal, counties, money, compliance, field],
    "fundraising-good-change": [cockpit, compliance, gov, cal, field],
    "budget-compliance": [cockpit, money, gov, outreach],
    "outreach-distribution": [gov, data, cal, web, cockpit],
    "calendar-events": [gov, outreach, field, counties, cockpit],
    "volunteer-field-gotv": [counties, cal, cockpit, data, outreach],
    "county-intelligence": [field, outreach, cal, cockpit, intel],
    "data-voter-contact": [outreach, gov, counties, cockpit],
    "content-website": [outreach, gov, cal, counties],
    "intelligence-briefings": [outreach, counties, gov, cockpit],
    "governance-security": [outreach, money, compliance, data, cockpit],
    "implementation-ops": [cockpit, gov, impl],
  };
  return map[laneSlug] ?? [cockpit, gov];
}

type NarrativeOverride = Partial<
  Pick<
    Feature,
    | "heroStatement"
    | "whyCampaignsNeedIt"
    | "operatorWorkflow"
    | "leadershipValue"
    | "connectedSystems"
    | "exampleUseCase"
    | "riskReduced"
    | "whatItDoes"
    | "operatorValue"
    | "campaignValue"
  >
>;

export function finalizeFeature(core: FeatureCore, override?: NarrativeOverride): Feature {
  const base = applyDefaultNarrative(core);
  if (!override) return base;
  return {
    ...base,
    ...override,
    whatItDoes: override.whatItDoes ?? base.whatItDoes,
    operatorValue: override.operatorValue ?? base.operatorValue,
    campaignValue: override.campaignValue ?? base.campaignValue,
    operatorWorkflow: override.operatorWorkflow ?? base.operatorWorkflow,
    leadershipValue: override.leadershipValue ?? base.leadershipValue,
    connectedSystems: override.connectedSystems ?? base.connectedSystems,
    heroStatement: override.heroStatement ?? base.heroStatement,
    whyCampaignsNeedIt: override.whyCampaignsNeedIt ?? base.whyCampaignsNeedIt,
    exampleUseCase: override.exampleUseCase ?? base.exampleUseCase,
    riskReduced: override.riskReduced ?? base.riskReduced,
  };
}

export function applyDefaultNarrative(core: FeatureCore): Feature {
  const lane = laneTitleFromSlug(core.laneSlug);
  return {
    ...core,
    heroStatement: `${core.title} is designed to give operators a governed surface inside the ${lane} lane—structured objects, visible owners, and traceability instead of heroic memory.`,
    whyCampaignsNeedIt: `${core.problem} In a serious statewide race, that drift becomes money left on the table, doors never knocked, or a headline you did not plan for.`,
    operatorWorkflow: [
      `Capture the work as a tracked object in ${lane} with owners, dependencies, and status—not a one-off thread.`,
      `Run readiness and approvals the campaign configured: gates are designed to be explicit, fast for trusted paths, and auditable.`,
      `Execute with final operator confirmation where risk is high (sends, publishes, sensitive exports).`,
      `Record the outcome so finance, compliance preparation, and leadership share the same operating picture.`,
    ],
    leadershipValue: [
      `Makes readiness legible: what is green, yellow, or blocked—without forcing principals to live inside every tool.`,
      `Reduces surprise during crunch windows: filings proximity, major sends, debate weeks, tour weeks, and GOTV peaks.`,
    ],
    connectedSystems: connectedSystemsForLane(core.laneSlug),
    exampleUseCase: `Mid-race week: ${core.summary} The operator should leave with a next action, not a new mystery.`,
    riskReduced: `Reduces the risk that ${core.shortTitle.toLowerCase()} happens outside governance—wrong owner, missing approval, unclear dependency, or invisible suppression posture.`,
  };
}
