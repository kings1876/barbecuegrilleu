import { notFound } from 'next/navigation'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import { SITE, POSTS, CATEGORIES } from '@/config/site'

const BODY = {
  'charcoal-vs-gas-grill-which-is-right-for-you': `
    <p>Choosing between charcoal and gas usually comes down to what you value more on a Tuesday night: flavor and control, or speed and convenience. Neither is objectively "better" — they're built for different cooking styles.</p>
    <h2>Charcoal: more control, more flavor, more patience</h2>
    <p>A charcoal grill like our <a href="/product/ember-45-charcoal-kettle/">Ember 45 Charcoal Kettle</a> gives you direct control over heat zones by how you arrange your coals, and the smoke itself becomes part of the flavor. The tradeoff is setup and cleanup time — lighting charcoal and waiting for it to ash over takes 15-20 minutes before you're cooking.</p>
    <h2>Gas: fast, consistent, low-maintenance</h2>
    <p>A gas grill like the <a href="/product/summit-3-burner-gas-grill/">Summit 3-Burner</a> lights in seconds and holds a steady temperature with a turn of a dial. You lose some of the smoky depth charcoal provides, but you gain the ability to cook a weeknight dinner without a 30-minute commitment.</p>
    <h2>Our take</h2>
    <p>If you grill several times a week and want convenience, go gas. If grilling is a weekend event and flavor is the priority, charcoal is worth the extra time. Plenty of serious cooks end up owning one of each.</p>
  `,
  'how-to-set-up-a-pellet-grill-for-first-time-users': `
    <p>Pellet grills reward a careful first setup — get the basics right and every cook after gets easier.</p>
    <h2>1. Prime the auger</h2>
    <p>Before your first cook, run the auger with the lid open until pellets are actively feeding into the firepot. Skipping this step is the most common reason a first cook fails to ignite properly.</p>
    <h2>2. Season the grill</h2>
    <p>Run the grill empty at a high temperature (around 400°F) for 30-45 minutes before cooking anything. This burns off manufacturing residue and starts building seasoning on the grates.</p>
    <h2>3. Start with a simple, forgiving cook</h2>
    <p>Save the 12-hour brisket for your third or fourth cook. Start with something like chicken thighs or a pork shoulder that tolerates small temperature swings while you learn how your specific grill holds heat.</p>
    <h2>4. Use the probe, not just the dial</h2>
    <p>A grill like the <a href="/product/ridgeline-pro-pellet-grill/">Ridgeline Pro</a> includes dual meat probes — use them. Grill-set temperature and actual meat temperature are two different things, and the probe is what tells you when food is actually done.</p>
  `,
  'best-grills-for-small-patios-and-balconies': `
    <p>Plenty of apartment leases and condo HOAs prohibit open-flame grills entirely — no charcoal, no propane. That doesn't mean you're stuck with a pan on the stove.</p>
    <h2>Electric grills close the gap</h2>
    <p>An electric grill like the <a href="/product/patio-pro-electric-grill/">Patio Pro</a> uses a high-wattage heating element and a ridged cast iron grate to produce real sear marks and grill-style char, without an open flame or fuel tank.</p>
    <h2>What to look for</h2>
    <p>Prioritize a model with a real thermostat rather than a single on/off switch — the <a href="/product/skyline-xl-electric-grill/">Skyline XL</a> is a good example, giving you actual temperature control for anything from a slow-cooked chicken thigh to a quick sear. A removable drip tray also makes a big difference in cleanup on a small balcony.</p>
    <h2>Check your building rules first</h2>
    <p>Even electric grills are restricted in some buildings, so confirm your lease or HOA rules before buying. When they're allowed, an electric grill is the closest you'll get to real grill-grate results without a live flame.</p>
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
          {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
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
