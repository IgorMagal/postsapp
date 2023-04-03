import Login from "../../auth/Login";
import AppLogo from "./AppLogo";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../pages/api/auth/[...nextauth]";
import Logged from "@/app/auth/Logged";
import { signOut } from "next-auth/react";

export default async function MainNav() {
  const session = await getServerSession(authOptions);
  console.log(session?.user?.name);

  return (
    <nav className="fixed bg-opacity-50 py-2 pb-2 top-0 left-0 right-0 flex justify-between px-10 xs:px-4 items-center bg-neutral-800 border-b-neutral-300 border-b-2 z-10">
      <AppLogo />
      <ul className="flex gap-4 items-center relative">
        {session?.user?.image ? (
          <li>
            <Logged image={session.user?.image} />
          </li>
        ) : (
          <li>
            <Login />
          </li>
        )}
      </ul>
    </nav>
  );
}
