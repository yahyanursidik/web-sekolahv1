// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import netlify from '@astrojs/netlify';

import react from '@astrojs/react';

const isNetlifyBuild = process.env.NETLIFY === 'true' || process.env.NETLIFY === '1' || process.env.ASTRO_NETLIFY === '1';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [react()],
  ...(isNetlifyBuild
    ? {
        output: 'server',
        adapter: netlify()
      }
    : {})
});
