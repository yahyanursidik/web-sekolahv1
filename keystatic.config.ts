import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
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
        calendarUrl: fields.url({ label: 'URL Kalender Akademik (Drive/PDF)', description: 'Tautan untuk tombol Download Kalender' }),
        mapsUrl: fields.url({ label: 'URL Google Maps Embed', description: 'URL src dari iframe Google Maps (dimulai dengan https://www.google.com/maps/embed?...)' }),
      },
    }),
  },
});
