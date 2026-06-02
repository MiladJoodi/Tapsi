import type { NavItem } from "@/types";

export const MAIN_NAV: NavItem[] = [
  { label: "پشتیبانی", href: "/contact" },
  { label: "خدمات کسب و کارها", href: "/services" },
  { label: "فرصت‌های شغلی", href: "/careers" },
  { label: "وبلاگ", href: "/blog" },
  { label: "دانلود تپسی", href: "/download", cta: true },
];

export const FOOTER_LINKS = {
  company: [
    { label: "وبلاگ تپسی", href: "/blog" },
    { label: "فرصت شغلی", href: "/careers" },
    { label: "تماس با ما", href: "/contact" },
    { label: "درباره ما", href: "/about" },
  ],
  passengers: [
    { label: "دانلود اپ مسافر", href: "/download" },
    { label: "نسخه وب تپسی", href: "/" },
    { label: "پرسش‌های متداول مسافران", href: "/faq" },
    { label: "باشگاه مشتریان", href: "/pricing" },
  ],
  drivers: [
    { label: "ثبت نام راننده تاکسی", href: "/careers" },
    { label: "دانلود اپ سفیر", href: "/download#driver-app" },
    { label: "پرسش‌های متداول سفیران", href: "/faq" },
    { label: "باشگاه مشتریان", href: "/pricing" },
  ],
  business: [
    { label: "پنل سازمانی تپسی", href: "/services" },
    { label: "خرید کد اعتبار و تخفیف", href: "/pricing" },
    { label: "دریافت API", href: "/contact" },
    { label: "شرایط و قوانین", href: "/terms" },
  ],
};

export const SITE_CONFIG = {
  name: "تپسی",
  tagline: "اپلیکیشن درخواست خودرو و پیک",
  url: "https://tapsi.ir",
  email: "support@tapsi.ir",
  phone: "۱۶۳۰",
  address: "تهران، سعادت‌آباد",
};

export const AUTHOR_LINKS = {
  name: "Milad Joodi",
  github: "https://github.com/MiladJoodi/Tapsi",
  linkedin: "https://www.linkedin.com/in/joodi/",
};
