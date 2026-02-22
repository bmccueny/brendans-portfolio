"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { PulsingDot } from "@/components/PulsingDot";
import { MagneticButton } from "@/components/MagneticButton";
import { ScrollIndicator } from "@/components/ScrollIndicator";

type RevealStage = "idle" | "badge" | "heading" | "body" | "ctas";

export function HeroSection() {
  const [stage, setStage] = useState<RevealStage>("idle");

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage("badge"),   100),
      setTimeout(() => setStage("heading"), 450),
      setTimeout(() => setStage("body"),    800),
      setTimeout(() => setStage("ctas"),    1100),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const past = (target: RevealStage) => {
    const order: RevealStage[] = ["idle", "badge", "heading", "body", "ctas"];
    return order.indexOf(stage) >= order.indexOf(target);
  };

  return (
    <section id="hero" className="relative grid min-h-dvh place-items-center px-4 sm:px-6">
      <div className="max-w-3xl text-center">

        {/* Status badge — first to appear */}
        <div
          className="glass-card mb-6 inline-flex items-center gap-2 rounded-full border border-ctp-surface0 px-4 py-1.5"
          style={{
            opacity: past("badge") ? 1 : 0,
            transform: past("badge") ? "translateY(0)" : "translateY(-10px)",
            transition: "opacity 0.45s ease-out, transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1)",
          }}
        >
          <PulsingDot />
          <span className="font-mono text-xs font-medium text-ctp-subtext0">
            Taking on new projects
          </span>
        </div>

        {/* Eyebrow */}
        <p
          className="mb-3 font-sans text-xs font-semibold uppercase tracking-widest"
          style={{
            opacity: past("heading") ? 1 : 0,
            transform: past("heading") ? "translateY(0)" : "translateY(10px)",
            transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
            color: "var(--ctp-mauve)",
          }}
        >
          Hey, I&apos;m{" "}
          <span style={{ color: "var(--ctp-lavender)" }}>Brendan.</span>
        </p>

        {/* Main headline */}
        <h1
          className="font-sans text-4xl font-extrabold leading-tight tracking-tight text-ctp-text sm:text-5xl md:text-6xl"
          style={{
            opacity: past("heading") ? 1 : 0,
            transform: past("heading") ? "translateY(0)" : "translateY(18px)",
            transition: "opacity 0.6s ease-out 0.07s, transform 0.6s ease-out 0.07s",
          }}
        >
          Websites That{" "}
          <span style={{ color: "var(--ctp-mauve)" }}>Win Clients</span>{" "}
          for Small Businesses.
        </h1>

        {/* Body */}
        <p
          className="mx-auto mt-4 max-w-prose text-base font-light leading-loose text-ctp-subtext0 sm:mt-5 sm:text-lg"
          style={{
            opacity: past("body") ? 1 : 0,
            transform: past("body") ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
          }}
        >
          Coffee shops, salons, landscapers, coaches — I build fast,
          professional sites that make real people reach out and book.
          Starting at $1,500. Delivered in under two weeks. No tech jargon, ever.
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
            className="inline-flex w-full items-center justify-center rounded-lg bg-ctp-mauve px-6 py-3 font-sans text-base font-semibold tracking-wide text-white transition-colors hover:bg-ctp-lavender hover:shadow-[0_0_20px_rgba(191,90,242,0.45)] active:bg-ctp-blue sm:w-auto"
          >
            View Projects
          </MagneticButton>
          <MagneticButton
            href="#contact"
            className="inline-flex w-full items-center justify-center rounded-lg border border-ctp-surface1 px-6 py-3 font-sans text-base font-semibold tracking-wide text-ctp-subtext1 transition-colors hover:border-ctp-mauve hover:text-ctp-mauve hover:shadow-[0_0_16px_rgba(191,90,242,0.2)] sm:w-auto"
          >
            Get in Touch
          </MagneticButton>
        </div>

        {/* Project preview strip */}
        <div
          className="mt-12 flex items-end justify-center gap-3 sm:gap-4"
          style={{
            opacity: past("ctas") ? 1 : 0,
            transform: past("ctas") ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease-out 0.15s, transform 0.7s ease-out 0.15s",
          }}
        >
          {[
            { src: "/projects/staten-island-grinding-service.png", alt: "SI Grinding Service", rotate: "-rotate-2", scale: "scale-95" },
            { src: "/projects/ember-and-brew.png",                 alt: "Ember & Brew",        rotate: "rotate-0",  scale: "scale-100" },
            { src: "/projects/velvet-edge.png",                    alt: "Velvet Edge",         rotate: "rotate-2",  scale: "scale-95" },
          ].map((p) => (
            <div
              key={p.alt}
              className={`${p.rotate} ${p.scale} overflow-hidden rounded-lg border border-ctp-surface0 shadow-[0_8px_32px_rgba(0,0,0,0.45)] transition-transform duration-300 hover:scale-100 hover:rotate-0`}
              style={{ width: "clamp(80px, 22vw, 180px)" }}
            >
              {/* Browser chrome strip */}
              <div className="flex items-center gap-1 border-b border-ctp-surface0 bg-ctp-mantle px-2 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-ctp-red opacity-70" />
                <span className="h-1.5 w-1.5 rounded-full bg-ctp-peach opacity-70" />
                <span className="h-1.5 w-1.5 rounded-full bg-ctp-green opacity-70" />
              </div>
              <Image
                src={p.src}
                alt={p.alt}
                width={360}
                height={270}
                className="block w-full object-cover object-top"
              />
            </div>
          ))}
        </div>

      </div>
      <ScrollIndicator />
    </section>
  );
}
