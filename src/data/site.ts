import { routes } from "@/lib/routes";

export const SITE = {
  productName: "RedDirt Operating Systems",
  shortName: "RedDirt OS",
  tagline: "Run the whole race from one governed command system.",
  metaTitleDefault: "RedDirt Operating Systems — Campaign operating system",
  metaDescriptionDefault:
    "RedDirt Operating Systems (RedDirt OS) is designed as a governed campaign operating system: outreach, fundraising + Good Change, calendar, field + GOTV, county intelligence, compliance preparation, content, and executive command—one operating picture, operator-guided workflows, no official government endorsement implied.",
  primaryCtaLabel: "Request a walkthrough",
  secondaryCtaLabel: "Explore the operating system",
  primaryCtaHref: routes.contact,
  secondaryCtaHref: routes.platform,
  legalShort:
    "RedDirt Operating Systems is a product positioning name for a campaign operating system vision. It is not affiliated with any government office, state portal, or election authority. Compliance and filing obligations remain the campaign’s responsibility; the platform is described as supporting preparation, operator-guided workflows, and audit-friendly records where applicable.",
  ogSiteName: "RedDirt Operating Systems",
} as const;
