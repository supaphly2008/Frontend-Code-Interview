// Component for a section with border top
import { ReactNode } from "react";

interface Props {
  children: ReactNode; // Explicitly define children prop type as ReactNode
}

export default function Section({ children }: Props) {
  return <div className="mt-6 border-t pt-6">{children}</div>;
}
