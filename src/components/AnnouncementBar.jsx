'use client'

import { useState, useEffect } from 'react'
import { ORDER_RULES } from '@/config/site'

const SLIDES = [
  `Free shipping on orders over $${ORDER_RULES.freeShippingOver.toLocaleString()}`,
  `Pay with ${ORDER_RULES.altPaymentLabel.toLowerCase()} and get ${ORDER_RULES.altPaymentDiscountPct}% off automatically`,
  `Minimum order $${ORDER_RULES.minOrder} · Ships nationwide across the US`,
  '9 grill categories · 90+ products in stock',
]

export default function AnnouncementBar() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div
      style={{
        background: 'var(--color-accent)',
        color: '#fff',
        textAlign: 'center',
        fontSize: '0.82rem',
        fontWeight: 600,
        letterSpacing: '0.01em',
        padding: '8px 16px',
        overflow: 'hidden',
      }}
    >
      <span key={index} className="announcement-slide">
        {SLIDES[index]}
      </span>
      <style>{`
        .announcement-slide {
          display: inline-block;
          animation: announcement-fade 0.4s ease;
        }
        @keyframes announcement-fade {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .announcement-slide { animation: none; }
        }
      `}</style>
    </div>
  )
}
