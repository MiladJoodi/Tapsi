import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { PageHeader } from "@/components/common/PageHeader";

export function DetailPageShell({
  title,
  breadcrumbs,
  children,
}: {
  title: string;
  breadcrumbs: { label: string; href?: string }[];
  children: React.ReactNode;
}) {
  return (
    <>
      <Breadcrumb items={breadcrumbs} />
      <PageHeader title={title} />
      <div className="container mx-auto max-w-[1140px] px-8 pb-20">{children}</div>
    </>
  );
}

export function assertFound<T>(value: T | undefined): T {
  if (!value) notFound();
  return value;
}
