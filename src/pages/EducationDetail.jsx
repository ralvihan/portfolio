import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { education } from "../data/education";
import Navbar from "../components/Navbar";
import { formatMonthYear } from "../utils/formatDate";
import Footer from "../components/Footer";

export default function EducationDetail() {
  const { slug } = useParams();
  const edu = education.find((e) => e.slug === slug);
  const [sort, setSort] = useState("newest");
  const [category, setCategory] = useState("Semua");

  if (!edu) return <Navigate to="/" replace />;

  const categories = ["Semua", ...new Set(edu.activities.map((a) => a.category))];

  const filtered = edu.activities
    .filter((a) => category === "Semua" || a.category === category)
    .sort((a, b) => {
      const da = new Date(a.date);
      const db = new Date(b.date);
      return sort === "newest" ? db - da : da - db;
    });

  return (
    <>
      <Navbar />
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-24 pb-16">
        <Link to="/about" className="font-[var(--font-mono)] text-sm text-[var(--color-muted)] hover:text-[var(--color-ink)]">
          ← back
        </Link>

        <div className="flex items-center gap-5 mt-8">
          <img src={edu.logo} alt={edu.institution} className="w-16 h-16 sm:w-20 sm:h-20 object-contain" />
          <div>
            <p className="font-[var(--font-mono)] text-sm text-[var(--color-accent)] mb-1">
              education_detail
            </p>
            <h1 className="font-[var(--font-display)] text-3xl md:text-4xl font-semibold tracking-tight">
              {edu.institution}
            </h1>
            <p className="font-[var(--font-mono)] text-sm text-[var(--color-muted)] mt-1">
              {edu.degree} · {edu.period}
            </p>
          </div>
        </div>

        {edu.description && (
          <p className="text-lg text-[var(--color-muted)] leading-relaxed mt-6 max-w-3xl">
            {edu.description}
          </p>
        )}

        <div className="flex flex-wrap items-center justify-between gap-4 mt-12 mb-6 border-t border-[var(--color-line)] pt-8">
          <h2 className="font-[var(--font-mono)] text-xs sm:text-sm text-[var(--color-muted)]">
            activities
          </h2>

          <div className="flex flex-wrap gap-2">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="font-[var(--font-mono)] text-xs border border-[var(--color-line)] rounded-full px-3 py-1.5 bg-transparent"
            >
              {categories.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="font-[var(--font-mono)] text-xs border border-[var(--color-line)] rounded-full px-3 py-1.5 bg-transparent"
            >
              <option value="newest">Terbaru</option>
              <option value="oldest">Terlama</option>
            </select>
          </div>
        </div>

        <div className="space-y-4">
          {filtered.map((activity) => (
            <Link
              key={activity.slug}
              to={`/education/${edu.slug}/${activity.slug}`}
              className="block border border-[var(--color-line)] rounded-lg p-5 hover:bg-[var(--color-accent-soft)] transition-colors"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="font-[var(--font-display)] font-semibold text-lg">
                    {activity.title}
                  </h3>
                  <p className="text-[var(--color-muted)] text-sm mt-1">
                    {activity.role} · {formatMonthYear(activity.date)}
                  </p>
                </div>
                <span className="font-[var(--font-mono)] text-xs text-[var(--color-muted)] whitespace-nowrap border border-[var(--color-line)] rounded-full px-2.5 py-1">
                  {activity.category}
                </span>
              </div>
              {activity.summary && (
                <p className="text-[var(--color-muted)] mt-3 text-sm">
                  {activity.summary}
                </p>
              )}
            </Link>
          ))}

          {filtered.length === 0 && (
            <p className="text-[var(--color-muted)] text-sm">Belum ada kegiatan di kategori ini.</p>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}