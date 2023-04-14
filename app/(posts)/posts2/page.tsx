"use client";

import Loading from "../../loading";
import Post from "@/app/components/posts/Post";
import IPost from "@/app/models/IPost";
import { Suspense } from "react";

const posts = async () => {
  const res = await fetch("api/posts", {
    next: {
      revalidate: 1,
    },
  });
  console.log("Fetched");
  return res.json();
};

export default async function PostsPage() {
  const data = await posts();

  return (
    <Suspense fallback={<Loading />}>
      <ul className="flex flex-wrap mt-20">
        {data?.map((post: IPost) => (
          <li key={post.id}>
            <Post {...post} />
          </li>
        ))}
      </ul>
    </Suspense>
  );
}
