// Layout.tsx
import { ReactNode, useState } from "react";

import Header from "@/components/Header";
import SideMenu from "@/components/SideMenu";

const Layout = ({ children }: { children: ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Header */}
      <Header toggleMenu={toggleMenu} />

      {/* Main Content */}
      <main className={`flex-1 mt-16 bg-amber-50 p-4 min-h-screen`}>
        {children}
      </main>

      <div className="relative">
        <SideMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

        {/* Overlay */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-10"
            onClick={toggleMenu}
          />
        )}
      </div>
    </>
  );
};

export default Layout;
