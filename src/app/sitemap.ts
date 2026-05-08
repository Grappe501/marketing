import type { MetadataRoute } from "next";
import { getAllFeatureSlugs, getAllLaneSlugs } from "@/lib/marketingData";
import { routes } from "@/lib/routes";

export const dynamic = "force-static";

const STATIC_PATHS: string[] = [
  routes.home,
  routes.why,
  routes.howItWorks,
  routes.platform,
  routes.lanes,
  routes.features,
  routes.cockpit,
  routes.fundraising,
  routes.compliance,
  routes.calendar,
  routes.outreach,
  routes.field,
  routes.counties,
  routes.intelligence,
  routes.governance,
  routes.implementation,
  routes.demo,
  routes.about,
  routes.contact,
  routes.legal,
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.invalid").replace(/\/$/, "");
  const last = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_PATHS.map((path) => ({
    url: `${base}${path === "/" ? "" : path}`,
    lastModified: last,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.75,
  }));

  const lanes: MetadataRoute.Sitemap = getAllLaneSlugs().map((slug) => ({
    url: `${base}${routes.lane(slug)}`,
    lastModified: last,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const features: MetadataRoute.Sitemap = getAllFeatureSlugs().map((slug) => ({
    url: `${base}${routes.feature(slug)}`,
    lastModified: last,
    changeFrequency: "monthly",
    priority: 0.65,
  }));

  return [...staticEntries, ...lanes, ...features];
}
