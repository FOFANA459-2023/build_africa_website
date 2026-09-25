const bars = ['bg-brand-red', 'bg-brand-green', 'bg-brand-amber', 'bg-brand-lime'];

// The four-colour bar from the wordmark, used as the site's signature divider.
const BrandStripe = ({ className = 'h-1.5', rounded = false }) => (
  <div className={`flex w-full ${rounded ? 'gap-1' : ''} ${className}`} aria-hidden="true">
    {bars.map((bar) => (
      <span key={bar} className={`flex-1 ${bar} ${rounded ? 'rounded-b-full' : ''}`} />
    ))}
  </div>
);

export default BrandStripe;
