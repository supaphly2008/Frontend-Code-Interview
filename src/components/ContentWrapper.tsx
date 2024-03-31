// ContentWrapper
import { ReactNode } from "react";

const ContentWrapper = ({
  isTextCenter = false,
  children,
}: {
  isTextCenter?: boolean;
  children: ReactNode;
}) => {
  return (
    <div
      className={`p-4 max-w-[720px] mx-auto bg-white rounded shadow ${isTextCenter && "text-center"}`}
    >
      {children}
    </div>
  );
};

export default ContentWrapper;
