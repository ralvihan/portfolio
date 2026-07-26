import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-24 border-t border-[var(--color-line)]">
      <h2 className="font-[var(--font-mono)] text-sm text-[var(--color-muted)] mb-12">
        02 / selected_projects
      </h2>
      <div className="space-y-px">
        {projects.map((project) => (
          <Link
            to={`/projects/${project.slug}`}
            key={project.slug}
            className="group py-8 border-b border-[var(--color-line)] grid md:grid-cols-[80px_1fr_auto] gap-6 items-start block"
          >
            <span className="font-[var(--font-mono)] text-[var(--color-muted)]">
              {project.index}
            </span>
            <div>
              <h3 className="font-[var(--font-display)] text-2xl font-semibold tracking-tight group-hover:text-[var(--color-accent)] transition-colors">
                {project.title}
              </h3>
              <p className="mt-2 text-[var(--color-muted)] max-w-lg">
                {project.description}
              </p>
            </div>
            <div className="flex md:flex-col gap-2 flex-wrap">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="font-[var(--font-mono)] text-xs px-2 py-1 bg-[var(--color-accent-soft)] text-[var(--color-accent)] rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}