# Sekolah Tarbiyah Sunnah Bandung

Situs publik [tslabschool.sch.id](https://tslabschool.sch.id) — sekolah Islam di
Bandung yang mendampingi anak bertumbuh sesuai tahap perkembangannya di atas
fondasi Al-Qur'an dan As-Sunnah sesuai pemahaman Salafus Shalih.

Situs ini berfungsi sebagai etalase publik, tempat keluarga mengenali program,
lalu mengarah ke portal SPMB. Pendaftaran dan akun wali murid berjalan di luar
repositori ini, pada **TSLS Hub**.

**Kampanye:** MOVE. LEARN. GROW.
**Versi:** 1.0.0 · lihat [CHANGELOG.md](CHANGELOG.md)

## Menjalankan secara lokal

Butuh Node.js 22.12 atau lebih baru.

```bash
npm install
npm run dev
```

| Perintah | Kegunaan |
| --- | --- |
| `npm run dev` | Server pengembangan di `localhost:4321` |
| `npm run build` | Build produksi ke `./dist/` |
| `npm run preview` | Menyajikan hasil build secara lokal |

> **Catatan Astro 7.4.** Versi ini mengunci proses dev dan preview. Bila muncul
> pesan `Another astro dev server is already running`, hentikan dengan
> `npx astro dev stop` atau jalankan ulang memakai `--force`.

## Tiga program

Seluruh isi program berasal dari satu berkas, `src/data/programs.ts`. Ubah di
sana, dan perubahannya ikut di beranda, mega menu, halaman `/program`, halaman
detail, footer, serta Program Finder.

| Unit | Usia | Mode | URL |
| --- | --- | --- | --- |
| TK Tarbiyah Sunnah Bandung Reguler | 3–6 tahun | Onsite | `/program/preschool-reguler` |
| TK Tarbiyah Sunnah Bandung HBL | 3–6 tahun | Home-based | `/program/preschool-hbl` |
| SD Tarbiyah Sunnah Bandung | 6–12 tahun | Onsite | `/program/elementary` |

Slug URL sengaja dipertahankan dari struktur sebelumnya agar redirect dan
tautan lama tidak perlu dirombak.

## Struktur proyek

```text
src/
├── data/
│   ├── programs.ts        ← sumber tunggal data program
│   └── constants.ts       ← nama sekolah, alamat, tautan eksternal, tahun SPMB
├── content/settings/
│   ├── faq.json           ← 70 pertanyaan dalam 16 kategori
│   └── global.json        ← favicon dan URL peta
├── styles/
│   ├── global.css         ← reset, @theme Tailwind, komponen global
│   └── tsls.css           ← UI kit design system
├── components/
│   ├── Header.astro       ← topbar, mega menu, drawer mobile
│   ├── Footer.astro
│   ├── ProgramFinder.astro
│   └── ui/                ← SectionHead, ProgramCard, PageHero, CtaBand, FaqAccordion
├── layouts/Layout.astro   ← kerangka HTML, metadata, Open Graph
└── pages/                 ← satu berkas per rute
tokens.css                 ← token warna, tipografi, spasi, bentuk
```

## Design system

Dua berkas yang menjadi acuan, dan keduanya harus dibaca sebelum menambah pola
visual baru:

- **`tokens.css`** — nilai dasar. Palet, tipografi, skala spasi, radius, durasi.
- **`src/styles/tsls.css`** — komponen yang dibangun dari token tersebut.

Yang perlu diingat saat mengembangkan:

- **Warna pilar hanya untuk aksen.** MOVE `#F1A578`, LEARN `#8EC9D2`, GROW
  `#A7C99A` dipakai sebagai penanda, bukan latar berwarna besar yang berulang.
  Informasi tidak boleh dibedakan hanya lewat warna.
- **Heading di latar gelap perlu warna eksplisit.** Layer `base` memberi
  `h1`–`h4` warna `--tsls-dark`. Tanpa penimpaan, judul hilang di atas latar
  hijau gelap — ini pernah terjadi pada CTA band.
- **Animasi maksimal 240 ms** dan harus patuh pada `prefers-reduced-motion`.
- **Area sentuh minimal 44×44 px**, dan tidak boleh ada scroll horizontal pada
  lebar 375 px.

## Rute dan redirect

```text
/                        Beranda
/program                 Perbandingan tiga unit
/program/[slug]          Detail unit
/pendekatan              Cara belajar
/cerita-belajar          Kehidupan sekolah
/tentang                 Profil, visi, misi, kepemimpinan
/spmb                    Alur dan syarat pendaftaran
/faq                     Tanya jawab
/kontak                  Kontak dan lokasi
```

Redirect 301 dari URL lama diatur di `astro.config.mjs`: `/preschool`,
`/preschool-hbl`, `/elementary`, `/pendidikan`, `/kehidupan-sekolah`,
`/fasilitas`, dan `/profil`.

## Build dan deployment

Situs dibangun **sepenuhnya statis**. Tidak ada rute API, form server, maupun
data yang dirender saat permintaan.

> **Jangan ubah `output` menjadi `'server'`.** Dalam mode itu Astro mengabaikan
> `getStaticPaths()`, sehingga `/program/<slug>` dirender tanpa data dan
> halamannya tampil kosong. Bila SSR memang dibutuhkan suatu saat, setiap rute
> dinamis wajib menyertakan `export const prerender = true`.

Adapter Netlify hanya dipasang ketika variabel `NETLIFY` bernilai `true`, agar
redirect ditulis sebagai `_redirects` berisi 301 asli. Adapter sengaja tidak
dipasang di lokal karena membuat `astro preview` tidak dapat dijalankan.

Untuk menguji hasil build persis seperti di produksi:

```bash
NETLIFY=true npm run build
```

## Versioning

Penomoran mengikuti [Semantic Versioning](https://semver.org/lang/id/):

- **MAJOR** — perombakan tampilan, struktur navigasi, atau penamaan unit.
- **MINOR** — halaman, komponen, atau bagian konten baru.
- **PATCH** — perbaikan bug, penyuntingan teks, pembaruan dependensi.

Alur merilis:

```bash
# 1. Catat perubahan di bagian [Belum dirilis] pada CHANGELOG.md
# 2. Pindahkan ke nomor versi baru beserta tanggalnya
# 3. Naikkan versi, buat commit dan tag sekaligus
npm version minor -m "release: v%s"
git push --follow-tags
```

Setiap rilis ditandai dengan tag `vX.Y.Z` dan dicatat di
[CHANGELOG.md](CHANGELOG.md).

## Konten yang perlu divalidasi sekolah

Beberapa informasi ditandai di halaman lewat blok `.notice` karena masih
menunggu konfirmasi resmi. Jangan hapus penandanya sebelum datanya dipastikan:

- Tahun ajaran SPMB (saat ini 2027/2028, diatur pada `src/data/constants.ts`).
- Nomenklatur dan izin operasional satuan pendidikan.
- Jadwal sesi live dan pola belajar TK HBL.
- Ritme harian TK Reguler, termasuk keterangan snack dan jam kepulangan.
- Foto kegiatan yang melibatkan murid wajib memiliki izin tertulis wali dan
  melalui kurasi privasi anak sebelum ditayangkan.

## Catatan teknis

Beberapa hal yang sudah diketahui dan belum dibereskan:

- **Integrasi React terpasang tapi tidak terpakai.** Tidak ada komponen dengan
  direktif `client:` di seluruh `src/`. Integrasi dan dependensinya bisa
  dilepas bila memang tidak akan digunakan.
- **Empat belas komponen yatim** di `src/components/diagrams/`,
  `src/components/illustrations/`, `AdventureMap.astro`, `SmoothScroll.astro`,
  dan `Welcome.astro` tidak lagi diimpor di mana pun.
- **`design.md` sudah usang.** Berkas itu menjelaskan design system lama
  berbasis palet krem oklch yang kini digantikan `tokens.css` dan
  `src/styles/tsls.css`.
- **`sitemap.xml` belum ada.** Perlu menambahkan `@astrojs/sitemap`.
- Beberapa berkas HTML dan skrip lama di root (`*_latest.html`,
  `stitch_beranda.html`, `screens.json`, `generate_faq.*`, `scratch_faq.txt`)
  merupakan sisa proses desain terdahulu.
