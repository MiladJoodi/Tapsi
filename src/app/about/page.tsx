import Image from "next/image";
import { createMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/common/PageHeader";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { Button } from "@/components/ui/Button";

export const metadata = createMetadata({
  title: "درباره ما",
  description: "داستان تپسی، مأموریت ما و تیم پشت پلتفرم حمل‌ونقل هوشمند ایران.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <Breadcrumb
        items={[{ label: "خانه", href: "/" }, { label: "درباره ما" }]}
      />
      <PageHeader
        title="درباره تپسی"
        subtitle="از یک ایده ساده تا یکی از بزرگ‌ترین پلتفرم‌های حمل‌ونقل شهری ایران"
      />
      <div className="container mx-auto max-w-[1140px] px-8 pb-20 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-justify mb-6">
            تپسی در سال ۱۳۹۵ با هدف ساده‌سازی سفر درون‌شهری و ارسال مرسوله تأسیس شد.
            امروز میلیون‌ها مسافر و ده‌ها هزار سفیر هر روز از خدمات ما استفاده می‌کنند.
          </p>
          <p className="text-justify mb-8">
            ما باور داریم فناوری باید در دسترس همه باشد — از مسافری که اولین بار
            اپ را نصب می‌کند تا سازمانی که هزاران ارسال روزانه دارد.
          </p>
          <Button href="/careers">همکاری با ما</Button>
        </div>
        <Image
          src="/assets/banner.webp"
          alt="تیم تپسی"
          width={600}
          height={400}
          className="rounded-[20px] w-full h-auto"
        />
      </div>
    </>
  );
}
