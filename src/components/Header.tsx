import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header({ toggleMenu }: { toggleMenu: any }) {
  const router = useRouter();

  const [scrollPos, setScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  // add scroll event and set scroll Y position on component load
  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPos > prevScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }

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
