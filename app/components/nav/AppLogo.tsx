import Link from "next/link";
import { MdMessage } from "react-icons/md";

export default function AppLogo() {
  return (
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
}
