'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ProductCard from '@/components/ProductCard'
import { PRODUCTS, POSTS } from '@/config/site'

export default function SearchPage() {
  const [q, setQ] = useState('')

  const results = useMemo(() => {
    const query = q.trim().toLowerCase()
    if (!query) return { products: [], posts: [] }
    const products = PRODUCTS.filter(
      (p) => p.name.toLowerCase().includes(query) || p.short.toLowerCase().includes(query) || p.category.includes(query)
    )
    const posts = POSTS.filter((p) => p.title.toLowerCase().includes(query) || p.excerpt.toLowerCase().includes(query))
    return { products, posts }
  }, [q])

  return (
    <div className="section">
      <div className="container">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Search' }]} />
        <h1>Search</h1>
        <label htmlFor="search-input">Search products and articles</label>
        <input
          id="search-input"
          type="search"
          placeholder="e.g. pellet grill, charcoal, thermometer"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          style={{ maxWidth: 480, marginBottom: 32 }}
        />

        {q && results.products.length === 0 && results.posts.length === 0 && <p>No results for "{q}".</p>}

        {results.products.length > 0 && (
          <>
            <h2>Products</h2>
            <div className="grid grid-4" style={{ marginBottom: 32 }}>
              {results.products.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </>
        )}

        {results.posts.length > 0 && (
          <>
            <h2>Articles</h2>
            <div className="grid grid-3">
              {results.posts.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}/`} className="card" style={{ padding: 20, display: 'block' }}>
                  <h3 style={{ fontSize: '1.05rem' }}>{p.title}</h3>
                  <p style={{ color: 'var(--color-text-muted)' }}>{p.excerpt}</p>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
