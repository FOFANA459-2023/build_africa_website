import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export const site = {
  name: 'Build Africa',
  tagline: 'Building the future of Africa through education and entrepreneurship.',
  email: 'buildafrica@gmail.com',
  donationEmail: 'donate@buildafrica.org',
  location: 'Liberia',
};

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/programs', label: 'Programs' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
];

export const socialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com', icon: FaFacebookF },
  { label: 'Instagram', href: 'https://www.instagram.com', icon: FaInstagram },
  { label: 'LinkedIn', href: 'https://www.linkedin.com', icon: FaLinkedinIn },
];

export const mission =
  'Build Africa empowers young African leaders to develop the entrepreneurial skills and leadership capacity necessary to drive positive change. Our mission is to provide the tools and platforms for young people to transform their communities through innovation, education, and sustainable business development.';

export const vision =
  'We envision an Africa where young leaders drive sustainable growth and create opportunities for the next generation. Through a network of passionate entrepreneurs and changemakers, Build Africa aims to nurture a culture of collaboration, innovation, and leadership across the continent.';

export const impactStats = [
  { value: '4', label: 'Camps Hosted', color: 'bg-brand-red' },
  { value: '200+', label: 'Students Trained', color: 'bg-brand-green' },
  { value: '3', label: 'Enterprises Created', color: 'bg-brand-amber' },
  { value: '90%', label: 'Success Rate', color: 'bg-brand-lime' },
];

export const partners = [
  {
    name: 'African Leadership Academy',
    role: 'Programme partner for BUILD-IN-A-BOX',
  },
  {
    name: 'Innoignite',
    role: 'Host of the Innoignite Innovative Hub, our 2024 bootcamp venue',
  },
];
