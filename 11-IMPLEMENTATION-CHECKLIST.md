# Implementation Checklist

## Phase 0 — Safety

- [ ] Buat branch redesign.
- [ ] Pastikan working tree clean.
- [ ] Catat current production route.
- [ ] Catat current Netlify config.
- [ ] Screenshot homepage desktop/mobile.
- [ ] Audit external links.
- [ ] Audit current dependencies.
- [ ] Jangan rebuild dari nol.

---

# Phase 1 — Foundation

- [ ] Tambahkan / rapikan design tokens.
- [ ] Tetapkan container/grid.
- [ ] Tetapkan typography.
- [ ] Tetapkan button styles.
- [ ] Tetapkan accessible focus state.
- [ ] Tambahkan motion/reduced-motion rules.
- [ ] Centralize TSLS Hub URL.

---

# Phase 2 — Global Navigation

- [ ] Header desktop.
- [ ] Header mobile.
- [ ] Program dropdown.
- [ ] TSLS Hub CTA.
- [ ] Footer.
- [ ] Skip-to-content.
- [ ] Keyboard nav.

---

# Phase 3 — Homepage

- [ ] Hero.
- [ ] Filosofi fitrah.
- [ ] 3 program.
- [ ] Foundation layers.
- [ ] Whole child.
- [ ] Learning flow.
- [ ] Home-school partnership.
- [ ] Environment.
- [ ] SPMB preview.
- [ ] FAQ preview.
- [ ] Final CTA.

---

# Phase 4 — Program Pages

## Preschool
- [ ] hero.
- [ ] PAUD Islam Terpadu Holistik positioning.
- [ ] development domains.
- [ ] learning through play.
- [ ] Islamic foundation.
- [ ] parent partnership.
- [ ] FAQ.
- [ ] SPMB CTA.

## Preschool HBL
- [ ] hero.
- [ ] HBL definition.
- [ ] what HBL is / is not.
- [ ] TSLS–Teacher–Parent–Child flow.
- [ ] parent role.
- [ ] delivery info with confirmed data only.
- [ ] FAQ.
- [ ] SPMB CTA.

## Elementary
- [ ] hero.
- [ ] 6 development directions.
- [ ] language.
- [ ] social-emotional.
- [ ] cognitive.
- [ ] critical thinking.
- [ ] deep learning.
- [ ] academic layers.
- [ ] parent partnership.
- [ ] FAQ.
- [ ] SPMB CTA.

---

# Phase 5 — Other Pages

- [ ] Tentang.
- [ ] Pendidikan di TSLS.
- [ ] Kehidupan Sekolah.
- [ ] SPMB.
- [ ] FAQ.
- [ ] Kontak.
- [ ] 404.

---

# Phase 6 — Animated Diagrams

- [ ] FitrahPath.
- [ ] FoundationLayers.
- [ ] WholeChildMap.
- [ ] PreschoolLearningLoop.
- [ ] HBLFlow.
- [ ] DeepLearningFlow.
- [ ] HomeSchoolDiagram.
- [ ] SPMBTimeline.
- [ ] Reduced motion.
- [ ] Mobile fallback.

---

# Phase 7 — Anti-Slop Review

Delete/rework if found:

- [ ] decorative gradient.
- [ ] blob.
- [ ] glass card.
- [ ] unnecessary shadow.
- [ ] random icon.
- [ ] AI illustration.
- [ ] Islamic stock decoration.
- [ ] excessive rounded cards.
- [ ] floating animation.
- [ ] meaningless fade-in.
- [ ] fake content.
- [ ] generic marketing jargon.

Ask:

- [ ] Is every visual element useful?
- [ ] Is the hierarchy obvious?
- [ ] Does this feel like a real school?
- [ ] Can a parent understand this without education jargon?

---

# Phase 8 — Mobile

Test:
- [ ] 360px.
- [ ] 390px.
- [ ] 768px.
- [ ] touch targets.
- [ ] menu.
- [ ] diagrams.
- [ ] CTA.
- [ ] long H1.
- [ ] images.
- [ ] footer.

---

# Phase 9 — Accessibility

- [ ] semantic headings.
- [ ] focus visible.
- [ ] keyboard menu.
- [ ] contrast.
- [ ] alt text.
- [ ] reduced motion.
- [ ] no information by color only.
- [ ] SVG accessibility.
- [ ] FAQ keyboard interaction.

---

# Phase 10 — Performance

- [ ] hero optimized.
- [ ] image dimensions reserved.
- [ ] responsive images.
- [ ] below-fold lazy loading.
- [ ] minimal JS.
- [ ] no heavy animation dependency.
- [ ] no autoplay media.
- [ ] font weight limited.

---

# Phase 11 — SEO

- [ ] unique title.
- [ ] description.
- [ ] canonical.
- [ ] OG metadata.
- [ ] sitemap.
- [ ] robots.
- [ ] School/EducationalOrganization schema if valid.
- [ ] breadcrumbs if used.
- [ ] no fake structured data.

---

# Phase 12 — SPMB

- [ ] `/spmb` explains process.
- [ ] Hub URL correct.
- [ ] Make account wording correct.
- [ ] Form fill wording correct.
- [ ] Upload documents wording correct.
- [ ] Status monitoring wording correct.
- [ ] Email/WhatsApp communication wording correct.
- [ ] No duplicate public registration form.
- [ ] No invented document requirements.

---

# Phase 13 — QA

- [ ] all internal links.
- [ ] external links.
- [ ] no `href="#"`.
- [ ] no console error.
- [ ] no broken image.
- [ ] no TODO visible to users.
- [ ] build passes.
- [ ] preview deploy passes.
- [ ] desktop smoke test.
- [ ] mobile smoke test.

---

# Definition of Done

Redesign dianggap selesai saat:

1. Filosofi **Merawat Fitrah, Membangun Generasi Rabbani** terasa sebagai narasi utama.
2. Preschool, Preschool HBL, Elementary mudah dibedakan.
3. Al-Qur'an & Sunnah terlihat sebagai foundation, bukan fitur tambahan.
4. SPMB jelas dan terhubung ke TSLS Hub.
5. Diagram membantu pemahaman.
6. Motion tenang dan fungsional.
7. Tidak ada Article & Insight.
8. Tidak ada AI design slop.
9. Website terasa nyata, rapi, dan khas TSLS.
10. Astro 7.2 existing project tetap sehat dan deployable.
