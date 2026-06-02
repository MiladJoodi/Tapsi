import { createMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/common/PageHeader";
import { Breadcrumb } from "@/components/common/Breadcrumb";

export const metadata = createMetadata({
  title: "حریم خصوصی",
  description: "سیاست حفظ حریم خصوصی کاربران تپسی.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumb
        items={[{ label: "خانه", href: "/" }, { label: "حریم خصوصی" }]}
      />
      <PageHeader title="حریم خصوصی" />
      <div className="container mx-auto max-w-[800px] px-8 pb-20 space-y-8 text-justify">
        <section>
          <h2 className="text-[2rem]">جمع‌آوری اطلاعات</h2>
          <p>
            تپسی اطلاعات لازم برای ارائه سرویس — شامل شماره موبایل، موقعیت مکانی
            در حین سفر و اطلاعات پرداخت — را مطابق قوانین جمهوری اسلامی ایران
            جمع‌آوری و نگهداری می‌کند.
          </p>
        </section>
        <section>
          <h2 className="text-[2rem]">استفاده از داده‌ها</h2>
          <p>
            داده‌های شما صرفاً برای تطبیق سفر، بهبود کیفیت سرویس، پشتیبانی و
            امنیت استفاده می‌شود. ما اطلاعات شخصی را بدون رضایت شما به اشخاص ثالث
            نمی‌فروشیم.
          </p>
        </section>
        <section>
          <h2 className="text-[2rem]">حقوق کاربر</h2>
          <p>
            می‌توانید درخواست حذف یا اصلاح اطلاعات خود را از طریق اپلیکیشن یا
            تماس با پشتیبانی ثبت کنید.
          </p>
        </section>
      </div>
    </>
  );
}
