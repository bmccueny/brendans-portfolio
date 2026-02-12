import { ProjectCard } from "@/components/ProjectCard";
import { MobileNav } from "@/components/MobileNav";
import { SocialIcons } from "@/components/SocialIcons";
import { ToolkitIcons } from "@/components/ToolkitIcons";
import { Typewriter } from "@/components/Typewriter";
import { ScrollIndicator } from "@/components/ScrollIndicator";
import { PulsingDot } from "@/components/PulsingDot";
import { GlitchText } from "@/components/GlitchText";
import { CollideHeading } from "@/components/CollideHeading";
import { ScrollSnap } from "@/components/ScrollSnap";

const projects = [
  {
    title: "Project One",
    description: "A full-stack web application built with Next.js and GraphQL.",
    tags: ["Next.js", "GraphQL", "Tailwind CSS"],
    href: "#",
  },
  {
    title: "Project Two",
    description: "An open-source CLI tool for automating dev workflows.",
    tags: ["TypeScript", "Node.js"],
    href: "#",
  },
  {
    title: "Project Three",
    description: "A real-time dashboard powered by WebSockets and React.",
    tags: ["React", "WebSockets", "D3.js"],
    href: "#",
  },
];

export default function Home() {
  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 border-b border-ctp-surface0 bg-ctp-crust/80 backdrop-blur-md">
        <nav className="mx-auto grid max-w-5xl grid-cols-[1fr_auto] items-center px-4 py-4 sm:px-6">
          <span className="text-lg font-bold tracking-tight text-ctp-mauve">
            Brendan
          </span>

          {/* Desktop nav */}
          <ul className="hidden gap-6 text-sm font-medium text-ctp-subtext0 md:flex">
            <li>
              <a href="#about" className="transition-colors hover:text-ctp-lavender">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="transition-colors hover:text-ctp-lavender">
                Projects
              </a>
            </li>
            <li>
              <a href="#socials" className="transition-colors hover:text-ctp-lavender">
                Socials
              </a>
            </li>
            <li>
              <a href="#contact" className="transition-colors hover:text-ctp-lavender">
                Contact
              </a>
            </li>
          </ul>

          <MobileNav />
        </nav>
      </header>

      <div id="page-content" className="min-h-screen snap-y snap-mandatory overflow-y-auto bg-ctp-base text-ctp-text" style={{ height: "100dvh" }}>
        <ScrollSnap />
        {/* Hero */}
        <section className="relative grid min-h-dvh snap-center place-items-center px-4 sm:px-6">
          <div className="max-w-3xl text-center">
            {/* Status badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-ctp-surface0 bg-ctp-mantle px-4 py-1.5">
              <PulsingDot />
              <span className="text-xs font-medium text-ctp-subtext0">
                Available for work
              </span>
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-ctp-text sm:text-5xl md:text-6xl">
              <Typewriter />
            </h1>

            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-ctp-subtext0 sm:mt-5 sm:text-lg">
              I build modern web experiences with a focus on performance,
              accessibility, and clean code. Welcome to my corner of the internet.
            </p>

            {/* Tech pills */}
            <div className="mx-auto mt-6 flex flex-wrap justify-center gap-2 sm:mt-8">
              {["React", "Next.js", "TypeScript", "GraphQL", "Tailwind CSS"].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-ctp-surface1 px-3 py-1 text-xs font-medium text-ctp-subtext1"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4">
              <a
                href="#projects"
                className="inline-flex w-full items-center justify-center rounded-lg bg-ctp-mauve px-6 py-3 text-sm font-semibold text-ctp-crust transition-colors hover:bg-ctp-lavender active:bg-ctp-blue sm:w-auto"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex w-full items-center justify-center rounded-lg border border-ctp-surface1 px-6 py-3 text-sm font-semibold text-ctp-subtext1 transition-colors hover:border-ctp-mauve hover:text-ctp-mauve sm:w-auto"
              >
                Get in Touch
              </a>
            </div>
          </div>

          <ScrollIndicator />
        </section>

        {/* About */}
        <section id="about" className="snap-center border-t border-ctp-surface0">
          <div className="grid min-h-dvh place-items-center px-4 py-16 sm:px-6 sm:py-20 md:py-24">
            <div className="max-w-3xl text-center">
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-ctp-text sm:mb-6 sm:text-3xl">
                About <span className="text-ctp-blue">Me</span>
              </h2>
              <p className="mx-auto max-w-2xl text-sm leading-relaxed text-ctp-subtext0 sm:text-base">
                I&apos;m a developer passionate about crafting delightful user
                interfaces and robust backend systems. My toolkit includes React,
                Next.js, TypeScript, GraphQL, and more. When I&apos;m not coding,
                you can find me exploring new technologies and contributing to
                open-source projects.
              </p>
              <ToolkitIcons />
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="snap-center border-t border-ctp-surface0">
          <div className="grid min-h-dvh place-items-center px-4 py-16 sm:px-6 sm:py-20 md:py-24">
            <div className="w-full max-w-5xl">
              <h2 className="mb-8 text-center text-2xl font-bold tracking-tight text-ctp-text sm:mb-10 sm:text-3xl">
                Projects
              </h2>
              <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                  <ProjectCard key={project.title} {...project} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Socials */}
        <section id="socials" className="snap-center border-t border-ctp-surface0">
          <div className="grid min-h-dvh place-items-center px-4 py-16 sm:px-6 sm:py-20 md:py-24">
            <div className="w-full max-w-3xl text-center">
              <h2 className="mb-8 text-2xl font-bold tracking-tight text-ctp-text sm:mb-10 sm:text-3xl">
                Find Me <GlitchText text="Online" className="text-ctp-pink" />
              </h2>
              <SocialIcons />
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="snap-center border-t border-ctp-surface0">
          <div className="grid min-h-dvh place-items-center px-4 py-16 sm:px-6 sm:py-20 md:py-24">
            <div className="max-w-xl text-center">
              <CollideHeading />
              <p className="mb-6 text-sm text-ctp-subtext0 sm:mb-8 sm:text-base">
                Interested in working together or just want to say hello? Drop me a
                line.
              </p>
              <a
                href="mailto:brendan@example.com"
                className="inline-block rounded-lg bg-ctp-mauve px-5 py-2.5 text-sm font-semibold text-ctp-crust transition-colors hover:bg-ctp-lavender active:bg-ctp-blue sm:px-6 sm:py-3"
              >
                Say Hello
              </a>
              <p className="mt-12 text-xs text-ctp-overlay0 sm:text-sm">
                &copy; {new Date().getFullYear()} Brendan. All rights reserved.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
