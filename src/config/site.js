// ============================================================================
// SINGLE SOURCE OF TRUTH — src/config/site.js
// Every page, route, meta tag, JSON-LD block, sitemap entry, and nav link is
// generated from this file. Never hand-write a page for a new product/category/post.
// ============================================================================

export const SITE = {
  domain: 'barbecuegrilleu.com',
  name: 'Barbecue Grill Co.',
  tagline: 'Serious Grills for Serious Backyards',
  description:
    'Barbecue Grill Co. is a USA-based grill retailer established in 2015, offering charcoal, gas, electric, and pellet grills, BBQ smokers, kamado grills, and outdoor pizza ovens built for real outdoor cooking. Barbecue Grill Co. ships nationwide and specializes in high-output grills and grilling accessories for home cooks who take their backyard seriously.',
  locale: 'en',
  target: 'vercel', // 'vercel' | 'static'
  foundingYear: 2015,
  foundingLocation: 'United States',
  shipsTo: 'Nationwide (United States)',
  currency: 'USD',
  primaryColor: '#C2410C', // burnt-orange (char/flame)
  accentColor: '#1F2937', // charcoal grey
  contactEmail: 'barbecuegrillch&#64;gmail.com',
  contactEmailRaw: 'barbecuegrillch@gmail.com',
  phone: '',
  gscVerification: '',
  bingVerification: '',
}

export const ORDER_RULES = {
  minOrder: 500,
  freeShippingOver: 1000,
  flatShippingFee: 15,
  altPaymentDiscountPct: 10,
  altPaymentLabel: 'Crypto',
}

export const FORMS = {
  provider: 'web3forms',
  web3formsKey: 'YOUR-WEB3FORMS-KEY', // PENDING — set before launch
  resendFrom: '',
  turnstileSiteKey: '',
  contactEmail: 'barbecuegrillch@gmail.com',
  orderEmail: 'barbecuegrillch@gmail.com',
  wholesaleEmail: 'barbecuegrillch@gmail.com',
}

export const CHAT = {
  channels: [
    { type: 'email', value: 'barbecuegrillch@gmail.com' },
    { type: 'tawk', value: 'PENDING/PENDING' },
  ],
}

export const CATEGORIES = [
  {
    slug: 'charcoal-grills',
    name: 'Charcoal Grills',
    description:
      'Traditional charcoal grills built for real smoke flavor and high-heat searing, from compact kettles to heavy-gauge barrel grills.',
  },
  {
    slug: 'gas-grills',
    name: 'Gas Grills',
    description:
      'Propane and natural-gas grills with fast ignition, multi-zone burners, and consistent heat for everyday backyard cooking.',
  },
  {
    slug: 'electric-grills',
    name: 'Electric Grills',
    description:
      'Plug-in grills for patios, balconies, and spaces where open flame isn’t allowed, without giving up real grill-grate searing.',
  },
  {
    slug: 'pellet-grills',
    name: 'Pellet Grills',
    description:
      'Wood-pellet fed grills and smokers with digital temperature control for set-and-forget low-and-slow cooking or high-heat grilling.',
  },
  {
    slug: 'bbq-smokers',
    name: 'BBQ Smokers',
    description:
      'Dedicated offset, vertical, and drum smokers built for long, low-and-slow cooks — briskets, ribs, and pulled pork done right.',
  },
  {
    slug: 'kamado-grills',
    name: 'Kamado & Ceramic Grills',
    description:
      'Thick-walled ceramic grills that hold heat and moisture like nothing else, equally suited to a low overnight smoke or a 700°F sear.',
  },
  {
    slug: 'pizza-ovens',
    name: 'Outdoor Pizza Ovens',
    description:
      'Wood and gas-fired outdoor pizza ovens that hit true pizzeria temperatures for a crisp, blistered crust in minutes.',
  },
  {
    slug: 'grill-accessories',
    name: 'Grill Tools & Accessories',
    description:
      'Covers, tools, thermometers, grates, and replacement parts to keep any grill running at its best.',
  },
]

