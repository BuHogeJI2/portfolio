# Project Structure

## App Runtime

`src/index.tsx` boots the app, creates the browser router, loads global styles, and wraps routing with `ThemeProvider`.

`src/app.tsx` provides the shared shell:

- `PageBackground`
- `Navbar`
- routed `<main>` content through `Outlet`
- `Footer`
- `ScrollRestoration`

`src/routes.tsx` lazy-loads route pages and uses `Loader` as the suspense fallback.

## Routes

- `/` -> `src/pages/index.tsx`
- `/about` -> `src/pages/about.tsx`
- `/skills` -> `src/pages/skills.tsx`
- `/projects` -> `src/pages/projects.tsx`
- `/contact` -> `src/pages/contact.tsx`
- `*` -> `src/pages/404.tsx`

Unexpected route failures render `src/pages/route-error.tsx` through the root router error boundary.

## Directory Map

### `src/pages`

Thin route entry files. Keep them light and delegate real page content to `src/components/pages`.

### `src/components/base`

Reusable UI primitives and layout blocks, including navigation, footer, container, image handling, and loaders.

The visual foundation includes shared page introductions, section headings, surfaces, action links, tags, and reduced-motion-aware reveal wrappers. Route layouts use `Container` for a consistent `max-w-6xl` content width.

### `src/components/pages`

Page-focused sections and content constants:

- `about/`
- `contact/`
- `home/`
- `projects/`
- `skills/`

This is the right place for route-specific sections, interaction logic, and content arrays that are not broadly reusable.

### `src/contexts`

Global React context providers. The current app uses this for theme state only.

### `src/hooks`

Shared hooks. `use-outside-click` supports the mobile navigation disclosure.

### `src/lib`

Small generic helpers such as `cn`.

### `public`

Static assets served directly by Vite:

- `images/projects/` for optimized WebP portfolio screenshots
- `images/photos/` for the active WebP profile art and About portrait
- `images/social/` for the 1200×630 social-preview image
- `icons/` and `icons/svg/` for theme and skill icons
- `favicon.svg` for the browser icon
- `files/` for downloadable CV

## Content Placement

- Project case-study data: `src/components/pages/projects/project.const.ts`
- Capability and technology data: `src/components/pages/skills/skills.const.ts`
- Social/contact blocks: `src/components/pages/home/social-links/social-links.const.tsx`
- About experience highlights and strengths: `src/components/pages/about/about-me.const.ts`

## Runtime Notes

- Dev server port is fixed to `5173` in `vite.config.ts`
- Build output uses a manual `react-vendor` chunk
- `vite-plugin-mkcert` is enabled for local certificate support
- Manrope Variable is bundled locally through `@fontsource-variable/manrope`
- The contact form relies on EmailJS values from `.env`
- `index.html` owns the site title, description, canonical URL, social metadata, theme colors, and favicon reference
- The canonical public URL is `https://buhogeji.me`; the deployment workflow is managed outside this repository
