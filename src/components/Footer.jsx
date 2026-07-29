export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[var(--color-line)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-8 flex items-center justify-between font-[var(--font-mono)] text-xs text-[var(--color-muted)] relative z-10">
        <span>// end_of_file</span>
        <span>© {new Date().getFullYear()} ralvihan</span>
      </div>

      <div className="h-[12vw] sm:h-[11vw] md:h-[10vw] min-h-[85px] overflow-hidden select-none relative">
        <h2 className="absolute top-0 left-1/2 -translate-x-1/2 font-[var(--font-display)] font-black leading-none tracking-tight text-black text-[22vw] sm:text-[18vw] md:text-[15vw] whitespace-nowrap">
          RALVIHAN
        </h2>
      </div>
    </footer>
  );
}