import { useState } from "react";

function IconChevronLeft() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function IconChevronRight() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

export default function ImageSlider({ images, alt }) {
  const [index, setIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div className="mt-8">
      <div className="relative rounded-lg border border-[var(--color-line)] overflow-hidden">
        <img
          src={images[index]}
          alt={`${alt} ${index + 1}`}
          className="w-full aspect-video object-cover"
        />

        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[var(--color-bg)]/90 border border-[var(--color-line)] flex items-center justify-center text-[var(--color-ink)] hover:bg-[var(--color-bg)] transition-colors"
            >
              <IconChevronLeft />
            </button>
            <button
              onClick={next}
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[var(--color-bg)]/90 border border-[var(--color-line)] flex items-center justify-center text-[var(--color-ink)] hover:bg-[var(--color-bg)] transition-colors"
            >
              <IconChevronRight />
            </button>

            <span className="absolute bottom-3 right-3 font-[var(--font-mono)] text-xs bg-[var(--color-bg)]/90 border border-[var(--color-line)] rounded-full px-2.5 py-1 text-[var(--color-muted)]">
              {index + 1} / {images.length}
            </span>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="flex gap-2 mt-3 justify-center">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to image ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-6 bg-[var(--color-ink)]" : "w-2 bg-[var(--color-line)]"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}