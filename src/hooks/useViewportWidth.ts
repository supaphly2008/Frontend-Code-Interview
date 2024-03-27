import { useState, useEffect } from "react";

export function useViewportWidth() {
  const [viewportWidth, setViewportWidth] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setViewportWidth(width);
      setIsMobile(width <= 768); // Assuming 768px as the breakpoint for mobile devices
    };

    // Initial width on component mount
    handleResize();

    window.addEventListener("resize", handleResize);

    // Cleanup event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { viewportWidth, isMobile };
}
