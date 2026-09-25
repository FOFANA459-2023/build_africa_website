import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logoLight from '../../assets/brand/build-africa-logo-light.png';
import { navLinks } from '../../data/site';
import Button from '../ui/Button';

const linkClass = ({ isActive }) =>
  `relative py-2 text-sm font-semibold transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-brand-amber after:transition-transform ${
    isActive ? 'text-white after:scale-x-100' : 'text-neutral-300 hover:text-white after:scale-x-0'
  }`;

const mobileLinkClass = ({ isActive }) =>
  `block rounded-lg px-4 py-3 text-base font-semibold ${
    isActive ? 'bg-white/10 text-brand-amber' : 'text-white hover:bg-white/5'
  }`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  // Close the mobile menu whenever the route changes.
  useEffect(() => setIsOpen(false), [pathname]);

  return (
    <nav className="sticky top-0 z-40 border-b border-white/10 bg-ink/95 backdrop-blur" aria-label="Main">
      <div className="container-page flex h-20 items-center justify-between">
        <Link to="/" className="shrink-0" aria-label="Build Africa home">
          <img src={logoLight} alt="Build Africa" className="h-9 w-auto md:h-10" />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} end={link.to === '/'} className={linkClass}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Button to="/donate" className="px-5 py-2.5">
            Donate
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="rounded-lg p-2 text-white md:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {isOpen && (
        <div id="mobile-menu" className="animate-fade-in border-t border-white/10 md:hidden">
          <ul className="container-page space-y-1 py-4">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} end={link.to === '/'} className={mobileLinkClass}>
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li className="pt-3">
              <Button to="/donate" className="w-full">
                Donate
              </Button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
