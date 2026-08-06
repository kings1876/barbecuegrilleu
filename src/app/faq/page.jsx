import Breadcrumbs from '@/components/Breadcrumbs'
import FaqAccordion from '@/components/FaqAccordion'
import { SITE, FAQS } from '@/config/site'

export const metadata = {
  title: 'FAQ',
  description: 'Answers to common questions about ordering, shipping, minimum order amount, and payment at Barbecue Grill Co.',
  alternates: { canonical: `https://${SITE.domain}/faq/` },
}

export default function FaqPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <div className="section">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="container" style={{ maxWidth: 760, margin: '0 auto' }}>
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'FAQ' }]} />
        <h1>Frequently Asked Questions</h1>
        <FaqAccordion faqs={FAQS} />
      </div>
    </div>
  )
}
