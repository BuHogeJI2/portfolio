# Testing And Quality

## Current State

- Available scripts: `yarn dev`, `yarn build`, `yarn preview`, `yarn lint`, `yarn typecheck`
- ESLint provides the repository lint gate
- TypeScript runs in no-emit mode as the typecheck gate
- There is no automated unit, integration, or end-to-end test suite
- There is no CI pipeline documented in the repository

## Minimum Verification For Changes

Run:

```bash
yarn lint
yarn typecheck
yarn build
```

Then check the affected user flows in the browser.

## Manual Checks That Matter Here

- route navigation works for home, about, skills, projects, contact, and 404
- theme toggle still updates light and dark mode correctly
- mobile navigation opens, closes, and routes correctly
- project case studies render screenshots, contribution details, and outbound links
- skills capability content is available without hover or click interaction
- contact form shows the right success or error state for the current EmailJS configuration
- 404 and route-level error states provide working Home and Contact recovery actions
- `/experience` resolves through the 404 route rather than a placeholder page
- layout still holds together on mobile and desktop widths

## Deferred Quality Work

- Add route and interaction smoke coverage with Playwright after the redesign is complete.
- Verify the EmailJS success path with valid test credentials; the missing-configuration error path can be checked locally without them.
- Add continuous integration once a deployment target and hosting workflow are selected.
