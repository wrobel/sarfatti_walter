# Walter Sarfatti — static website

A lightweight recreation of the former Wix website. It contains no Wix trackers and builds to static assets suitable for GitHub Pages.

## Local preview

```bash
npm install
npm run dev
```

For a production preview, run `npm run build` and then `npm run preview`.

## GitHub Pages

1. Create a GitHub repository and push this folder.
2. In **Settings → Pages**, select **GitHub Actions** as the source.
3. The included workflow builds and deploys on every push to `main`.

Contact uses direct email links to Cosimo and Marlies; there is no contact form.

## Gallery and video maintenance

- src/gallery-data.json contains all 58 recent works and 35 botanical/landscape works, in their original Wix order.
- Each gallery initially displays nine works; Show More adds six, until all works are visible.
- Sharp local JPEG thumbnails (up to 640px) and lightbox images (up to 1600px) are stored in public/assets/. Source filenames and dimensions are recorded in the manifest.
- Run node scripts/import-gallery-assets.mjs to re-download gallery assets from the published source. The deployed site makes no requests to Wix.
- public/assets/walter-speaks-july-2026.mp4 is the video supplied by Marlies on 14 October 2026. It is available from About Me with native player controls and does not preload.
- Run node --test tests/*.test.mjs and npm run build before publishing.
