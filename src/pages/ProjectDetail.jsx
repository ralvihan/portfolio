import { useParams, Link, Navigate } from "react-router-dom";
import { projects } from "../data/projects";
import Navbar from "../components/Navbar";
import TechBadge from "../components/TechBadge";
import ImageSlider from "../components/ImageSlider";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <Navigate to="/" replace />;

  return (
    <>
      <Navbar />
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-28 pb-24">
        <Link to="/" className="font-[var(--font-mono)] text-sm text-[var(--color-muted)] hover:text-[var(--color-ink)]">
          ← back
        </Link>
        <p className="font-[var(--font-mono)] text-sm text-[var(--color-accent)] mt-8 mb-2">
          {project.index} / project_detail
        </p>
        <h1 className="font-[var(--font-display)] text-4xl md:text-5xl font-semibold tracking-tight">
          {project.title}
        </h1>
        <div className="flex gap-2 flex-wrap mt-6">
          {project.stack.map((tech) => (
            <TechBadge key={tech} tech={tech} />
          ))}
        </div>
        <ImageSlider images={project.images} alt={project.title} />
        <p className="mt-8 text-lg text-[var(--color-muted)] leading-relaxed">
          {project.detail}
        </p>
      </section>
    </>
  );
}