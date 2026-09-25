import biabBanner from '../assets/brand/build-in-a-box-2024-banner.jpg';
import { photos } from './gallery';

export const programs = [
  {
    id: 'build-in-a-box',
    title: 'BUILD-IN-A-BOX',
    summary:
      'Our annual entrepreneurial leadership camp, run in partnership with the African Leadership Academy to inspire Africa’s next generation of entrepreneurs.',
    image: {
      src: biabBanner,
      alt: 'BUILD-IN-A-BOX Entrepreneurial Leadership Bootcamp banner, presented by Build Africa in partnership with the African Leadership Academy',
    },
    // The banner is a designed graphic, so it must never be cropped.
    fit: 'contain',
    cta: { to: '/gallery', label: 'Discover BUILD-IN-A-BOX' },
  },
  {
    id: 'education-outreach',
    title: 'Education Outreach',
    summary:
      'Increasing access to quality education through mentoring, scholarships, and learning initiatives.',
    image: photos.participantsListening,
    fit: 'cover',
    cta: { to: '/contact?subject=Education%20Outreach', label: 'Learn More' },
  },
  {
    id: 'entrepreneurship-training',
    title: 'Entrepreneurship Training',
    summary:
      'Supporting young entrepreneurs with the tools and resources to launch successful ventures.',
    image: photos.teamBrainstorm,
    fit: 'cover',
    cta: { to: '/contact?subject=Entrepreneurship%20Training', label: 'Get Involved' },
  },
];

// The design-thinking framework every BUILD-IN-A-BOX cohort works through.
export const buildModel = [
  {
    letter: 'B',
    word: 'Believe',
    text: 'Start with the conviction that young people can solve the problems in their own communities.',
    color: 'bg-brand-red',
    textColor: 'text-white',
  },
  {
    letter: 'U',
    word: 'Understand',
    text: 'Go to the root cause by listening to the people who live with the challenge every day.',
    color: 'bg-brand-green',
    textColor: 'text-white',
  },
  {
    letter: 'I',
    word: 'Invent',
    text: 'Generate bold, practical ideas and turn the strongest into a working prototype.',
    color: 'bg-brand-amber',
    textColor: 'text-ink',
  },
  {
    letter: 'L',
    word: 'Listen',
    text: 'Test the idea with real users, gather feedback, and refine it with humility.',
    color: 'bg-brand-lime',
    textColor: 'text-ink',
  },
  {
    letter: 'D',
    word: 'Deliver',
    text: 'Launch the solution, measure its impact, and keep building.',
    color: 'bg-white',
    textColor: 'text-ink',
  },
];
