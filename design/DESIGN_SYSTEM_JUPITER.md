# Sao Mộc · Jupiter Solutions Technology Design System

This document is the canonical reference source for designing, developing, and maintaining the visual language of the **Sao Mộc · Jupiter Solutions Technology** B2B corporate website.

---

## 1. Purpose
This Design System serves to:
- Standardize the visual language, layout structural hierarchy, and user experience for a premium B2B technology corporate website.
- Empower frontend developers and AI coding assistants to build and modify UI elements consistently without inventing custom styles.
- Maintain brand voice coherence and professional B2B user experience in the long run.
- Guarantee that all web outputs satisfy premium visual benchmarks, accessibility standards (WCAG 2.2 AA), and high performance.

---

## 2. Brand Foundation
- **Official Brand Names:**
  - Vietnamese: `Sao Mộc`
  - English: `Jupiter Solutions`
  - Complete name: `Sao Mộc · Jupiter Solutions Technology`
- **Business Domains:** Enterprise software solutions, digital transformation, applied AI, Data & Analytics, Cloud & DevOps, system integration, network & information security, NOC operations & infrastructure maintenance.
- **Primary Audience:** Technical decision-makers, CTOs, CIOs, IT Directors, Heads of Engineering, and Procurement Officers from large corporate enterprises, banks, and financial institutions.
- **Brand Personality:**
  - **Intelligent:** Exhibits deep technical acumen and enterprise domain knowledge.
  - **Premium:** Refined, elegant, polite, and restrained—never loud or showy.
  - **Trustworthy:** Prioritizes technical credibility and realistic SLA commitments.
  - **Engineering-led:** Favors standardized code structures, clean layouts, and utility over unnecessary decoration.
  - **Calm:** Speaks with quiet confidence; avoids tech jargon hype or flashing graphics.

---

## 3. Design Principles
Our design framework is anchored on four main columns:
1. **Credibility before Spectacle:** Trustworthiness takes priority. Avoid "AI-slop" visual patterns, floating 3D graphics, or neon glows that dilute content.
2. **Engineering Clarity:** Layouts and text copy must be scannable. Technical metrics, case study facts, and engagement models must be unambiguous and transparent.
3. **Controlled Visual Expression:** Every graphic element and layout gap must serve a functional purpose. Do not add ornaments just to fill empty spaces.
4. **Consistency over Novelty:** Reuse established tokens, spacing hierarchies, borders, and buttons. Do not introduce arbitrary values or shadows on a page-by-page basis.

---

## 4. Visual Language
- **Design Inspiration:** Controlled orbital motion, gravitational pull (as a subtle metaphor), monolithic geometries, modular architecture, and structured data pipelines.
- **Strictly Prohibited:** Neon network meshes, floating 3D spheres, microchip illustrations, robot heads, and sci-fi glowing brains.
- **Brand Mark:** An abstract, geometric representation of the letter `J` using circle segments or precise cuts to convey stable and quiet movement.

---

## 5. Hard Tokens
All tokens are defined as CSS custom properties in `globals.css` to prevent arbitrary utility usage.

### Spacing Tokens
Structured around a 4px grid system:
- `spacing.2`: 8px (`gap-2`, `p-2`)
- `spacing.3`: 12px (`gap-3`, `p-3`)
- `spacing.4`: 16px (`gap-4`, `p-4`)
- `spacing.6`: 24px (`gap-6`, `p-6`)
- `spacing.8`: 32px (`gap-8`, `p-8`)
- `spacing.12`: 48px (`gap-12`, `p-12`)
- `spacing.16`: 64px (`gap-16`, `p-16`)
- `spacing.24`: 96px (`gap-24`, `p-24`)

### Radius Tokens
- `radius.xs`: 4px (`rounded-sm`) — Badges and inline status tags.
- `radius.sm`: 8px (`rounded`) — Text input fields, toggle buttons.
- `radius.md`: 10px (`rounded-md`) — Standard buttons and dropdown pickers.
- `radius.lg`: 12px (`rounded-lg`) — Bento cards and product lists.
- `radius.xl`: 16px (`rounded-xl`) — Dialog boxes and overlays.
- `radius.2xl`: 20px (`rounded-2xl`) — Large modal sheets.
- `radius.full`: 9999px (`rounded-full`) — Avatars or slider buttons.

