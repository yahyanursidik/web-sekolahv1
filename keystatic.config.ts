import { config, fields, collection, singleton } from '@keystatic/core';

// Menggunakan local storage saat development (npm run dev), dan GitHub storage saat production (di Netlify)
const isDev = process.env.NODE_ENV === 'development';

export default config({
  storage: isDev 
    ? { kind: 'local' }
    : { 
        kind: 'github', 
        repo: 'yahyanursidik/web-sekolahv1'
      },
  collections: {
    artikel: collection({
      label: 'Artikel',
      slugField: 'title',
      path: 'src/content/artikel/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Judul Artikel' } }),
        category: fields.select({
          label: 'Kategori',
          options: [
            { label: 'Parenting Islami', value: 'Parenting Islami' },
            { label: 'Pendidikan Anak', value: 'Pendidikan Anak' },
            { label: 'Al-Qur\'an', value: 'Al-Qur\'an' },
            { label: 'Adab & Akhlak', value: 'Adab & Akhlak' },
            { label: 'Kegiatan Sekolah', value: 'Kegiatan Sekolah' },
          ],
          defaultValue: 'Parenting Islami',
        }),
        date: fields.date({ label: 'Tanggal Terbit' }),
        description: fields.text({ label: 'Deskripsi Singkat (SEO & Cuplikan)', multiline: true }),
        thumbnail: fields.image({
          label: 'Gambar Thumbnail',
          directory: 'public/images/blog',
          publicPath: '/images/blog',
        }),
        isEditorChoice: fields.checkbox({
          label: 'Jadikan Pilihan Editor (Tampil Besar di Atas)',
          defaultValue: false,
        }),
        content: fields.markdoc({ label: 'Konten Artikel' }),
      },
    }),
  },
  singletons: {
    settings: singleton({
      label: 'Pengaturan Global',
      path: 'src/content/settings/global',
      format: { data: 'json' },
      schema: {
        favicon: fields.image({
          label: 'Favicon Website',
          description: 'Ikon kecil yang muncul di tab browser (disarankan format persegi, misal 512x512)',
          directory: 'public/images/favicon',
          publicPath: '/images/favicon',
        }),
        calendarUrl: fields.url({ label: 'URL Kalender Akademik (Drive/PDF)', description: 'Tautan untuk tombol Download Kalender' }),
        mapsUrl: fields.url({ label: 'URL Google Maps Embed', description: 'URL src dari iframe Google Maps (dimulai dengan https://www.google.com/maps/embed?...)' }),
      },
    }),
    faq: singleton({
      label: 'Halaman FAQ',
      path: 'src/content/settings/faq',
      format: { data: 'json' },
      schema: {
        title: fields.text({ label: 'Judul Halaman FAQ', defaultValue: 'Frequently Asked Questions' }),
        description: fields.text({ label: 'Deskripsi Singkat', multiline: true }),
        sections: fields.array(
          fields.object({
            title: fields.text({ label: 'Judul Kategori / Section' }),
            faqs: fields.array(
              fields.object({
                question: fields.text({ label: 'Pertanyaan' }),
                answer: fields.text({ label: 'Jawaban', multiline: true }),
              }),
              {
                label: 'Daftar FAQ',
                itemLabel: props => props.fields.question.value || 'FAQ Baru',
              }
            )
          }),
          {
            label: 'Kategori FAQ',
            itemLabel: props => props.fields.title.value || 'Kategori Baru',
          }
        ),
      },
    }),
  },
});
