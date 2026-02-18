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

const projects = [
  {
    title: "Ember & Brew",
    description:
      "A polished coffee shop website built with Next.js, TypeScript, and Tailwind CSS. Features a warm, modern-rustic design with scroll-triggered animations, responsive mobile nav, and a full categorized menu page.",
    href: "https://ember-and-brew.vercel.app",
    image: "/projects/ember-and-brew.png",
    outcome: "Designed to drive walk-ins and online menu views",
  },
  {
    title: "Velvet Edge",
    description:
      "A bold, dark-themed hair salon website for a trendy Hudson, NY salon. Built with Next.js, TypeScript, and Tailwind CSS. Features a violet/pink neon palette, full services & pricing page, and scroll-triggered animations.",
    href: "https://velvet-edge.vercel.app",
    image: "/projects/velvet-edge.png",
    outcome: "Built to attract new clients and showcase the salon's identity",
  },
  {
    title: "Green Ridge Landscaping",
    description:
      "A clean, light-themed landscaping company website for the Hudson Valley. Built with Next.js, TypeScript, and Tailwind CSS. Features a green/earth palette, project gallery, service categories, and a free estimate contact form.",
    href: "https://green-ridge.vercel.app",
    image: "/projects/green-ridge.png",
    outcome: "Optimized for local search and free estimate inquiries",
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
                    <h2 className="mb-4 font-mono text-3xl font-bold tracking-normal text-ctp-text sm:mb-6 sm:text-4xl md:text-5xl">
                      About <span className="text-ctp-blue">Me</span>
                    </h2>
                  </RevealOnScroll>
                  <RevealOnScroll delay={200}>
                    <p className="max-w-prose text-base font-light leading-loose text-ctp-subtext0 sm:text-lg">
                      I don&apos;t build websites to win design awards. I build them to
                      work, to last, and to make your business look as good online as
                      it does in person. That means no overcomplicated tech, no
                      vanishing for weeks, and no handing you something you&apos;ll need
                      to rebuild in six months. I explain things in plain English, I
                      finish what I start, and I care whether your site actually helps
                      you win clients. Simple as that.
                    </p>
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
                <h2 className="mb-8 text-center font-mono text-3xl font-bold tracking-normal text-ctp-text sm:mb-10 sm:text-4xl md:text-5xl">
                  How It <span className="text-ctp-green">Works</span>
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
                <h2 className="mb-8 text-center font-mono text-3xl font-bold tracking-normal text-ctp-text sm:mb-10 sm:text-4xl md:text-5xl">
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
                  What Clients <span className="text-ctp-teal">Say</span>
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
                  Common <span className="text-ctp-yellow">Questions</span>
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
                    If you&apos;ve got a project in mind and you want someone who&apos;ll
                    actually care about it, let&apos;s talk.
                  </p>
                </RevealOnScroll>
              </div>

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
