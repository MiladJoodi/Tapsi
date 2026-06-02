import Image from "next/image";
import { createMetadata } from "@/lib/metadata";
import { assertFound, DetailPageShell } from "@/lib/page-helpers";
import { blogPosts, getBlogPostBySlug } from "@/data/blog";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return createMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${slug}`,
  });
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = assertFound(getBlogPostBySlug(slug));

  return (
    <DetailPageShell
      title={post.title}
      breadcrumbs={[
        { label: "خانه", href: "/" },
        { label: "وبلاگ", href: "/blog" },
        { label: post.title },
      ]}
    >
      <div className="flex flex-wrap gap-4 text-[#999] text-[1.3rem] mb-8">
        <span>{post.author}</span>
        <span>•</span>
        <span>{post.date}</span>
        <span>•</span>
        <span>{post.readTime}</span>
        <span>•</span>
        <span className="text-primary">{post.category}</span>
      </div>
      <Image
        src={post.image}
        alt={post.title}
        width={900}
        height={450}
        className="w-full rounded-[20px] mb-10"
      />
      <div className="prose prose-lg max-w-none text-justify leading-relaxed">
        {post.content.split("\n").map((para) => (
          <p key={para.slice(0, 40)} className="mb-6">
            {para}
          </p>
        ))}
      </div>
    </DetailPageShell>
  );
}
