import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { programs } from '../../data/programs';
import SectionHeading from '../ui/SectionHeading';

const ProgramCards = ({ eyebrow = 'What we do', title = 'Our Programs', intro }) => (
  <section className="section">
    <div className="container-page">
      <SectionHeading eyebrow={eyebrow} title={title} intro={intro} />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {programs.map((program) => (
          <article
            key={program.id}
            className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className={`aspect-[4/3] overflow-hidden ${program.fit === 'contain' ? 'bg-ink' : ''}`}>
              <img
                src={program.image.src}
                alt={program.image.alt}
                loading="lazy"
                className={`h-full w-full transition duration-500 group-hover:scale-105 ${
                  program.fit === 'contain' ? 'object-contain' : 'object-cover'
                }`}
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-xl font-bold">{program.title}</h3>
              <p className="mt-3 flex-1 leading-relaxed text-neutral-600">{program.summary}</p>
              <Link
                to={program.cta.to}
                className="mt-6 inline-flex items-center gap-2 font-bold text-brand-green transition hover:gap-3 hover:text-brand-red"
              >
                {program.cta.label} <FaArrowRight size={12} />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default ProgramCards;
