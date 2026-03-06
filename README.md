# Fala Wind & Surf School

Website for Fala Wind & Surf School — windsurfing and surfing lessons in El Cotillo, Fuerteventura.

**Live:** [falawindsurfschool.com](https://falawindsurfschool.com)

## Stack

- [Astro](https://astro.build) — static site generator
- [Tailwind CSS v4](https://tailwindcss.com) — styling
- [TinaCMS](https://tina.io) — content management
- [React](https://react.dev) — TinaCMS dependency

## Features

- Bilingual (PL/EN) with `i18n` routing — Polish as default, English at `/en/`
- WCAG 2.1 AA accessibility — skip-to-content, focus-visible, reduced-motion, ARIA patterns
- SEO optimized — structured data (JSON-LD), Open Graph, sitemap
- Responsive — mobile-first with smooth scroll, hero slideshow, image carousels

## Development

```bash
npm install
npm run dev        # start dev server with TinaCMS
npm run check      # type check Astro files
npm run build      # production build (TinaCMS + Astro)
npm run preview    # preview production build
```

## Project structure

```
src/
  components/    # Astro components (Navbar, Hero, Carousel, etc.)
  content/site/  # Content JSON files (pl.json, en.json)
  i18n/          # Translation utilities
  layouts/       # Layout.astro
  pages/         # Route pages (index.astro, en/index.astro)
  styles/        # global.css (Tailwind + custom)
public/images/   # Static assets (hero, logos, flags)
```

## CI

GitHub Actions runs on every push to `main` and on PRs:

- **Build** — `astro check` + `astro build`
- **Lighthouse** — performance, accessibility, SEO, best practices audit (scores uploaded as artifacts)
