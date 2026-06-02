import type { PricingPlan } from "@/types";

export const pricingPlans: PricingPlan[] = [
  {
    id: "standard",
    name: "عادی",
    price: 290000,
    billingCycle: "ماهانه/تومان",
    description: "سرویس ماشین‌های معمولی",
    discount: "10% OFF",
    features: [
      "سفرهای روزمره درون‌شهری",
      "پشتیبانی استاندارد",
      "تخفیف ۱۰٪ ماهانه",
      "دسترسی به تپسی کلاسیک",
    ],
    variant: "secondary",
  },
  {
    id: "economy",
    name: "اقتصادی",
    price: 390000,
    billingCycle: "ماهانه/تومان",
    description: "سرویس ماشین‌های کلاسیک",
    discount: "15% OFF",
    features: [
      "کیفیت سفر بالاتر",
      "سرویس بی‌صدا و راحت",
      "اولویت در ساعات شلوغ",
      "تخفیف ۱۵٪ ماهانه",
    ],
    popular: true,
    variant: "primary",
  },
  {
    id: "premium",
    name: "ویژه",
    price: 490000,
    billingCycle: "ماهانه/تومان",
    description: "سرویس ماشین‌های مدل بالا",
    discount: "20% OFF",
    features: [
      "دسترسی به تپسی پلاس",
      "سفر نامحدود ماهانه",
      "پشتیبانی VIP",
      "تخفیف ۲۰٪ ماهانه",
    ],
    variant: "secondary",
  },
];
