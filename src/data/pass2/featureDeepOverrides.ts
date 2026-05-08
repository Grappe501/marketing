import type { Feature } from "@/lib/types";

type Override = Partial<
  Pick<
    Feature,
    | "heroStatement"
    | "whyCampaignsNeedIt"
    | "operatorWorkflow"
    | "leadershipValue"
    | "connectedSystems"
    | "exampleUseCase"
    | "riskReduced"
    | "whatItDoes"
    | "operatorValue"
    | "campaignValue"
  >
>;

export const FEATURE_DEEP_OVERRIDES: Partial<Record<string, Override>> = {
  "campaign-cockpit": {
    heroStatement:
      "The cockpit is where a statewide race stops pretending five inboxes are a strategy. It is the morning command surface: ranked readiness, ranked risk, and the next operator move.",
    whatItDoes: [
      "Left rail: route posture across Daily, Map, Readiness, Queues, and Lanes—so operators open the right surface without losing command context.",
      "Center readiness wall: cross-lane tiles (email, calendar, counties, field, fundraising, compliance) with green / yellow / red posture tied to real objects.",
      "Right column: ranked next actions with lane labels and severity—dependencies visible, owners assignable.",
      "Principal queue: only what needs authority (message risk, surrogate lines, major sends)—separate from operator trivia.",
      "Top bar: day context plus overnight deltas ingested from lanes (sends, holds, pledges, filings windows, field exceptions).",
      "Bottom lane strip: twelve-lane scan at a glance—same posture object the morning brief and ranked queue reference.",
    ],
    whyCampaignsNeedIt:
      "Leadership does not fail because it lacks heart. It fails because nobody can answer—on demand—what is blocked, what is approved, and what must happen before sundown.",
    campaignValue: [
      "One command floor reduces duplicate reality: finance, field, and comms argue about decisions—not about which spreadsheet is true.",
      "Calendar pressure, launch gates, and county posture stay visible in the same stack as fundraising aging and compliance windows.",
      "GOTV and rapid response weeks stay legible: exceptions surface before they become headlines.",
    ],
    operatorWorkflow: [
      "Pull overnight deltas into a single command stack: sends, calendar, counties, fundraising, compliance windows, field exceptions.",
      "Rank exceptions by deadline proximity, financial exposure, and message risk—then assign owners.",
      "Route anything high-consequence through governance visibility: approvals attached, suppressions checked, audit trail implied.",
      "End the brief with three numbers the room agrees on: ready, blocked, needs-principal.",
    ],
    leadershipValue: [
      "Principals stop micromanaging trivia because the cockpit makes the real exceptions visible.",
      "Campaigns stop running on heroic memory because readiness is an object, not a vibe.",
    ],
    connectedSystems: ["Governance + audit trails", "Calendar + events", "Outreach + distribution", "County intelligence", "Fundraising + Good Change", "Budget + compliance preparation"],
    exampleUseCase:
      "Monday 7:15am: finance sees a filing-adjacent window, field sees two counties understaffed for the weekend push, comms sees a volunteer activation ready but suppression needs a final check—one stack, one rhythm.",
    riskReduced: "Reduces leadership blind spots and operator thrash during the weeks where the race is won or lost in hours, not days.",
  },
  "morning-command-brief": {
    heroStatement: "A morning brief should be a weapon: what changed, what is lying, and what must move—tied to real objects, not status theater.",
    whyCampaignsNeedIt:
      "Most morning calls recycle anecdotes. A serious race needs a repeatable briefing format anchored to tracked work: exceptions, approvals, deadlines, and next actions.",
    operatorWorkflow: [
      "Assemble deltas since last brief: blocked sends, new calendar requests, county flags, pledge aging, compliance proximity.",
      "Force each item to have an owner and a next step; no anonymous 'we should' lines.",
      "Close with a ranked queue the campaign agrees is the real top five—not the loudest five.",
    ],
    leadershipValue: ["Turns mornings into a decision rhythm instead of a morale podcast.", "Makes it obvious what needs a principal call vs operator execution."],
    exampleUseCase: "Tuesday: three events in conflict windows, one surrogate line awaiting risk review, GOTV staffing gap in a target county—brief ends with owners, not anxiety.",
    riskReduced: "Reduces the risk that urgent work hides inside side channels until it becomes a crisis.",
  },
  "operator-next-actions": {
    heroStatement: "Operators do not need more notifications. They need the next best action in campaign priority order—with dependencies visible.",
    whyCampaignsNeedIt:
      "Alert fatigue is how approvals get skipped and lists go stale. Next actions must be ranked by consequence: money, doors, deadlines, message risk.",
    operatorWorkflow: [
      "Ingest tasks from lanes with explicit due times and governance requirements.",
      "Rank by impact × deadline × blocked dependencies.",
      "Push the top queue to mobile-friendly surfaces for operators in the field and in HQ.",
    ],
    leadershipValue: ["Keeps execution velocity without abandoning control.", "Surfaces when a bottleneck is a person, a policy, or a system config."],
    exampleUseCase: "Field director opens the queue: top item is approve precinct volunteer shift swaps; second is unblock a county briefing publish.",
    riskReduced: "Reduces dropped follow-ups and invisible ownership during high-throughput weeks.",
  },
  "launch-readiness-gates": {
    heroStatement: "Big moments go wrong when readiness is assumed. Launch gates make readiness explicit: lists, messages, suppressions, owners, proofs.",
    whyCampaignsNeedIt:
      "Launches are where campaigns discover their stack is fiction. Gates are designed to force the boring checks that prevent expensive mistakes.",
    operatorWorkflow: [
      "Define a launch object: audience, message versions, test window, approval chain, rollback posture.",
      "Run gate checklist with sign-offs captured in audit-friendly records.",
      "Block execution until required gates are satisfied—or explicitly overridden with traceability.",
    ],
    leadershipValue: ["Makes launch risk legible before the send button is hot.", "Prevents 'I thought someone checked that' from becoming a headline."],
    exampleUseCase: "Paid + email surge for a county weekend: gate verifies suppression, surrogate lines, and landing approvals before execution unlocks.",
    riskReduced: "Reduces catastrophic send/publish errors and last-minute scrambles that burn trust inside the campaign.",
  },
  "good-change-fundraising-lane": {
    heroStatement: "Good Change stays in the fundraising lane: donor motion as operational objects—stages, owners, follow-ups—connected to finance and compliance preparation.",
    whyCampaignsNeedIt:
      "Fundraising dies in the gap between intent and execution: warm leads cool, pledges age, finance learns late, and the principal hears a number that is not real.",
    operatorWorkflow: [
      "Capture donor interactions as pipeline objects with next touch owners.",
      "Route pledges and call-time outcomes into finance review queues with documentation posture.",
      "Connect contribution tracking language to preparation workflows—not filing fantasy.",
    ],
    leadershipValue: ["Fundraising becomes a legible lane with aging and exceptions—not a spreadsheet myth.", "Finance sees the same pipeline leadership thinks exists."],
    exampleUseCase: "Event host commits: pledge object created, follow-up scheduled, finance review queued, compliance prep fields flagged for treasurer visibility.",
    riskReduced: "Reduces pledge decay, duplicate asks, and end-of-quarter reconstruction theater.",
  },
  "donor-pipeline": {
    heroStatement: "A donor pipeline is not a list. It is accountability: who owns the next touch, what was promised, and what is blocked.",
    whyCampaignsNeedIt:
      "Without pipeline discipline, campaigns re-learn the same donor facts every cycle and burn relationships through inconsistency.",
    operatorWorkflow: [
      "Stage donors with explicit next actions and aging rules.",
      "Connect pipeline to call time blocks and event objects so motion is coordinated.",
      "Escalate stalled stages to finance/principals with context, not panic.",
    ],
    leadershipValue: ["Makes fundraising throughput measurable without turning humans into metrics.", "Surfaces where the campaign is losing money quietly."],
    exampleUseCase: "Major donor warm for 10 days—owner assigned, call time slot reserved, briefing attached, follow-up auto-queued post-call.",
    riskReduced: "Reduces revenue leakage from inconsistent follow-up and unclear ownership.",
  },
  "call-time-command": {
    heroStatement: "Call time is an operation: lists, outcomes, promises, and finance handoff—designed so notes become structured next steps.",
    whyCampaignsNeedIt:
      "Call time without structured outcomes is expensive theater. The campaign needs receipts: pledges, declines, follow-ups, and documentation posture.",
    operatorWorkflow: [
      "Prep packets with donor context and approved facts—governed, not improvised.",
      "Log outcomes in-session with quick capture patterns for operators.",
      "Push outcomes to pipeline and finance queues automatically where configured.",
    ],
    leadershipValue: ["Turns call time into a production system instead of a morale event.", "Improves treasurer visibility before deadlines."],
    exampleUseCase: "Two-hour block: 18 conversations, 6 pledges, 3 follow-ups assigned, 1 finance review triggered for documentation gaps.",
    riskReduced: "Reduces lost pledges and inconsistent donor experience across organizers.",
  },
  "budget-command-center": {
    heroStatement: "Budget command is leadership hygiene: burn, categories, vendor posture, and scenario thinking—connected to real spend objects.",
    whyCampaignsNeedIt:
      "Budgets drift because spend happens in tools finance does not see until it is too late to re-sequence the race plan.",
    operatorWorkflow: [
      "Tie expenditures to approvals and vendors with owners.",
      "Roll up category burn against plan with exception flags.",
      "Surface deadline proximity windows adjacent to cash-on-hand reality (as modeled by the campaign).",
    ],
    leadershipValue: ["Principals can see financial risk early enough to make tradeoffs.", "Reduces 'surprise invoice' weeks."],
    exampleUseCase: "Media week: vendor invoices spike; cockpit shows category overrun risk tied to specific contracts and approvers.",
    riskReduced: "Reduces uncontrolled spend and late-stage budget panic that forces bad strategic tradeoffs.",
  },
  "compliance-preparation": {
    heroStatement:
      "Compliance preparation belongs in the operating rhythm: structured visibility and operator-guided handoff support—not a substitute for counsel or official filing.",
    whyCampaignsNeedIt:
      "Campaigns reconstruct compliance at the deadline because operations never kept records aligned with reporting needs.",
    operatorWorkflow: [
      "Track contribution and expenditure objects with documentation posture and review queues.",
      "Maintain filing-adjacent deadline awareness as operational signals, not promises.",
      "Package export/handoff artifacts for treasurer and counsel review where configured.",
    ],
    leadershipValue: ["Reduces 'deadline week archaeology' that burns staff and invites errors.", "Keeps compliance posture visible alongside fundraising and spend."],
    connectedSystems: ["Budget + compliance preparation", "Fundraising + Good Change", "Governance + audit trails", "Campaign Cockpit"],
    exampleUseCase:
      "Quarter close: finance runs completeness checks, vendor documentation gaps are queued, treasurer receives an export-ready packet for review—still counsel-owned for filing decisions.",
    riskReduced: "Reduces last-minute reconstruction, inconsistent categorization, and missing documentation trails.",
    whatItDoes: [
      "Supports operator-guided preparation workflows for reporting-relevant records (not automated legal filing).",
      "Designed to connect deadlines, owners, and review queues into the same operating picture as fundraising and spend.",
      "Built to emphasize export/handoff posture: what is ready for treasurer and counsel, and what is still blocked.",
    ],
  },
  "contribution-expenditure-reporting-support": {
    heroStatement: "Reporting support means structured completeness: categories, documentation, and export packages—language stays preparation-first.",
    whyCampaignsNeedIt:
      "Reporting pain is usually record pain. If the operating system never disciplined records during the race, reporting becomes archaeology.",
    operatorWorkflow: [
      "Run completeness checks against configured reporting categories.",
      "Flag missing documentation and ownerless entries before crunch windows.",
      "Generate export-ready packages for review—not automatic submission claims.",
    ],
    leadershipValue: ["Makes reporting readiness a weekly posture, not a quarterly panic.", "Aligns finance and operations on the same dataset."],
    exampleUseCase: "Pre-reporting week: campaign exports a review packet, counsel marks exceptions, treasurer resolves documentation gaps in tracked queues.",
    riskReduced: "Reduces incomplete filings caused by operational drift—not a guarantee of outcomes.",
  },
  "email-command-center": {
    heroStatement: "Email is a governed system: audience, message, approvals, suppression, readiness, execution, and proof—not a send button with hope.",
    whyCampaignsNeedIt:
      "Distribution errors are political errors. The command center is designed to keep high-consequence work visible and deliberate.",
    operatorWorkflow: [
      "Define audience with explainable rules and review surfaces.",
      "Develop messages with versioning and approval attachment.",
      "Run preflight: suppression, test window, sync readiness checks where applicable.",
      "Execute with final operator confirmation patterns designed to reduce accidental sends.",
    ],
    leadershipValue: ["Comms directors get speed without abandoning discipline.", "Principals sleep better when approvals are real objects."],
    exampleUseCase: "Volunteer activation: audience locked, surrogate line risk-reviewed, suppression validated, final confirmation by two-step operator policy.",
    riskReduced: "Reduces wrong-segment sends, approval drift, and last-minute list chaos.",
  },
  "audience-studio": {
    heroStatement: "Audiences should be explainable: what includes, what excludes, and why—so targeting is defensible and operators are not guessing.",
    whyCampaignsNeedIt:
      "Opaque audiences create political and operational risk: the wrong people get the wrong message, and nobody can reconstruct why.",
    operatorWorkflow: [
      "Author rules with documentation and test windows.",
      "Review audiences through governance where configured.",
      "Bind audiences to sends with traceability and change history.",
    ],
    leadershipValue: ["Reduces targeting mistakes that become public problems.", "Improves coordination between data, comms, and field."],
    exampleUseCase: "County weekend push: audience built from county + volunteer signals, reviewed, frozen, then attached to a launch object.",
    riskReduced: "Reduces segment mistakes and tribal-knowledge audiences.",
  },
  "message-studio": {
    heroStatement: "Message development is operational: drafts, review notes, approvals, and risk flags—connected to distribution reality.",
    whyCampaignsNeedIt:
      "Creative iteration outside governance becomes rubber-stamp approvals under pressure—then mistakes ship fast.",
    operatorWorkflow: [
      "Version messages with reviewer threads and explicit approval states.",
      "Attach risk notes from intelligence review where configured.",
      "Route approved messages into launch objects with suppression and audience context.",
    ],
    leadershipValue: ["Improves message discipline without pretending creativity can be bureaucratized to death.", "Makes 'what is approved' unambiguous at execution time."],
    exampleUseCase: "Rapid response: new draft in minutes, risk review queued, approval gate satisfied, publish + distribution plan updated together.",
    riskReduced: "Reduces contradictory messaging and fragile claims slipping into outbound comms.",
  },
  "send-execution": {
    heroStatement: "Execution is the moment truth matters. Send execution is designed to be deliberate: confirmations, previews, and final checks.",
    whyCampaignsNeedIt:
      "The last mile is where campaigns lose control—because speed overrides discipline unless the system makes the dangerous path hard.",
    operatorWorkflow: [
      "Lock launch object: audience freeze, message version, approval IDs, suppression snapshot reference.",
      "Run final confirmation UX patterns appropriate to risk tier.",
      "Emit execution record for audit posture and post-send review tasks.",
    ],
    leadershipValue: ["Protects the campaign from irreversible mistakes during fatigue-heavy weeks.", "Preserves trust between comms and leadership."],
    exampleUseCase: "48-hour GOTV email series: each send requires explicit confirmation; suppression mismatches block automatically until resolved.",
    riskReduced: "Reduces accidental sends and 'wrong list' incidents that become headlines.",
  },
  "suppression-management": {
    heroStatement: "Suppressions are not an email feature. They are a campaign constraint that must be centralized, auditable, and enforced at execution time.",
    whyCampaignsNeedIt:
      "Suppressions fail when they live in one tool but not another—or when enforcement happens too late to recover gracefully.",
    operatorWorkflow: [
      "Maintain suppression sources with provenance and update cadence.",
      "Cross-check audiences at preflight with explicit mismatch reporting.",
      "Record suppression decisions as part of execution audit posture.",
    ],
    leadershipValue: ["Reduces reputational and compliance-adjacent risk from outreach mistakes.", "Aligns data and comms on the same constraints."],
    exampleUseCase: "Merged lists from multiple imports: suppression conflicts flagged, operator resolves with documented decision, audience re-frozen.",
    riskReduced: "Reduces accidental contact of suppressed segments and inconsistent consent posture.",
  },
  "calendar-hq": {
    heroStatement: "Calendar HQ treats time like operations: requests, approvals, visibility layers, and downstream comms—so events do not explode into chaos.",
    whyCampaignsNeedIt:
      "Events create cascading work. A calendar grid without workflow is just a prettier inbox.",
    operatorWorkflow: [
      "Convert requests into tracked objects with owners and dependencies.",
      "Route approvals for logistics, surrogates, security posture, and comms needs.",
      "Generate comms queues from approved calendar truth.",
    ],
    leadershipValue: ["Reduces schedule collisions and last-minute scrambles.", "Makes public vs private visibility deliberate, not accidental."],
    exampleUseCase: "Surrogate tour: each stop generates staffing, local briefing, and press posture tasks tied to the same calendar object.",
    riskReduced: "Reduces dropped balls between scheduling, comms, and field during high-density weeks.",
  },
  "event-request-intake": {
    heroStatement: "Requests should become objects immediately—otherwise accountability dissolves into threads.",
    whyCampaignsNeedIt:
      "Event intake is where campaigns lose weeks: vague asks, missing owners, and unclear approvals stack up until someone yells loud enough.",
    operatorWorkflow: [
      "Structured intake: who, what, where, risk, surrogates, fundraising tie-ins.",
      "Auto-route to approval chains based on request type.",
      "Spawn downstream tasks: comms, security checklist, finance implications.",
    ],
    leadershipValue: ["Makes demand visible early enough to say no intelligently.", "Prevents 'surprise event' culture."],
    exampleUseCase: "County chair requests a weekend rally: intake captures capacity, vendor needs, and surrogate constraints before it hits the public calendar.",
    riskReduced: "Reduces mis-routed requests and invisible dependency stacks.",
  },
  "event-approval-workflow": {
    heroStatement: "Approvals are not bureaucracy when the alternative is a headline. Event approvals are designed to be fast for trusted paths and strict for risky ones.",
    whyCampaignsNeedIt:
      "Informal approvals get skipped under pressure—then the campaign discovers the hole in public.",
    operatorWorkflow: [
      "Define approval templates by event class: small vs high-visibility vs high-security.",
      "Attach evidence: run of show, messaging lines, surrogate packets where needed.",
      "Block publish transitions until approvals are recorded with traceability.",
    ],
    leadershipValue: ["Protects principals from preventable mistakes.", "Speeds up the boring repeats with templates—without skipping the real risks."],
    exampleUseCase: "Major rally: multi-step approval chain completed with audit trail; calendar publish becomes a controlled transition.",
    riskReduced: "Reduces approval drift and undocumented 'we thought it was fine' decisions.",
  },
  "volunteer-command-center": {
    heroStatement: "Volunteers are an operation: intake, shifts, follow-ups, and exceptions—connected to counties and calendar reality.",
    whyCampaignsNeedIt:
      "Volunteer programs fail quietly: warm leads cool, shifts go unfilled, and GOTV becomes a sprint instead of a prepared machine.",
    operatorWorkflow: [
      "Centralize volunteer objects with skills, geography, availability, and consent posture where applicable.",
      "Tie staffing to events and shifts with gap detection.",
      "Route exceptions to field leadership with county context.",
    ],
    leadershipValue: ["Makes capacity visible before the weekend you cannot redo.", "Improves conversion from interest to shifts to doors."],
    exampleUseCase: "Saturday canvass: staffing gaps flagged Friday morning with targeted volunteer rescue tasks and county priority context.",
    riskReduced: "Reduces volunteer drop-off and unstaffed priority geographies.",
  },
  "relational-organizing": {
    heroStatement: "Relational organizing needs structure without dehumanizing people: accountability graphs, follow-ups, and ethical boundaries.",
    whyCampaignsNeedIt:
      "Relational programs become vibes unless conversations become tracked commitments with owners.",
    operatorWorkflow: [
      "Record relational tasks with consent-aware posture where configured.",
      "Connect relational follow-ups to field priorities and county plans.",
      "Review relational throughput like any other lane: aging, owners, exceptions.",
    ],
    leadershipValue: ["Improves follow-through without turning supporters into surveillance targets.", "Makes volunteer leaders legible as operators."],
    exampleUseCase: "Neighborhood captain program: each captain has a follow-up queue tied to precinct priorities and event attendance.",
    riskReduced: "Reduces dropped conversations and inconsistent volunteer experience.",
  },
  "gotv-readiness": {
    heroStatement: "GOTV is not a weekend mood. It is progressive readiness: coverage, lists posture, capacity, and exceptions—surfaced early.",
    whyCampaignsNeedIt:
      "GOTV surprises are almost always visible two weeks earlier if the campaign had a readiness system instead of hope.",
    operatorWorkflow: [
      "Track readiness gates: staffing, lists, scripts posture, county hotspots.",
      "Surface exceptions to cockpit with owners and deadlines.",
      "Escalate systemic gaps to principals with tradeoff framing.",
    ],
    leadershipValue: ["Turns GOTV into a managed operation instead of a panic sprint.", "Aligns field, data, and comms on the same countdown reality."],
    exampleUseCase: "Final week: cockpit shows three counties under-covered; field shifts resources with explicit task reassignment and audit trail.",
    riskReduced: "Reduces last-minute coverage holes and contradictory GOTV instructions.",
  },
  "county-workbench": {
    heroStatement: "County workbench is the HQ habit: every county gets an operating file—leaders, issues, pathways, events, and field needs—not a forgotten PDF.",
    whyCampaignsNeedIt:
      "Statewide races are many local races. HQ loses when local reality is treated as optional color.",
    operatorWorkflow: [
      "Maintain county objects with owners and freshness signals.",
      "Connect county updates to briefings, pages, field plans, and comms.",
      "Flag stale intelligence before it becomes a bad surrogate line.",
    ],
    leadershipValue: ["Makes 'local truth' operational instead of anecdotal.", "Improves resource allocation across regions."],
    exampleUseCase: "Regional lead reviews five counties: updates briefings, adjusts tour stops, reassigns field capacity based on the same county objects.",
    riskReduced: "Reduces HQ blind spots and inconsistent local execution.",
  },
  "all-75-county-map": {
    heroStatement: "The map is a coordination surface: where attention is needed, where briefings are stale, where field pressure is building—illustrative geography, operational truth in the drilldown.",
    whyCampaignsNeedIt:
      "Without a statewide posture view, campaigns debate maps in slides instead of managing attention as inventory.",
    operatorWorkflow: [
      "Aggregate county signals into attention scoring designed for operator review.",
      "Drill from tile to county workbench objects.",
      "Feed exceptions into cockpit cards for leadership visibility.",
    ],
    leadershipValue: ["Prevents 'we did not know that county was slipping' surprises.", "Aligns regional strategy to local reality."],
    exampleUseCase: "Debate week: map highlights counties with message-risk flags + understaffed weekends; HQ reallocates surrogates and field leads.",
    riskReduced: "Reduces invisible local drift and misallocated resources late in the race.",
    campaignValue: [
      "Connects regional prioritization to county drilldowns without claiming every county dataset is complete on day one—implementation remains configuration-dependent.",
    ],
  },
  "county-briefings": {
    heroStatement: "Briefings should be operational artifacts: claims, sources, local implications, and recommended motions—not archives nobody opens.",
    whyCampaignsNeedIt:
      "Research that does not change decisions is expensive noise. County briefings exist to change what the campaign does this week.",
    operatorWorkflow: [
      "Author briefings with structured sections: leaders, issues, risks, opportunities, recommended actions.",
      "Route briefing updates to comms, surrogates, and field queues where configured.",
      "Track freshness: stale briefings become visible exceptions.",
    ],
    leadershipValue: ["Improves surrogate discipline and local message accuracy.", "Reduces repeated mistakes in the same county."],
    exampleUseCase: "County chair briefing updated after a local vote: comms adjusts county page + volunteer script posture in the same operating thread.",
    riskReduced: "Reduces stale local narratives and inconsistent surrogate guidance.",
  },
  "contact-profile-graph": {
    heroStatement: "Profiles are only as good as governance: relationships, touch history, approved facts, and source-aware fields—designed for operator-safe usage.",
    whyCampaignsNeedIt:
      "Bad profiles create bad targeting, bad messaging, and bad trust. The graph is meant to reduce silent corruption—not enable creepy free-for-all.",
    operatorWorkflow: [
      "Maintain profile fields with provenance and controlled updates.",
      "Attach approved facts for messaging alignment where configured.",
      "Review segmentation impact before high-risk sends.",
    ],
    leadershipValue: ["Improves message credibility and targeting explainability.", "Reduces internal arguments about 'what we believe is true' about a person or place."],
    exampleUseCase: "Major donor profile: call-time notes, pledge history, and approved biography facts converge for a consistent principal touch.",
    riskReduced: "Reduces contradictory records and ungoverned profile sprawl.",
  },
  "approved-facts": {
    heroStatement: "Approved facts are a credibility mechanism: what the campaign is willing to treat as true for messaging and surrogate discipline.",
    whyCampaignsNeedIt:
      "When facts live in Slack, different teams believe different truths—and fragile claims slip into outbound comms.",
    operatorWorkflow: [
      "Propose facts with sources and confidence notes.",
      "Route approvals through governance appropriate to risk tier.",
      "Bind approved facts to message objects and briefing artifacts.",
    ],
    leadershipValue: ["Reduces self-inflicted message wounds.", "Improves debate-week discipline and rapid response quality."],
    exampleUseCase: "Opposition claims spike: approved facts packet updated; message studio pulls the new approved lines automatically where configured.",
    riskReduced: "Reduces contradictory claims and unvetted talking points reaching surrogates.",
  },
  "campaign-website-system": {
    heroStatement: "The website is not a brochure. It is a publishing system tied to approvals, events, counties, and rapid response—same operating picture as comms.",
    whyCampaignsNeedIt:
      "Websites drift when publishing is disconnected from approvals and the rest of the campaign’s truth.",
    operatorWorkflow: [
      "Publish structured page types: issues, events, counties, landings.",
      "Route publishes through approval lanes where configured.",
      "Connect publishing changes to distribution planning and comms queues.",
    ],
    leadershipValue: ["Reduces public drift from internal truth.", "Improves rapid response coherence."],
    exampleUseCase: "County issue update: county page, email segment plan, and surrogate briefing updated as linked objects with approvals attached.",
    riskReduced: "Reduces inconsistent public messaging and approval-skipped publishes.",
  },
  "opposition-intelligence": {
    heroStatement: "Opposition work becomes operational when it is sourced, reviewed, and tied to decisions—without unsourced attack fantasy.",
    whyCampaignsNeedIt:
      "Opposition intelligence that cannot survive scrutiny becomes liability. Structure exists to enforce discipline, not to encourage mudslinging.",
    operatorWorkflow: [
      "Capture claims with sources, confidence, and review status.",
      "Route sensitive findings through message risk review where configured.",
      "Package outputs into briefing artifacts tied to debate prep and county context.",
    ],
    leadershipValue: ["Improves decision quality under pressure.", "Reduces self-inflicted credibility wounds."],
    exampleUseCase: "Debate prep: opposition packet updated with new filings research; risk review flags a fragile line before it reaches surrogates.",
    riskReduced: "Reduces unsourced attacks and inconsistent opposition narratives across teams.",
  },
  "approval-gates": {
    heroStatement: "Approvals are how speed and control coexist. Gates make the chain explicit, fast for trusted paths, and auditable for high-risk ones.",
    whyCampaignsNeedIt:
      "Informal approvals are invisible until something breaks. Gates are designed to be configurable policy—not theatrical paperwork.",
    operatorWorkflow: [
      "Define approval templates by object class: send, spend, publish, export.",
      "Attach approver roles with separation-of-duties posture where configured.",
      "Record decisions with immutable audit references appropriate to implementation.",
    ],
    leadershipValue: ["Protects the campaign from 'who approved this?' chaos.", "Makes escalation paths obvious when deadlines press."],
    exampleUseCase: "High-risk send: two-step approval satisfied; execution unlocks; audit trail shows who confirmed suppression and audience freeze.",
    riskReduced: "Reduces unauthorized execution and rubber-stamp culture under fatigue.",
  },
  "no-accidental-send-design": {
    heroStatement: "The system should assume humans are tired during crunch time. No-accidental-send design makes high-risk actions deliberate.",
    whyCampaignsNeedIt:
      "One wrong click can become a headline. UX and workflow patterns exist to add friction in the right places—not to slow everyday work unnecessarily.",
    operatorWorkflow: [
      "Risk-tier sends require previews, confirmations, and explicit audience freeze markers.",
      "Separate 'draft' from 'approved' from 'execution-eligible' states with obvious UI posture.",
      "Block execution on unresolved suppression mismatches where configured.",
    ],
    leadershipValue: ["Protects comms directors and principals from irreversible mistakes.", "Builds trust that the OS respects real-world pressure."],
    exampleUseCase: "GOTV night: fatigued operator attempts send; system requires typed confirmation and shows suppression delta since approval.",
    riskReduced: "Reduces catastrophic send mistakes and 'wrong button' incidents during peak fatigue.",
  },
};
