// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import netlify from '@astrojs/netlify';

import react from '@astrojs/react';

const isNetlifyBuild = process.env.NETLIFY === 'true' || process.env.NETLIFY === '1' || process.env.ASTRO_NETLIFY === '1';

// https://astro.build/config
export default defineConfig({
  site: 'https://tslabschool.sch.id',

  // Rute lama dipertahankan agar tautan dan SEO tidak rusak
  // (design system §2 — sitemap & redirect).
  redirects: {
    '/preschool': '/program/preschool-reguler',
    '/preschool-hbl': '/program/preschool-hbl',
    '/elementary': '/program/elementary',
    '/pendidikan': '/pendekatan',
    '/kehidupan-sekolah': '/cerita-belajar',
    '/fasilitas': '/cerita-belajar',
    '/profil': '/tentang',
  },

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
