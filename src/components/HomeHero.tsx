import Link from "next/link";
import { AnimatedCommandLine } from "@/components/AnimatedCommandLine";
import { CockpitMockup } from "@/components/visuals/CockpitMockup";
import { LaneOverviewStripMock } from "@/components/visuals/LaneOverviewStripMock";
import { RankedActionsMock } from "@/components/visuals/RankedActionsMock";
import { ProductScreenshotFrame } from "@/components/ProductScreenshotFrame";
import { SignalSweep } from "@/components/SignalSweep";
import { getSite } from "@/lib/marketingData";
import { routes } from "@/lib/routes";

const PROOF_STRIP = [
  "12 operating lanes",
  "82 mapped capabilities",
  "Static deploy ready",
  "Governed workflow posture",
  "No accidental-send design",
] as const;

const LANE_CHIPS = [
  { label: "Outreach", href: routes.outreach },
  { label: "Fundraising", href: routes.fundraising },
  { label: "Calendar", href: routes.calendar },
  { label: "Field", href: routes.field },
  { label: "Counties", href: routes.counties },
  { label: "Compliance", href: routes.compliance },
  { label: "Cockpit", href: routes.cockpit },
  { label: "Governance", href: routes.governance },
] as const;

export function HomeHero() {
  const site = getSite();

  return (
    <section className="rd-home-hero rd-section" style={{ borderTop: "none", paddingTop: "clamp(2rem, 5vw, 4rem)" }}>
      <div className="rd-container">
        <div className="rd-home-hero-panel rd-grid-bg rd-page-hero-light">
          <SignalSweep />
          <div className="rd-home-hero-grid">
            <div className="rd-home-hero-copy">
              <p className="rd-eyebrow">Campaign operating system</p>
              <h1 className="rd-h1 rd-home-hero-title">
                Run the whole race
                <br />
                <span className="rd-home-hero-title-accent">from one governed command system.</span>
              </h1>
              <p className="rd-lead rd-home-hero-lead">
                Campaigns lose speed when every urgent lane runs from a different source of truth. RedDirt OS is built to replace that scatter with one operator-guided operating picture—high-consequence
                work stays visible, reviewed, and confirmation-gated.
              </p>
              <div className="rd-home-hero-ctas">
                <Link className="rd-btn rd-btn-primary rd-btn-glow" href={site.primaryCtaHref}>
                  {site.primaryCtaLabel}
                </Link>
                <Link className="rd-btn rd-btn-ghost" href={site.secondaryCtaHref}>
                  {site.secondaryCtaLabel}
                </Link>
                <Link className="rd-btn rd-btn-ghost" href={routes.lanes}>
                  See every campaign lane
                </Link>
              </div>
              <ul className="rd-proof-micro" aria-label="Product structure highlights">
                {PROOF_STRIP.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <div className="rd-home-hero-chips" aria-label="Full campaign OS lanes">
                {LANE_CHIPS.map((c) => (
                  <Link key={c.href} href={c.href} className="rd-chip rd-chip-link">
                    {c.label}
                  </Link>
                ))}
              </div>
              <AnimatedCommandLine />
            </div>
            <div className="rd-home-hero-visual">
              <ProductScreenshotFrame title="Cockpit — readiness mock (illustration)">
                <CockpitMockup />
              </ProductScreenshotFrame>
              <p className="rd-muted" style={{ margin: "0.65rem 0 0", fontSize: "0.78rem", maxWidth: "42ch" }}>
                Operating picture: readiness cards, county pressure, email launch, calendar queue, fundraising follow-up, compliance deadlines, operator next action—conceptual layout only.
              </p>
              <div
                style={{
                  marginTop: "0.85rem",
                  display: "grid",
                  gap: "0.65rem",
                  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                }}
              >
                <div className="rd-home-hero-aux-mock">
                  <p className="rd-home-hero-aux-label">Lane posture strip (mock)</p>
                  <LaneOverviewStripMock />
                </div>
                <div className="rd-home-hero-aux-mock">
                  <p className="rd-home-hero-aux-label">Ranked queue (mock)</p>
                  <RankedActionsMock />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
