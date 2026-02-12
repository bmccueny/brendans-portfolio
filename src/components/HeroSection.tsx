"use client";

import { useEffect, useState } from "react";
import { Typewriter } from "@/components/Typewriter";
import { PulsingDot } from "@/components/PulsingDot";
import { MagneticButton } from "@/components/MagneticButton";

type RevealStage = "idle" | "typewriter" | "body" | "ctas" | "badge";

const TYPEWRITER_DURATION = 1800; // ~100ms * 17 chars + buffer

export function HeroSection() {
  const [stage, setStage] = useState<RevealStage>("idle");

  useEffect(() => {
    // Start typewriter immediately
    setStage("typewriter");

    const timers = [
      setTimeout(() => setStage("body"), TYPEWRITER_DURATION),
      setTimeout(() => setStage("ctas"), TYPEWRITER_DURATION + 400),
      setTimeout(() => setStage("badge"), TYPEWRITER_DURATION + 800),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  const past = (target: RevealStage) => {
    const order: RevealStage[] = ["idle", "typewriter", "body", "ctas", "badge"];
    return order.indexOf(stage) >= order.indexOf(target);
  };

  return (
    <section id="hero" className="relative grid min-h-dvh snap-center place-items-center px-4 sm:px-6">
      <div className="max-w-3xl text-center">
        {/* Status badge */}
        <div
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-ctp-surface0 bg-ctp-mantle px-4 py-1.5"
          style={{
            opacity: past("badge") ? 1 : 0,
            transform: past("badge") ? "translateY(0)" : "translateY(-12px)",
            transition: "opacity 0.5s ease-out, transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
          }}
        >
          <PulsingDot />
          <span className="font-mono text-xs font-medium text-ctp-subtext0">
            Taking on new projects
          </span>
        </div>

        <h1 className="font-mono text-4xl font-extrabold leading-tight tracking-normal text-ctp-text sm:text-5xl md:text-6xl">
          <Typewriter />
        </h1>

        <p
          className="mx-auto mt-4 max-w-prose text-base font-light leading-loose text-ctp-subtext0 sm:mt-5 sm:text-lg"
          style={{
            opacity: past("body") ? 1 : 0,
            transform: past("body") ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
          }}
        >
          I build websites that look professional, load fast, and work on
          every device. Whether you&apos;re launching your first site or
          upgrading one that&apos;s holding you back—I make the whole process
          easy so you can focus on what you do best.
        </p>

        {/* CTA buttons */}
        <div
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4"
          style={{
            opacity: past("ctas") ? 1 : 0,
            transform: past("ctas") ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
          }}
        >
          <MagneticButton
            href="#projects"
            className="inline-flex w-full items-center justify-center rounded-lg bg-ctp-mauve px-6 py-3 font-mono text-base font-semibold tracking-wide text-ctp-crust transition-colors hover:bg-ctp-lavender hover:shadow-[0_0_20px_rgba(180,190,254,0.4)] active:bg-ctp-blue sm:w-auto"
          >
            View Projects
          </MagneticButton>
          <MagneticButton
            href="#contact"
            className="inline-flex w-full items-center justify-center rounded-lg border border-ctp-surface1 px-6 py-3 font-mono text-base font-semibold tracking-wide text-ctp-subtext1 transition-colors hover:border-ctp-mauve hover:text-ctp-mauve hover:shadow-[0_0_16px_rgba(203,166,247,0.2)] sm:w-auto"
          >
            Get in Touch
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
