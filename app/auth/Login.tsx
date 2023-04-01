"use client";

import { signIn } from "next-auth/react";
import { MdOutlinePerson } from "react-icons/md";

export default function Login() {
  return (
    <MdOutlinePerson
      onClick={() => signIn()}
      size={40}
      className="cursor-pointer border-2 border-neutral-50 text-white hover:bg-neutral-600 rounded-full"
    />
  );
}
