"use client";

import { useState, useEffect } from "react";
import { trackCtaClick } from "@/lib/analytics";

const links = [
  { href: "#projects", label: "Projects", id: "projects" },
  { href: "#about", label: "About", id: "about" },
  { href: "#pricing", label: "Pricing", id: "pricing" },
  { href: "#contact", label: "Contact", id: "contact" },
] as const;

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("projects");

  useEffect(() => {
    document.body.classList.toggle("mobile-menu-open", open);
    return () => document.body.classList.remove("mobile-menu-open");
  }, [open]);

  useEffect(() => {
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, []);

  useEffect(() => {
    const sections = links
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
        threshold: [0.4, 0.62],
        rootMargin: "-24% 0px -48% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Hamburger button */}
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        className="flex flex-col justify-center gap-1.5 md:hidden"
        onClick={() => setOpen((v) => !v)}
      >
        <span
          className={`block h-0.5 w-6 bg-ctp-subtext0 transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
        />
        <span
          className={`block h-0.5 w-6 bg-ctp-subtext0 transition-opacity ${open ? "opacity-0" : ""}`}
        />
        <span
          className={`block h-0.5 w-6 bg-ctp-subtext0 transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
        />
      </button>

      {/* Mobile menu overlay */}
      <div
        className={`glass-overlay fixed inset-0 top-[57px] z-[60] transition-all duration-300 md:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav className={`mobile-nav-panel mx-4 mt-5 rounded-2xl border border-ctp-surface0 p-4 ${open ? "mobile-nav-panel-open" : ""}`}>
          <div className="flex flex-col gap-2">
            {links.map(({ href, label, id }) => (
              <a
                key={href}
                href={href}
                onClick={() => {
                  trackCtaClick({
                    label: `nav_${id}`,
                    location: "mobile_menu",
                    href,
                  });
                  setOpen(false);
                }}
                className={`mobile-nav-link ${active === id ? "mobile-nav-link-active" : ""}`}
                aria-current={active === id ? "page" : undefined}
              >
                {label}
              </a>
            ))}
          </div>

          <div className="my-4 h-px w-full bg-gradient-to-r from-transparent via-ctp-mauve/40 to-transparent" />

          <a
            href="#contact"
            onClick={() => {
              trackCtaClick({
                label: "start_project",
                location: "mobile_menu",
                href: "#contact",
              });
              setOpen(false);
            }}
            className="cta-primary inline-flex w-full items-center justify-center rounded-xl px-5 py-3 font-mono text-sm"
          >
            Start Project
          </a>

          <a
            href="mailto:bmccueny@gmail.com"
            onClick={() => {
              trackCtaClick({
                label: "email_me",
                location: "mobile_menu",
                href: "mailto:bmccueny@gmail.com",
              });
              setOpen(false);
            }}
            className="cta-secondary mt-2 inline-flex w-full items-center justify-center rounded-xl px-5 py-3 font-mono text-xs"
          >
            bmccueny@gmail.com
          </a>
        </nav>
      </div>
    </>
  );
}
