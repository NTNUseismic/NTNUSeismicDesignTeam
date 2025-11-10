# NTNU Seismic Competition Team — Website

This repository contains a small static website for the NTNU Seismic Competition Team. The current site is a placeholder layout with sections for home, about, team, projects and contact.

What's included

- `index.html` — The site entrypoint (responsive, accessible header, placeholder content)
- `style.css` — Main stylesheet (merged styles)
- `app.js` — Small client-side JS: mobile nav toggle, smooth scrolling, and contact form placeholder handler
- `assets/logo.svg` — Placeholder SVG logo

How to view locally

1. Open `index.html` directly in a browser (double-click or `open index.html` on macOS).

2. Or serve locally (recommended) from repository root:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

Tests (local)

A minimal Jest test scaffold is included. To run tests locally:

```bash
# install dev dependencies
npm install
# run tests
npm test
```

CI / Deployment

A GitHub Actions workflow is included to publish the site to GitHub Pages (see `.github/workflows/deploy.yml`). Configure repository settings and branch permissions as required by your repo.

Next steps you might want me to do

- Replace placeholder content with real team bios, photos and project pages.
- Wire the contact form to an email service or server endpoint.
- Improve design and accessibility further (contrast, focus states, a11y audits).
- Set up a deployment branch or GitHub Pages settings if you'd like me to adjust the workflow.

