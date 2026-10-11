import { notFound } from 'next/navigation'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ProductCard from '@/components/ProductCard'
import { SITE, CATEGORIES, PRODUCTS } from '@/config/site'
import { BRANDS, productsForBrand } from '@/config/brands'
import { CATEGORY_CONTENT } from '@/config/category-content'

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ cat: c.slug }))
}

export function generateMetadata({ params }) {
  const category = CATEGORIES.find((c) => c.slug === params.cat)
  if (!category) return {}
  const content = CATEGORY_CONTENT[category.slug]
  return {
    title: content?.title || `${category.name} for Sale`,
    description:
      content?.metaDescription || `${category.description} Shop ${category.name.toLowerCase()} with nationwide US shipping.`,
    alternates: { canonical: `https://${SITE.domain}/shop/${category.slug}/` },
  }
}

export default function CategoryPage({ params }) {
  const category = CATEGORIES.find((c) => c.slug === params.cat)
  if (!category) notFound()
  const products = PRODUCTS.filter((p) => p.category === category.slug)
  const content = CATEGORY_CONTENT[category.slug]
  const brands = BRANDS.filter((b) => productsForBrand(products, b).length > 0)
  const otherCategories = CATEGORIES.filter((c) => c.slug !== category.slug)

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `https://${SITE.domain}/` },
      { '@type': 'ListItem', position: 2, name: 'Shop', item: `https://${SITE.domain}/shop/` },
      { '@type': 'ListItem', position: 3, name: category.name, item: `https://${SITE.domain}/shop/${category.slug}/` },
    ],
  }

  const listSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: category.name,
    url: `https://${SITE.domain}/shop/${category.slug}/`,
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

  const faqSchema = content?.faqs?.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: content.faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      }
    : null

  return (
    <div className="section">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(listSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
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

        {content && (
          <section style={{ maxWidth: 820, marginTop: 56 }}>
            <h2>How to choose {category.name.toLowerCase()}</h2>
            {content.guide.map((para) => (
              <p key={para.slice(0, 30)}>{para}</p>
            ))}
            {brands.length > 0 && (
              <p>
                Shop by brand:{' '}
                {brands.map((b, i) => (
                  <span key={b.slug}>
                    {i > 0 && ', '}
                    <Link href={`/brand/${b.slug}/`} style={{ textDecoration: 'underline' }}>
                      {b.name} grills
                    </Link>
                  </span>
                ))}
                .
              </p>
            )}
            <h2 style={{ marginTop: 32 }}>Frequently asked questions</h2>
            {content.faqs.map((f) => (
              <div key={f.q} style={{ marginBottom: 16 }}>
                <h3 style={{ fontSize: '1.05rem', marginBottom: 4 }}>{f.q}</h3>
                <p style={{ margin: 0 }}>{f.a}</p>
              </div>
            ))}
          </section>
        )}

        <p style={{ marginTop: 40 }}>
          More to browse:{' '}
          {otherCategories.map((c, i) => (
            <span key={c.slug}>
              {i > 0 && ' · '}
              <Link href={`/shop/${c.slug}/`} style={{ textDecoration: 'underline' }}>
                {c.name}
              </Link>
            </span>
          ))}
        </p>
      </div>
    </div>
  )
}
