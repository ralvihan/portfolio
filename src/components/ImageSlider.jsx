import { useState } from "react";

function IconChevronLeft() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function IconChevronRight() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

export default function ImageSlider({ images, alt }) {
  const [index, setIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  const getOffset = (i) => {
    const len = images.length;
    let diff = i - index;
    if (diff > len / 2) diff -= len;
    if (diff < -len / 2) diff += len;
    return diff;
  };

  return (
    <div className="mt-8">
      {/* wrapper penuh, cuma buat nge-clip biar ga bikin horizontal scroll di mobile */}
      <div className="relative w-full overflow-hidden py-2">
        {/* box ukuran TETAP buat gambar utama — sengaja lebih kecil dari full width biar ada ruang ngintip */}
        <div className="relative mx-auto w-full max-w-full sm:max-w-2xl">
          <div className="w-full aspect-video invisible" aria-hidden="true" />

          {images.map((src, i) => {
            const offset = getOffset(i);
            const isCenter = offset === 0;
            const isSide = offset === -1 || offset === 1;

            if (!isCenter && !isSide) return null;

            const posClass = isCenter
            ? "z-30 opacity-100 scale-100 translate-x-0"
            : offset === -1
            ? "z-20 opacity-60 scale-[0.85] -translate-x-[58%] hidden sm:block"
            : "z-20 opacity-60 scale-[0.85] translate-x-[58%] hidden sm:block";

            return (
                <div
                    key={i}
                    onClick={!isCenter ? () => setIndex(i) : undefined}
                    className={`absolute inset-0 rounded-lg overflow-hidden bg-[var(--color-bg)] transition-all duration-500 ease-out ${
                    isCenter ? "shadow-lg" : "shadow-sm cursor-pointer"
                    } ${posClass}`}
                >
                    <img
                    src={src}
                    alt={`${alt} ${i + 1}`}
                    className="w-full h-full object-cover"
                    />
                </div>
                );
          })}
        </div>
      </div>

      {images.length > 1 && (
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={prev}
            aria-label="Previous image"
            className="w-10 h-10 rounded-full border border-[var(--color-line)] flex items-center justify-center text-[var(--color-ink)] hover:bg-[var(--color-accent-soft)] transition-colors"
          >
            <IconChevronLeft />
          </button>
          <button
            onClick={next}
            aria-label="Next image"
            className="w-10 h-10 rounded-full border border-[var(--color-line)] flex items-center justify-center text-[var(--color-ink)] hover:bg-[var(--color-accent-soft)] transition-colors"
          >
            <IconChevronRight />
          </button>
        </div>
      )}
    </div>
  );
}