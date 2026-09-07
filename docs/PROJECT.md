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

**Images:** 28 of 42 products have real client-supplied, verified-matching photos, each individually
checked for correct brand/model match before upload:
- 2026-09-06: 3 Weber kettles.
- 2026-09-07, batch 1: 5 more charcoal-grills photos (Weber Performer Deluxe, Jumbo Joe, Smokey Joe;
  Napoleon PRO Kettle, Charcoal Professional Cart) — **Charcoal Grills is now 100% real photos (8/8).**
- 2026-09-07, batch 2: Weber Pulse 1000 + 2000 — **Electric Grills is now 100% real photos (2/2).**
- 2026-09-07, batch 3: all 10 Gas Grills products (Weber Spirit II E-210/E-310, Genesis E-325s, Summit
  S-470/S-670, Q 2200; Napoleon Rogue 425/525, Prestige 500, Prestige PRO 665) — **Gas Grills is now 100%
  real photos (10/10).**
- 2026-09-07, batch 4: Weber SmokeFire EX4/EX6 (2 of 3 Pellet Grills — Napoleon Pellet Smoker PRO 575
  still on placeholder, see rejection note below) and all 6 Kamado & Ceramic Grills products (Kamado Joe
  Joe Jr./Classic II/Classic III/Big Joe II/Big Joe III, Weber Summit Kamado S6) — **Kamado & Ceramic
  Grills is now 100% real photos (6/6).**

**Rejected in batch 4:** a photo named `napoleon-pellet-smoker-pro-575.jpg` was supplied for the Napoleon
Pellet Smoker PRO 575 listing, but the image clearly shows a **Traeger**-branded grill (visible "TRAEGER"
embossed on the barrel and molded into the wheel hub) — not Napoleon. Not uploaded; that product still
uses the pellet-grills placeholder SVG. If the client wants this listing to have a real photo, they need
to supply an actual Napoleon PRO 575 photo, or clarify whether the product should be a Traeger model
instead (Traeger has not been approved as a 4th brand for this catalog — ask the client explicitly before
adding any Traeger products).

4 of 7 categories (Charcoal, Electric, Gas, Kamado & Ceramic) are now fully covered with real photography.
Remaining: Pellet Grills (2/3), BBQ Smokers (0/3), Grill Tools & Accessories (0/10) — still on placeholder
SVGs. **Hard rule going forward:** never use a photo showing a different brand's logo than the product
it's attached to, and never reuse a real branded photo under a different/invented product name. When the
client supplies more real photos, verify the visible branding matches the target product before wiring
them in.

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
