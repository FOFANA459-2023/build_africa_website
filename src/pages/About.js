import { FaBullseye, FaEye } from 'react-icons/fa';
import usePageTitle from '../hooks/usePageTitle';
import { mission, partners, site, vision } from '../data/site';
import { photos } from '../data/gallery';
import PageHeader from '../components/ui/PageHeader';
import SectionHeading from '../components/ui/SectionHeading';
import BuildModel from '../components/sections/BuildModel';
import TeamGrid from '../components/sections/TeamGrid';
import ProgramCards from '../components/sections/ProgramCards';
import GetInvolved from '../components/sections/GetInvolved';

const pillars = [
  { title: 'Our Mission', text: mission, icon: FaBullseye, accent: 'bg-brand-red' },
  { title: 'Our Vision', text: vision, icon: FaEye, accent: 'bg-brand-green' },
];

const About = () => {
  usePageTitle('About');

  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="About Build Africa"
        subtitle={site.tagline}
        image={photos.facilitatorPresentation}
      />

      <section className="section">
        <div className="container-page grid gap-14 lg:grid-cols-2">
          <div className="space-y-6">
            {pillars.map(({ title, text, icon: Icon, accent }) => (
              <article key={title} className="rounded-3xl bg-neutral-50 p-8 ring-1 ring-black/5 md:p-10">
                <span className={`flex h-12 w-12 items-center justify-center rounded-2xl text-white ${accent}`}>
                  <Icon size={20} />
                </span>
                <h2 className="mt-6 text-2xl font-extrabold md:text-3xl">{title}</h2>
                <p className="mt-4 text-lg leading-relaxed text-neutral-600">{text}</p>
              </article>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4 self-center">
            <img
              src={photos.participantPitch.src}
              alt={photos.participantPitch.alt}
              loading="lazy"
              className="col-span-2 aspect-[16/10] w-full rounded-3xl object-cover object-top"
            />
            <img
              src={photos.teamWorkSession.src}
              alt={photos.teamWorkSession.alt}
              loading="lazy"
              className="aspect-square w-full rounded-3xl object-cover"
            />
            <img
              src={photos.facilitatorSpotlight.src}
              alt={photos.facilitatorSpotlight.alt}
              loading="lazy"
              className="aspect-square w-full rounded-3xl object-cover object-top"
            />
          </div>
        </div>
      </section>

      <BuildModel />
      <TeamGrid />

      <section className="section">
        <div className="container-page">
          <SectionHeading eyebrow="Partners" title="In partnership with" />
          <ul className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-2">
            {partners.map((partner) => (
              <li key={partner.name} className="rounded-2xl border-l-4 border-brand-amber bg-neutral-50 p-6">
                <p className="text-lg font-bold text-ink">{partner.name}</p>
                <p className="mt-1 text-neutral-600">{partner.role}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="bg-neutral-50">
        <ProgramCards />
      </div>
      <GetInvolved />
    </>
  );
};

export default About;
