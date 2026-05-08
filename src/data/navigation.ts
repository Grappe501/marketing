import { routes } from "@/lib/routes";
import type { NavGroup } from "@/lib/types";

export const NAV: NavGroup[] = [
  {
    id: "story",
    label: "Story",
    links: [
      { label: "Why RedDirt OS", href: routes.why, description: "The fracture problem campaigns solve." },
      { label: "How it works", href: routes.howItWorks, description: "Governed workflows and shared data." },
      { label: "Platform", href: routes.platform, description: "One operating rhythm end to end." },
    ],
  },
  {
    id: "lanes",
    label: "Lanes",
    links: [
      { label: "All lanes", href: routes.lanes, description: "Twelve operating lanes across the race." },
      { label: "Campaign Cockpit", href: routes.cockpit, description: "Command surfaces and readiness." },
      { label: "Fundraising + Good Change", href: routes.fundraising, description: "Donor motion as an operating lane." },
      { label: "Compliance + budget", href: routes.compliance, description: "Preparation, visibility, controls." },
    ],
  },
  {
    id: "execution",
    label: "Execution",
    links: [
      { label: "Outreach", href: routes.outreach, description: "Audience, message, approval, send posture." },
      {
        label: "Calendar + events",
        href: routes.calendar,
        description: "HQ intake, week density, tour holds, approvals, public-ready gates, downstream comms + field artifacts.",
      },
      { label: "Field + GOTV", href: routes.field, description: "Volunteers, relational, precinct priorities." },
      { label: "Counties", href: routes.counties, description: "Local intelligence and county operations." },
    ],
  },
  {
    id: "intel",
    label: "Intelligence",
    links: [
      { label: "Strategic intelligence", href: routes.intelligence, description: "Research, opposition context, briefing posture." },
      { label: "Governance + safety", href: routes.governance, description: "Approvals, audit trails, operator-safe workflows." },
      { label: "Feature map", href: routes.features, description: "Drilldown taxonomy across every lane." },
      { label: "County intelligence", href: routes.counties, description: "Local race intelligence and county operations." },
    ],
  },
  {
    id: "adopt",
    label: "Adoption",
    links: [
      { label: "Implementation", href: routes.implementation, description: "How a campaign adopts the OS." },
      { label: "Demo", href: routes.demo, description: "Walkthrough request (Pass 1 skeleton)." },
      { label: "About", href: routes.about, description: "Product philosophy and builder posture." },
      { label: "Contact", href: routes.contact, description: "Lead capture UI (no backend in Pass 1)." },
    ],
  },
];
