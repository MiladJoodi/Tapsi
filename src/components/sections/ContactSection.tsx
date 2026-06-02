"use client";

import Image from "next/image";
import { ContactInfoRow } from "@/components/common/ContactInfoRow";
import { SocialIcon } from "@/components/common/SocialIcon";
import { SITE_CONFIG } from "@/constants/navigation";
import { Button } from "@/components/ui/Button";
import { FormField } from "@/components/ui/FormField";

export function ContactSection({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section className="contact-section relative overflow-hidden py-16 md:py-20">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-40"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 100% 0%, rgba(255,87,34,0.12), transparent), radial-gradient(ellipse 60% 40% at 0% 100%, rgba(255,122,80,0.1), transparent)",
        }}
      />

      <div className="container mx-auto max-w-[1140px] px-8">
        {showHeading && (
          <h2 className="text-center mb-4 section-title-decorated">تماس با ما</h2>
        )}
        {showHeading && (
          <p className="text-center text-[1.4rem] text-[#666] mb-12 max-w-xl mx-auto">
            سوال، پیشنهاد یا انتقاد دارید؟ خوشحال می‌شویم بشنویم.
          </p>
        )}

        <div className="mb-8 flex flex-wrap justify-center gap-4 text-[1.3rem]">
          <a
            href="/download"
            className="text-primary font-bold no-underline hover:underline"
          >
            دانلود اپلیکیشن تپسی
          </a>
          <span className="text-[#ccc]">|</span>
          <a href="/faq" className="text-[#666] no-underline hover:text-primary">
            سوالات متداول
          </a>
        </div>

        <div className="contact-grid grid gap-10 lg:gap-12">
          {/* اطلاعات تماس — آیکون سپس متن (RTL) */}
          <div className="contact-grid__info flex flex-col gap-6">
            <ContactInfoRow
              icon="email"
              label={SITE_CONFIG.email}
              href={`mailto:${SITE_CONFIG.email}`}
            />
            <ContactInfoRow
              icon="calling"
              label={SITE_CONFIG.phone}
              href={`tel:${SITE_CONFIG.phone}`}
            />
            <ContactInfoRow icon="location" label={SITE_CONFIG.address} />
          </div>

          <div className="contact-grid__map hidden lg:block">
            <Image
              src="/assets/Capture.PNG"
              alt="نقشه موقعیت دفتر تپسی"
              width={800}
              height={400}
              className="w-full h-auto rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.08)] ring-1 ring-black/5"
            />
          </div>

          <div className="contact-grid__social flex flex-col gap-4">
            <p className="text-[1.4rem] text-[#888] m-0">شبکه‌های اجتماعی</p>
            <div className="flex justify-start gap-3">
              <SocialIcon name="twitter" href="https://twitter.com" label="توییتر" />
              <SocialIcon name="facebook" href="https://facebook.com" label="فیسبوک" />
              <SocialIcon name="instagram" href="https://instagram.com" label="اینستاگرام" />
            </div>
          </div>

          {/* فرم */}
          <div className="contact-grid__form">
            <div className="contact-form-card rounded-2xl p-8 bg-white border border-primary/10">
              <h3 className="text-center text-[2rem] mb-2 mt-0">نظرات شما</h3>
              <p className="text-center text-[1.3rem] text-[#888] mb-8">
                پیام شما برای ما ارزشمند است
              </p>

              <form
                className="flex flex-col gap-4"
                onSubmit={(e) => e.preventDefault()}
              >
                <FormField
                  label="نام و نام خانوادگی"
                  placeholder="نام و نام خانوادگی"
                />
                <FormField
                  label="ایمیل"
                  type="email"
                  placeholder="ایمیل خود را وارد کنید"
                  ltr
                />
                <FormField
                  label="پیام شما"
                  type="textarea"
                  placeholder="پیام خود را بنویسید..."
                />
                <Button type="submit" block className="mt-2 !rounded-full">
                  ثبت نظر
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
