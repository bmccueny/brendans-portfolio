"use client";

import { useEffect, useRef } from "react";

export function PulsingDot() {
  const dotRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = dotRef.current;
    if (!el) return;
    const anim = el.animate(
      [
        { opacity: 1, boxShadow: "0 0 4px var(--ctp-green)" },
        { opacity: 0.4, boxShadow: "0 0 10px var(--ctp-green)" },
        { opacity: 1, boxShadow: "0 0 4px var(--ctp-green)" },
      ],
      { duration: 2000, iterations: Infinity, easing: "ease-in-out" }
    );
    return () => anim.cancel();
  }, []);

  return (
    <span
      ref={dotRef}
      className="h-2 w-2 rounded-full bg-ctp-green"
    />
  );
}
