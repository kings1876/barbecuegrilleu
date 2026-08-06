import Link from 'next/link'

export const metadata = {
  title: 'Order Received',
  robots: { index: false, follow: true },
}

export default function ThankYouOrder() {
  return (
    <div className="section">
      <div className="container" style={{ textAlign: 'center', maxWidth: 480, margin: '0 auto' }}>
        <h1>Order Received</h1>
        <p>Thanks for your order — we'll follow up by email to confirm payment and shipping details.</p>
        <Link href="/" className="btn btn-primary">Back to Home</Link>
      </div>
    </div>
  )
}
