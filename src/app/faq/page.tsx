import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { Button } from "@/components/ui/Button";
import { faqItems } from "@/data/faq";

export const metadata = createMetadata({
  title: "پرسش‌های متداول",
  description: "پاسخ سوالات رایج مسافران، رانندگان و کسب‌وکارها.",
  path: "/faq",
});

export default function FAQPage() {
  const categories = [...new Set(faqItems.map((f) => f.category).filter(Boolean))];

  return (
    <>
      <Breadcrumb
        items={[{ label: "خانه", href: "/" }, { label: "سوالات متداول" }]}
      />

      <section className="faq-hero relative py-16 md:py-20 text-center overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(circle at 50% 0%, rgba(255,87,34,0.08), transparent 60%)",
          }}
          aria-hidden
        />
        <div className="container mx-auto max-w-[1140px] px-8">
          <h1 className="section-title-decorated text-[3rem] md:text-[4rem] mb-4">
            پرسش‌های متداول
          </h1>
          <p className="text-[1.6rem] text-[#666] max-w-2xl mx-auto mb-8">
            پاسخ سریع به رایج‌ترین سوالات مسافران، سفیران و کسب‌وکارها
          </p>
          <Button href="/download">دانلود اپلیکیشن</Button>
        </div>
      </section>

      <div className="container mx-auto max-w-[860px] px-8 pb-24 space-y-14">
        {categories.map((category) => (
          <div key={category}>
            <h2 className="text-right text-[2rem] md:text-[2.4rem] mb-6 flex items-center gap-3">
              <span className="w-1.5 h-8 rounded-full bg-primary shrink-0" />
              {category}
            </h2>
            <FAQAccordion
              items={faqItems.filter((f) => f.category === category)}
            />
          </div>
        ))}
      </div>

      <section className="container mx-auto max-w-[860px] px-8 pb-20">
        <div className="rounded-2xl p-8 md:p-10 bg-secondary-light text-right border border-primary/10">
          <h3 className="text-[2rem] mb-3">پاسخ سوال خود را پیدا نکردید؟</h3>
          <p className="text-[#555] mb-6 text-justify">
            تیم پشتیبانی تپسی آماده پاسخگویی است. از طریق تماس با ۱۶۳۰ یا فرم
            تماس با ما در ارتباط باشید.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/contact">تماس با ما</Button>
            <Link
              href="/download"
              className="inline-flex items-center px-6 py-4 text-primary text-[1.4rem] font-bold no-underline hover:underline"
            >
              دانلود اپلیکیشن ←
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
