"use client";

import Image from "next/image";
import UserMenu from "./UserMenu";
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
        className="rounded-full border-2 border-neutral-100"
        src={image}
        alt="User image"
        priority
      />
      {userMenu && <UserMenu closeModal={handleModal} />}
    </li>
  );
}
