"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { MegaNav } from "@/components/MegaNav";
import { getSite } from "@/lib/marketingData";
import { routes } from "@/lib/routes";

export function Header() {
  const site = getSite();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="header">
      <div className="rd-container header-inner">
        <Link href={routes.home} className="brand-mark" onClick={() => setOpen(false)}>
          <span className="brand-title">{site.shortName}</span>
          <span className="brand-sub">Operating Systems</span>
        </Link>
        <MegaNav />
        <button
          type="button"
          className="nav-mobile-toggle"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>
      </div>
      <div id="mobile-nav" className={`mobile-sheet rd-container ${open ? "open" : ""}`} hidden={!open}>
        <MegaNav mobile onNavigate={() => setOpen(false)} />
      </div>
    </header>
  );
}
