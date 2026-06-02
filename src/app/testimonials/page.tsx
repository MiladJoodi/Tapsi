import { createMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/common/PageHeader";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { testimonials } from "@/data/testimonials";

export const metadata = createMetadata({
  title: "نظرات مشتریان",
  description: "تجربه مسافران، سفیران و مشتریان سازمانی از تپسی.",
  path: "/testimonials",
});

export default function TestimonialsPage() {
  return (
    <>
      <Breadcrumb
        items={[{ label: "خانه", href: "/" }, { label: "نظرات" }]}
      />
      <PageHeader title="نظرات مشتریان" subtitle="صدای جامعه تپسی" />
      <div className="container mx-auto max-w-[1140px] px-8 pb-20 grid gap-8 sm:grid-cols-2">
        {testimonials.map((t) => (
          <TestimonialCard key={t.id} testimonial={t} />
        ))}
      </div>
    </>
  );
}
