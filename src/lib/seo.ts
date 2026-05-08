import type { Metadata } from "next";
import { getSite } from "@/lib/marketingData";

const OG_DEFAULT = "/og/reddirt-os-og.svg";
const OG_LANES = "/og/reddirt-os-lanes.svg";
const OG_FEATURE = "/og/reddirt-os-feature.svg";

export type PageMetaOptions = {
  /** Path only, e.g. `/contact` — joined with NEXT_PUBLIC_SITE_URL for canonical. */
  path?: string;
  ogVariant?: "default" | "lanes" | "feature";
  /** When true, sets absolute title (no template suffix). */
  absoluteTitle?: boolean;
};

function ogPath(variant: PageMetaOptions["ogVariant"]): string {
  if (variant === "lanes") return OG_LANES;
  if (variant === "feature") return OG_FEATURE;
  return OG_DEFAULT;
}

function noIndex(): boolean {
  return process.env.NEXT_PUBLIC_NO_INDEX === "true";
}

export function pageMeta(title: string, description: string, opts?: PageMetaOptions): Metadata {
  const site = getSite();
  const ogTitle = opts?.absoluteTitle ? title : `${title} — ${site.shortName}`;
  const image = ogPath(opts?.ogVariant);
  const robots = noIndex() ? ({ index: false, follow: false } as const) : ({ index: true, follow: true } as const);
  const base: Metadata = {
    title: opts?.absoluteTitle ? { absolute: title } : title,
    description,
    robots,
    alternates: opts?.path ? { canonical: opts.path } : undefined,
    openGraph: {
      title: ogTitle,
      description,
      siteName: site.ogSiteName,
      type: "website",
      url: opts?.path,
      images: [{ url: image, alt: site.productName }],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [image],
    },
  };
  return base;
}
