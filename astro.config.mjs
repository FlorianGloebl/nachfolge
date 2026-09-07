// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// When deployed to GitHub Pages without a custom domain, the site is served
// from https://<user>.github.io/<repo>/ — set BASE_PATH in that workflow run.
// Now that the custom domain (www.nachfolge.g-u-p.de via CNAME) is the deploy
// target, this stays "/". Once DNS for the custom domain is live and verified,
// the BASE_PATH override in .github/workflows/deploy-pages.yml can be removed.
const base = process.env.BASE_PATH || '/';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.nachfolge.g-u-p.de',
  base,
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()]
  }
});
