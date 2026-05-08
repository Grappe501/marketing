import { CalendarRequestMock } from "@/components/visuals/CalendarRequestMock";
import { CockpitMockup } from "@/components/visuals/CockpitMockup";
import { ComplianceLedgerMock } from "@/components/visuals/ComplianceLedgerMock";
import { CountyMapIllustration } from "@/components/visuals/CountyMapIllustration";
import { EmailLaunchMock } from "@/components/visuals/EmailLaunchMock";
import { FeatureConstellation } from "@/components/visuals/FeatureConstellation";
import { FundraisingLaneMock } from "@/components/visuals/FundraisingLaneMock";
import { GovernanceShield } from "@/components/visuals/GovernanceShield";
import { WorkflowRail } from "@/components/visuals/WorkflowRail";

export function LaneHeroVisual({ laneSlug }: { laneSlug: string }) {
  switch (laneSlug) {
    case "cockpit-command":
      return <CockpitMockup />;
    case "fundraising-good-change":
      return <FundraisingLaneMock />;
    case "budget-compliance":
      return <ComplianceLedgerMock />;
    case "outreach-distribution":
      return <EmailLaunchMock />;
    case "calendar-events":
      return <CalendarRequestMock />;
    case "volunteer-field-gotv":
      return <CountyMapIllustration />;
    case "county-intelligence":
      return <CountyMapIllustration />;
    case "data-voter-contact":
      return <FeatureConstellation />;
    case "content-website":
      return <WorkflowRail />;
    case "intelligence-briefings":
      return <WorkflowRail />;
    case "governance-security":
      return (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <GovernanceShield />
        </div>
      );
    case "implementation-ops":
      return <WorkflowRail />;
    default:
      return <CockpitMockup />;
  }
}
