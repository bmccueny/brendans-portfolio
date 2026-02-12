"use client";

import { useEffect, useRef, useState } from "react";

type Phase = "idle" | "flying" | "impact" | "settled";

export function CollideHeading() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLSpanElement>(null);
  const rightRef = useRef<HTMLSpanElement>(null);
  const [phase, setPhase] = useState<Phase>("idle");

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          setPhase("flying");
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (phase !== "flying") return;
    const left = leftRef.current;
    const right = rightRef.current;
    if (!left || !right) return;

    // Fly in from opposite sides
    const leftAnim = left.animate(
      [
        { transform: "translateX(-120px)", opacity: 0 },
        { transform: "translateX(-120px)", opacity: 1, offset: 0.1 },
        { transform: "translateX(0)", opacity: 1 },
      ],
      { duration: 600, easing: "cubic-bezier(0.22, 1, 0.36, 1)", fill: "forwards" }
    );

    const rightAnim = right.animate(
      [
        { transform: "translateX(120px)", opacity: 0 },
        { transform: "translateX(120px)", opacity: 1, offset: 0.1 },
        { transform: "translateX(0)", opacity: 1 },
      ],
      { duration: 600, easing: "cubic-bezier(0.22, 1, 0.36, 1)", fill: "forwards" }
    );

    leftAnim.onfinish = () => setPhase("impact");

    return () => {
      leftAnim.cancel();
      rightAnim.cancel();
    };
  }, [phase]);

  // Impact: shake + flash + particles
  useEffect(() => {
    if (phase !== "impact") return;
    const container = containerRef.current;
    const left = leftRef.current;
    const right = rightRef.current;
    if (!container || !left || !right) return;

    // Screen shake on the container
    const shake = container.animate(
      [
        { transform: "translateX(0)" },
        { transform: "translateX(-4px) rotate(-0.5deg)" },
        { transform: "translateX(4px) rotate(0.5deg)" },
        { transform: "translateX(-3px)" },
        { transform: "translateX(3px)" },
        { transform: "translateX(-1px)" },
        { transform: "translateX(0)" },
      ],
      { duration: 400, easing: "ease-out" }
    );

    // Bounce recoil on each word
    left.animate(
      [
        { transform: "translateX(0) scale(1)" },
        { transform: "translateX(-6px) scale(1.08, 0.94)" },
        { transform: "translateX(2px) scale(0.97, 1.02)" },
        { transform: "translateX(0) scale(1)" },
      ],
      { duration: 500, easing: "ease-out", fill: "forwards" }
    );

    right.animate(
      [
        { transform: "translateX(0) scale(1)" },
        { transform: "translateX(6px) scale(1.08, 0.94)" },
        { transform: "translateX(-2px) scale(0.97, 1.02)" },
        { transform: "translateX(0) scale(1)" },
      ],
      { duration: 500, easing: "ease-out", fill: "forwards" }
    );

    // Spawn particles at collision point
    spawnParticles(container);

    shake.onfinish = () => setPhase("settled");

    return () => shake.cancel();
  }, [phase]);

  return (
    <div
      ref={containerRef}
      className="relative mb-4 inline-flex items-baseline justify-center gap-[0.3em] text-2xl font-bold tracking-tight text-ctp-text sm:mb-6 sm:text-3xl"
    >
      <span
        ref={leftRef}
        style={{ opacity: phase === "idle" ? 0 : undefined, display: "inline-block" }}
      >
        Get in
      </span>
      <span
        ref={rightRef}
        className="text-ctp-green"
        style={{ opacity: phase === "idle" ? 0 : undefined, display: "inline-block" }}
      >
        Touch
      </span>
    </div>
  );
}

function spawnParticles(container: HTMLElement) {
  const colors = [
    "var(--ctp-green)",
    "var(--ctp-teal)",
    "var(--ctp-yellow)",
    "var(--ctp-mauve)",
    "var(--ctp-text)",
  ];

  for (let i = 0; i < 12; i++) {
    const particle = document.createElement("span");
    const angle = (Math.PI * 2 * i) / 12 + (Math.random() - 0.5) * 0.4;
    const distance = 30 + Math.random() * 40;
    const size = 3 + Math.random() * 4;

    Object.assign(particle.style, {
      position: "absolute",
      left: "50%",
      top: "50%",
      width: `${size}px`,
      height: `${size}px`,
      borderRadius: "50%",
      backgroundColor: colors[Math.floor(Math.random() * colors.length)],
      pointerEvents: "none",
      zIndex: "10",
    });

    container.appendChild(particle);

    const dx = Math.cos(angle) * distance;
    const dy = Math.sin(angle) * distance;

    const anim = particle.animate(
      [
        { transform: "translate(-50%, -50%) scale(1)", opacity: 1 },
        {
          transform: `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px)) scale(0)`,
          opacity: 0,
        },
      ],
      { duration: 500 + Math.random() * 300, easing: "cubic-bezier(0, 0.8, 0.5, 1)" }
    );

    anim.onfinish = () => particle.remove();
  }
}
