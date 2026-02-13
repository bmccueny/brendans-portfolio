import { ProjectCard } from "@/components/ProjectCard";
import { SocialIcons } from "@/components/SocialIcons";
import { CollideHeading } from "@/components/CollideHeading";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ProcessSteps } from "@/components/ProcessSteps";
import { RevealOnScroll } from "@/components/RevealOnScroll";

const projects = [
  {
    title: "Ember & Brew",
    description:
      "A polished coffee shop website built with Next.js, TypeScript, and Tailwind CSS. Features a warm, modern-rustic design with scroll-triggered animations, responsive mobile nav, and a full categorized menu page.",
    href: "https://ember-and-brew.vercel.app",
    image: "/projects/ember-and-brew.png",
  },
  {
    title: "Velvet Edge",
    description:
      "A bold, dark-themed hair salon website for a trendy Hudson, NY salon. Built with Next.js, TypeScript, and Tailwind CSS. Features a violet/pink neon palette, full services & pricing page, and scroll-triggered animations.",
    href: "https://velvet-edge.vercel.app",
    image: "/projects/velvet-edge.png",
  },
  {
    title: "Green Ridge Landscaping",
    description:
      "A clean, light-themed landscaping company website for the Hudson Valley. Built with Next.js, TypeScript, and Tailwind CSS. Features a green/earth palette, project gallery, service categories, and a free estimate contact form.",
    href: "https://green-ridge.vercel.app",
    image: "/projects/green-ridge.png",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <ScrollProgress />

      <div id="page-content" className="min-h-screen snap-y snap-proximity overflow-y-auto bg-ctp-base text-ctp-text" style={{ height: "100dvh" }}>
        {/* Hero */}
        <HeroSection />

        {/* About */}
        <section id="about" className="snap-center border-t border-ctp-surface0">
          <div className="grid min-h-dvh place-items-center px-4 py-16 sm:px-6 sm:py-20 md:py-24">
            <div className="max-w-3xl text-center">
              <RevealOnScroll>
                <h2 className="mb-4 font-mono text-3xl font-bold tracking-normal text-ctp-text sm:mb-6 sm:text-4xl md:text-5xl">
                  About <span className="text-ctp-blue">Me</span>
                </h2>
              </RevealOnScroll>
              <RevealOnScroll delay={150}>
                <p className="mx-auto max-w-prose text-base font-light leading-loose text-ctp-subtext0 sm:text-lg">
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
        </section>

        {/* Process */}
        <section id="process" className="snap-start md:snap-center border-t border-ctp-surface0">
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
        <section id="projects" className="snap-start md:snap-center border-t border-ctp-surface0">
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

        {/* Contact */}
        <section id="contact" className="snap-center border-t border-ctp-surface0">
          <div className="grid min-h-dvh place-items-center px-4 py-16 sm:px-6 sm:py-20 md:py-24">
            <div className="max-w-xl text-center">
              <CollideHeading />
              <RevealOnScroll delay={150}>
                <p className="mb-6 text-base font-light leading-loose text-ctp-subtext0 sm:mb-8 sm:text-lg">
                  If you&apos;ve got a project in mind and you want someone who&apos;ll
                  actually care about it, let&apos;s talk. Reach out and we&apos;ll
                  figure out the best way to bring it to life.
                </p>
              </RevealOnScroll>
              <RevealOnScroll delay={300}>
                <a
                  href="mailto:bmccueny@gmail.com"
                  className="inline-block rounded-lg bg-ctp-mauve px-5 py-2.5 font-mono text-base font-semibold tracking-wide text-ctp-crust transition-colors hover:bg-ctp-lavender hover:shadow-[0_0_20px_rgba(180,190,254,0.4)] active:bg-ctp-blue sm:px-6 sm:py-3"
                >
                  Get in Touch
                </a>
                <div className="mt-10 sm:mt-12">
                  <SocialIcons />
                </div>
                <p className="mt-12 text-xs text-ctp-overlay0 sm:text-sm">
                  &copy; {new Date().getFullYear()} Brendan McCue. All rights reserved.
                </p>
              </RevealOnScroll>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
