import { useState, useEffect } from "react";

export default function useIsTablet(breakpoint = 768) {
  const [isTablet, setIsTablet] = useState(window.innerWidth <= breakpoint);

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth <= breakpoint);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isTablet;
}
