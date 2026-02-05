import { client } from "@/sanity/lib/client";
import { IPost } from "@/lib/types";
import PostPreview from "@/components/blog/post-preview";

async function getPosts(): Promise<IPost[]> {
  return client.fetch(
    `*[_type == "post" && defined(slug.current)] | order(date desc) {
      _id,
      "slug": slug.current,
      title,
      date,
      content
    }`,
  );
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main className="max-w-6xl px-4 pt-40 md:pt-48">
      <h1 className=" font-semibold mb-12">Blog</h1>
      {posts.length === 0 ? (
        <p className="text-esrs-dark-gray">No posts yet.</p>
      ) : (
        <div>
          {posts.map((post) => (
            <PostPreview key={post._id} post={post} />
          ))}
        </div>
      )}
    </main>
  );
}
