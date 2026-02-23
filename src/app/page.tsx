import Image from "next/image";
import { Header } from "@/components/Header";
import { ScrollProgress } from "@/components/ScrollProgress";
import { HeroSection } from "@/components/HeroSection";
import { StatsBar } from "@/components/StatsBar";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { ProjectCard } from "@/components/ProjectCard";
import { Testimonials } from "@/components/Testimonials";
import { ProcessSteps } from "@/components/ProcessSteps";
import { PricingSection } from "@/components/PricingSection";
import { FAQ } from "@/components/FAQ";
import { ContactForm } from "@/components/ContactForm";
import { SocialIcons } from "@/components/SocialIcons";
import { TrackedLink } from "@/components/TrackedLink";

const projects = [
  {
    title: "Staten Island Greenbelt",
    description:
      "Designed an editorial-style destination for NYC's largest preserve — trail guides, events, and evergreen content built to bring people in and keep them coming back.",
    href: "https://staten-island-greenbelt.vercel.app",
    image: "/projects/staten-island-greenbelt.jpg",
    outcome: "Turned a static park presence into a discoverable local resource.",
    results: "11 pages live at launch",
  },
  {
    title: "Lyra Ashborne",
    description:
      "Built an author platform with strong visual storytelling, a built-in blog, and clear paths for growing her newsletter and selling books directly — no third-party store required.",
    href: "https://lyra-ashborne.vercel.app",
    image: "/projects/lyra-ashborne.jpg",
    outcome: "Gave a fiction author a real home base — brand, blog, and bookstore in one place.",
    results: "Publishing-ready from day one",
  },
  {
    title: "Staten Island Grinding Service",
    description:
      "Built a high-contrast local service site with a clear layout, easy-to-find contact options, and a streamlined flow that turns visitors into phone calls.",
    href: "https://staten-island-grinding-service.vercel.app",
    image: "/projects/staten-island-grinding-service.png",
    outcome: "Positioned a niche local service with premium, trustworthy branding.",
    results: "Launched in under 1 week",
  },
  {
    title: "Ember & Brew",
    description:
      "Crafted a coffee brand site that feels as warm as the space itself — deep menu pages, scroll storytelling, and a mobile experience built for people searching nearby.",
    href: "https://ember-and-brew.vercel.app",
    image: "/projects/ember-and-brew.png",
    outcome: "Brought the in-store atmosphere into the digital experience.",
    results: "More local discovery traffic",
  },
  {
    title: "Velvet Edge",
    description:
      "Built a bold salon site with a distinct personality, clearly laid-out services, and direct paths to booking — designed to turn browsers into booked appointments.",
    href: "https://velvet-edge.vercel.app",
    image: "/projects/velvet-edge.png",
    outcome: "Matched the brand's energy with a site clients actually want to share.",
    results: "Higher booking-page visits",
  },
];

const services = [
  "Conversion-focused website design",
  "Frontend development and deployment",
  "Content architecture and messaging",
  "Ongoing updates and optimization",
];

