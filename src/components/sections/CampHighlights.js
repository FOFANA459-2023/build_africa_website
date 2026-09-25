import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { photos } from '../../data/gallery';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

// Tiles are matched to each photo's orientation so the crop never loses faces.
const tiles = [
  { photo: photos.fullHallSession, className: 'col-span-2 row-span-2', position: 'object-center' },
  { photo: photos.facilitatorSpotlight, className: 'row-span-2', position: 'object-top' },
  { photo: photos.teamWorkSession, className: '', position: 'object-center' },
  { photo: photos.participantPitch, className: '', position: 'object-top' },
];

const CampHighlights = () => (
  <section className="section bg-neutral-50">
    <div className="container-page">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <SectionHeading
          align="left"
          eyebrow="Gallery"
          title="Inside BUILD-IN-A-BOX 2024"
          intro="Two days of design thinking, pitching and teamwork at the Innoignite Innovative Hub."
        />
        <Button to="/gallery" variant="outlineDark" className="self-start md:self-auto">
          View the gallery <FaArrowRight size={12} />
        </Button>
      </div>

      <div className="mt-10 grid auto-rows-[160px] grid-cols-2 gap-3 md:auto-rows-[220px] md:grid-cols-4 md:gap-4">
        {tiles.map(({ photo, className, position }) => (
          <Link
            key={photo.src}
            to="/gallery"
            className={`group relative overflow-hidden rounded-2xl ${className}`}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              className={`h-full w-full object-cover ${position} transition duration-500 group-hover:scale-105`}
            />
            <span className="absolute inset-0 bg-ink/0 transition group-hover:bg-ink/20" aria-hidden="true" />
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default CampHighlights;
