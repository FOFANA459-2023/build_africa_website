const SectionHeading = ({ eyebrow, title, intro, align = 'center', tone = 'dark', className = '' }) => {
  const centered = align === 'center';
  const titleColor = tone === 'light' ? 'text-white' : 'text-ink';
  const introColor = tone === 'light' ? 'text-neutral-300' : 'text-neutral-600';

  return (
    <div className={`${centered ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl'} ${className}`}>
      {eyebrow && (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-red">{eyebrow}</p>
      )}
      <h2 className={`text-3xl font-extrabold leading-tight md:text-4xl ${titleColor}`}>{title}</h2>
      {intro && <p className={`mt-4 text-lg leading-relaxed ${introColor}`}>{intro}</p>}
    </div>
  );
};

export default SectionHeading;
