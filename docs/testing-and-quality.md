# Testing And Quality

## Current State

- Available scripts: `yarn dev`, `yarn build`, `yarn preview`, `yarn lint`, `yarn typecheck`
- ESLint provides the repository lint gate
- TypeScript runs in no-emit mode as the typecheck gate
- There is no automated test suite because the current app contains presentation and integration code without non-trivial business logic
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

## Testing Scope Decision

The testing boundary is deliberately narrow for this small personal portfolio and should not be reopened as routine follow-up work:

- Do not add component tests (CT), visual or visual-regression tests (VT), Playwright, Cypress, or another browser-automation suite.
- Add small unit tests only when non-trivial pure business logic is introduced, such as a validator, mapper, parser, or state reducer.
- Do not create tests for static content, presentational components, route wiring, or styling solely to increase coverage.
- Continue using lint, typecheck, production build, and focused manual browser checks for UI changes.
- Revisit this decision only if the user explicitly changes direction or the application grows materially beyond a static portfolio.

The EmailJS success path still requires valid test credentials. Without them, verify the missing-configuration error path and the form's pending/error accessibility behavior.
