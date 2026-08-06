import Breadcrumbs from '@/components/Breadcrumbs'
import OrderFormClient from './OrderFormClient'
import { SITE, ORDER_RULES } from '@/config/site'

export const metadata = {
  title: 'Order Form',
  description: 'Place an order for barbecue grills. Minimum order $500, crypto payment only, 10% crypto discount.',
  alternates: { canonical: `https://${SITE.domain}/order/` },
}

export default function OrderPage() {
  return (
    <div className="section">
      <div className="container" style={{ maxWidth: 620, margin: '0 auto' }}>
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Order' }]} />
        <h1>Order Form</h1>
        <p style={{ color: 'var(--color-text-muted)' }}>
          Minimum order ${ORDER_RULES.minOrder}. Free shipping over ${ORDER_RULES.freeShippingOver}, otherwise a flat $
          {ORDER_RULES.flatShippingFee} shipping fee applies. Payment is by cryptocurrency (BTC, USDT) — pay with crypto and
          get an automatic {ORDER_RULES.altPaymentDiscountPct}% discount. Submit this form and we'll follow up by email to
          confirm payment and shipping.
        </p>
        <OrderFormClient />
      </div>
    </div>
  )
}
