import { SITE, CATEGORIES, PRODUCTS, POSTS } from '@/config/site'

const STATIC_PAGES = [
  '',
  'shop',
  'blog',
  'about',
  'contact',
  'faq',
  'cart',
  'order',
  'shipping',
  'refund',
  'privacy',
  'terms',
  'search',
]

export async function generateSitemaps() {
  return [{ id: 'pages' }, { id: 'categories' }, { id: 'products' }, { id: 'blog' }]
}

export default async function sitemap({ id }) {
  const base = `https://${SITE.domain}`
  const today = new Date().toISOString()

  if (id === 'pages') {
    return STATIC_PAGES.map((p) => ({
      url: `${base}/${p ? p + '/' : ''}`,
      lastModified: today,
      changeFrequency: p === '' ? 'daily' : 'weekly',
      priority: p === '' ? 1 : 0.7,
    }))
  }

  if (id === 'categories') {
    return CATEGORIES.map((c) => ({
      url: `${base}/shop/${c.slug}/`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.8,
    }))
  }

  if (id === 'products') {
    return PRODUCTS.map((p) => ({
      url: `${base}/product/${p.slug}/`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.9,
      images: p.images.map((img) => `${base}/images/${img}`),
    }))
  }

  if (id === 'blog') {
    return [
      { url: `${base}/blog/`, lastModified: today, changeFrequency: 'weekly', priority: 0.6 },
      ...POSTS.map((post) => ({
        url: `${base}/blog/${post.slug}/`,
        lastModified: new Date(post.date).toISOString(),
        changeFrequency: 'monthly',
        priority: 0.6,
      })),
    ]
  }

  return []
}
