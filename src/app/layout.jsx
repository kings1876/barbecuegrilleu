import '../styles/globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ChatHub from '@/components/ChatHub'
import { SITE, CATEGORIES, PRODUCTS } from '@/config/site'

export const metadata = {
  metadataBase: new URL(`https://${SITE.domain}`),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description.slice(0, 155),
  verification: SITE.gscVerification ? { google: SITE.gscVerification } : undefined,
  openGraph: {
    type: 'website',
    siteName: SITE.name,
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description.slice(0, 155),
    url: `https://${SITE.domain}`,
    images: [`https://${SITE.domain}/images/og-default.svg`],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description.slice(0, 155),
    images: [`https://${SITE.domain}/images/og-default.svg`],
  },
}

export default function RootLayout({ children }) {
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': ['Store', 'Organization'],
    name: SITE.name,
    description: SITE.description,
    url: `https://${SITE.domain}`,
    foundingDate: String(SITE.foundingYear),
    foundingLocation: SITE.foundingLocation,
    address: { '@type': 'PostalAddress', addressCountry: 'US' },
    areaServed: SITE.shipsTo,
    numberOfItems: PRODUCTS.length,
    knowsAbout: CATEGORIES.map((c) => c.name),
    priceRange: '$$',
    makesOffer: {
      '@type': 'AggregateOffer',
      priceCurrency: SITE.currency,
      lowPrice: Math.min(...PRODUCTS.map((p) => p.price)),
      highPrice: Math.max(...PRODUCTS.map((p) => p.price)),
      offerCount: PRODUCTS.length,
    },
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.name,
    url: `https://${SITE.domain}`,
    potentialAction: {
      '@type': 'SearchAction',
      target: `https://${SITE.domain}/search/?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <html lang={SITE.locale}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="/js/webmcp.js" defer></script>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <ChatHub />
      </body>
    </html>
  )
}
