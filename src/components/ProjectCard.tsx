"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  href: string;
  index: number;
  image?: string;
  outcome?: string;
  results?: string;
}

export function ProjectCard({
  title, description, href, index, image, outcome, results,
}: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
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

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setTilt({
      x: ((y - rect.height / 2) / (rect.height / 2)) * -6,
      y: ((x - rect.width / 2) / (rect.width / 2)) * 6,
    });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="glass-card group flex min-h-[120px] flex-col overflow-hidden rounded-xl border border-ctp-surface0 hover:border-ctp-surface2"
      style={{
        opacity: revealed ? 1 : 0,
        transform: revealed
          ? `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${tilt.x || tilt.y ? 1.02 : 1})`
          : "translateY(40px)",
        transition: tilt.x || tilt.y
          ? "transform 0.15s ease-out, border-color 0.3s"
          : "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.5s ease-out, border-color 0.3s",
      }}
    >
      {/* Screenshot */}
      {image && (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="relative block aspect-[16/9] w-full overflow-hidden border-b border-ctp-surface0"
          tabIndex={-1}
          aria-label={`Visit ${title}`}
        >
          <Image
            src={image}
            alt={`${title} screenshot`}
            fill
            className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
          />
        </a>
      )}

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        {/* Title */}
        <h3 className="mb-1.5 font-sans text-base font-semibold tracking-tight text-ctp-text group-hover:text-ctp-lavender sm:text-lg">
          {title}
        </h3>

        {/* Description */}
        <p className="flex-1 text-sm leading-relaxed text-ctp-subtext0">
          {description}
        </p>

        {/* Results metric */}
        {results && (
          <p className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-full border border-ctp-teal/30 bg-ctp-teal/10 px-3 py-1 font-mono text-xs font-semibold text-ctp-teal">
            <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none">
              <path d="M2 9l3-3 2 2 3-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {results}
          </p>
        )}

        {/* Outcome */}
        {outcome && (
          <p className="mt-2 text-xs font-medium text-ctp-green">
            → {outcome}
          </p>
        )}

        {/* Action buttons */}
        <div className="mt-4 flex items-center gap-2 border-t border-ctp-surface0 pt-3">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-ctp-mauve px-3 py-1.5 font-mono text-xs font-semibold text-white transition-colors hover:bg-ctp-lavender"
          >
            <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none">
              <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            View Live
          </a>
        </div>
      </div>
    </div>
  );
}
