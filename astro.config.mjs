// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// When deployed to GitHub Pages without a custom domain, the site is served
// from https://<user>.github.io/<repo>/ — set BASE_PATH in that workflow run.
// With the planned custom domain (nachfolge.g-u-p.de via CNAME) this stays "/".
const base = process.env.BASE_PATH || '/';

// https://astro.build/config
export default defineConfig({
  site: 'https://nachfolge.g-u-p.de',
  base,
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()]
  }
});
