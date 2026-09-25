import { Link } from 'react-router-dom';
import { FaArrowRight, FaHandHoldingHeart, FaHandsHelping, FaHandshake } from 'react-icons/fa';
import SectionHeading from '../ui/SectionHeading';

const options = [
  {
    title: 'Donate',
    text: 'Fund bootcamp places, learning materials and mentorship for young leaders.',
    to: '/donate',
    icon: FaHandHoldingHeart,
    accent: 'bg-brand-red text-white',
  },
  {
    title: 'Volunteer',
    text: 'Share your skills as a facilitator, mentor or coach at our programs.',
    to: '/contact?subject=Volunteer',
    icon: FaHandsHelping,
    accent: 'bg-brand-green text-white',
  },
  {
    title: 'Become a Partner',
    text: 'Work with us to bring BUILD-IN-A-BOX to more young people across Africa.',
    to: '/contact?subject=Partnership',
    icon: FaHandshake,
    accent: 'bg-brand-amber text-ink',
  },
];

const GetInvolved = () => (
  <section className="section">
    <div className="container-page">
      <SectionHeading
        eyebrow="Get involved"
        title="Join us in making a difference"
        intro="Join us in making a difference in the lives of young leaders!"
      />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {options.map(({ title, text, to, icon: Icon, accent }) => (
          <Link
            key={title}
            to={to}
            className="group flex flex-col rounded-2xl bg-white p-8 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <span className={`flex h-14 w-14 items-center justify-center rounded-2xl ${accent}`}>
              <Icon size={24} />
            </span>
            <h3 className="mt-6 text-xl font-bold">{title}</h3>
            <p className="mt-2 flex-1 leading-relaxed text-neutral-600">{text}</p>
            <span className="mt-6 inline-flex items-center gap-2 font-bold text-ink transition group-hover:gap-3 group-hover:text-brand-red">
              {title} <FaArrowRight size={12} />
            </span>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default GetInvolved;
