import { useState, useEffect } from "react";

export default function Header() {
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

  return (
    <div
      className={`fixed z-10 top-0 w-full transition-all duration-300 ${visible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <header className="bg-gray-800 text-white p-4 text-center">
        <h1 className="text-2xl">Jedi Software</h1>
      </header>
    </div>
  );
}
