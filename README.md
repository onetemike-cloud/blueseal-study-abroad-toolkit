# BlueSeal Study Abroad Application Toolkit — Landing Page

A conversion-focused sales landing page for the **BlueSeal Study Abroad Application Toolkit**,
a paid DIY digital guide covering study-abroad applications to Czechia, Lithuania and Bulgaria.

The page is a static, dependency-free site (plain HTML/CSS/JS) so it deploys instantly to
Cloudflare Pages with no build step.

## Project structure

```
.
├── index.html              # The landing page (single page)
├── config.js                # Site-wide config (Selar checkout URL, pricing labels)
├── css/
│   └── style.css            # All styling
├── js/
│   └── main.js               # Wires up CTA buttons to the configured checkout URL
└── assets/
    ├── images/               # Logo, toolkit cover, OG image, favicons
    └── flags/                # Czechia / Lithuania / Bulgaria flag SVGs
```

## Configuration

All purchase buttons read their destination from `config.js`:

```js
window.BLUESEAL_CONFIG = {
  SELAR_CHECKOUT_URL: "https://selar.com/138jz82299",
  ...
};
```

To change the checkout link in the future, update `SELAR_CHECKOUT_URL` in `config.js` — every
`.js-cta` button on the page (header, hero, pricing, final CTA, sticky mobile bar) picks it up
automatically at page load.

## Local preview

No build step or dependencies are required. From the project root, run any static file server, e.g.:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080` in your browser.

## Deployment (Cloudflare Pages)

This is a static site with no build command required:

- **Build command:** (none)
- **Build output directory:** `/` (project root)

## Analytics

Analytics/tracking (Meta Pixel, GA, conversion APIs) have intentionally **not** been added yet.
They will be introduced in a follow-up change without requiring a rebuild of the page.
