"use client";

import { signOut } from "next-auth/react";
import Link from "next/link";
import { MdLogout, MdOutlinePerson } from "react-icons/md";

function UserMenu({ closeModal }: { closeModal: () => void }) {
  const logoutBtn = (
    <button
      onClick={() => signOut()}
      type="button"
      className="bg-neutral-700 shadow-2xl w-full hover:bg-neutral-500 justify-around text-white font-semibold py-2 px-4 sm:px-2 mr-4 rounded flex items-center"
    >
      <MdLogout size={30} />
      <p>Logout</p>
    </button>
  );

  const profileLink = (
    <Link
      href={"profile"}
      className="bg-neutral-700 shadow-2xl w-full justify-around hover:bg-neutral-500 text-white font-semibold py-2 px-4 sm:px-2 mr-4  rounded flex items-center"
    >
      <MdOutlinePerson size={30} />
      Profile
    </Link>
  );
  return (
    <div
      onClick={() => {
        console.log("Mouse leave event fired");
        closeModal();
      }}
      className="fixed inset-0 z-40 bg-neutral-200 bg-opacity-0"
    >
      <div
        // onMouseLeave={() => closeModal()}
        className="border-neutral-900 border-2 absolute right-2 top-[50px] z-50 bg-neutral-100 shadow-lg px-1 py-1 rounded-md min-w-[150px] "
      >
        <div className="flex flex-col items-center gap-2 w-full m-2 justify-around">
          {profileLink}
          {logoutBtn}
        </div>
      </div>
    </div>
  );
}

export default UserMenu;
