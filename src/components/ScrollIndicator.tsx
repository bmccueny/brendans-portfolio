"use client";

import { useEffect, useState, useRef } from "react";

export function ScrollIndicator() {
  const [show, setShow] = useState(true);
  const arrowRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY < 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const el = arrowRef.current;
    if (!el) return;
    const anim = el.animate(
      [
        { transform: "translateY(0)" },
        { transform: "translateY(8px)" },
        { transform: "translateY(0)" },
      ],
      { duration: 1500, iterations: Infinity, easing: "ease-in-out" }
    );
    return () => anim.cancel();
  }, []);

  if (!show) return null;

  return (
    <a
      href="#about"
      aria-label="Scroll down"
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
    >
      <svg
        ref={arrowRef}
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-ctp-overlay1"
      >
        <path d="M12 5v14M5 12l7 7 7-7" />
      </svg>
    </a>
  );
}
