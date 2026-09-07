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
    'Barbecue Grill Co. is a USA-based grill retailer established in 2015, carrying genuine Weber, Kamado Joe, and Napoleon grills — charcoal, gas, electric, pellet, kamado, and smoker models — for real outdoor cooking. Barbecue Grill Co. ships nationwide and specializes in trusted name-brand grills and grilling accessories for home cooks who take their backyard seriously.',
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
    slug: 'grill-accessories',
    name: 'Grill Tools & Accessories',
    description:
      'Covers, tools, thermometers, grates, and replacement parts to keep any grill running at its best.',
  },
]

export const PRODUCTS = [
  // ---------------------------------------------------------------- charcoal-grills (Weber, Napoleon)
  {
    slug: 'weber-original-kettle-premium-22-black',
    name: 'Weber Original Kettle Premium 22" Charcoal Grill — Black',
    price: 219,
    category: 'charcoal-grills',
    badge: 'Popular',
    short: 'The classic 22-inch Weber kettle grill with a porcelain-enameled bowl and lid.',
    description:
      'The Original Kettle is the grill that defined the category — a 22-inch porcelain-enameled steel bowl and lid with a one-touch cleaning system that sweeps ash into a removable catcher below. Top and bottom dampers give direct control over airflow and heat, and the tuck-away lid holder keeps the lid out of the way while you work the grate.',
    images: ['weber-original-kettle-premium-22-black.jpg'],
  },
  {
    slug: 'weber-original-kettle-premium-26-black',
    name: 'Weber Original Kettle Premium 26" Charcoal Grill — Black',
    price: 269,
    category: 'charcoal-grills',
    badge: 'none',
    short: 'The larger 26-inch version of the Original Kettle, sized for bigger cookouts.',
    description:
      'The 26-inch Original Kettle steps up the classic Weber kettle shape to a much larger cooking area, enough for two whole chickens or a full spread of burgers and skewers at once. The same porcelain-enameled bowl, one-touch ash cleanup system, and simple top/bottom damper controls carry over from the smaller model.',
    images: ['weber-original-kettle-premium-26-black.jpg'],
  },
  {
    slug: 'weber-master-touch-premium-e-5730-22-black',
    name: 'Weber Master-Touch Premium E-5730 22" Charcoal Grill — Black',
    price: 279,
    category: 'charcoal-grills',
    badge: 'Premium',
    short: 'A premium 22-inch kettle with a hinged grate and built-in lid thermometer.',
    description:
      'The Master-Touch builds on the Original Kettle with a hinged cooking grate that lifts to add charcoal mid-cook without disturbing the food, plus a built-in lid thermometer for tracking indirect-cooking temperatures without opening the lid. The one-touch aluminum ash catcher and porcelain-enameled bowl carry over the durability of the standard kettle line.',
    images: ['weber-master-touch-premium-e-5730-22-black.jpg'],
  },
  {
    slug: 'weber-performer-deluxe-22-charcoal-grill',
    name: 'Weber Performer Deluxe 22" Charcoal Grill',
    price: 549,
    category: 'charcoal-grills',
    badge: 'Premium',
    short: 'A cart-mounted charcoal kettle with a gas ignition system for charcoal.',
    description:
      'The Performer Deluxe mounts a 22-inch charcoal kettle on a full cart with a propane-fueled Gas-Touch ignition system that lights charcoal without lighter fluid or a chimney starter. A fold-out work table, integrated storage bin for a bag of charcoal, and a built-in thermometer round out the setup.',
    images: ['weber-performer-deluxe-22-charcoal-grill.jpg'],
  },
  {
    slug: 'weber-jumbo-joe-18-charcoal-grill',
    name: 'Weber Jumbo Joe 18" Portable Charcoal Grill',
    price: 99,
    category: 'charcoal-grills',
    badge: 'Best Value',
    short: 'A compact 18-inch portable kettle grill for smaller patios and travel.',
    description:
      'The Jumbo Joe shrinks the kettle format down to an 18-inch portable size without losing the one-touch damper controls of the full-size kettles. Folding handles and a lid latch make it easy to carry and transport, while still offering a real charcoal grilling experience rather than a stripped-down tabletop unit.',
    images: ['weber-jumbo-joe-18-charcoal-grill.jpg'],
  },
  {
    slug: 'weber-smokey-joe-14-charcoal-grill',
    name: 'Weber Smokey Joe 14" Portable Charcoal Grill',
    price: 49,
    category: 'charcoal-grills',
    badge: 'none',
    short: 'A 14-inch mini kettle grill built for camping, tailgating, and balconies.',
    description:
      'The smallest grill in the kettle lineup, the Smokey Joe packs a 14-inch cooking grate, a lid, and dampers into a grill light enough to carry one-handed. A good fit for a couple of burgers at a campsite or a tailgate where a full-size kettle isn\'t practical.',
    images: ['weber-smokey-joe-14-charcoal-grill.jpg'],
  },
  {
    slug: 'napoleon-pro-charcoal-kettle-grill-22',
    name: 'Napoleon PRO Charcoal Kettle Grill 22"',
    price: 249,
    category: 'charcoal-grills',
    badge: 'none',
    short: 'A 22-inch charcoal kettle grill with a heavy-gauge stainless bowl.',
    description:
      'Napoleon\'s take on the charcoal kettle uses a heavier-gauge stainless bowl than most kettles in this size class, holding heat more evenly across long cooks. Adjustable top and bottom vents and a removable ash pan keep operation straightforward for cooks moving up from a basic kettle.',
    images: ['napoleon-pro-charcoal-kettle-grill-22.jpg'],
  },
  {
    slug: 'napoleon-charcoal-professional-cart-grill',
    name: 'Napoleon Charcoal Professional Cart Grill',
    price: 599,
    category: 'charcoal-grills',
    badge: 'Premium',
    short: 'A cart-mounted charcoal grill with a height-adjustable charcoal tray.',
    description:
      'The Charcoal Professional mounts a large charcoal grate on a full cart, with a crank-adjustable charcoal tray that raises and lowers to control heat without shifting the coals themselves. Side shelves and a lower storage rack round out the cart-based setup.',
    images: ['napoleon-charcoal-professional-cart-grill.jpg'],
  },

  // ---------------------------------------------------------------- gas-grills (Weber, Napoleon)
  {
    slug: 'weber-spirit-ii-e-210-gas-grill',
    name: 'Weber Spirit II E-210 2-Burner Gas Grill',
    price: 549,
    category: 'gas-grills',
    badge: 'Popular',
    short: 'A compact 2-burner propane grill built for smaller patios.',
    description:
      'The Spirit II E-210 gives two independently controlled burners and porcelain-enameled cast iron cooking grates in a footprint sized for a smaller deck or patio. A fold-down side table and a built-in lid thermometer keep the essentials within reach without a large cart.',
    images: ['weber-spirit-ii-e-210-gas-grill.jpg'],
  },
  {
    slug: 'weber-spirit-ii-e-310-gas-grill',
    name: 'Weber Spirit II E-310 3-Burner Gas Grill',
    price: 649,
    category: 'gas-grills',
    badge: 'Popular',
    short: 'A 3-burner propane grill with GS4 grilling system for even heat.',
    description:
      'The E-310 adds a third burner and Weber\'s GS4 high-performance grilling system — angled flame tamers, a stainless steel burner tube, and a removable grease management system — for more consistent heat and easier cleanup than a standard 3-burner grill.',
    images: ['weber-spirit-ii-e-310-gas-grill.jpg'],
  },
  {
    slug: 'weber-genesis-e-325s-gas-grill',
    name: 'Weber Genesis E-325s 3-Burner Gas Grill',
    price: 949,
    category: 'gas-grills',
    badge: 'Premium',
    short: 'A premium 3-burner gas grill with a sear zone and side burner.',
    description:
      'The Genesis E-325s steps up to a dedicated high-heat sear zone alongside its three main burners, plus a side burner for sauces or sides. Heavy stainless steel construction and a larger total cooking area make it a serious step up from the entry Spirit line.',
    images: ['weber-genesis-e-325s-gas-grill.jpg'],
  },
  {
    slug: 'weber-summit-s-470-gas-grill',
    name: 'Weber Summit S-470 4-Burner Gas Grill',
    price: 1799,
    category: 'gas-grills',
    badge: 'Premium',
    short: 'A flagship 4-burner grill with backlit control knobs and a rear rotisserie burner.',
    description:
      'The Summit S-470 is built as a top-tier outdoor kitchen centerpiece — four main burners, a dedicated rear rotisserie burner, backlit control knobs for grilling after dark, and a full stainless steel cart with enclosed storage. Built for cooks who entertain regularly and want every feature available.',
    images: ['weber-summit-s-470-gas-grill.jpg'],
  },
  {
    slug: 'weber-summit-s-670-gas-grill',
    name: 'Weber Summit S-670 6-Burner Gas Grill',
    price: 2199,
    category: 'gas-grills',
    badge: 'Premium',
    short: 'The largest Summit gas grill, with 6 burners and a smoker burner.',
    description:
      'The S-670 tops the Summit lineup with six main burners plus a dedicated smoker burner for adding wood-chip smoke flavor to a gas cook. The largest cooking area in the Weber gas lineup, built for hosting large groups regularly.',
    images: ['weber-summit-s-670-gas-grill.jpg'],
  },
  {
    slug: 'weber-q-2200-portable-gas-grill',
    name: 'Weber Q 2200 Portable Gas Grill',
    price: 349,
    category: 'gas-grills',
    badge: 'Best Value',
    short: 'A portable single-burner gas grill that runs off a small propane cylinder.',
    description:
      'The Q 2200 is a self-contained portable gas grill with fold-down side tables and a cast-iron cooking grate, running off a small screw-on propane cylinder rather than a full-size tank. A practical choice for balconies, small patios, or taking along in a car.',
    images: ['weber-q-2200-portable-gas-grill.jpg'],
  },
  {
    slug: 'napoleon-rogue-425-gas-grill',
    name: 'Napoleon Rogue 425 Gas Grill',
    price: 599,
    category: 'gas-grills',
    badge: 'none',
    short: 'A 4-burner gas grill with a side burner and Jetfire ignition.',
    description:
      'The Rogue 425 pairs four stainless steel burners with a side burner and Napoleon\'s Jetfire ignition system for reliable cold-weather starts. Wave-shaped cooking grids and a full stainless lid round out a solidly built mid-range gas grill.',
    images: ['napoleon-rogue-425-gas-grill.jpg'],
  },
  {
    slug: 'napoleon-rogue-525-gas-grill',
    name: 'Napoleon Rogue 525 Gas Grill',
    price: 749,
    category: 'gas-grills',
    badge: 'none',
    short: 'A larger 5-burner version of the Rogue, with a rear infrared rotisserie burner.',
    description:
      'The Rogue 525 adds a fifth main burner and a dedicated rear infrared rotisserie burner to the Rogue platform, giving enough zones to sear, grill, and slow-turn a roast all in the same session.',
    images: ['napoleon-rogue-525-gas-grill.jpg'],
  },
  {
    slug: 'napoleon-prestige-500-gas-grill',
    name: 'Napoleon Prestige 500 Gas Grill',
    price: 1099,
    category: 'gas-grills',
    badge: 'Premium',
    short: 'A premium 4-burner grill with dual side burners and integrated lighting.',
    description:
      'The Prestige 500 is built around four main burners plus dual side burners and a rear infrared rotisserie burner, with integrated grill-surface lighting for cooking after sunset. A full stainless steel build is aimed at cooks who want a premium centerpiece grill.',
    images: ['napoleon-prestige-500-gas-grill.jpg'],
  },
  {
    slug: 'napoleon-prestige-pro-665-gas-grill',
    name: 'Napoleon Prestige PRO 665 Gas Grill',
    price: 1899,
    category: 'gas-grills',
    badge: 'Premium',
    short: 'The flagship Napoleon gas grill with 6 burners and dual infrared side burners.',
    description:
      'The Prestige PRO 665 is Napoleon\'s flagship gas grill — six main burners, dual side burners with infrared elements, and a rear rotisserie burner, all built into a full stainless steel cart. Sized and specced for cooks who host large groups often.',
    images: ['napoleon-prestige-pro-665-gas-grill.jpg'],
  },

  // ---------------------------------------------------------------- electric-grills (Weber)
  {
    slug: 'weber-pulse-1000-electric-grill',
    name: 'Weber Pulse 1000 Electric Grill',
    price: 449,
    category: 'electric-grills',
    badge: 'New',
    short: 'A compact electric grill with porcelain-coated cooking grates.',
    description:
      'The Pulse 1000 brings Weber\'s grate design to an electric platform, using porcelain-coated cooking grates over a sealed heating element to produce real sear marks without gas or charcoal. A compact stand-mounted design suits smaller patios and balconies where open flame isn\'t allowed.',
    images: ['weber-pulse-1000-electric-grill.jpg'],
  },
  {
    slug: 'weber-pulse-2000-electric-grill',
    name: 'Weber Pulse 2000 Electric Grill with Cart',
    price: 799,
    category: 'electric-grills',
    badge: 'Premium',
    short: 'A full-size electric grill on a cart, with app-connected temperature control.',
    description:
      'The Pulse 2000 scales the electric grate design up to a full-size cooking surface on a rolling cart, with app-connected temperature control and a built-in meat probe. Built for cooks who want electric convenience without stepping down in cooking capacity.',
    images: ['weber-pulse-2000-electric-grill.jpg'],
  },

  // ---------------------------------------------------------------- pellet-grills (Weber, Napoleon)
  {
    slug: 'weber-smokefire-ex4-pellet-grill',
    name: 'Weber SmokeFire EX4 Pellet Grill',
    price: 999,
    category: 'pellet-grills',
    badge: 'Popular',
    short: 'A wood-pellet grill with a wide temperature range for smoking or high-heat searing.',
    description:
      'The SmokeFire EX4 uses an auger-fed hopper and digital controller to hold temperatures from a low smoke up to a high-heat sear, with app-based monitoring so you can track a cook remotely. A porcelain-coated cooking grate and flavorizer bars help manage grease and flare-ups.',
    images: ['weber-smokefire-ex4-pellet-grill.png'],
  },
  {
    slug: 'weber-smokefire-ex6-pellet-grill',
    name: 'Weber SmokeFire EX6 Pellet Grill',
    price: 1199,
    category: 'pellet-grills',
    badge: 'Premium',
    short: 'The larger-capacity SmokeFire, sized for bigger cooks.',
    description:
      'The EX6 steps up the SmokeFire platform to a larger cooking area and hopper capacity, sized for cooks who regularly smoke multiple racks of ribs or a full packer brisket at once, while keeping the same app-connected digital temperature control.',
    images: ['weber-smokefire-ex6-pellet-grill.jpg'],
  },
  {
    slug: 'traeger-pro-575-pellet-grill',
    name: 'Traeger Pro 575 Pellet Grill',
    price: 999,
    category: 'pellet-grills',
    badge: 'Popular',
    short: 'A digitally controlled wood-pellet grill with WiFi connectivity and a spacious cooking area.',
    description:
      'The Pro 575 uses an auger-fed hopper and digital controller with WiFi connectivity, letting you monitor and adjust the cook from a phone app instead of standing at the grill. A generous cooking area and hopper capacity make it a practical everyday pellet grill for smoking, roasting, or grilling.',
    images: ['traeger-pro-575-pellet-grill.jpg'],
  },

  // ---------------------------------------------------------------- bbq-smokers (Weber)
  {
    slug: 'weber-smokey-mountain-cooker-14',
    name: 'Weber Smokey Mountain Cooker 14"',
    price: 349,
    category: 'bbq-smokers',
    badge: 'none',
    short: 'A compact 14-inch vertical water smoker for smaller cooks.',
    description:
      'The smallest Smokey Mountain Cooker brings the vertical water-smoker format to a compact size — a water pan moderates temperature swings, and a single cooking grate handles a couple of racks of ribs or a small pork shoulder at a time.',
    images: ['weber-smokey-mountain-cooker-14.jpg'],
  },
  {
    slug: 'weber-smokey-mountain-cooker-18',
    name: 'Weber Smokey Mountain Cooker 18"',
    price: 449,
    category: 'bbq-smokers',
    badge: 'Popular',
    short: 'The most popular size in the Smokey Mountain lineup, with two cooking grates.',
    description:
      'The 18-inch Smokey Mountain Cooker is the best-known size in the lineup, with two stacked cooking grates and a water pan for steady, moist heat through long smokes. A built-in lid thermometer and adjustable bottom vents give straightforward temperature control.',
    images: ['weber-smokey-mountain-cooker-18.jpg'],
  },
  {
    slug: 'weber-smokey-mountain-cooker-22',
    name: 'Weber Smokey Mountain Cooker 22"',
    price: 549,
    category: 'bbq-smokers',
    badge: 'Premium',
    short: 'The largest Smokey Mountain Cooker, for bigger cuts and higher volume.',
    description:
      'The 22-inch Smokey Mountain Cooker scales the vertical water-smoker format up for cooks who regularly smoke full packer briskets or multiple pork shoulders at once, while keeping the same water-pan moisture control as the smaller sizes.',
    images: ['weber-smokey-mountain-cooker-22.jpg'],
  },

  // ---------------------------------------------------------------- kamado-grills (Kamado Joe, Weber)
  {
    slug: 'kamado-joe-joe-jr-13-kamado-grill',
    name: 'Kamado Joe Joe Jr. 13" Kamado Grill',
    price: 499,
    category: 'kamado-grills',
    badge: 'Best Value',
    short: 'A compact 13-inch ceramic kamado grill for patios and portability.',
    description:
      'The Joe Jr. brings Kamado Joe\'s thick ceramic shell and precision top/bottom vents to a compact 13-inch size, portable enough to bring along or use on a small patio while still holding heat far better than a thin metal grill of the same size.',
    images: ['kamado-joe-joe-jr-13-kamado-grill.jpg'],
  },
  {
    slug: 'kamado-joe-classic-ii-18-kamado-grill',
    name: 'Kamado Joe Classic II 18" Kamado Grill',
    price: 1399,
    category: 'kamado-grills',
    badge: 'Popular',
    short: 'The best-known Kamado Joe size, with a divide-and-conquer cooking system.',
    description:
      'The Classic II is Kamado Joe\'s signature size, built around a divide-and-conquer rack system that lets you set up two different cooking zones and heights at once — searing on one level while holding food warm on another, all within one ceramic chamber.',
    images: ['kamado-joe-classic-ii-18-kamado-grill.jpg'],
  },
  {
    slug: 'kamado-joe-classic-iii-18-kamado-grill',
    name: 'Kamado Joe Classic III 18" Kamado Grill',
    price: 1599,
    category: 'kamado-grills',
    badge: 'Premium',
    short: 'The updated Classic III, with a redesigned hinge and ash removal system.',
    description:
      'The Classic III refines the Classic platform with an updated air-lift hinge that makes the heavy ceramic lid easier to open one-handed, plus a slide-out ash drawer for cleanup without removing the grate. The same divide-and-conquer cooking system carries over.',
    images: ['kamado-joe-classic-iii-18-kamado-grill.jpg'],
  },
  {
    slug: 'kamado-joe-big-joe-ii-24-kamado-grill',
    name: 'Kamado Joe Big Joe II 24" Kamado Grill',
    price: 1999,
    category: 'kamado-grills',
    badge: 'Premium',
    short: 'A large 24-inch kamado for high-volume cooking.',
    description:
      'The Big Joe II scales the kamado format up to a 24-inch cooking surface, enough for multiple whole chickens or several racks of ribs across its multi-level divide-and-conquer system, for cooks who regularly host larger groups.',
    images: ['kamado-joe-big-joe-ii-24-kamado-grill.jpg'],
  },
  {
    slug: 'kamado-joe-big-joe-iii-24-kamado-grill',
    name: 'Kamado Joe Big Joe III 24" Kamado Grill',
    price: 2199,
    category: 'kamado-grills',
    badge: 'Premium',
    short: 'The largest, most updated kamado in the Kamado Joe lineup.',
    description:
      'The Big Joe III combines the 24-inch large-format cooking area with the updated air-lift hinge and ash drawer from the Classic III, making it the most refined and highest-capacity model in the Kamado Joe range.',
    images: ['kamado-joe-big-joe-iii-24-kamado-grill.jpg'],
  },
  {
    slug: 'weber-summit-kamado-s6-charcoal-grill',
    name: 'Weber Summit Kamado S6 Charcoal Grill',
    price: 1699,
    category: 'kamado-grills',
    badge: 'Premium',
    short: 'A ceramic-lined kamado grill from Weber with a stainless steel cart.',
    description:
      'The Summit Kamado S6 pairs a ceramic-lined steel shell with a full stainless steel cart and integrated side burner, blending kamado-style heat retention with the cart-and-storage layout more typical of a standard gas grill setup.',
    images: ['weber-summit-kamado-s6-charcoal-grill.jpg'],
  },

  // ---------------------------------------------------------------- grill-accessories (Weber, Kamado Joe, Napoleon)
  {
    slug: 'weber-igrill-3-bluetooth-thermometer',
    name: 'Weber iGrill 3 Bluetooth Thermometer',
    price: 99,
    category: 'grill-accessories',
    badge: 'Popular',
    short: 'A 4-probe Bluetooth meat thermometer with smartphone app monitoring.',
    description:
      'The iGrill 3 connects up to four temperature probes at once and streams readings to a smartphone app, so you can track multiple cuts through a long smoke from anywhere within Bluetooth range instead of walking back to the grill.',
    images: ['weber-igrill-3-bluetooth-thermometer.jpg'],
  },
  {
    slug: 'weber-original-kettle-premium-grill-cover',
    name: 'Weber Original Kettle Premium Grill Cover',
    price: 45,
    category: 'grill-accessories',
    badge: 'none',
    short: 'A fitted weatherproof cover sized for the Original Kettle Premium.',
    description:
      'This fitted cover is cut specifically to the Original Kettle Premium\'s shape rather than a generic universal size, giving a closer fit that resists wind better and keeps rain from pooling on top.',
    images: ['weber-original-kettle-premium-grill-cover.jpg'],
  },
  {
    slug: 'weber-gourmet-bbq-system-griddle-insert',
    name: 'Weber Gourmet BBQ System Griddle Insert',
    price: 59,
    category: 'grill-accessories',
    badge: 'none',
    short: 'A griddle insert that drops into the center of a Weber cooking grate.',
    description:
      'This insert swaps into the center ring of a compatible Weber cooking grate, turning one section of the grill into a flat griddle surface for pancakes, smash burgers, or stir-fried vegetables without needing a separate appliance.',
    images: ['weber-gourmet-bbq-system-griddle-insert.jpg'],
  },
  {
    slug: 'weber-rapidfire-chimney-starter',
    name: 'Weber Rapidfire Chimney Starter',
    price: 25,
    category: 'grill-accessories',
    badge: 'none',
    short: 'A steel chimney starter for lighting charcoal without lighter fluid.',
    description:
      'The Rapidfire chimney starter lights a full load of charcoal evenly using a few sheets of newspaper underneath, skipping lighter fluid and the chemical aftertaste it can leave on food. A heat-resistant handle keeps hands clear once the coals are lit.',
    images: ['weber-rapidfire-chimney-starter.jpg'],
  },
  {
    slug: 'kamado-joe-half-moon-cast-iron-griddle',
    name: 'Kamado Joe Half Moon Cast Iron Griddle Insert',
    price: 79,
    category: 'grill-accessories',
    badge: 'none',
    short: 'A half-moon cast iron griddle sized for the divide-and-conquer rack system.',
    description:
      'This cast iron griddle fills one half of the divide-and-conquer rack, letting you run a flat griddle zone alongside an open-grate zone in the same kamado at the same time — searing on one side, griddling eggs or vegetables on the other.',
    images: ['kamado-joe-half-moon-cast-iron-griddle.jpg'],
  },
  {
    slug: 'kamado-joe-grill-gripper-tool',
    name: 'Kamado Joe Grill Gripper Tool',
    price: 19,
    category: 'grill-accessories',
    badge: 'none',
    short: 'A tool for safely lifting and repositioning a hot cooking grate.',
    description:
      'The Grill Gripper locks onto the edge of a hot cooking grate, letting you lift and reposition it — to add charcoal or check coals below — without needing tongs, gloves, or risking a burn from the grate itself.',
    images: ['kamado-joe-grill-gripper-tool.jpg'],
  },
  {
    slug: 'kamado-joe-kontrol-tower-vent',
    name: 'Kamado Joe Kontrol Tower Top Vent',
    price: 39,
    category: 'grill-accessories',
    badge: 'none',
    short: 'A precision top vent replacement for fine-tuning kamado airflow.',
    description:
      'This replacement top vent uses a sliding daisy-wheel design for finer airflow adjustment than a basic damper, useful for cooks who want tighter temperature control during long, low-and-slow kamado cooks.',
    images: ['kamado-joe-kontrol-tower-vent.jpg'],
  },
  {
    slug: 'napoleon-pro-grill-tool-set',
    name: 'Napoleon PRO Grill Tool Set',
    price: 49,
    category: 'grill-accessories',
    badge: 'none',
    short: 'A stainless steel grilling tool set with spatula, tongs, and fork.',
    description:
      'This set covers the essentials — a wide spatula, locking tongs, and a carving fork — built from heavy-gauge stainless steel with extended handles to keep hands clear of direct heat during high-temperature searing.',
    images: ['napoleon-pro-grill-tool-set.jpg'],
  },
  {
    slug: 'napoleon-cast-iron-reversible-griddle',
    name: 'Napoleon Cast Iron Reversible Griddle',
    price: 65,
    category: 'grill-accessories',
    badge: 'none',
    short: 'A reversible cast iron griddle with a flat side and a ridged sear side.',
    description:
      'This cast iron griddle drops onto a compatible cooking grate and can be flipped between a flat side for pancakes or eggs and a ridged side for grill-mark searing, covering two cooking styles with one accessory.',
    images: ['napoleon-cast-iron-reversible-griddle.jpg'],
  },
  {
    slug: 'napoleon-rogue-series-grill-cover',
    name: 'Napoleon Rogue Series Grill Cover',
    price: 55,
    category: 'grill-accessories',
    badge: 'none',
    short: 'A fitted weatherproof cover sized for the Rogue series gas grills.',
    description:
      'Cut to match the Rogue series cart dimensions rather than a generic universal size, this cover resists wind, rain, and UV fading through repeated outdoor seasons, with adjustable straps to keep it secured in gusty weather.',
    images: ['napoleon-rogue-series-grill-cover.jpg'],
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
    a: 'Barbecue Grill Co. is a USA-based grill retailer founded in 2015, carrying genuine Weber, Kamado Joe, and Napoleon grills — charcoal, gas, electric, pellet, kamado, and smoker models — plus grilling accessories. We ship nationwide across the United States.',
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
