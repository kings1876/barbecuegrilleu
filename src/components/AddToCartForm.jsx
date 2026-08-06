'use client'

import { useState } from 'react'
import QtyStepper from './QtyStepper'

export function addToCart(product, qty) {
  const cart = JSON.parse(localStorage.getItem('bg-cart') || '[]')
  const existing = cart.find((i) => i.slug === product.slug)
  if (existing) {
    existing.qty += qty
  } else {
    cart.push({ slug: product.slug, name: product.name, price: product.price, image: product.images[0], qty })
  }
  localStorage.setItem('bg-cart', JSON.stringify(cart))
  window.dispatchEvent(new Event('bg-cart-updated'))
}

export default function AddToCartForm({ product }) {
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)

  function handleAdd() {
    addToCart(product, qty)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap', marginTop: 16 }}>
      <QtyStepper qty={qty} onChange={setQty} />
      <button type="button" className="btn btn-primary" onClick={handleAdd}>
        {added ? 'Added ✓' : 'Add to Cart'}
      </button>
    </div>
  )
}
