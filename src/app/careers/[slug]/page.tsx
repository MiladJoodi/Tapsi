import { createMetadata } from "@/lib/metadata";
import { assertFound, DetailPageShell } from "@/lib/page-helpers";
import { careers, getCareerBySlug } from "@/data/careers";
import { Button } from "@/components/ui/Button";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return careers.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const job = getCareerBySlug(slug);
  if (!job) return {};
  return createMetadata({
    title: job.title,
    description: job.description,
    path: `/careers/${slug}`,
  });
}

export default async function CareerDetailPage({ params }: Props) {
  const { slug } = await params;
  const job = assertFound(getCareerBySlug(slug));

  return (
    <DetailPageShell
      title={job.title}
      breadcrumbs={[
        { label: "خانه", href: "/" },
        { label: "فرصت‌های شغلی", href: "/careers" },
        { label: job.title },
      ]}
    >
      <p className="text-[#666] mb-8">
        {job.department} • {job.location} • {job.type}
      </p>
      <p className="text-justify mb-10">{job.description}</p>
      <h3 className="text-[2rem] mb-4">الزامات</h3>
      <ul className="list-tick mb-10">
        {job.requirements.map((r) => (
          <li key={r}>{r}</li>
        ))}
      </ul>
      <h3 className="text-[2rem] mb-4">مزایا</h3>
      <ul className="list-tick mb-10">
        {job.benefits.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
      <Button href="/contact">ارسال رزومه</Button>
    </DetailPageShell>
  );
}
