# TSLS Website Redesign — Master Index

## Tarbiyah Sunnah Lab School
**Tagline utama:** *Merawat Fitrah, Membangun Generasi Rabbani.*

Dokumen ini adalah paket brief implementasi redesign website `tslabschool.sch.id` untuk dilanjutkan pada project Astro yang sudah ada.

## Konteks

Website melayani tiga program:

1. **Preschool** — PAUD Islam Terpadu Holistik, onsite.
2. **Preschool HBL** — Home-Based Learning / online.
3. **Elementary School** — pendidikan dasar Islam yang menjaga fitrah, membangun kemandirian, kemampuan bahasa, sosial-emosional, kognitif, critical thinking, dan pembelajaran mendalam.

Fondasi seluruh program:

> **Al-Qur'an dan As-Sunnah sesuai pemahaman Salafus Shalih (Ahlus Sunnah wal Jama'ah).**

## Stack

- Framework existing: **Astro 7.2**
- Pertahankan stack, konfigurasi, dependency, dan struktur project existing selama masih sehat.
- Jangan rebuild project dari nol.
- Jangan mengganti framework.
- Tidak ada modul **Artikel & Insight** pada scope redesign ini.
- Tidak perlu menjadikan CMS sebagai dependency wajib untuk redesign.
- SPMB berlangsung melalui **TSLS Hub**: `https://hub.tslabschool.sch.id`
- Website utama berfungsi sebagai public-facing school website + program discovery + SPMB information gateway.

## File dalam paket

1. `01-PRODUCT-BRIEF.md` — positioning, tujuan, audience, prinsip produk.
2. `02-INFORMATION-ARCHITECTURE.md` — sitemap, navbar, route, hierarchy.
3. `03-DESIGN-SYSTEM.md` — visual language, warna, typography, anti-AI-slop rules.
4. `04-HOMEPAGE-SPEC.md` — struktur homepage section-by-section.
5. `05-PROGRAM-PAGES.md` — Preschool, Preschool HBL, Elementary.
6. `06-SPMB-TSLS-HUB.md` — halaman SPMB dan alur TSLS Hub.
7. `07-ANIMATED-DIAGRAMS.md` — sistem grafis diagram dan motion.
8. `08-TECHNICAL-ASTRO.md` — arsitektur komponen dan implementasi Astro.
9. `09-SEO-PERFORMANCE-ACCESSIBILITY.md` — SEO dasar, performance, accessibility.
10. `10-ANTIGRAVITY-MASTER-PROMPT.md` — instruksi utama siap copy ke Antigravity.
11. `11-IMPLEMENTATION-CHECKLIST.md` — urutan pengerjaan dan acceptance criteria.

## Prinsip utama

Website bukan katalog fitur sekolah.

Storyline utama:

```text
FITRAH
  ↓
TAUHID / IMAN
  ↓
AL-QUR'AN & AS-SUNNAH
  ↓
ADAB & AKHLAK
  ↓
PERKEMBANGAN ANAK
  ↓
ILMU • KEMANDIRIAN • KEMAMPUAN BERPIKIR
  ↓
GENERASI RABBANI
```

Setiap section harus menjawab kebutuhan orang tua secara natural:

```text
Apa yang TSLS yakini?
      ↓
Bagaimana TSLS memandang anak?
      ↓
Program mana yang sesuai?
      ↓
Bagaimana anak belajar dan berkembang?
      ↓
Bagaimana rumah dan sekolah bekerja bersama?
      ↓
Bagaimana proses mendaftar?
```

## Batasan visual

Hindari:

- AI-generated glossy school aesthetic.
- gradient berlebihan;
- blob organik dekoratif;
- glassmorphism;
- floating cards tanpa fungsi;
- ilustrasi generik anak/guru;
- stock illustration ala SaaS;
- isometric 3D;
- arch/kubah/lampu/tasbih/bulan-bintang sebagai dekorasi Islami;
- kitab palsu/gibberish Arabic;
- ikon acak sekadar memenuhi ruang;
- animasi yang tidak membantu pemahaman.

Utamakan:

- fotografi sekolah nyata;
- fasad, ruang kelas, meja belajar, perpustakaan/rak buku, material kayu, tanaman dan lingkungan sekolah;
- typography kuat;
- whitespace;
- garis, grid, label, timeline, layer diagram;
- SVG diagram informatif;
- motion subtil yang menjelaskan hubungan dan urutan.
