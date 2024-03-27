import React, { ReactNode } from "react";
import Image from "next/image";

interface Props {
  children?: ReactNode; // Explicitly define children prop type as ReactNode
  src?: string;
  alt?: string;
  size?: number; // size of width and height in px
}

const getInitials = (str: string) => {
  // Split the string into words
  const words = str.split(" ");
  // Get the first letter of each word and concatenate them together
  const initials = words.map((word) => word.charAt(0)).join("");
  return initials;
};

export default function Avatar({ size = 100, src, alt, children }: Props) {
  // Render text if children is provided
  if (children) {
    return (
      <div
        className="bg-amber-300 uppercase rounded-full flex justify-center items-center text-[32px] font-bold text-white"
        style={{ height: `${size}px`, width: `${size}px` }}
      >
        <span>{getInitials(children as string)}</span>
      </div>
    );
  }

  // Render image if src is provided
  if (src) {
    return (
      <div
        className="rounded-full flex justify-center items-center"
        style={{ height: `${size}px`, width: `${size}px` }}
      >
        <div className="relative w-full h-full">
          <Image
            src={src}
            alt={alt || ""}
            layout="responsive" // Update layout prop to "responsive"
            width={size} // Set width and height for responsive layout
            height={size}
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
