import { createMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/common/PageHeader";
import { Breadcrumb } from "@/components/common/Breadcrumb";

export const metadata = createMetadata({
  title: "قوانین و مقررات",
  description: "شرایط استفاده از خدمات تپسی.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <Breadcrumb
        items={[{ label: "خانه", href: "/" }, { label: "قوانین" }]}
      />
      <PageHeader title="قوانین و مقررات" />
      <div className="container mx-auto max-w-[800px] px-8 pb-20 space-y-8 text-justify">
        <section>
          <h2 className="text-[2rem]">پذیرش شرایط</h2>
          <p>
            با استفاده از اپلیکیشن و وب‌سایت تپسی، شما این شرایط را می‌پذیرید.
            لطفاً قبل از هر سفر این صفحه را مطالعه کنید.
          </p>
        </section>
        <section>
          <h2 className="text-[2rem]">مسئولیت مسافر و سفیر</h2>
          <p>
            مسافران موظف به رعایت قوانین راهنمایی و رانندگی و احترام به سفیران
            هستند. سفیران متعهد به ارائه سرویس ایمن و حرفه‌ای مطابق استانداردهای
            تپسی می‌باشند.
          </p>
        </section>
        <section>
          <h2 className="text-[2rem]">لغو و استرداد</h2>
          <p>
            قوانین لغو سفر و استرداد وجه بسته به نوع سرویس و زمان لغو متفاوت است
            و در اپلیکیشن به‌طور شفاف نمایش داده می‌شود.
          </p>
        </section>
      </div>
    </>
  );
}
