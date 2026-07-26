import { useParams, Link, Navigate } from "react-router-dom";
import { projects } from "../data/projects";
import Navbar from "../components/Navbar";
import TechBadge from "../components/TechBadge";
import ImageSlider from "../components/ImageSlider";

const HIGHLIGHT_WORDS = ["Silent Screen", "Godot 4.7", "pelecehan seksual", "GDScript", "horor", "horor psikologis", "psikologis", "kampus", "game"];

function highlightText(text, words) {
  if (!words || words.length === 0) return text;

  // urutkan dari yang paling panjang biar "Godot 4.7" ke-match duluan sebelum "Godot"
  const sorted = [...words].sort((a, b) => b.length - a.length);
  const pattern = sorted.map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|");
  const regex = new RegExp(`(${pattern})`, "gi");

  const parts = text.split(regex);
  const wordSet = new Set(words.map((w) => w.toLowerCase()));

  return parts.map((part, i) => {
    if (wordSet.has(part.toLowerCase())) {
      return (
        <span key={i} className="border-b-2 border-red-500 bg-red-500/10">
          {part}
        </span>
      );
    }
    return part;
  });
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <Navigate to="/" replace />;

  return (
    <>
      <Navbar />
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-24 pb-16">
        <Link to="/" className="font-[var(--font-mono)] text-sm text-[var(--color-muted)] hover:text-[var(--color-ink)]">
          ← back
        </Link>
        <p className="font-[var(--font-mono)] text-sm text-[var(--color-accent)] mt-8 mb-2">
          {project.index} / project_detail
        </p>
        <h1 className="font-[var(--font-display)] text-4xl md:text-5xl font-semibold tracking-tight">
          {project.title}
        </h1>
        {project.period && (
          <p className="font-[var(--font-mono)] text-sm text-[var(--color-muted)] mt-2">
            {project.period}
          </p>
        )}
        <div className="flex gap-2 flex-wrap mt-6">
          {project.stack.map((tech) => (
            <TechBadge key={tech} tech={tech} />
          ))}
        </div>
        <ImageSlider images={project.images} alt={project.title} />
        <div className="mt-8 space-y-4">
        {(Array.isArray(project.detail) ? project.detail : [project.detail]).map((paragraph, i) => (
            <p key={i} className="text-lg text-[var(--color-ink)] leading-relaxed text-justify">
            {highlightText(paragraph, HIGHLIGHT_WORDS)}
            </p>
        ))}
        </div>
      </section>
    </>
  );
}