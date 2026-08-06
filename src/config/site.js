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
    'Barbecue Grill Co. is a USA-based grill retailer established in 2015, offering charcoal, gas, pellet, and electric grills built for real outdoor cooking. Barbecue Grill Co. ships nationwide and specializes in high-output grills and grilling accessories for home cooks who take their backyard seriously.',
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
      'Traditional charcoal grills built for real smoke flavor and high-heat searing, from compact kettles to heavy-gauge barrel smokers.',
  },
  {
    slug: 'gas-grills',
    name: 'Gas Grills',
    description:
      'Propane and natural-gas grills with fast ignition, multi-zone burners, and consistent heat for everyday backyard cooking.',
  },
  {
    slug: 'pellet-grills',
    name: 'Pellet Grills',
    description:
      'Wood-pellet fed grills and smokers with digital temperature control for set-and-forget low-and-slow cooking or high-heat grilling.',
  },
  {
    slug: 'electric-grills',
    name: 'Electric Grills',
    description:
      'Plug-in grills for patios, balconies, and spaces where open flame isn’t allowed, without giving up real grill-grate searing.',
  },
  {
    slug: 'grill-accessories',
    name: 'Grill Accessories',
    description:
      'Covers, tools, thermometers, grates, and replacement parts to keep any grill running at its best.',
  },
]

