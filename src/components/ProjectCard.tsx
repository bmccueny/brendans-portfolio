"use client";

import { useEffect, useRef, useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  href: string;
  index: number;
}

export function ProjectCard({ title, description, href, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [revealed, setRevealed] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          setTimeout(() => setRevealed(true), index * 150);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    setTilt({
      x: ((y - centerY) / centerY) * -8,
      y: ((x - centerX) / centerX) * 8,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <a
      ref={cardRef}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group flex min-h-[120px] flex-col rounded-xl border border-ctp-surface0 bg-ctp-mantle p-4 hover:border-ctp-surface2 hover:bg-ctp-surface0 active:bg-ctp-surface1 sm:p-6"
      style={{
        opacity: revealed ? 1 : 0,
        transform: revealed
          ? `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${tilt.x || tilt.y ? 1.03 : 1})`
          : "translateY(40px)",
        transition: tilt.x || tilt.y
          ? "transform 0.15s ease-out, border-color 0.3s, background-color 0.3s"
          : "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.5s ease-out, border-color 0.3s, background-color 0.3s",
      }}
    >
      <h3 className="mb-1.5 font-mono text-base font-semibold tracking-normal text-ctp-text group-hover:text-ctp-lavender sm:mb-2 sm:text-lg">
        {title}
      </h3>
      <p className="flex-1 text-sm leading-relaxed text-ctp-subtext0 sm:text-base">
        {description}
      </p>
    </a>
  );
}
