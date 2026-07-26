import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import TechBadge from "./TechBadge";

function truncate(text, max = 200) {
  if (!text) return "";
  return text.length > max ? `${text.slice(0, max).trimEnd()}...` : text;
}

export default function Projects() {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-16 border-t border-[var(--color-line)]">
      <h2 className="font-[var(--font-mono)] text-xs sm:text-sm text-[var(--color-muted)] mb-8 sm:mb-12">
        03 / selected_projects
      </h2>
      <div className="space-y-px">
        {projects.map((project) => (
          <div
            key={project.slug}
            className="py-6 sm:py-8 border-b border-[var(--color-line)] grid grid-cols-1 md:grid-cols-[80px_1fr] gap-2 sm:gap-3 items-start"
          >
            <span className="font-[var(--font-mono)] font-bold text-[var(--color-bg)] bg-[var(--color-ink)] w-8 h-8 rounded-full flex items-center justify-center text-sm">
              {project.index}
            </span>
            <div className="flex flex-col-reverse sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6">
              <div className="flex-1 min-w-0">
                <Link
                    to={`/projects/${project.slug}`}
                    className="inline-block font-[var(--font-display)] text-xl sm:text-2xl font-semibold tracking-tight hover:text-[var(--color-accent)] hover:underline underline-offset-4 decoration-2 transition-colors"
                    >
                    {project.title}
                    </Link>
                {project.period && (
                  <p className="font-[var(--font-mono)] text-xs text-[var(--color-muted)] mt-1">
                    {project.period}
                  </p>
                )}
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.stack.map((tech) => (
                    <TechBadge key={tech} tech={tech} />
                  ))}
                </div>
                <p className="mt-3 text-sm sm:text-base text-[var(--color-muted)]">
                  {truncate(project.detail)}
                </p>
              </div>
              <Link to={`/projects/${project.slug}`} className="block shrink-0 w-full sm:w-56">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full aspect-video object-cover rounded-lg border border-[var(--color-line)]"
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}