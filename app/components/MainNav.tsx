"use client";

import {
  MdMessage,
  MdPostAdd,
  MdWysiwyg,
  MdLogout,
  MdOutlinePerson,
} from "react-icons/md";
import { useState } from "react";
import Link from "next/link";
import Login from "./Login";

const MainNav: React.FC<{}> = () => {
  //   const { user, googleSignIn, logout } = UserAuth();
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  const newPostBtn = (
    <Link
      href="posts/new"
      type="button"
      className="bg-neutral-700 shadow-2xl hover:bg-neutral-500 text-white font-semibold py-2 px-4 min-h-[50px] rounded flex items-center"
    >
      <MdPostAdd size={30} />
      <p className="xs:hidden">New post</p>
    </Link>
  );

  const postBoardBtn = (
    <Link
      href="/posts"
      type="button"
      className="bg-neutral-700 shadow-2xl hover:bg-neutral-500 text-white font-semibold py-2 px-4 min-h-[50px] rounded flex items-center"
    >
      <MdWysiwyg size={30} />
      <p className="xs:hidden">Board</p>
    </Link>
  );

  const logoutBtn = (
    <button
      onClick={() => {
        handleMenuToggle();
      }}
      type="button"
      className="bg-neutral-700 shadow-2xl w-full hover:bg-neutral-500 justify-around text-white font-semibold py-2 px-4 sm:px-2 mr-4 rounded flex items-center"
    >
      <MdLogout size={30} />
      <p>Logout</p>
    </button>
  );

  const profileLink = (
    <Link
      onClick={() => handleMenuToggle()}
      href={"profile"} //`/profile/${user?.uid}`
      className="bg-neutral-700 shadow-2xl w-full justify-around hover:bg-neutral-500 text-white font-semibold py-2 px-4 sm:px-2 mr-4  rounded flex items-center"
    >
      <MdOutlinePerson size={30} />
      Profile
    </Link>
  );

  const appLogo = (
    <Link
      href="/"
      className="flex cursor-pointer align-middle justify-center items-center min-h-[50px]"
    >
      <MdMessage size={40} />
      <p className="xs:text-lg sm:text-lg md:text-2xl text-3xl font-bold">
        osts App
      </p>
    </Link>
  );

  return (
    <nav className="fixed bg-opacity-50 py-2 pb-2 top-0 left-0 right-0 flex justify-between px-10 xs:px-4 items-center bg-neutral-800 border-b-neutral-300 border-b-2 z-10">
      {appLogo}
      <ul className="flex gap-4 items-center relative">
        <li>{postBoardBtn}</li>
        <li>
          <Login />
        </li>
        {showMenu && UserMenu()}
      </ul>
    </nav>
  );

  function UserMenu() {
    return (
      <div
        onClick={() => setShowMenu(false)}
        className="fixed inset-0 z-40 bg-neutral-200 bg-opacity-0"
      >
        <div
          onMouseLeave={() => setShowMenu(false)}
          className="border-neutral-900 border-2 absolute right-0 top-[70px] z-50 bg-neutral-100 shadow-lg px-1 py-1 rounded-md min-w-[150px]"
        >
          <div className="flex flex-col items-center gap-2 w-full m-2 justify-around">
            {profileLink}
            {logoutBtn}
          </div>
        </div>
      </div>
    );
  }
};

export default MainNav;
