import { createMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/common/PageHeader";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { services } from "@/data/services";
import { ServicesTabs } from "@/components/sections/ServicesTabs";

export const metadata = createMetadata({
  title: "خدمات",
  description: "سرویس‌های تپسی: کلاسیک، لاین، موتوپیک، اتوپیک، پلاس، همیار و تپسی تلفنی.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <Breadcrumb
        items={[{ label: "خانه", href: "/" }, { label: "خدمات" }]}
      />
      <PageHeader
        title="سرویس‌های تپسی"
        subtitle="راه‌حل حمل‌ونقل و لجستیک برای هر نیاز"
      />
      <div className="container mx-auto max-w-[1140px] px-8 pb-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
      <ServicesTabs />
    </>
  );
}
