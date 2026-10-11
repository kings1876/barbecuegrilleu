import { notFound } from 'next/navigation'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ProductCard from '@/components/ProductCard'
import { SITE, CATEGORIES, PRODUCTS } from '@/config/site'
import { BRANDS, productsForBrand } from '@/config/brands'

export function generateStaticParams() {
  return BRANDS.map((b) => ({ brand: b.slug }))
}

export function generateMetadata({ params }) {
  const brand = BRANDS.find((b) => b.slug === params.brand)
  if (!brand) return {}
  return {
    title: brand.title,
    description: brand.description,
    alternates: { canonical: `https://${SITE.domain}/brand/${brand.slug}/` },
  }
}

export default function BrandPage({ params }) {
  const brand = BRANDS.find((b) => b.slug === params.brand)
  if (!brand) notFound()
  const products = productsForBrand(PRODUCTS, brand)
  const categoryNames = [...new Set(products.map((p) => p.category))].map(
    (slug) => CATEGORIES.find((c) => c.slug === slug)
  )

  const listSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: brand.title,
    url: `https://${SITE.domain}/brand/${brand.slug}/`,
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: products.length,
      itemListElement: products.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `https://${SITE.domain}/product/${p.slug}/`,
        name: p.name,
      })),
    },
  }
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `https://${SITE.domain}/` },
      { '@type': 'ListItem', position: 2, name: 'Shop', item: `https://${SITE.domain}/shop/` },
      { '@type': 'ListItem', position: 3, name: brand.name, item: `https://${SITE.domain}/brand/${brand.slug}/` },
    ],
  }

  return (
    <div className="section">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(listSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="container">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Shop', href: '/shop/' }, { label: brand.name }]} />
        <h1>{brand.name} Grills for Sale</h1>
        <div style={{ maxWidth: 760 }}>
          {brand.intro.map((para) => (
            <p key={para.slice(0, 30)} style={{ color: 'var(--color-text-muted)' }}>
              {para}
            </p>
          ))}
        </div>
        <p>
          Browse by type:{' '}
          {categoryNames.map((c, i) => (
            <span key={c.slug}>
              {i > 0 && ', '}
              <Link href={`/shop/${c.slug}/`} style={{ textDecoration: 'underline' }}>
                {c.name}
              </Link>
            </span>
          ))}
        </p>
        <div className="grid grid-4" style={{ marginTop: 24 }}>
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
        <h2 style={{ marginTop: 48 }}>Other brands</h2>
        <p>
          {BRANDS.filter((b) => b.slug !== brand.slug).map((b, i) => (
            <span key={b.slug}>
              {i > 0 && ' · '}
              <Link href={`/brand/${b.slug}/`} style={{ textDecoration: 'underline' }}>
                {b.name} grills
              </Link>
            </span>
          ))}
        </p>
      </div>
    </div>
  )
}
