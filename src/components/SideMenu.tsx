import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { LuRat } from "react-icons/lu";

import Avatar from "@/components/Avatar";

export default function SideMenu({ isOpen }: { isOpen: boolean }) {
  return (
    <div
      className={`w-64 h-full bg-gray-600 fixed top-0 left-0 z-20 transition-transform duration-300 ease-in-out transform ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      <div className="h-[150px] flex justify-center items-center border-b border-gray-500">
        <Avatar>Jedi Software</Avatar>
      </div>
      <nav className="text-white">
        <ul className="mt-2">
          <li className="transition-bg duration-300 hover:bg-gray-700">
            <Link className="p-3 flex items-center" href="/">
              <FaHome className="mr-2" />
              <p className="capitalize">Home</p>
            </Link>
          </li>
          <li className="transition-bg duration-300 hover:bg-gray-700">
            <Link className="p-3 flex items-center" href="/find-the-cheese">
              <LuRat className="mr-2" />
              <p className="capitalize">Find the Cheese</p>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
