import { SITE } from '@/config/site'

function encode(str) {
  return str
    .split('')
    .map((c) => `&#${c.charCodeAt(0)};`)
    .join('')
}

export default function EncodedEmail({ email = SITE.contactEmailRaw, asLink = true }) {
  const encoded = encode(email)
  const hrefEncoded = `mailto:${encoded}`
  if (!asLink) {
    return <span dangerouslySetInnerHTML={{ __html: encoded }} />
  }
  return <span dangerouslySetInnerHTML={{ __html: `<a href="${hrefEncoded}">${encoded}</a>` }} />
}
