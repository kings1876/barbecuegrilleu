import Breadcrumbs from '@/components/Breadcrumbs'
import EncodedEmail from '@/components/EncodedEmail'
import { SITE } from '@/config/site'

export const metadata = {
  title: 'Refund Policy',
  description: 'Returns and refund policy for Barbecue Grill Co. orders.',
  alternates: { canonical: `https://${SITE.domain}/refund/` },
}

export default function RefundPage() {
  return (
    <div className="section">
      <div className="container" style={{ maxWidth: 720, margin: '0 auto' }}>
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Refund Policy' }]} />
        <h1>Refund Policy</h1>
        <p>
          Contact us at <EncodedEmail /> within 14 days of delivery if
          your order arrives damaged, defective, or incorrect. Include your order details and photos of the issue so we can
          process a resolution quickly.
        </p>
        <p>Because payment is processed via cryptocurrency, refunds are issued to the same wallet address used for payment.</p>
      </div>
    </div>
  )
}
