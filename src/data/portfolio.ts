import type { PortfolioItem } from "@/types";

export const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    slug: "desert-travel-campaign",
    title: "سفر به قلب کویر",
    excerpt: "کمپین سفرهای ویژه تابستانه با اقامت رایگان",
    description:
      "طراحی و اجرای کمپین بازاریابی برای سفرهای تفریحی تپسی با تمرکز بر مقاصد طبیعی ایران. شامل بسته سفر سه‌روزه، اقامت و تخفیف سفر برگشت.",
    image: "/assets/کویر.jpg",
    category: "بازاریابی",
    tags: ["کمپین", "سفر", "برند"],
  },
  {
    id: "2",
    slug: "corporate-delivery",
    title: "لجستیک سازمانی فروشگاه رفاه",
    excerpt: "یکپارچه‌سازی پنل سازمانی برای ارسال بین‌شهری",
    description:
      "پیاده‌سازی API و پنل اختصاصی برای مدیریت هزاران ارسال روزانه بین شعب فروشگاه زنجیره‌ای.",
    image: "/assets/banner.webp",
    category: "B2B",
    tags: ["API", "لجستیک"],
  },
  {
    id: "3",
    slug: "app-redesign",
    title: "بازطراحی تجربه مسافر",
    excerpt: "رابط کاربری ساده‌تر و سریع‌تر برای درخواست سفر",
    description:
      "پروژه UX شامل تحقیق کاربری، پروتوتایپ و A/B تست که منجر به افزایش ۲۳٪ نرخ تبدیل درخواست سفر شد.",
    image: "/assets/mockup-phone.webp",
    category: "محصول",
    tags: ["UX", "موبایل"],
  },
];

export function getPortfolioBySlug(slug: string): PortfolioItem | undefined {
  return portfolioItems.find((p) => p.slug === slug);
}
