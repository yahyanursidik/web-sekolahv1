// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import netlify from '@astrojs/netlify';

import react from '@astrojs/react';

const isLocalDev = process.env.ASTRO_LOCAL === '1';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [react()],
  ...(isLocalDev
    ? {}
    : {
        output: 'server',
        adapter: netlify()
      })
});
