export type DepthLevel = "core" | "advanced" | "enterprise";

export type LaneSection = {
  id: string;
  title: string;
  body: string;
};

export type Lane = {
  slug: string;
  eyebrow: string;
  title: string;
  shortTitle: string;
  summary: string;
  whyItMatters: string;
  operatorPromise: string;
  featureSlugs: string[];
  primaryCTA: { label: string; href: string };
  visualTheme: string;
  sections: LaneSection[];
};

export type Feature = {
  slug: string;
  laneSlug: string;
  title: string;
  shortTitle: string;
  summary: string;
  problem: string;
  capability: string;
  whatItDoes: string[];
  operatorValue: string[];
  campaignValue: string[];
  statusLabel: string;
  depthLevel: DepthLevel;
  relatedFeatureSlugs: string[];
  pageSections: string[];
  /** Pass 2 narrative — always populated after enrichment. */
  heroStatement: string;
  whyCampaignsNeedIt: string;
  operatorWorkflow: string[];
  leadershipValue: string[];
  connectedSystems: string[];
  exampleUseCase: string;
  riskReduced: string;
};

export type ProofPoint = {
  id: string;
  label: string;
  detail: string;
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type NavLink = {
  label: string;
  href: string;
  description?: string;
};

export type NavGroup = {
  id: string;
  label: string;
  links: NavLink[];
};
