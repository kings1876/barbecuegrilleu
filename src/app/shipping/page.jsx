import Breadcrumbs from '@/components/Breadcrumbs'
import { SITE, ORDER_RULES } from '@/config/site'

export const metadata = {
  title: 'Shipping Policy',
  description: 'Shipping rates, thresholds, and delivery information for Barbecue Grill Co. orders.',
  alternates: { canonical: `https://${SITE.domain}/shipping/` },
}

export default function ShippingPage() {
  return (
    <div className="section">
      <div className="container" style={{ maxWidth: 720, margin: '0 auto' }}>
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Shipping' }]} />
        <h1>Shipping Policy</h1>
        <p>{SITE.name} ships {SITE.shipsTo.toLowerCase()}.</p>
        <h2>Rates</h2>
        <ul>
          <li>Free shipping on orders over ${ORDER_RULES.freeShippingOver}</li>
          <li>Flat ${ORDER_RULES.flatShippingFee} shipping fee on orders under ${ORDER_RULES.freeShippingOver}</li>
          <li>Minimum order amount: ${ORDER_RULES.minOrder}</li>
        </ul>
        <h2>Processing Time</h2>
        <p>Orders are processed after payment confirmation. You'll receive shipping and tracking details by email once your order ships.</p>
      </div>
    </div>
  )
}
