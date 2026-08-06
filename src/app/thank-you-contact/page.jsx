import Link from 'next/link'

export const metadata = {
  title: 'Thank You',
  robots: { index: false, follow: true },
}

export default function ThankYouContact() {
  return (
    <div className="section">
      <div className="container" style={{ textAlign: 'center', maxWidth: 480, margin: '0 auto' }}>
        <h1>Message Sent</h1>
        <p>Thanks for reaching out — we'll get back to you as soon as we can.</p>
        <Link href="/" className="btn btn-primary">Back to Home</Link>
      </div>
    </div>
  )
}