export const PRODUCTS = [
  // ---------------------------------------------------------------- charcoal-grills
  {
    slug: 'ridgeway-stainless-column-grill',
    name: 'Ridgeway Stainless Steel Column Grill',
    price: 429,
    category: 'charcoal-grills',
    badge: 'New',
    short: 'A stainless steel column-style charcoal grill that lights fast via chimney draw.',
    description:
      'The Ridgeway uses a tall stainless steel column to pull air straight up through the charcoal bed, cutting ignition time well below a standard kettle. The full stainless body resists rust and corrosion better than painted steel, making it a good fit for coastal or humid climates.',
    images: ['charcoal-grills.svg'],
  },
  {
    slug: 'ironforge-xl-charcoal-grill-station',
    name: 'Ironforge XL Charcoal Grill Station',
    price: 899,
    category: 'charcoal-grills',
    badge: 'Premium',
    short: 'A multi-zone charcoal grill station with a built-in prep table and storage cart.',
    description:
      'The Ironforge XL turns charcoal grilling into a full station setup — a wide charcoal bed for multiple heat zones, a built-in stainless prep table, and enclosed cabinet storage below for tools, charcoal bags, and accessories. Built for cooks who host often.',
    images: ['charcoal-grills.svg'],
  },
  {
    slug: 'summit-steel-kettle-grill-pro-26',
    name: 'Summit Steel Kettle Grill Pro 26"',
    price: 449,
    category: 'charcoal-grills',
    badge: 'Popular',
    short: 'A heavy-gauge 26-inch stainless kettle grill built for frequent use.',
    description:
      'The Pro 26" steps up from a standard kettle with a heavier-gauge stainless bowl that holds heat more consistently over long cooks and resists denting and rust far better than painted steel. A wider cooking surface fits more food per session.',
    images: ['charcoal-grills.svg'],
  },
  {
    slug: 'cascade-stainless-open-charcoal-grill',
    name: 'Cascade Stainless Open Charcoal Grill',
    price: 379,
    category: 'charcoal-grills',
    badge: 'none',
    short: 'A lidless open-style charcoal grill for direct, high-heat grilling.',
    description:
      'The Cascade skips the lid entirely, favoring the direct radiant heat and easy access of an open-format charcoal grill. A height-adjustable grate lets you fine-tune distance from the coals, popular with cooks who prioritize a fast, hot sear over slow indirect cooking.',
    images: ['charcoal-grills.svg'],
  },
  {
    slug: 'trailmaster-heavy-duty-camping-charcoal-grill',
    name: 'Trailmaster Heavy-Duty Camping Charcoal Grill',
    price: 399,
    category: 'charcoal-grills',
    badge: 'none',
    short: 'A rugged, foldable charcoal grill built for camping and off-grid cookouts.',
    description:
      'Built from thicker steel than a typical portable grill, the Trailmaster is designed to survive repeated loading, unloading, and rough handling on camping trips. Folding legs and a locking lid make it secure for transport, while still delivering a full-size cooking grate once set up.',
    images: ['charcoal-grills.svg'],
  },
  {
    slug: 'northgate-charcoal-grill-cart-system',
    name: 'Northgate Charcoal Grill Cart System',
    price: 749,
    category: 'charcoal-grills',
    badge: 'none',
    short: 'A cart-mounted charcoal grill system with a side prep station.',
    description:
      'The Northgate mounts a large charcoal bowl onto a full cart system with a dedicated side prep station, closing the gap between a basic kettle and a full outdoor kitchen setup. Locking wheels and a lower storage shelf round out the package.',
    images: ['charcoal-grills.svg'],
  },
  {
    slug: 'vantage-pro-stainless-kettle-grill-30',
    name: 'Vantage Pro Stainless Kettle Grill 30"',
    price: 599,
    category: 'charcoal-grills',
    badge: 'Premium',
    short: 'An extra-large 30-inch stainless kettle grill for big cookouts.',
    description:
      'At 30 inches, the Vantage Pro is sized for cooks who regularly feed a crowd — enough surface for several whole chickens or a full spread of burgers and skewers at once. The all-stainless build holds up to years of outdoor exposure.',
    images: ['charcoal-grills.svg'],
  },
  {
    slug: 'homestead-garden-charcoal-grill',
    name: 'Homestead Garden Charcoal Grill',
    price: 1099,
    category: 'charcoal-grills',
    badge: 'Premium',
    short: 'A semi-permanent, built-in-style charcoal grill for a garden or patio setup.',
    description:
      'The Homestead is built for cooks who want a charcoal grill as a fixed feature of their outdoor space rather than something wheeled in and out of storage. A heavier masonry-style base and large fixed charcoal bed deliver serious capacity for a permanent garden cooking station.',
    images: ['charcoal-grills.svg'],
  },
  {
    slug: 'ashcroft-dual-zone-charcoal-grill-station',
    name: 'Ashcroft Dual-Zone Charcoal Grill Station',
    price: 849,
    category: 'charcoal-grills',
    badge: 'none',
    short: 'A two-chamber charcoal station for running separate cooks side by side.',
    description:
      'The Ashcroft splits into two independently managed charcoal chambers, letting you run a hot sear on one side and a slower indirect cook on the other without sharing airflow or heat. A shared center shelf keeps tools within reach of both sides.',
    images: ['charcoal-grills.svg'],
  },
  {
    slug: 'ridgeline-charcoal-grill-prep-cart-set',
    name: 'Ridgeline Charcoal Grill & Prep Cart Set',
    price: 699,
    category: 'charcoal-grills',
    badge: 'Best Value',
    short: 'A charcoal kettle bundled with a matching prep cart and storage set.',
    description:
      'This set pairs a 24-inch charcoal kettle with a matching rolling prep cart, sized and finished to sit together as one unit rather than mismatched separate purchases. The cart adds counter space and enclosed storage a standalone kettle doesn\'t have.',
    images: ['charcoal-grills.svg'],
  },
  {
    slug: 'ironforge-compact-column-grill',
    name: 'Ironforge Compact Column Grill',
    price: 359,
    category: 'charcoal-grills',
    badge: 'Best Value',
    short: 'A smaller column-style charcoal grill with fast chimney-effect ignition.',
    description:
      'The Compact scales the column grill format down for smaller patios while keeping the same fast-lighting chimney draw as the full-size Ridgeway. A practical choice for cooks who want quick-start charcoal grilling without a large footprint.',
    images: ['charcoal-grills.svg'],
  },
  {
    slug: 'stonebridge-elite-kettle-grill-28',
    name: 'Stonebridge Elite Kettle Grill 28"',
    price: 529,
    category: 'charcoal-grills',
    badge: 'Premium',
    short: 'A premium 28-inch kettle grill with a built-in ash management system.',
    description:
      'The Stonebridge Elite adds a one-touch ash cleaning system to a large 28-inch kettle format, letting you clear spent ash from below without opening the lid or losing heat. A heavy-gauge bowl and lid hold temperature evenly across long cooks.',
    images: ['charcoal-grills.svg'],
  },
  {
    slug: 'coalridge-professional-charcoal-grill-station',
    name: 'Coalridge Professional Charcoal Grill Station',
    price: 1249,
    category: 'charcoal-grills',
    badge: 'Premium',
    short: 'A commercial-grade multi-zone charcoal station for high-volume cooking.',
    description:
      'Built with commercial-grade steel and a wide multi-zone charcoal bed, the Coalridge is sized for cooks who entertain at scale or run a small catering operation. Independent front and rear charcoal trays let you manage two heat levels across one continuous cooking surface.',
    images: ['charcoal-grills.svg'],
  },
  {
    slug: 'timberrock-stainless-camping-grill-set',
    name: 'Timberrock Stainless Charcoal Camping Grill Set',
    price: 459,
    category: 'charcoal-grills',
    badge: 'none',
    short: 'A stainless camping charcoal grill bundled with a matching tool set.',
    description:
      'The Timberrock pairs a compact stainless charcoal grill with a matching travel tool set, so everything needed for a campsite cookout packs together as one purchase. The stainless body shrugs off the rougher handling that comes with regular travel.',
    images: ['charcoal-grills.svg'],
  },
  {
    slug: 'cinderline-open-flame-charcoal-grill',
    name: 'Cinderline Open-Flame Charcoal Grill',
    price: 389,
    category: 'charcoal-grills',
    badge: 'none',
    short: 'An open-flame charcoal grill built for direct-heat searing.',
    description:
      'The Cinderline strips charcoal grilling back to the essentials — an open charcoal bed and a single fixed grate positioned for maximum direct heat. No lid, no vents to manage, just straightforward high-heat searing for cooks who want simplicity over indirect-cooking features.',
    images: ['charcoal-grills.svg'],
  },
  {
    slug: 'fortress-xl-charcoal-grill-station',
    name: 'Fortress XL Charcoal Grill Station with Side Tables',
    price: 999,
    category: 'charcoal-grills',
    badge: 'Premium',
    short: 'A large charcoal grill station with fold-out side tables and storage.',
    description:
      'The Fortress XL combines a large-capacity charcoal chamber with fold-out side tables on both sides, solving the common complaint of nowhere to set tools or plates mid-cook. Enclosed lower storage keeps charcoal bags and accessories out of the weather.',
    images: ['charcoal-grills.svg'],
  },
  {
    slug: 'wrangler-heavy-gauge-column-grill',
    name: 'Wrangler Heavy-Gauge Column Charcoal Grill',
    price: 419,
    category: 'charcoal-grills',
    badge: 'none',
    short: 'A heavy-gauge column-style charcoal grill built for durability.',
    description:
      'The Wrangler uses thicker-gauge steel than most column grills, adding weight and heat retention at the cost of some portability. A good option for a cook who wants the fast-lighting column format as a permanent fixture rather than something moved around often.',
    images: ['charcoal-grills.svg'],
  },
  {
    slug: 'prestige-stainless-charcoal-grill-set',
    name: 'Prestige Stainless Steel Charcoal Grill Set',
    price: 649,
    category: 'charcoal-grills',
    badge: 'none',
    short: 'A stainless charcoal grill bundled with a weatherproof cover and tool set.',
    description:
      'The Prestige set bundles a full stainless charcoal kettle with a matching weatherproof cover and a 5-piece tool set, covering the essentials a new charcoal cook would otherwise buy separately. Everything is sized and finished to match.',
    images: ['charcoal-grills.svg'],
  },
  {
    slug: 'summit-peak-premium-kettle-grill-32',
    name: 'Summit Peak Premium Kettle Grill 32"',
    price: 699,
    category: 'charcoal-grills',
    badge: 'Premium',
    short: 'The largest kettle grill in the lineup at 32 inches across.',
    description:
      'The Summit Peak tops out the kettle format at 32 inches, the largest single-bowl charcoal grill in the lineup. Sized for cooks who regularly grill for a large group and want kettle-style simplicity without stepping down to a smaller cooking surface.',
    images: ['charcoal-grills.svg'],
  },
  {
    slug: 'grandview-garden-charcoal-grill-station',
    name: 'Grandview Garden Charcoal Grill Station',
    price: 1499,
    category: 'charcoal-grills',
    badge: 'Premium',
    short: 'A top-tier built-in-style garden charcoal grill station.',
    description:
      'The Grandview is the flagship of the garden-station lineup — a large fixed charcoal bed, full stainless prep surface, and a built-in-style base designed to anchor a permanent outdoor kitchen. Built for cooks who treat their charcoal setup as a serious, permanent installation.',
    images: ['charcoal-grills.svg'],
  },

  // ---------------------------------------------------------------- gas-grills
  {
    slug: 'summit-3-burner-gas-grill',
    name: 'Summit 3-Burner Gas Grill',
    price: 429,
    category: 'gas-grills',
    badge: 'Popular',
    short: 'A 3-burner propane grill with independent zone control and a side burner.',
    description:
      'The Summit 3-Burner gives you three independently controlled stainless steel burners, so you can sear on one side and hold food warm on the other without juggling a single heat zone. A side burner handles sauces or sides, and the porcelain-coated cast iron grates hold heat well and clean up easily. Locking caster wheels make repositioning simple.',
    images: ['gas-grills.svg'],
  },
  {
    slug: 'coastal-4-burner-gas-grill',
    name: 'Coastal 4-Burner Gas Grill',
    price: 649,
    category: 'gas-grills',
    badge: 'Premium',
    short: 'A 4-burner stainless steel gas grill with rotisserie burner and large cooking area.',
    description:
      'The Coastal 4-Burner is built around a full stainless steel body that resists corrosion even in humid climates. Four main burners plus a dedicated rear rotisserie burner give you enough zones to run a full spread, and the extra-large cooking grate area comfortably handles cookouts for a crowd.',
    images: ['gas-grills.svg'],
  },
  {
    slug: 'harbor-2-burner-gas-grill',
    name: 'Harbor 2-Burner Gas Grill',
    price: 329,
    category: 'gas-grills',
    badge: 'none',
    short: 'A compact 2-burner propane grill sized for small patios and decks.',
    description:
      'The Harbor keeps the footprint tight without dropping down to a single burner, giving you two independent zones for basic hot-and-warm cooking on a smaller deck or patio. Porcelain-coated grates and a folding side shelf round out a grill built for everyday weeknight use.',
    images: ['gas-grills.svg'],
  },
  {
    slug: 'ridgeline-5-burner-gas-grill',
    name: 'Ridgeline 5-Burner Gas Grill',
    price: 799,
    category: 'gas-grills',
    badge: 'Premium',
    short: 'A 5-burner gas grill plus side burner for large family cookouts.',
    description:
      'Five main burners plus a dedicated side burner give the Ridgeline enough real estate to run a full multi-dish cookout at once — proteins, vegetables, and a warming zone, all independently controlled. A large front shelf and double-walled lid round out a grill built for hosting.',
    images: ['gas-grills.svg'],
  },
  {
    slug: 'cascade-6-burner-gas-grill',
    name: 'Cascade 6-Burner Gas Grill',
    price: 999,
    category: 'gas-grills',
    badge: 'Premium',
    short: 'A premium 6-burner gas grill with an infrared sear burner.',
    description:
      'The Cascade tops the gas lineup with six main burners and a dedicated infrared sear burner capable of restaurant-style crust on a steak in minutes. The largest cooking area in the range means a full-scale party spread is no problem, and dual side shelves add real prep space.',
    images: ['gas-grills.svg'],
  },
  {
    slug: 'trailrunner-portable-gas-grill',
    name: 'Trailrunner Portable Gas Grill',
    price: 159,
    category: 'gas-grills',
    badge: 'Best Value',
    short: 'A tabletop propane grill built for camping, tailgating, and small trips.',
    description:
      'Running off a small refillable propane tank, the Trailrunner lights instantly and reaches cooking temperature in minutes — no charcoal, no waiting. Fold-down legs and a latching lid make it easy to pack for a campsite or tailgate lot, while still offering a full-size cooking grate.',
    images: ['gas-grills.svg'],
  },
  {
    slug: 'stonegate-natural-gas-grill',
    name: 'Stonegate Natural Gas Grill',
    price: 749,
    category: 'gas-grills',
    badge: 'none',
    short: 'A 4-burner grill built to run on a permanent natural gas line.',
    description:
      'For a patio with a natural gas hookup, the Stonegate skips propane tanks entirely and connects directly to your home\'s gas line for effectively unlimited run time. Four burners and porcelain-coated grates deliver the same cooking performance as our propane models, just without ever running out of fuel mid-cook.',
    images: ['gas-grills.svg'],
  },
  {
    slug: 'northshore-3-burner-gas-grill',
    name: 'Northshore 3-Burner Gas Grill',
    price: 459,
    category: 'gas-grills',
    badge: 'none',
    short: 'A mid-tier 3-burner gas grill with an optional griddle insert.',
    description:
      'The Northshore covers standard 3-burner grilling with the added flexibility of a griddle insert that drops onto one zone for pancakes, smash burgers, or stir-fry vegetables. It\'s built for cooks who want one grill to cover both classic grate cooking and flat-top griddling.',
    images: ['gas-grills.svg'],
  },
  {
    slug: 'driftwood-cart-gas-grill',
    name: 'Driftwood 4-Burner Cart Gas Grill',
    price: 549,
    category: 'gas-grills',
    badge: 'none',
    short: 'A 4-burner gas grill on a rolling cart with an enclosed storage cabinet.',
    description:
      'The Driftwood pairs a standard 4-burner cooking system with an enclosed cabinet base, keeping tools, extra propane, and grilling accessories out of the weather and out of sight. Locking wheels and a full-width front shelf make it a practical everyday backyard grill.',
    images: ['gas-grills.svg'],
  },
  {
    slug: 'summit-pro-6-burner-gas-station',
    name: 'Summit Pro 6-Burner Gas Grill Station',
    price: 1349,
    category: 'gas-grills',
    badge: 'Premium',
    short: 'A flagship outdoor-kitchen-style gas grill station with 6 burners and side storage.',
    description:
      'Built for a permanent outdoor kitchen setup, the Summit Pro combines six main burners, a side burner, and a fully enclosed stainless cabinet with drawer storage. It\'s the largest, most capable gas grill in the lineup, sized for cooks who entertain often and want everything built into one station.',
    images: ['gas-grills.svg'],
  },

  // ---------------------------------------------------------------- electric-grills
  {
    slug: 'patio-pro-electric-grill',
    name: 'Patio Pro Electric Grill',
    price: 189,
    category: 'electric-grills',
    badge: 'New',
    short: 'A compact plug-in electric grill designed for balconies, patios, and apartments.',
    description:
      'The Patio Pro brings real grill-grate sear marks to spaces where charcoal and propane aren\'t allowed. A high-wattage heating element reaches searing temperatures quickly, and the porcelain-coated cast iron grate mimics the char of an open-flame cook. A removable drip tray keeps cleanup simple.',
    images: ['electric-grills.svg'],
  },
  {
    slug: 'skyline-xl-electric-grill',
    name: 'Skyline XL Electric Grill',
    price: 279,
    category: 'electric-grills',
    badge: 'none',
    short: 'A full-size electric grill with adjustable thermostat and extra-large cooking surface.',
    description:
      'The Skyline XL scales up the electric-grill format to a full-size cooking surface without needing a gas line or propane tank. An adjustable thermostat dial gives real temperature control instead of a single on/off setting, and weather-resistant housing means it can live outdoors year-round.',
    images: ['electric-grills.svg'],
  },
  {
    slug: 'balcony-mini-electric-grill',
    name: 'Balcony Mini Electric Grill',
    price: 99,
    category: 'electric-grills',
    badge: 'Best Value',
    short: 'An ultra-compact electric grill sized for the smallest balconies.',
    description:
      'When even a small electric grill won\'t fit, the Balcony Mini scales down further without losing real grill-grate texture. A single heating element and a compact cast iron grate handle a couple of servings at a time — enough for a solo dinner or a quick side dish.',
    images: ['electric-grills.svg'],
  },
  {
    slug: 'terrace-dual-zone-electric-grill',
    name: 'Terrace Dual-Zone Electric Grill',
    price: 249,
    category: 'electric-grills',
    badge: 'none',
    short: 'An electric grill with two independently controlled heat zones.',
    description:
      'The Terrace splits its cooking surface into two independently controlled zones, so you can sear on one side while holding food warm on the other — a capability usually reserved for multi-burner gas grills. It\'s built for cooks who want zone control without an open flame.',
    images: ['electric-grills.svg'],
  },
  {
    slug: 'loft-smokeless-electric-grill',
    name: 'Loft Smokeless Electric Grill',
    price: 179,
    category: 'electric-grills',
    badge: 'New',
    short: 'An indoor/outdoor electric grill with a smoke-reducing drip cooling system.',
    description:
      'The Loft\'s drip tray sits further from the heating element than a standard design, cooling grease before it can smoke — enough of a reduction that it works on a covered porch or even indoors with a window cracked. Still delivers real grate marks and sear, just with far less smoke.',
    images: ['electric-grills.svg'],
  },
  {
    slug: 'harborview-electric-griddle-grill',
    name: 'Harborview Electric Griddle-Grill Combo',
    price: 219,
    category: 'electric-grills',
    badge: 'none',
    short: 'An electric grill with a flat-top griddle plate for breakfast and smash burgers.',
    description:
      'The Harborview splits its surface between a ridged grill plate and a flat griddle plate, covering everything from grate-marked vegetables to pancakes and smash burgers on the same appliance. A single temperature dial controls both zones.',
    images: ['electric-grills.svg'],
  },
  {
    slug: 'rooftop-foldable-electric-grill',
    name: 'Rooftop Foldable Electric Grill',
    price: 139,
    category: 'electric-grills',
    badge: 'none',
    short: 'A foldable-leg electric grill that collapses flat for tight storage.',
    description:
      'Built for rooftop decks and small storage closets alike, the Rooftop folds its legs flat against the body when not in use, cutting its storage footprint by more than half. Full cooking performance is unchanged — just unfold, plug in, and preheat.',
    images: ['electric-grills.svg'],
  },
  {
    slug: 'condo-grill-pro-electric',
    name: 'Condo Grill Pro Electric',
    price: 189,
    category: 'electric-grills',
    badge: 'none',
    short: 'A low-smoke, low-clearance electric grill designed around common HOA rules.',
    description:
      'Many condo and apartment associations restrict grill types by fire risk and smoke output — the Condo Grill Pro is built around a fully enclosed heating element and low-smoke drip system to fit those restrictions while still delivering genuine grate-seared food.',
    images: ['electric-grills.svg'],
  },
  {
    slug: 'sundeck-xl-electric-grill',
    name: 'Sundeck XL Electric Grill',
    price: 329,
    category: 'electric-grills',
    badge: 'Premium',
    short: 'The largest cooking surface in the electric grill lineup.',
    description:
      'The Sundeck XL maximizes cooking area within the constraints of an electric grill, giving you enough room to cook for a small group rather than one or two people at a time. Dual heating elements keep heat consistent across the full width of the grate.',
    images: ['electric-grills.svg'],
  },
  {
    slug: 'plugin-grill-go-portable-electric',
    name: 'Grill-Go Portable Electric Grill',
    price: 119,
    category: 'electric-grills',
    badge: 'none',
    short: 'A lightweight electric grill that runs from a standard outlet or a power bank.',
    description:
      'The Grill-Go is built for travel — light enough to carry, compact enough to fit in a car trunk, and able to run from either a standard wall outlet or a compatible portable power station where open flame isn\'t allowed.',
    images: ['electric-grills.svg'],
  },

  // ---------------------------------------------------------------- pellet-grills
  {
    slug: 'timberline-pellet-smoker',
    name: 'Timberline Wood Pellet Smoker',
    price: 899,
    category: 'pellet-grills',
    badge: 'Premium',
    short: 'A digital-controlled wood pellet smoker with wide temperature range for grilling or smoking.',
    description:
      'The Timberline uses an auger-fed hopper and digital controller to hold a steady temperature anywhere from a low smoke to a high-heat sear. The controller\'s temperature probe lets you monitor meat without lifting the lid, and a fully insulated firebox keeps heat consistent even in cold weather.',
    images: ['pellet-grills.svg'],
  },
  {
    slug: 'ridgeline-pro-pellet-grill',
    name: 'Ridgeline Pro Pellet Grill',
    price: 1249,
    category: 'pellet-grills',
    badge: 'Premium',
    short: 'A high-capacity pellet grill with WiFi temperature control and dual meat probes.',
    description:
      'The Ridgeline Pro is built for cooks who want set-and-forget precision on serious cook days. WiFi-enabled temperature control lets you monitor and adjust remotely, while dual meat probe ports track two cuts at once without opening the lid.',
    images: ['pellet-grills.svg'],
  },
  {
    slug: 'cascade-compact-pellet-grill',
    name: 'Cascade Compact Pellet Grill',
    price: 549,
    category: 'pellet-grills',
    badge: 'Best Value',
    short: 'A smaller-capacity pellet grill sized for 2-4 people.',
    description:
      'Not every household needs a full-size pellet smoker — the Cascade delivers the same auger-fed, digitally controlled cooking in a compact chamber sized realistically for two to four people, at a footprint that fits a smaller patio.',
    images: ['pellet-grills.svg'],
  },
  {
    slug: 'blackridge-pellet-grill-griddle-combo',
    name: 'Blackridge Pellet Grill & Griddle Combo',
    price: 1099,
    category: 'pellet-grills',
    badge: 'Premium',
    short: 'A pellet grill with an integrated flat-top griddle zone.',
    description:
      'The Blackridge adds a dedicated flat-top griddle section alongside its standard pellet-fed cooking chamber, letting you smoke a brisket on one side while running smash burgers or breakfast on the other — all from the same digital controller.',
    images: ['pellet-grills.svg'],
  },
  {
    slug: 'trailblazer-portable-pellet-grill',
    name: 'Trailblazer Portable Pellet Grill',
    price: 429,
    category: 'pellet-grills',
    badge: 'none',
    short: 'A tailgate-sized pellet grill with fold-down legs.',
    description:
      'The Trailblazer brings digital pellet-grill convenience to tailgates and campsites, with fold-down legs and a compact hopper that still holds enough pellets for a multi-hour cook away from home.',
    images: ['pellet-grills.svg'],
  },
  {
    slug: 'summit-elite-pellet-smoker',
    name: 'Summit Elite Pellet Smoker',
    price: 1599,
    category: 'pellet-grills',
    badge: 'Premium',
    short: 'The largest-capacity flagship pellet smoker in the lineup.',
    description:
      'The Summit Elite tops the pellet lineup with the largest cooking chamber and hopper capacity available, built for cooks who regularly smoke multiple briskets or a full spread of ribs at once. Triple meat-probe ports and WiFi control round out the flagship spec.',
    images: ['pellet-grills.svg'],
  },
  {
    slug: 'northfork-pellet-grill-cart',
    name: 'Northfork Pellet Grill & Cart',
    price: 749,
    category: 'pellet-grills',
    badge: 'none',
    short: 'A mid-size pellet grill with a storage cart and side shelving.',
    description:
      'The Northfork balances capacity and footprint with a mid-size cooking chamber mounted on a full storage cart, giving you shelf space for rubs, tools, and extra pellet bags right at the grill.',
    images: ['pellet-grills.svg'],
  },
  {
    slug: 'copperpeak-wifi-pellet-grill',
    name: 'Copperpeak WiFi Pellet Grill',
    price: 899,
    category: 'pellet-grills',
    badge: 'New',
    short: 'An app-controlled pellet grill with a flame-broiler plate for direct-heat searing.',
    description:
      'The Copperpeak pairs full app control with a sliding flame-broiler plate that opens the cooking chamber to direct flame when you want a hard sear, then closes again for standard indirect pellet-smoked cooking.',
    images: ['pellet-grills.svg'],
  },
  {
    slug: 'lodgepole-pellet-grill-starter',
    name: 'Lodgepole Pellet Grill Starter',
    price: 479,
    category: 'pellet-grills',
    badge: 'Best Value',
    short: 'An entry-level pellet grill built for first-time pellet cooks.',
    description:
      'The Lodgepole strips pellet grilling down to the essentials — a reliable auger feed, a simple digital dial, and a single meat probe — at a price built for someone trying pellet cooking for the first time without a full investment.',
    images: ['pellet-grills.svg'],
  },
  {
    slug: 'alpine-xl-pellet-smoker',
    name: 'Alpine XL Pellet Smoker',
    price: 1249,
    category: 'pellet-grills',
    badge: 'none',
    short: 'An extra-large hopper pellet smoker built for all-day cooks.',
    description:
      'The Alpine XL\'s oversized hopper holds enough pellets to run a 12+ hour brisket cook without a refill, removing one of the few manual steps left in pellet smoking. A weatherproof hopper lid keeps pellets dry between cooks.',
    images: ['pellet-grills.svg'],
  },

  // ---------------------------------------------------------------- bbq-smokers
  {
    slug: 'ironclad-barrel-smoker',
    name: 'Ironclad Barrel Smoker',
    price: 519,
    category: 'bbq-smokers',
    badge: 'Best Value',
    short: 'A heavy-gauge steel barrel smoker with offset firebox for low-and-slow smoking.',
    description:
      'Built from heavy-gauge steel, the Ironclad separates the fire from the meat with an offset firebox, so smoke rolls gently across the cooking chamber instead of blasting it with direct heat. Two height-adjustable cooking grates give you room for a full brisket or several racks of ribs at once.',
    images: ['bbq-smokers.svg'],
  },
  {
    slug: 'drifter-offset-smoker',
    name: 'Drifter Offset Smoker',
    price: 649,
    category: 'bbq-smokers',
    badge: 'Popular',
    short: 'A classic offset barrel smoker with a separate charcoal firebox.',
    description:
      'The Drifter follows the traditional offset layout — a round cooking chamber fed by smoke and heat from a side-mounted firebox — for the low, even heat that long briskets and pork shoulders need. A stack damper on the chimney end gives you fine control over draw.',
    images: ['bbq-smokers.svg'],
  },
  {
    slug: 'highland-vertical-water-smoker',
    name: 'Highland Vertical Water Smoker',
    price: 229,
    category: 'bbq-smokers',
    badge: 'Best Value',
    short: 'A bullet-style charcoal water smoker with two cooking grates.',
    description:
      'The Highland\'s water pan sits between the charcoal and the food, moderating temperature swings and adding moisture through a long cook. Two stacked cooking grates let you smoke ribs and a chicken at the same time in a compact vertical footprint.',
    images: ['bbq-smokers.svg'],
  },
  {
    slug: 'backwoods-compact-offset-smoker',
    name: 'Backwoods Compact Offset Smoker',
    price: 479,
    category: 'bbq-smokers',
    badge: 'none',
    short: 'A smaller offset smoker sized for backyard use rather than competition volume.',
    description:
      'The Backwoods brings offset-smoker technique to a backyard-appropriate size, with a single cooking grate and firebox scaled down from competition rigs. Still built from real steel plate, not thin sheet metal, for heat retention that holds through a multi-hour cook.',
    images: ['bbq-smokers.svg'],
  },
  {
    slug: 'foundry-ugly-drum-smoker',
    name: 'Foundry Ugly Drum Smoker',
    price: 349,
    category: 'bbq-smokers',
    badge: 'none',
    short: 'An upright drum smoker (UDS-style) built for simple, even low-and-slow cooks.',
    description:
      'The upright drum design puts charcoal at the bottom and food on hanging or grate-mounted racks well above it, producing remarkably even heat with minimal babysitting. A simple intake damper is the only control most cooks ever need to adjust.',
    images: ['bbq-smokers.svg'],
  },
  {
    slug: 'stockyard-competition-offset-smoker',
    name: 'Stockyard Competition Offset Smoker',
    price: 1899,
    category: 'bbq-smokers',
    badge: 'Premium',
    short: 'A heavy-gauge competition-grade offset smoker with a large multi-rack chamber.',
    description:
      'Built from thick steel plate for maximum heat retention, the Stockyard is sized and built for cooks who smoke in volume — competition teams or anyone regularly feeding a large crowd. Multiple adjustable racks and a large firebox support long, consistent cooks.',
    images: ['bbq-smokers.svg'],
  },
  {
    slug: 'homestead-electric-smoker',
    name: 'Homestead Insulated Electric Smoker',
    price: 249,
    category: 'bbq-smokers',
    badge: 'New',
    short: 'An insulated electric smoker with digital temperature control.',
    description:
      'The Homestead removes fire management from the smoking process entirely — a digital controller holds a set temperature using an electric heating element and wood chip tray, insulated walls keep heat consistent even in cold weather.',
    images: ['bbq-smokers.svg'],
  },
  {
    slug: 'switchback-propane-smoker',
    name: 'Switchback Propane Smoker',
    price: 199,
    category: 'bbq-smokers',
    badge: 'none',
    short: 'A propane-fueled vertical smoker with a simple dial-controlled burner.',
    description:
      'The Switchback uses a propane burner instead of charcoal to hold steady smoking temperatures, with a wood chip box positioned above the flame for real smoke flavor without charcoal management. A good entry point for cooks moving up from a basic grill.',
    images: ['bbq-smokers.svg'],
  },
  {
    slug: 'millcreek-reverse-flow-smoker',
    name: 'Millcreek Reverse-Flow Offset Smoker',
    price: 1299,
    category: 'bbq-smokers',
    badge: 'Premium',
    short: 'A reverse-flow offset smoker built for even heat across the full cooking chamber.',
    description:
      'A baffle plate routes smoke and heat under the cooking chamber before letting it rise back up past the food, evening out the hot-end/cool-end temperature swing common on standard offset smokers. Built for cooks who want offset flavor with more consistent results.',
    images: ['bbq-smokers.svg'],
  },
  {
    slug: 'basecamp-mini-bullet-smoker',
    name: 'Basecamp Mini Bullet Smoker',
    price: 149,
    category: 'bbq-smokers',
    badge: 'Best Value',
    short: 'A compact charcoal bullet smoker for small yards and first-time smokers.',
    description:
      'The Basecamp Mini scales the classic bullet-smoker shape down to fit a small yard or patio without giving up a real water pan and adjustable intake damper — a low-cost way to try low-and-slow smoking before investing in a larger rig.',
    images: ['bbq-smokers.svg'],
  },

  // ---------------------------------------------------------------- kamado-grills
  {
    slug: 'kilnstone-kamado-grill-medium',
    name: 'Kilnstone Kamado Grill — Medium',
    price: 649,
    category: 'kamado-grills',
    badge: 'Popular',
    short: 'A medium ceramic kamado grill sized for most everyday cooking.',
    description:
      'The Kilnstone Medium is a thick-walled ceramic kamado sized for the majority of home cooks — enough capacity for a family meal without the footprint of the largest models. Ceramic construction holds heat and moisture far better than steel, equally suited to a low overnight smoke or a 700°F sear.',
    images: ['kamado-grills.svg'],
  },
  {
    slug: 'kilnstone-kamado-grill-large',
    name: 'Kilnstone Kamado Grill — Large',
    price: 899,
    category: 'kamado-grills',
    badge: 'Premium',
    short: 'A large ceramic kamado grill built for bigger cuts and bigger crowds.',
    description:
      'The Large steps the Kilnstone platform up to a bigger cooking surface, enough for two full racks of ribs side by side or a large turkey. The same thick ceramic shell and precision top/bottom vents carry over from the Medium, just with more room.',
    images: ['kamado-grills.svg'],
  },
  {
    slug: 'terracotta-mini-kamado-grill',
    name: 'Terracotta Mini Kamado Grill',
    price: 349,
    category: 'kamado-grills',
    badge: 'Best Value',
    short: 'A compact ceramic kamado grill sized for patios and small households.',
    description:
      'The Terracotta Mini brings kamado-style heat retention to a smaller footprint, well suited to a small patio or a household that doesn\'t need full-size capacity. Still built from real thick ceramic, not a thin imitation shell.',
    images: ['kamado-grills.svg'],
  },
  {
    slug: 'hearthstone-xl-kamado-grill',
    name: 'Hearthstone XL Kamado Grill',
    price: 1399,
    category: 'kamado-grills',
    badge: 'Premium',
    short: 'The largest kamado grill in the lineup, built for competition-scale cooks.',
    description:
      'The Hearthstone XL is the largest kamado in the range, with a cooking area sized for competition-level volume — multiple briskets or a full spread of ribs at once, all within the same heat-retentive ceramic shell.',
    images: ['kamado-grills.svg'],
  },
  {
    slug: 'volcano-ceramic-egg-grill',
    name: 'Volcano Ceramic Egg Grill',
    price: 799,
    category: 'kamado-grills',
    badge: 'none',
    short: 'A classic egg-shaped ceramic grill with precision top and bottom vents.',
    description:
      'The Volcano follows the traditional egg-shaped kamado profile, using precision top and bottom dampers to hold temperatures within a few degrees for hours at a time. A cast iron cooking grate and heat deflector plate come standard for indirect cooking.',
    images: ['kamado-grills.svg'],
  },
  {
    slug: 'stonewell-kamado-grill-cart',
    name: 'Stonewell Kamado Grill & Cart',
    price: 999,
    category: 'kamado-grills',
    badge: 'none',
    short: 'A kamado grill mounted on a rolling cart with side shelving.',
    description:
      'The Stonewell pairs a medium-large ceramic kamado with a purpose-built rolling cart, adding side shelf space and a lower rack that a standalone kamado stand doesn\'t offer. Locking wheels keep it steady once positioned.',
    images: ['kamado-grills.svg'],
  },
  {
    slug: 'emberstone-kamado-starter-grill',
    name: 'Emberstone Kamado Starter Grill',
    price: 499,
    category: 'kamado-grills',
    badge: 'Best Value',
    short: 'An entry-level ceramic kamado grill for cooks new to the format.',
    description:
      'The Emberstone strips the kamado format down to essentials — thick ceramic shell, standard vents, a basic stand — at a price built for cooks trying kamado cooking for the first time without the premium-tier cost.',
    images: ['kamado-grills.svg'],
  },
  {
    slug: 'graystone-kamado-grill-nest',
    name: 'Graystone Kamado Grill with Side Tables',
    price: 749,
    category: 'kamado-grills',
    badge: 'none',
    short: 'A kamado grill with built-in fold-out side tables for prep space.',
    description:
      'The Graystone adds fold-out side tables directly to its stand, solving one of the more common kamado complaints — nowhere to set tools or a plate mid-cook. Tables fold down flat when not needed to keep the footprint compact.',
    images: ['kamado-grills.svg'],
  },
  {
    slug: 'kilnstone-kamado-joiner-cart',
    name: 'Kilnstone Dual-Kamado Joiner Cart',
    price: 1099,
    category: 'kamado-grills',
    badge: 'Premium',
    short: 'A cart setup that joins two kamado grills with a shared center table.',
    description:
      'Built for cooks who run two kamados at once — one for low-and-slow, one for high-heat searing — the Joiner Cart links a pair of Kilnstone kamados with a shared center prep table and connected side shelving.',
    images: ['kamado-grills.svg'],
  },
  {
    slug: 'copperkiln-portable-kamado-grill',
    name: 'Copperkiln Portable Kamado Grill',
    price: 429,
    category: 'kamado-grills',
    badge: 'New',
    short: 'A smaller, lighter ceramic kamado grill built for travel and camping.',
    description:
      'The Copperkiln trims down both size and weight versus a standard kamado while keeping the thick ceramic shell that makes the format worth choosing, aimed at cooks who want kamado heat retention at a campsite or tailgate.',
    images: ['kamado-grills.svg'],
  },

  // ---------------------------------------------------------------- pizza-ovens
  {
    slug: 'forno-portable-gas-pizza-oven',
    name: 'Forno Portable Gas Pizza Oven',
    price: 399,
    category: 'pizza-ovens',
    badge: 'Popular',
    short: 'A tabletop gas-fired pizza oven that reaches pizzeria heat in minutes.',
    description:
      'The Forno\'s gas burner reaches 900°F+ inside its stone-floored chamber in around 15 minutes, cooking a full pizza in roughly 90 seconds once preheated. Compact enough for a tabletop or side cart, it\'s built for cooks who want real Neapolitan-style results without a wood-fire setup.',
    images: ['pizza-ovens.svg'],
  },
  {
    slug: 'forno-wood-fired-pizza-oven',
    name: 'Forno Wood-Fired Pizza Oven',
    price: 549,
    category: 'pizza-ovens',
    badge: 'Premium',
    short: 'A wood-pellet fired outdoor pizza oven with a traditional smoky finish.',
    description:
      'The wood-fired Forno uses a small pellet hopper feeding a dedicated burn chamber, giving pizzas the faint wood-smoke character a gas oven can\'t replicate. Reaches full pizzeria temperature within about 20 minutes of lighting.',
    images: ['pizza-ovens.svg'],
  },
  {
    slug: 'piazza-tabletop-pizza-oven',
    name: 'Piazza Tabletop Pizza Oven',
    price: 299,
    category: 'pizza-ovens',
    badge: 'Best Value',
    short: 'A compact tabletop pizza oven for patios and small households.',
    description:
      'The Piazza is the entry point into the pizza oven lineup — a smaller stone floor and chamber than the full-size Forno models, but the same high-heat gas burner and quick preheat, sized for a household that doesn\'t need to cook multiple pizzas back to back.',
    images: ['pizza-ovens.svg'],
  },
  {
    slug: 'stonecrust-dual-fuel-pizza-oven',
    name: 'Stonecrust Dual-Fuel Pizza Oven',
    price: 649,
    category: 'pizza-ovens',
    badge: 'Premium',
    short: 'A pizza oven that runs on either gas or wood, swappable in minutes.',
    description:
      'The Stonecrust\'s burner tray swaps between a gas attachment and a wood-fuel tray, letting you choose fast, consistent gas heat on a weeknight or wood-fired smoke and char for a weekend cook — without buying two separate ovens.',
    images: ['pizza-ovens.svg'],
  },
  {
    slug: 'napoli-cart-pizza-oven',
    name: 'Napoli Cart Pizza Oven',
    price: 899,
    category: 'pizza-ovens',
    badge: 'Premium',
    short: 'A full-size pizza oven mounted on a rolling cart with storage.',
    description:
      'The Napoli comes pre-mounted on a purpose-built rolling cart with a lower shelf for peels, flour, and dough boxes, sized for cooks who want a permanent pizza station rather than a tabletop unit moved in and out of storage.',
    images: ['pizza-ovens.svg'],
  },
  {
    slug: 'embercraft-mini-pizza-oven',
    name: 'Embercraft Mini Pizza Oven',
    price: 199,
    category: 'pizza-ovens',
    badge: 'Best Value',
    short: 'The smallest, most affordable pizza oven in the lineup.',
    description:
      'The Embercraft Mini is built for cooks who want to try high-heat pizza cooking without a large investment — a smaller stone floor and single gas burner still reach real pizza-oven temperatures, just with less capacity than the full-size models.',
    images: ['pizza-ovens.svg'],
  },
  {
    slug: 'hearthfire-xl-pizza-oven',
    name: 'Hearthfire XL Pizza Oven',
    price: 1199,
    category: 'pizza-ovens',
    badge: 'Premium',
    short: 'The largest-capacity pizza oven, fitting up to 16-inch pizzas.',
    description:
      'The Hearthfire XL\'s extra-wide stone floor fits pizzas up to 16 inches across, well beyond what a standard tabletop oven handles, aimed at cooks who regularly host or want to cook multiple pizza styles side by side.',
    images: ['pizza-ovens.svg'],
  },
  {
    slug: 'trattoria-built-in-pizza-oven',
    name: 'Trattoria Built-In Pizza Oven',
    price: 1499,
    category: 'pizza-ovens',
    badge: 'Premium',
    short: 'A built-in/countertop-style pizza oven for a permanent outdoor kitchen.',
    description:
      'Designed to drop into an outdoor kitchen countertop cutout, the Trattoria skips a standalone cart or stand entirely, insulated on all sides for safe built-in installation next to other appliances.',
    images: ['pizza-ovens.svg'],
  },
  {
    slug: 'via-roma-propane-pizza-oven',
    name: 'Via Roma Propane Pizza Oven',
    price: 459,
    category: 'pizza-ovens',
    badge: 'none',
    short: 'A propane-only pizza oven with no wood pellets or chips required.',
    description:
      'The Via Roma runs entirely on a standard propane tank, skipping wood pellets or chips altogether for cooks who want pizza-oven heat with the simplicity of a gas grill — connect the tank, light the burner, and preheat.',
    images: ['pizza-ovens.svg'],
  },
  {
    slug: 'borgo-2-burner-pizza-oven',
    name: 'Borgo 2-Burner Pizza Oven',
    price: 379,
    category: 'pizza-ovens',
    badge: 'New',
    short: 'A dual-zone pizza oven with separate top and bottom flame control.',
    description:
      'The Borgo splits its burner into top and bottom zones with independent controls, letting you crisp the crust from below and finish the cheese from above rather than relying on a single fixed flame — useful for dialing in exactly the bake you want.',
    images: ['pizza-ovens.svg'],
  },

  // ---------------------------------------------------------------- grill-accessories
  {
    slug: 'all-weather-grill-cover',
    name: 'All-Weather Grill Cover',
    price: 39,
    category: 'grill-accessories',
    badge: 'none',
    short: 'A heavy-duty waterproof cover sized to fit most 3-4 burner gas grills.',
    description:
      'This heavy-duty polyester cover is treated to resist rain, UV fading, and wind so your grill stays protected through every season. An elastic hem and adjustable straps keep it locked down in gusty weather, and breathable fabric prevents the trapped moisture that causes rust.',
    images: ['grill-accessories.svg'],
  },
  {
    slug: 'dual-probe-digital-thermometer',
    name: 'Dual-Probe Digital Meat Thermometer',
    price: 59,
    category: 'grill-accessories',
    badge: 'Popular',
    short: 'A wireless dual-probe thermometer for monitoring meat and ambient grill temperature.',
    description:
      'This dual-probe thermometer tracks both internal meat temperature and ambient grill or smoker temperature at the same time, so you always know where a long cook stands without opening the lid. Customizable alerts for common meats take the guesswork out of doneness.',
    images: ['grill-accessories.svg'],
  },
  {
    slug: 'heavy-duty-grill-tool-set',
    name: 'Heavy-Duty Grill Tool Set',
    price: 49,
    category: 'grill-accessories',
    badge: 'none',
    short: 'A 5-piece stainless steel grilling tool set with carrying case.',
    description:
      'This 5-piece set covers the essentials — spatula, tongs, fork, basting brush, and cleaning brush — all built from heavy-gauge stainless steel. Extra-long handles keep hands clear of open flame, and the included case keeps the set organized.',
    images: ['grill-accessories.svg'],
  },
  {
    slug: 'cast-iron-replacement-grate',
    name: 'Cast Iron Replacement Cooking Grate',
    price: 45,
    category: 'grill-accessories',
    badge: 'none',
    short: 'A universal-fit porcelain-coated cast iron replacement grate.',
    description:
      'A worn or warped grate changes how a grill cooks — uneven heat, food sticking, weaker sear marks. This porcelain-coated cast iron replacement grate restores consistent heat retention, and the coating resists rust better than bare cast iron.',
    images: ['grill-accessories.svg'],
  },
  {
    slug: 'grill-basket-vegetable-tray',
    name: 'Perforated Grill Basket',
    price: 19,
    category: 'grill-accessories',
    badge: 'none',
    short: 'A perforated stainless grill basket for vegetables, shrimp, and small cuts.',
    description:
      'Small or loose ingredients that would normally fall through a standard grate — chopped vegetables, shrimp, sliced mushrooms — stay contained in this perforated basket while still picking up real char and grill flavor from direct heat below.',
    images: ['grill-accessories.svg'],
  },
  {
    slug: 'rotisserie-kit-universal',
    name: 'Universal Rotisserie Kit',
    price: 79,
    category: 'grill-accessories',
    badge: 'none',
    short: 'A universal rotisserie attachment kit for slow-turning whole birds and roasts.',
    description:
      'This rotisserie kit includes a motorized spit rod, counterweight, and mounting brackets sized to fit most kettle and gas grills, letting you slow-turn a whole chicken or roast over indirect heat for self-basting, even cooking.',
    images: ['grill-accessories.svg'],
  },
  {
    slug: 'grill-light-clip-on',
    name: 'Clip-On LED Grill Light',
    price: 24,
    category: 'grill-accessories',
    badge: 'none',
    short: 'A clip-on LED light for grilling after dark.',
    description:
      'This weatherproof LED light clips directly onto a grill handle or lid, throwing enough even light across the cooking surface to check doneness and flip food confidently once the sun goes down.',
    images: ['grill-accessories.svg'],
  },
  {
    slug: 'pizza-stone-for-grill',
    name: 'Ceramic Pizza Stone for Grills',
    price: 34,
    category: 'grill-accessories',
    badge: 'none',
    short: 'A ceramic pizza stone sized to fit kettle and kamado grills.',
    description:
      'This ceramic stone turns a standard kettle or kamado grill into a passable pizza oven, absorbing and radiating even heat for a crisper crust than cooking directly on a metal grate.',
    images: ['grill-accessories.svg'],
  },
  {
    slug: 'grill-brush-bristle-free',
    name: 'Bristle-Free Grill Cleaning Brush',
    price: 16,
    category: 'grill-accessories',
    badge: 'New',
    short: 'A safe bristle-free brush for cleaning cast iron and porcelain grates.',
    description:
      'Loose wire bristles are a known safety hazard when they break off into food — this brush uses a coiled stainless design instead, scraping grates clean without shedding bristles.',
    images: ['grill-accessories.svg'],
  },
  {
    slug: 'insulated-grill-gloves-pair',
    name: 'Insulated Grilling Gloves (Pair)',
    price: 22,
    category: 'grill-accessories',
    badge: 'none',
    short: 'Heat-resistant gloves for handling hot grates, grills, and cookware.',
    description:
      'These insulated gloves handle direct contact with hot grates, cast iron, and grill hardware well beyond what an oven mitt is rated for, with a textured grip for handling slippery tools and food safely.',
    images: ['grill-accessories.svg'],
  },
]

