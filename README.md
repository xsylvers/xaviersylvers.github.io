# AI Consultant Web Presence (GitHub Pages + Auto Build)

This is a proof-of-concept system for an AI consultant web presence that is:
- Hosted on GitHub Pages (free)
- Updated from a single source of truth (`content.yml`)
- Automatically rebuilt and published using GitHub Actions
- Maintainable without manually editing generated HTML

## Live Site
- https://xsylvers.github.io/xaviersylvers.github.io/

## How It Works
- `content.yml` = single source of truth for site content
- `build/build.js` = generator script that builds `docs/index.html`
- `.github/workflows/build.yml` = GitHub Action that runs on every update and commits the rebuilt site
- GitHub Pages serves the site from the `/docs` folder

## Setup (Fork & Deploy)
1. Fork this repository.
2. Go to **Settings → Pages**
3. Set:
   - Source: Deploy from a branch
   - Branch: `main`
   - Folder: `/docs`
4. Edit `content.yml` with your name, services, and contact info.
5. Commit changes.
6. Open the GitHub Pages URL shown in Settings → Pages.

## Update Content (No HTML Editing)
1. Edit `content.yml` (add a service, update tagline, etc.)
2. Commit the change.
3. Go to **Actions** → confirm “Build Site” ran successfully.
4. Refresh the live site — updates will appear automatically.

## Proof-of-Concept Demo (What To Show)
1. Open `content.yml` and add a new service line.
2. Commit.
3. Show the GitHub Action run in the Actions tab.
4. Refresh the live site and show the new service appears.
