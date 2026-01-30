import { IPost } from "@/lib/types";
import BlogPortableText from "./portable-text";

interface PostProps {
  post: IPost;
}

export default function Post({ post }: PostProps) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="mb-16 w-full sm:w-2/3">
      <header className="mb-6">
        <h2 className="font-semibold mb-1">{post.title}</h2>
        <time className="text-esrs-dark-gray" dateTime={post.date}>
          {formattedDate}
        </time>
      </header>
      {post.content && post.content.length > 0 && (
        <div>
          <BlogPortableText value={post.content} />
        </div>
      )}
    </article>
  );
}
