import { useParams, Link, Navigate } from "react-router-dom";
import { education } from "../data/education";
import Navbar from "../components/Navbar";
import ImageSlider from "../components/ImageSlider";

export default function EducationActivityDetail() {
  const { slug, activitySlug } = useParams();
  const edu = education.find((e) => e.slug === slug);
  const activity = edu?.activities.find((a) => a.slug === activitySlug);

  if (!edu || !activity) return <Navigate to="/" replace />;

  return (
    <>
      <Navbar />
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-24 pb-16">
        <Link to={`/education/${edu.slug}`} className="font-[var(--font-mono)] text-sm text-[var(--color-muted)] hover:text-[var(--color-ink)]">
          ← back to {edu.institution}
        </Link>

        <p className="font-[var(--font-mono)] text-sm text-[var(--color-accent)] mt-8 mb-2">
          activity_detail
        </p>
        <h1 className="font-[var(--font-display)] text-4xl md:text-5xl font-semibold tracking-tight">
          {activity.title}
        </h1>
        <p className="font-[var(--font-mono)] text-sm text-[var(--color-muted)] mt-2">
          {activity.role} · {activity.period}
        </p>

        <span className="inline-block mt-4 font-[var(--font-mono)] text-xs border border-[var(--color-line)] rounded-full px-3 py-1 text-[var(--color-muted)]">
          {activity.category}
        </span>

        {activity.images && activity.images.length > 0 && (
          <ImageSlider images={activity.images} alt={activity.title} />
        )}

        <div className="mt-8 space-y-4">
          {(Array.isArray(activity.detail) ? activity.detail : [activity.detail]).map((p, i) => (
            <p key={i} className="text-lg text-[var(--color-ink)] leading-relaxed text-justify">
              {p}
            </p>
          ))}
        </div>
      </section>
    </>
  );
}