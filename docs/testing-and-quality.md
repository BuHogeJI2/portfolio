# Testing And Quality

## Current State

- Available scripts: `yarn dev`, `yarn build`, `yarn preview`
- There is no dedicated lint script
- There is no separate typecheck script
- There is no automated unit, integration, or end-to-end test suite
- There is no CI pipeline documented in the repository

## Minimum Verification For Changes

Run:

```bash
yarn build
```

Then check the affected user flows in the browser.

## Manual Checks That Matter Here

- route navigation works for home, about, skills, projects, contact, and 404
- theme toggle still updates light and dark mode correctly
- mobile navigation opens, closes, and routes correctly
- project cards still render screenshots, descriptions, and outbound links
- contact form shows the right success or error state for the current EmailJS configuration
- layout still holds together on mobile and desktop widths

## Known Quality Gaps

- Skill tooltips currently rely on pointer interaction more than keyboard/touch access
- The router error element is still a plain fallback string
- Project cards contain an invalid nested-link structure
- The hover-card state currently does not clear correctly on mouse leave

Track fixes and larger follow-up work in `TODO.md`.
