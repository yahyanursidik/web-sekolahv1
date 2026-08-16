# Master Prompt untuk Antigravity

## Tugas

Lakukan **redesign terhadap project existing** website Tarbiyah Sunnah Lab School (`tslabschool.sch.id`).

Project sudah berjalan dan menggunakan **Astro 7.2**. Jangan rebuild dari nol, jangan mengganti framework, jangan melakukan migrasi stack yang tidak diminta.

Baca seluruh project terlebih dahulu sebelum mengubah code.

---

# 1. Konsep Utama

Brand statement:

> **Merawat Fitrah, Membangun Generasi Rabbani.**

TSLS memiliki tiga program:

1. Preschool — onsite.
2. Preschool HBL — Home-Based Learning / online.
3. Elementary School — onsite.

Fondasi:

> **Al-Qur'an dan As-Sunnah sesuai pemahaman Salafus Shalih (Ahlus Sunnah wal Jama'ah).**

Preschool diposisikan sebagai:

> **PAUD Islam Terpadu Holistik**

Elementary berfokus pada:

- menjaga fitrah;
- iman dan adab;
- kemandirian;
- kecerdasan bahasa;
- kecerdasan sosial-emosional;
- kecerdasan kognitif;
- critical thinking;
- pembelajaran mendalam;
- literasi dan numerasi;
- tanggung jawab belajar.

---

# 2. Scope

Redesign:

- homepage;
- Tentang TSLS;
- Preschool;
- Preschool HBL;
- Elementary;
- Pendidikan di TSLS;
- Kehidupan Sekolah;
- SPMB;
- FAQ;
- Kontak;
- header/navigation;
- footer;
- diagram visual;
- responsive design;
- SEO basic;
- accessibility;
- performance.

**Tidak ada Artikel & Insight.**
**Tidak ada blog pada scope ini.**

Jangan menambahkan CMS sebagai dependency hanya untuk redesign.

Jika CMS sudah ada pada project, jangan hapus tanpa instruksi.

---

# 3. SPMB

Pendaftaran berlangsung di:

`https://hub.tslabschool.sch.id`

Flow yang dijelaskan di website:

```text
Pilih program
→ Buat akun di TSLS Hub
→ Isi formulir
→ Unggah dokumen
→ Pantau status pendaftaran
→ Tunggu informasi TSLS melalui email / WhatsApp
→ Ikuti tahap berikutnya
```

Website utama hanya memberi informasi dan gateway.

Jangan membuat duplicate registration form pada website utama.

---

# 4. Sebelum Coding

Lakukan audit:

1. `package.json`
2. Astro config
3. routes
4. layout
5. component
6. styling
7. assets
8. Netlify config
9. current SEO
10. current mobile view
11. links
12. existing data/content

Berikan ringkasan audit dahulu di working notes.

Kemudian implementasikan secara bertahap.

Jangan menghapus fitur existing yang masih digunakan tanpa alasan jelas.

---

# 5. Art Direction

Gunakan:

> **Natural Islamic Academic**

Karakter:
- natural;
- hangat;
- tenang;
- akademik;
- clean;
- profesional;
- tidak childish;
- ramah keluarga.

Gunakan warna existing/fasad:

```text
Deep Olive    #3F4E2F
Dark Olive    #25351F
Muted Olive   #7D8A63
Sage          #9AA67B
Warm White    #FFFDF5
Broken White  #F7F3E8
Cream         #EFE5CF
Sand          #D8C2A0
Soft Yellow   #F3CF75
Wood Brown    #8A5A32
```

---

# 6. Anti AI-Slop — WAJIB

Jangan membuat:
- gradient mesh;
- neon gradient;
- blobs;
- glassmorphism;
- floating 3D objects;
- abstract AI spheres;
- isometric school illustration;
- AI-generated human illustration;
- stock SaaS illustration;
- random decorative icon;
- card grid untuk setiap konsep;
- floating cards;
- glowing border;
- excessive pill buttons;
- infinite marquee;
- particle background;
- excessive animation;
- bounce animation;
- scroll hijacking.

