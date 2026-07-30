import { useEffect } from "react";
import { getLenis } from "../lib/lenis";

export default function Footer() {
  function handleBackToTop() {
    const lenis = getLenis();
    if (lenis) lenis.scrollTo(0);
    else window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer className="relative bg-[var(--color-ink)] overflow-hidden">
      <button
        onClick={handleBackToTop}
        className="group relative block w-full min-h-[90px] sm:min-h-[120px] cursor-pointer"
        aria-label="Back to top"
      >
        <svg
          viewBox="0 0 1000 90"
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 H1000 V0 C760,0 640,80 500,80 C360,80 240,0 0,0 Z"
            fill="var(--color-bg)"
          />
        </svg>
        <span className="absolute inset-x-0 top-6 flex flex-col items-center gap-0.5 font-[var(--font-mono)] text-[9px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--color-ink)] transition-transform duration-300 group-hover:-translate-y-1">
          <span>Back</span>
          <span>To</span>
          <span>Top</span>
        </span>
      </button>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-10 sm:pb-14">
        <div className="pt-2 sm:pt-6 font-[var(--font-mono)] text-xs sm:text-sm text-white/60">
          <div className="flex items-center justify-between border-t border-white/10 pt-6">
            <span className="text-white font-semibold">Raihan Alvian Nuryansyah</span>
            <span>Informatics Engineering Student</span>
          </div>
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10 text-[10px] sm:text-xs text-white/40">
            <span>// end_of_file</span>
            <span>© {new Date().getFullYear()} ralvihan. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}