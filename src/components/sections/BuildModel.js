import { buildModel } from '../../data/programs';
import SectionHeading from '../ui/SectionHeading';

const BuildModel = () => (
  <section className="section bg-ink">
    <div className="container-page">
      <SectionHeading
        eyebrow="How we work"
        title="The BUILD model"
        intro="Every BUILD-IN-A-BOX cohort tackles real community challenges using our design-thinking framework."
        tone="light"
      />
      <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {buildModel.map((step, index) => (
          <li key={step.word} className="flex flex-col overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10">
            <div className={`flex items-end justify-between px-6 pb-4 pt-6 ${step.color} ${step.textColor}`}>
              <span className="text-6xl font-extrabold leading-none">{step.letter}</span>
              <span className="text-xs font-bold opacity-70">0{index + 1}</span>
            </div>
            <div className="flex-1 p-6">
              <h3 className="text-lg font-bold text-white">{step.word}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-400">{step.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default BuildModel;
