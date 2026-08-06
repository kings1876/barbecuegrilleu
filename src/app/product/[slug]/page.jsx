import { notFound } from 'next/navigation'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import SmartImage from '@/components/SmartImage'
import ProductCard from '@/components/ProductCard'
import AddToCartForm from '@/components/AddToCartForm'
import { SITE, CATEGORIES, PRODUCTS } from '@/config/site'

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }) {
  const product = PRODUCTS.find((p) => p.slug === params.slug)
  if (!product) return {}
  return {
    title: product.name,
    description: `${product.short} $${product.price} ${SITE.currency}. Nationwide US shipping.`.slice(0, 158),
    alternates: { canonical: `https://${SITE.domain}/product/${product.slug}/` },
    openGraph: { images: [`https://${SITE.domain}/images/${product.images[0]}`] },
  }
}

export default function ProductPage({ params }) {
  const product = PRODUCTS.find((p) => p.slug === params.slug)
  if (!product) notFound()
  const category = CATEGORIES.find((c) => c.slug === product.category)
  const related = PRODUCTS.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 4)

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.images.map((img) => `https://${SITE.domain}/images/${img}`),
    brand: { '@type': 'Brand', name: SITE.name },
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: SITE.currency,
      availability: 'https://schema.org/InStock',
      url: `https://${SITE.domain}/product/${product.slug}/`,
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `https://${SITE.domain}/` },
      { '@type': 'ListItem', position: 2, name: 'Shop', item: `https://${SITE.domain}/shop/` },
      { '@type': 'ListItem', position: 3, name: category.name, item: `https://${SITE.domain}/shop/${category.slug}/` },
      { '@type': 'ListItem', position: 4, name: product.name, item: `https://${SITE.domain}/product/${product.slug}/` },
    ],
  }

  return (
    <div className="section">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="container">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Shop', href: '/shop/' },
            { label: category.name, href: `/shop/${category.slug}/` },
            { label: product.name },
          ]}
        />

        <div className="two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>
          <div className="product-frame">
            <SmartImage src={product.images[0]} alt={product.name} priority />
          </div>
          <div>
            {product.badge && product.badge !== 'none' && <span className="badge">{product.badge}</span>}
            <h1>{product.name}</h1>
            <p className="product-card-price" style={{ fontSize: '1.4rem' }}>
              ${product.price.toLocaleString()} {SITE.currency}
            </p>
            <p>{product.description}</p>
            <AddToCartForm product={product} />
            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginTop: 20 }}>
              Minimum order $500. Free shipping over $1,000, flat $15 shipping fee otherwise. 10% discount for crypto payment.
            </p>
            <Link href="/order/" className="btn btn-secondary" style={{ marginTop: 8 }}>
              Go to Order Form
            </Link>
          </div>
        </div>

        {related.length > 0 && (
          <div style={{ marginTop: 64 }}>
            <h2>Related Products</h2>
            <div className="grid grid-4">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
