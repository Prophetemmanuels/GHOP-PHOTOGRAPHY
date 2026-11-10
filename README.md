# Upload these to GitHub

Only **two files** in this folder go to GitHub. Exact names, lowercase, flat — no sub-folders.

| File | Size | What it is |
|---|---|---|
| **index.html** | 304 KB | Yango Profit OS — the whole profit app. This is the main file and MUST be called `index.html`. |
| **ghop-photography.html** | 116 KB | Your GHOP Photography site, standalone. Optional — the same site is already embedded inside index.html. |

Skip this README when uploading.

---

## Shift tracker (new)

On the Dashboard, under the live clock: **Start shift**. It times your work against the real clock, even if you close the browser, and shows estimated km, fuel and gross while you drive.

When you finish, tap **End shift & log**. Everything is pre-filled from your cost model — you correct the **gross figure from Yango Pro** and press **Save to log**. The entry lands in My Log with hours, net profit and earnings per hour.

**Discard** cancels the shift without touching the log. If a shift runs past 16 hours the app warns you that you probably forgot to end it.

No app can read Yango Pro's data directly — that gross figure you type in is the one number the app cannot get on its own.

---

## What the buttons do

**Yango App** (top-right of every screen) → opens the official Yango Zambia site in a new tab. It no longer opens GHOP Photography.

**Dashboard → Apps**
- *Open Yango ↗* and *Driver page ↗* → official Yango site, new tab
- *Open GHOP Photography* → opens your photography site inside a panel, no 404, works offline. **Back to Profit OS** is at the top of the panel, or press Esc.

---

## Steps

1. github.com → **New repository** → Public → **Create repository**
2. **Add file → Upload files**
3. Drag in **index.html** and **ghop-photography.html**
4. **Commit changes**
5. **Settings → Pages** → Source: **Deploy from a branch** → Branch **main**, folder **/ (root)** → **Save**
6. Wait 1–2 minutes. Your link appears at the top of the Pages screen:

```
https://YOUR-USERNAME.github.io/YOUR-REPO/
```

Open that on your phone → **Add to Home Screen**.

---

## Notes

- If `index.html` is not named exactly `index.html`, GitHub Pages shows a 404 at your main address.
- Everything runs offline once loaded — no fonts, images or CDNs to upload.
- Your fuel price, shift log and settings save in **that device's browser**, not on GitHub.
- Uploading only `index.html` still works fully. The "Open in new tab" link is the only thing that needs `ghop-photography.html`.
