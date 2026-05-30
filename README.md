# Fala Surf & Wind School

Website for Fala Surf & Wind School — surfing and windsurfing lessons in El Cotillo, Fuerteventura.

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

## Analytics

Google Analytics 4 with **Consent Mode v2**. Privacy-first by design:

- `gtag.js` loads **only after the visitor accepts** the consent banner — no
  cookies, no third-party request, and no Lighthouse script-budget cost until then.
- Declining (or ignoring) the banner means no tracking at all.
- Bilingual consent banner (PL/EN), choice persisted in `localStorage`.

The production Measurement ID is baked into `Analytics.astro` as the default
(a GA4 ID is public — it's visible in page source). To override per-environment,
copy `.env.example` to `.env` and set:

```bash
PUBLIC_GA_ID=G-XXXXXXXXXX
```

Set `PUBLIC_GA_ID=""` to disable analytics entirely (banner and script never render).

Visitors can withdraw consent any time via the **Cookie settings** link in the
footer (clears the stored choice and re-shows the banner). The **Privacy & Cookie
Policy** lives at `/polityka-prywatnosci` (PL) and `/en/privacy-policy` (EN); both
are `noindex` and excluded from the sitemap.

### Tracked events

Clicks are tracked declaratively — add `data-track="<event>"` plus optional
`data-track-*` params (dashes become underscores) to any element:

| Event             | Where                                   | Params                          |
| ----------------- | --------------------------------------- | ------------------------------- |
| `book`            | Hero CTA, pricing cards                 | `location`, `category`          |
| `whatsapp`        | Contact card, floating button           | `location`                      |
| `call`            | Navbar + contact phone links            | `location`                      |
| `language_switch` | Navbar (desktop + mobile)               | `to`, `location`                |
| `social`          | Contact + footer Facebook/Instagram     | `network`, `location`           |
| `map_engage`      | Google Maps iframe (inferred from blur) | `location`                      |

Implementation lives in `src/components/Analytics.astro`.

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
