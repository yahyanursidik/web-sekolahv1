// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import netlify from '@astrojs/netlify';

import react from '@astrojs/react';

const isNetlifyBuild =
  process.env.NETLIFY === 'true' || process.env.NETLIFY === '1' || process.env.ASTRO_NETLIFY === '1';

// https://astro.build/config
export default defineConfig({
  site: 'https://tslabschool.sch.id',

  // Seluruh isi situs statis — tidak ada rute API, form server, atau data
  // dinamis. Output "static" membuat semua halaman, termasuk rute dinamis
  // /program/[slug], dirender saat build.
  //
  // JANGAN kembalikan ke "server". Dalam mode itu Astro MENGABAIKAN
  // getStaticPaths(), sehingga /program/<slug> dirender tanpa props dan
  // halamannya tampil kosong. Bila suatu saat memang perlu SSR, tambahkan
  // `export const prerender = true` pada setiap rute dinamis.
  output: 'static',

  // Adapter hanya dipasang saat build di Netlify, supaya _redirects ditulis
  // sebagai 301 asli. Di lokal adapter sengaja tidak dipasang karena
  // @astrojs/netlify membuat perintah `astro preview` tidak dapat dijalankan.
  ...(isNetlifyBuild ? { adapter: netlify() } : {}),

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
});
