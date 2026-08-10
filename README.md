# Portfolio

Personal portfolio site for Dzmitry Dziamidovich.

[Visit the live portfolio](https://buhogeji.me)

## What This App Includes

- home, about, skills, projects, and contact pages
- downloadable CV
- light and dark theme toggle
- project screenshots, profile photos, and social links
- contact form integration through EmailJS

## Start

### Prerequisites

- Node.js 20+
- Yarn 4

### Install dependencies

```bash
yarn install
```

### Run locally

```bash
yarn dev
```

The app runs on `http://localhost:5173`.

### Build for production

```bash
yarn build
```

### Verify changes

```bash
yarn lint
yarn typecheck
yarn build
```

### Preview the build

```bash
yarn preview
```

## Contact Form Setup

Copy `.env.example` to `.env` and provide the EmailJS values:

```bash
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
VITE_EMAILJS_TO_EMAIL=
```

Without these values, the contact page still loads but message submission fails.

## Working On The App

The main technical docs live under `docs/`. Start with `AGENTS.md` if you need the project map.

The testing boundary is intentionally small for this personal project: component tests, visual tests, and browser automation are out of scope. See `docs/testing-and-quality.md` for the durable decision and verification expectations.
