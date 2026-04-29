# turalengineer.com

Production-ready Astro website for Tural Rustamli, a structural and geotechnical engineer.

## Stack

- Astro static output
- Tailwind CSS
- MDX content collections for blog and projects
- Cloudflare Pages deployment
- Sitemap and robots.txt included

## Project Structure

```text
/
|-- public/
|   |-- _headers
|   |-- favicon.svg
|   `-- robots.txt
|-- src/
|   |-- components/
|   |-- content/
|   |   |-- blog/
|   |   |-- projects/
|   |   `-- config.ts
|   |-- layouts/
|   |-- pages/
|   |   |-- blog/
|   |   |-- projects/
|   |   |-- about.astro
|   |   |-- contact.astro
|   |   |-- index.astro
|   |   `-- services.astro
|   `-- styles/
|-- astro.config.mjs
|-- package.json
|-- tailwind.config.js
`-- tsconfig.json
```

## Local Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build the static site:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Cloudflare Pages Deployment

Use these Cloudflare Pages settings:

- Framework preset: Astro
- Build command: `npm run build`
- Build output directory: `dist`
- Node.js version: 20 or newer

Connect the repository to Cloudflare Pages, set the production branch, and add `turalengineer.com` as the custom domain after the first successful deployment.

## Content Editing

Add engineering notes in `src/content/blog` as MDX files.

Add project cases in `src/content/projects` as MDX files.

Each content type is validated by `src/content/config.ts`, so missing required fields will be caught during the build.
