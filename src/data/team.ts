import type { TeamMember } from "@/types";

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    slug: "nasim-parsa",
    name: "نسیم پارسا",
    role: "مدیرعامل",
    bio: "بیش از ۱۵ سال تجربه در صنعت حمل‌ونقل شهری و فناوری‌های موبایلی. رهبری تیم تپسی از زمان تأسیس.",
    image: "/assets/images 1.jpg",
    email: "ceo@tapsi.ir",
  },
  {
    id: "2",
    slug: "reza-moradi",
    name: "رضا مرادی",
    role: "مدیر فناوری",
    bio: "معماری سیستم‌های مقیاس‌پذیر و توسعه پلتفرم‌های میلیون کاربری. فارغ‌التحصیل مهندسی کامپیوتر از شریف.",
    image: "/assets/images 2.jpg",
    email: "cto@tapsi.ir",
  },
  {
    id: "3",
    slug: "sara-hosseini",
    name: "سارا حسینی",
    role: "مدیر محصول",
    bio: "طراحی تجربه کاربری مسافران و سفیران. تمرکز بر سادگی، سرعت و امنیت در هر ویژگی جدید.",
    image: "/assets/images 3.jpg",
    email: "product@tapsi.ir",
  },
  {
    id: "4",
    slug: "amir-kazemi",
    name: "امیر کاظمی",
    role: "مدیر عملیات",
    bio: "بهینه‌سازی شبکه رانندگان در ۴۰ شهر. متخصص لجستیک شهری و مدیریت بحران.",
    image: "/assets/کویر.jpg",
    email: "ops@tapsi.ir",
  },
];

export function getTeamMemberBySlug(slug: string): TeamMember | undefined {
  return teamMembers.find((m) => m.slug === slug);
}
