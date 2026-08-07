import Link from 'next/link'
import SmartImage from '@/components/SmartImage'
import ProductCard from '@/components/ProductCard'
import { SITE, CATEGORIES, PRODUCTS, FAQS, ORDER_RULES } from '@/config/site'
import FaqAccordion from '@/components/FaqAccordion'

export const metadata = {
  title: 'Barbecue Grills for Sale | Charcoal, Gas & More',
  description:
    'Shop barbecue grills for sale — charcoal, gas, electric, pellet, kamado, and smoker grills built for real backyard cooking. Nationwide US shipping.',
  alternates: { canonical: `https://${SITE.domain}/` },
}

export default function HomePage() {
  // One representative product per category, in category order, so the homepage
  // isn't just the first 8 charcoal-grill entries in the PRODUCTS array.
  const featured = CATEGORIES.map((c) => PRODUCTS.find((p) => p.category === c.slug)).filter(Boolean)

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, var(--color-accent), #111827)', color: '#fff', padding: '72px 0' }}>
        <div className="container two-col" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 40, alignItems: 'center' }}>
          <div>
            <h1 style={{ color: '#fff' }}>Barbecue Grill for Sale — Built for Real Backyard Cooking</h1>
            <p style={{ color: '#d1d5db', fontSize: '1.05rem', maxWidth: 520 }}>
              {SITE.description}
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 16 }}>
              <Link href="/shop/" className="btn btn-primary">Shop Grills</Link>
              <Link href="/contact/" className="btn btn-secondary" style={{ borderColor: '#fff', color: '#fff' }}>Get in Touch</Link>
            </div>
          </div>
          <div className="product-frame" style={{ background: '#fff' }}>
            <SmartImage src="hero-grill.svg" alt="Barbecue grill lineup from Barbecue Grill Co." priority />
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="section" style={{ paddingTop: 32, paddingBottom: 32 }}>
        <div className="container trust-bar">
          <div className="trust-item">
            <div className="trust-icon">🚚</div>
            <strong>Free shipping over ${ORDER_RULES.freeShippingOver}</strong>
          </div>
          <div className="trust-item">
            <div className="trust-icon">🔥</div>
            <strong>Built for real cooking</strong>
          </div>
          <div className="trust-item">
            <div className="trust-icon">💬</div>
            <strong>Order form support</strong>
          </div>
          <div className="trust-item">
            <div className="trust-icon">₿</div>
            <strong>{ORDER_RULES.altPaymentDiscountPct}% off with crypto</strong>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section section-tint">
        <div className="container">
          <h2>Shop by Category</h2>
          <div className="grid grid-4">
            {CATEGORIES.map((c) => (
              <Link key={c.slug} href={`/shop/${c.slug}/`} className="card" style={{ padding: 20, display: 'block' }}>
                <div className="product-frame" style={{ marginBottom: 12 }}>
                  <SmartImage src={`${c.slug}.svg`} alt={c.name} />
                </div>
                <h3 style={{ fontSize: '1.05rem', margin: 0 }}>{c.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="section">
        <div className="container">
          <h2>Featured Grills</h2>
          <div className="grid grid-4">
            {featured.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <Link href="/shop/" className="btn btn-secondary">View All Products</Link>
          </div>
        </div>
      </section>

      {/* About / authority */}
      <section className="section section-tint-2">
        <div className="container two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'center' }}>
          <div>
            <h2>About {SITE.name}</h2>
            <p>
              {SITE.name} is a {SITE.foundingLocation}-based grill retailer established in {SITE.foundingYear}, offering
              charcoal, gas, electric, and pellet grills, BBQ smokers, kamado grills, and pizza ovens for home cooks who take their backyard seriously. We ship{' '}
              {SITE.shipsTo.toLowerCase()} and specialize in high-output grills and grilling accessories.
            </p>
            <Link href="/about/" className="btn btn-primary">Learn More</Link>
          </div>
          <div className="product-frame">
            <SmartImage src="about-grilling.svg" alt={`About ${SITE.name}`} />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container" style={{ maxWidth: 760, margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center' }}>Frequently Asked Questions</h2>
          <FaqAccordion faqs={FAQS} />
        </div>
      </section>
    </>
  )
}
