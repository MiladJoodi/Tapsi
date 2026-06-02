import Image from "next/image";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/common/PageHeader";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { portfolioItems } from "@/data/portfolio";
import { Badge } from "@/components/ui/Badge";

export const metadata = createMetadata({
  title: "نمونه کارها",
  description: "پروژه‌ها و کمپین‌های موفق تپسی در بازاریابی، محصول و B2B.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      <Breadcrumb
        items={[{ label: "خانه", href: "/" }, { label: "نمونه کارها" }]}
      />
      <PageHeader title="نمونه کارها" subtitle="پروژه‌های برجسته تیم تپسی" />
      <div className="container mx-auto max-w-[1140px] px-8 pb-20 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {portfolioItems.map((item) => (
          <Link
            key={item.id}
            href={`/portfolio/${item.slug}`}
            className="block rounded-[20px] overflow-hidden shadow-[0_0_20px_10px_#efefef] no-underline text-inherit hover:scale-[1.02] transition-transform"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={400}
              height={260}
              className="w-full h-[260px] object-cover"
            />
            <div className="p-6">
              <Badge>{item.category}</Badge>
              <h3 className="mt-4 text-[1.8rem]">{item.title}</h3>
              <p className="text-[1.4rem] text-[#666]">{item.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
