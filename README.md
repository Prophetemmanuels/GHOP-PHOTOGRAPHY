# GHOP Photography — website app

A responsive, dependency-free photography, makeup and event-support website for GHOP Photography, plus the companion **GHOP Master Backdrops** scene-finder. The site includes a portfolio with category filters, 31 photography shoot types, Pinterest makeup inspiration, an admin-gated price editor, PA system hire, business hours, direct contact links, a WhatsApp enquiry form, and installable/offline PWA support.

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

The main site and GHOP Master Backdrops are Progressive Web Apps. After either is published over HTTPS and opened once, the shared service worker caches both pages, their manifests and icons, and the portfolio photos for offline viewing. Use the relevant app's **Install** button to open the browser's install prompt or see device-specific instructions.

Browsers do **not** allow a website to install silently without the visitor's action. On iPhone/iPad, use the browser Share menu → **Add to Home Screen**; supported Android/desktop browsers can offer an install prompt.

## GHOP Master Backdrops

Open `master-backdrops.html` from the prominent launch button on the main site. It is also a standalone PWA with its own `backdrops-manifest.webmanifest`; its install control requires the visitor to use the browser's install/Add to Home Screen action. The main site manifest also includes a shortcut to the backdrops app.

The searchable/filterable directory points to Pexels, Unsplash and Pinterest searches plus specialist background libraries for luxury and seamless studios, floral installations, wedding/reception stages, offices and lounges, modern homes, church/auditorium stages, birthday and graduation setups, newborn/maternity scenes, commercial/product sets, fantasy gardens, beaches, landscapes, architecture and more. **The goal is empty background plates for compositing, not photos of people posing in front of a backdrop.** The app uses abstract CSS previews rather than implying that source thumbnails are verified plates. Search results can still include people; Pinterest links are for visual inspiration, not proof of a downloadable file or license. Follow pins to their original sources and verify each result before client use.

Prefer JPG or PNG and a 3000 px or larger long edge when available. Actual dimensions differ: some source examples are below that preference. Check individual pixel dimensions, confirm that the scene has enough clean foreground/floor space and realistic perspective/shadows, and review licensing for the intended client/commercial use. The app links the image-license page for PhotoBackground.in; each site's and each file's terms may vary.

## Update prices

Open **Collections & starting rates → Edit prices**, enter the admin password, then update and save the amounts in Zambian Kwacha. The password is checked as a salted hash; it is not stored as plain text in the page. Changes persist in local storage in the current browser/device only.

**Important:** GitHub Pages serves static files. A password check implemented only in browser code can be inspected or bypassed and is not strong admin security; it also cannot publish a shared price list to all visitors. For real administrator-only access and shared updates, connect a server-side authenticated CMS/database before launch.

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

## Makeup and business hours

The Makeup section lists 19 makeup styles across Everyday & Glam, Bridal & Celebrations, and Camera & Creative. Each style links to Pinterest search results for visual references. Makeup enquiries from the form are directed to the supplied makeup WhatsApp number, `097 141 5665`; photography and PA enquiries go to `076 052 8887`.

Listed hours: Monday–Friday 08:00–17:30, Saturday 08:00–15:00, Sunday closed (Zambia local time).

## Main files

- `index.html` — main site, styling and interactions
- `master-backdrops.html` — searchable/filterable companion backdrop app
- `manifest.webmanifest` — main PWA and shortcut to Master Backdrops
- `backdrops-manifest.webmanifest` — standalone Master Backdrops PWA metadata
- `service-worker.js` — offline cache for both apps
- `.github/workflows/deploy.yml` — GitHub Pages deployment
- `assets/` — portfolio photos and app icons
