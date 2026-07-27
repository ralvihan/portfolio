import { Link } from "react-router-dom";

function IconArrow() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export default function Button({ to, href, children, className = "" }) {
  const classes = `group relative inline-flex items-center gap-3 pl-1.5 pr-6 py-1.5 rounded-full border-2 border-[var(--color-ink)] font-[var(--font-mono)] text-sm font-bold uppercase tracking-wide text-[var(--color-ink)] overflow-hidden transition-colors duration-300 hover:text-[var(--color-bg)] ${className}`;

  const content = (
    <>
      <span className="absolute inset-0 bg-[var(--color-ink)] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out -z-10" />
      <span className="w-8 h-8 rounded-full bg-[var(--color-ink)] flex items-center justify-center text-[var(--color-bg)] shrink-0 transition-colors duration-300">
        <IconArrow />
      </span>
      <span>{children}</span>
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <Link to={to} className={classes}>
      {content}
    </Link>
  );
}