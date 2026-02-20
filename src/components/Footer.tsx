const navLinks = [
  { label: "About",        href: "#about"        },
  { label: "Projects",     href: "#projects"     },
  { label: "Pricing",      href: "#pricing"      },
  { label: "Contact",      href: "#contact"      },
];

export function Footer() {
  return (
    <footer className="border-t border-ctp-surface0">
      <div className="glass-card mx-auto max-w-5xl px-6 py-10 sm:px-8">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">

          {/* Brand */}
          <div className="text-center sm:text-left">
            <p className="font-mono text-sm font-bold tracking-wide" style={{ color: "var(--ctp-mauve)" }}>
              McCue Studio
            </p>
            <p className="mt-0.5 text-xs text-ctp-overlay0">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-mono text-xs text-ctp-subtext0 transition-colors hover:text-ctp-mauve"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Direct email */}
          <a
            href="mailto:bmccueny@gmail.com"
            className="font-mono text-xs text-ctp-subtext0 transition-colors hover:text-ctp-mauve"
          >
            bmccueny@gmail.com
          </a>

        </div>
      </div>
    </footer>
  );
}
