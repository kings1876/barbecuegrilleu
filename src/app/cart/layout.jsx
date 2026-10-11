// Utility page: keep out of the search index (the page itself is a client component, so the
// metadata lives in this layout).
export const metadata = {
  title: 'Cart',
  robots: { index: false, follow: true },
}

export default function Layout({ children }) {
  return children
}
