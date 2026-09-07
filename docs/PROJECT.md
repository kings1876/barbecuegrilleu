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

## Shop Structure — PIVOTED 2026-09-06
**Major change:** the catalog moved from an original/house-brand model to a real-brand retailer model.
Per the client, they buy and resell genuine grills from three brands — **Weber, Kamado Joe, and
Napoleon** — and asked for the catalog to reflect only these brands' real products.

Categories (7 — Outdoor Pizza Ovens removed; none of the three brands make pizza ovens):
- Charcoal Grills (Weber, Napoleon) — 8 products
- Gas Grills (Weber, Napoleon) — 10 products
- Electric Grills (Weber Pulse only — Kamado Joe/Napoleon don't make electric grills) — 2 products
- Pellet Grills (Weber, Napoleon) — 3 products
- BBQ Smokers (Weber Smokey Mountain — the only dedicated smoker line across the 3 brands) — 3 products
- Kamado & Ceramic Grills (Kamado Joe, Weber Summit Kamado) — 6 products
- Grill Tools & Accessories (all 3 brands) — 10 products

Total: 42 products. Counts are intentionally uneven — they reflect each brand's actual real product
lineup rather than a fixed per-category target. Do not pad any category with invented models just to
even out the count.

**Product names are real brand + model** (e.g. "Weber Original Kettle Premium 22\" Charcoal Grill —
Black", "Kamado Joe Classic III 18\" Kamado Grill", "Napoleon Rogue 425 Gas Grill"). Descriptions are
original writing based on publicly known product characteristics — not copied from any retailer's or
manufacturer's marketing copy.

**Images:** 10 of 42 products have real client-supplied, verified-matching photos (2026-09-06: 3 Weber
kettles; 2026-09-07, two batches: 5 more, then 2 more), each individually checked for correct brand match
before upload: `weber-original-kettle-premium-22-black`, `weber-original-kettle-premium-26-black`,
`weber-master-touch-premium-e-5730-22-black`, `weber-performer-deluxe-22-charcoal-grill` (visible "weber."
+ "PERFORMER" branding, confirmed), `weber-jumbo-joe-18-charcoal-grill`, `weber-smokey-joe-14-charcoal-grill`,
`napoleon-pro-charcoal-kettle-grill-22`, `napoleon-charcoal-professional-cart-grill` (visible "NAPOLEON"
branding, confirmed), `weber-pulse-1000-electric-grill`, `weber-pulse-2000-electric-grill` (both show
visible "weber PULSE" branding, confirmed — Electric Grills category is now fully covered with real
photos, 2/2). All other products use category placeholder SVGs pending real photos. **Hard rule going
forward:** never use a photo showing a different brand's logo than the product it's attached to, and
never reuse a real branded photo under a different/invented product name. When the client supplies more
real photos, verify the visible branding matches the target product before wiring them in.

**Known issue fixed 2026-09-07:** the Napoleon Charcoal Professional Cart photo initially rendered blank
on the live product page even though the raw source file was a valid 1500x1500 JPEG — Vercel's on-the-fly
image optimizer (`/_next/image`) was returning a broken 320x320 result for it. Fixed by setting
`images.unoptimized: true` in `next.config.mjs` for both targets, serving uploaded photos as-is rather
than depending on the optimizer. If a future photo renders blank, check this first before assuming the
source file is bad.

**Rejected earlier in this session, for the record:** the client initially asked to scrape kamdi24.de's
exact real branded product titles verbatim (declined — no verifiable dealer relationship at the time),
then to upload real manufacturer/retailer photos renamed to fictional product names (declined — photos
had visible logos for Weber/Royal Gourmet/Coyote/Blackstone, which would have shown a real branded photo
under a fictional listing). The client then clarified they are a genuine buy-and-resell retailer of Weber/
Kamado Joe/Napoleon specifically, which is what this pivot reflects — real name matched to real photo
where a real photo exists, placeholder otherwise. Two of the batch's photos (Coyote, Blackstone) and 3
unconfirmed ones were excluded from the catalog since they're outside the 3-brand scope or unconfirmed.

### Pre-pivot history (kept for context, no longer current)
Between 2026-08-07 and 2026-09-06 this catalog used an original/house-brand model (invented names like
"Ridgeway", "Ironforge", etc.) with 8-9 categories and up to 90 products, including a since-removed
`fuel-rubs-sauces` category. That entire approach was superseded by the real-brand pivot above — do not
resurrect the invented-brand product names, and do not mix invented and real brand names in the same
catalog going forward.

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

Unused clusters — next posts should target: Weber vs. Napoleon gas grills, Kamado Joe buying guide, Weber
Smokey Mountain vs. kamado for smoking, grill accessories (e.g. "Weber Genesis vs. Napoleon Rogue: Which
Gas Grill Should You Buy?", "Kamado Joe Classic vs. Big Joe: Which Size Do You Need?").

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
- Differentiation: retailer of genuine Weber, Kamado Joe, and Napoleon grills (per client, 2026-09-06).
  No claim of "authorized dealer" status is made anywhere on the site — that specific claim was never
  verified and should not be added without the client providing real evidence (distributor agreement,
  account confirmation, etc.).
- No named individuals, awards, or partnerships supplied — none listed on site.

## Compliance
No vertical-specific banned words or required framings were specified at intake (barbecue grills carry
no special regulatory language requirement, unlike vape/tobacco/alcohol products). Standard consumer
product terms apply. No age gate.

**Trademark/photo rule (added 2026-09-06, non-negotiable):** every product on this site must be a real
Weber, Kamado Joe, or Napoleon product, named accurately. Never attach a photo showing one brand's logo
to a listing for a different brand or an invented name. If a genuine photo isn't available, use a
placeholder graphic rather than a real branded photo of a different/unconfirmed product.

## Known Build Limitations
- Agent-Ready files declare `transport: none` — no live `/api/mcp` endpoint, JSON API, or live ACP/UCP
  routes were built in this pass (the "Vercel live layer," skill section V1–V6). This keeps the static
  declaration layer honest (Rule 10) rather than advertising a capability that doesn't exist. Building
  the live MCP/JSON API layer is a follow-up task if wanted.
- `app/robots.js` uses the Next.js native robots API, which does not support the raw `Content-Signal`
  directive or comment block from the skill's robots.txt template — AI-bot allow rules and the sitemap
  link are present; the Content-Signal line and resource comments are not.
