import { Link } from "react-router-dom";
import { experience } from "../data/experience";
import { formatDateRange } from "../utils/formatDate";

const VISIBLE_COUNT = 3;

function truncate(text, max = 160) {
  const str = Array.isArray(text) ? text.join(" ") : text;
  if (!str) return "";
  return str.length > max ? `${str.slice(0, max).trimEnd()}...` : str;
}

function sortExperience(list) {
  return [...list].sort((a, b) => {
    const aEnd = a.endDate ? new Date(a.endDate).getTime() : Infinity;
    const bEnd = b.endDate ? new Date(b.endDate).getTime() : Infinity;
    if (bEnd !== aEnd) return bEnd - aEnd;
    return new Date(b.startDate) - new Date(a.startDate);
  });
}

export default function Experience() {
  const sorted = sortExperience(experience);
  const visible = sorted.slice(0, VISIBLE_COUNT);
  const hasMore = sorted.length > VISIBLE_COUNT;

  return (
    <section id="experience" className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-16 border-t border-[var(--color-line)]">
      <h2 className="font-[var(--font-mono)] text-xs sm:text-sm text-[var(--color-muted)] mb-8 sm:mb-12">
        04 / experience
      </h2>
      <div className="space-y-px">
        {visible.map((item, i) => (
          <div
            key={item.slug}
            className="py-6 sm:py-8 border-b border-[var(--color-line)] grid grid-cols-1 md:grid-cols-[80px_1fr] gap-2 sm:gap-3 items-start"
          >
            <span className="font-[var(--font-mono)] font-bold text-[var(--color-bg)] bg-[var(--color-ink)] w-8 h-8 rounded-full flex items-center justify-center text-sm">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="flex flex-col-reverse sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6">
              <div className="flex-1 min-w-0">
                <Link
                  to={`/experience/${item.slug}`}
                  className="inline-block font-[var(--font-display)] text-xl sm:text-2xl font-semibold tracking-tight hover:text-[var(--color-accent)] hover:underline underline-offset-4 decoration-2 transition-colors"
                >
                  {item.title}
                </Link>
                <p className="font-[var(--font-mono)] text-xs text-[var(--color-muted)] mt-1">
                  {item.role} · {formatDateRange(item.startDate, item.endDate)}
                </p>
                <span className="inline-block mt-3 font-[var(--font-mono)] text-[10px] font-bold uppercase px-2.5 py-1 rounded bg-white text-[var(--color-ink)]">
                  {item.category}
                </span>
                <p className="mt-3 text-sm sm:text-base text-[var(--color-muted)]">
                  {truncate(item.detail)}
                </p>
              </div>
              {item.certificate && (
                <Link to={`/experience/${item.slug}`} className="block shrink-0 w-full sm:w-56">
                  <img
                    src={item.certificate}
                    alt={`Sertifikat ${item.title}`}
                    className="w-full aspect-video object-cover rounded-lg border border-[var(--color-line)]"
                  />
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>

      {hasMore && (
        <div className="flex justify-center mt-8">
          <Link
            to="/all-experience"
            className="font-[var(--font-mono)] text-sm border border-[var(--color-line)] rounded-full px-6 py-2.5 hover:bg-[var(--color-accent-soft)] transition-colors"
          >
            Lihat Semua Pengalaman ({sorted.length}) →
          </Link>
        </div>
      )}
    </section>
  );
}