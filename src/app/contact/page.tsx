import { createMetadata } from "@/lib/metadata";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata = createMetadata({
  title: "تماس با ما",
  description: "راه‌های ارتباط با پشتیبانی تپسی — تلفن ۱۶۳۰، ایمیل و فرم تماس.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <Breadcrumb
        items={[{ label: "خانه", href: "/" }, { label: "تماس با ما" }]}
      />
      <ContactSection />
    </>
  );
}
