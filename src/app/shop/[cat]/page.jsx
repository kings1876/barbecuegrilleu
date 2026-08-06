import { notFound } from 'next/navigation'
import Breadcrumbs from '@/components/Breadcrumbs'
import ProductCard from '@/components/ProductCard'
import { SITE, CATEGORIES, PRODUCTS } from '@/config/site'

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ cat: c.slug }))
}

export function generateMetadata({ params }) {
  const category = CATEGORIES.find((c) => c.slug === params.cat)
  if (!category) return {}
  return {
    title: `${category.name} for Sale`,
    description: `${category.description} Shop ${category.name.toLowerCase()} with nationwide US shipping.`.slice(0, 158),
    alternates: { canonical: `https://${SITE.domain}/shop/${category.slug}/` },
  }
}

export default function CategoryPage({ params }) {
  const category = CATEGORIES.find((c) => c.slug === params.cat)
  if (!category) notFound()
  const products = PRODUCTS.filter((p) => p.category === category.slug)

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `https://${SITE.domain}/` },
      { '@type': 'ListItem', position: 2, name: 'Shop', item: `https://${SITE.domain}/shop/` },
      { '@type': 'ListItem', position: 3, name: category.name, item: `https://${SITE.domain}/shop/${category.slug}/` },
    ],
  }

  return (
    <div className="section">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="container">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Shop', href: '/shop/' }, { label: category.name }]} />
        <h1>{category.name}</h1>
        <p style={{ maxWidth: 640, color: 'var(--color-text-muted)' }}>{category.description}</p>

        {products.length === 0 ? (
          <p>No products in this category yet — check back soon.</p>
        ) : (
          <div className="grid grid-4">
            {products.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
