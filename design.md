# Design — TS Lab School

A locked design system for the TS Lab School website. Every page reads this
system before introducing new visual patterns. Extend this file when the system
needs to grow; do not invent page-local themes.

## Genre

Modern-editorial: calm, grounded, scholarly, and welcoming to families.

## Macrostructure family

- Marketing pages: Marquee introduction followed by alternating editorial bands and proof-led grids.
- Program pages: Guided long document with a clear program summary, curriculum, experience, and next action.
- Content pages: Long Document for articles; editorial directory for article and category indexes.

## Theme

- `--color-paper` oklch(97% 0.018 91)
- `--color-paper-2` oklch(94% 0.024 91)
- `--color-paper-3` oklch(90% 0.030 91)
- `--color-ink` oklch(22% 0.035 119)
- `--color-ink-2` oklch(36% 0.035 112)
- `--color-rule` oklch(84% 0.030 96)
- `--color-accent` oklch(48% 0.090 118)
- `--color-focus` oklch(60% 0.140 62)

## Typography

- Display: Lora, weight 600–700, style normal.
- Body: Nunito, weight 400–700.
- Outlier: Nunito, weight 800, used sparingly for labels and utility data.
- Display tracking: -0.025em.
- Type scale anchor: `--text-display = clamp(2.75rem, 6vw, 5.75rem)`.

## Spacing

Four-point named scale. Values live in `tokens.css`; components use named
tokens or the mapped Tailwind utilities.

## Motion

- Easings: `--ease-out`, `--ease-in`, and `--ease-in-out`.
- Reveal pattern: short fade plus vertical translation for meaningful section entry only.
- Reduced-motion fallback: opacity only, at most 120 ms.

## Microinteractions stance

- Silent success; no decorative celebration.
- Immediate keyboard focus, visible at 3:1 or better.
- Hover movement is subtle and never required to understand content.

## CTA voice

- Primary CTA: deep olive fill, compact pill, direct verb-led copy.
- Secondary CTA: transparent surface with a fine olive rule.

## Per-page allowances

- Marketing pages may use existing school photography and restrained pattern texture.
- Program pages may use one large photographic anchor per major section.
- Content pages use typography and photography only; no decorative motion.

## What pages MUST share

- School logo and primary navigation order.
- Olive accent, cream paper, and terracotta secondary accent.
- Lora display and Nunito body pairing.
- Button geometry, focus treatment, card rule, and section spacing.
- Plain-language labels and Indonesian CTA copy.

## What pages MAY differ on

- Editorial grid proportions.
- Hero image placement.
- Number of supporting bands required by the page content.

## Exports

### tokens.css

The canonical values are maintained in the root `tokens.css` file.

### Tailwind v4 `@theme`

```css
@theme {
  --color-paper: oklch(97% 0.018 91);
  --color-paper-2: oklch(94% 0.024 91);
  --color-paper-3: oklch(90% 0.030 91);
  --color-ink: oklch(22% 0.035 119);
  --color-ink-2: oklch(36% 0.035 112);
  --color-rule: oklch(84% 0.030 96);
  --color-accent: oklch(48% 0.090 118);
  --color-focus: oklch(60% 0.140 62);
  --font-display: "Lora", ui-serif, Georgia, serif;
  --font-body: "Nunito", ui-sans-serif, system-ui, sans-serif;
  --spacing-md: 1.5rem;
  --spacing-xl: 3rem;
  --text-md: 1.125rem;
  --text-display: clamp(2.75rem, 6vw, 5.75rem);
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
}
```

### DTCG `tokens.json`

```json
{
  "$schema": "https://design-tokens.github.io/community-group/format/",
  "color": {
    "paper": { "$value": "oklch(97% 0.018 91)", "$type": "color" },
    "ink": { "$value": "oklch(22% 0.035 119)", "$type": "color" },
    "accent": { "$value": "oklch(48% 0.090 118)", "$type": "color" }
  },
  "font": {
    "display": { "$value": "Lora, Georgia, serif", "$type": "fontFamily" },
    "body": { "$value": "Nunito, system-ui, sans-serif", "$type": "fontFamily" }
  },
  "space": {
    "md": { "$value": "1.5rem", "$type": "dimension" },
    "xl": { "$value": "3rem", "$type": "dimension" }
  }
}
```

### shadcn/ui CSS variables

```css
:root {
  --background: 97% 0.018 91;
  --foreground: 22% 0.035 119;
  --card: 94% 0.024 91;
  --card-foreground: 22% 0.035 119;
  --primary: 48% 0.090 118;
  --primary-foreground: 98% 0.010 91;
  --secondary: 90% 0.030 91;
  --secondary-foreground: 22% 0.035 119;
  --muted: 84% 0.030 96;
  --muted-foreground: 42% 0.025 108;
  --border: 84% 0.030 96;
  --input: 84% 0.030 96;
  --ring: 60% 0.140 62;
  --radius: 0.875rem;
}
```
