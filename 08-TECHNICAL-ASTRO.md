# Technical Architecture — Astro 7.2 Existing Project

## Primary Rule

**Ini redesign terhadap project existing. Jangan rebuild dari nol.**

Sebelum coding:

1. audit `package.json`;
2. audit `astro.config.*`;
3. audit `src/pages`;
4. audit layout/component existing;
5. audit styling strategy;
6. audit deployed Netlify config;
7. audit existing external links;
8. preserve working functionality.

---

# Stack

Framework:
- Astro **7.2** sesuai project existing.

Deployment:
- pertahankan Netlify bila project existing menggunakan Netlify.

Styling:
- ikuti styling system existing bila sehat.
- jangan memigrasikan ke Tailwind hanya karena developer lebih familiar.
- jangan install UI framework besar tanpa kebutuhan.

CMS:
- redesign ini tidak memerlukan Artikel & Insight.
- StudioCMS bukan dependency wajib pada scope ini.
- jika StudioCMS sudah terpasang pada branch/project, jangan hapus secara destruktif tanpa instruksi terpisah.

SPMB:
- external TSLS Hub: `https://hub.tslabschool.sch.id`

---

# Suggested Structure

Sesuaikan, jangan memaksa jika existing project punya struktur lain.

```text
src/
├── components/
│   ├── common/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── CTAGroup.astro
│   │   └── SectionHeading.astro
│   │
│   ├── diagrams/
│   │   ├── FitrahPath.astro
│   │   ├── FoundationLayers.astro
│   │   ├── WholeChildMap.astro
│   │   ├── LearningFlow.astro
│   │   ├── HBLFlow.astro
│   │   ├── HomeSchoolDiagram.astro
│   │   └── SPMBTimeline.astro
│   │
│   ├── home/
│   ├── preschool/
│   ├── hbl/
│   ├── elementary/
│   └── spmb/
│
├── layouts/
│   └── BaseLayout.astro
│
├── pages/
│   ├── index.astro
│   ├── tentang.astro
│   ├── preschool.astro
│   ├── preschool-hbl.astro
│   ├── elementary.astro
│   ├── pendidikan.astro
│   ├── kehidupan-sekolah.astro
│   ├── spmb.astro
│   ├── faq.astro
│   └── kontak.astro
│
├── scripts/
│   └── reveal.ts
│
├── styles/
│   ├── tokens.css
│   ├── global.css
│   └── motion.css
│
└── data/
    ├── navigation.ts
    ├── programs.ts
    └── faq.ts
```

---

# Component Rules

## Components should exist when

- reused;
- isolate visual logic;
- isolate diagram SVG;
- improve readability.

## Do not

- create component for every `<div>`;
- create overly generic abstraction;
- introduce component library for simple sections.

---

# Data-driven Repeated Content

Program metadata may use:

```ts
export const programs = [
  {
    id: 'preschool',
    title: 'Preschool',
    href: '/preschool',
    mode: 'Onsite',
  },
  {
    id: 'preschool-hbl',
    title: 'Preschool HBL',
    href: '/preschool-hbl',
    mode: 'Home-Based Learning',
  },
  {
    id: 'elementary',
    title: 'Elementary School',
    href: '/elementary',
    mode: 'Onsite',
  },
];
```

Do not put all page copy into JSON. Long editorial content is easier maintained in `.astro` unless CMS/content collection is genuinely needed.

---

# Images

Use Astro Image where appropriate.

Rules:
- explicit width/height;
- responsive sizes;
- modern formats when pipeline supports;
- lazy-load below fold;
- hero image may be eager/high priority;
- descriptive alt text;
- avoid placeholder blur dependency unless existing project supports.

---

# Animated Diagrams

Implement with:
- inline SVG;
- CSS;
- IntersectionObserver.

Avoid React component solely for animation unless interactivity really requires it.

Astro advantage:
- ship minimal JS.

---

# JS Budget

Target:
- navigation behavior;
- mobile menu;
- diagram reveal;
- optional FAQ accordion.

No global client-side framework required.

Avoid hydration where semantic HTML/CSS is enough.

---

# View Transitions

If existing project already uses Astro view transitions/client router, preserve and test.

Do not introduce page transition effects that:
- delay navigation;
- fade entire site for >300ms;
- cause layout flash.

---

# External TSLS Hub

Create one constant:

```ts
export const TSLS_HUB_URL = 'https://hub.tslabschool.sch.id';
```

All SPMB CTA should reference one source.

If Hub has dedicated register/login paths, use them only after verified from existing app.

---

# Constants

Suggested:

```ts
export const SITE = {
  name: 'Tarbiyah Sunnah Lab School',
  shortName: 'TSLS',
  url: 'https://tslabschool.sch.id',
  tagline: 'Merawat Fitrah, Membangun Generasi Rabbani.',
};

export const EXTERNAL_LINKS = {
  hub: 'https://hub.tslabschool.sch.id',
};
```

---

# Content Integrity

Do not invent:
- tuition;
- student-teacher ratio;
- accreditation;
- legal status;
- facility count;
- program duration;
- Qur'an target;
- HBL schedule;
- class size;
- SPMB age;
- document requirements.

When missing, leave:
`TODO(content): confirm with TSLS`

---

# Safe Redesign Workflow

1. create feature branch;
2. inventory existing routes;
3. screenshot existing desktop/mobile;
4. refactor tokens first;
5. build shared header/footer;
6. redesign homepage;
7. implement program pages;
8. implement SPMB;
9. implement diagrams;
10. regression test links;
11. run build;
12. deploy preview;
13. production only after approval.
