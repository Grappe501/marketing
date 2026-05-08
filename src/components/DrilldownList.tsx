import Link from "next/link";

export function DrilldownList({
  items,
}: {
  items: { title: string; href: string; description?: string }[];
}) {
  return (
    <div style={{ display: "grid", gap: "0.5rem" }}>
      {items.map((item) => (
        <Link key={item.href} href={item.href} className="rd-panel" style={{ padding: "0.85rem 1rem", display: "block" }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: "0.75rem" }}>
            <p style={{ margin: 0, fontWeight: 650 }}>{item.title}</p>
            <span className="rd-muted" style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}>
              OPEN
            </span>
          </div>
          {item.description ? (
            <p className="rd-muted" style={{ margin: "0.45rem 0 0", fontSize: "0.88rem" }}>
              {item.description}
            </p>
          ) : null}
        </Link>
      ))}
    </div>
  );
}
