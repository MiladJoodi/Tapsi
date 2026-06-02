import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesTabs } from "@/components/sections/ServicesTabs";
import { FeatureBlock } from "@/components/sections/FeatureBlock";
import { PricingSection } from "@/components/sections/PricingSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { TravelSlider } from "@/components/sections/TravelSlider";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesTabs />
      <FeatureBlock
        title="خدمات تپسی برای کسب و کارها"
        description="پنل سازمانی تپسی، یک سامانه تحت وب است که به سادگی امکان درخواست هم‌زمان تعداد نامحدودی خودرو و پیک را برای کسب‌وکارها و سازمان‌ها فراهم می‌کند. با استفاده از آن می‌توانید مأموریت‌های درون‌شهری و ارسال کالاهای خود را به سادگی مدیریت کنید."
        image="/assets/i-mac.webp"
        imageAlt="پنل سازمانی تپسی"
        buttonText="ورود و ثبت نام پنل سازمانی"
        buttonHref="/services"
      />
      <FeatureBlock
        title="خرید کد اعتبار تپسی"
        description="کد اعتبار تپسی امکان استفاده از تخفیف یک تا ده درصدی سفر با تپسی را برای کاربران، کسب‌وکارها و سازمان‌ها فراهم می‌کند. تنها با صرف چند دقیقه می‌توانید این کد را تهیه کنید."
        image="/assets/macbook.webp"
        imageAlt="خرید کد اعتبار"
        buttonText="خرید کد اعتبار و تخفیف"
        buttonHref="/pricing"
        reverse
      />
      <TravelSlider />
      <PricingSection />
      <ContactSection />
    </>
  );
}
