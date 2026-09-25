import { useCallback, useState } from 'react';
import { FaCalendarAlt, FaExpand, FaMapMarkerAlt } from 'react-icons/fa';
import Lightbox from './Lightbox';

const chunk = (items, size) =>
  Array.from({ length: Math.ceil(items.length / size) }, (_, i) => items.slice(i * size, i * size + size));

// A smaller row (fewer photos sharing the row's width) renders taller, since every photo
// in a justified row shares one height. Used to give the leading pair of photos a bigger row.
const chunkFirst = (items, firstSize, restSize) => [
  items.slice(0, firstSize),
  ...chunk(items.slice(firstSize), restSize),
];

// One photo tile: its width is proportional to its aspect ratio, so every photo in a
// row shares one height and the row ends flush on both sides — without cropping.
const Tile = ({ photo, index, onOpen }) => (
  <button
    type="button"
    onClick={() => onOpen(index)}
    style={{ flex: `${photo.width / photo.height} 1 0%` }}
    className="group relative min-w-0 overflow-hidden rounded-2xl"
    aria-label={`Open ${photo.alt}`}
  >
    <img
      src={photo.src}
      alt={photo.alt}
      width={photo.width}
      height={photo.height}
      loading="lazy"
      className="block h-auto w-full transition duration-500 group-hover:scale-105"
    />
    <span className="absolute inset-x-0 bottom-0 hidden bg-gradient-to-t from-ink/80 to-transparent p-4 pt-10 text-left text-sm text-white opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100 md:block">
      {photo.alt}
    </span>
  </button>
);

// Justified rows, shapes staying as varied as the source photos. The first row is smaller
// on both breakpoints (2 photos instead of 3 on desktop, same 2 on mobile), so the leading
// pair renders noticeably bigger than the rest — the grid's featured shot leads that pair.
const JustifiedGrid = ({ photos, onOpen }) => {
  const mobileRows = chunkFirst(photos, 2, 2);
  const desktopRows = chunkFirst(photos, 2, 3);

  const renderRow = (row, r, gapClass) => (
    <div key={r} className={`flex ${gapClass}`}>
      {row.map((photo) => (
        <Tile key={photo.src} photo={photo} index={photos.indexOf(photo)} onOpen={onOpen} />
      ))}
    </div>
  );

  return (
    <>
      <div className="space-y-3 md:hidden">{mobileRows.map((row, r) => renderRow(row, r, 'gap-3'))}</div>
      <div className="hidden space-y-4 md:block">{desktopRows.map((row, r) => renderRow(row, r, 'gap-4'))}</div>
    </>
  );
};

const YearAlbum = ({ album }) => {
  // Cover first, so the lightbox walks through every photo in the album.
  const allPhotos = [album.cover, ...album.photos];
  const [openIndex, setOpenIndex] = useState(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const navigate = useCallback(
    (step) => setOpenIndex((i) => (i + step + allPhotos.length) % allPhotos.length),
    [allPhotos.length]
  );

  return (
    <section id={`year-${album.year}`} className="scroll-mt-28">
      {/* Stacked: heading → cover → story. From lg, description on the left and the cover photo
          on the right, in even halves at its natural aspect ratio (no stretch or crop) so its
          size tracks the text column's instead of being capped small against it — vertically
          centered so any leftover height reads as balanced, not lopsided. */}
      <div className="grid gap-y-8 lg:grid-cols-2 lg:gap-x-10 lg:gap-y-6 xl:gap-x-14">
        <header>
          <p className="text-6xl font-extrabold leading-none text-brand-amber md:text-7xl lg:text-6xl">{album.year}</p>
          <h2 className="mt-4 text-2xl font-extrabold md:text-3xl">{album.title}</h2>
          <ul className="mt-5 space-y-2 text-sm text-neutral-600">
            <li className="flex items-start gap-3">
              <FaCalendarAlt className="mt-0.5 shrink-0 text-brand-red" /> {album.date}
            </li>
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-0.5 shrink-0 text-brand-red" /> {album.venue}
            </li>
          </ul>
        </header>

        <button
          type="button"
          onClick={() => setOpenIndex(0)}
          className="group relative block w-full overflow-hidden rounded-3xl shadow-lg lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-center"
          aria-label={`Open ${album.cover.alt}`}
        >
          <img src={album.cover.src} alt={album.cover.alt} className="aspect-[4/3] w-full object-cover" />
          <span className="absolute right-4 top-4 flex items-center gap-2 rounded-full bg-ink/80 px-4 py-2 text-xs font-bold text-white opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100">
            <FaExpand /> View full size
          </span>
        </button>

        <div className="max-w-3xl space-y-4 leading-relaxed text-neutral-700">
          {album.story.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
      </div>

      <div className="mb-6 mt-14 flex items-center gap-4 md:mt-16">
        <span className="h-6 w-1.5 rounded-full bg-brand-red" aria-hidden="true" />
        <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-ink">Bootcamp highlights</h3>
        <span className="h-px flex-1 bg-neutral-200" aria-hidden="true" />
        <span className="text-sm text-neutral-500">{album.photos.length} photos</span>
      </div>

      <JustifiedGrid photos={album.photos} onOpen={(i) => setOpenIndex(i + 1)} />

      {openIndex !== null && (
        <Lightbox photos={allPhotos} index={openIndex} onClose={close} onNavigate={navigate} />
      )}
    </section>
  );
};

export default YearAlbum;
