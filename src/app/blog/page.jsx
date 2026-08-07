import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import { SITE, POSTS } from '@/config/site'

export const metadata = {
  title: 'Grilling Tips & Guides',
  description: 'Grilling guides, buying advice, and setup tips for charcoal, gas, electric, and pellet grills, smokers, kamados, and pizza ovens.',
  alternates: { canonical: `https://${SITE.domain}/blog/` },
}

export default function BlogIndex() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `https://${SITE.domain}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `https://${SITE.domain}/blog/` },
    ],
  }

  return (
    <div className="section">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="container">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Blog' }]} />
        <h1>Grilling Tips & Guides</h1>
        <div className="grid grid-3">
          {POSTS.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}/`} className="card" style={{ padding: 20, display: 'block' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--color-primary)', fontWeight: 600 }}>
                {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
              <h2 style={{ fontSize: '1.15rem' }}>{post.title}</h2>
              <p style={{ color: 'var(--color-text-muted)' }}>{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
