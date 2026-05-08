export type LanePass2Copy = {
  whyBreaks: string;
  whatOperatorGets: string;
  coreWorkflows: { id: string; title: string; body: string }[];
  connectsToRace: string;
  operatorExample: string;
  visualTitle: string;
  visualCaption: string;
};

export const LANE_PAGE_COPY: Record<string, LanePass2Copy> = {
  "cockpit-command": {
    whyBreaks:
      "Normal campaigns run mornings on memory: Slack threads, text chains, and a finance director quietly panicking in the corner. Nobody can answer—on one screen—what is approved, what is blocked, and what must happen before the day gets away.",
    whatOperatorGets:
      "A ranked command stack: readiness, exceptions, deadlines, and next actions tied to real objects across outreach, calendar, counties, fundraising, field, and compliance preparation—not a vanity dashboard.",
    coreWorkflows: [
      {
        id: "brief",
        title: "Morning command brief",
        body: "A repeatable briefing anchored to tracked work: overnight deltas, new blockers, and the top five moves—each with an owner.",
      },
      {
        id: "next",
        title: "Operator next actions",
        body: "A queue ranked by consequence: money, doors, deadlines, message risk—designed to cut alert fatigue, not add noise.",
      },
      {
        id: "exec",
        title: "Executive readiness",
        body: "A leadership-readable posture view: what can ship, what cannot, and what needs a principal decision—without forcing principals into every tool.",
      },
    ],
    connectsToRace:
      "The Cockpit is designed to pull posture from every lane without pretending integrations are magic: calendar pressure becomes visible next to field gaps; fundraising aging sits next to compliance windows; county drift surfaces next to comms readiness.",
    operatorExample:
      "7:10am: the comms director clears a suppression mismatch, the field director accepts a staffing rescue plan for two counties, finance confirms a documentation gap is owned, and the campaign manager ends the brief with three agreed priorities—not twelve anxious anecdotes.",
    visualTitle: "Command stack — readiness, blockers, next moves",
    visualCaption: "Original illustration: stacked readiness cards, exception queue, and county pressure tiles (Pass 2).",
  },
  "fundraising-good-change": {
    whyBreaks:
      "Fundraising breaks when it lives in side spreadsheets: pledges age silently, call-time notes never become finance objects, and leadership hears a number that is not operational reality.",
    whatOperatorGets:
      "Good Change stays inside the fundraising lane: donor pipeline stages, call time outcomes, event fundraising objects, pledge follow-ups, and finance review queues—governed motion, not heroic hustle.",
    coreWorkflows: [
      { id: "pipeline", title: "Pipeline + owners", body: "Every warm lead has a stage, an owner, and a next touch—so momentum does not die in inboxes." },
      { id: "call", title: "Call time command", body: "Outcomes become structured objects routed to finance and pledge workflows—not sticky notes." },
      { id: "finance", title: "Finance alignment", body: "Designed to connect contributions and pledges to reporting preparation posture (counsel-owned filing reality)." },
    ],
    connectsToRace:
      "Fundraising connects forward to compliance preparation visibility and backward to leadership readiness: money is not a separate universe from deadlines, vendors, and message moments that create donor urgency.",
    operatorExample:
      "Thursday night event: host commitments captured, pledges created with aging, finance review queued for documentation gaps, and the principal briefing card updated with the same numbers finance trusts.",
    visualTitle: "Fundraising lane — donor motion as objects",
    visualCaption: "Illustrative flow: donor → call time → pledge → finance review (original CSS/SVG).",
  },
  "budget-compliance": {
    whyBreaks:
      "Budget and compliance preparation break when they are reconstructed at the deadline: vendors, expenditures, and contribution records drift away from the operating rhythm until the treasurer is doing archaeology under pressure.",
    whatOperatorGets:
      "A budget command center with vendor controls, expenditure tracking, deadline proximity signals, and audit-aware record habits—operator-guided preparation and export/handoff posture, not filing fantasy.",
    coreWorkflows: [
      { id: "vendor", title: "Vendor + spend posture", body: "Spend becomes visible early: approvals, categories, and documentation gaps as tracked objects." },
      { id: "deadline", title: "Deadline awareness", body: "Filing-adjacent windows become operational signals with owners—still counsel/treasurer-owned for official actions." },
      { id: "records", title: "Audit-ready discipline", body: "Designed to support consistent entries, approvals, and traceability appropriate to campaign counsel guidance." },
    ],
    connectsToRace:
      "Finance posture is connected to fundraising motion and executive cockpit cards: the campaign should not discover cash reality and compliance risk in two different meetings that never meet.",
    operatorExample:
      "Two-week filing-adjacent window: completeness checks flag three documentation gaps, vendor invoices are tied to approvers, and leadership sees a single readiness card with explicit owners—still not a substitute for counsel review.",
    visualTitle: "Ledger posture — budget, spend, deadlines",
    visualCaption: "Original ledger mock: contributions, expenditures, vendors, deadline strip (illustrative).",
  },
  "outreach-distribution": {
    whyBreaks:
      "Outreach breaks when distribution is treated as a button: audiences become tribal knowledge, approvals become rubber stamps under pressure, and suppressions fail at the worst possible moment.",
    whatOperatorGets:
      "Email command center + audience studio + message studio patterns: governed progression from audience definition through approvals, preflight, final operator confirmation, and proof—designed so dangerous sends are hard to do accidentally.",
    coreWorkflows: [
      { id: "aud", title: "Audience discipline", body: "Explainable segments with review surfaces—so targeting is defensible, not mysterious." },
      { id: "msg", title: "Message governance", body: "Creative iteration tied to approvals and risk notes—so speed does not become recklessness." },
      { id: "execsend", title: "Send execution", body: "Final confirmation patterns and suppression enforcement at execution time—not 'hope we remembered'." },
    ],
    connectsToRace:
      "Distribution connects to calendar moments, county pushes, fundraising urgency, and rapid response: the same operating picture should drive timing and approvals—not parallel realities.",
    operatorExample:
      "Volunteer activation: audience frozen after review, surrogate lines cleared through risk review, suppression delta checked since approval, two-step confirmation satisfied—then send executes with audit references.",
    visualTitle: "Distribution rail — audience → approval → send",
    visualCaption: "Original workflow rail with preflight gates (CSS/SVG).",
  },
  "calendar-events": {
    whyBreaks:
      "Calendars become pretty grids while the real work lives in email: event requests disappear, tour holds are ignored, collisions surface after invites go out, approvals are informal, and comms queues are invented at the last minute.",
    whatOperatorGets:
      "Calendar HQ: governed intake objects, week density as an operator surface, tour hold collision visibility, approval workflows, public/private visibility discipline, and downstream comms/field artifacts tied to approved calendar truth.",
    coreWorkflows: [
      { id: "intake", title: "Request → object", body: "Requests become tracked items with owners, dependencies, and risk flags—not vague forwards." },
      { id: "approve", title: "Approvals with teeth", body: "Configured chains for high-visibility moments; fast templates for low-risk repeats." },
      { id: "comms", title: "Comms queue generation", body: "Approved events spawn the downstream work the campaign always forgets until Friday afternoon." },
      {
        id: "density",
        title: "Week density + tour holds",
        body: "Principal travel, surrogate tours, county pushes, and volunteer surges share one canvas so overlaps become visible early—not as inbox panic the week of.",
      },
    ],
    connectsToRace:
      "Events tie to field staffing, surrogate tours, fundraising moments, press posture, and outreach timing—Calendar HQ is designed to be the switchboard, not a silo.",
    operatorExample:
      "New rally request: logistics checklist assigned, surrogate packet routed to intelligence review, press posture queued, volunteer staffing tied to the same calendar object; Wednesday collision against a tour hold surfaces in the week grid before publish transitions; comms stub v2 regenerates after resolution.",
    visualTitle: "Calendar HQ — rail, dependencies, and week surface",
    visualCaption: "Request rail plus event dependency mock and week density — illustrations only, not live calendar data.",
  },
  "volunteer-field-gotv": {
    whyBreaks:
      "Field breaks when volunteer energy does not convert to shifts, shifts do not convert to coverage, and GOTV becomes a sprint because readiness was never tracked as state.",
    whatOperatorGets:
      "Volunteer command center patterns: intake, relational organizing support, staffing, precinct priorities, GOTV readiness gates, and supporter follow-up tied to county context.",
    coreWorkflows: [
      { id: "intake", title: "Intake → routing", body: "Skills, geography, availability captured as structured objects—not a pile of sign-up forms." },
      { id: "staff", title: "Staffing + gaps", body: "Shift gaps become visible exceptions early enough to fix—especially across counties." },
      { id: "gotv", title: "GOTV readiness", body: "Progressive readiness checks rather than a last-minute panic app download push." },
    ],
    connectsToRace:
      "Field connects to calendar density, county priorities, outreach waves, and cockpit exceptions: the same race should not be planned in three different rooms.",
    operatorExample:
      "Saturday canvass: two precincts under-covered by 4pm Friday; rescue tasks assigned; captain follow-ups queued; GOTV readiness card turns yellow with explicit owners.",
    visualTitle: "Field operations — capacity and priorities",
    visualCaption: "Original field stack: volunteers, shifts, precinct tiles (illustrative).",
  },
  "county-intelligence": {
    whyBreaks:
      "Statewide campaigns treat counties like decoration until election week. Local reality is where races are won—and where HQ goes blind fastest.",
    whatOperatorGets:
      "County workbench posture: briefings, leader intelligence, issue landscapes, pathways, and regional strategy objects designed to connect HQ planning to local execution.",
    coreWorkflows: [
      { id: "brief", title: "County briefings", body: "Structured artifacts meant to drive decisions: comms, surrogates, field, and tour planning." },
      { id: "map", title: "Statewide attention map", body: "A coordination surface for where intelligence is stale, field is thin, or events cluster—illustrative map, operational drilldown." },
      { id: "region", title: "Regional strategy", body: "Rollups that connect resource allocation to county reality without pretending certainty." },
    ],
    connectsToRace:
      "County intelligence feeds cockpit cards, field priorities, tour planning, and message risk: local truth should be part of the same operating picture as HQ comms.",
    operatorExample:
      "Regional director updates four counties after a local vote: briefing refreshed, county page publish queued through approvals, field priorities adjusted with explicit rationale captured.",
    visualTitle: "County intelligence — HQ + local truth",
    visualCaption: "Illustrative county tile map (not a geographic survey product claim).",
  },
  "data-voter-contact": {
    whyBreaks:
      "Data breaks when profiles are contradictory, sources are mysterious, and segmentation becomes politics instead of governance—then targeting mistakes become public mistakes.",
    whatOperatorGets:
      "Contact graph posture with source-aware records, import readiness checks, approved facts alignment, segmentation rules, and suppression/consent awareness as cross-cutting constraints.",
    coreWorkflows: [
      { id: "import", title: "Import readiness", body: "Staging, validation, dedupe strategy, and controlled activation—imports are not one-click chaos buttons." },
      { id: "facts", title: "Approved facts", body: "A governed layer for what the campaign is willing to treat as true in messaging and briefing artifacts." },
      { id: "seg", title: "Segmentation rules", body: "Explainable audiences with review surfaces tied to outreach execution risk tiers." },
    ],
    connectsToRace:
      "Data connects to outreach execution, county targeting, field programs, and governance: one graph posture reduces silent corruption across lanes.",
    operatorExample:
      "Major merge before a weekend push: conflicts flagged, consent/suppression posture reviewed, audience re-frozen with audit references before execution unlocks.",
    visualTitle: "Data graph — provenance and governance",
    visualCaption: "Original diagram: profiles, sources, rules, governance ring.",
  },
  "content-website": {
    whyBreaks:
      "Websites drift when publishing is disconnected from approvals, events, counties, and rapid response—public truth becomes whatever someone remembered to update.",
    whatOperatorGets:
      "Campaign website system patterns: structured page types, publishing approval lanes, and linkage to distribution planning—site as part of the OS, not a separate silo.",
    coreWorkflows: [
      { id: "types", title: "Structured page types", body: "Issues, events, counties, landings as repeatable publishing objects." },
      { id: "rr", title: "Rapid response discipline", body: "Speed with governance: approvals and risk notes attached where configured." },
      { id: "bridge", title: "Bridge to outreach", body: "Publishing changes connect to comms timing and audience plans—fewer contradictions across channels." },
    ],
    connectsToRace:
      "Publishing connects to calendar truth, county intelligence updates, outreach waves, and governance: the public face should follow the same approvals as the email program.",
    operatorExample:
      "Local issue shift: county page update drafted, risk-reviewed, approved, published—then distribution plan references the same approved object IDs.",
    visualTitle: "Publishing system — pages under governance",
    visualCaption: "Original mock: page types + approval lane + publish transition.",
  },
  "intelligence-briefings": {
    whyBreaks:
      "Intelligence fails when it becomes PDFs nobody uses: opposition notes live in one folder, message risk lives in another, and surrogates improvise because the operating system never made research actionable.",
    whatOperatorGets:
      "Operational intelligence: opposition tracking with sourcing discipline, research briefings tied to decisions, message risk review, debate prep packets, and county-specific briefs connected to comms and field.",
    coreWorkflows: [
      { id: "opp", title: "Opposition + sourcing", body: "Claims with sources, confidence, and review posture—discipline first." },
      { id: "risk", title: "Message risk review", body: "Fragile lines flagged before they reach surrogates or paid." },
      { id: "county", title: "County briefs", body: "Local nuance packaged for execution: comms, surrogates, field, tour stops." },
    ],
    connectsToRace:
      "Intelligence connects to message studio, approvals, county pages, and cockpit exceptions: strategy should change what operators do this week—not decorate a slide.",
    operatorExample:
      "Debate prep day: briefing updated, risk review flags a fragile attack line, surrogates receive an approved packet version with explicit 'do not depart' notes.",
    visualTitle: "Intelligence → decisions → execution",
    visualCaption: "Original workflow: research → risk review → approvals → outbound artifacts.",
  },
  "governance-security": {
    whyBreaks:
      "Governance fails when it is a lecture instead of a product: approvals are informal, audit trails are missing, and dangerous actions are easy under fatigue.",
    whatOperatorGets:
      "Approval gates, audit trails, role-safe workflows, no-accidental-send design patterns, privacy posture documentation, and compliance-conscious operations habits—speed with control, not control as punishment.",
    coreWorkflows: [
      { id: "gates", title: "Approval gates", body: "Explicit chains with traceability; fast paths for low-risk repeats where configured." },
      { id: "audit", title: "Audit trails", body: "Who approved, what changed, what executed—posture designed for accountability." },
      { id: "roles", title: "Role-safe workflows", body: "Least privilege and separation of duties patterns appropriate to campaign scale." },
    ],
    connectsToRace:
      "Governance is the spine: outreach, spend, publishes, exports, and sensitive data handling all meet the same discipline—so the campaign does not fracture into 'rules for thee' chaos.",
    operatorExample:
      "GOTV night: high-risk send tier requires two-step confirmation; suppression mismatch blocks execution until resolved; audit record captures the decision path.",
    visualTitle: "Governance spine — approvals + trails",
    visualCaption: "Original shield + gate rail illustration (CSS/SVG).",
  },
  "implementation-ops": {
    whyBreaks:
      "Software fails mid-race when adoption is treated as a single meeting: migrations stall, operators guess, and leadership loses confidence because the stack never became a rhythm.",
    whatOperatorGets:
      "Onboarding, migration maps, runbooks, training mode, readiness checklists, and launch plans—implementation as operational sequencing, not vibes.",
    coreWorkflows: [
      { id: "map", title: "Map the campaign", body: "Lanes, owners, dependencies, and risk points documented as a living adoption map." },
      { id: "train", title: "Train operators safely", body: "Training posture designed to practice gates without execution risk where enabled." },
      { id: "rhythm", title: "Launch cockpit rhythm", body: "Weekly rituals: brief, exception queue, approvals, expansion by lane and county." },
    ],
    connectsToRace:
      "Implementation connects governance defaults, data import posture, and cockpit cadence: adoption is how the OS becomes real while the race is still moving.",
    operatorExample:
      "Week three: migration cutover checklist green, operators run a rehearsal launch in training mode, principals agree on the first live cockpit cadence Monday.",
    visualTitle: "Adoption — map → train → rhythm",
    visualCaption: "Original phased rail: onboarding through launch cadence.",
  },
};
