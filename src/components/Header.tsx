import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { GiHamburgerMenu } from "react-icons/gi";

import { useScroll } from "@/hooks/useScroll";

export default function Header({ toggleMenu }: { toggleMenu: any }) {
  const router = useRouter();
  const { scrollY } = useScroll();

  const [scrollPos, setScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  // set scroll y position
  useEffect(() => {
    setScrollPos(scrollY);
  }, [scrollY]);

  useEffect(() => {
    // hide header when the scroll position is greater than the previous position
    scrollPos > prevScrollPos ? setVisible(false) : setVisible(true);

    const timeoutId = setTimeout(() => {
      setPrevScrollPos(scrollPos);
    }, 200);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [scrollPos, prevScrollPos]);

  const gotoHomePage = () => {
    router.push("/");
  };

  return (
    <div
      className={`fixed z-10 top-0 w-full transition-all duration-300 ${visible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <header className="flex justify-between items-center bg-gray-800 text-white p-4 text-center">
        <GiHamburgerMenu
          className="text-[24px] cursor-pointer"
          onClick={toggleMenu}
        />
        <h1 className="text-2xl cursor-pointer" onClick={gotoHomePage}>
          Jedi Software
        </h1>
      </header>
    </div>
  );
}
