'use client'

import { useState } from 'react'
import SmartImage from './SmartImage'

export default function ProductGallery({ images, alt }) {
  const [active, setActive] = useState(0)

  return (
    <div>
      <div className="product-frame">
        <SmartImage src={images[active]} alt={alt} priority />
      </div>
      {images.length > 1 && (
        <div style={{ display: 'flex', gap: 8, marginTop: 10 }}>
          {images.map((img, i) => (
            <button
              key={img}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show image ${i + 1} of ${images.length}`}
              aria-current={i === active}
              className="gallery-thumb"
              style={{
                width: 64,
                height: 64,
                padding: 0,
                border: i === active ? '2px solid var(--color-primary)' : '1px solid var(--color-border)',
                borderRadius: 8,
                overflow: 'hidden',
                cursor: 'pointer',
                background: '#fff',
                flexShrink: 0,
              }}
            >
              <SmartImage src={img} alt="" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
