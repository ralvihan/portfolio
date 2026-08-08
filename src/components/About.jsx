import { education } from "../data/education";

export default function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-16 border-t border-[var(--color-line)]">
      <h2 className="font-[var(--font-mono)] text-xs sm:text-sm text-[var(--color-muted)] mb-6 sm:mb-8">
        05 / about
      </h2>
      <p className="text-xl sm:text-2xl md:text-3xl font-[var(--font-display)] font-medium leading-snug max-w-3xl">
        Informatics Engineering student and Full-Stack Web Developer — focused on building reliable web systems, from designing backend architecture and database management to delivering responsive user interfaces.
      </p>

      <div className="relative mt-16">
        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-black hidden sm:block" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-0">
          {education.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="flex justify-center items-center h-32 sm:h-36">
                <img
                  src={item.logo}
                  alt={item.institution}
                  className={`${item.logoClass} object-contain`}
                />
              </div>
              <h3 className="text-lg sm:text-xl font-[var(--font-display)] font-bold mt-4">
                {item.institution}
              </h3>
              <p className="text-[var(--color-muted)] mt-1">
                {item.degree}
              </p>
              <p className="font-[var(--font-mono)] text-sm text-[var(--color-muted)] mt-2">
                {item.period}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}