"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { trackCtaClick } from "@/lib/analytics";

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
  title,
  description,
  href,
  index,
  image,
  outcome,
  results,
}: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glow, setGlow] = useState({ x: 50, y: 40 });

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          setTimeout(() => setRevealed(true), index * 120);
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
      x: ((y - rect.height / 2) / (rect.height / 2)) * -5,
      y: ((x - rect.width / 2) / (rect.width / 2)) * 5,
    });

    setGlow({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const resetHover = () => {
    setHovered(false);
    setTilt({ x: 0, y: 0 });
    setGlow({ x: 50, y: 40 });
  };

  return (
    <article
      ref={cardRef}
      onMouseEnter={() => setHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetHover}
      className="project-card-shell glass-card group relative flex min-h-[120px] flex-col overflow-hidden border border-ctp-surface0"
      style={{
        opacity: revealed ? 1 : 0,
        transform: revealed
          ? `perspective(920px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${hovered ? 1.014 : 1})`
          : "translateY(36px)",
        transition: hovered
          ? "transform 160ms ease-out, opacity 380ms ease-out"
          : "transform 620ms cubic-bezier(0.2, 0.72, 0.2, 1), opacity 460ms ease-out",
      }}
    >
      <div
        aria-hidden="true"
        className="project-card-glow"
        style={{
          opacity: hovered ? 1 : 0,
          background: `radial-gradient(circle at ${glow.x}% ${glow.y}%, rgba(94, 92, 230, 0.28), rgba(94, 92, 230, 0) 46%)`,
        }}
      />

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
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.045]"
          />
        </a>
      )}

      <div className="relative z-10 flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="mb-1.5 font-sans text-base font-semibold tracking-tight text-ctp-text group-hover:text-ctp-lavender sm:text-lg">
          {title}
        </h3>

        <p className="flex-1 text-sm leading-relaxed text-ctp-subtext0">{description}</p>

        {results && (
          <p className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-full border border-ctp-teal/30 bg-ctp-teal/10 px-3 py-1 font-mono text-xs font-semibold text-ctp-teal">
            <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none">
              <path
                d="M2 9l3-3 2 2 3-4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {results}
          </p>
        )}

        {outcome && <p className="mt-2 text-xs font-medium text-ctp-green">→ {outcome}</p>}

        <div className="mt-4 flex items-center gap-2 border-t border-ctp-surface0 pt-3">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-primary inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-mono text-xs"
            onClick={() =>
              trackCtaClick({
                label: "view_live_project",
                location: "project_card",
                href,
              })
            }
          >
            <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none">
              <path
                d="M2 6h8M7 3l3 3-3 3"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            View Live
          </a>
        </div>
      </div>
    </article>
  );
}
