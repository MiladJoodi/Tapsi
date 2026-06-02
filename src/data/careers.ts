import type { Career } from "@/types";

export const careers: Career[] = [
  {
    id: "1",
    slug: "senior-frontend-engineer",
    title: "توسعه‌دهنده ارشد فرانت‌اند",
    department: "فناوری",
    location: "تهران — حضوری/ترکیبی",
    type: "تمام‌وقت",
    description:
      "به تیم محصول تپسی بپیوندید و روی اپلیکیشن‌های میلیون کاربری با React و Next.js کار کنید. تمرکز بر عملکرد، دسترسی‌پذیری و تجربه RTL.",
    requirements: [
      "حداقل ۵ سال تجربه React/TypeScript",
      "آشنایی با Next.js و تست‌نویسی",
      "تجربه کار با تیم‌های چندفرهنگی",
    ],
    benefits: [
      "بیمه تکمیلی",
      "ناهار و میان‌وعده",
      "آموزش و کنفرانس",
      "سهام تشویقی",
    ],
  },
  {
    id: "2",
    slug: "product-designer",
    title: "طراح محصول",
    department: "طراحی",
    location: "تهران",
    type: "تمام‌وقت",
    description:
      "طراحی جریان‌های مسافر و سفیر، پروتوتایپ و همکاری نزدیک با تیم مهندسی برای تحویل ویژگی‌های با کیفیت بالا.",
    requirements: [
      "پورتفولیو قوی UX/UI",
      "تسلط بر Figma",
      "تجربه طراحی موبایل فارسی",
    ],
    benefits: [
      "محیط خلاق",
      "تجهیزات کامل",
      "بیمه",
      "مرخصی انعطاف‌پذیر",
    ],
  },
  {
    id: "3",
    slug: "operations-manager",
    title: "مدیر عملیات شهر",
    department: "عملیات",
    location: "اصفهان",
    type: "تمام‌وقت",
    description:
      "مدیریت شبکه سفیران، کیفیت سرویس و رشد عملیات در شهر اصفهان.",
    requirements: [
      "تجربه مدیریت عملیات",
      "مهارت مذاکره و تحلیل داده",
      "آشنایی با صنعت حمل‌ونقل",
    ],
    benefits: ["پاداش عملکرد", "بیمه", "خودرو سازمانی"],
  },
];

export function getCareerBySlug(slug: string): Career | undefined {
  return careers.find((c) => c.slug === slug);
}
