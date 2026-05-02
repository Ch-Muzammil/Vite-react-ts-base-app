import { useEffect, useState } from "react";
import { BREAKPOINTS } from "@/app/config/Constants";

type Breakpoint = "mobile" | "tablet" | "desktop" | "largeDesktop";

export const useBreakpoint = (delay: number = 200) => {
  const [width, setWidth] = useState<number>(() =>
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    let timeoutId: ReturnType<typeof setTimeout>;

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setWidth(window.innerWidth);
      }, delay);
    };

    setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", handleResize);
    };
  }, [delay]);

  const isMobile = width < BREAKPOINTS.mobile;
  const isTablet = width >= BREAKPOINTS.mobile && width < BREAKPOINTS.tablet;
  const isDesktop = width >= BREAKPOINTS.tablet && width < BREAKPOINTS.desktop;
  const isLargeDesktop = width >= BREAKPOINTS.desktop;

  let current: Breakpoint = "mobile";
  if (isTablet) current = "tablet";
  else if (isDesktop) current = "desktop";
  else if (isLargeDesktop) current = "largeDesktop";

  return { width, isMobile, isTablet, isDesktop, isLargeDesktop, current };
};
