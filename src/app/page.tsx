import Image from "next/image";
import { ProjectCard } from "@/components/ProjectCard";
import { SocialIcons } from "@/components/SocialIcons";
import { CollideHeading } from "@/components/CollideHeading";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ProcessSteps } from "@/components/ProcessSteps";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { Testimonials } from "@/components/Testimonials";
import { PricingSection } from "@/components/PricingSection";
import { FAQ } from "@/components/FAQ";
import { ContactForm } from "@/components/ContactForm";
import { StatsBar } from "@/components/StatsBar";

const projects = [
  {
    title: "Staten Island Grinding Service",
    description:
      "Industrial-dark site for a knife sharpening service. Full-viewport video hero, photo-rich service grid, flat-rate pricing table, and a pickup booking form — built to convert local visitors into booked pickups.",
    href: "https://staten-island-grinding-service.vercel.app",
    image: "/projects/staten-island-grinding-service.png",
    outcome: "Launched to drive local pickup bookings and establish a strong brand identity",
    results: "Live in under 1 week",
  },
  {
    title: "Ember & Brew",
    description:
      "Warm, modern-rustic coffee shop site with scroll-triggered animations, a full categorized menu page, and mobile-first nav. The client needed a site that felt as inviting as the café itself.",
    href: "https://ember-and-brew.vercel.app",
    image: "/projects/ember-and-brew.png",
    outcome: "Draws in locals and makes a warm first impression before they walk in the door",
    results: "Foot traffic inquiries up after launch",
  },
  {
    title: "Velvet Edge",
    description:
      "Bold, dark-themed hair salon site for a trendy Hudson, NY salon. Violet/pink neon palette, full services & pricing page, and animated scroll reveals. Built to feel as edgy as the brand.",
    href: "https://velvet-edge.vercel.app",
    image: "/projects/velvet-edge.png",
    outcome: "Attracting bookings and communicating brand personality to new clients",
    results: "Booking page visits up post-launch",
  },
  {
    title: "Green Ridge Landscaping",
    description:
      "Clean, light-themed site for a Hudson Valley landscaping company. Earth-tone palette, project gallery, service categories, and a free estimate form — built for local SEO and lead capture.",
    href: "https://green-ridge.vercel.app",
    image: "/projects/green-ridge.png",
    outcome: "Optimized for local discovery and free estimate requests",
    results: "Ranking for local landscaping searches",
  },
  {
    title: "Meridian Coaching",
    description:
      "Elegant single-page site for a NYC-based life coach. Gold-and-cream palette, Playfair Display serif typography, full-screen hero, services grid, testimonials, and a contact form.",
    href: "https://meridian-coaching.vercel.app",
    image: "/projects/meridian-coaching.png",
    outcome: "Built to build trust and convert first-time visitors into booked discovery calls",
    results: "Discovery call bookings from day one",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <ScrollProgress />

      <div id="page-content" className="min-h-screen">

        {/* Hero */}
        <HeroSection />

        {/* Stats bar */}
        <StatsBar />

        {/* About */}
        <section id="about" className="border-t border-ctp-surface0">
          <div className="grid min-h-dvh place-items-center px-4 py-16 sm:px-6 sm:py-20 md:py-24">
            <div className="w-full max-w-4xl">
              <div className="flex flex-col items-center gap-10 md:flex-row md:gap-16">

                {/* Headshot — replace src with your real photo */}
                <RevealOnScroll>
                  <div className="flex-shrink-0">
                    <div className="relative h-48 w-48 overflow-hidden rounded-full sm:h-56 sm:w-56"
                      style={{ boxShadow: "0 0 0 3px rgba(191,90,242,0.35), 0 0 40px rgba(191,90,242,0.15)" }}
                    >
                      <Image
                        src="/selfie.jpg"
                        alt="Brendan McCue"
                        fill
                        className="object-cover object-[center_20%]"
                        sizes="224px"
                      />
                    </div>
                  </div>
                </RevealOnScroll>

                {/* Text */}
                <div className="text-center md:text-left">
                  <RevealOnScroll delay={100}>
                    <h2 className="mb-4 font-sans text-3xl font-bold tracking-tight text-ctp-text sm:mb-6 sm:text-4xl md:text-5xl">
                      About <span className="text-ctp-mauve">Me</span>
                    </h2>
                  </RevealOnScroll>
                  <RevealOnScroll delay={200}>
                    <p className="mb-2 font-mono text-xs font-medium text-ctp-subtext0">
                      📍 Based in New York · Available remotely
                    </p>
                    <p className="max-w-prose text-base font-light leading-loose text-ctp-subtext0 sm:text-lg">
                      I work with photographers, wedding vendors, artists, authors,
                      park venues, and local businesses — people who are great at what
                      they do and just need a website that shows it. Your online presence
                      should feel as personal as your work, load fast, and give people a
                      real reason to reach out. I make that happen without the tech
                      overwhelm. Plain English, honest timelines, and a site you&apos;ll
                      actually be proud to share.
                    </p>
                  </RevealOnScroll>
                  {/* Skills badges */}
                  <RevealOnScroll delay={300}>
                    <div className="mt-5 flex flex-wrap justify-center gap-2 md:justify-start">
                      {[
                        { label: "Next.js",     color: "var(--ctp-text)"    },
                        { label: "React",       color: "var(--ctp-teal)"    },
                        { label: "TypeScript",  color: "var(--ctp-blue)"    },
                        { label: "Tailwind CSS",color: "var(--ctp-teal)"    },
                        { label: "SEO Basics",  color: "var(--ctp-green)"   },
                        { label: "Mobile-First",color: "var(--ctp-mauve)"   },
                        { label: "Vercel",      color: "var(--ctp-lavender)"},
                      ].map((s) => (
                        <span
                          key={s.label}
                          className="rounded-full border border-ctp-surface0 bg-ctp-mantle px-3 py-1 font-mono text-xs font-medium"
                          style={{ color: s.color }}
                        >
                          {s.label}
                        </span>
                      ))}
                    </div>
                  </RevealOnScroll>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="border-t border-ctp-surface0">
          <div className="grid min-h-dvh place-items-center px-4 py-16 sm:px-6 sm:py-20 md:py-24">
            <div className="w-full max-w-4xl">
              <RevealOnScroll>
                <h2 className="mb-8 text-center font-sans text-3xl font-bold tracking-tight text-ctp-text sm:mb-10 sm:text-4xl md:text-5xl">
                  How It <span className="text-ctp-mauve">Works</span>
                </h2>
              </RevealOnScroll>
              <ProcessSteps />
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="border-t border-ctp-surface0">
          <div className="grid min-h-dvh place-items-center px-4 py-16 sm:px-6 sm:py-20 md:py-24">
            <div className="w-full max-w-5xl">
              <RevealOnScroll>
                <h2 className="mb-8 text-center font-sans text-3xl font-bold tracking-tight text-ctp-text sm:mb-10 sm:text-4xl md:text-5xl">
                  Projects
                </h2>
              </RevealOnScroll>
              <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                  <ProjectCard key={project.title} {...project} index={index} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="border-t border-ctp-surface0">
          <div className="grid min-h-dvh place-items-center px-4 py-16 sm:px-6 sm:py-20 md:py-24">
            <div className="w-full max-w-5xl">
              <RevealOnScroll>
                <h2 className="mb-3 text-center font-mono text-3xl font-bold tracking-normal text-ctp-text sm:text-4xl md:text-5xl">
                  What Clients <span className="text-ctp-mauve">Say</span>
                </h2>
              </RevealOnScroll>
              <RevealOnScroll delay={100}>
                <p className="mb-10 text-center text-base font-light text-ctp-subtext0 sm:mb-12">
                  Real feedback from real business owners.
                </p>
              </RevealOnScroll>
              <Testimonials />
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="border-t border-ctp-surface0">
          <div className="grid min-h-dvh place-items-center px-4 py-16 sm:px-6 sm:py-20 md:py-24">
            <div className="w-full max-w-5xl">
              <RevealOnScroll>
                <h2 className="mb-3 text-center font-mono text-3xl font-bold tracking-normal text-ctp-text sm:text-4xl md:text-5xl">
                  Pricing
                </h2>
              </RevealOnScroll>
              <RevealOnScroll delay={100}>
                <p className="mb-10 text-center text-base font-light text-ctp-subtext0 sm:mb-12">
                  No hidden fees. No surprises. Just clear, honest pricing.
                </p>
              </RevealOnScroll>
              <PricingSection />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="border-t border-ctp-surface0">
          <div className="grid min-h-dvh place-items-center px-4 py-16 sm:px-6 sm:py-20 md:py-24">
            <div className="w-full max-w-2xl">
              <RevealOnScroll>
                <h2 className="mb-3 text-center font-mono text-3xl font-bold tracking-normal text-ctp-text sm:text-4xl md:text-5xl">
                  Common <span className="text-ctp-mauve">Questions</span>
                </h2>
              </RevealOnScroll>
              <RevealOnScroll delay={100}>
                <p className="mb-10 text-center text-base font-light text-ctp-subtext0 sm:mb-12">
                  The things most people ask before reaching out.
                </p>
              </RevealOnScroll>
              <FAQ />
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="border-t border-ctp-surface0">
          <div className="grid min-h-dvh place-items-center px-4 py-16 sm:px-6 sm:py-20 md:py-24">
            <div className="w-full max-w-xl">
              <div className="mb-8 text-center sm:mb-10">
                <CollideHeading />
                <RevealOnScroll delay={150}>
                  <p className="text-base font-light leading-loose text-ctp-subtext0 sm:text-lg">
                    Whether you&apos;re booking your first client or ready to
                    take your business to the next level — let&apos;s build
                    something you&apos;re proud of.
                  </p>
                </RevealOnScroll>
              </div>

              {/* Direct contact details */}
              <RevealOnScroll delay={200}>
                <div className="mb-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
                  <a
                    href="mailto:bmccueny@gmail.com"
                    className="inline-flex items-center gap-2 rounded-full border border-ctp-surface0 px-4 py-2 font-mono text-sm text-ctp-subtext0 transition-colors hover:border-ctp-mauve hover:text-ctp-mauve"
                  >
                    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                    bmccueny@gmail.com
                  </a>
                  <span className="hidden text-ctp-surface1 sm:block">·</span>
                  <a
                    href="https://calendly.com/bmccueny/discovery"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-ctp-teal/40 bg-ctp-teal/10 px-4 py-2 font-mono text-sm text-ctp-teal transition-colors hover:border-ctp-teal hover:bg-ctp-teal/20"
                  >
                    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/><path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/>
                    </svg>
                    Schedule a Free Call
                  </a>
                </div>
                <div className="mb-8 flex justify-center">
                  <span className="inline-flex items-center gap-2 font-mono text-xs text-ctp-overlay0">
                    <span className="h-1.5 w-1.5 rounded-full bg-ctp-green" style={{ boxShadow: "0 0 6px var(--ctp-green)" }} />
                    Replies within 24 hours
                  </span>
                </div>
              </RevealOnScroll>

              <RevealOnScroll delay={250}>
                <ContactForm />
              </RevealOnScroll>

              <RevealOnScroll delay={350}>
                <div className="mt-10 text-center sm:mt-12">
                  <SocialIcons />
                  <p className="mt-8 text-xs text-ctp-overlay0 sm:text-sm">
                    &copy; {new Date().getFullYear()} McCue Studio. All rights reserved.
                  </p>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
