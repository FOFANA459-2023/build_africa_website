import { FaArrowRight, FaCheck } from 'react-icons/fa';
import usePageTitle from '../hooks/usePageTitle';
import { programs } from '../data/programs';
import { galleryYears, photos } from '../data/gallery';
import PageHeader from '../components/ui/PageHeader';
import Button from '../components/ui/Button';
import BuildModel from '../components/sections/BuildModel';
import CampHighlights from '../components/sections/CampHighlights';
import GetInvolved from '../components/sections/GetInvolved';

const latestCamp = galleryYears[0];

// Extra detail shown alongside BUILD-IN-A-BOX, drawn from the latest camp.
const biabFacts = [
  'Run in partnership with the African Leadership Academy',
  `Latest bootcamp: ${latestCamp.date}`,
  `Hosted at the ${latestCamp.venue}`,
  'Participants tackle real community challenges with the BUILD model',
];

const Programs = () => {
  usePageTitle('Programs');

  return (
    <>
      <PageHeader
        eyebrow="What we do"
        title="Our Programs"
        subtitle="Building the future of Africa through education and entrepreneurship."
        image={photos.teamBrainstorm}
      />

      <section className="section">
        <div className="container-page space-y-20 md:space-y-28">
          {programs.map((program, index) => (
            <article
              key={program.id}
              id={program.id}
              className="grid scroll-mt-28 items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className={`overflow-hidden rounded-3xl shadow-lg ${program.fit === 'contain' ? 'bg-ink' : ''}`}>
                  <img
                    src={program.image.src}
                    alt={program.image.alt}
                    loading="lazy"
                    className={`aspect-[4/3] w-full ${program.fit === 'contain' ? 'object-contain' : 'object-cover'}`}
                  />
                </div>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red">
                  Program 0{index + 1}
                </p>
                <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">{program.title}</h2>
                <p className="mt-5 text-lg leading-relaxed text-neutral-600">{program.summary}</p>

                {program.id === 'build-in-a-box' && (
                  <ul className="mt-6 space-y-3">
                    {biabFacts.map((fact) => (
                      <li key={fact} className="flex items-start gap-3 text-neutral-700">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-green text-white">
                          <FaCheck size={10} />
                        </span>
                        {fact}
                      </li>
                    ))}
                  </ul>
                )}

                <Button to={program.cta.to} className="mt-8">
                  {program.cta.label} <FaArrowRight size={12} />
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <BuildModel />
      <CampHighlights />
      <GetInvolved />
    </>
  );
};

export default Programs;
