import Breadcrumbs from '@/components/Breadcrumbs'
import ContactFormClient from './ContactFormClient'
import { SITE } from '@/config/site'

export const metadata = {
  title: 'Contact Us',
  description: 'Contact Barbecue Grill Co. with questions about products, orders, or shipping.',
  alternates: { canonical: `https://${SITE.domain}/contact/` },
}

export default function ContactPage() {
  return (
    <div className="section">
      <div className="container" style={{ maxWidth: 560, margin: '0 auto' }}>
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Contact' }]} />
        <h1>Contact Us</h1>
        <p style={{ color: 'var(--color-text-muted)' }}>
          Have a question about a product, an order, or shipping? Send us a message and we'll get back to you.
        </p>
        <ContactFormClient />
      </div>
    </div>
  )
}
