"use client";

import Image from "next/image";
import { signOut } from "next-auth/react";
import Link from "next/link";
import UserMenu from "../components/nav/UserMenu";
import { useState } from "react";

type User = {
  image: string;
};

export default function Logged({ image }: User) {
  const handleModal = () => {
    setUserMenu(false);
  };

  const [userMenu, setUserMenu] = useState(false);
  return (
    <li>
      <Image
        onClick={() => setUserMenu(true)}
        width={40}
        height={40}
        className="w-14 rounded-full"
        src={image}
        alt=""
        priority
      />
      {userMenu && <UserMenu closeModal={handleModal} />}
    </li>
  );
}
