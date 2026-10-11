// Brand hub pages (/brand/<slug>/). Products are matched by name prefix, so adding a product
// whose name starts with the brand name puts it on the hub automatically.
// Copy is original and sticks to publicly known facts; no "authorized dealer" claims.
export const BRANDS = [
  {
    slug: 'weber',
    name: 'Weber',
    prefix: 'Weber',
    title: 'Weber Grills for Sale — Kettle, Gas, Pellet & Smokers',
    description:
      'Shop Weber grills for sale: Original Kettle and Master-Touch charcoal grills, Spirit II and Genesis gas grills, Summit, SmokeFire pellet grills, Pulse electric grills and Smokey Mountain smokers. Ships nationwide.',
    intro: [
      'Weber covers more grill types than any other brand in our catalog: the classic charcoal kettle, propane gas grills from the compact Spirit II to the Summit series, SmokeFire wood-pellet grills, Pulse electric grills, Smokey Mountain water smokers, and the Summit Kamado.',
      'If you are choosing between Weber models, start with how you cook. Charcoal kettles reward cooks who want direct control over heat and smoke; the gas range suits weeknight grilling; SmokeFire and the Smokey Mountain Cooker are built for long, low-and-slow cooks. Every Weber product below links to its own page with the model details and price.',
    ],
  },
  {
    slug: 'kamado-joe',
    name: 'Kamado Joe',
    prefix: 'Kamado Joe',
    title: 'Kamado Joe Grills for Sale — Classic, Big Joe & Joe Jr.',
    description:
      'Shop Kamado Joe ceramic kamado grills for sale: Joe Jr., Classic II and III, Big Joe II and III, plus Kamado Joe griddles, vents and tools. Ships nationwide.',
    intro: [
      'Kamado Joe makes thick-walled ceramic grills that hold steady heat for hours, which is why they suit everything from an overnight smoke to a high-heat sear. The range here runs from the portable Joe Jr. up to the 24-inch Big Joe III.',
      'Pick by size first: Joe Jr. for small patios and travel, Classic for most households, Big Joe when you regularly cook for a crowd. Kamado Joe accessories such as the Half Moon griddle, Kontrol Tower vent and Grill Gripper are listed alongside the grills.',
    ],
  },
  {
    slug: 'napoleon',
    name: 'Napoleon',
    prefix: 'Napoleon',
    title: 'Napoleon Grills for Sale — Rogue, Prestige & Charcoal',
    description:
      'Shop Napoleon grills for sale: Rogue 425 and 525 and Prestige 500 and PRO 665 gas grills, PRO and Professional charcoal grills, plus Napoleon covers, tool sets and griddles. Ships nationwide.',
    intro: [
      'Napoleon is best known here for its gas grills, from the Rogue series up to the flagship Prestige PRO 665, and also for stainless charcoal grills including the Charcoal Professional cart grill.',
      'The Rogue line is the straightforward choice for everyday grilling; the Prestige models add more burners, side burners and integrated lighting for people who host often. Matching Napoleon covers, tool sets and griddles are listed below.',
    ],
  },
  {
    slug: 'traeger',
    name: 'Traeger',
    prefix: 'Traeger',
    title: 'Traeger Pellet Grills for Sale',
    description: 'Shop the Traeger Pro 575 wood-pellet grill. Ships nationwide across the United States.',
    intro: [
      'Traeger pioneered the wood-pellet grill, which feeds hardwood pellets from a hopper to hold a set temperature automatically. The Pro 575 is its popular mid-size model.',
    ],
  },
]

export function productsForBrand(products, brand) {
  return products.filter((p) => p.name.startsWith(brand.prefix))
}
