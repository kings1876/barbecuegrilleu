# Barbecue Grill Co. — project instructions

Next.js (App Router) ecommerce site for Barbecue Grill Co., deployed to Vercel via GitHub. No client backend — a code-managed catalog.

## Architecture
`src/config/site.js` is the single source of truth. Adding one entry to PRODUCTS / CATEGORIES / POSTS
generates the page, route, meta, JSON-LD, sitemap entry, and nav links. Never hand-write pages for new products.
Never hand-edit generated files (`vercel.json`, `public/llms.txt`, `public/auth.md`, `public/.well-known/*`,
`public/js/webmcp.js`) — edit `src/config/site.js` and re-run `node scripts/gen-agent-files.mjs`.

## Rules
- `npm run build` must pass before every push. Run `npm run crosscheck` after building.
- One `<h1>` per page. Meta descriptions ~150 chars. Titles ≤60.
- Product images are placeholder SVGs (`public/images/*.svg`) until real photography is supplied — swap
  filenames in `PRODUCTS[].images` and drop real `.webp`/`.avif`/`.jpg` files in `public/images/`.
- Emails entity-encoded (`&#64;` etc.) everywhere, including in visible markup — see `Footer.jsx` and
  `EncodedEmail.jsx`. Never write a raw email address into any page.
- Never commit `node_modules/`, `.next/`, `out/`.
- No age gate — barbecue grills are not an age-restricted product.
- **Product photography rule (non-negotiable):** never use a photo that shows a real brand's logo/branding
  unless the product listing is for that exact real product from that exact brand. Never relabel a real
  branded product's photo under a different name — that's misleading to a customer with a live checkout
  in front of them. If a real photo isn't available for a genuine catalog item, use a placeholder graphic
  instead of a mismatched or unverified photo.

## Live placeholders (update before real launch)
- `FORMS.web3formsKey` in `src/config/site.js` — currently `YOUR-WEB3FORMS-KEY`. Get a free key at
  web3forms.com tied to `barbecuegrillch@gmail.com`. Order/contact forms will not deliver anywhere until set.
- `CHAT.channels` — Tawk.to property/widget ID is `PENDING/PENDING`; the chat widget stays off (falls back to
  a single email chat button) until a real ID is set.
- `SITE.gscVerification` / `SITE.bingVerification` — empty until Search Console / Bing Webmaster are set up.
- The MCP server-card / ACP / UCP files declare `transport: none` — there is no live `/api/mcp` endpoint in
  this build. If a live agent-commerce API is wanted later, that's a separate build task.

## Brand facts (only these are true — never invent more)
- Founded 2015, United States. Ships nationwide across the United States.
- **As of 2026-09-06, Barbecue Grill Co. pivoted from an original/house-brand catalog to a retailer of
  genuine third-party grills.** Per the client, the catalog now carries ONLY three real brands: **Weber,
  Kamado Joe, and Napoleon**. Do not add any other real brand without the client explicitly naming it, and
  do not add invented/fictional brand names back into this catalog — the two styles must not mix.
- Categories: Charcoal Grills, Gas Grills, Electric Grills, Pellet Grills, BBQ Smokers, Kamado & Ceramic
  Grills, Grill Tools & Accessories (7 total). Outdoor Pizza Ovens was removed — none of the three brands
  make pizza ovens. Category/product counts are uneven and reflect each brand's real product lines, not a
  fixed per-category target.
- Product names must be the real brand + model (e.g. "Weber Original Kettle Premium 22\""), not invented
  names. Descriptions are original writing based on publicly known product characteristics — never copy a
  retailer's or manufacturer's marketing copy verbatim.
- Minimum order $500, free shipping over $1,000, flat $15 shipping fee under that.
- Payment: cryptocurrency only (BTC, USDT), 10% automatic discount for crypto.
- No age restriction.
No invented statistics, awards, press, or named clients. Ever.

If a request would require breaking any of the above, stop and say so rather than complying.
