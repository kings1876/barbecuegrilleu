import Link from 'next/link'
import { SITE, CATEGORIES } from '@/config/site'

export default function Footer() {
  const emailEncoded = SITE.contactEmailRaw
    .split('')
    .map((c) => `&#${c.charCodeAt(0)};`)
    .join('')

  return (
    <footer style={{ background: 'var(--color-accent)', color: '#e5e7eb', paddingTop: '3rem', paddingBottom: '1.5rem' }}>
      <div className="container">
        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr 1fr 1fr', gap: '2rem', paddingBottom: '2rem' }}>
          <div>
            <div style={{ fontWeight: 800, fontSize: '1.2rem', marginBottom: '0.5rem', color: '#fff' }}>{SITE.name}</div>
            <p style={{ color: '#cbd5e1', maxWidth: 320 }}>{SITE.tagline}</p>
            <p style={{ color: '#cbd5e1' }}>
              Email: <span dangerouslySetInnerHTML={{ __html: emailEncoded }} />
            </p>
            <p style={{ color: '#cbd5e1', fontSize: '0.82rem' }}>
              Not intended to diagnose, treat, cure, or prevent any condition. Prices in {SITE.currency}. {ORDER_RULES_NOTE}
            </p>
          </div>

          <div>
            <h3 style={{ color: '#fff', fontSize: '1rem' }}>Shop</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {CATEGORIES.map((c) => (
                <li key={c.slug}>
                  <Link href={`/shop/${c.slug}/`} style={{ color: '#cbd5e1' }}>
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 style={{ color: '#fff', fontSize: '1rem' }}>Company</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><Link href="/about/" style={{ color: '#cbd5e1' }}>About</Link></li>
              <li><Link href="/blog/" style={{ color: '#cbd5e1' }}>Blog</Link></li>
              <li><Link href="/contact/" style={{ color: '#cbd5e1' }}>Contact</Link></li>
              <li><Link href="/faq/" style={{ color: '#cbd5e1' }}>FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h3 style={{ color: '#fff', fontSize: '1rem' }}>Legal</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><Link href="/shipping/" style={{ color: '#cbd5e1' }}>Shipping</Link></li>
              <li><Link href="/refund/" style={{ color: '#cbd5e1' }}>Refund Policy</Link></li>
              <li><Link href="/privacy/" style={{ color: '#cbd5e1' }}>Privacy Policy</Link></li>
              <li><Link href="/terms/" style={{ color: '#cbd5e1' }}>Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '1.25rem', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', color: '#9ca3af', fontSize: '0.85rem' }}>
          <span>&copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.</span>
          <span>Ships {SITE.shipsTo}. Payment: Crypto only.</span>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 560px) {
          .footer-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </footer>
  )
}

const ORDER_RULES_NOTE = 'Minimum order applies at checkout.'
