import { routes } from "@/lib/routes";

export const CTAS = {
  primary: { label: "Request a walkthrough", href: routes.contact },
  secondary: { label: "Explore the operating system", href: routes.platform },
  demo: { label: "Open guided walkthrough", href: routes.demo },
  contact: { label: "Request a walkthrough", href: routes.contact },
  features: { label: "Browse the feature map", href: routes.features },
  lanes: { label: "See every campaign lane", href: routes.lanes },
  implementation: { label: "Review adoption path", href: routes.implementation },
} as const;
