import Image from "next/image";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { downloadApps, downloadStats } from "@/data/download";

export const metadata = createMetadata({
  title: "دانلود تپسی",
  description:
    "دانلود اپلیکیشن مسافران و سفیران تپسی از کافه‌بازار، مایکت یا لینک مستقیم.",
  path: "/download",
});

export default function DownloadPage() {
  return (
    <>
      <Breadcrumb
        items={[{ label: "خانه", href: "/" }, { label: "دانلود تپسی" }]}
      />

      {/* Hero */}
      <section className="download-hero relative overflow-hidden py-16 md:py-24">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(160deg, #fff6f2 0%, #ffffff 45%, #f8f8f8 100%)",
          }}
          aria-hidden
        />
        <div className="container mx-auto max-w-[1140px] px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-right">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-[1.3rem] mb-6">
              رایگان برای iOS و Android
            </span>
            <h1 className="text-[3rem] md:text-[4.5rem] leading-tight mb-6">
              دانلود اپلیکیشن تپسی
            </h1>
            <p className="text-[1.6rem] text-[#555] text-justify leading-relaxed mb-10">
              همین حالا اپ مناسب خود را نصب کنید — مسافر هستید یا می‌خواهید
              سفیر تپسی شوید. نصب سریع، رابط فارسی و امنیت بالا.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="#passenger-app">اپ مسافران</Button>
              <Button href="#driver-app" variant="secondary">
                اپ سفیران
              </Button>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div
              className="absolute w-[280px] h-[280px] rounded-full bg-primary/10 blur-3xl"
              aria-hidden
            />
            <Image
              src="/assets/mockup-phone.webp"
              alt="پیش‌نمایش اپ تپسی"
              width={420}
              height={600}
              className="relative w-[min(100%,380px)] h-auto drop-shadow-[0_24px_48px_rgba(0,0,0,0.15)]"
              priority
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-[#eee] bg-white py-12">
        <div className="container mx-auto max-w-[1140px] px-8 grid grid-cols-3 gap-6 text-center">
          {downloadStats.map((stat) => (
            <div key={stat.label}>
              <p className="text-[2.8rem] md:text-[3.5rem] font-bold text-primary m-0 leading-none">
                {stat.value}
              </p>
              <p className="text-[1.3rem] md:text-[1.5rem] text-[#666] mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Apps */}
      {downloadApps.map((app, i) => (
        <section
          key={app.id}
          id={app.id === "passenger" ? "passenger-app" : "driver-app"}
          className="py-16 md:py-24"
        >
          <div className="container mx-auto max-w-[1140px] px-8 grid lg:grid-cols-2 gap-12 items-center">
            <div className={`text-right ${i % 2 === 1 ? "lg:order-2" : ""}`}>
              <h2 className="text-[2.4rem] md:text-[3rem] mb-3">{app.title}</h2>
              <p className="text-primary text-[1.5rem] mb-6">{app.subtitle}</p>
              <p className="text-justify text-[#555] mb-8 leading-relaxed">
                {app.description}
              </p>
              <ul className="list-tick mb-10">
                {app.features.map((f) => (
                  <li key={f} className="text-[1.4rem]">
                    {f}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                {app.stores.map((store) => (
                  <button
                    key={store.name}
                    type="button"
                    className="store-btn flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#1a1a1a] text-white text-[1.3rem] border-0 cursor-pointer hover:bg-primary transition-colors duration-300"
                  >
                    <Image
                      src="/assets/download.png"
                      alt=""
                      width={24}
                      height={24}
                      className="brightness-0 invert opacity-90"
                    />
                    {store.label}
                  </button>
                ))}
              </div>
            </div>
            <div className={`flex justify-center ${i % 2 === 1 ? "lg:order-1" : ""}`}>
              <div className="download-phone-frame p-6 rounded-[32px] bg-gradient-to-br from-[#fff6f2] to-white shadow-[0_20px_60px_rgba(255,87,34,0.12)]">
                <Image
                  src={app.image}
                  alt={app.title}
                  width={320}
                  height={520}
                  className="w-[min(100%,300px)] h-auto mx-auto"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-16 bg-[#1a1a1a] text-white">
        <div className="container mx-auto max-w-[1140px] px-8 text-center">
          <h2 className="download-cta__title text-[2.4rem] md:text-[3rem] mb-4">
            سوالی دارید؟
          </h2>
          <p className="text-[#ccc] text-[1.5rem] mb-8 max-w-lg mx-auto">
            پاسخ پرسش‌های رایج را در بخش سوالات متداول بخوانید یا با پشتیبانی
            تماس بگیرید.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/faq">سوالات متداول</Button>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-4 rounded-lg border-2 border-white/30 text-white text-[1.4rem] no-underline hover:bg-white/10 transition-colors"
            >
              تماس با پشتیبانی
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
