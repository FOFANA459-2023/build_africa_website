import { useEffect, useRef } from 'react';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';

const Lightbox = ({ photos, index, onClose, onNavigate }) => {
  const closeRef = useRef(null);
  const photo = photos[index];

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNavigate(1);
      if (e.key === 'ArrowLeft') onNavigate(-1);
    };
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose, onNavigate]);

  const control =
    'flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white hover:text-ink';

  return (
    <div
      className="fixed inset-0 z-50 flex animate-fade-in flex-col bg-ink/95"
      role="dialog"
      aria-modal="true"
      aria-label="Photo viewer"
      onClick={onClose}
    >
      <div className="flex items-center justify-between p-4 text-sm text-neutral-300">
        <span>
          {index + 1} / {photos.length}
        </span>
        <button ref={closeRef} type="button" onClick={onClose} className={control} aria-label="Close">
          <FaTimes />
        </button>
      </div>

      <div className="flex min-h-0 flex-1 items-center justify-between gap-2 px-2 md:px-6">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onNavigate(-1);
          }}
          className={`${control} shrink-0`}
          aria-label="Previous photo"
        >
          <FaChevronLeft />
        </button>
        <figure className="flex h-full min-w-0 flex-1 flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
          <img
            key={photo.src}
            src={photo.src}
            alt={photo.alt}
            className="max-h-[calc(100vh-10rem)] max-w-full animate-fade-in rounded-lg object-contain"
          />
          <figcaption className="mt-4 max-w-2xl px-4 text-center text-sm text-neutral-300">{photo.alt}</figcaption>
        </figure>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onNavigate(1);
          }}
          className={`${control} shrink-0`}
          aria-label="Next photo"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Lightbox;
