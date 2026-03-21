"use client";

import { useState } from "react";
import { IPost } from "@/lib/types";
import Post from "./post";

const PAGE_SIZE = 5;

interface PostListProps {
  posts: IPost[];
}

export default function PostList({ posts }: PostListProps) {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const hasMore = visibleCount < posts.length;

  return (
    <div>
      {posts.slice(0, visibleCount).map((post) => (
        <Post key={post._id} post={post} />
      ))}
      {hasMore && (
        <button
          onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
          className="text-esrs-dark-gray hover:text-esrs-black transition-colors mt-4 mb-16"
        >
          Load more &darr;
        </button>
      )}
    </div>
  );
}
