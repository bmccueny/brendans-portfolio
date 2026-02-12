interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  href: string;
}

export function ProjectCard({ title, description, tags, href }: ProjectCardProps) {
  return (
    <a
      href={href}
      className="group flex min-h-[120px] flex-col rounded-xl border border-ctp-surface0 bg-ctp-mantle p-4 transition-colors hover:border-ctp-surface2 hover:bg-ctp-surface0 active:bg-ctp-surface1 sm:p-6"
    >
      <h3 className="mb-1.5 text-base font-semibold tracking-tight text-ctp-text group-hover:text-ctp-lavender sm:mb-2 sm:text-lg">
        {title}
      </h3>
      <p className="mb-3 flex-1 text-sm leading-relaxed text-ctp-subtext0 sm:mb-4">
        {description}
      </p>
      <div className="flex flex-wrap gap-1.5 sm:gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-ctp-surface0 px-2.5 py-0.5 text-xs font-medium text-ctp-subtext1 sm:px-3 sm:py-1"
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}