### Border Tokens
- `border.subtle`: 1px solid `#E2E8F0` (`border-slate-200`) — Cards and container partitions.
- `border.default`: 1px solid `#CBD5E1` (`border-slate-300`) — Default input field borders.
- `border.brand`: 1.5px solid `#800020` (`border-burgundy-600`) — Selected or focused active state border.

---

## 6. Typography
Typography must prioritize Vietnamese readability, clean scaling, and high contrast.

- **Primary Font Family:** `Plus Jakarta Sans`, with fallback: `Be Vietnam Pro`, `Inter`, `sans-serif` (linked via `next/font/google`).
- **Monospace Font Family:** `JetBrains Mono` (allocated for parameters, codes, or error states).

### Scale Hierarchy:
1. **Display (Hero):** 40px (Desktop) / 32px (Mobile), line-height 1.2, weight 700.
2. **Heading 1:** 30px (Desktop) / 24px (Mobile), line-height 1.3, weight 700.
3. **Heading 2:** 24px (Desktop) / 20px (Mobile), line-height 1.35, weight 600.
4. **Heading 3:** 20px (Desktop) / 18px (Mobile), line-height 1.4, weight 600.
5. **Body Large:** 18px (Desktop) / 16px (Mobile), line-height 1.5, weight 400.
6. **Body (Default):** 16px, line-height 1.6, weight 400.
7. **Body Small / Table:** 14px, line-height 1.5, weight 400 or 500.
8. **Caption:** 12px, line-height 1.4, weight 500.

- **Typography Rules:**
  - Avoid uppercase strings longer than 3 words.
  - Do not use wide letter-spacing styles that disrupt Vietnamese tone markers.
  - Maintain a minimum font size of 12px for readable text elements.

---

## 7. Color System
Sao Mộc uses **deep burgundy / maroon** as its primary brand identity, supported by white and off-white neutral surfaces. Avoid SaaS-generic blue, indigo, or purple.

### Color Role Palette:
- **Brand Primary:** `#800020` (Deep Burgundy) — Primary actions, active tags, visual highlights.
- **Brand Hover:** `#600018` — Darker burgundy for button hover states.
- **Brand Soft:** `#FBF1F2` — Soft burgundy tint for highlight sections.
- **Neutral Background:** `#FAFAFA` (Calm off-white) — Core page background canvas.
- **Elevated Surface:** `#FFFFFF` (White) — Card containers, forms, modals.
- **Primary Text:** `#0F172A` (`slate-900`) — Primary copy and headers.
- **Secondary Text:** `#475569` (`slate-600`) — Supporting text and descriptions.
- **Muted Text:** `#64748B` (`slate-500`) — Metadata, captions, placeholders.
- **Border Default:** `#E2E8F0` (`slate-200`) — Dividers and card borders.
- **Success:** `#059669` (`emerald-600`) — Success status.
- **Warning:** `#D97706` (`amber-600`) — Warnings.
- **Danger:** `#E11D48` (`rose-600`) — Destructive actions or errors.
- **Information:** `#0284C7` (`sky-600`) — General notifications.

---

## 8. Spacing Hierarchy
- **Section Spacing:**
  - Desktop: Vertical padding `96px` (`py-24`) to `64px` (`py-16`).
  - Mobile: Vertical padding `48px` (`py-12`) to `40px` (`py-10`).
- **Gutter and Width:**
  - Maximum content width: `1280px` (`max-w-7xl`).
  - Margin gutters: `16px` (`px-4`) on mobile, `32px` (`px-8`) on desktop.
- **Stack Spacing:**
  - Headings to paragraph: `24px` (`space-y-6`).
  - Form field grouping: `16px` (`space-y-4`).

---

## 9. Corner Radius Standards
- **rounded-sm (8px):** Input field, select options.
- **rounded-md (10px):** Buttons, interactive cards.
- **rounded-lg (12px):** Bento cards, service items.
- **rounded-xl (16px):** Dialog boxes and popups.

