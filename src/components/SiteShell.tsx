import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ScrollProgress } from "@/components/ScrollProgress";
import { SkipLink } from "@/components/SkipLink";
import Link from "next/link";
import { getCtas } from "@/lib/marketingData";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const ctas = getCtas();
  return (
    <div className="shell">
      <SkipLink />
      <ScrollProgress />
      <Header />
      <main id="main-content" className="shell-main" tabIndex={-1}>
        {children}
      </main>
      <div className="rd-sticky-cta">
        <div className="rd-sticky-cta-inner rd-container">
          <span className="rd-sticky-cta-label">Ready to see the command surface?</span>
          <Link className="rd-btn rd-btn-primary rd-btn-sm" href={ctas.primary.href}>
            {ctas.primary.label}
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
