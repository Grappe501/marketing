"use client";

import { useEffect, useState } from "react";

/** Thin reading progress bar; decorative only. */
export function ScrollProgress() {
  const [p, setP] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const next = max > 0 ? doc.scrollTop / max : 0;
      setP(Math.min(1, Math.max(0, next)));
    };
    onScroll();
    if (mq.matches) return;
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="rd-scroll-progress" aria-hidden="true">
      <div className="rd-scroll-progress-bar" style={{ transform: `scaleX(${p})` }} />
    </div>
  );
}
