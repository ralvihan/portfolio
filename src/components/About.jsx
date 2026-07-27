import { Link } from "react-router-dom";
import { education } from "../data/education";

export default function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24 border-t border-[var(--color-line)]">
      <h2 className="font-[var(--font-mono)] text-xs sm:text-sm text-[var(--color-muted)] mb-6 sm:mb-8">
        04 / about
      </h2>
      <p className="text-xl sm:text-2xl md:text-3xl font-[var(--font-display)] font-medium leading-snug max-w-3xl">
        I study Informatics Engineering and build across the stack — Laravel,
        React, and beyond — with a habit of picking projects that need
        something more thoughtful than a CRUD app.
      </p>

      <div className="relative h-4 mt-16 mb-8 hidden sm:block">
        <div className="absolute top-1/2 left-[15%] right-[15%] h-0.5 bg-black -translate-y-1/2" />
        <div className="relative grid grid-cols-2 h-full">
          {education.map((_, i) => (
            <div key={`dot-${i}`} className="flex justify-center items-center">
              <span className="w-3 h-3 rounded-full bg-white border-2 border-black" />
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-0 mt-12 sm:mt-0">
        {education.map((item, i) => (
          <div key={i} className="flex flex-col items-center text-center">
            <div className="flex justify-center items-center h-32 sm:h-36">
              <img
                src={item.logo}
                alt={item.institution}
                className={`${item.logoClass} object-contain`}
              />
            </div>
            <h3 className="text-lg sm:text-xl font-[var(--font-display)] font-bold hover:underline cursor-pointer mt-4">
              {item.institution}
            </h3>
            <p className="text-[var(--color-muted)] mt-1">
              {item.degree}
            </p>
            <p className="font-[var(--font-mono)] text-sm text-[var(--color-muted)] mt-2">
              {item.period}
            </p>
            <Link
              to={`/education/${item.slug}`}
              className="inline-block font-[var(--font-mono)] text-xs text-[var(--color-accent)] mt-3 hover:underline"
            >
              View Detail →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}