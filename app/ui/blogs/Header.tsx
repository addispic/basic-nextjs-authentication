import Link from "next/link";
// icons
import { FaBlog } from "react-icons/fa";
// sub components
import LogoutButton from "./LogoutButton";
import GetUsername from "../users/GetUsername";

export default function BlogsHeader() {
  return (
    <header className="flex items-center justify-between px-[.5rem] bg-white border-b border-neutral-200">
      {/* left */}
      <div>
        <Link
          href={"/"}
          className="flex items-center justify-start gap-x-1.5 text-green-500 transition-colors ease-in-out duration-150 hover:text-green-600"
        >
          <FaBlog className="text-xl" />
          <span className="font-black">blogs</span>
        </Link>
      </div>
      {/* right */}
      <div className="flex items-center justify-end gap-x-3">
        {/* profile */}
        <div className="flex items-center gap-x-1.5 cursor-pointer">
          <div className="text-sm text-green-600">
            <GetUsername />
          </div>
          <div className="w-[26px] aspect-square rounded-full flex items-center justify-center bg-green-500 font-medium  text-white">
            A
          </div>
        </div>
        {/* logout */}
        <LogoutButton />
      </div>
    </header>
  );
}