export const POSTS = [
  {
    slug: 'charcoal-vs-gas-grill-which-is-right-for-you',
    title: 'Charcoal vs. Gas Grill: Which Is Right for You?',
    excerpt:
      'Smoke flavor and control versus speed and convenience — how to decide between a charcoal grill and a gas grill for your backyard.',
    category: 'charcoal-grills',
    date: '2026-06-02',
  },
  {
    slug: 'how-to-set-up-a-pellet-grill-for-first-time-users',
    title: 'How to Set Up a Pellet Grill: A First-Timer’s Guide',
    excerpt:
      'Everything to check before your first cook, from priming the auger to setting your first temperature.',
    category: 'pellet-grills',
    date: '2026-06-16',
  },
  {
    slug: 'best-grills-for-small-patios-and-balconies',
    title: 'Best Grills for Small Patios and Balconies',
    excerpt:
      'When charcoal and gas aren’t allowed, here’s how to still get real grill-grate results in a small outdoor space.',
    category: 'electric-grills',
    date: '2026-07-01',
  },
]

export const FAQS = [
  {
    q: 'What is Barbecue Grill Co.?',
    a: 'Barbecue Grill Co. is a USA-based grill retailer founded in 2015, selling charcoal, gas, electric, and pellet grills, BBQ smokers, kamado grills, pizza ovens, and grilling accessories. We ship nationwide across the United States.',
  },
  {
    q: 'What is your minimum order amount?',
    a: 'The minimum order amount is $500. Orders below this amount cannot be processed through checkout.',
  },
  {
    q: 'Do you offer free shipping?',
    a: 'Yes. Orders over $1,000 ship free. Orders under that threshold are charged a flat $15 shipping fee.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We currently accept cryptocurrency payments only (BTC, USDT). Paying with crypto also gets you an automatic 10% discount on your order.',
  },
  {
    q: 'Where do you ship?',
    a: 'We ship nationwide across the United States.',
  },
  {
    q: 'How do I place an order?',
    a: 'Orders are placed through our order form. Submit the form with your product selections and we’ll follow up by email to confirm payment and shipping details.',
  },
]
