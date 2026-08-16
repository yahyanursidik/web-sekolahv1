# Animated Diagram System

## Tujuan

Website TSLS boleh menggunakan motion, tetapi motion harus:

1. membantu memahami hierarchy;
2. menjelaskan hubungan;
3. menunjukkan sequence;
4. memberi ritme visual;
5. tetap tenang.

Bukan sekadar dekorasi.

## Prinsip Anti-Slop

Tidak menggunakan:
- particle background;
- random orbit;
- blob morph;
- 3D floating blocks;
- infinite floating;
- glowing paths;
- neon;
- animated gradients;
- pseudo-scientific diagrams;
- 20 icon yang bergerak sendiri-sendiri.

---

# Diagram 1 — Fitrah Growth Path

## Dipakai
Homepage / Filosofi.

## Struktur

```text
FITRAH
  │
  ▼
IMAN & ADAB
  │
  ▼
RASA AMAN & RELASI
  │
  ▼
KEMANDIRIAN
  │
  ▼
BAHASA • SOSIO-EMOSIONAL • KOGNITIF
  │
  ▼
BERPIKIR • MEMAHAMI • MENERAPKAN
  │
  ▼
GENERASI RABBANI
```

## Visual

- vertical SVG line;
- small round nodes;
- typographic labels;
- no icons required;
- alternating label alignment desktop;
- single alignment mobile.

## Motion

On enter viewport:
1. line draws top → bottom;
2. nodes reveal sequentially;
3. labels fade + translateY max 8px;
4. finish.

No repeat after initial view unless page reload.

---

# Diagram 2 — Foundation Layers

## Dipakai
Homepage + Pendidikan.

## Structure

```text
┌──────────────────────────────────────────────┐
│ Akademik • Bahasa • Sains • Critical Thinking│
├──────────────────────────────────────────────┤
│ Kemandirian • Sosio-Emosional                │
├──────────────────────────────────────────────┤
│ Adab & Akhlak                                │
├──────────────────────────────────────────────┤
│ Al-Qur'an & As-Sunnah                        │
├──────────────────────────────────────────────┤
│ Tauhid / Fitrah Keimanan                     │
└──────────────────────────────────────────────┘
```

## Motion

Reveal from foundation upward:
- layer 1 opacity 1;
- next layer 120ms delay;
- no bounce;
- no 3D stack.

Purpose:
menjelaskan bahwa akademik berdiri di atas foundation.

---

# Diagram 3 — Whole Child Map

## Dipakai
Homepage + Elementary.

Center:
`ANAK`

Nodes:
- Iman & Adab
- Kemandirian
- Bahasa
- Sosio-Emosional
- Kognitif
- Critical Thinking

## Desktop

SVG ring / structured hexagonal map.

Penting:
- jangan menggunakan radial glow;
- connector thin line;
- each node typographic;
- center not oversized.

## Mobile

Jangan paksa radial diagram.

Transform menjadi:

```text
ANAK
│
├─ Iman & Adab
├─ Kemandirian
├─ Bahasa
├─ Sosio-Emosional
├─ Kognitif
└─ Critical Thinking
```

Motion:
connector reveal once.

---

# Diagram 4 — Deep Learning Flow

## Dipakai
Elementary.

```text
BERKESADARAN
      ↓
BERMAKNA
      ↓
MENGGEMBIRAKAN
      ↓
MEMAHAMI
      ↓
MENGAPLIKASI
      ↓
MEREFLEKSI
```

Alternative desktop horizontal:

```text
BERKESADARAN → BERMAKNA → MENGGEMBIRAKAN
                  ↓
       MEMAHAMI → MENGAPLIKASI → MEREFLEKSI
```

Gunakan layout yang paling terbaca.

Motion:
- connector line;
- current node emphasized;
- animation stops at end.

---

# Diagram 5 — Preschool Learning Loop

## Dipakai
Preschool.

```text
BERMAIN
→ MENGAMATI
→ MENCOBA
→ BERBICARA
→ MENGULANG
→ MEMAHAMI
   ↘________↗
```

Ini loop konseptual, tetapi **jangan animasikan selamanya**.

Motion:
sequence once + last connector.

---

# Diagram 6 — HBL Partnership Flow

## Dipakai
Preschool HBL.

```text
TSLS
merancang
  ↓
GURU
memberi pijakan
  ↓
ORANG TUA
mendampingi
  ↓
ANAK
mengalami
  ↓
GURU + ORANG TUA
memantau
```

Use case:
menjelaskan HBL bukan video class.

---

# Diagram 7 — Home–School Partnership

## Dipakai
Homepage / Pendidikan.

```text
              ANAK
             /    \
            /      \
        RUMAH────SEKOLAH
```

Labels below:

RUMAH:
- teladan
- rutinitas
- relasi

SEKOLAH:
- ilmu
- lingkungan
- pendampingan

Motion:
- center reveal;
- line to home;
- line to school;
- baseline link last.

---

# Diagram 8 — SPMB Timeline

## Dipakai
SPMB.

```text
01 PILIH PROGRAM
   │
02 BUAT AKUN
   │
03 ISI FORMULIR
   │
04 UNGGAH DOKUMEN
   │
05 PANTAU STATUS
   │
06 TUNGGU INFORMASI
   │
07 TAHAP LANJUTAN
```

Motion:
progress line controlled by viewport position.
No looping.

---

# Technical Implementation

Prefer:
- semantic HTML;
- inline SVG;
- CSS transitions;
- IntersectionObserver;
- minimal vanilla JS.

Tidak perlu menambah heavy animation framework bila existing project tidak memerlukannya.

Suggested helper:

`src/scripts/reveal.ts`

Possible data attributes:

```html
data-reveal
data-diagram
data-diagram-step="1"
```

CSS:

```css
[data-reveal] {
  opacity: 0;
  transform: translateY(8px);
  transition:
    opacity 480ms ease,
    transform 480ms ease;
}

[data-reveal].is-visible {
  opacity: 1;
  transform: translateY(0);
}

@media (prefers-reduced-motion: reduce) {
  [data-reveal] {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
```

SVG line:

```css
.diagram-path {
  stroke-dasharray: var(--path-length);
  stroke-dashoffset: var(--path-length);
  transition: stroke-dashoffset 900ms ease;
}

.is-visible .diagram-path {
  stroke-dashoffset: 0;
}
```

Developer boleh menghitung path length via JS bila diperlukan.

---

# Motion Budget

Per viewport:
- max 1 primary animated diagram;
- max 2 subtle content reveals;
- jangan semua teks fade-in;
- images generally static;
- navbar motion minimal.

Motion harus tetap nyaman pada low-end mobile.

---

# Accessibility

- Diagram tidak boleh menjadi satu-satunya sumber informasi.
- Sediakan HTML text equivalent.
- SVG decorative paths gunakan `aria-hidden`.
- Diagram meaningful gunakan `<title>` / accessible label.
- Reduced motion harus supported.
- Jangan menggunakan animation untuk informasi yang hilang terlalu cepat.
