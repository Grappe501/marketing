import Link from "next/link";

type Cell = { label: string; href: string };

/** Lightweight “constellation” grid of links — hover glow is CSS-only. */
export function InteractiveFeatureGrid({ cells }: { cells: Cell[] }) {
  return (
    <div className="rd-interactive-grid" role="list">
      {cells.map((c) => (
        <Link key={c.href} href={c.href} className="rd-interactive-grid-cell" role="listitem">
          {c.label}
        </Link>
      ))}
    </div>
  );
}
