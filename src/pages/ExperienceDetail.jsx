import { useParams, Link, Navigate } from "react-router-dom";
import { experience } from "../data/experience";
import Navbar from "../components/Navbar";
import ImageSlider from "../components/ImageSlider";
import { formatDateRange } from "../utils/formatDate";
import Footer from "../components/Footer";

export default function ExperienceDetail() {
  const { slug } = useParams();
  const item = experience.find((e) => e.slug === slug);

  if (!item) return <Navigate to="/" replace />;

  return (
    <>
      <Navbar />
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-24 pb-16">
        <Link to="/experience" className="font-[var(--font-mono)] text-sm text-[var(--color-muted)] hover:text-[var(--color-ink)]">
          ← back
        </Link>

        <p className="font-[var(--font-mono)] text-sm text-[var(--color-accent)] mt-8 mb-2">
          experience_detail
        </p>
        <h1 className="font-[var(--font-display)] text-4xl md:text-5xl font-semibold tracking-tight">
          {item.title}
        </h1>
        <p className="font-[var(--font-mono)] text-sm text-[var(--color-muted)] mt-2">
          {item.role} · {formatDateRange(item.startDate, item.endDate)}
        </p>

        <span className="inline-block mt-4 font-[var(--font-mono)] text-xs border border-[var(--color-line)] rounded-full px-3 py-1 text-[var(--color-muted)]">
          {item.category}
        </span>

        {item.images && item.images.length > 0 && (
          <ImageSlider images={item.images} alt={item.title} />
        )}

        <div className="mt-8 space-y-4">
          {(Array.isArray(item.detail) ? item.detail : [item.detail]).map((p, i) => (
            <p key={i} className="text-lg text-[var(--color-ink)] leading-relaxed text-justify">
              {p}
            </p>
          ))}
        </div>

        {item.certificate && (
          <div className="mt-10 border-t border-[var(--color-line)] pt-8">
            <p className="font-[var(--font-mono)] text-xs sm:text-sm text-[var(--color-muted)] mb-4">
              certificate
            </p>
            <img
              src={item.certificate}
              alt={`Sertifikat ${item.title}`}
              className="w-full max-w-xl rounded-lg border border-[var(--color-line)]"
            />
          </div>
        )}
      </section>
      <Footer />
    </>
  );
}