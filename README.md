# Personal Portfolio — Jakkaphan Chalongdej

A modern, responsive portfolio website for **Jakkaphan Chalongdej**, a back-end
developer with 5+ years of experience building APIs with NestJS, PostgreSQL, and
TypeScript.

Built with **React + TypeScript + Vite + Tailwind CSS** and deployed
automatically to **GitHub Pages**.

🔗 **Live site:** https://jakkaphan-chalongdej.github.io/portfolio/

## Sections

- **Hero** — intro, tagline, and quick links
- **About** — bio, highlights, and what I'm currently learning
- **Skills** — languages, back-end, front-end, and tooling
- **Projects** — selected work pulled from GitHub
- **Contact** — email and social links

## Local development

```bash
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # type-check + production build into dist/
npm run preview  # preview the production build locally
```

## Deployment

Deployment is handled by GitHub Actions (`.github/workflows/deploy.yml`). Every
push to the deployment branch builds the site and publishes it to GitHub Pages.

### One-time setup

In the repository: **Settings → Pages → Build and deployment → Source**, choose
**GitHub Actions**. The next push will build and publish automatically.

> The Vite `base` is set to `/portfolio/` in `vite.config.ts` to match the
> repository name. If you rename the repo (or use a custom domain), update it
> accordingly.

## Editing content

All site content lives in [`src/data.ts`](src/data.ts) — profile, about text,
skills, and projects. Update that one file to keep the site current.
