import { FaArrowRight } from 'react-icons/fa';
import { photos } from '../../data/gallery';
import Button from '../ui/Button';

// The camp photos are ~900px wide, so they're framed rather than stretched full-bleed.
const Hero = () => (
  <section className="relative overflow-hidden bg-ink">
    <div className="container-page grid items-center gap-14 py-16 md:py-24 lg:grid-cols-2 lg:gap-10">
      <div>
        <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-brand-amber">
          BUILD-IN-A-BOX · Liberia
        </p>
        <h1 className="text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
          Empowering <span className="text-brand-amber">Future Leaders</span> in Africa
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-300">
          BUILD-IN-A-BOX: Our annual entrepreneurial leadership camp in partnership with the
          African Leadership Academy.
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <Button to="/donate">Support Our Mission</Button>
          <Button to="/about" variant="outlineLight">
            Learn More <FaArrowRight size={12} />
          </Button>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-xl lg:mr-0">
        <div className="absolute -right-4 -top-4 h-24 w-24 rounded-2xl bg-brand-red md:-right-6 md:-top-6" aria-hidden="true" />
        <div className="absolute -bottom-4 left-10 h-16 w-40 rounded-2xl bg-brand-lime" aria-hidden="true" />
        <figure className="relative overflow-hidden rounded-3xl shadow-2xl ring-1 ring-white/10">
          <img
            src={photos.groupPhoto.src}
            alt={photos.groupPhoto.alt}
            className="aspect-[4/3] w-full object-cover"
          />
        </figure>
        <figure className="absolute -bottom-10 -left-4 hidden w-40 overflow-hidden rounded-2xl border-4 border-ink shadow-xl sm:block md:-left-10 md:w-48">
          <img
            src={photos.participantPitch.src}
            alt={photos.participantPitch.alt}
            className="aspect-[4/5] w-full object-cover"
          />
        </figure>
      </div>
    </div>
    <div className="pattern-triangles h-4 opacity-90" aria-hidden="true" />
  </section>
);

export default Hero;
