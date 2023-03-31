import { Suspense } from "react";
import Loading from "../../loading";

export default function PostsPage() {
  return (
    <Suspense fallback={<Loading />}>
      <h1 className="text-3xl font-bold underline">Posts</h1>
    </Suspense>
  );
}
