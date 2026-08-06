import Breadcrumbs from '@/components/Breadcrumbs'
import EncodedEmail from '@/components/EncodedEmail'
import { SITE } from '@/config/site'

export const metadata = {
  title: 'Privacy Policy',
  description: 'How Barbecue Grill Co. collects, uses, and protects your information.',
  alternates: { canonical: `https://${SITE.domain}/privacy/` },
}

export default function PrivacyPage() {
  return (
    <div className="section">
      <div className="container" style={{ maxWidth: 720, margin: '0 auto' }}>
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Privacy Policy' }]} />
        <h1>Privacy Policy</h1>
        <p>
          We collect only the information you provide through our contact and order forms — name, email, shipping address,
          and order details — to respond to inquiries and fulfill orders. We do not sell or share your information with
          third parties beyond what's required to process payment and shipping.
        </p>
        <h2>Cookies</h2>
        <p>
          This site uses browser local storage to remember your cart contents between visits. No tracking cookies are set
          beyond what's required for basic site function.
        </p>
        <h2>Contact</h2>
        <p>
          Questions about this policy can be sent to <EncodedEmail />.
        </p>
      </div>
    </div>
  )
}