Hindari elemen "Islamic template":
- arch;
- kubah;
- lampu;
- tasbih;
- bulan-bintang;
- pseudo Arabic;
- kitab palsu.

Gunakan:
- foto real sekolah;
- typography;
- whitespace;
- grid;
- line;
- SVG diagram;
- label;
- subtle border;
- natural material imagery.

Setiap elemen visual harus punya fungsi.

---

# 7. Diagrams & Motion

Buat komponen diagram:

- `FitrahPath`
- `FoundationLayers`
- `WholeChildMap`
- `PreschoolLearningLoop`
- `HBLFlow`
- `DeepLearningFlow`
- `HomeSchoolDiagram`
- `SPMBTimeline`

Gunakan:
- inline SVG;
- CSS;
- IntersectionObserver;
- minimal vanilla JS.

Motion harus:
- run once;
- subtle;
- explain sequence;
- no loop;
- respect `prefers-reduced-motion`.

Jangan install animation framework besar kecuali project existing sudah menggunakannya atau benar-benar dibutuhkan.

Lihat detail di `07-ANIMATED-DIAGRAMS.md`.

---

# 8. Homepage

Ikuti urutan:

```text
Header
↓
Hero
Merawat Fitrah. Membangun Generasi Rabbani.
↓
Filosofi Fitrah
↓
3 Program
Preschool | Preschool HBL | Elementary
↓
Fondasi Pendidikan
↓
Whole Child Development
↓
How Learning Works
↓
Kemitraan Rumah–Sekolah
↓
Lingkungan Sekolah
↓
SPMB
↓
FAQ Preview
↓
Final CTA
↓
Footer
```

Jangan menambahkan Artikel/Blog section.

---

# 9. Program Pages

Ikuti dokumen:
`05-PROGRAM-PAGES.md`

Jangan clone layout homepage lalu hanya mengganti text.

Setiap program harus memiliki narrative yang relevan.

---

# 10. Copy Rules

Bahasa:
- Indonesia natural;
- hangat;
- bijaksana;
- tidak bombastis.

Tidak boleh mengarang:
- biaya;
- usia;
- target hafalan;
- rasio guru;
- fasilitas;
- legal status;
- jadwal;
- jumlah kelas;
- dokumen SPMB;
- accreditation.

Jika informasi belum ada:
`TODO(content): konfirmasi TSLS`

Jangan membuat data palsu agar halaman terlihat penuh.

---

# 11. Technical Rules

- pertahankan Astro 7.2;
- component-based;
- minimal JS;
- responsive image;
- semantic HTML;
- accessible nav;
- no unnecessary React hydration;
- preserve Netlify deployment;
- centralized external URL constants;
- no hardcoded Hub URL di banyak tempat;
- no secret/client exposure;
- build harus lolos.

---

# 12. Responsive

Test:
- 360
- 390
- 768
- 1024
- 1280
- 1440

Diagram radial desktop harus memiliki mobile alternative.

Jangan sekadar scale SVG menjadi sangat kecil.

---

# 13. Acceptance Criteria

Selesai jika:

- homepage redesigned;
- 3 program jelas;
- HBL punya landing page sendiri;
- no Article & Insight;
- SPMB menuju Hub;
- diagrams implemented;
- motion subtle;
- reduced motion supported;
- visual anti-slop;
- mobile responsive;
- all routes work;
- no placeholder link `#`;
- build succeeds;
- deploy preview Netlify succeeds;
- current valid functionality tidak rusak.

---

# 14. Working Method

Kerjakan bertahap.

## Phase 1
Audit + design tokens + structure.

## Phase 2
Header + homepage.

## Phase 3
Preschool + HBL + Elementary.

## Phase 4
Pendidikan + Kehidupan Sekolah + SPMB.

## Phase 5
Diagrams + motion.

## Phase 6
SEO + accessibility + responsive + performance.

## Phase 7
Build + Netlify preview + regression.

Setelah setiap phase:
- jalankan test/build yang tersedia;
- laporkan perubahan;
- laporkan TODO;
- jangan menyembunyikan error.
