import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG } from "@/constants/navigation";

const introActions = [
  { icon: "↓", label: "دانلود اپلیکیشن مسافران", href: "/download#passenger-app" },
  { icon: "🚗", label: "ثبت نام راننده خودرو", href: "/careers" },
  { icon: "🏍", label: "ثبت نام راننده موتور", href: "/careers" },
  { icon: "↓", label: "دانلود اپلیکیشن رانندگان", href: "/download#driver-app" },
];

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[478px]">
      <Image
        src="/assets/banner.webp"
        alt="بنر تپسی"
        width={1920}
        height={478}
        className="w-full h-auto md:h-[478px] md:object-cover"
        priority
      />
      <Image
        src="/assets/mockup-phone.webp"
        alt="اپلیکیشن تپسی روی موبایل"
        width={420}
        height={600}
        className="hidden md:block absolute left-[10%] bottom-[-50%] w-[420px] h-auto z-10"
      />
      <div className="absolute inset-0 flex justify-center md:justify-start items-center container mx-auto max-w-[1140px] px-8">
        <div
          className="hero-intro rounded-xl flex flex-col items-center max-w-[300px] md:max-w-[500px] md:w-[500px] p-4 md:px-6 md:py-8"
          style={{
            backgroundImage:
              "linear-gradient(51deg, rgba(23,26,60,0.7) 5%, rgba(23,26,60,0.3) 95%)",
          }}
        >
          <h1 className="hero-intro__title text-[2.5rem] md:text-[5rem] m-0 font-bold">
            {SITE_CONFIG.name}
          </h1>
          <h2 className="hero-intro__subtitle text-[1.6rem] md:text-[2.5rem] font-normal mb-6">
            {SITE_CONFIG.tagline}
          </h2>
          <div className="flex flex-col md:flex-row md:flex-wrap md:justify-between md:items-center gap-4 w-full">
            {introActions.map((action) => (
              <Link
                key={action.label}
                href={action.href}
                className="bg-white rounded-xl py-4 px-4 w-[220px] flex items-center justify-around cursor-pointer hover:shadow-lg transition-shadow no-underline text-[#333]"
              >
                <span className="text-[1.8rem]" aria-hidden="true">
                  {action.icon}
                </span>
                <p className="text-[1.2rem] md:text-[1.5rem] m-0">{action.label}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
