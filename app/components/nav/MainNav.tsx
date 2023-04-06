import Login from "./Login";
import AppLogo from "./AppLogo";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../pages/api/auth/[...nextauth]";
import Logged from "@/app/components/nav/Logged";
import NewPostBtn from "./NewPostBtn";
import PostsBtn from "./PostsBtn";

export default async function MainNav() {
  const session = await getServerSession(authOptions);

  return (
    <nav className="fixed bg-opacity-50 py-2 top-0 left-0 right-0 flex justify-between px-4 xs:px-4 items-center bg-neutral-800 border-b-neutral-300 border-b-2 z-10">
      <AppLogo />
      <ul className="flex gap-4 items-center relative">
        <PostsBtn />
        {session?.user?.image ? (
          <>
            <NewPostBtn />
            <Logged image={session.user?.image} />
          </>
        ) : (
          <Login />
        )}
      </ul>
    </nav>
  );
}
