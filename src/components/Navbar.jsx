export default function Navbar() {
  const links = [
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[var(--color-bg)]/90 backdrop-blur border-b border-[var(--color-line)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
        <a href="#" className="font-[var(--font-display)] font-semibold text-base sm:text-lg tracking-tight">
          Jok<span className="text-[var(--color-accent)]">.</span>
        </a>
        <div className="flex gap-4 sm:gap-8 font-[var(--font-mono)] text-xs sm:text-sm text-[var(--color-muted)]">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-[var(--color-ink)] transition-colors">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}