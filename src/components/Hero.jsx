import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section id="home" className="max-w-5xl mx-auto px-4 sm:px-6 pt-28 sm:pt-40 pb-16 sm:pb-24">
      <p className="font-[var(--font-mono)] text-xs sm:text-sm text-[var(--color-accent)] mb-4">
        status: available for internship
      </p>
      <h1 className="font-[var(--font-display)] text-3xl sm:text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1] md:leading-[1.05] max-w-3xl">
        Building systems that make decisions clearer.
      </h1>
      <p className="mt-4 sm:mt-6 text-base sm:text-lg text-[var(--color-muted)] max-w-xl">
        Informatics Engineering student focused on full-stack web development —
        from diagnostic systems to interactive 3D experiences.
      </p>
      <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 font-[var(--font-mono)] text-sm">
        <Link to="/projects" className="px-5 py-3 bg-[var(--color-ink)] text-[var(--color-bg)] rounded-md hover:bg-[var(--color-accent)] transition-colors text-center">
          view_projects()
        </Link>
        <Link to="/contact" className="px-5 py-3 border border-[var(--color-line)] rounded-md hover:border-[var(--color-ink)] transition-colors text-center">
          say_hello()
        </Link>
      </div>
    </section>
  );
}