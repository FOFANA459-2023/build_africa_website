import { useState } from 'react';
import { team } from '../../data/team';
import SectionHeading from '../ui/SectionHeading';

const avatarColors = ['bg-brand-red', 'bg-brand-green', 'bg-brand-amber', 'bg-brand-lime'];

const initials = (name) =>
  name
    .split(' ')
    .filter((part) => /^[A-Z]/.test(part) && !part.endsWith('.'))
    .map((part) => part[0])
    .slice(0, 2)
    .join('');

const TeamCard = ({ member, index }) => {
  const [expanded, setExpanded] = useState(false);
  const longBio = member.bio && member.bio.length > 220;

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
      {member.photo ? (
        <img
          src={member.photo}
          alt={member.name}
          loading="lazy"
          className="aspect-[4/5] w-full object-cover object-top"
        />
      ) : (
        <div
          className={`flex aspect-[4/5] w-full items-center justify-center ${avatarColors[index % avatarColors.length]}`}
          aria-hidden="true"
        >
          <span className="text-7xl font-extrabold text-white/90">{initials(member.name)}</span>
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold">{member.name}</h3>
        <p className="mt-1 text-sm font-semibold text-brand-red">{member.role}</p>
        {member.bio && (
          <>
            <p className={`mt-4 text-sm leading-relaxed text-neutral-600 ${longBio && !expanded ? 'line-clamp-5' : ''}`}>
              {member.bio}
            </p>
            {longBio && (
              <button
                type="button"
                onClick={() => setExpanded((open) => !open)}
                className="mt-3 self-start text-sm font-bold text-brand-green hover:text-brand-red"
                aria-expanded={expanded}
              >
                {expanded ? 'Show less' : 'Read full bio'}
              </button>
            )}
          </>
        )}
      </div>
    </article>
  );
};

const TeamGrid = () => (
  <section className="section bg-neutral-50">
    <div className="container-page">
      <SectionHeading eyebrow="Our people" title="Meet Our Team" />
      <div className="mx-auto mt-12 grid max-w-5xl items-start gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((member, index) => (
          <TeamCard key={member.name} member={member} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default TeamGrid;
