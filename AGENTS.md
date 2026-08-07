# AGENTS.md

## Project Summary

This repository is a single React/Vite portfolio app. Use this file as the entrypoint for technical and structural documentation.

## Read Order

1. `AGENTS.md`
2. `README.md`
3. `docs/project-structure.md`
4. `docs/code-style.md`
5. `docs/testing-and-quality.md`

## Documentation Map

- `README.md`
  - Human-facing overview, setup, and local run commands
- `docs/project-structure.md`
  - App shell, routes, folders, content placement, and runtime notes
- `docs/code-style.md`
  - Component, styling, and documentation conventions
- `docs/testing-and-quality.md`
  - Current quality gates, missing automation, and manual verification expectations

## Source of Truth

- Routing: `src/routes.tsx`
- App shell: `src/app.tsx`
- Route entry files: `src/pages/`
- Shared UI primitives: `src/components/base/`
- Page-specific sections and content data: `src/components/pages/`
- Theme state: `src/contexts/theme-context.tsx`
- Static assets: `public/`

## Repository Constraints

- Package manager: `yarn@4.12.0`
- Main scripts: `yarn dev`, `yarn build`, `yarn preview`, `yarn lint`, `yarn typecheck`
- Contact form configuration lives in `.env.example`
- There is currently no database, no API layer beyond EmailJS, no automated test suite, and no documented deployment target

## Documentation Rules

- Keep `AGENTS.md` short and navigational.
- Put technical details in `docs/`, not in `README.md`.
- Keep `README.md` useful for humans who want to run or understand the app quickly.
- When structure changes, update the relevant file in `docs/` and keep the links here current.

## Current Product State

- Active routes: home, about, skills, projects, contact, and 404
- Route-level failures use a dedicated recovery page consistent with the shared design system
- The portfolio depends on static assets in `public/` for project screenshots, photos, icons, and CV download
