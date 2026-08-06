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
Category → Product (Structure Type A, no subcategories).

Categories:
- Charcoal Grills
- Gas Grills
- Pellet Grills
- Electric Grills
- Grill Accessories

Products: 12 placeholder products drafted by Claude across all 5 categories (see `src/config/site.js` →
`PRODUCTS`). Names, prices, and descriptions are original to this build — not copied from any retailer.
Images are generic per-category placeholder SVGs pending real product photography.

## SEO Keyword Strategy
- Primary keyword: "Barbecue Grill for Sale" — assigned to homepage.
- Secondary keywords: bbq grill, bbq grill for sale, barbecue grill machine, barbecue machine for sale,
  barbecue machine, bbq grills, bbq grills for sale, charcoal grills for sale, buy charcoal grills, bbq
  charcoal grill — distributed across category pages and blog posts.
- Competitor: grillio.com

## Content Strategy
3 initial blog posts, one per major buying-decision cluster:
1. "Charcoal vs. Gas Grill: Which Is Right for You?" — charcoal-grills cluster
2. "How to Set Up a Pellet Grill: A First-Timer's Guide" — pellet-grills cluster
3. "Best Grills for Small Patios and Balconies" — electric-grills cluster

Gas grills and grill-accessories clusters are unused — next posts should target those
(e.g. "Best Gas Grill Accessories to Buy First", "3-Burner vs 4-Burner Gas Grills").

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
