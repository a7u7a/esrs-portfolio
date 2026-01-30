import { Metadata } from "next";
import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { IPost } from "@/lib/types";
import Post from "@/components/blog/post";
import Link from "next/link";

interface PageProps {
  params: Promise<{ slug: string }>;
}

async function getPost(slug: string): Promise<IPost | null> {
  return client.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      _id,
      "slug": slug.current,
      title,
      date,
      content[]{
        ...,
        _type == "image" => {
          ...,
          asset->
        }
      }
    }`,
    { slug },
  );
}

async function getAllSlugs(): Promise<{ slug: string }[]> {
  return client.fetch(
    `*[_type == "post" && defined(slug.current)] {
      "slug": slug.current
    }`,
  );
}

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="max-w-6xl px-4 pt-40 md:pt-48">
      <Link
        href="/blog"
        className="text-esrs-dark-gray hover:text-esrs-black transition-colors mb-8 inline-block"
      >
        &larr; Back to Blog
      </Link>
      <Post post={post} />
    </main>
  );
}
