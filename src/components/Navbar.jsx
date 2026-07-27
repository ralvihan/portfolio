import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function IconMenu() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function IconClose() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

const links = [
  { label: "Tech Stack", to: "/techstack", id: "techstack" },
  { label: "Projects", to: "/projects", id: "projects" },
  { label: "About", to: "/about", id: "about" },
  { label: "Education", to: "/education", id: "education" },
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
    <nav className="fixed top-4 sm:top-6 inset-x-0 z-50 px-4">
      <div className="max-w-3xl mx-auto bg-[var(--color-ink)] rounded-full shadow-lg flex items-center justify-between gap-2 pl-2 pr-4 py-2">
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center shrink-0 font-[var(--font-display)] font-semibold text-sm text-[var(--color-ink)]"
        >
          r
        </Link>

        {/* nav links desktop */}
        <div className="hidden sm:flex items-center gap-6 font-[var(--font-mono)] text-sm text-white/70">
          {links.map((link) => {
            const isActive = activeId === link.id;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`transition-colors ${
                  isActive ? "text-white" : "hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* nama, pakai bg putih */}
        <span className="hidden sm:inline-block bg-white rounded-full px-4 py-2 font-[var(--font-display)] text-sm font-medium text-[var(--color-ink)] shrink-0 whitespace-nowrap">
          Raihan Alvian Nuryansyah
        </span>

        {/* hamburger mobile */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="sm:hidden text-white w-9 h-9 flex items-center justify-center"
        >
          {open ? <IconClose /> : <IconMenu />}
        </button>
      </div>

      {/* dropdown mobile */}
      {open && (
        <div className="sm:hidden max-w-3xl mx-auto mt-2 bg-[var(--color-ink)] rounded-2xl shadow-lg">
          <div className="px-5 py-4 flex flex-col gap-3 font-[var(--font-mono)] text-sm text-white/70">
            {links.map((link) => {
              const isActive = activeId === link.id;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={`transition-colors ${
                    isActive ? "text-white font-semibold" : "hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <span className="inline-block bg-white rounded-full px-4 py-2 text-[var(--color-ink)] font-medium mt-1 w-fit">
              Raihan Alvian Nuryansyah
            </span>
          </div>
        </div>
      )}
    </nav>
  );
}