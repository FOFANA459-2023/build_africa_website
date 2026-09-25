import { Link } from 'react-router-dom';
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import logoLight from '../../assets/brand/build-africa-logo-light.png';
import { navLinks, site, socialLinks } from '../../data/site';
import BrandStripe from '../ui/BrandStripe';
import Button from '../ui/Button';

const Footer = () => (
  <footer className="bg-ink text-neutral-300">
    <BrandStripe />
    <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
      <div className="lg:col-span-2">
        <img src={logoLight} alt="Build Africa" className="h-10 w-auto" />
        <p className="mt-5 max-w-sm leading-relaxed">{site.tagline}</p>
        <ul className="mt-6 flex gap-3">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-brand-amber hover:text-ink"
              >
                <Icon size={16} />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-white">Explore</h2>
        <ul className="mt-5 space-y-3">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link to={link.to} className="transition hover:text-brand-amber">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-white">Get in touch</h2>
        <ul className="mt-5 space-y-3">
          <li className="flex items-center gap-3">
            <FaEnvelope className="shrink-0 text-brand-amber" />
            <a href={`mailto:${site.email}`} className="break-all transition hover:text-brand-amber">
              {site.email}
            </a>
          </li>
          <li className="flex items-center gap-3">
            <FaMapMarkerAlt className="shrink-0 text-brand-amber" />
            {site.location}
          </li>
        </ul>
        <Button to="/donate" className="mt-6">
          Support Our Mission
        </Button>
      </div>
    </div>

    <div className="border-t border-white/10">
      <p className="container-page py-6 text-sm text-neutral-500">
        © {new Date().getFullYear()} Build Africa. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
