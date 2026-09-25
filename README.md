# Build Africa

Website for **Build Africa**, which empowers young African leaders through education and
entrepreneurship, including **BUILD-IN-A-BOX**, our annual entrepreneurial leadership camp run
in partnership with the African Leadership Academy.

Built with React 18, React Router 6 and Tailwind CSS 3 (Create React App).

## Getting started

```bash
npm install
npm start       # dev server on http://localhost:3000
npm test        # route smoke tests
npm run build   # production build in /build
```

## Project structure

```
src/
├── assets/
│   ├── brand/                 # logos and the BUILD-IN-A-BOX banner
│   ├── gallery/
│   │   └── biab-2024/         # one folder per camp year
│   └── team/                  # team portraits
├── components/
│   ├── gallery/               # YearAlbum (masonry grid) + Lightbox
│   ├── layout/                # Layout, Navbar, Footer
│   ├── sections/              # page sections shared across pages
│   └── ui/                    # Button, PageHeader, SectionHeading, BrandStripe…
├── data/                      # all site copy: programs, team, gallery, donate…
├── hooks/
└── pages/                     # one file per route
```

## Editing content

Almost everything you'd want to change lives in `src/data/`:

| File              | What it holds                                           |
| ----------------- | ------------------------------------------------------- |
| `site.js`         | contact email, nav, social links, mission, vision, stats |
| `programs.js`     | programs and the BUILD model                            |
| `team.js`         | team members (add `photo` to show a portrait)           |
| `gallery.js`      | camp albums, one entry per year                         |
| `testimonials.js` | success stories                                         |
| `donate.js`       | bank and mobile money details                           |

### Adding a new camp year

1. Create `src/assets/gallery/biab-<year>/` and add the photos (a `group-photo.jpg` plus the rest).
2. Import them in `src/data/gallery.js` and add a new entry at the top of `galleryYears`.

## Brand colours

Sampled from the four-bar stripe in the wordmark and exposed as Tailwind colours:

| Token           | Hex       |
| --------------- | --------- |
| `brand-red`     | `#ED1B24` |
| `brand-green`   | `#3F4F2B` |
| `brand-amber`   | `#FBB12A` |
| `brand-lime`    | `#C0BD30` |
| `brand-crimson` | `#A71E25` |
| `ink`           | `#0B0B0B` |
