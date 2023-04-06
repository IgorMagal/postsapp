import Link from "next/link";
import { MdPostAdd } from "react-icons/md";

export default function NewPostBtn() {
  return (
    <li>
      <Link
        href="posts/new"
        type="button"
        className="bg-neutral-700 shadow-2xl hover:bg-neutral-500 text-white font-semibold py-2 px-4 min-h-[50px] rounded flex items-center"
      >
        <MdPostAdd size={30} />
        <p className="xs:hidden">New post</p>
      </Link>
    </li>
  );
}
