import usePageTitle from '../hooks/usePageTitle';
import Button from '../components/ui/Button';
import BrandStripe from '../components/ui/BrandStripe';

const NotFound = () => {
  usePageTitle('Page not found');

  return (
    <section className="section">
      <div className="container-page flex flex-col items-center text-center">
        <p className="text-8xl font-extrabold text-ink">404</p>
        <div className="mt-4 w-48">
          <BrandStripe className="h-3" rounded />
        </div>
        <h1 className="mt-8 text-2xl font-extrabold md:text-3xl">We couldn't find that page</h1>
        <p className="mt-3 max-w-md text-neutral-600">The page may have moved. Let's get you back on track.</p>
        <Button to="/" variant="dark" className="mt-8">
          Back to home
        </Button>
      </div>
    </section>
  );
};

export default NotFound;
