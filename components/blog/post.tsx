import ReactMarkdown from "react-markdown";
import { IPost } from "@/lib/types";

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
    <article className="mb-16 w-2/3">
      <header className="mb-6">
        <h2 className="font-semibold mb-1">{post.title}</h2>
        <time className="text-esrs-dark-gray" dateTime={post.date}>
          {formattedDate}
        </time>
      </header>
      {post.content && (
        <div className="">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      )}
    </article>
  );
}
