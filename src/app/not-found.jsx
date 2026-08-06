import Link from 'next/link'

export const metadata = {
  title: 'Page Not Found',
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <div className="section">
      <div className="container" style={{ textAlign: 'center', maxWidth: 480, margin: '0 auto' }}>
        <h1>Page Not Found</h1>
        <p>The page you're looking for doesn't exist or has moved.</p>
        <Link href="/" className="btn btn-primary">Back to Home</Link>
      </div>
    </div>
  )
}
