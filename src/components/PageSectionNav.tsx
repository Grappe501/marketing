import Link from "next/link";

export function PageSectionNav({ items }: { items: { id: string; label: string }[] }) {
  return (
    <nav aria-label="On this page" className="rd-panel" style={{ padding: "0.75rem 1rem", marginBottom: "1rem" }}>
      <p className="rd-muted" style={{ margin: "0 0 0.5rem", fontSize: "0.75rem", letterSpacing: "0.16em", textTransform: "uppercase" }}>
        Jump
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
        {items.map((it) => (
          <a key={it.id} href={`#${it.id}`} className="rd-pill" style={{ textDecoration: "none", color: "var(--text)" }}>
            {it.label}
          </a>
        ))}
        <Link href="/demo" className="rd-pill" style={{ borderColor: "rgba(196,92,42,0.45)", color: "var(--accent-2)" }}>
          Full walkthrough →
        </Link>
      </div>
    </nav>
  );
}
