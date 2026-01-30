import { IPost } from "@/lib/types";
import Link from "next/link";

interface PostPreviewProps {
  post: IPost;
}

export default function PostPreview({ post }: PostPreviewProps) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="mb-8">
      <Link href={`/blog/${post.slug}`} className="group block">
        <h2 className="font-semibold mb-1 group-hover:underline">
          {post.title}
        </h2>
        <time className="text-esrs-dark-gray" dateTime={post.date}>
          {formattedDate}
        </time>
      </Link>
    </article>
  );
}
