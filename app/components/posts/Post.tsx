"use client";
import { MdOutlinePerson, MdTextSnippet } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import IPost from "@/app/api/models/IPost";

function Post(props: IPost) {
  const { createdAt, id, title, user } = props;

  return (
    <div className="m-2 p-1 mx-5 border-2 rounded-lg border-neutral-900 bg-neutral-100 shadow-xl hover:scale-105 shadow-neutral-900 hover:border-white text-neutral-800">
      <div className="flex justify-between">
        <div className="flex py-2 px-4 gap-2 items-start align-middle">
          <div className="border-2 border-neutral-800 rounded-full">
            {user.image ? (
              <Image
                width={30}
                height={30}
                className="rounded-full border-1 border-black  cursor-pointer"
                src={user.image}
                alt={user.name}
              />
            ) : (
              <MdOutlinePerson size={35} />
            )}
          </div>
          <p className="font-semibold py-2 align-top italic ">{user.name}</p>
        </div>
        <p className="italic text-xs py-4 px-3">{createdAt.toString()}</p>
      </div>
      <p className="text-neutral-900 p-2 text-justify border-2 border-neutral-300 rounded-md">
        {title}
      </p>
      <div className="flex justify-between px-4 py-2">
        <p>0 Comments</p>
        <div className="flex items-center gap-1 hover:font-semibold hover:text-neutral-800">
          <MdTextSnippet size={20} />
          <Link href={id}>Details</Link>
        </div>
      </div>
    </div>
  );
}

export default Post;
