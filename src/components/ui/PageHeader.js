import BrandStripe from './BrandStripe';

// Banner at the top of every inner page: a dimmed camp photo behind the title.
const PageHeader = ({ eyebrow, title, subtitle, image }) => (
  <header className="relative isolate overflow-hidden bg-ink">
    {image && (
      <img
        src={image.src}
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40"
      />
    )}
    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/80 to-ink/30" />
    <div className="container-page py-20 md:py-28">
      {eyebrow && (
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-brand-amber">{eyebrow}</p>
      )}
      <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-white md:text-5xl">{title}</h1>
      {subtitle && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-neutral-200">{subtitle}</p>}
    </div>
    <BrandStripe />
  </header>
);

export default PageHeader;
