// Pre-ship crosscheck — scans the build output for the non-negotiable rules.
// Run after `npm run build` (Vercel) or `npm run build:static` (Cloudflare).
import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')

const isStatic = process.env.TARGET === 'static'
const outDir = isStatic ? path.join(root, 'out') : path.join(root, '.next/server/app')

let errors = 0
let warnings = 0
const fail = (msg) => {
  console.error(`FAIL: ${msg}`)
  errors++
}
const warn = (msg) => {
  console.warn(`WARN: ${msg}`)
  warnings++
}

if (!existsSync(outDir)) {
  console.error(`Build output not found at ${outDir}. Run the build first.`)
  process.exit(1)
}

function walk(dir, files = []) {
  for (const entry of readdirSync(dir)) {
    const full = path.join(dir, entry)
    const stat = statSync(full)
    if (stat.isDirectory()) walk(full, files)
    else if (entry.endsWith('.html')) files.push(full)
  }
  return files
}

const htmlFiles = walk(outDir)
console.log(`Scanning ${htmlFiles.length} HTML files in ${outDir}...`)

const RAW_EMAIL_RE = /barbecuegrillch@gmail\.com/i

for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8')
  const rel = path.relative(root, file)

  // Rule 3: exactly one H1
  const h1Count = (html.match(/<h1[\s>]/gi) || []).length
  if (h1Count !== 1) fail(`${rel}: expected exactly 1 <h1>, found ${h1Count}`)

  // Emails must be entity-encoded, never plaintext
  if (RAW_EMAIL_RE.test(html)) fail(`${rel}: plaintext email found — must be entity-encoded`)

  // Domain placeholder check
  if (html.includes('DOMAIN.com')) fail(`${rel}: DOMAIN.com placeholder present in production output`)

  // JSON-LD validity
  const ldMatches = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
  for (const m of ldMatches) {
    try {
      JSON.parse(m[1])
    } catch (e) {
      fail(`${rel}: invalid JSON-LD block — ${e.message}`)
    }
  }

  // viewport meta present
  if (!/<meta name="viewport"/.test(html)) fail(`${rel}: missing viewport meta tag`)

  // lang attribute present
  if (!/<html[^>]+lang="[a-z-]+"/i.test(html)) fail(`${rel}: missing <html lang="...">`)
}

// Agent-ready files present
const publicDir = isStatic ? outDir : path.join(root, 'public')
const requiredFiles = [
  'llms.txt',
  'auth.md',
  '.well-known/api-catalog',
  '.well-known/agent-skills/index.json',
  '.well-known/mcp/server-card.json',
  '.well-known/oauth-protected-resource',
  '.well-known/oauth-authorization-server',
  '.well-known/openid-configuration',
  '.well-known/acp.json',
  '.well-known/ucp',
  'js/webmcp.js',
]
for (const f of requiredFiles) {
  if (!existsSync(path.join(publicDir, f))) fail(`Missing agent-ready file: public/${f}`)
}

// Placeholder scan across generated agent files
for (const f of requiredFiles) {
  const p = path.join(publicDir, f)
  if (existsSync(p)) {
    const content = readFileSync(p, 'utf8')
    if (/\[DOMAIN\]|\[NUMBER\]|\[EMAIL\]/.test(content)) fail(`${f}: unreplaced placeholder found`)
  }
}

// Strategy docs must never ship
if (isStatic) {
  for (const leaked of ['docs', 'PROJECT.md', 'keyword-map.md']) {
    if (existsSync(path.join(outDir, leaked))) fail(`Strategy doc leaked into deploy output: ${leaked}`)
  }
}

// resend provider on static target is a ship-stopper
if (isStatic) {
  const siteRaw = readFileSync(path.join(root, 'src/config/site.js'), 'utf8')
  if (/provider:\s*'resend'/.test(siteRaw)) fail(`FORMS.provider is 'resend' on a static target — API routes do not exist in an export build`)
}

console.log(`\nCrosscheck complete: ${errors} error(s), ${warnings} warning(s).`)
if (errors > 0) process.exit(1)
