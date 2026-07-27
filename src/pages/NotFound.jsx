import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-24 pb-16 min-h-screen flex flex-col items-center justify-center text-center">
        <p className="font-[var(--font-mono)] text-sm text-[var(--color-accent)] mb-4">
          404 / not_found
        </p>
        <h1
          className="glitch font-[var(--font-display)] text-4xl md:text-6xl font-semibold tracking-tight"
          data-text="Page not found"
        >
          Page not found
        </h1>
        <p className="text-[var(--color-muted)] mt-4 max-w-md">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="font-[var(--font-mono)] text-sm text-[var(--color-accent)] mt-8 hover:underline"
        >
          ← back to home
        </Link>
      </section>
    </>
  );
}