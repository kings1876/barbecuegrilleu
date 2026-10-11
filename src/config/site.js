// ============================================================================
// SINGLE SOURCE OF TRUTH — src/config/site.js
// Every page, route, meta tag, JSON-LD block, sitemap entry, and nav link is
// generated from this file. Never hand-write a page for a new product/category/post.
// ============================================================================

export const SITE = {
  domain: 'www.barbecuegrilleu.com', // canonical host; barbecuegrilleu.com redirects here
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
    specs: [
      ['Fuel', 'Charcoal'],
      ['Cooking area', '363 sq in'],
      ['Cooking grate', '22.5 in diameter, hinged'],
      ['Cleanup', 'One-Touch ash cleaning system'],
    ],
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
    specs: [
      ['Fuel', 'Charcoal'],
      ['Cooking area', '508 sq in'],
      ['Cooking grate', 'Hinged'],
      ['Features', 'One-Touch cleaning system, lid thermometer'],
    ],
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
    specs: [
      ['Fuel', 'Charcoal'],
      ['Cooking area', '363 sq in'],
      ['Cooking grate', 'Hinged, plated steel'],
      ['Features', 'Lid thermometer, One-Touch ash cleaning system'],
    ],
  },
  {
    slug: 'weber-performer-deluxe-22-charcoal-grill',
    name: 'Weber Performer Deluxe 22" Charcoal Grill',
    price: 549,
    category: 'charcoal-grills',
    badge: 'Premium',
    short: 'A cart-mounted charcoal kettle with a gas ignition system for charcoal.',
    description:
      'The Performer Deluxe mounts a 22-inch charcoal kettle on a full cart with a Touch-N-Go gas ignition system that lights charcoal without lighter fluid or a chimney starter. A fold-out work table, a charcoal storage bin and a built-in lid thermometer round out the setup.',
    images: ['weber-performer-deluxe-22-charcoal-grill.jpg'],
    specs: [
      ['Fuel', 'Charcoal (propane-assisted ignition)'],
      ['Cooking area', '363 sq in'],
      ['Kettle diameter', '22 in'],
      ['Footprint', 'About 48 in wide × 30 in deep'],
      ['Features', 'Work table, charcoal storage bin, lid thermometer, hinged grate'],
    ],
  },
  {
    slug: 'weber-jumbo-joe-18-charcoal-grill',
    name: 'Weber Jumbo Joe 18" Portable Charcoal Grill',
    price: 99,
    category: 'charcoal-grills',
    badge: 'Best Value',
    short: 'A compact 18-inch portable kettle grill for smaller patios and travel.',
    description:
      'The Jumbo Joe shrinks the kettle format down to an 18-inch portable size, with dampers in the lid and bowl for heat control. A Tuck-N-Carry lid lock doubles as a lid holder and carry handle, and the grill cooks for four to six people.',
    images: ['weber-jumbo-joe-18-charcoal-grill.jpg'],
    specs: [
      ['Fuel', 'Charcoal'],
      ['Cooking area', '240 sq in'],
      ['Diameter', '18 in'],
      ['Size, lid closed', '19.7 in H × 19.7 in W × 20.5 in D'],
      ['Serves', '4–6 people'],
    ],
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
    specs: [
      ['Fuel', 'Charcoal'],
      ['Cooking area', '147 sq in'],
      ['Size', '14.25 in W × 14.5 in D × 17 in H'],
      ['Weight', 'About 10 lb'],
      ['Construction', 'Porcelain-enameled bowl and lid, plated steel grate'],
    ],
  },
  {
    slug: 'napoleon-pro-charcoal-kettle-grill-22',
    name: 'Napoleon PRO Charcoal Kettle Grill 22"',
    price: 249,
    category: 'charcoal-grills',
    badge: 'none',
    short: 'A 22-inch charcoal kettle grill with a heavy-gauge stainless bowl.',
    description:
      'The Napoleon PRO 22 is a 22-inch charcoal kettle with a 21.5-inch main cooking grid that can be set at three heights, so you control how close food sits to the coals. Adjustable vents handle airflow for everything from a hot sear to a slower roast.',
    images: ['napoleon-pro-charcoal-kettle-grill-22.jpg'],
    specs: [
      ['Fuel', 'Charcoal'],
      ['Main cooking area', '21.5 in diameter'],
      ['Total cooking area', '360 sq in'],
      ['Size', '42 in H (63.25 in lid open) × 23 in W × 28.5 in D'],
      ['Grid heights', '3 elevations'],
      ['Warranty', '10-year limited'],
    ],
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
    specs: [
      ['Fuel', 'Charcoal'],
      ['Main cooking area', '33.5 in × 18 in'],
      ['Total cooking area', '850 sq in'],
      ['Size', '49.25 in H (59.25 in lid open) × 67.5 in W × 24.75 in D'],
      ['Construction', 'Stainless steel with porcelain-coated cast iron grids'],
    ],
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
    specs: [
      ['Fuel', 'Propane (LP model)'],
      ['Main burners', '2 stainless steel'],
      ['Heat output', '26,500 BTU/hr'],
      ['Primary cooking area', '360 sq in'],
      ['Warming rack', '90 sq in'],
      ['Total cooking area', '450 sq in'],
      ['Size, lid closed', '44.5 in H × 48 in W × 27 in D'],
      ['Grates', 'Porcelain-enameled cast iron'],
      ['Ignition', 'Electronic'],
    ],
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
    specs: [
      ['Fuel', 'Propane (LP model)'],
      ['Main burners', '3 stainless steel'],
      ['Heat output', '30,000 BTU/hr'],
      ['Primary cooking area', '424 sq in'],
      ['Warming rack', '105 sq in'],
      ['Total cooking area', '529 sq in'],
      ['Size, lid closed', '44.5 in H × 52 in W × 27 in D'],
      ['Height, lid open', '57 in'],
      ['Weight', '114 lb'],
    ],
  },
  {
    slug: 'weber-genesis-e-325s-gas-grill',
    name: 'Weber Genesis E-325s 3-Burner Gas Grill',
    price: 949,
    category: 'gas-grills',
    badge: 'Premium',
    short: 'A premium 3-burner gas grill with an extra-large sear zone and expandable top grate.',
    description:
      'The Genesis E-325s pairs three main burners with a dedicated high-heat sear zone, an expandable top cooking grate for a second cooking level, and a large prep and serve table. Heavy stainless steel construction and a larger total cooking area make it a serious step up from the entry Spirit line.',
    images: ['weber-genesis-e-325s-gas-grill.jpg'],
    specs: [
      ['Main burners', '3'],
      ['Heat output', '39,000 BTU/hr (main burners), 13,000 BTU/hr (sear zone)'],
      ['Primary cooking area', '513 sq in'],
      ['Expandable top grate', '274 sq in'],
      ['Total cooking area', '787 sq in'],
      ['Size, lid closed', '48.5 in H × 62 in W × 27 in D'],
      ['Weight', '188 lb'],
      ['Fuel', 'Propane or natural gas, depending on model'],
    ],
  },
  {
    slug: 'weber-summit-s-470-gas-grill',
    name: 'Weber Summit S-470 4-Burner Gas Grill',
    price: 1799,
    category: 'gas-grills',
    badge: 'Premium',
    short: 'A flagship 4-burner grill with a sear station, side burner and rear rotisserie burner.',
    description:
      'The Summit S-470 is built as a top-tier outdoor kitchen centerpiece: four main burners, a Sear Station, a flush-mounted side burner, a rear infrared rotisserie burner and a smoker burner, all on a stainless steel cart with enclosed storage. Built for cooks who entertain regularly and want every feature available.',
    images: ['weber-summit-s-470-gas-grill.jpg'],
    specs: [
      ['Fuel', 'Propane (cannot be converted)'],
      ['Main burners', '4'],
      ['Heat output', '48,800 BTU/hr (main burners)'],
      ['Sear Station', '10,600 BTU/hr'],
      ['Side burner', '12,000 BTU/hr'],
      ['Rear rotisserie burner', '10,600 BTU/hr'],
      ['Primary cooking area', '468 sq in'],
      ['Warming rack', '112 sq in'],
      ['Total cooking area', '580 sq in'],
      ['Size', '57.1 in H (lid open) × 66 in W × 30 in D'],
      ['Grates', 'Stainless steel rods'],
      ['Warranty', '10 years (Summit grills bought after Oct 1, 2017)'],
    ],
  },
  {
    slug: 'weber-summit-s-670-gas-grill',
    name: 'Weber Summit S-670 6-Burner Gas Grill',
    price: 2199,
    category: 'gas-grills',
    badge: 'Premium',
    short: 'The largest Summit gas grill, with 6 burners, a sear station and a smoker burner.',
    description:
      'The S-670 tops the Summit lineup with six main burners plus a Sear Station, a flush-mounted side burner, a rear infrared rotisserie burner and a dedicated smoker burner for adding wood-chip smoke flavor to a gas cook. It has the largest cooking area in the Weber gas lineup, built for hosting large groups regularly.',
    images: ['weber-summit-s-670-gas-grill.jpg'],
    specs: [
      ['Main burners', '6 stainless steel'],
      ['Heat output', '60,000 BTU/hr (main burners)'],
      ['Sear Station', '10,600 BTU/hr'],
      ['Side burner', '12,000 BTU/hr'],
      ['Rear rotisserie burner', '10,600 BTU/hr'],
      ['Primary cooking area', '624 sq in'],
      ['Warming rack', '145 sq in'],
      ['Total cooking area', '769 sq in'],
      ['Grates', 'Stainless steel rods'],
      ['Ignition', 'Snap-Jet individual burner ignition'],
    ],
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
    specs: [
      ['Fuel', 'Propane (cylinder sold separately)'],
      ['Burner', '1 stainless steel'],
      ['Heat output', '12,000 BTU/hr'],
      ['Cooking grate', 'About 21 in × 15 in (54 × 39 cm)'],
      ['Grates', 'Porcelain-enameled cast iron'],
      ['Weight', '19.7 kg (about 43.5 lb)'],
      ['Size, lid open, side tables out', 'About 26 in H × 51.4 in W × 25.1 in D'],
    ],
  },
  {
    slug: 'napoleon-rogue-425-gas-grill',
    name: 'Napoleon Rogue 425 Gas Grill',
    price: 599,
    category: 'gas-grills',
    badge: 'none',
    short: 'A 3-burner gas grill with JETFIRE battery-free ignition and porcelain-coated cast iron grids.',
    description:
      'The Rogue 425 pairs three stainless steel main burners with Napoleon\'s JETFIRE battery-free ignition for reliable starts. Porcelain-coated cast iron grids with stainless steel sear plates and a full stainless lid round out a solidly built mid-range gas grill.',
    images: ['napoleon-rogue-425-gas-grill.jpg'],
    specs: [
      ['Main burners', '3'],
      ['Heat output', '42,000 BTU/hr'],
      ['Main cooking area', '23.75 in × 18 in'],
      ['Total cooking area', '571 sq in'],
      ['Size', '47.5 in H × 51 in W (35 in with shelves down) × 25 in D'],
      ['Grids', 'Porcelain-coated cast iron with stainless steel sear plates'],
      ['Ignition', 'JETFIRE battery-free'],
    ],
  },
  {
    slug: 'napoleon-rogue-525-gas-grill',
    name: 'Napoleon Rogue 525 Gas Grill',
    price: 749,
    category: 'gas-grills',
    badge: 'none',
    short: 'A larger 4-burner Rogue with a wider main cooking area.',
    description:
      'The Rogue 525 steps up from the Rogue 425 with a fourth main burner and a wider 28.75 × 18 inch main cooking area, keeping the same JETFIRE battery-free ignition. It gives enough room to sear, grill and hold food warm in the same session.',
    images: ['napoleon-rogue-525-gas-grill.jpg'],
    specs: [
      ['Main burners', '4 stainless steel'],
      ['Heat output', '48,000 BTU/hr (base model)'],
      ['Main cooking area', '28.75 in × 18 in'],
      ['Ignition', 'JETFIRE battery-free'],
      ['Features', 'Locking casters, folding stainless steel side shelves, lid thermometer'],
    ],
  },
  {
    slug: 'napoleon-prestige-500-gas-grill',
    name: 'Napoleon Prestige 500 Gas Grill',
    price: 1099,
    category: 'gas-grills',
    badge: 'Premium',
    short: 'A premium 4-burner grill with infrared side and rear burners.',
    description:
      'The Prestige 500 is built around four main burners plus an infrared side burner and an infrared rear burner, on a stainless steel cart with enclosed storage. It is aimed at cooks who want a premium centerpiece grill with extra searing and rotisserie capability.',
    images: ['napoleon-prestige-500-gas-grill.jpg'],
    specs: [
      ['Main burners', '4'],
      ['Other burners', 'Infrared side burner and infrared rear burner (RSIB model)'],
      ['Heat output', 'Up to 80,000 BTU/hr (RSIB model)'],
      ['Main cooking area', '28 in × 17.75 in'],
      ['Total cooking area', 'About 900 sq in (RSIB model)'],
      ['Note', 'Prestige 500 is sold in several configurations; figures shown are for the infrared side and rear burner version'],
    ],
  },
  {
    slug: 'napoleon-prestige-pro-665-gas-grill',
    name: 'Napoleon Prestige PRO 665 Gas Grill',
    price: 1899,
    category: 'gas-grills',
    badge: 'Premium',
    short: 'The flagship Napoleon gas grill with 5 main burners plus infrared side and rear burners.',
    description:
      'The Prestige PRO 665 is Napoleon\'s flagship gas grill: five main burners plus infrared side and rear burners, all built into a full stainless steel cart. Sized and specced for cooks who host large groups often.',
    images: ['napoleon-prestige-pro-665-gas-grill.jpg'],
    specs: [
      ['Main burners', '5'],
      ['Other burners', 'Infrared side burner and infrared rear burner'],
      ['Main cooking area', '37 in × 18 in'],
      ['Size', 'About 53 in H (58 in lid open) × 76 in W × 26 in D'],
      ['Fuel', 'Propane or natural gas, depending on model'],
    ],
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
    specs: [
      ['Power', 'Electric'],
      ['Cooking area', 'About 16 in × 12 in (41 × 31 cm)'],
      ['Grates', 'Porcelain-enameled cast iron'],
      ['Body', 'Cast aluminum lid and body'],
      ['Size, lid closed', 'About 13 in H × 24 in W × 21 in D (33 × 61 × 54 cm)'],
      ['Size, lid open', 'About 27 in H × 24 in W × 26 in D (68 × 61 × 65 cm)'],
      ['Weight', 'About 13.9 kg (30.7 lb)'],
    ],
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
    specs: [
      ['Power', 'Electric, 120 V (1,560 W listed)'],
      ['Total cooking area', '278 sq in'],
      ['Grates', 'Porcelain-enameled cast iron'],
      ['Grill size, lid open', '30 in H × 28 in W × 23 in D'],
      ['Cart size, table up', '35 in H × 44 in W × 23 in D'],
      ['Cart size, table down', '35 in H × 36 in W × 23 in D'],
    ],
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
    specs: [
      ['Fuel', 'Wood pellets'],
      ['Cooking area', '672 sq in (two levels)'],
      ['Hopper capacity', '22 lb'],
      ['Temperature range', '200–600°F'],
      ['Connectivity', 'Wi-Fi enabled'],
      ['Body', 'Porcelain-enameled steel'],
      ['Warranty', '5 years'],
    ],
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
    specs: [
      ['Fuel', 'Wood pellets'],
      ['Cooking area', '1,008 sq in (two levels)'],
      ['Hopper capacity', '22 lb'],
      ['Temperature range', '200–600°F'],
      ['Connectivity', 'Wi-Fi enabled'],
    ],
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
    specs: [
      ['Fuel', 'Wood pellets'],
      ['Cooking area', '575 sq in'],
      ['Hopper capacity', '18 lb'],
      ['Maximum temperature', '500°F'],
      ['Controller', 'D2 digital controller with WiFIRE app control'],
      ['Meat probe', 'Included'],
      ['Weight', '124 lb'],
    ],
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
      'The smallest Smokey Mountain Cooker brings the vertical water-smoker format to a compact size: a water pan moderates temperature swings, and two plated steel cooking grates hold a couple of racks of ribs or a small pork shoulder at a time.',
    images: ['weber-smokey-mountain-cooker-14.jpg'],
    specs: [
      ['Fuel', 'Charcoal'],
      ['Cooking area', '286 sq in (two grates)'],
      ['Size', 'About 31.4 in H × 14.7 in W × 14.7 in D'],
      ['Features', 'Porcelain-enameled bowl, lid and water pan; lid thermometer'],
    ],
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
    specs: [
      ['Fuel', 'Charcoal'],
      ['Cooking area', '481 sq in (two grates)'],
      ['Size', 'About 41 in H × 19 in W × 21 in D'],
      ['Weight', 'About 47 lb'],
      ['Features', 'Porcelain-enameled bowl and lid, lid thermometer, water pan'],
    ],
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
    specs: [
      ['Fuel', 'Charcoal'],
      ['Cooking area', '726 sq in (two grates)'],
      ['Size', 'About 48.5 in H × 23 in W × 24 in D'],
      ['Features', 'Built-in lid thermometer, porcelain-enameled water pan, 4 rust-resistant aluminum dampers'],
    ],
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
    specs: [
      ['Fuel', 'Charcoal'],
      ['Cooking area', '148.5 sq in (13.5 in diameter)'],
      ['Temperature range', '225–750°F+'],
      ['Weight', 'About 68 lb'],
      ['Size without stand', '16 in W × 22 in H × 20.75 in D'],
      ['Grate', '304 stainless steel'],
      ['Shell', 'Ceramic'],
    ],
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
    specs: [
      ['Fuel', 'Charcoal'],
      ['Cooking area', 'About 250 sq in (18 in diameter)'],
      ['Temperature range', '225–750°F'],
      ['Cooking system', '2-tier Divide & Conquer flexible cooking system'],
      ['Shell', 'Ceramic'],
    ],
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
    specs: [
      ['Fuel', 'Charcoal'],
      ['Cooking area', 'About 250 sq in (18 in diameter), up to about 510 sq in with the 3-tier rack system'],
      ['Smoke chamber', 'SlōRoller hyperbolic smoke chamber insert'],
      ['Shell', 'Ceramic'],
    ],
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
    specs: [
      ['Fuel', 'Charcoal'],
      ['Cooking area', '452 sq in (24 in diameter)'],
      ['Temperature range', '225–750°F'],
      ['Grate', 'Commercial-grade 304 stainless steel'],
      ['Shell', 'Ceramic'],
    ],
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
    specs: [
      ['Fuel', 'Charcoal'],
      ['Cooking area', 'About 450 sq in (24 in diameter), up to about 864 sq in with the 3-tier rack system'],
      ['Temperature range', '225–750°F'],
      ['Shell', 'Ceramic'],
    ],
  },
  {
    slug: 'weber-summit-kamado-s6-charcoal-grill',
    name: 'Weber Summit Kamado S6 Charcoal Grill',
    price: 1699,
    category: 'kamado-grills',
    badge: 'Premium',
    short: 'A ceramic-lined kamado grill from Weber with a stainless steel cart.',
    description:
      'The Summit Kamado S6 is a 24-inch kamado-style charcoal grill built into a cart with a stainless steel work table, combining kamado-style heat retention with the cart-and-storage layout more typical of a gas grill setup.',
    images: ['weber-summit-kamado-s6-charcoal-grill.jpg'],
    specs: [
      ['Fuel', 'Charcoal'],
      ['Cooking area', '452 sq in (24 in diameter)'],
    ],
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
    specs: [
      ['Probes', '2 included, up to 4 supported'],
      ['Temperature range', '-22°F to 572°F'],
      ['Probe heat resistance', 'Up to 716°F'],
      ['Battery life', 'About 250 hours (batteries included)'],
      ['Connectivity', 'Bluetooth to the Weber iGrill app'],
      ['Fits', 'Genesis II, Genesis II LX and Spirit II gas grills with an iGrill 3 Ready plate'],
      ['Note', 'Not waterproof; do not submerge'],
    ],
  },
  {
    slug: 'weber-original-kettle-premium-grill-cover',
    name: 'Weber Premium Grill Cover for 22-Inch Charcoal Grills',
    price: 45,
    category: 'grill-accessories',
    badge: 'none',
    short: 'A polyester weather cover for 22-inch Weber charcoal kettle grills.',
    description:
      'This Weber cover is made for 22-inch charcoal grills. The polyester fabric has UV inhibitors to resist fading, is breathable while staying water resistant, and a fastening strap helps keep it in place.',
    images: ['weber-original-kettle-premium-grill-cover.jpg'],
    specs: [
      ['Fits', '22-inch charcoal grills'],
      ['Material', 'Polyester'],
      ['Features', 'UV inhibitors, breathable and water resistant, fastening strap'],
      ['Care', 'Spot clean only'],
    ],
  },
  {
    slug: 'weber-gourmet-bbq-system-griddle-insert',
    name: 'Weber Gourmet BBQ System Griddle Insert',
    price: 59,
    category: 'grill-accessories',
    badge: 'none',
    short: 'A cast iron griddle that drops into a Gourmet BBQ System cooking grate.',
    description:
      'This cast iron griddle drops into the center of a Weber Gourmet BBQ System cooking grate, turning part of the grill into a flat griddle surface for pancakes, smash burgers or stir-fried vegetables without a separate appliance.',
    images: ['weber-gourmet-bbq-system-griddle-insert.jpg'],
    specs: [
      ['Material', 'Cast iron'],
      ['Size', 'About 14 in (36 cm) across'],
      ['Fits', 'Gourmet BBQ System cooking grates on Weber charcoal grills, SmokeFire EX4/EX6, and Genesis, Genesis II, Spirit and Summit gas grills'],
    ],
  },
  {
    slug: 'kamado-joe-half-moon-cast-iron-griddle',
    name: 'Kamado Joe Big Joe Half Moon Cast Iron Griddle (24-Inch)',
    price: 79,
    category: 'grill-accessories',
    badge: 'none',
    short: 'A reversible cast iron half-moon griddle for 24-inch Big Joe kamado grills.',
    description:
      'This reversible cast iron griddle fills one half of the Divide & Conquer rack in a 24-inch Big Joe. Use the smooth side as a flat griddle or flip it to the ribbed side for grill marks, with an open-grate zone beside it in the same kamado.',
    images: ['kamado-joe-half-moon-cast-iron-griddle.jpg'],
    specs: [
      ['Material', 'Cast iron'],
      ['Surfaces', 'Smooth side and ribbed side (reversible)'],
      ['Includes', 'One half-moon griddle'],
      ['Size', 'Big Joe (24-inch grill) size'],
      ['Fits', 'Kamado Joe Big Joe series and other round 24-inch charcoal grills'],
      ['Works with', 'Divide & Conquer flexible cooking system'],
    ],
  },
  {
    slug: 'kamado-joe-grill-gripper-tool',
    name: 'Kamado Joe Grill Gripper Tool',
    price: 19,
    category: 'grill-accessories',
    badge: 'none',
    short: 'A stainless steel tool for lifting and moving a hot cooking grate.',
    description:
      'The Grill Gripper clamps onto a hot cooking grate so you can lift it aside to add charcoal or check the coals below.',
    images: ['kamado-joe-grill-gripper-tool.jpg'],
    specs: [
      ['Material', '304 stainless steel'],
      ['Use', 'Lifting and moving hot cooking grates'],
      ['Included with', 'Kamado Joe Classic II, Big Joe II and Joe Jr. grills'],
    ],
  },
  {
    slug: 'kamado-joe-kontrol-tower-vent',
    name: 'Kamado Joe Kontrol Tower Top Vent',
    price: 39,
    category: 'grill-accessories',
    badge: 'none',
    short: 'A cast aluminum top vent that fits Classic Joe and Big Joe grills.',
    description:
      'The Kontrol Tower is a powder-coated cast aluminum top vent for Kamado Joe Classic Joe and Big Joe grills. It gives consistent airflow control and keeps rain out of the grill.',
    images: ['kamado-joe-kontrol-tower-vent.jpg'],
    specs: [
      ['Material', 'Powder-coated cast aluminum'],
      ['Fits', 'Kamado Joe Classic Joe, Big Joe and Konnected Joe grills'],
      ['Does not fit', 'Joe Jr.'],
      ['Features', 'Rain-resistant, airflow control'],
    ],
  },
  {
    slug: 'napoleon-premium-3-piece-tool-set',
    name: 'Napoleon Premium 3-Piece Grill Tool Set',
    price: 49,
    category: 'grill-accessories',
    badge: 'none',
    short: 'A stainless steel set with QuickClick tongs, a beveled-edge spatula and a bristle brush.',
    description:
      'This Napoleon three-piece set has QuickClick tongs that open and close with one hand, a spatula with a 3-sided beveled edge for sliding under food, and a heavy-duty stainless steel bristle brush for cleaning the grids.',
    images: ['napoleon-premium-3-piece-tool-set.jpg'],
    specs: [
      ['Model','Napoleon Premium 3-Piece Tool Set (GATL006)'],
      ['Pieces','3: tongs, spatula, bristle brush'],
      ['Tongs','QuickClick single-hand operation'],
      ['Spatula','3-sided beveled edge'],
      ['Brush','Heavy-duty stainless steel bristles'],
      ['Material','Stainless steel'],
    ],
  },
  {
    slug: 'napoleon-cast-iron-reversible-griddle',
    name: 'Napoleon Cast Iron Reversible Griddle',
    price: 65,
    category: 'grill-accessories',
    badge: 'none',
    short: 'A reversible cast iron griddle for Rogue series gas grills.',
    description:
      'This reversible cast iron griddle sits in the cooking area of a compatible Rogue grill. Use the flat side for pancakes or eggs and flip it for a ridged side that marks steaks and vegetables.',
    images: ['napoleon-cast-iron-reversible-griddle.jpg'],
    specs: [
      ['Material', 'Cast iron'],
      ['Size', 'About 11.5 in × 17.75 in'],
      ['Fits', 'Rogue 425-1, 525-1 and 625-1 series grills (check your exact model)'],
    ],
  },
  {
    slug: 'napoleon-rogue-series-grill-cover',
    name: 'Napoleon Rogue 425 Series Grill Cover',
    price: 55,
    category: 'grill-accessories',
    badge: 'none',
    short: 'A fitted weatherproof cover for Rogue 425 series gas grills.',
    description:
      'This fitted cover is made for Napoleon Rogue 425 series grills. The water-resistant, UV-protected fabric helps protect the grill from rain and sun, and adjustable straps hold it in place.',
    images: ['napoleon-rogue-series-grill-cover.jpg'],
    specs: [
      ['Fits', 'Napoleon Rogue 425 series gas grills'],
      ['Features', 'Water-resistant, UV-protected fabric, adjustable straps with buckles'],
      ['Colour', 'Black'],
    ],
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
