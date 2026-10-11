import { notFound } from 'next/navigation'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ProductGallery from '@/components/ProductGallery'
import ProductCard from '@/components/ProductCard'
import AddToCartForm from '@/components/AddToCartForm'
import { SITE, CATEGORIES, PRODUCTS, ORDER_RULES } from '@/config/site'

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }) {
  const product = PRODUCTS.find((p) => p.slug === params.slug)
  if (!product) return {}
  return {
    title: product.name,
    description: `${product.name}: ${product.short} $${product.price.toLocaleString()} ${SITE.currency}. Ships Australia-wide.`,
    alternates: { canonical: `https://${SITE.domain}/product/${product.slug}/` },
    openGraph: { images: [`https://${SITE.domain}/images/${product.images[0]}`] },
  }
}

export default function ProductPage({ params }) {
  const product = PRODUCTS.find((p) => p.slug === params.slug)
  if (!product) notFound()
  const category = CATEGORIES.find((c) => c.slug === product.category)
  const related = PRODUCTS.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 4)

  const KNOWN_BRANDS = ['Weber', 'Kamado Joe', 'Napoleon', 'Traeger']
  const brandName = KNOWN_BRANDS.find((b) => product.name.startsWith(b)) || SITE.name

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.images.map((img) => `https://${SITE.domain}/images/${img}`),
    brand: { '@type': 'Brand', name: brandName },
    ...(product.specs?.length
      ? {
          additionalProperty: product.specs.map(([name, value]) => ({
            '@type': 'PropertyValue',
            name,
            value,
          })),
        }
      : {}),
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: SITE.currency,
      availability: 'https://schema.org/InStock',
      url: `https://${SITE.domain}/product/${product.slug}/`,
      seller: { '@type': 'Organization', name: SITE.name },
      shippingDetails: {
        '@type': 'OfferShippingDetails',
        shippingRate: {
          '@type': 'MonetaryAmount',
          value: product.price >= ORDER_RULES.freeShippingOver ? 0 : ORDER_RULES.flatShippingFee,
          currency: SITE.currency,
        },
        shippingDestination: { '@type': 'DefinedRegion', addressCountry: 'AU' },
      },
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
          <ProductGallery images={product.images} alt={product.name} />
          <div>
            {product.badge && product.badge !== 'none' && <span className="badge">{product.badge}</span>}
            <h1>{product.name}</h1>
            <p className="product-card-price" style={{ fontSize: '1.4rem' }}>
              ${product.price.toLocaleString()} {SITE.currency}
            </p>
            <AddToCartForm product={product} />
            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginTop: 20 }}>
              Minimum order $500. Free shipping over $1,000, flat $15 shipping fee otherwise. 10% discount for crypto payment.
            </p>
            <Link href="/order/" className="btn btn-secondary" style={{ marginTop: 8 }}>
              Go to Order Form
            </Link>
          </div>
        </div>

        <div style={{ marginTop: 48, borderTop: '1px solid var(--color-border)', paddingTop: 32 }}>
          <h2>Product Details</h2>
          <p style={{ maxWidth: 'none' }}>{product.description}</p>
        </div>

        {product.specs?.length > 0 && (
          <div style={{ marginTop: 32 }}>
            <h2>Specifications</h2>
            <div className="table-wrap">
              <table>
                <tbody>
                  {product.specs.map(([label, value]) => (
                    <tr key={label} style={{ borderTop: '1px solid var(--color-border)' }}>
                      <th scope="row" style={{ textAlign: 'left', padding: '10px 12px', width: '40%', fontWeight: 600 }}>
                        {label}
                      </th>
                      <td style={{ padding: '10px 12px' }}>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
              Specifications are based on manufacturer and retailer published data and can vary by fuel type, color and
              configuration. Contact us to confirm details before ordering.
            </p>
          </div>
        )}

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
