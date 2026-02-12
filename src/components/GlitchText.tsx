"use client";

import { useEffect, useRef, useState } from "react";

export function GlitchText({ text, className }: { text: string; className?: string }) {
  const spanRef = useRef<HTMLSpanElement>(null);
  const [glitching, setGlitching] = useState(false);

  useEffect(() => {
    const el = spanRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          triggerGlitch();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  function triggerGlitch() {
    setGlitching(true);
    setTimeout(() => setGlitching(false), 1200);
  }

  useEffect(() => {
    if (!glitching || !spanRef.current) return;

    const el = spanRef.current;
    const original = text;
    const chars = "!@#$%^&*<>{}[]|/\\~";
    let frame: number;
    let start: number | null = null;
    const duration = 1000;

    function step(ts: number) {
      if (!start) start = ts;
      const progress = (ts - start) / duration;

      if (progress >= 1) {
        el.textContent = original;
        return;
      }

      const revealed = Math.floor(progress * original.length);
      let display = "";
      for (let i = 0; i < original.length; i++) {
        if (i < revealed) {
          display += original[i];
        } else {
          display += chars[Math.floor(Math.random() * chars.length)];
        }
      }
      el.textContent = display;
      frame = requestAnimationFrame(step);
    }

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [glitching, text]);

  return (
    <span ref={spanRef} className={className}>
      {text}
    </span>
  );
}
