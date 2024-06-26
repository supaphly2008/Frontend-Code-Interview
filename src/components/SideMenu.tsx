import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { LuRat } from "react-icons/lu";
import { useRouter } from "next/router"; // Import useRouter hook
import { RxAvatar } from "react-icons/rx";

import Avatar from "@/components/Avatar";

const MENU_ITEMS = [
  {
    path: "/",
    text: "Home",
    icon: <FaHome />,
  },
  {
    path: "/find-the-cheese",
    text: "Find the Cheese",
    icon: <LuRat />,
  },
  {
    path: "/about",
    text: "About me",
    icon: <RxAvatar />,
  },
];

export default function SideMenu({
  isMenuOpen,
  toggleMenu,
}: {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}) {
  const router = useRouter(); // Initialize useRouter hook

  return (
    <div
      className={`w-64 h-full bg-gray-600 fixed top-0 left-0 z-20 transition-transform duration-300 ease-in-out transform ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      <div className="h-[150px] flex justify-center items-center border-b border-gray-500">
        <Avatar>Jedi Software</Avatar>
      </div>
      <nav className="text-white">
        <ul className="mt-2">
          {MENU_ITEMS.map((menu, index) => (
            <li
              className={`transition-bg duration-300 hover:bg-gray-700 ${router.pathname === menu.path ? "bg-gray-700" : ""}`}
              key={index}
            >
              <Link
                className="p-3 flex items-center"
                href={menu.path}
                onClick={toggleMenu}
              >
                <div className="mr-2">{menu.icon}</div>
                <p className="capitalize">{menu.text}</p>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
