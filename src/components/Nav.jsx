'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { SITE, CATEGORIES } from '@/config/site'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [shopOpen, setShopOpen] = useState(false)
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    function readCart() {
      try {
        const raw = JSON.parse(localStorage.getItem('bg-cart') || '[]')
        setCartCount(raw.reduce((sum, i) => sum + i.qty, 0))
      } catch {
        setCartCount(0)
      }
    }
    readCart()
    window.addEventListener('bg-cart-updated', readCart)
    return () => window.removeEventListener('bg-cart-updated', readCart)
  }, [])

  return (
    <header style={{ borderBottom: '1px solid var(--color-border)', position: 'sticky', top: 0, background: '#fff', zIndex: 100 }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', minHeight: 64, gap: 16 }}>
        <Link href="/" style={{ fontWeight: 800, fontSize: '1.15rem', color: 'var(--color-accent)' }}>
          {SITE.name}
        </Link>

        <nav aria-label="Primary" className="nav-desktop" style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
          <div
            style={{ position: 'relative' }}
            onMouseEnter={() => setShopOpen(true)}
            onMouseLeave={() => setShopOpen(false)}
          >
            <Link href="/shop/" style={{ fontWeight: 600 }}>Shop</Link>
            {shopOpen && (
              <div style={{ position: 'absolute', top: '100%', left: 0, background: '#fff', border: '1px solid var(--color-border)', borderRadius: 8, boxShadow: 'var(--shadow-lg)', padding: 8, minWidth: 200, maxWidth: 420 }}>
                {CATEGORIES.map((c) => (
                  <Link key={c.slug} href={`/shop/${c.slug}/`} style={{ display: 'block', padding: '8px 12px', borderRadius: 6 }}>
                    {c.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/blog/">Blog</Link>
          <Link href="/about/">About</Link>
          <Link href="/contact/">Contact</Link>
          <Link href="/faq/">FAQ</Link>
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <Link href="/search/" aria-label="Search" style={{ padding: 6 }}>
            🔍
          </Link>
          <Link href="/cart/" aria-label={`Cart, ${cartCount} items`} style={{ padding: 6, position: 'relative' }}>
            🛒
            {cartCount > 0 && (
              <span style={{ position: 'absolute', top: -4, right: -6, background: 'var(--color-primary)', color: '#fff', borderRadius: 999, fontSize: 11, minWidth: 18, height: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 4px' }}>
                {cartCount}
              </span>
            )}
          </Link>
          <button
            className="nav-hamburger"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            style={{ display: 'none', background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', minWidth: 44, minHeight: 44 }}
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {open && (
        <nav aria-label="Mobile" style={{ borderTop: '1px solid var(--color-border)', padding: '12px 20px', display: 'flex', flexDirection: 'column', gap: 4 }}>
          <Link href="/shop/" onClick={() => setOpen(false)} style={{ padding: '10px 0' }}>Shop</Link>
          {CATEGORIES.map((c) => (
            <Link key={c.slug} href={`/shop/${c.slug}/`} onClick={() => setOpen(false)} style={{ padding: '8px 0 8px 16px', fontSize: '0.92rem', color: 'var(--color-text-muted)' }}>
              {c.name}
            </Link>
          ))}
          <Link href="/blog/" onClick={() => setOpen(false)} style={{ padding: '10px 0' }}>Blog</Link>
          <Link href="/about/" onClick={() => setOpen(false)} style={{ padding: '10px 0' }}>About</Link>
          <Link href="/contact/" onClick={() => setOpen(false)} style={{ padding: '10px 0' }}>Contact</Link>
          <Link href="/faq/" onClick={() => setOpen(false)} style={{ padding: '10px 0' }}>FAQ</Link>
        </nav>
      )}

      <style>{`
        @media (max-width: 860px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: inline-flex !important; align-items: center; justify-content: center; }
        }
      `}</style>
    </header>
  )
}
