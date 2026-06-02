import { createMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/common/PageHeader";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { PricingSection } from "@/components/sections/PricingSection";
import { FeatureBlock } from "@/components/sections/FeatureBlock";

export const metadata = createMetadata({
  title: "تعرفه‌ها",
  description: "پلن‌های ویژه مشتریان تپسی با تخفیف‌های ماهانه.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <Breadcrumb
        items={[{ label: "خانه", href: "/" }, { label: "تعرفه‌ها" }]}
      />
      <PageHeader
        title="تعرفه‌های ویژه"
        subtitle="پلن مناسب خود را انتخاب کنید"
      />
      <PricingSection />
      <FeatureBlock
        title="خرید کد اعتبار تپسی"
        description="کد اعتبار برای خود، کارکنان یا مشتریان — با تخفیف یک تا ده درصد روی هر سفر."
        image="/assets/macbook.webp"
        imageAlt="کد اعتبار"
        buttonText="خرید کد اعتبار"
        buttonHref="/contact"
      />
    </>
  );
}
