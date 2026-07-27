import { Link } from "react-router-dom";
import { education } from "../data/education";

export default function Education() {
  return (
    <section id="education" className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24 border-t border-[var(--color-line)]">
      <h2 className="font-[var(--font-mono)] text-xs sm:text-sm text-[var(--color-muted)] mb-8 sm:mb-12">
        05 / education
      </h2>

      <div className="relative h-4 mb-8 hidden sm:block">
        <div className="absolute top-1/2 left-[15%] right-[15%] h-0.5 bg-black -translate-y-1/2" />
        <div className="relative grid grid-cols-2 h-full">
          {education.map((_, i) => (
            <div key={`dot-${i}`} className="flex justify-center items-center">
              <span className="w-3 h-3 rounded-full bg-white border-2 border-black" />
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-0">
        {education.map((item, i) => (
          <div key={`logo-${i}`} className="flex justify-center items-center h-32 sm:h-36">
            <img
              src={item.logo}
              alt={item.institution}
              className={`${item.logoClass} object-contain`}
            />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-0 text-center mt-6">
        {education.map((item, i) => (
          <div key={`text-${i}`}>
            <h3 className="text-lg sm:text-xl font-[var(--font-display)] font-bold hover:underline cursor-pointer">
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