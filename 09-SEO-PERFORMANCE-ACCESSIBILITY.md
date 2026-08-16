# SEO, Performance & Accessibility

## 1. SEO Scope

No article/blog module in this redesign.

Focus SEO on:
- school brand;
- program pages;
- location;
- SPMB;
- Preschool;
- Preschool HBL;
- Elementary.

---

# 2. Suggested Titles

Homepage:
`Tarbiyah Sunnah Lab School | Preschool & Elementary School`

Preschool:
`Preschool Islam Terpadu | Tarbiyah Sunnah Lab School`

Preschool HBL:
`Preschool Home-Based Learning | Tarbiyah Sunnah Lab School`

Elementary:
`Elementary School | Tarbiyah Sunnah Lab School`

SPMB:
`SPMB Tarbiyah Sunnah Lab School`

Do not keyword-stuff.

---

# 3. Meta Description Principle

Write natural copy ±140–160 characters if practical.

Include:
- school name;
- program;
- value proposition;
- location if relevant.

Do not use:
- "terbaik";
- "nomor 1";
- unsupported claims.

---

# 4. Structured Data

Consider:
- `EducationalOrganization`
- `School`
- `BreadcrumbList`
- `FAQPage` only when FAQ content is actually visible and current.

Validate markup before release.

Do not fabricate:
- ratings;
- reviews;
- founding facts;
- geo details not confirmed.

---

# 5. Semantic HTML

Required:
- one logical H1 per page;
- hierarchy H2/H3;
- `<nav>`;
- `<main>`;
- `<section>` when meaningful;
- `<footer>`;
- buttons for actions;
- links for navigation.

Avoid click handlers on generic `<div>`.

---

# 6. Accessibility

Target practical WCAG AA.

Checklist:
- keyboard navigation;
- visible focus;
- sufficient contrast;
- accessible mobile menu;
- alt text;
- skip-to-content;
- form labels;
- FAQ keyboard behavior;
- diagrams have text equivalents;
- no color-only meaning;
- reduced motion.

---

# 7. Performance

Goals:
- minimal JS;
- responsive images;
- local/static assets optimized;
- no heavy animation library unless needed;
- no autoplay video;
- no uncompressed hero;
- no 6 webfont weights.

Prefer:
- Astro static/server rendering as existing;
- CSS;
- inline SVG;
- small JS islands only if needed.

---

# 8. Core Web UX Rules

Avoid CLS:
- reserve image dimensions;
- reserve font/layout;
- no late-loading giant banner.

Improve LCP:
- optimize hero image;
- avoid blocking scripts;
- don't lazy-load primary hero image.

Improve INP:
- keep menu/accordion JS small;
- avoid scroll listeners doing layout calculations every frame.

---

# 9. Responsive Breakpoints

Do not design only desktop.

Test at minimum:
- 360px
- 390px
- 768px
- 1024px
- 1280px
- 1440px

Diagrams require deliberate mobile fallback.

---

# 10. Reduced Motion

Mandatory:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
  }

  [data-reveal],
  .diagram-path {
    animation: none !important;
    transition: none !important;
  }
}
```

Ensure content remains visible.

---

# 11. Link Integrity

Before release check:
- internal routes;
- Hub;
- WhatsApp;
- Maps;
- social links;
- logo homepage;
- footer links.

No placeholder `#` on production.

---

# 12. 404

Create/retain a calm 404 page:

- "Halaman tidak ditemukan."
- CTA kembali ke Beranda.
- CTA SPMB.
- no cute illustration needed.
