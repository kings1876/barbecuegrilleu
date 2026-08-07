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
    <header style={{ position: 'sticky', top: 0, background: '#fff', zIndex: 100, boxShadow: '0 1px 0 var(--color-border)' }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', minHeight: 88, gap: 16 }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/images/logo.png" alt={SITE.name} style={{ height: 58, width: 'auto', display: 'block' }} />
        </Link>

        <nav aria-label="Primary" className="nav-desktop" style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
          <div
            style={{ position: 'relative' }}
            onMouseEnter={() => setShopOpen(true)}
            onMouseLeave={() => setShopOpen(false)}
          >
            <Link href="/shop/" className="nav-link">
              Shop <span aria-hidden="true" style={{ fontSize: '0.7em', opacity: 0.7 }}>▾</span>
            </Link>
            {shopOpen && (
              <div
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: '#fff',
                  border: '1px solid var(--color-border)',
                  borderRadius: 12,
                  boxShadow: 'var(--shadow-lg)',
                  padding: 14,
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 4,
                  width: 440,
                }}
              >
                {CATEGORIES.map((c) => (
                  <Link key={c.slug} href={`/shop/${c.slug}/`} className="nav-dropdown-item">
                    {c.name}
                  </Link>
                ))}
                <Link href="/shop/" className="nav-dropdown-item" style={{ gridColumn: '1 / -1', fontWeight: 700, color: 'var(--color-primary)', borderTop: '1px solid var(--color-border)', marginTop: 4, paddingTop: 10 }}>
                  View All Products →
                </Link>
              </div>
            )}
          </div>
          <Link href="/blog/" className="nav-link">Blog</Link>
          <Link href="/about/" className="nav-link">About</Link>
          <Link href="/contact/" className="nav-link">Contact</Link>
          <Link href="/faq/" className="nav-link">FAQ</Link>
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Link href="/search/" aria-label="Search" className="nav-icon-btn">
            🔍
          </Link>
          <Link href="/cart/" aria-label={`Cart, ${cartCount} items`} className="nav-icon-btn" style={{ position: 'relative' }}>
            🛒
            {cartCount > 0 && (
              <span style={{ position: 'absolute', top: -2, right: -2, background: 'var(--color-primary)', color: '#fff', borderRadius: 999, fontSize: 11, minWidth: 18, height: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 4px', fontWeight: 700 }}>
                {cartCount}
              </span>
            )}
          </Link>
          <button
            className="nav-hamburger nav-icon-btn"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            style={{ display: 'none', border: 'none', cursor: 'pointer' }}
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {open && (
        <nav aria-label="Mobile" style={{ borderTop: '1px solid var(--color-border)', padding: '12px 20px 20px', display: 'flex', flexDirection: 'column', gap: 2, background: 'var(--color-bg-tint)' }}>
          <Link href="/shop/" onClick={() => setOpen(false)} style={{ padding: '10px 0', fontWeight: 700 }}>Shop All</Link>
          {CATEGORIES.map((c) => (
            <Link key={c.slug} href={`/shop/${c.slug}/`} onClick={() => setOpen(false)} style={{ padding: '8px 0 8px 16px', fontSize: '0.92rem', color: 'var(--color-text-muted)' }}>
              {c.name}
            </Link>
          ))}
          <div style={{ borderTop: '1px solid var(--color-border)', margin: '8px 0' }} />
          <Link href="/blog/" onClick={() => setOpen(false)} style={{ padding: '10px 0' }}>Blog</Link>
          <Link href="/about/" onClick={() => setOpen(false)} style={{ padding: '10px 0' }}>About</Link>
          <Link href="/contact/" onClick={() => setOpen(false)} style={{ padding: '10px 0' }}>Contact</Link>
          <Link href="/faq/" onClick={() => setOpen(false)} style={{ padding: '10px 0' }}>FAQ</Link>
        </nav>
      )}

      <style>{`
        .nav-link {
          font-weight: 600;
          font-size: 0.95rem;
          padding: 10px 14px;
          border-radius: 8px;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          transition: background 0.15s ease, color 0.15s ease;
        }
        .nav-link:hover {
          background: var(--color-bg-tint);
          color: var(--color-primary);
        }
        .nav-dropdown-item {
          padding: 10px 12px;
          border-radius: 8px;
          font-size: 0.92rem;
          font-weight: 500;
          transition: background 0.15s ease;
        }
        .nav-dropdown-item:hover {
          background: var(--color-bg-tint);
          color: var(--color-primary);
        }
        .nav-icon-btn {
          width: 40px;
          height: 40px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          background: var(--color-bg-tint);
          font-size: 1.05rem;
          transition: background 0.15s ease;
        }
        .nav-icon-btn:hover {
          background: var(--color-bg-tint-2);
        }
        @media (max-width: 860px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: inline-flex !important; }
        }
      `}</style>
    </header>
  )
}
