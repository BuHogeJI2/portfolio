# TODO

## Product and Content

- Add a real favicon, social preview image, and better page metadata in `index.html`
- Finish the experience page and decide whether it should be restored to the navbar or removed from routing until content is ready
- Re-enable the about page photo carousel only after the layout works on mobile and the image set feels intentional
- Review project descriptions and make them shorter, more personal, and easier to scan
- Add a lightweight case-study layer to featured projects: role, impact, stack, and constraints

## Accessibility and UX

- Replace click-only skill tooltips with an interaction that also works for keyboard and touch users
- Audit color contrast in both themes, especially secondary and info text on dark backgrounds
- Add clearer validation, recovery guidance, and anti-spam protection to the contact form
- Improve external link handling so outbound links are consistently routed and announced correctly
- Replace the plain router `error` fallback with a real user-facing error state

## Code Quality and Architecture

- Add linting and a dedicated typecheck script, then document them in `docs/testing-and-quality.md`
- Add a small test baseline for routing, theme switching, and contact form states
- Fix the invalid nested-link structure in the project cards
- Fix the hover card state bug where `onMouseLeave` keeps the hovered index instead of clearing it
- Decide whether unused or experimental primitives (`Highlighter`, `MorphingText`, `Photos`, `useOutsideClick`) should be integrated or removed
- Normalize formatting across older files that still use inconsistent quote style and line wrapping

## Performance and SEO

- Add document metadata per route or at least a better global SEO baseline
- Generate optimized image variants for large project screenshots and profile images
- Measure route chunk sizes and confirm whether the manual chunk strategy is still useful
- Add analytics only after deciding what signals are actually worth collecting

## Delivery and Ops

- Document the intended deployment target once the hosting choice is settled
- Add CI for build verification on pull requests
- Add observability integrations such as Vercel Analytics or Speed Insights only after deployment is stable
