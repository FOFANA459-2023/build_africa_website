import { useCallback, useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa';
import { testimonials } from '../../data/testimonials';

const INTERVAL_MS = 7000;

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = testimonials.length;

  const go = useCallback((step) => setIndex((i) => (i + step + count) % count), [count]);

  useEffect(() => {
    if (paused) return undefined;
    const id = setInterval(() => go(1), INTERVAL_MS);
    return () => clearInterval(id);
  }, [go, paused]);

  const current = testimonials[index];

  return (
    <section
      className="section relative overflow-hidden bg-brand-green"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="container-page relative">
        <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-brand-amber">
          Success Stories
        </p>

        <figure className="mx-auto mt-8 max-w-3xl text-center" aria-live="polite">
          <FaQuoteLeft className="mx-auto text-brand-amber" size={36} aria-hidden="true" />
          <blockquote key={index} className="mt-6 animate-fade-in">
            <p className="text-2xl font-semibold leading-snug text-white md:text-3xl">“{current.quote}”</p>
          </blockquote>
          <figcaption className="mt-8 text-neutral-200">
            <span className="font-bold text-white">{current.name}</span>
            <span className="mx-2 text-brand-lime">·</span>
            {current.program}
          </figcaption>
        </figure>

        <div className="mt-10 flex items-center justify-center gap-6">
          <button
            type="button"
            onClick={() => go(-1)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition hover:bg-white hover:text-brand-green"
            aria-label="Previous story"
          >
            <FaChevronLeft size={14} />
          </button>
          <div className="flex gap-2">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                type="button"
                onClick={() => setIndex(i)}
                className={`h-2.5 rounded-full transition-all ${i === index ? 'w-8 bg-brand-amber' : 'w-2.5 bg-white/40 hover:bg-white/70'}`}
                aria-label={`Show story ${i + 1}`}
                aria-current={i === index}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => go(1)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition hover:bg-white hover:text-brand-green"
            aria-label="Next story"
          >
            <FaChevronRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
