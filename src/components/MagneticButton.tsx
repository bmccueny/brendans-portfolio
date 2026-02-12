"use client";

import { useRef, useState } from "react";

interface MagneticButtonProps {
  href: string;
  children: React.ReactNode;
  className: string;
}

export function MagneticButton({ href, children, className }: MagneticButtonProps) {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const button = buttonRef.current;
    if (!button) return;

    const rect = button.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);

    const distance = Math.sqrt(x * x + y * y);
    const strength = Math.min(distance / 3, 8);
    const angle = Math.atan2(y, x);

    setOffset({
      x: Math.cos(angle) * strength,
      y: Math.sin(angle) * strength,
    });
  };

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 });
  };

  return (
    <a
      ref={buttonRef}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{
        transform: `translate(${offset.x}px, ${offset.y}px)`,
        transition: offset.x || offset.y
          ? "transform 0.15s ease-out"
          : "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
      }}
    >
      {children}
    </a>
  );
}
