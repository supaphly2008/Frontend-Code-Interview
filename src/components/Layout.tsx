// Layout.tsx
import { ReactNode } from "react";

import Header from "@/components/Header";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Header />
      <main className="mt-16 bg-amber-50 p-4 min-h-screen">{children}</main>
    </div>
  );
};

export default Layout;
