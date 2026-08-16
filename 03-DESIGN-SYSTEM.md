# Design System — TSLS Redesign

## 1. Art Direction

Nama arah visual:

# **Natural Islamic Academic**

Karakter:

- tenang;
- bersih;
- hangat;
- nyata;
- akademik;
- ramah keluarga;
- tidak terlihat seperti template sekolah generik;
- tidak terlihat seperti landing page SaaS;
- tidak terlihat seperti AI-generated design.

---

# 2. Color System

Gunakan warna fasad sekolah sebagai sumber utama.

```css
:root {
  --tsls-olive-950: #25351F;
  --tsls-olive-800: #3F4E2F;
  --tsls-olive-600: #7D8A63;
  --tsls-sage-500: #9AA67B;

  --tsls-cream-50: #FFFDF5;
  --tsls-cream-100: #F7F3E8;
  --tsls-cream-200: #EFE5CF;

  --tsls-sand-400: #D8C2A0;
  --tsls-yellow-300: #F3CF75;
  --tsls-wood-600: #8A5A32;

  --text-primary: #25351F;
  --text-secondary: #55604F;
  --border-soft: rgba(63, 78, 47, 0.16);
}
```

### Pemakaian

Master brand:
- olive 950 / 800
- warm white / broken white

Preschool:
- sage
- cream
- soft yellow secukupnya

Preschool HBL:
- sage
- sand
- olive

Elementary:
- deep olive
- muted olive
- sand
- wood

---

# 3. Typography

Prioritas:
- readable;
- editorial;
- tidak childish;
- tidak terlalu formal.

Gunakan maksimum dua font family utama.

Contoh strategi:

- Heading: serif editorial yang tenang.
- Body/UI: sans-serif yang sangat terbaca.

Jika project existing sudah memiliki typography yang baik, pertahankan.

Rules:

- H1 desktop: 56–72px, tetapi sesuaikan panjang teks.
- H1 mobile: 38–48px.
- Body: 17–19px pada reading sections.
- Navigation: 14–16px.
- Max paragraph width: ± 65–72 characters.
- Line height body: 1.6–1.75.

Jangan menggunakan terlalu banyak font weight.

---

# 4. Layout

Max content width:
- standard: 1180–1240px
- reading copy: 720–820px
- wide diagrams: 1280px bila diperlukan.

Section spacing:
- desktop: 96–144px
- mobile: 64–88px

Gunakan 12-column grid desktop.

Negative space adalah bagian dari desain.

---

# 5. Cards

Hindari "cardification" berlebihan.

Gunakan card hanya jika elemen memang merupakan unit independen.

Rules:

- radius moderat 12–20px;
- border lembut;
- shadow sangat tipis atau tanpa shadow;
- jangan semua section menjadi card;
- jangan gunakan kartu mengambang dengan shadow besar;
- tidak menggunakan glass card.

Program cards boleh lebih editorial:
- foto;
- label;
- judul;
- 2–3 kalimat;
- CTA.

---

# 6. Photography

Utamakan foto asli TSLS.

Objek yang direkomendasikan:

- fasad;
- entrance;
- ruang kelas;
- meja kerja;
- material belajar;
- rak buku;
- alat tulis;
- halaman;
- tanaman;
- detail interior;
- hasil karya;
- tangan melakukan aktivitas bila sesuai kebijakan dokumentasi.

Jangan menghasilkan foto sekolah palsu dengan AI untuk terlihat seperti fasilitas yang dimiliki sekolah.

Jika foto manusia digunakan:
- utamakan dokumentasi nyata yang sudah memiliki izin;
- jangan jadikan wajah anak sebagai dekorasi generik;
- ikuti kebijakan dokumentasi sekolah.

---

# 7. Islamic Visual Language

Nilai Islam harus muncul dari:
- copy;
- hierarchy;
- ketenangan;
- adab komunikasi;
- isi kurikulum;
- fondasi pendidikan.

Bukan dari ornamen generik.

Hindari:
- arch;
- kubah;
- lampu;
- tasbih;
- bintang-bulan;
- silhouette masjid;
- frame mihrab;
- pseudo-Arabic;
- kitab palsu.

---

# 8. Anti AI-Slop Rules

## Dilarang

- gradient mesh sebagai background utama;
- neon gradient;
- blob;
- abstract 3D sphere;
- glassmorphism;
- icon dalam bubble warna-warni tanpa makna;
- 8 kartu identik berisi icon + heading + paragraph;
- emoji sebagai sistem ikon;
- fake handwriting;
- "AI futuristic" grids;
- glowing border;
- excessive rounded pill;
- semua button pill;
- endless marquee;
- decorative particles;
- mouse-following animation;
- parallax besar;
- hover yang membuat elemen melompat;
- bouncing arrows;
- infinite floating animation;
- teks berwarna per kata;
- random underline doodles.

## Wajib

Setiap elemen visual harus lolos pertanyaan:

> "Apakah elemen ini membantu hierarchy, orientasi, pemahaman, atau identitas?"

Jika tidak: hapus.

---

# 9. Iconography

Gunakan line icon sederhana hanya jika perlu.

Preferred:
- Lucide atau icon set existing project.
- Stroke konsisten.
- Ukuran 18–24px untuk UI.

Diagram utama lebih baik memakai:
- lines;
- dots;
- labels;
- numbers;
- connectors;
- blocks.

Bukan icon sebanyak mungkin.

---

# 10. Buttons

Primary:
- solid deep olive;
- rectangular dengan radius moderat;
- contrast jelas.

Secondary:
- transparent / outline.

Text link:
- arrow tipis;
- underline/offset pada hover.

Button harus terasa seperti UI, bukan badge.

---

# 11. Motion Principle

Motion:
- explain;
- orient;
- reinforce sequence.

Bukan:
- entertain;
- distract;
- make the page look "advanced".

Durasi:
- micro interaction: 140–220ms
- reveal: 350–600ms
- diagram sequence: 600–1400ms total

Easing:
- standard smooth ease-out.

Semua animation harus menghormati:

```css
@media (prefers-reduced-motion: reduce) {
  /* remove non-essential motion */
}
```
