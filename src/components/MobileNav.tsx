"use client";

import { useState, useEffect } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("mobile-menu-open", open);
    return () => document.body.classList.remove("mobile-menu-open");
  }, [open]);

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
      {open && (
        <div className="fixed inset-0 top-[57px] z-[60] bg-ctp-crust md:hidden">
          <nav className="flex flex-col items-center gap-4 px-6 pt-12">
            {links.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="group w-full max-w-xs rounded-xl border border-transparent px-6 py-4 text-center font-mono text-2xl font-semibold text-ctp-subtext1 transition-all duration-200 hover:border-ctp-mauve/40 hover:bg-ctp-surface0 hover:text-ctp-mauve hover:shadow-[0_0_20px_rgba(203,166,247,0.15)] active:scale-95 active:bg-ctp-surface1 active:text-ctp-lavender"
              >
                <span className="inline-block transition-transform duration-200 group-hover:scale-110">
                  {label}
                </span>
              </a>
            ))}

            <div className="mt-4 h-px w-full max-w-xs bg-gradient-to-r from-transparent via-ctp-mauve/40 to-transparent" />

            <a
              href="mailto:bmccueny@gmail.com"
              onClick={() => setOpen(false)}
              className="mt-2 w-full max-w-xs rounded-xl bg-ctp-mauve px-6 py-4 text-center font-mono text-lg font-semibold tracking-wide text-ctp-crust transition-all duration-200 hover:bg-ctp-lavender hover:shadow-[0_0_24px_rgba(203,166,247,0.3)] active:scale-95 active:bg-ctp-blue"
            >
              Say Hello
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
