import { notFound } from "next/navigation";
import { CampaignCockpitFeaturePage } from "@/components/CampaignCockpitFeaturePage";
import { FeaturePage } from "@/components/FeaturePage";
import { getAllFeatureSlugs, getFeature } from "@/lib/marketingData";
import { pageMeta } from "@/lib/seo";
import { routes } from "@/lib/routes";

type Props = { params: Promise<{ featureSlug: string }> };

export function generateStaticParams() {
  return getAllFeatureSlugs().map((featureSlug) => ({ featureSlug }));
}

export async function generateMetadata({ params }: Props) {
  const { featureSlug } = await params;
  const feature = getFeature(featureSlug);
  if (!feature) return {};
  const description = `${feature.heroStatement} ${feature.summary}`.slice(0, 240);
  return pageMeta(feature.title, description, { path: routes.feature(feature.slug), ogVariant: "feature" });
}

export default async function Page({ params }: Props) {
  const { featureSlug } = await params;
  const feature = getFeature(featureSlug);
  if (!feature) notFound();
  if (feature.slug === "campaign-cockpit") {
    return <CampaignCockpitFeaturePage feature={feature} />;
  }
  return <FeaturePage feature={feature} />;
}
