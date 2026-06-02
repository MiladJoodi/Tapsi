import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { PageHeader } from "@/components/common/PageHeader";

export default function NotFound() {
  return (
    <div className="container mx-auto max-w-[1140px] px-8 py-24 text-center">
      <PageHeader
        title="۴۰۴ — صفحه یافت نشد"
        subtitle="صفحه‌ای که به دنبال آن هستید وجود ندارد یا منتقل شده است."
      />
      <p className="text-[6rem] font-bold text-primary mb-8">۴۰۴</p>
      <Button href="/">بازگشت به صفحه اصلی</Button>
      <p className="mt-8">
        <Link href="/contact" className="text-primary no-underline hover:underline">
          تماس با پشتیبانی
        </Link>
      </p>
    </div>
  );
}
