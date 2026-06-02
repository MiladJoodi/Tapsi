import Image from "next/image";
import { createMetadata } from "@/lib/metadata";
import { assertFound, DetailPageShell } from "@/lib/page-helpers";
import { getPortfolioBySlug, portfolioItems } from "@/data/portfolio";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return portfolioItems.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const item = getPortfolioBySlug(slug);
  if (!item) return {};
  return createMetadata({
    title: item.title,
    description: item.excerpt,
    path: `/portfolio/${slug}`,
  });
}

export default async function PortfolioDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = assertFound(getPortfolioBySlug(slug));

  return (
    <DetailPageShell
      title={item.title}
      breadcrumbs={[
        { label: "خانه", href: "/" },
        { label: "نمونه کارها", href: "/portfolio" },
        { label: item.title },
      ]}
    >
      <Image
        src={item.image}
        alt={item.title}
        width={900}
        height={500}
        className="w-full rounded-[20px] mb-8"
      />
      <p className="text-justify mb-6">{item.description}</p>
      <div className="flex flex-wrap gap-2">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="px-4 py-1 rounded-full bg-secondary-light text-primary text-[1.2rem]"
          >
            {tag}
          </span>
        ))}
      </div>
    </DetailPageShell>
  );
}
