import Link from "next/link";
import { LANE_PAGE_COPY } from "@/data/pass2/lanePageCopy";
import type { Lane } from "@/lib/types";
import { routes } from "@/lib/routes";

export function LaneCard({ lane }: { lane: Lane }) {
  const extra = LANE_PAGE_COPY[lane.slug];
  const controlLine = extra?.whatOperatorGets ?? lane.operatorPromise;
  const stakes = extra?.whyBreaks ?? lane.whyItMatters;

  return (
    <Link href={routes.lane(lane.slug)} className="rd-panel" style={{ padding: "1.1rem", display: "block" }}>
      <p className="rd-eyebrow" style={{ letterSpacing: "0.14em", fontSize: "0.68rem" }}>
        {lane.eyebrow}
      </p>
      <p style={{ margin: "0.35rem 0 0.35rem", fontWeight: 650, fontSize: "1.05rem" }}>{lane.shortTitle}</p>
      <p className="rd-muted" style={{ margin: "0 0 0.5rem", fontSize: "0.88rem", lineHeight: 1.45 }}>
        <strong style={{ color: "var(--text)" }}>Controls:</strong> {lane.summary}
      </p>
      <p className="rd-muted" style={{ margin: 0, fontSize: "0.85rem", lineHeight: 1.45 }}>
        <strong style={{ color: "var(--text)" }}>Why it breaks:</strong> {stakes.length > 170 ? `${stakes.slice(0, 170)}…` : stakes}
      </p>
      <p className="rd-muted" style={{ margin: "0.55rem 0 0", fontSize: "0.85rem", lineHeight: 1.45 }}>
        <strong style={{ color: "var(--text)" }}>Operator gets:</strong> {controlLine.length > 170 ? `${controlLine.slice(0, 170)}…` : controlLine}
      </p>
      <p className="rd-link-arrow" style={{ marginTop: "0.85rem", fontSize: "0.88rem", color: "var(--accent-2)" }}>
        Open lane
      </p>
    </Link>
  );
}