---

## 10. Border Rules
- Use thin `1px` borders (`#E2E8F0`) to delineate cards and layouts rather than shadows.
- Transition hover states to `#CBD5E1` (`border-slate-300`).
- Maintain uniform border thickness. Never exceed 2px unless styling keyboard focus rings.

---

## 11. Shadow Rules
- **Standard Card:** `shadow-sm` (subtle shadow with low opacity).
- **Floating Modals/Overlays:** `shadow-md` or `shadow-lg` for elevation depth.
- **Prohibited:** Never use colored shadows, neon glows, or layered 3D shadow depths.

---

## 12. Layout Structures
- **Grid Layouts:** Enforce a 12-column layout for desktop screens.
  - Bento grids on Services: Balanced 3 or 4 columns.
- **Line Width Limit:** Paragraph block widths should never exceed `680px` (`max-w-2xl`) for ease of reading.

---

## 13. Responsive System
- **Breakpoints:**
  - Small mobile: `<375px`
  - Mobile: `>=375px` (sm)
  - Tablet: `>=768px` (md)
  - Laptop: `>=1024px` (lg)
  - Desktop: `>=1280px` (xl)
- **Responsive Behaviors:**
  - **SiteHeader:** Navigation collapses to a hamburger menu drawer at screen widths below `1024px`.
  - **Form grids:** 2-column configurations stack to 1-column on mobile.
  - **Tables:** Data tables must scroll horizontally (`overflow-x-auto`) to avoid clipping text.
  - **Touch targets:** Interactive elements have a minimum height of `44px` on mobile viewports.

---

## 14. Motion System
- **Transitions:**
  - Color transitions: `150ms ease`.
  - Accordion & dropdown: `200ms cubic-bezier(0.4, 0, 0.2, 1)`.
  - Slide drawers: `240ms cubic-bezier(0.16, 1, 0.3, 1)`.
- **Accessibility:** Motion is completely disabled for users who set OS preferences to reduced motion (`motion-reduce:transition-none`).

---

## 15. Iconography System
- **Icon Set:** `Lucide React` only.
- **Stroke Width:** `1.5px` or `2px` depending on size context.
- **Sizes:**
  - Inline elements: `16px`.
  - Headers and tabs: `20px`.
  - Empty states / Placeholders: `32px`.
- **Accessibility:** Every icon must have an associated text label, or an explicit `aria-label`/`title` attribute for screen readers.

---

## 16. Imagery Standards
- **Style:** Real photography showing office layouts, technical infrastructure, teams, and PoC labs.
- **Avoid:** Corporate handshakes, generic 3D neural nets, and abstract technology vectors.
- **Placeholders:** Use simple gray vector meshes with the tag `[Real imagery required - Sao Mộc]`.

---

## 17. Component States
All reusable controls must support the following states:
- **Button:**
  - Primary: Burgundy background, white text. Active state uses a slight compression `active:scale-[0.98]`.
  - Secondary: White background, slate border, slate text.
  - Loading: Replaces text with a spin loader and disables clicks.
- **Inputs:**
  - Default: Slate-200 border, slate placeholder.
  - Focus: Burgundy border ring with focus offset.
  - Error: Rose border, displaying helper text in `rose-600`.

---

## 18. Page Layout Templates
- **Homepage:** Hero layout -> Partner logo bar -> Core services -> Capability statistics -> Featured case studies -> Contact CTA -> Footer.
- **Products:** Header -> Category filters -> Product lists (tagging partners HPE/Juniper/Splunk clearly) -> Technical comparison tables -> CTA contact.
- **Services:** Service categories -> Engagement options -> 5-step workflow -> Accordion FAQs -> CTA contact.
- **Capabilities:** Narrative & Principles -> Certifications -> Team proportions -> Offices.
- **Contact:** Form -> Direct contact line -> Response SLA (within 1 business day).

---

