import Breadcrumbs from '@/components/Breadcrumbs'
import EncodedEmail from '@/components/EncodedEmail'
import { SITE, ORDER_RULES } from '@/config/site'

export const metadata = {
  title: 'Terms of Service',
  description: 'Terms of service for purchases made through Barbecue Grill Co.',
  alternates: { canonical: `https://${SITE.domain}/terms/` },
}

export default function TermsPage() {
  return (
    <div className="section">
      <div className="container" style={{ maxWidth: 720, margin: '0 auto' }}>
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Terms of Service' }]} />
        <h1>Terms of Service</h1>
        <p>By placing an order with {SITE.name}, you agree to the following terms:</p>
        <ul>
          <li>Minimum order amount is ${ORDER_RULES.minOrder}.</li>
          <li>Payment is accepted via cryptocurrency (BTC, USDT) only.</li>
          <li>Orders are confirmed by email after submission through our order form.</li>
          <li>Prices are listed in {SITE.currency} and subject to change without notice.</li>
        </ul>
        <p>
          For questions about these terms, contact us at <EncodedEmail />.
        </p>
      </div>
    </div>
  )
}
