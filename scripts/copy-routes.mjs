import { copyFileSync, existsSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const distDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'dist')
const indexPath = join(distDir, 'index.html')

if (!existsSync(indexPath)) {
  throw new Error('dist/index.html was not found. Run vite build before copying route entries.')
}

const routeEntries = [
  '404.html',
  'committees.html',
  'contact.html',
  'guidance.html',
  'information.html',
  'news.html',
  'speakers.html',
  'timeline.html',
  'topics.html',
]

for (const entry of routeEntries) {
  copyFileSync(indexPath, join(distDir, entry))
}
