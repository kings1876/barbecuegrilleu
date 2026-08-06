import Breadcrumbs from '@/components/Breadcrumbs'
import SmartImage from '@/components/SmartImage'
import { SITE, CATEGORIES } from '@/config/site'

export const metadata = {
  title: 'About Us',
  description: `About ${SITE.name} — a ${SITE.foundingLocation}-based grill retailer founded in ${SITE.foundingYear}, shipping nationwide across the US.`,
  alternates: { canonical: `https://${SITE.domain}/about/` },
}

export default function AboutPage() {
  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    mainEntity: {
      '@type': 'Organization',
      name: SITE.name,
      foundingDate: String(SITE.foundingYear),
      foundingLocation: SITE.foundingLocation,
      description: SITE.description,
    },
  }

  return (
    <div className="section">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} />
      <div className="container" style={{ maxWidth: 820, margin: '0 auto' }}>
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'About' }]} />
        <h1>About {SITE.name}</h1>
        <div className="product-frame" style={{ marginBottom: 32, aspectRatio: '16/7' }}>
          <SmartImage src="about-grilling.svg" alt={`${SITE.name} team and grills`} />
        </div>

        <p>{SITE.description}</p>

        <h2>Our Story</h2>
        <p>
          {SITE.name} was founded in {SITE.foundingYear} in the {SITE.foundingLocation}, built around a simple idea: backyard
          cooks deserve grills that are actually built for real cooking, not just for looking good in a showroom. Since then
          we've focused on carrying charcoal, gas, pellet, and electric grills that hold up to regular, serious use — along
          with the accessories that keep them running well past the first season.
        </p>

        <h2>What We Carry</h2>
        <ul>
          {CATEGORIES.map((c) => (
            <li key={c.slug}>
              <strong>{c.name}:</strong> {c.description}
            </li>
          ))}
        </ul>

        <h2>Where We Ship</h2>
        <p>
          {SITE.name} ships {SITE.shipsTo.toLowerCase()}. Minimum order $500, free shipping on orders over $1,000, and a flat
          $15 shipping fee below that threshold.
        </p>

        <h2>How to Order</h2>
        <p>
          Orders are placed through our order form — submit your product selections and we'll follow up by email to confirm
          payment and shipping. We currently accept cryptocurrency payments only (BTC, USDT), with an automatic 10% discount
          applied for paying in crypto.
        </p>
      </div>
    </div>
  )
}
