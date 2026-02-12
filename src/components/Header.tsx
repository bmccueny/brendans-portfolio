"use client";

import { useEffect, useState } from "react";
import { MobileNav } from "@/components/MobileNav";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const container = document.getElementById("page-content");
    if (!container) return;

    const handleScroll = () => {
      setScrolled(container.scrollTop > 100);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 border-b transition-all duration-300 ${
        scrolled
          ? "border-ctp-surface0 bg-ctp-crust/95 backdrop-blur-lg"
          : "border-transparent bg-ctp-crust/50 backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto grid max-w-5xl grid-cols-[1fr_auto] items-center px-4 py-4 sm:px-6">
        <span className="font-mono text-lg font-bold tracking-tight text-ctp-mauve">
          Brendan McCue
        </span>

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
