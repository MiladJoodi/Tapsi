import Image from "next/image";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/common/PageHeader";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { caseStudies } from "@/data/case-studies";

export const metadata = createMetadata({
  title: "مطالعات موردی",
  description: "داستان موفقیت مشتریان سازمانی تپسی.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <>
      <Breadcrumb
        items={[{ label: "خانه", href: "/" }, { label: "مطالعات موردی" }]}
      />
      <PageHeader title="مطالعات موردی" subtitle="نتایج واقعی برای کسب‌وکارها" />
      <div className="container mx-auto max-w-[1140px] px-8 pb-20 grid gap-12 lg:grid-cols-2">
        {caseStudies.map((study) => (
          <Link
            key={study.id}
            href={`/case-studies/${study.slug}`}
            className="flex gap-6 rounded-[20px] p-6 shadow-[0_0_20px_10px_#efefef] no-underline text-inherit hover:scale-[1.01] transition-transform"
          >
            <Image
              src={study.image}
              alt={study.title}
              width={120}
              height={120}
              className="rounded-lg shrink-0 object-contain"
            />
            <div>
              <span className="text-primary text-[1.2rem]">{study.client}</span>
              <h3 className="text-[1.8rem] my-2">{study.title}</h3>
              <p className="text-[1.4rem] text-[#666]">{study.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
