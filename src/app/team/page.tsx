import Image from "next/image";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/common/PageHeader";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { teamMembers } from "@/data/team";

export const metadata = createMetadata({
  title: "تیم ما",
  description: "آشنایی با رهبری و تیم‌های تپسی.",
  path: "/team",
});

export default function TeamPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "خانه", href: "/" }, { label: "تیم" }]} />
      <PageHeader title="تیم تپسی" subtitle="افرادی که هر روز تپسی را می‌سازند" />
      <div className="container mx-auto max-w-[1140px] px-8 pb-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {teamMembers.map((member) => (
          <Link
            key={member.id}
            href={`/team/${member.slug}`}
            className="text-center no-underline text-inherit group"
          >
            <div className="w-[150px] h-[150px] mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:scale-105 transition-transform">
              <Image
                src={member.image}
                alt={member.name}
                width={150}
                height={150}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="mt-4 text-[1.8rem]">{member.name}</h3>
            <p className="text-primary text-[1.4rem]">{member.role}</p>
          </Link>
        ))}
      </div>
    </>
  );
}
