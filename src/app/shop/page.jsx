import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ProductCard from '@/components/ProductCard'
import SmartImage from '@/components/SmartImage'
import { SITE, CATEGORIES, PRODUCTS } from '@/config/site'
import { BRANDS } from '@/config/brands'

export const metadata = {
  title: 'Shop All Grills — BBQ Grills for Sale',
  description: 'Browse genuine Weber, Kamado Joe, and Napoleon grills — charcoal, gas, electric, pellet, kamado, and smoker models. Nationwide US shipping.',
  alternates: { canonical: `https://${SITE.domain}/shop/` },
}

export default function ShopPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `https://${SITE.domain}/` },
      { '@type': 'ListItem', position: 2, name: 'Shop', item: `https://${SITE.domain}/shop/` },
    ],
  }

  return (
    <div className="section">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="container">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Shop' }]} />
        <h1>Shop All Grills</h1>
        <p style={{ maxWidth: 640, color: 'var(--color-text-muted)' }}>
          Genuine Weber, Kamado Joe, and Napoleon grills — charcoal, gas, electric, pellet, kamado, and smoker models — plus the accessories to keep them running. Minimum order $500 — free shipping over $1,000.
        </p>

        <div className="grid grid-4" style={{ marginBottom: 48 }}>
          {CATEGORIES.map((c) => (
            <Link key={c.slug} href={`/shop/${c.slug}/`} className="card" style={{ padding: 18, display: 'block' }}>
              <div className="product-frame" style={{ marginBottom: 10 }}>
                <SmartImage src={PRODUCTS.find((p) => p.category === c.slug).images[0]} alt={c.name} />
              </div>
              <h3 style={{ fontSize: '1rem', margin: 0 }}>{c.name}</h3>
            </Link>
          ))}
        </div>

        <h2>Shop by brand</h2>
        <p>
          {BRANDS.map((b, i) => (
            <span key={b.slug}>
              {i > 0 && ' · '}
              <Link href={`/brand/${b.slug}/`} style={{ textDecoration: 'underline' }}>
                {b.name} grills
              </Link>
            </span>
          ))}
        </p>

        <h2>All Products</h2>
        <div className="grid grid-4">
          {PRODUCTS.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </div>
    </div>
  )
}
