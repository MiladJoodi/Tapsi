import type { CaseStudy } from "@/types";

export const caseStudies: CaseStudy[] = [
  {
    id: "1",
    slug: "retail-chain-logistics",
    title: "بهینه‌سازی ارسال برای زنجیره فروشگاهی",
    client: "فروشگاه رفاه",
    excerpt: "کاهش ۳۵٪ زمان تحویل با پنل سازمانی تپسی",
    content:
      "فروشگاه رفاه با بیش از ۲۰۰ شعبه در تهران به راه‌حلی برای ارسال سریع بین شعب نیاز داشت. پس از یکپارچه‌سازی API تپسی، زمان تحویل میانگین ۳۵٪ کاهش یافت و هزینه عملیاتی ۱۸٪ بهبود پیدا کرد.",
    image: "/assets/i-mac.webp",
    results: [
      { label: "کاهش زمان تحویل", value: "۳۵٪" },
      { label: "صرفه‌جویی هزینه", value: "۱۸٪" },
      { label: "ارسال روزانه", value: "۲,۰۰۰+" },
    ],
  },
  {
    id: "2",
    slug: "restaurant-delivery",
    title: "تحویل غذا در ساعات اوج",
    client: "شبکه رستوران‌های محلی",
    excerpt: "موتوپیک و اتوپیک برای تحویل زیر ۳۰ دقیقه",
    content:
      "شبکه‌ای از ۵۰ رستوران با استفاده از موتوپیک برای سفارش‌های سبک و اتوپیک برای سفارش‌های حجیم، توانست SLA تحویل ۳۰ دقیقه را در ۹۲٪ سفارش‌ها حفظ کند.",
    image: "/assets/cc-motopeyk.png",
    results: [
      { label: "SLA تحویل", value: "۹۲٪" },
      { label: "رضایت مشتری", value: "۴.۸/۵" },
      { label: "سفارش روزانه", value: "۸,۵۰۰" },
    ],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
