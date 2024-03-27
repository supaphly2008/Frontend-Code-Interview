// Component for a paragraph
import { ReactNode } from "react";

interface Props {
  margin?: number;
  children: ReactNode; // Explicitly define children prop type as ReactNode
}

export default function Paragraph({ margin = 1, children }: Props) {
  return <p className={`mt-${margin}`}>{children}</p>;
}
