import { routes } from "@/lib/routes";
import type { Lane } from "@/lib/types";

export const LANES: Lane[] = [
  {
    slug: "cockpit-command",
    eyebrow: "Command",
    title: "Campaign Cockpit / command center",
    shortTitle: "Cockpit",
    summary:
      "The Cockpit is designed to compress campaign noise into a ranked command stack: readiness, blockers, exceptions, and the next operator action.",
    whyItMatters:
      "Serious races drown in tools. Without a command surface, leadership loses the thread between what is approved, what is blocked, and what must happen next.",
    operatorPromise:
      "A morning-ready command rhythm: briefings, next actions, executive visibility, and launch gates that are explicit rather than implied.",
    featureSlugs: [
      "campaign-cockpit",
      "morning-command-brief",
      "operator-next-actions",
      "executive-readiness-dashboard",
      "statewide-race-health-map",
      "launch-readiness-gates",
    ],
    primaryCTA: { label: "Explore Cockpit lane", href: routes.cockpit },
    visualTheme: "cockpit",
    sections: [
      {
        id: "rhythm",
        title: "Operating rhythm, not vanity metrics",
        body: "This lane is structured to answer: what is ready, what is blocked, and what moves the campaign today. Pass 2 will tighten operator language and add screenshot proof.",
      },
      {
        id: "connect",
        title: "Connects across lanes",
        body: "Cockpit cards can pull posture from outreach, calendar, counties, fundraising, compliance preparation, and field—without forcing a brittle integration story.",
      },
      {
        id: "workflow",
        title: "Example operator workflow",
        body: "Morning brief → exception queue → approval gate review → county priority check → fundraising follow-up queue → compliance deadline awareness.",
      },
    ],
  },
  {
    slug: "fundraising-good-change",
    eyebrow: "Fundraising",
    title: "Fundraising + Good Change",
    shortTitle: "Fundraising",
    summary:
      "Fundraising becomes an operating lane: donor intent, call time, events, pledges, finance workflow, and compliance preparation hooks—governed, not scattered.",
    whyItMatters:
      "When fundraising lives in side spreadsheets, follow-up dies and finance loses the thread between pledges, deposits, and reporting posture.",
    operatorPromise:
      "Designed to show the handoff from donor interest to call-time follow-up to finance review—without claiming a specific processor integration unless configured.",
    featureSlugs: [
      "good-change-fundraising-lane",
      "donor-pipeline",
      "contribution-tracking",
      "fundraising-calendar",
      "call-time-command",
      "event-fundraising",
      "pledge-follow-up",
      "finance-team-workflow",
    ],
    primaryCTA: { label: "Explore fundraising lane", href: routes.fundraising },
    visualTheme: "fundraising",
    sections: [
      {
        id: "lane",
        title: "Good Change as a lane",
        body: "Good Change is positioned as a fundraising motion inside the OS: structured stages, operator checkpoints, and finance visibility—not a bolt-on brand slide.",
      },
      {
        id: "finance",
        title: "Finance team alignment",
        body: "Designed to connect pledges, events, call time, and reporting support workflows so the campaign does not rebuild reality at quarter close.",
      },
      {
        id: "compliance-hook",
        title: "Compliance preparation connection",
        body: "Contribution tracking and finance workflow are framed as preparation-friendly: visibility and record posture, not a substitute for counsel.",
      },
    ],
  },
  {
    slug: "budget-compliance",
    eyebrow: "Compliance",
    title: "Budgeting, reporting, compliance preparation",
    shortTitle: "Budget + compliance",
    summary:
      "Budget and compliance preparation stay connected to spend, vendors, deadlines, and audit-ready records—so leadership sees risk before it becomes crisis.",
    whyItMatters:
      "Deadlines do not negotiate. When budgets, vendors, and filings drift away from operations, campaigns get surprised—usually in the worst week of the race.",
    operatorPromise:
      "A budget command center with filing awareness, expenditure tracking, and audit-ready record posture described in operator-guided language.",
    featureSlugs: [
      "budget-command-center",
      "compliance-preparation",
      "expenditure-tracking",
      "contribution-expenditure-reporting-support",
      "vendor-spend-controls",
      "filing-deadline-awareness",
      "audit-ready-records",
    ],
    primaryCTA: { label: "Explore compliance lane", href: routes.compliance },
    visualTheme: "compliance",
    sections: [
      {
        id: "prep",
        title: "Preparation-first posture",
        body: "This lane avoids implying official portal filing. It emphasizes preparation, export readiness, operator discipline, and counsel-aligned workflows.",
      },
      {
        id: "visibility",
        title: "Leadership visibility",
        body: "Designed so principals can see spend posture, vendor risk, and deadline proximity without waiting for a finance meeting deck.",
      },
      {
        id: "records",
        title: "Audit-ready discipline",
        body: "Audit-ready records are framed as structured operator behavior: consistent entries, approvals, and traceability—not magic automation.",
      },
    ],
  },
  {
    slug: "outreach-distribution",
    eyebrow: "Outreach",
    title: "Email, web, content, comms, message governance",
    shortTitle: "Outreach",
    summary:
      "Outreach is treated as a governed pipeline: audience, message, approvals, suppression, readiness, execution, and proof—not a send button with hope.",
    whyItMatters:
      "Distribution mistakes are political mistakes. The OS posture is to make dangerous sends hard to do accidentally while keeping speed for trusted operators.",
    operatorPromise:
      "Email command center plus message studio patterns, with integration-ready language for provider sync where appropriate.",
    featureSlugs: [
      "email-command-center",
      "audience-studio",
      "message-studio",
      "send-execution",
      "suppression-management",
      "sendgrid-sync-readiness",
      "content-distribution-planning",
      "press-and-surrogate-messaging",
    ],
    primaryCTA: { label: "Explore outreach lane", href: routes.outreach },
    visualTheme: "outreach",
    sections: [
      {
        id: "governance",
        title: "Message governance",
        body: "Designed to route creative work through review surfaces, approvals, and readiness checks before execution.",
      },
      {
        id: "suppression",
        title: "Suppression and consent awareness",
        body: "Suppression management is treated as a first-class operational constraint—not an afterthought export step.",
      },
      {
        id: "distribution",
        title: "Distribution planning",
        body: "Content distribution planning connects narratives, audiences, and timing without pretending the campaign does not still make strategic calls.",
      },
    ],
  },
  {
    slug: "calendar-events",
    eyebrow: "Calendar",
    title: "Calendar, event requests, approvals, scheduling",
    shortTitle: "Calendar",
    summary:
      "Calendar HQ routes requests through review, approval, visibility, and comms queues—public and private moments without losing the operator thread.",
    whyItMatters:
      "Events create cascading work: comms, fundraising, field, surrogates, security, and county context. A calendar tool without workflow becomes chaos.",
    operatorPromise:
      "Event intake, approval workflow, comms queueing, and calendar readiness patterns described as operator-guided.",
    featureSlugs: [
      "calendar-hq",
      "event-request-intake",
      "event-approval-workflow",
      "public-private-calendar-views",
      "google-calendar-readiness",
      "tour-planning",
      "event-comms-queue",
    ],
    primaryCTA: { label: "Explore calendar lane", href: routes.calendar },
    visualTheme: "calendar",
    sections: [
      {
        id: "requests",
        title: "Requests become work items",
        body: "Designed so an event request is not a note in a inbox thread—it becomes a tracked object with owners, approvals, and downstream tasks.",
      },
      {
        id: "visibility",
        title: "Public and private visibility",
        body: "Public-private calendar views are framed as controlled visibility: what voters see vs what operators must coordinate.",
      },
      {
        id: "integration",
        title: "Integration-ready calendar posture",
        body: "Google Calendar readiness is described as configuration and operator discipline—not a claim of universal automatic sync.",
      },
    ],
  },
  {
    slug: "volunteer-field-gotv",
    eyebrow: "Field",
    title: "Volunteers, relational organizing, field, GOTV",
    shortTitle: "Field + GOTV",
    summary:
      "Field wins when volunteer intake, relational organizing, precinct priorities, shifts, and supporter follow-up connect to the same operating picture.",
    whyItMatters:
      "Field programs fail quietly: warm leads cool, shifts go unfilled, and GOTV becomes a sprint instead of a prepared machine.",
    operatorPromise:
      "Volunteer command center patterns with GOTV readiness gates and precinct priority workflows described as configurable.",
    featureSlugs: [
      "volunteer-command-center",
      "relational-organizing",
      "volunteer-intake",
      "shift-and-event-staffing",
      "gotv-readiness",
      "precinct-priority-workflows",
      "door-knock-phone-bank-planning",
      "supporter-follow-up",
    ],
    primaryCTA: { label: "Explore field lane", href: routes.field },
    visualTheme: "field",
    sections: [
      {
        id: "relational",
        title: "Relational organizing as structure",
        body: "Designed to support relational graphs and follow-up accountability without turning humans into metrics.",
      },
      {
        id: "gotv",
        title: "GOTV readiness",
        body: "GOTV is framed as readiness checks and exception handling—not a last-minute app download push.",
      },
      {
        id: "county",
        title: "County connection",
        body: "Field needs county context: where pressure is building, where events matter, and where volunteer capacity is misaligned.",
      },
    ],
  },
  {
    slug: "county-intelligence",
    eyebrow: "Counties",
    title: "County-by-county operations and local race intelligence",
    shortTitle: "County intelligence",
    summary:
      "A statewide race is many local races. This lane is designed to give every county a place in the operating picture: leaders, issues, pathways, and briefings.",
    whyItMatters:
      "HQ blind spots become election night surprises. County intelligence is how statewide campaigns keep local reality inside strategy.",
    operatorPromise:
      "County workbench posture, regional strategy, and local leader intelligence framed as operator-guided research and execution support.",
    featureSlugs: [
      "county-workbench",
      "all-75-county-map",
      "county-briefings",
      "local-leader-intelligence",
      "county-issue-landscape",
      "pathway-to-victory",
      "regional-strategy",
    ],
    primaryCTA: { label: "Explore counties lane", href: routes.counties },
    visualTheme: "county-map",
    sections: [
      {
        id: "map",
        title: "All-county posture",
        body: "The map is a coordination metaphor: where attention is needed, where briefings are stale, and where field and events must align.",
      },
      {
        id: "briefings",
        title: "Briefings that operators can use",
        body: "County briefings are structured to become comms, field, and surrogate context—not PDFs that die in a folder.",
      },
      {
        id: "strategy",
        title: "Pathway and regional strategy",
        body: "Designed to connect county issue landscapes to regional strategy decisions without overclaiming predictive accuracy.",
      },
    ],
  },
  {
    slug: "data-voter-contact",
    eyebrow: "Data",
    title: "Voter/contact graph, profiles, imports, source control",
    shortTitle: "Data + contact",
    summary:
      "Contact intelligence is governed: profiles, approved facts, source-aware records, segmentation rules, and consent/suppression awareness as operational constraints.",
    whyItMatters:
      "Bad data creates bad outreach, bad targeting, and bad legal risk. The OS posture is source awareness and operator-safe usage—not infinite flexibility.",
    operatorPromise:
      "Designed for import readiness, voter file alignment language as configuration-dependent, and segmentation with explicit governance.",
    featureSlugs: [
      "contact-profile-graph",
      "approved-facts",
      "source-aware-records",
      "import-readiness",
      "suppression-and-consent-awareness",
      "voter-file-alignment",
      "segmentation-and-audience-rules",
    ],
    primaryCTA: { label: "Explore intelligence + data context", href: routes.intelligence },
    visualTheme: "intelligence",
    sections: [
      {
        id: "facts",
        title: "Approved facts",
        body: "Approved facts are a credibility mechanism: what the campaign is willing to treat as true for messaging and targeting decisions.",
      },
      {
        id: "sources",
        title: "Source-aware records",
        body: "Source-aware records are designed to reduce silent corruption: operators know where a value came from and when it last changed.",
      },
      {
        id: "segmentation",
        title: "Segmentation with guardrails",
        body: "Segmentation and audience rules are framed as governed constructs—not arbitrary SQL for untrained users.",
      },
    ],
  },
  {
    slug: "content-website",
    eyebrow: "Content",
    title: "Website, issues, events, stories, publishing",
    shortTitle: "Content + web",
    summary:
      "Publishing is a campaign system: issues, events, counties, landing pages, rapid response, and an approval lane that matches outreach reality.",
    whyItMatters:
      "Websites drift, approvals get skipped, and rapid response becomes a Slack fire drill. The OS treats publishing as operational work.",
    operatorPromise:
      "Campaign website system patterns with publishing approval lanes and structured page types for issues, events, counties, and landings.",
    featureSlugs: [
      "campaign-website-system",
      "issue-pages",
      "landing-pages",
      "event-pages",
      "county-pages",
      "rapid-response-content",
      "publishing-approval-lane",
    ],
    primaryCTA: { label: "Explore platform publishing posture", href: routes.platform },
    visualTheme: "outreach",
    sections: [
      {
        id: "types",
        title: "Structured page types",
        body: "Issue, event, county, and landing templates are framed as repeatable publishing objects—not one-off CMS chaos.",
      },
      {
        id: "rapid",
        title: "Rapid response discipline",
        body: "Rapid response content still flows through governance: speed without abandoning approvals where required.",
      },
      {
        id: "bridge",
        title: "Bridge to outreach",
        body: "Publishing connects to distribution planning so narratives do not fracture between site and email comms.",
      },
    ],
  },
  {
    slug: "intelligence-briefings",
    eyebrow: "Intelligence",
    title: "Opposition, research, briefings, strategy packets",
    shortTitle: "Briefings",
    summary:
      "Intelligence becomes operational: opposition context, research briefings, message risk review, debate prep packets, and county-specific briefs tied to decisions.",
    whyItMatters:
      "Research that does not connect to approvals, messaging, surrogates, and county plans is expensive noise.",
    operatorPromise:
      "Designed to package intelligence into campaign-ready artifacts with explicit handoff points to comms and leadership.",
    featureSlugs: [
      "opposition-intelligence",
      "research-briefings",
      "message-risk-review",
      "debate-prep-packets",
      "county-specific-briefs",
    ],
    primaryCTA: { label: "Explore intelligence lane", href: routes.intelligence },
    visualTheme: "intelligence",
    sections: [
      {
        id: "ops",
        title: "Operational intelligence",
        body: "Briefings include routing: what changed, what it affects, and what decisions it should inform this week.",
      },
      {
        id: "risk",
        title: "Message risk review",
        body: "Message risk review is framed as governance support: identify fragility before it becomes a press problem.",
      },
      {
        id: "county",
        title: "County-specific briefs",
        body: "County briefs connect local reality to surrogates, field plans, and paid/outreach posture without overclaiming.",
      },
    ],
  },
  {
    slug: "governance-security",
    eyebrow: "Governance",
    title: "Approvals, audit trails, suppression, role-safe workflows",
    shortTitle: "Governance",
    summary:
      "Governance is how speed and control coexist: approval gates, audit trails, no-accidental-send design, and role-safe operator workflows.",
    whyItMatters:
      "The most expensive errors are human: wrong list, wrong approval, wrong surrogate line. Governance is a product feature, not a lecture.",
    operatorPromise:
      "Explicit approval gates, traceability, and privacy posture described responsibly and without marketing fantasy.",
    featureSlugs: [
      "approval-gates",
      "audit-trails",
      "role-safe-operator-workflows",
      "no-accidental-send-design",
      "data-privacy-posture",
      "compliance-conscious-ops",
    ],
    primaryCTA: { label: "Explore governance lane", href: routes.governance },
    visualTheme: "governance",
    sections: [
      {
        id: "gates",
        title: "Approval gates",
        body: "Gates are designed to be configurable: some campaigns need strict two-step approvals; others need lightweight review.",
      },
      {
        id: "audit",
        title: "Audit trails",
        body: "Audit trails support accountability: who approved, what changed, and what was executed—without promising perfection.",
      },
      {
        id: "roles",
        title: "Role-safe workflows",
        body: "Role-safe workflows reduce the chance that the wrong person can take the dangerous action—even under pressure.",
      },
    ],
  },
  {
    slug: "implementation-ops",
    eyebrow: "Implementation",
    title: "Adoption, migration, runbooks, operator workflows",
    shortTitle: "Implementation",
    summary:
      "Adoption is operational: onboarding, migration maps, runbooks, training mode, readiness checklists, and launch plans that match how campaigns actually start.",
    whyItMatters:
      "Software that cannot be adopted mid-race is software that never becomes real. Implementation is part of the product story.",
    operatorPromise:
      "Designed to support structured onboarding and operator training without pretending migrations are effortless.",
    featureSlugs: [
      "campaign-onboarding",
      "migration-map",
      "runbooks",
      "training-mode",
      "readiness-checklists",
      "launch-plan",
    ],
    primaryCTA: { label: "Explore implementation lane", href: routes.implementation },
    visualTheme: "cockpit",
    sections: [
      {
        id: "map",
        title: "Map the campaign first",
        body: "Implementation begins with mapping lanes, owners, and data dependencies—so adoption does not become a blind import.",
      },
      {
        id: "runbooks",
        title: "Runbooks for real weeks",
        body: "Runbooks are framed as operator rituals: weekly rhythms, exception handling, and escalation paths.",
      },
      {
        id: "training",
        title: "Training mode",
        body: "Training mode is described as a safe posture for new operators to learn gates, approvals, and workflows without execution risk.",
      },
    ],
  },
];
