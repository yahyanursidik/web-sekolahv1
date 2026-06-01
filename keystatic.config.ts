import { config, fields, collection } from '@keystatic/core';

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
    pengumuman: collection({
      label: 'Pengumuman',
      slugField: 'title',
      path: 'src/content/pengumuman/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Judul Pengumuman' } }),
        date: fields.date({ label: 'Tanggal' }),
        kategori: fields.select({
            label: 'Kategori Pengumuman',
            options: [
                { label: 'SPMB', value: 'SPMB' },
                { label: 'Akademik', value: 'AKADEMIK' },
                { label: 'Umum', value: 'UMUM' },
            ],
            defaultValue: 'UMUM',
        }),
        content: fields.markdoc({ label: 'Isi Pengumuman' }),
      },
    }),
  },
});
