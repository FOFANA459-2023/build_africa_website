import { Link } from 'react-router-dom';

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold tracking-wide transition duration-200 ease-out';

const variants = {
  primary: 'bg-brand-amber text-ink hover:bg-[#ffc24d] shadow-sm',
  secondary: 'bg-brand-green text-white hover:bg-[#4d6035]',
  dark: 'bg-ink text-white hover:bg-neutral-800',
  outlineLight: 'border-2 border-white/80 text-white hover:bg-white hover:text-ink',
  outlineDark: 'border-2 border-ink text-ink hover:bg-ink hover:text-white',
};

const isExternal = (to) => /^(https?:|mailto:|tel:)/.test(to);

// Renders a router Link for internal paths and an anchor for everything else.
const Button = ({ to, variant = 'primary', className = '', children, ...props }) => {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (!to) {
    return (
      <button className={classes} {...props}>
        {children}
      </button>
    );
  }

  if (isExternal(to)) {
    return (
      <a href={to} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link to={to} className={classes} {...props}>
      {children}
    </Link>
  );
};

export default Button;
