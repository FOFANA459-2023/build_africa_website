import { impactStats } from '../../data/site';
import SectionHeading from '../ui/SectionHeading';

const ImpactStats = () => (
  <section className="section bg-neutral-50">
    <div className="container-page">
      <SectionHeading eyebrow="Our impact" title="Young leaders, real results" />
      <dl className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {impactStats.map((stat) => (
          <div key={stat.label} className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
            <div className={`h-1.5 ${stat.color}`} aria-hidden="true" />
            <div className="p-6 md:p-8">
              <dt className="text-sm font-semibold text-neutral-500">{stat.label}</dt>
              <dd className="mt-2 text-4xl font-extrabold text-ink md:text-5xl">{stat.value}</dd>
            </div>
          </div>
        ))}
      </dl>
    </div>
  </section>
);

export default ImpactStats;
