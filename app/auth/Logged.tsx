"use client";

import Image from "next/image";
import { signOut } from "next-auth/react";
import Link from "next/link";

type User = {
  image: string;
};

export default function Logged({ image }: User) {
  return (
    <Link href={"/"}>
      <Image
        width={40}
        height={40}
        className="w-14 rounded-full"
        src={image}
        alt=""
        priority
      />
    </Link>
  );
}
