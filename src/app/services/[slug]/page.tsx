import Image from "next/image";
import { createMetadata } from "@/lib/metadata";
import { assertFound, DetailPageShell } from "@/lib/page-helpers";
import { getServiceBySlug, services } from "@/data/services";
import { Button } from "@/components/ui/Button";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return createMetadata({
    title: service.name,
    description: service.shortDescription,
    path: `/services/${slug}`,
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = assertFound(getServiceBySlug(slug));

  return (
    <DetailPageShell
      title={service.name}
      breadcrumbs={[
        { label: "خانه", href: "/" },
        { label: "خدمات", href: "/services" },
        { label: service.name },
      ]}
    >
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <Image
          src={service.icon}
          alt={service.name}
          width={400}
          height={400}
          className="mx-auto w-[60%]"
        />
        <div>
          <p className="text-justify mb-8">{service.description}</p>
          {service.features && (
            <ul className="list-tick mb-8">
              {service.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          )}
          <Button href="/contact">درخواست مشاوره</Button>
        </div>
      </div>
    </DetailPageShell>
  );
}
