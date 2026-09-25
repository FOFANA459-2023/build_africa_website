import usePageTitle from '../hooks/usePageTitle';
import { galleryYears, photos } from '../data/gallery';
import PageHeader from '../components/ui/PageHeader';
import YearAlbum from '../components/gallery/YearAlbum';

const Gallery = () => {
  usePageTitle('Gallery');

  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Annual Camp Photos"
        subtitle="Moments from BUILD-IN-A-BOX, our entrepreneurial leadership bootcamp."
        image={photos.fullHallSession}
      />

      {galleryYears.length > 1 && (
        <nav className="sticky top-20 z-30 border-b border-black/5 bg-white/90 backdrop-blur" aria-label="Years">
          <ul className="container-page flex gap-2 overflow-x-auto py-3">
            {galleryYears.map(({ year }) => (
              <li key={year}>
                <a
                  href={`#year-${year}`}
                  className="block rounded-full bg-neutral-100 px-4 py-1.5 text-sm font-bold text-ink hover:bg-brand-amber"
                >
                  {year}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}

      <div className="section">
        <div className="container-page space-y-24">
          {galleryYears.map((album) => (
            <YearAlbum key={album.year} album={album} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;
