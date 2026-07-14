# Raman Singh — Portfolio

A black-matte, Minecraft-themed personal portfolio for a Software Development Engineer,
with smooth Framer Motion transitions. Built with **React + Vite + TailwindCSS + Framer Motion**.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build

```bash
npm run build    # outputs to dist/
npm run preview  # preview the production build
```

## Editing content

All content lives in `src/data/` — edit these, no component changes needed:

| File | Contents |
|------|----------|
| `projects.js` | Featured capstone + all project cards |
| `experience.js` | Work experience timeline |
| `achievements.js` | Amazon ML, HackRx (drive the count-up stats) |
| `hackathons.js` | Walmart Sparkathon, AWS AI for Bharat |
| `certifications.js` | Coursera / Udemy certificates + links |
| `leadership.js` | Positions of responsibility |
| `socials.js` | Email, GitHub, LinkedIn, Codeforces, LeetCode |

## Deployment

### GitHub Pages (free, default)
`vite.config.js` sets `base: '/portfolio/'` for production. Push to `main` and the included
workflow (`.github/workflows/deploy.yml`) builds and publishes automatically.

1. Create a repo named **`portfolio`** and push this project to `main`.
2. In the repo: **Settings → Pages → Build and deployment → Source = GitHub Actions**.
3. The site goes live at `https://raman7976.github.io/portfolio/`.

> Commit the generated `package-lock.json` so the CI `npm ci` step works.
> If your repo has a different name, update `base` in `vite.config.js` to match.

### Vercel / Netlify
Set `base: '/'` in `vite.config.js`, then import the repo (build: `npm run build`, output: `dist`).

## Optional: résumé download
Drop a `resume.pdf` into `public/` and add a "Download Résumé" button (e.g. in `Hero.jsx`)
pointing to `${import.meta.env.BASE_URL}resume.pdf`.

## Accessibility
Respects `prefers-reduced-motion`, uses semantic landmarks, keyboard-navigable links,
and labelled icon buttons.
