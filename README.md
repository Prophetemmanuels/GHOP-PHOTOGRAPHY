# GHOP Photography — website app

A responsive, dependency-free photography and event-support website for GHOP Photography. It includes a portfolio with category filters, editable collection prices, PA system hire, FAQs, contact links, a WhatsApp enquiry form, and installable/offline PWA support.

## Preview locally

From this folder, run:

```bash
python3 -m http.server 8000 --bind 0.0.0.0
```

Then open `http://localhost:8000`. There is no build step or external font/script dependency.

## Publish with GitHub Pages

A deploy workflow is included at `.github/workflows/deploy.yml`.

1. Create a GitHub repository, for example `ghop-photography`.
2. Upload/push **all files in this folder** to the repository root, including the `.github` folder and `.nojekyll` file. The deployment workflow currently watches the `main` branch; change `branches` in the workflow if your default branch has another name.
3. In the repository, open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**.
4. Push to `main` (or run the workflow from the Actions tab). GitHub Actions will publish the site. GitHub Pages serves the site over HTTPS, which is required for PWA installation and service workers.

All manifest, image and service-worker paths are relative, so the app works from a GitHub project URL such as `https://<account>.github.io/ghop-photography/`.

## Install / offline use

The website is a Progressive Web App. After it is published over HTTPS and opened once, it registers a service worker and caches the page, photos, manifest and icons for offline viewing. Use **Install** in the site header to open the browser's install prompt or see the device-specific instructions.

Browsers do **not** allow a website to install silently without the visitor's action. On iPhone/iPad, use the browser Share menu → **Add to Home Screen**; supported Android/desktop browsers can offer an install prompt.

## Update prices

Open **Collections & starting rates → Edit prices**, enter the amounts in Zambian Kwacha, then save. Changes persist in local storage in the current browser/device only. To publish one centrally managed price list for every visitor, connect a CMS or database.

The defaults are in the `defaultPrices` object near the bottom of `index.html`:

- Portrait: K950 (sample)
- Event: K2,500 (sample)
- Wedding: K6,500 (sample)
- PA system hire: K3,500 (rate supplied by GHOP; transport is provided by the person booking the system)

Review the sample photography prices before launch. The PA system rate is editable from the same price editor.

## Portfolio photos and categories

The portfolio uses six photos supplied for GHOP's work. They are optimized JPEG copies in `assets/`; the uploaded originals are unchanged. Gallery filters are **Portraits**, **Personal branding**, and **Birthdays**. The personal-branding portrait also appears under Portraits.

- `portrait-purple-gown.jpg`, `portrait-teal-seated.jpg`, `portrait-teal-blue.jpg` — studio portraits
- `portrait-editorial-suit.jpg` — portrait / personal branding
- `birthday-portrait.jpg`, `birthday-with-cake.jpg` — birthday celebrations

Before publishing, confirm you have permission to display recognizable people, especially the child in the birthday photos.

## Shoot types & Pinterest links

The site includes 31 common shoot types grouped into Portraits & People, Weddings & Milestones, Events & Live Moments, and Commercial & Creative. Every type links to a Pinterest search for visual examples and pose ideas. Visitors can also select a specific shoot type in the WhatsApp enquiry form; PA System Hire remains a separate option.

## Main files

- `index.html` — site, styling and interactions
- `manifest.webmanifest` — PWA name, launch URL, display mode and icons
- `service-worker.js` — offline cache
- `.github/workflows/deploy.yml` — GitHub Pages deployment
- `assets/` — portfolio photos and app icons
