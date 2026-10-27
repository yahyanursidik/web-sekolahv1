# Changelog

Semua perubahan penting pada situs Sekolah Tarbiyah Sunnah Bandung dicatat di berkas ini.

Format mengikuti [Keep a Changelog](https://keepachangelog.com/id/1.1.0/),
dan penomoran versi mengikuti [Semantic Versioning](https://semver.org/lang/id/).

## [Belum dirilis]

Belum ada perubahan.

## [1.0.0] — 2026-10-27

Rilis pertama dengan design system dan identitas resmi. Versi ini mengganti
seluruh tampilan, struktur navigasi, dan penamaan unit pendidikan.

### Ditambahkan

- **Design system MOVE. LEARN. GROW.** Token warna, tipografi, spasi, dan
  bentuk pada `tokens.css`; seluruh komponen antarmuka pada
  `src/styles/tsls.css`.
- **Sumber tunggal data program** pada `src/data/programs.ts`. Isi tiap unit —
  pilar, ritme harian, FAQ, pendalaman materi — tidak lagi ditulis ulang di
  banyak halaman.
- **Halaman baru** `/program`, `/program/[slug]`, `/pendekatan`, dan
  `/cerita-belajar`.
- **Program Finder** di beranda untuk membantu keluarga menemukan unit yang
  sesuai.
- **Navigasi baru**: topbar, mega menu program, drawer mobile, dan sticky CTA
  khusus layar kecil.
- **Animasi masuk pada hero** dengan urutan MOVE → LEARN → GROW. Setiap elemen
  bergerak 240 ms dan dinonaktifkan saat `prefers-reduced-motion` aktif.
- **Redirect 301** dari seluruh URL lama ke struktur baru.
- Berkas `CHANGELOG.md` ini dan README yang menjelaskan proyek.

### Diubah

- **Nama sekolah** menjadi Sekolah Tarbiyah Sunnah Bandung.
- **Nama unit** menjadi TK Tarbiyah Sunnah Bandung Reguler, TK Tarbiyah Sunnah
  Bandung HBL, dan SD Tarbiyah Sunnah Bandung. Sebutan "PKBM setara SD"
  beserta catatan kaki legalnya dihapus.
- **Logo** diganti dan dipecah menjadi tiga aset: emblem untuk header, lockup
  penuh untuk footer, dan versi persegi untuk favicon.
- **Tautan Portal Orang Tua** diarahkan ke `hub.tslabschool.sch.id/portal`,
  terpisah dari tautan pendaftaran SPMB.
- **Astro** dinaikkan dari 7.2.0 ke 7.4.2.
- Tipografi berpindah dari Lora/Nunito ke Plus Jakarta Sans.

### Diperbaiki

- **Halaman program tampil kosong di produksi.** Build Netlify memakai
  `output: 'server'`, dan dalam mode itu Astro mengabaikan `getStaticPaths()`
  sehingga `/program/<slug>` dirender tanpa data. Output kini `static` untuk
  semua lingkungan build.
- **Judul CTA band tidak terbaca.** Elemen `h1`–`h4` mewarisi warna gelap dari
  layer `base`, sehingga judul hilang di atas latar hijau gelap.
- **Utility Tailwind tidak menghasilkan CSS.** Kelas `bg-tsls-*` dan
  `font-display` dipakai di seluruh halaman tetapi tidak pernah didefinisikan
  pada `@theme`, sehingga sebagian besar tampilan tidak bergaya.
- Ikon WhatsApp mengambang tidak lagi bergantung pada font ikon eksternal.

### Dihapus

- Dua belas berkas spesifikasi bernomor (`00-README.md` sampai
  `11-IMPLEMENTATION-CHECKLIST.md`). Isinya sudah usang karena memakai nama
  dan struktur lama; riwayatnya tetap dapat ditelusuri lewat git.
- Halaman lama `preschool.astro`, `preschool-hbl.astro`, `elementary.astro`,
  `pendidikan.astro`, `kehidupan-sekolah.astro`, `profil.astro`, dan
  `fasilitas.astro`. Isinya dipindahkan ke struktur baru, bukan dibuang.
- Smooth scroll Lenis dilepas dari layout karena membajak scroll global dan
  bertentangan dengan batas durasi animasi pada design system.

[Belum dirilis]: https://github.com/yahyanursidik/web-sekolahv1/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/yahyanursidik/web-sekolahv1/releases/tag/v1.0.0
