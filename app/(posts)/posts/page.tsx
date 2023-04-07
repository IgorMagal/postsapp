"use client";

import Loading from "../../loading";
import axios, { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import Post from "@/app/components/posts/Post";
import IPost from "@/app/api/models/IPost";

const posts = async () => {
  const res = await axios.get("/api/posts");
  return res.data;
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
    if (error instanceof AxiosError) {
      toast.error(error?.response?.data);
    }
  }
  return (
    <div className="text-center mt-50">
      <ul className="flex flex-wrap mx-2 my-2">
        {data?.map((post: IPost) => (
          <li
            key={post.id}
            className="w-full max-w-[50%] xs:max-w-[100%] xs:w-1/1 sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/4 grow"
          >
            <Post
              user={post.user}
              title={post.title}
              createdAt={post.createdAt}
              id={post.id}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
