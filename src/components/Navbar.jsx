import { Link } from "react-router-dom";

export default function Navbar() {
  const links = [
    { label: "Projects", to: "/projects" },
    { label: "About", to: "/about" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[var(--color-bg)]/90 backdrop-blur border-b border-[var(--color-line)]">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-[var(--font-display)] font-semibold text-lg tracking-tight">
          Jok<span className="text-[var(--color-accent)]">.</span>
        </Link>
        <div className="flex gap-8 font-[var(--font-mono)] text-sm text-[var(--color-muted)]">
          {links.map((link) => (
            <Link key={link.to} to={link.to} className="hover:text-[var(--color-ink)] transition-colors">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}