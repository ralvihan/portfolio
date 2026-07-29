export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[var(--color-line)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-8 pb-3 flex items-center justify-between font-[var(--font-mono)] text-xs text-[var(--color-muted)] relative z-10">
        <span>// end_of_file</span>
        <span>© {new Date().getFullYear()} ralvihan</span>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-[10vw] sm:h-[11vw] md:h-[10vw] min-h-[45px] sm:min-h-[85px] overflow-hidden select-none relative">
        <svg
          viewBox="0 0 1000 200"
          className="w-full h-auto block"
          preserveAspectRatio="none"
        >
          <text
            x="0"
            y="175"
            textLength="1000"
            lengthAdjust="spacingAndGlyphs"
            className="font-[var(--font-display)] font-black fill-black"
            style={{ fontSize: "190px" }}
          >
            RALVIHAN
          </text>
        </svg>
      </div>
    </footer>
  );
}