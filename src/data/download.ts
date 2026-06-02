export type DownloadApp = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
  stores: { name: string; label: string }[];
};

export const downloadApps: DownloadApp[] = [
  {
    id: "passenger",
    title: "اپلیکیشن مسافران",
    subtitle: "درخواست خودرو و پیک در چند ثانیه",
    description:
      "با اپ مسافران تپسی، سفر درون‌شهری، ارسال مرسوله و سرویس همیار را از یک اپ مدیریت کنید. قیمت قبل از سفر مشخص است و می‌توانید سفر را روی نقشه دنبال کنید.",
    image: "/assets/mockup-phone.webp",
    features: [
      "ثبت‌نام با شماره موبایل",
      "پرداخت آنلاین و نقدی",
      "تخفیف و کد اعتبار",
      "پشتیبانی ۲۴ ساعته",
    ],
    stores: [
      { name: "cafebazaar", label: "دریافت از کافه‌بازار" },
      { name: "myket", label: "دریافت از مایکت" },
      { name: "direct", label: "دانلود مستقیم Android" },
    ],
  },
  {
    id: "driver",
    title: "اپلیکیشن سفیران",
    subtitle: "همکاری با تپسی به عنوان راننده",
    description:
      "اپ سفیر برای رانندگان خودرو و موتور طراحی شده است. درآمد شفاف، آموزش آنلاین و پشتیبانی اختصاصی از مزایای همکاری با تپسی است.",
    image: "/assets/mockup-phone (1).webp",
    features: [
      "ثبت‌نام و احراز هویت آنلاین",
      "گزارش درآمد روزانه",
      "ناوبری هوشمند",
      "امتیازدهی مسافران",
    ],
    stores: [
      { name: "cafebazaar", label: "دریافت از کافه‌بازار" },
      { name: "myket", label: "دریافت از مایکت" },
      { name: "direct", label: "دانلود مستقیم Android" },
    ],
  },
];

export const downloadStats = [
  { value: "۴۰+", label: "شهر تحت پوشش" },
  { value: "میلیون‌ها", label: "سفر موفق" },
  { value: "۴.۸", label: "امتیاز کاربران" },
];
