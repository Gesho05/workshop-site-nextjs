## workshop-site-nextjs

A small Next.js (App Router) site built with TypeScript. This repository contains a minimal workshop/demo site with a few pages (home, products, contact) and a simple component layout.

Designed for local development, demos, and as a starter for small projects or workshops.

---

## Quick start

Requirements:
- Node.js (18+ recommended)
- npm (or yarn / pnpm)

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

Available scripts (from package.json):
- `dev` — start Next.js in development with Turbopack
- `build` — build the production app
- `start` — run the built production server
- `lint` — run ESLint

---

## Project structure (important files)

- `app/` — Next.js App Router pages and layout
  - `page.tsx` — homepage
  - `layout.tsx` — global layout and metadata
  - `components/` — header/footer shared components
  - `contact/page.tsx`, `products/page.tsx` — example pages
- `public/` — static assets (icons, images)
- `globals.css` — global styles
- `next.config.ts`, `tsconfig.json` — Next.js and TypeScript config
- `package.json` — scripts and dependencies

This project uses React 19 and Next 15 (App Router + TypeScript).

---

## Styling & tools

- PostCSS is configured (`postcss.config.mjs`). Tailwind is present in devDependencies but not required to run unless you add Tailwind classes. If you plan to use Tailwind, ensure `tailwind.config.js` is added and `globals.css` imports the Tailwind directives.
- ESLint is configured (see `eslint.config.mjs`). Run `npm run lint` to check code style.
