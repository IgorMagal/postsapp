"use client";

import Loading from "../../loading";
import axios, { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import Post from "@/app/components/posts/Post";
import IPost from "@/app/models/IPost";

const posts = async () => {
  const res = await fetch("api/posts", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });
  console.log("Fetched");
  return res.json();
};

export default function PostsPage() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: posts,
  });
  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    toast.error("Unable to load posts, try again later.");
  }
  return (
    <ul className="flex flex-wrap mt-20">
      {data?.map((post: IPost) => (
        <li key={post.id}>
          <Post {...post} />
        </li>
      ))}
    </ul>
  );
}
