import Link from "next/link";
import { MdWysiwyg } from "react-icons/md";

export default function PostsBtn() {
  return (
    <li>
      <Link
        href="/posts"
        type="button"
        className="bg-neutral-700 shadow-2xl hover:bg-neutral-500 text-white font-semibold py-2 px-4 min-h-[50px] rounded flex items-center"
      >
        <MdWysiwyg size={30} />
        <p className="xs:hidden">Board</p>
      </Link>
    </li>
  );
}
