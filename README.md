# ICCWAMTIP 2026 Vue3 Site

This folder contains the Vue 3 refactor of the original static HTML conference site.

## Stack

- Vue 3
- Vite
- Vue Router
- Element Plus

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Site images and the CNAME are copied from `public/`. Downloadable conference documents are served from
the `waveletlab-uestc/oos` repository through jsDelivr, with the larger 2023 booklet served through
GitHub Raw.

The GitHub Pages workflow is defined at `.github/workflows/deploy-vue3-site.yml` in the repository root.
