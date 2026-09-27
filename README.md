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

The contact form intentionally has no submission backend yet. Email, telephone, and address links work directly.
