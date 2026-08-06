'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import SmartImage from '@/components/SmartImage'
import QtyStepper from '@/components/QtyStepper'
import { ORDER_RULES, SITE } from '@/config/site'

function readCart() {
  try {
    return JSON.parse(localStorage.getItem('bg-cart') || '[]')
  } catch {
    return []
  }
}

function writeCart(cart) {
  localStorage.setItem('bg-cart', JSON.stringify(cart))
  window.dispatchEvent(new Event('bg-cart-updated'))
}

export default function CartPage() {
  const [cart, setCart] = useState([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setCart(readCart())
    setMounted(true)
  }, [])

  function updateQty(slug, qty) {
    const next = cart.map((i) => (i.slug === slug ? { ...i, qty } : i))
    setCart(next)
    writeCart(next)
  }

  function removeItem(slug) {
    const next = cart.filter((i) => i.slug !== slug)
    setCart(next)
    writeCart(next)
  }

  const subtotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0)
  const cryptoDiscount = subtotal * (ORDER_RULES.altPaymentDiscountPct / 100)
  const shipping = subtotal === 0 ? 0 : subtotal >= ORDER_RULES.freeShippingOver ? 0 : ORDER_RULES.flatShippingFee
  const total = subtotal - cryptoDiscount + shipping
  const belowMin = subtotal > 0 && subtotal < ORDER_RULES.minOrder

  if (!mounted) return null

  return (
    <div className="section">
      <div className="container">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Cart' }]} />
        <h1>Your Cart</h1>

        {cart.length === 0 ? (
          <div>
            <p>Your cart is empty.</p>
            <Link href="/shop/" className="btn btn-primary">Browse Grills</Link>
          </div>
        ) : (
          <div className="two-col" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 32, alignItems: 'start' }}>
            <div>
              {cart.map((item) => (
                <div key={item.slug} className="card" style={{ display: 'flex', gap: 16, padding: 16, marginBottom: 16, alignItems: 'center' }}>
                  <div className="product-frame" style={{ width: 90, height: 68, flexShrink: 0 }}>
                    <SmartImage src={item.image} alt={item.name} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <Link href={`/product/${item.slug}/`}>
                      <strong>{item.name}</strong>
                    </Link>
                    <p style={{ margin: '4px 0', color: 'var(--color-text-muted)' }}>${item.price} {SITE.currency}</p>
                    <QtyStepper qty={item.qty} onChange={(q) => updateQty(item.slug, q)} />
                  </div>
                  <button type="button" onClick={() => removeItem(item.slug)} aria-label={`Remove ${item.name}`} style={{ background: 'none', border: 'none', cursor: 'pointer', minWidth: 44, minHeight: 44 }}>
                    ✕
                  </button>
                </div>
              ))}
            </div>

            <div className="card" style={{ padding: 20 }}>
              <h2 style={{ fontSize: '1.1rem' }}>Order Summary</h2>
              <p style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Subtotal</span> <span>${subtotal.toLocaleString()}</span>
              </p>
              <p style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Crypto discount ({ORDER_RULES.altPaymentDiscountPct}%)</span> <span>−${cryptoDiscount.toLocaleString()}</span>
              </p>
              <p style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Shipping</span> <span>{shipping === 0 ? 'Free' : `$${shipping}`}</span>
              </p>
              <hr style={{ border: 'none', borderTop: '1px solid var(--color-border)' }} />
              <p style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: '1.1rem' }}>
                <span>Total</span> <span>${total.toLocaleString()}</span>
              </p>

              {belowMin && (
                <div className="form-status error">
                  Minimum order is ${ORDER_RULES.minOrder}. Add ${(ORDER_RULES.minOrder - subtotal).toLocaleString()} more to check out.
                </div>
              )}

              <Link
                href="/order/"
                className="btn btn-primary btn-block"
                style={belowMin ? { pointerEvents: 'none', opacity: 0.5 } : undefined}
                aria-disabled={belowMin}
              >
                Proceed to Order Form
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
