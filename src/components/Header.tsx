"use client";

import { useEffect, useState } from "react";
import { MobileNav } from "@/components/MobileNav";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Logo } from "@/components/Logo";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 border-b transition-all duration-500 ${
        scrolled
          ? "border-ctp-surface0 glass-nav-scrolled"
          : "border-transparent glass-nav"
      }`}
    >
      <nav className="mx-auto grid max-w-5xl grid-cols-[1fr_auto] items-center px-4 py-4 sm:px-6">
        <a href="#hero" aria-label="McCue Studio — home">
          <Logo />
        </a>

        <div className="flex items-center gap-4">
          {/* Desktop nav */}
          <ul className="hidden gap-6 font-mono text-sm font-medium text-ctp-subtext0 md:flex">
            <li>
              <a href="#about" className="group relative transition-colors hover:text-ctp-lavender">
                About
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-ctp-lavender transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
            <li>
              <a href="#projects" className="group relative transition-colors hover:text-ctp-lavender">
                Projects
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-ctp-lavender transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
            <li>
              <a href="#contact" className="group relative transition-colors hover:text-ctp-lavender">
                Contact
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-ctp-lavender transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          </ul>

          <ThemeToggle />
          <MobileNav />
        </div>
      </nav>
    </header>
  );
}
