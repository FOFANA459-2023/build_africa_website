import { FaArrowRight } from 'react-icons/fa';
import usePageTitle from '../hooks/usePageTitle';
import { mission } from '../data/site';
import { photos } from '../data/gallery';
import Hero from '../components/sections/Hero';
import ImpactStats from '../components/sections/ImpactStats';
import BuildModel from '../components/sections/BuildModel';
import ProgramCards from '../components/sections/ProgramCards';
import CampHighlights from '../components/sections/CampHighlights';
import Testimonials from '../components/sections/Testimonials';
import GetInvolved from '../components/sections/GetInvolved';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';

const Home = () => {
  usePageTitle();

  return (
    <>
      <Hero />

      <section className="section">
        <div className="container-page grid items-center gap-14 lg:grid-cols-2">
          <div className="grid grid-cols-5 gap-4">
            <img
              src={photos.teamBrainstorm.src}
              alt={photos.teamBrainstorm.alt}
              loading="lazy"
              className="col-span-3 aspect-[3/4] h-full w-full rounded-3xl object-cover"
            />
            <div className="col-span-2 flex flex-col gap-4 pt-12">
              <img
                src={photos.participantsSeated.src}
                alt={photos.participantsSeated.alt}
                loading="lazy"
                className="aspect-[3/4] w-full rounded-3xl object-cover"
              />
              <div className="rounded-3xl bg-brand-amber p-5">
                <p className="text-3xl font-extrabold text-ink">200+</p>
                <p className="text-sm font-semibold text-ink/80">Students Trained</p>
              </div>
            </div>
          </div>

          <div>
            <SectionHeading
              align="left"
              eyebrow="Who we are"
              title="Building the future of Africa through education and entrepreneurship"
            />
            <p className="mt-6 text-lg leading-relaxed text-neutral-600">{mission}</p>
            <Button to="/about" variant="dark" className="mt-8">
              More about us <FaArrowRight size={12} />
            </Button>
          </div>
        </div>
      </section>

      <ImpactStats />
      <BuildModel />
      <ProgramCards />
      <CampHighlights />
      <Testimonials />
      <GetInvolved />
    </>
  );
};

export default Home;
