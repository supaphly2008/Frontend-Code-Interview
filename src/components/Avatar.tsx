import React, { ReactNode } from "react";
import Image from "next/image";

interface Props {
  children?: ReactNode; // Explicitly define children prop type as ReactNode
  src?: string;
  alt?: string;
}

const getInitials = (str: string) => {
  // Split the string into words
  const words = str.split(" ");
  // Get the first letter of each word and concatenate them together
  const initials = words.map((word) => word.charAt(0)).join("");
  return initials;
};

export default function Avatar({ src, alt, children }: Props) {
  // Render text if children is provided
  if (children) {
    return (
      <div className="w-[100px] h-[100px] bg-amber-300 uppercase rounded-full overflow-hidden flex justify-center items-center text-[32px] font-bold text-white">
        <span>{getInitials(children as string)}</span>
      </div>
    );
  }

  // Render image if src is provided
  if (src) {
    return (
      <div className="w-[100px] h-[100px] bg-amber-300 rounded-full overflow-hidden flex justify-center items-center text-[32px] font-bold text-white">
        <div className="relative w-full h-full">
          <Image
            src={src}
            alt={alt || ""} // Provide empty string as alt if alt is not provided
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
      </div>
    );
  }

  // Return null if neither children nor src is provided
  return null;
}
