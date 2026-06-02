import Image from "next/image";
import { createMetadata } from "@/lib/metadata";
import { assertFound, DetailPageShell } from "@/lib/page-helpers";
import { caseStudies, getCaseStudyBySlug } from "@/data/case-studies";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) return {};
  return createMetadata({
    title: study.title,
    description: study.excerpt,
    path: `/case-studies/${slug}`,
  });
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params;
  const study = assertFound(getCaseStudyBySlug(slug));

  return (
    <DetailPageShell
      title={study.title}
      breadcrumbs={[
        { label: "خانه", href: "/" },
        { label: "مطالعات موردی", href: "/case-studies" },
        { label: study.title },
      ]}
    >
      <p className="text-primary mb-4">مشتری: {study.client}</p>
      <Image
        src={study.image}
        alt={study.title}
        width={900}
        height={400}
        className="w-full rounded-[20px] mb-8"
      />
      <p className="text-justify mb-12">{study.content}</p>
      <div className="grid sm:grid-cols-3 gap-6">
        {study.results.map((r) => (
          <div
            key={r.label}
            className="text-center p-6 rounded-[20px] bg-secondary-light"
          >
            <p className="text-[3rem] font-bold text-primary m-0">{r.value}</p>
            <p className="text-[1.4rem] m-0">{r.label}</p>
          </div>
        ))}
      </div>
    </DetailPageShell>
  );
}
