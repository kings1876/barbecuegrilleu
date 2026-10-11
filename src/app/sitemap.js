import { SITE, CATEGORIES, PRODUCTS, POSTS } from '@/config/site'
import { BRANDS } from '@/config/brands'

// One flat sitemap served at /sitemap.xml (the previous generateSitemaps() split produced
// /sitemap/<id>.xml files but no index, so the URL in robots.txt was a 404).
// Utility pages with no search value (cart, order, search, thank-you) are deliberately excluded.
const CONTENT_PAGES = ['', 'shop', 'blog', 'about', 'contact', 'faq', 'shipping', 'refund', 'privacy', 'terms']
const CATALOG_UPDATED = '2026-10-11'

export default function sitemap() {
  const base = `https://${SITE.domain}`
  const url = (path) => `${base}/${path ? path + '/' : ''}`

  return [
    ...CONTENT_PAGES.map((p) => ({
      url: url(p),
      lastModified: CATALOG_UPDATED,
      changeFrequency: p === '' ? 'weekly' : 'monthly',
      priority: p === '' ? 1 : 0.6,
    })),
    ...CATEGORIES.map((c) => ({
      url: url(`shop/${c.slug}`),
      lastModified: CATALOG_UPDATED,
      changeFrequency: 'weekly',
      priority: 0.9,
    })),
    ...BRANDS.map((b) => ({
      url: url(`brand/${b.slug}`),
      lastModified: CATALOG_UPDATED,
      changeFrequency: 'weekly',
      priority: 0.9,
    })),
    ...PRODUCTS.map((p) => ({
      url: url(`product/${p.slug}`),
      lastModified: CATALOG_UPDATED,
      changeFrequency: 'weekly',
      priority: 0.8,
      images: p.images.map((img) => `${base}/images/${img}`),
    })),
    ...POSTS.map((post) => ({
      url: url(`blog/${post.slug}`),
      lastModified: post.date,
      changeFrequency: 'monthly',
      priority: 0.6,
    })),
  ]
}
