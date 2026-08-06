import Link from 'next/link'
import SmartImage from './SmartImage'
import { SITE } from '@/config/site'

export default function ProductCard({ product }) {
  return (
    <div className="card product-card">
      <Link href={`/product/${product.slug}/`} aria-label={product.name}>
        <div className="product-frame">
          <SmartImage src={product.images[0]} alt={product.name} />
        </div>
      </Link>
      <div className="product-card-body">
        {product.badge && product.badge !== 'none' && <span className="badge">{product.badge}</span>}
        <Link href={`/product/${product.slug}/`}>
          <h3 style={{ fontSize: '1.02rem', margin: '4px 0' }}>{product.name}</h3>
        </Link>
        <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', margin: 0 }}>{product.short}</p>
        <div className="product-card-price">
          ${product.price.toLocaleString()} {SITE.currency}
        </div>
        <Link href={`/product/${product.slug}/`} className="btn btn-primary btn-block" style={{ marginTop: 8 }}>
          Add to Cart
        </Link>
      </div>
    </div>
  )
}
