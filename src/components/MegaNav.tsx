"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getNav } from "@/lib/marketingData";
import { routes } from "@/lib/routes";

type Props = {
  mobile?: boolean;
  onNavigate?: () => void;
};

function linkActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function MegaNav({ mobile, onNavigate }: Props) {
  const nav = getNav();
  const pathname = usePathname() || "/";

  if (mobile) {
    return (
      <div>
        {nav.map((group) => (
          <div key={group.id} className="mobile-group">
            <div className="mobile-group-title">{group.label}</div>
            {group.links.map((l) => (
              <Link
                key={l.href + l.label}
                className={`mobile-link${linkActive(pathname, l.href) ? " mobile-link--active" : ""}`}
                href={l.href}
                onClick={onNavigate}
                aria-current={linkActive(pathname, l.href) ? "page" : undefined}
              >
                {l.label}
              </Link>
            ))}
          </div>
        ))}
        <div className="mobile-group">
          <Link
            className={`mobile-link${linkActive(pathname, routes.legal) ? " mobile-link--active" : ""}`}
            href={routes.legal}
            onClick={onNavigate}
            aria-current={linkActive(pathname, routes.legal) ? "page" : undefined}
          >
            Legal
          </Link>
        </div>
      </div>
    );
  }

  return (
    <nav className="nav-desktop" aria-label="Primary">
      <div className="nav-groups">
        {nav.map((group) => (
          <div key={group.id} className="nav-item-wrap">
            <button type="button" className={`nav-toplink${group.links.some((l) => linkActive(pathname, l.href)) ? " nav-toplink--active" : ""}`}>
              {group.label}
            </button>
            <div className="mega" role="region" aria-label={`${group.label} links`}>
              <div className="mega-grid">
                {group.links.map((l) => (
                  <Link
                    key={l.href + l.label}
                    href={l.href}
                    className={`mega-link${linkActive(pathname, l.href) ? " mega-link--active" : ""}`}
                    aria-current={linkActive(pathname, l.href) ? "page" : undefined}
                  >
                    <div className="mega-link-title">{l.label}</div>
                    {l.description ? <div className="mega-link-desc">{l.description}</div> : null}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
        <div className="nav-item-wrap">
          <Link className={`nav-toplink${linkActive(pathname, routes.demo) ? " nav-toplink--active" : ""}`} href={routes.demo} aria-current={linkActive(pathname, routes.demo) ? "page" : undefined}>
            Demo
          </Link>
        </div>
      </div>
    </nav>
  );
}
