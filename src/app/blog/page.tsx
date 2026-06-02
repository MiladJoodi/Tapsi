import { createMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/common/PageHeader";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { BlogCard } from "@/components/ui/BlogCard";
import { blogPosts } from "@/data/blog";

export const metadata = createMetadata({
  title: "وبلاگ",
  description: "اخبار، راهنماها و مقالات تخصصی تپسی.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "خانه", href: "/" }, { label: "وبلاگ" }]} />
      <PageHeader title="وبلاگ تپسی" subtitle="آخرین مطالب و اخبار" />
      <div className="container mx-auto max-w-[1140px] px-8 pb-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </>
  );
}
