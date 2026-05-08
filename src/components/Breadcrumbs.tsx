import Link from "next/link";

export type BreadcrumbItem = { label: string; href?: string };

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="rd-container rd-breadcrumbs" aria-label="Breadcrumb">
      <ol className="rd-breadcrumb-list">
        {items.map((item, i) => (
          <li key={`${item.label}-${i}`} className="rd-breadcrumb-item">
            {item.href ? (
              <Link href={item.href} className="rd-breadcrumb-link">
                {item.label}
              </Link>
            ) : (
              <span className="rd-breadcrumb-current" aria-current="page">
                {item.label}
              </span>
            )}
            {i < items.length - 1 ? (
              <span className="rd-breadcrumb-sep" aria-hidden="true">
                /
              </span>
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}
