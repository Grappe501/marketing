/** Human-readable lane titles for templated copy (not slugs). */
export function laneTitleFromSlug(laneSlug: string): string {
  const m: Record<string, string> = {
    "cockpit-command": "Campaign Cockpit",
    "fundraising-good-change": "Fundraising + Good Change",
    "budget-compliance": "Budget + compliance preparation",
    "outreach-distribution": "Outreach + distribution",
    "calendar-events": "Calendar + events",
    "volunteer-field-gotv": "Volunteers + field + GOTV",
    "county-intelligence": "County intelligence",
    "data-voter-contact": "Data + contact",
    "content-website": "Content + website",
    "intelligence-briefings": "Intelligence + briefings",
    "governance-security": "Governance + security",
    "implementation-ops": "Implementation + ops",
  };
  return m[laneSlug] ?? "Campaign operating system";
}
