"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We hop on a call and talk about your goals, your audience, and what you need. No jargon, no pressure—just a conversation about your vision.",
  },
  {
    number: "02",
    title: "Plan & Design",
    description:
      "I put together a clear plan with a timeline and cost. You'll see the design before any code is written, so there are no surprises.",
  },
  {
    number: "03",
    title: "Build & Review",
    description:
      "I build your site and share progress along the way. You give feedback, I make adjustments. You're in the loop the entire time.",
  },
  {
    number: "04",
    title: "Launch & Support",
    description:
      "We go live. I walk you through everything, make sure you're comfortable, and stick around to help if anything comes up.",
  },
];

export function ProcessSteps() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          setRevealed(true);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="grid gap-4 sm:gap-6 md:grid-cols-2">
      {steps.map((step, i) => (
        <div
          key={step.number}
          className="rounded-xl border border-ctp-surface0 bg-ctp-mantle p-5 sm:p-6"
          style={{
            opacity: revealed ? 1 : 0,
            transform: revealed ? "translateY(0)" : "translateY(30px)",
            transition: `opacity 0.5s ease-out ${i * 120}ms, transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${i * 120}ms`,
          }}
        >
          <span className="font-mono text-2xl font-extrabold text-ctp-mauve sm:text-3xl">
            {step.number}
          </span>
          <h3 className="mt-2 font-mono text-lg font-bold tracking-normal text-ctp-text sm:text-xl">
            {step.title}
          </h3>
          <p className="mt-2 text-sm font-light leading-relaxed text-ctp-subtext0 sm:text-base">
            {step.description}
          </p>
        </div>
      ))}
    </div>
  );
}
