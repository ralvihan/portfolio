export default function Contact() {
  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 py-24 border-t border-[var(--color-line)]">
      <h2 className="font-[var(--font-mono)] text-sm text-[var(--color-muted)] mb-8">
        04 / contact
      </h2>
      <a
        href="mailto:youremail@example.com"
        className="font-[var(--font-display)] text-4xl md:text-6xl font-semibold tracking-tight hover:text-[var(--color-accent)] transition-colors"
      >
        youremail@example.com
      </a>
      <div className="mt-8 flex gap-6 font-[var(--font-mono)] text-sm text-[var(--color-muted)]">
        <a href="#" className="hover:text-[var(--color-ink)]">GitHub</a>
        <a href="#" className="hover:text-[var(--color-ink)]">LinkedIn</a>
        <a href="#" className="hover:text-[var(--color-ink)]">Instagram</a>
      </div>
      <p className="mt-16 font-[var(--font-mono)] text-xs text-[var(--color-muted)]">
        © 2026 Jok
      </p>
    </section>
  );
}