import { notFound } from "next/navigation";
import { LanePage } from "@/components/LanePage";
import { getAllLaneSlugs, getLane } from "@/lib/marketingData";
import { pageMeta } from "@/lib/seo";
import { routes } from "@/lib/routes";

type Props = { params: Promise<{ laneSlug: string }> };

export function generateStaticParams() {
  return getAllLaneSlugs().map((laneSlug) => ({ laneSlug }));
}

export async function generateMetadata({ params }: Props) {
  const { laneSlug } = await params;
  const lane = getLane(laneSlug);
  if (!lane) return {};
  const description = `${lane.summary} ${lane.whyItMatters}`.slice(0, 220);
  return pageMeta(`${lane.shortTitle} lane`, description, { path: routes.lane(lane.slug), ogVariant: "lanes" });
}

export default async function Page({ params }: Props) {
  const { laneSlug } = await params;
  const lane = getLane(laneSlug);
  if (!lane) notFound();
  return <LanePage lane={lane} />;
}
