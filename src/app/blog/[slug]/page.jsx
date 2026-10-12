import { notFound } from 'next/navigation'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import { SITE, POSTS, CATEGORIES } from '@/config/site'

const BODY = {
  'charcoal-vs-gas-grill-which-is-right-for-you': `
    <p>Choosing between a gas BBQ and a charcoal BBQ usually comes down to what you value more on a Tuesday night: speed and convenience, or flavour and control. Neither is objectively better. They suit different cooks.</p>
    <h2>Gas BBQ: fast, consistent, low-maintenance</h2>
    <p>A gas BBQ like the <a href="/product/weber-spirit-ii-e-310-gas-grill/">Weber Spirit II E-310</a> lights at the push of a button and holds a steady temperature with a turn of a dial. You give up some of the smoky depth charcoal provides, but a weeknight dinner doesn't need a long warm-up. Gas models are sold for LPG (a gas bottle) or natural gas (a fixed gas line), so check which one your outdoor area is set up for. Our <a href="/shop/gas-grills/">gas BBQs</a> range from compact two-burner models to the Napoleon <a href="/product/napoleon-rogue-425-gas-grill/">Rogue 425</a> and larger Prestige series.</p>
    <h2>Charcoal BBQ: more flavour, more patience</h2>
    <p>A kettle like the <a href="/product/weber-original-kettle-premium-22-black/">Weber Original Kettle</a> gives you direct control over heat zones by how you arrange the coals, and the smoke becomes part of the flavour. The tradeoff is time: lighting charcoal and waiting for it to ash over takes a while before you can cook, and cleanup is messier. Browse the full <a href="/shop/charcoal-grills/">charcoal BBQ range</a>.</p>
    <h2>Fire restrictions and where you live</h2>
    <p>Charcoal and wood fires are usually restricted on days of high fire danger, and many apartment buildings limit gas or charcoal on balconies. Check your state's fire authority and your strata or lease rules before you buy. If a flame isn't allowed, an <a href="/shop/electric-grills/">electric BBQ</a> may be the answer.</p>
    <h2>Our take</h2>
    <p>If you cook several times a week and want convenience, go gas. If cooking is a weekend event and flavour is the priority, charcoal is worth the extra time. If you want charcoal flavour with steady heat for long cooks, look at a <a href="/shop/kamado-grills/">kamado</a>. Plenty of serious cooks end up owning more than one type.</p>
  `,
  'how-to-set-up-a-pellet-grill-for-first-time-users': `
    <p>A pellet BBQ rewards a careful first setup. Get the basics right and every cook after gets easier. Always follow the setup steps in your model's manual first; the points below are general good practice.</p>
    <h2>1. Prime the auger</h2>
    <p>Most pellet BBQs need the auger to fill with pellets before the first start-up, as the manual describes. Skipping this is a common reason a first cook fails to ignite properly.</p>
    <h2>2. Season the BBQ</h2>
    <p>Run it empty at a high temperature (around 200°C) for 30-45 minutes before cooking anything, unless your manual says otherwise. This burns off manufacturing residue and starts building seasoning on the grates.</p>
    <h2>3. Start with a simple, forgiving cook</h2>
    <p>Save the 12-hour brisket for your third or fourth cook. Start with chicken thighs or a pork shoulder that tolerates small temperature swings while you learn how your BBQ holds heat.</p>
    <h2>4. Use the probe, not just the dial</h2>
    <p>The <a href="/product/traeger-pro-575-pellet-grill/">Traeger Pro 575</a> includes a meat probe, and the <a href="/product/weber-smokefire-ex4-pellet-grill/">Weber SmokeFire EX4</a> is Wi-Fi enabled for monitoring a cook from your phone. Either way, the set temperature and the meat's actual temperature are two different things, and the probe is what tells you when food is done.</p>
    <h2>Choosing a pellet BBQ</h2>
    <p>See the full <a href="/shop/pellet-grills/">pellet BBQ range</a>, or compare with a <a href="/shop/bbq-smokers/">charcoal smoker</a> if you prefer a hands-on cook.</p>
  `,
  'best-grills-for-small-patios-and-balconies': `
    <p>Plenty of apartment leases and strata (owners corporation) rules prohibit open-flame BBQs, with no charcoal and sometimes no gas. That doesn't mean you're stuck with a pan on the stove.</p>
    <h2>Electric BBQs close the gap</h2>
    <p>The <a href="/product/weber-pulse-1000-electric-grill/">Weber Pulse 1000</a> is a compact electric BBQ with porcelain-enamelled cast iron grates over an electric heating element, so you get real sear marks without gas or charcoal. At about 14 kg it's easy to place on a small balcony or patio.</p>
    <h2>If you cook for more people</h2>
    <p>The <a href="/product/weber-pulse-2000-electric-grill/">Weber Pulse 2000</a> has a larger cooking area on a rolling cart, plus app-connected temperature control, so you give up less capacity going electric. Allow for the extra space: its cart is about 112 cm wide with the side table up.</p>
    <h2>Check your building rules first</h2>
    <p>Even electric BBQs are restricted in some buildings, and they need a nearby power point. Confirm your lease or strata rules before buying. Browse all <a href="/shop/electric-grills/">electric BBQs</a>.</p>
  `,
}

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }) {
  const post = POSTS.find((p) => p.slug === params.slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt.slice(0, 158),
    alternates: { canonical: `https://${SITE.domain}/blog/${post.slug}/` },
  }
}

export default function BlogPostPage({ params }) {
  const post = POSTS.find((p) => p.slug === params.slug)
  if (!post) notFound()
  const category = CATEGORIES.find((c) => c.slug === post.category)

  const postSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Organization', name: SITE.name },
    publisher: { '@type': 'Organization', name: SITE.name },
    mainEntityOfPage: `https://${SITE.domain}/blog/${post.slug}/`,
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `https://${SITE.domain}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `https://${SITE.domain}/blog/` },
      { '@type': 'ListItem', position: 3, name: post.title, item: `https://${SITE.domain}/blog/${post.slug}/` },
    ],
  }

  return (
    <div className="section">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(postSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="container" style={{ maxWidth: 760, margin: '0 auto' }}>
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog/' }, { label: post.title }]} />
        <span style={{ fontSize: '0.8rem', color: 'var(--color-primary)', fontWeight: 600 }}>
          {new Date(post.date).toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' })}
        </span>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: BODY[post.slug] || `<p>${post.excerpt}</p>` }} />
        <p style={{ marginTop: 32 }}>
          Related: <Link href={`/shop/${category.slug}/`}>Shop {category.name}</Link>
        </p>
      </div>
    </div>
  )
}
