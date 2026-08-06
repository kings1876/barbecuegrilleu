# Barbecue Grill Co.

Next.js 14 (App Router) ecommerce site. Deploy target: **Vercel** (GitHub auto-deploy).

## Stack
- Next.js 14, React 18, App Router
- Plain CSS (`src/styles/globals.css`), no CSS framework
- Cart via `localStorage`
- Forms via Web3Forms (CORS `fetch`, no server route)

## Commands
```bash
npm install
npm run dev          # local dev server
npm run build         # production build (Vercel target)
npm run crosscheck     # pre-ship checks against the build output
```

## Single source of truth
Everything — pages, nav, sitemap, JSON-LD, agent-ready files — is generated from `src/config/site.js`.
To add a product, category, or blog post, add one entry there and rebuild. Never hand-write a new page.

## Placeholders still pending before real launch
| Item | File | Status |
|---|---|---|
| Web3Forms API key | `src/config/site.js` → `FORMS.web3formsKey` | pending |
| Tawk.to widget ID | `src/config/site.js` → `CHAT.channels` | pending |
| Google Search Console verification | `src/config/site.js` → `SITE.gscVerification` | pending |
| Real product photography | `public/images/*.svg` → replace with `.webp`/`.avif` | placeholder SVGs in use |

## Deploy
1. `git init` (already done), commit, push to the GitHub repo.
2. In Vercel: Add New → Project → import the repo → Framework Preset **Next.js** → Deploy.
3. Once live, set the Web3Forms key and Tawk.to ID above, then push again to activate them.