export const PRODUCTS = [
  {
    slug: 'ember-45-charcoal-kettle',
    name: 'Ember 45 Charcoal Kettle Grill',
    price: 249,
    category: 'charcoal-grills',
    badge: 'Popular',
    short: 'A 22-inch porcelain-enameled kettle grill with adjustable dampers for precise heat control.',
    description:
      'The Ember 45 is a 22-inch porcelain-enameled charcoal kettle built for cooks who want direct control over heat and smoke. A hinged cooking grate makes it easy to add charcoal mid-cook, while top and bottom dampers let you dial in everything from a hard sear to a slow low-and-slow roast. The rust-resistant bowl and lid hold heat evenly across the whole cooking surface, and the ash catcher makes cleanup fast. A dependable, no-frills grill for anyone who wants real charcoal flavor without a steep learning curve.',
    images: ['charcoal-grills.svg'],
  },
  {
    slug: 'ironclad-barrel-smoker',
    name: 'Ironclad Barrel Smoker',
    price: 519,
    category: 'charcoal-grills',
    badge: 'Best Value',
    short: 'A heavy-gauge steel barrel smoker with offset firebox for low-and-slow smoking.',
    description:
      'Built from heavy-gauge steel, the Ironclad Barrel Smoker separates the fire from the meat with an offset firebox, so smoke rolls gently across the cooking chamber instead of blasting it with direct heat. A built-in temperature gauge on the main chamber lid helps you track conditions without opening the lid and losing heat. Two height-adjustable cooking grates give you room for a full brisket or several racks of ribs at once, and a bottom vent plus firebox damper let you fine-tune airflow for a steady, hours-long smoke.',
    images: ['charcoal-grills.svg'],
  },
  {
    slug: 'summit-3-burner-gas-grill',
    name: 'Summit 3-Burner Gas Grill',
    price: 429,
    category: 'gas-grills',
    badge: 'Popular',
    short: 'A 3-burner propane grill with independent zone control and a side burner.',
    description:
      'The Summit 3-Burner gives you three independently controlled stainless steel burners, so you can sear on one side and hold food warm on the other without juggling a single heat zone. A side burner handles sauces or sides without tying up a separate stovetop, and the porcelain-coated cast iron grates hold heat well and clean up easily. A built-in lid thermometer takes the guesswork out of indirect cooking, and locking caster wheels make it easy to reposition on a patio or deck.',
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
      'The Coastal 4-Burner is built around a full stainless steel body that resists corrosion even in humid or coastal climates. Four main burners plus a dedicated rear rotisserie burner give you enough zones to run a full spread — searing steaks, holding vegetables warm, and slow-turning a rotisserie chicken all at once. The extra-large cooking grate area comfortably handles cookouts for a crowd, and a wide front shelf gives you real prep space right at the grill instead of running back and forth to the kitchen.',
    images: ['gas-grills.svg'],
  },
  {
    slug: 'timberline-pellet-smoker',
    name: 'Timberline Wood Pellet Smoker',
    price: 899,
    category: 'pellet-grills',
    badge: 'Premium',
    short: 'A digital-controlled wood pellet smoker with wide temperature range for grilling or smoking.',
    description:
      'The Timberline uses an auger-fed hopper and digital controller to hold a steady temperature anywhere from a low smoke to a high-heat sear, so one grill covers both a Sunday brisket and a weeknight burger night. The controller’s temperature probe lets you monitor the meat without lifting the lid, and the large-capacity pellet hopper means fewer refills during long cooks. A porcelain-coated cooking grate and a fully insulated firebox keep heat consistent even in cold or windy weather.',
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
      'The Ridgeline Pro is built for cooks who want set-and-forget precision on serious cook days. WiFi-enabled temperature control lets you monitor and adjust the grill remotely, while dual meat probe ports track two cuts at once without opening the lid. The extra-large cooking chamber and secondary rack give you room for a full packer brisket alongside several racks of ribs. A rugged all-terrain cart with locking wheels makes it easy to move around a patio or driveway setup.',
    images: ['pellet-grills.svg'],
  },
  {
    slug: 'patio-pro-electric-grill',
    name: 'Patio Pro Electric Grill',
    price: 189,
    category: 'electric-grills',
    badge: 'New',
    short: 'A compact plug-in electric grill designed for balconies, patios, and apartments.',
    description:
      'The Patio Pro brings real grill-grate sear marks to spaces where charcoal and propane aren’t allowed. A high-wattage heating element reaches searing temperatures quickly, and the porcelain-coated cast iron grate mimics the char and grill marks of an open-flame cook. A removable drip tray catches grease for easy cleanup, and the compact footprint fits comfortably on a small balcony or condo patio without sacrificing cooking area.',
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
      'The Skyline XL scales up the electric-grill format to a full-size cooking surface without needing a gas line or propane tank. An adjustable thermostat dial gives you real temperature control instead of a single on/off setting, so you can hold a low heat for chicken thighs or crank it up for a quick sear. The raised-ridge cooking grate channels grease away from food, and weather-resistant housing means it can live outdoors year-round.',
    images: ['electric-grills.svg'],
  },
  {
    slug: 'all-weather-grill-cover',
    name: 'All-Weather Grill Cover',
    price: 39,
    category: 'grill-accessories',
    badge: 'none',
    short: 'A heavy-duty waterproof cover sized to fit most 3-4 burner gas grills.',
    description:
      'This heavy-duty polyester cover is treated to resist rain, UV fading, and wind so your grill stays protected through every season. An elastic hem and adjustable straps keep it locked down in gusty weather instead of blowing off overnight, and the breathable fabric prevents moisture from getting trapped underneath — which is what actually causes rust on an uncovered grill. Sized to comfortably fit most 3-4 burner gas grills and mid-size pellet smokers.',
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
      'This dual-probe thermometer tracks both internal meat temperature and ambient grill or smoker temperature at the same time, so you always know exactly where a long cook stands without opening the lid and losing heat. The wireless base has a range that covers most backyards, and customizable temperature alerts for common meats take the guesswork out of hitting the right doneness every time.',
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
      'This 5-piece set covers the essentials — spatula, tongs, fork, basting brush, and cleaning brush — all built from heavy-gauge stainless steel that holds up to repeated high-heat use. Extra-long handles keep hands well clear of open flame, and the included carrying case keeps the set organized whether it lives in a kitchen drawer or travels to a tailgate.',
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
      'A worn or warped grate changes how a grill cooks — uneven heat, food sticking, weaker sear marks. This porcelain-coated cast iron replacement grate restores consistent heat retention and a clean sear, and the coating resists rust better than bare cast iron. Available in common sizes to fit most kettle and gas grill cooking chambers.',
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
    a: 'Barbecue Grill Co. is a USA-based grill retailer founded in 2015, selling charcoal, gas, pellet, and electric grills along with grilling accessories. We ship nationwide across the United States.',
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
