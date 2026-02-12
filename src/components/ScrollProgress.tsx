"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "Hero" },
  { id: "about", label: "About" },
  { id: "process", label: "Process" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export function ScrollProgress() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = document.getElementById("page-content");
    if (!container) return;

    const observers = sections.map(({ id }, index) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveIndex(index);
        },
        { threshold: 0.5, root: container }
      );

      observer.observe(el);
      return observer;
    });

    return () => observers.forEach((obs) => obs?.disconnect());
  }, []);

  return (
    <div className="fixed right-6 top-1/2 z-50 hidden -translate-y-1/2 md:flex">
      <div className="flex flex-col items-center gap-3">
        {sections.map(({ id }, i) => (
          <a
            key={id}
            href={`#${id}`}
            aria-label={`Go to ${sections[i].label}`}
            className="block transition-all duration-300"
            style={{
              width: i === activeIndex ? 10 : 6,
              height: i === activeIndex ? 10 : 6,
              borderRadius: "50%",
              backgroundColor: i === activeIndex
                ? "var(--ctp-mauve)"
                : "var(--ctp-surface1)",
              boxShadow: i === activeIndex
                ? "0 0 8px rgba(203, 166, 247, 0.5)"
                : "none",
            }}
          />
        ))}
      </div>
    </div>
  );
}
