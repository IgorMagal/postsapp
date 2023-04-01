import Login from "../../auth/Login";
import AppLogo from "./AppLogo";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function MainNav() {
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <nav className="fixed bg-opacity-50 py-2 pb-2 top-0 left-0 right-0 flex justify-between px-10 xs:px-4 items-center bg-neutral-800 border-b-neutral-300 border-b-2 z-10">
      <AppLogo />
      <ul className="flex gap-4 items-center relative">
        <li>{session ? session?.user?.name : <Login />}</li>
      </ul>
    </nav>
  );
}
