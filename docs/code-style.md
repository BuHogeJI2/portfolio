# Code Style

## Formatting

- Use Prettier with the repository config in `.prettierrc`
- Keep two-space indentation, single quotes, and LF line endings
- Let `prettier-plugin-tailwindcss` sort Tailwind utility classes

## React and TypeScript

- Prefer function components
- Match the surrounding file style for explicit return types when editing existing code
- Keep props explicit with named interfaces or small inline object types
- Keep route files in `src/pages/` thin and move page sections into `src/components/pages`

## File Organization

- Put reusable primitives in `src/components/base/`
- Put route-specific sections in `src/components/pages/<page>/`
- Keep static content near the component in `*.const.ts` or `*.const.tsx`
- Use nearby `*.styles.ts` files when extracted class groups make the component easier to read

## Styling

- Prefer the existing Tailwind tokens from `tailwind.config.js` before adding new color values
- Preserve both light and dark theme behavior
- Reuse layout primitives such as `Container`, `Navbar`, `Footer`, `Image`, and `Loader` before adding new abstractions
- Use `clsx` or `cn` when conditional class composition improves clarity

## UX Expectations

- Keep navigation, buttons, and links keyboard reachable
- Avoid hover-only access to important information
- Check mobile and desktop layouts when changing UI structure
- Make loading, success, and error states explicit for user-facing async flows

## Documentation Expectations

- Update `README.md` when setup or run commands change
- Update `AGENTS.md` when technical doc files are added, removed, or renamed
- Update the relevant file in `docs/` when architecture or conventions change
- Update `TODO.md` when documentation review reveals real follow-up work
