import { CTAS } from "@/data/cta";
import { FAQ_ITEMS } from "@/data/faq";
import { FEATURES } from "@/data/features";
import { LANES } from "@/data/lanes";
import { NAV } from "@/data/navigation";
import { PROOF_POINTS } from "@/data/proofPoints";
import { SITE } from "@/data/site";
import type { Feature, Lane } from "@/lib/types";

export type {
  DepthLevel,
  FaqItem,
  Feature,
  Lane,
  LaneSection,
  NavGroup,
  NavLink,
  ProofPoint,
} from "@/lib/types";

const laneBySlug = new Map<string, Lane>(LANES.map((l) => [l.slug, l]));
const featureBySlug = new Map<string, Feature>(FEATURES.map((f) => [f.slug, f]));

export function getSite() {
  return SITE;
}

export function getNav() {
  return NAV;
}

export function getLanes() {
  return LANES;
}

export function getLane(slug: string) {
  return laneBySlug.get(slug);
}

export function getFeatures() {
  return FEATURES;
}

export function getFeature(slug: string) {
  return featureBySlug.get(slug);
}

export function getFeaturesForLane(laneSlug: string) {
  return FEATURES.filter((f) => f.laneSlug === laneSlug);
}

export function getProofPoints() {
  return PROOF_POINTS;
}

export function getFaq() {
  return FAQ_ITEMS;
}

export function getCtas() {
  return CTAS;
}

export function getAllLaneSlugs() {
  return LANES.map((l) => l.slug);
}

export function getAllFeatureSlugs() {
  return FEATURES.map((f) => f.slug);
}
