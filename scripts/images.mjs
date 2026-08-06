// Product image pipeline — normalises client photos into the white 4:3 frame.
// Not yet needed: this build ships placeholder SVGs directly in public/images/.
// Once real photography is dropped into assets/product-photos/, implement the
// trim -> white 4:3 canvas -> adaptive WebP/AVIF pipeline described in the
// WebForge skill (references/performance.md) and wire it up here.
import { readdirSync, existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const photosDir = path.join(root, 'assets/product-photos')

if (!existsSync(photosDir) || readdirSync(photosDir).length === 0) {
  console.log('No source photos found in assets/product-photos/ — nothing to process.')
  console.log('Products currently use placeholder SVGs in public/images/. Add real photos and re-run this script once the image pipeline is implemented.')
  process.exit(0)
}

console.log('Photos found, but the image-processing pipeline is not yet implemented in this build.')
