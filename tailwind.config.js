/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Sampled directly from the four-bar stripe in the Build Africa wordmark.
        brand: {
          red: '#ED1B24',
          green: '#3F4F2B',
          amber: '#FBB12A',
          lime: '#C0BD30',
          // Crimson used on the BUILD-IN-A-BOX banner.
          crimson: '#A71E25',
        },
        ink: '#0B0B0B',
      },
      fontFamily: {
        sans: ['"Open Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fade-in 400ms ease-out',
      },
    },
  },
  plugins: [],
};
