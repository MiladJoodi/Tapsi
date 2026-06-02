import Link from "next/link";

type Crumb = { label: string; href?: string };

export function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav
      aria-label="مسیر صفحه"
      className="container mx-auto max-w-[1140px] px-8 py-4 text-[1.3rem] text-[#666]"
    >
      <ol className="flex flex-wrap gap-2 list-none">
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden="true">/</span>}
            {item.href ? (
              <Link href={item.href} className="hover:text-primary">
                {item.label}
              </Link>
            ) : (
              <span className="text-[#333]">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