export default function Home() {
  return (
    <>
      <Header />
      <ScrollProgress />

      <div id="page-content" className="min-h-screen pb-24 md:pb-0">

        {/* ── Hero ─────────────────────────────────────────────────── */}
        <HeroSection />

        {/* ── Stats bar ────────────────────────────────────────────── */}
        <StatsBar />

        {/* ── Projects ─────────────────────────────────────────────── */}
        <section id="projects" className="border-b border-ctp-surface0 px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <RevealOnScroll>
              <p className="section-kicker">Selected Work</p>
            </RevealOnScroll>
            <RevealOnScroll delay={80}>
              <h2 className="section-title mt-3 max-w-3xl text-3xl sm:text-4xl">
                Projects built to move people from browsing to booking.
              </h2>
            </RevealOnScroll>
            <RevealOnScroll delay={160}>
              <p className="section-lead mt-4 max-w-2xl text-sm sm:text-base">
                One goal per project: get the right visitor to take action. Brand clarity, fast load times, and a natural path to contact — built in from the start.
              </p>
            </RevealOnScroll>

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {projects.map((project, index) => (
                <ProjectCard key={project.title} {...project} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Testimonials ─────────────────────────────────────────── */}
        <section id="testimonials" className="border-b border-ctp-surface0 px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <RevealOnScroll>
              <p className="section-kicker">Client Results</p>
            </RevealOnScroll>
            <RevealOnScroll delay={80}>
              <h2 className="section-title mt-3 max-w-3xl text-3xl sm:text-4xl">
                Real businesses. Real outcomes.
              </h2>
            </RevealOnScroll>
            <RevealOnScroll delay={160}>
              <p className="section-lead mt-4 max-w-2xl text-sm sm:text-base">
                A pretty site isn&apos;t enough. Here&apos;s what happens when design actually does its job.
              </p>
            </RevealOnScroll>
            <div className="mt-10">
              <Testimonials />
            </div>
          </div>
        </section>

        {/* ── Mid-page CTA ─────────────────────────────────────────── */}
        <section className="border-b border-ctp-surface0 px-4 py-14 sm:px-6">
          <RevealOnScroll>
            <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
              <p className="section-kicker">Ready to start?</p>
              <h2 className="section-title text-2xl sm:text-3xl">
                Let&apos;s build something worth showing off.
              </h2>
              <p className="section-lead max-w-xl text-sm sm:text-base">
                Free discovery call. No pressure, no jargon — just a straight conversation about your goals and what it takes to get there.
              </p>
              <TrackedLink
                href="#contact"
                ctaLabel="start_project"
                ctaLocation="mid_page_cta"
                className="cta-primary inline-flex items-center justify-center px-7 py-3 font-sans text-sm"
              >
                Start a Project
              </TrackedLink>
            </div>
          </RevealOnScroll>
        </section>

        {/* ── Process ──────────────────────────────────────────────── */}
        <section id="process" className="border-b border-ctp-surface0 px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <RevealOnScroll>
              <p className="section-kicker">How It Works</p>
            </RevealOnScroll>
            <RevealOnScroll delay={80}>
              <h2 className="section-title mt-3 max-w-3xl text-3xl sm:text-4xl">
                A clear process, start to finish.
              </h2>
            </RevealOnScroll>
            <RevealOnScroll delay={160}>
              <p className="section-lead mt-4 max-w-2xl text-sm sm:text-base">
                No guessing, no surprises. Here&apos;s exactly what working together looks like.
              </p>
            </RevealOnScroll>
            <div className="mt-10">
              <ProcessSteps />
            </div>
          </div>
        </section>

        {/* ── About ────────────────────────────────────────────────── */}
        <section id="about" className="border-b border-ctp-surface0 px-4 py-20 sm:px-6">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <RevealOnScroll>
                <p className="section-kicker">About</p>
              </RevealOnScroll>
              <RevealOnScroll delay={80}>
                <h2 className="section-title mt-3 text-3xl sm:text-4xl">
                  Good design and solid code — built to actually grow your business.
                </h2>
              </RevealOnScroll>
              <RevealOnScroll delay={160}>
                <p className="section-lead mt-5 max-w-2xl text-base">
                  I work with local businesses, creators, and service brands who want a site that looks great and actually brings in customers. My process is straightforward: understand your goals, build fast, launch clean, and keep improving based on what's working.
                </p>
              </RevealOnScroll>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {services.map((service, index) => (
                  <RevealOnScroll key={service} delay={220 + index * 70}>
                    <div className="glass-card metric-chip px-4 py-3">
                      <p className="text-sm text-ctp-subtext1">{service}</p>
                    </div>
                  </RevealOnScroll>
                ))}
              </div>
            </div>

            <RevealOnScroll delay={140}>
              <div className="glass-card h-fit rounded-2xl border border-ctp-surface0 p-6">
                <div className="relative mx-auto h-44 w-44 overflow-hidden rounded-full border border-ctp-surface1">
                  <Image
                    src="/selfie.jpg"
                    alt="Brendan McCue"
                    fill
                    className="object-cover object-[center_20%]"
                    sizes="176px"
                  />
                </div>
                <p className="mt-5 text-center font-mono text-xs tracking-wide text-ctp-subtext0">Brendan McCue · New York</p>
                <p className="mt-3 text-center text-sm leading-relaxed text-ctp-subtext0">
                  I keep communication straightforward, timelines realistic, and deliverables clear from day one.
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* ── Pricing ──────────────────────────────────────────────── */}
        <section id="pricing" className="border-b border-ctp-surface0 px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <RevealOnScroll>
              <p className="section-kicker">Pricing</p>
            </RevealOnScroll>
            <RevealOnScroll delay={80}>
              <h2 className="section-title mt-3 max-w-3xl text-3xl sm:text-4xl">
                Simple, transparent pricing. No surprises.
              </h2>
            </RevealOnScroll>
            <RevealOnScroll delay={160}>
              <p className="section-lead mt-4 max-w-2xl text-sm sm:text-base">
                Every project starts with a free discovery call. From there, scope and price are defined together — clearly — before any work begins.
              </p>
            </RevealOnScroll>
            <div className="mt-10">
              <PricingSection />
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────── */}
        <section id="faq" className="border-b border-ctp-surface0 px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <RevealOnScroll>
              <p className="section-kicker">FAQ</p>
            </RevealOnScroll>
            <RevealOnScroll delay={80}>
              <h2 className="section-title mt-3 max-w-3xl text-3xl sm:text-4xl">
                Common questions, straight answers.
              </h2>
            </RevealOnScroll>
            <div className="mt-10">
              <FAQ />
            </div>
          </div>
        </section>

        {/* ── Contact ──────────────────────────────────────────────── */}
        <section id="contact" className="px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-3xl">
            <RevealOnScroll>
              <div className="glass-card rounded-2xl border border-ctp-surface0 p-6 sm:p-8">
                <p className="section-kicker">Contact</p>
                <h2 className="section-title mt-3 text-3xl sm:text-4xl">
                  Let&apos;s build your next high-performing site.
                </h2>
                <p className="section-lead mt-4 max-w-xl text-sm sm:text-base">
                  Share your business, timeline, and goals. I&apos;ll reply with a practical recommendation, estimated scope, and the fastest path to launch.
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <TrackedLink
                    href="mailto:bmccueny@gmail.com"
                    ctaLabel="email_me"
                    ctaLocation="contact_section"
                    className="inline-flex items-center justify-center rounded-lg border border-ctp-surface1 px-4 py-2.5 font-mono text-xs text-ctp-subtext1 transition-colors hover:border-ctp-mauve hover:text-ctp-mauve"
                  >
                    bmccueny@gmail.com
                  </TrackedLink>
                  <TrackedLink
                    href="https://calendly.com/bmccueny/discovery"
                    target="_blank"
                    rel="noopener noreferrer"
                    ctaLabel="book_discovery_call"
                    ctaLocation="contact_section"
                    className="inline-flex items-center justify-center rounded-lg bg-ctp-teal/20 px-4 py-2.5 font-mono text-xs text-ctp-teal transition-colors hover:bg-ctp-teal/30"
                  >
                    Book a Discovery Call
                  </TrackedLink>
                </div>

                <div className="mt-8">
                  <ContactForm />
                </div>

                <div className="mt-10 border-t border-ctp-surface0 pt-6 text-center">
                  <SocialIcons />
                  <p className="mt-6 text-xs text-ctp-overlay0">&copy; {new Date().getFullYear()} McCue Studio. All rights reserved.</p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>
      </div>

      {/* ── Mobile sticky bar ────────────────────────────────────── */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-ctp-surface0 bg-ctp-crust/85 p-3 backdrop-blur-xl md:hidden">
        <div className="mx-auto flex max-w-md gap-2">
          <TrackedLink
            href="#contact"
            ctaLabel="start_project"
            ctaLocation="mobile_sticky_bar"
            className="cta-primary inline-flex flex-1 items-center justify-center rounded-xl px-4 py-3 font-mono text-xs"
          >
            Start Project
          </TrackedLink>
          <TrackedLink
            href="mailto:bmccueny@gmail.com"
            ctaLabel="email_me"
            ctaLocation="mobile_sticky_bar"
            className="cta-secondary inline-flex flex-1 items-center justify-center rounded-xl px-4 py-3 font-mono text-xs"
          >
            Email Me
          </TrackedLink>
        </div>
      </div>
    </>
  );
}
