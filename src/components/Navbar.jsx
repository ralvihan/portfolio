import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function IconMenu() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function IconClose() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

const links = [
  { label: "Tech Stack", to: "/techstack", id: "techstack" },
  { label: "Projects", to: "/projects", id: "projects" },
  { label: "About", to: "/about", id: "about" },
  { label: "Contact", to: "/contact", id: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    const ids = ["home", ...links.map((l) => l.id)];
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          setActiveId(visible.target.id === "home" ? null : visible.target.id);
        }
      },
      { threshold: 0, rootMargin: "-45% 0px -45% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[var(--color-bg)]/90 backdrop-blur border-b border-[var(--color-line)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="font-[var(--font-display)] font-semibold text-base sm:text-lg tracking-tight"
        >
          ralvihan<span className="text-[var(--color-accent)]">.</span>
        </Link>

        {/* nav links desktop */}
        <div className="hidden sm:flex gap-8 font-[var(--font-mono)] text-sm text-[var(--color-muted)]">
          {links.map((link) => {
            const isActive = activeId === link.id;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`pb-1 border-b-2 transition-colors ${
                  isActive
                    ? "border-[var(--color-ink)] text-[var(--color-ink)]"
                    : "border-transparent hover:text-[var(--color-ink)]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* hamburger mobile */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="sm:hidden text-[var(--color-ink)]"
        >
          {open ? <IconClose /> : <IconMenu />}
        </button>
      </div>

      {/* dropdown mobile */}
      {open && (
        <div className="sm:hidden border-t border-[var(--color-line)] bg-[var(--color-bg)]">
          <div className="px-4 py-3 flex flex-col gap-3 font-[var(--font-mono)] text-sm text-[var(--color-muted)]">
            {links.map((link) => {
              const isActive = activeId === link.id;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={`transition-colors ${
                    isActive ? "text-[var(--color-ink)] font-semibold" : "hover:text-[var(--color-ink)]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}