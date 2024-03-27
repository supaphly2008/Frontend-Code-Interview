// Component for a section with border top
import { ReactNode } from "react";

export default function Section({ children }: { children: ReactNode }) {
  return <div className="mt-6 border-t pt-6">{children}</div>;
}
