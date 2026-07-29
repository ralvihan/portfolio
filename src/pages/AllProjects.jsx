import { useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import { sortProjects } from "../utils/sortProjects";
import Navbar from "../components/Navbar";
import TechBadge from "../components/TechBadge";
import Footer from "../components/Footer";

const VISIBLE_COUNT = 5;

function truncate(text, max = 200) {
  const str = Array.isArray(text) ? text.join(" ") : text;
  if (!str) return "";
  return str.length > max ? `${str.slice(0, max).trimEnd()}...` : str;
}

export default function AllProjects() {
  const sortedProjects = sortProjects(projects);
  const [visibleCount, setVisibleCount] = useState(VISIBLE_COUNT);

  const visibleProjects = sortedProjects.slice(0, visibleCount);
  const hasMore = visibleCount < sortedProjects.length;

  return (
    <>
      <Navbar />
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-24 pb-16">
        <Link to="/" className="font-[var(--font-mono)] text-sm text-[var(--color-muted)] hover:text-[var(--color-ink)]">
          ← back
        </Link>
        <h1 className="font-[var(--font-display)] text-3xl sm:text-4xl font-semibold tracking-tight mt-8 mb-8 sm:mb-12">
          All Projects
        </h1>
        <div className="space-y-px">
          {visibleProjects.map((project, i) => (
            <div
              key={project.slug}
              className="py-6 sm:py-8 border-b border-[var(--color-line)] grid grid-cols-1 md:grid-cols-[80px_1fr] gap-2 sm:gap-3 items-start"
            >
              <span className="font-[var(--font-mono)] font-bold text-[var(--color-bg)] bg-[var(--color-ink)] w-8 h-8 rounded-full flex items-center justify-center text-sm">
                {String(i + 1).padStart(2, "0")}
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

        {hasMore && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setVisibleCount((c) => c + VISIBLE_COUNT)}
              className="font-[var(--font-mono)] text-sm border border-[var(--color-line)] rounded-full px-6 py-2.5 hover:bg-[var(--color-accent-soft)] transition-colors"
            >
              Muat Lebih Banyak ({sortedProjects.length - visibleCount} lagi)
            </button>
          </div>
        )}
      </section>
      <Footer />
    </>
  );
}