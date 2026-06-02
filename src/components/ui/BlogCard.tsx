import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/types";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="rounded-[20px] overflow-hidden shadow-[0_0_20px_10px_#efefef] bg-white">
      <Link href={`/blog/${post.slug}`}>
        <Image
          src={post.image}
          alt={post.title}
          width={400}
          height={220}
          className="w-full h-[220px] object-cover"
        />
      </Link>
      <div className="p-6">
        <span className="text-primary text-[1.2rem]">{post.category}</span>
        <h3 className="text-[1.8rem] mt-2 mb-4">
          <Link href={`/blog/${post.slug}`} className="no-underline text-inherit hover:text-primary">
            {post.title}
          </Link>
        </h3>
        <p className="text-[1.4rem] mb-4">{post.excerpt}</p>
        <div className="flex justify-between text-[#999] text-[1.2rem]">
          <span>{post.author}</span>
          <span>{post.readTime}</span>
        </div>
      </div>
    </article>
  );
}
