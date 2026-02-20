"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "100+",   label: "Sites Delivered",    color: "var(--ctp-mauve)" },
  { value: "< 2wk",  label: "Avg. Turnaround",    color: "var(--ctp-teal)"  },
  { value: "$1,500", label: "Starting Price",      color: "var(--ctp-green)" },
  { value: "Free",   label: "First Consultation",  color: "var(--ctp-peach)" },
];

export function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="border-t border-ctp-surface0">
      <div className="mx-auto grid max-w-5xl grid-cols-2 divide-x divide-y divide-ctp-surface0 md:grid-cols-4 md:divide-y-0">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className="glass-card flex flex-col items-center justify-center px-6 py-10 text-center"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: `opacity 0.5s ease-out ${i * 100}ms, transform 0.5s ease-out ${i * 100}ms`,
            }}
          >
            <span
              className="font-display text-3xl font-extrabold tracking-tight tabular-nums sm:text-4xl"
              style={{ color: s.color }}
            >
              {s.value}
            </span>
            <span className="mt-1.5 text-xs font-medium uppercase tracking-widest text-ctp-subtext0">
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