## 19. Content Design & Tone of Voice
- **Tone:** Technical, competent, calm, and pragmatic.
- **Banned Buzzwords:** Avoid words like "into the orbit of innovation" in copy. Do not use phrases like "Unlock the future", "AI-powered", or "Next-gen".
- **Action-Oriented CTAs:**
  - ✅ `Đặt lịch tư vấn` (Schedule consultation), `Xem năng lực triển khai` (View capabilities).
  - ❌ `Bắt đầu` (Start), `Khám phá` (Explore).
- **Verification Tagging:** All unverified figures or details must be labeled with `[CONTENT VERIFICATION REQUIRED]`.

---

## 20. Accessibility Requirements
- **Contrast:** Standard text color contrast ratio is minimum `4.5:1` against backgrounds.
- **Keyboard Control:** All interactive elements must be accessible via `Tab`, `Space`, `Enter`, and `Escape` keys. Focus indicators must be clearly visible.
- **Aria Attributes:** Dynamically link input errors using `aria-describedby` tags.

---

## 21. Search Engine Optimization (SEO)
- Inject metadata using Next.js Metadata API.
- Maintain consistent alternate URL parameters and `hreflang` parameters.
- Provide JSON-LD structured schemas for Organization and Services.

---

## 22. Performance Rules
- Enforce React Server Components as the default format. Use `"use client"` selectively for forms or drawers.
- Compress images using `next/image` to AVIF/WebP formats with appropriate sizes.
- Rely on Next.js local fonts to eliminate layout shift (CLS).

---

## 23. Next.js Implementation Standard
Detailed directory layout matches standard app router configurations:
```text
app/
  [locale]/
    layout.tsx
    page.tsx
    products/
    services/
    capabilities/
    contact/
components/
  ui/
  layout/
  marketing/
  forms/
```

---

## 24. Tailwind CSS v4 Configuration
Configure design tokens inside `globals.css` using the `@theme inline` rule:
```css
@import "tailwindcss";

@theme inline {
  --color-brand-50: #FBF1F2;
  --color-brand-100: #F7D6D9;
  --color-brand-600: #800020; /* Primary Burgundy */
  --color-brand-700: #600018; /* Hover Burgundy */
  
  --color-text-primary: #0F172A;
  --color-text-secondary: #475569;
  --color-text-muted: #64748B;
  
  --color-bg-default: #FAFAFA;
  --color-surface-card: #FFFFFF;
  
  --radius-xs: 4px;
  --radius-sm: 8px;
  --radius-md: 10px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  
  --font-sans: 'Plus Jakarta Sans', sans-serif;
}
```

---

## 25. Anti-Patterns
- **No colorful gradient meshes** or neon glowing boxes.
- **No filler marketing text** or empty spaces without functional roles.
- **No custom border radiuses** outside the 4px scale.
- **No unverified metrics** without check markers.

---

## 26. Execution Standards
- Always refer to existing components before designing or programming new code blocks.
- Never write hard-coded HEX values in code classes when theme colors exist.
- Ensure API and navigation route integrity during redesigns.

---

## 27. Design Exception Policy
Deviations from standard tokens are allowed ONLY for:
1. Critical accessibility issues.
2. Performance optimizations.
3. Complex business operations.
All exceptions must be written down in `DESIGN_EXCEPTIONS.md`.

---

## 28. Review Checklist
- [ ] Primary accents shifted to deep burgundy `#800020`?
- [ ] No placeholder neon gradients or custom JS-tracking cursor elements?
- [ ] Contrast ratios checked for all text elements?
- [ ] Form errors connected to input boxes via `aria-describedby`?
- [ ] Next.js Metadata API alternates defined correctly?

---

## 29. AI Prompts for Sub-agents
```text
You are an expert Next.js and Tailwind CSS v4 frontend developer.
You are tasked with editing/creating interfaces for the Jupiter Solutions site.
First, read design/DESIGN_SYSTEM_JUPITER.md carefully.
Follow these:
1. Use burgundy color variables (--color-brand-600) for accents and remove cyan/neon components.
2. Maintain standard 4px spacing and radius scales.
3. Leverage Server Components as the default coding format.
4. Keep interface strings minimal. Avoid placeholder content.
```
