import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/common/PageHeader";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { careers } from "@/data/careers";

export const metadata = createMetadata({
  title: "فرصت‌های شغلی",
  description: "به تیم تپسی بپیوندید — موقعیت‌های شغلی باز در تهران و شهرستان‌ها.",
  path: "/careers",
});

export default function CareersPage() {
  return (
    <>
      <Breadcrumb
        items={[{ label: "خانه", href: "/" }, { label: "فرصت‌های شغلی" }]}
      />
      <PageHeader
        title="فرصت‌های شغلی"
        subtitle="ما به استعدادهای تازه نیاز داریم"
      />
      <div className="container mx-auto max-w-[1140px] px-8 pb-20 space-y-6">
        {careers.map((job) => (
          <Link
            key={job.id}
            href={`/careers/${job.slug}`}
            className="block p-8 rounded-[20px] shadow-[0_0_20px_10px_#efefef] no-underline text-inherit hover:border-primary border-2 border-transparent transition-colors"
          >
            <div className="flex flex-wrap justify-between gap-4">
              <h3 className="text-[2rem] m-0">{job.title}</h3>
              <span className="text-primary">{job.department}</span>
            </div>
            <p className="text-[#666] mt-2">
              {job.location} • {job.type}
            </p>
          </Link>
        ))}
      </div>
    </>
  );
}
