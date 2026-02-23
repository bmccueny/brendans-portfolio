"use client";

import { useEffect, useState } from "react";
import { MobileNav } from "@/components/MobileNav";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Logo } from "@/components/Logo";
import { trackCtaClick } from "@/lib/analytics";

const navLinks = [
  { href: "#projects", label: "Projects", id: "projects" },
  { href: "#about", label: "About", id: "about" },
  { href: "#pricing", label: "Pricing", id: "pricing" },
  { href: "#contact", label: "Contact", id: "contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("projects");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 84);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActive(visible[0].target.id);
        }
      },
      {
        threshold: [0.1, 0.3, 0.5],
        rootMargin: "-10% 0px -55% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 border-b transition-all duration-500 ${
        scrolled
          ? "border-ctp-surface0 glass-nav-scrolled"
          : "border-transparent glass-nav"
      }`}
    >
      <nav className="mx-auto grid max-w-6xl grid-cols-[1fr_auto] items-center px-4 py-4 sm:px-6">
        <a href="#hero" aria-label="McCue Studio — home" className="relative">
          <Logo />
        </a>

        <div className="flex items-center gap-3 sm:gap-4">
          <ul className="hidden items-center gap-2 rounded-full border border-ctp-surface0 bg-ctp-mantle p-1.5 md:flex">
            {navLinks.map((link) => {
              const isActive = active === link.id;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`header-nav-chip ${isActive ? "header-nav-chip-active" : ""}`}
                    aria-current={isActive ? "page" : undefined}
                    onClick={() => {
                      setActive(link.id);
                      trackCtaClick({
                        label: `nav_${link.id}`,
                        location: "header_desktop",
                        href: link.href,
                      });
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <a
            href="#contact"
            className="cta-primary hidden rounded-full px-4 py-2.5 font-mono text-xs md:inline-flex"
            onClick={() =>
              trackCtaClick({
                label: "start_project",
                location: "header_desktop",
                href: "#contact",
              })
            }
          >
            Start Project
          </a>

          <ThemeToggle />
          <MobileNav />
        </div>
      </nav>
    </header>
  );
}
