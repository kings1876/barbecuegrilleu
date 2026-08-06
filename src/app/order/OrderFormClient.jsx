'use client'

import { useEffect, useState } from 'react'
import WebForm from '@/components/WebForm'

export default function OrderFormClient() {
  const [summary, setSummary] = useState('Cart is empty — describe the products you want below.')

  useEffect(() => {
    try {
      const cart = JSON.parse(localStorage.getItem('bg-cart') || '[]')
      if (cart.length > 0) {
        const lines = cart.map((i) => `${i.qty} x ${i.name} — $${i.price} each`)
        const subtotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0)
        setSummary(`${lines.join('\n')}\n\nSubtotal: $${subtotal}`)
      }
    } catch {
      // localStorage unavailable — leave default summary
    }
  }, [])

  return (
    <WebForm subject="New Order — Barbecue Grill Co." redirectTo="/thank-you-order/" submitLabel="Submit Order">
      {({ syncReplyTo }) => (
        <>
          <label htmlFor="order-name">Full Name</label>
          <input id="order-name" name="name" type="text" required />

          <label htmlFor="order-email">Email</label>
          <input id="order-email" name="email" type="email" required onChange={syncReplyTo} />

          <label htmlFor="order-address">Shipping Address</label>
          <textarea id="order-address" name="address" required placeholder="Street, city, state, ZIP" />

          <label htmlFor="order-items">Order Details</label>
          <textarea
            id="order-items"
            name="order_items"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            required
          />

          <label htmlFor="order-notes">Notes (optional)</label>
          <textarea id="order-notes" name="notes" />
        </>
      )}
    </WebForm>
  )
}
