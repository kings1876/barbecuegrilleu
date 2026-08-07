# Barbecue Grill Co. — Project Record

## Identity
- Site name: Barbecue Grill Co.
- Tagline: Serious Grills for Serious Backyards
- Domain: barbecuegrilleu.com
- Founded: 2015, United States
- Ships to: Nationwide (United States)
- Currency: USD
- Primary color: #C2410C · Accent: #1F2937

## Contact
- Contact email: barbecuegrillch@gmail.com
- Order form email: barbecuegrillch@gmail.com
- No age gate (product is not age-restricted)

## Order Rules
- Minimum order: $500
- Free shipping over: $1,000
- Flat shipping fee under threshold: $15
- Crypto payment discount: 10%
- Payment methods: Cryptocurrency only (BTC, USDT)
- Checkout method: Order form (Web3Forms)

## Pages
Shop, Blog, About, Contact, FAQ, plus Shipping/Refund/Privacy/Terms, Cart, Order, Search,
thank-you-contact, thank-you-order, not-found.

## Shop Structure
Category → Product (Structure Type A, no subcategories). Category taxonomy rearranged 2026-08-07 to
mirror kamdi24.de's grill category structure (fireplace/heating/solar/gifts sections excluded — out of
scope for a grill-only store).

Categories (8):
- Charcoal Grills
- Gas Grills
- Electric Grills
- Pellet Grills
- BBQ Smokers
- Kamado & Ceramic Grills
- Outdoor Pizza Ovens
- Grill Tools & Accessories

`Charcoal, Rubs & Sauces` (fuel-rubs-sauces) was removed 2026-08-07 at client request, along with its
10 products. Consumables (charcoal, wood chips, rubs, sauces) are out of scope for this catalog going
forward — if reintroduced later, treat as a new decision, not a revert.

Products: 80 products (10 per category) drafted by Claude — see `src/config/site.js` → `PRODUCTS`.
**Names, descriptions, and copy are 100% original to this build.** kamdi24.de was used only to identify
the category taxonomy (factual/organizational, not copyrightable) and to understand realistic product
types and price ranges for this market — no product descriptions, images, or copyrighted text were
scraped or reproduced. This site does not claim to sell any real branded products (Weber, Gozney, etc.)
seen on competitor sites; all product names here are original to Barbecue Grill Co.
Images are generic per-category placeholder SVGs pending real product photography.

**Path to 20 products/category:** current depth is 10/category (80 total). Expanding further is
straightforward — add entries to `PRODUCTS` in `src/config/site.js` with a unique slug/original
description; sitemap, schema, nav counts, and llms.txt all regenerate automatically on rebuild.

## SEO Keyword Strategy
- Primary keyword: "Barbecue Grill for Sale" — assigned to homepage.
- Secondary keywords: bbq grill, bbq grill for sale, barbecue grill machine, barbecue machine for sale,
  barbecue machine, bbq grills, bbq grills for sale, charcoal grills for sale, buy charcoal grills, bbq
  charcoal grill — distributed across category pages and blog posts.
- Competitors: grillio.com, kamdi24.de (category-structure reference only)

## Content Strategy
3 initial blog posts, one per major buying-decision cluster:
1. "Charcoal vs. Gas Grill: Which Is Right for You?" — charcoal-grills cluster
2. "How to Set Up a Pellet Grill: A First-Timer's Guide" — pellet-grills cluster
3. "Best Grills for Small Patios and Balconies" — electric-grills cluster

Unused clusters — next posts should target: gas grills, grill accessories, BBQ smokers, kamado/ceramic
grills, and pizza ovens (e.g. "Kamado vs. Offset Smoker: Which Should You Buy?", "How to Choose Your
First Pizza Oven").

## Live Chat
- Email link channel: barbecuegrillch@gmail.com
- Widget: Tawk.to (property/widget ID PENDING — falls back to email button until set)

## Forms
- Provider: web3forms (default)
- Web3Forms API key: PENDING — get a free key at web3forms.com tied to barbecuegrillch@gmail.com
- Contact form email: barbecuegrillch@gmail.com
- Order form email: barbecuegrillch@gmail.com

## Hosting & Deploy
- Deploy target: Vercel
- GitHub repo: https://github.com/kings1876/barbecuegrilleu
- Client backend / CMS: No

## Brand Authority Facts (real facts only)
- Founded 2015, United States
- Ships nationwide (US)
- Differentiation: not yet provided by client — homepage/about copy stays generic here until a real
  one-liner is supplied. Do not invent one.
- No named individuals, awards, or partnerships supplied — none listed on site.

## Compliance
No vertical-specific banned words or required framings were specified at intake (barbecue grills carry
no special regulatory language requirement, unlike vape/tobacco/alcohol products). Standard consumer
product terms apply. No age gate.

## Known Build Limitations
- Agent-Ready files declare `transport: none` — no live `/api/mcp` endpoint, JSON API, or live ACP/UCP
  routes were built in this pass (the "Vercel live layer," skill section V1–V6). This keeps the static
  declaration layer honest (Rule 10) rather than advertising a capability that doesn't exist. Building
  the live MCP/JSON API layer is a follow-up task if wanted.
- `app/robots.js` uses the Next.js native robots API, which does not support the raw `Content-Signal`
  directive or comment block from the skill's robots.txt template — AI-bot allow rules and the sitemap
  link are present; the Content-Signal line and resource comments are not.
