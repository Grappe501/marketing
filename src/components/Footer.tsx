import Link from "next/link";
import { getCtas, getSite } from "@/lib/marketingData";
import { routes } from "@/lib/routes";

const footerLinks = [
  { title: "Product", links: [
    { label: "Platform", href: routes.platform },
    { label: "Lanes", href: routes.lanes },
    { label: "Features", href: routes.features },
    { label: "Cockpit", href: routes.cockpit },
  ]},
  { title: "Operating lanes", links: [
    { label: "Fundraising", href: routes.fundraising },
    { label: "Compliance", href: routes.compliance },
    { label: "Calendar", href: routes.calendar },
    { label: "Outreach", href: routes.outreach },
    { label: "Field", href: routes.field },
    { label: "Counties", href: routes.counties },
  ]},
  { title: "Company", links: [
    { label: "Demo walkthrough", href: routes.demo },
    { label: "Implementation", href: routes.implementation },
    { label: "About", href: routes.about },
    { label: "Contact", href: routes.contact },
    { label: "Legal", href: routes.legal },
  ]},
];

export function Footer() {
  const site = getSite();
  const ctas = getCtas();

  return (
    <footer className="footer">
      <div className="rd-container footer-grid">
        <div>
          <div className="brand-mark">
            <span className="brand-title">{site.productName}</span>
            <span className="brand-sub">Marketing preview</span>
          </div>
          <p className="rd-muted" style={{ marginTop: "0.75rem", maxWidth: "36ch", fontSize: "0.92rem" }}>
            {site.tagline}
          </p>
        </div>
        {footerLinks.map((col) => (
          <div key={col.title}>
            <p className="footer-title">{col.title}</p>
            {col.links.map((l) => (
              <Link key={l.href} href={l.href}>
                {l.label}
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div className="rd-container footer-cta">
        <p>Static marketing build: contact submission is not wired until an approved intake backend is connected.</p>
        <Link className="rd-btn rd-btn-primary rd-btn-sm" href={ctas.primary.href}>
          {ctas.primary.label}
        </Link>
        <Link className="rd-btn rd-btn-ghost rd-btn-sm" href={ctas.secondary.href}>
          {ctas.secondary.label}
        </Link>
      </div>
      <div className="rd-container footer-legal">{site.legalShort}</div>
    </footer>
  );
}
