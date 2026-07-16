# Component Inventory — Sao Mộc · Jupiter Solutions Technology

This catalog audits the components currently in use on `https://www.jupiter-ai.pro/` and specifies standard, reusable components with variants, states, and accessibility contracts.

## Reusable Components List

| Component Name | Current Implementation | Proposed Shared Component | Variants | States | Responsive Behavior | Accessibility | Location | Migration Priority |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Button** | Inline classes, e.g., `.btn`, `.btn-primary`, `.btn-ghost` | `Button` | Primary (Burgundy), Secondary (Slate Outline), Ghost, Text Link | Normal, Hover, Active, Focus, Disabled, Loading | Full-width on mobile viewports | Native `<button>` or `<a>`, focus ring, ARIA label if icon-only | `components/ui/button.tsx` | High |
| **SiteHeader** | Sticky `.nav` element | `SiteHeader` | Main (Transparent to solid slate) | Normal, Hover link, Focus, Mobile menu open | Collapses links to burger menu at `<1024px` | Native `<nav>`, role landmarks, skip-to-content anchor | `components/layout/site-header.tsx` | High |
| **MobileNavigation** | Side slide-in drawer `#mobile-menu` | `MobileNavigation` | Fullscreen overlay drawer | Open, Closed | Hidden on screens `>=1024px` | Modal role, focus-trap, ESC to dismiss, backdrop tap close | `components/layout/mobile-navigation.tsx` | High |
| **Footer** | Complex `.cta` grid structure | `Footer` | Default | Standard | 4 columns stack vertically on tablet/mobile | Semantic `<footer>` landmark, verified business license field | `components/layout/footer.tsx` | High |
| **LanguageSwitcher** | Button group `.lang-toggle` | `LanguageSwitcher` | Inline Header group | Active, Inactive, Hover | Stacked inside mobile menu drawer | ARIA role group, current language indicators | `components/layout/language-switcher.tsx` | Medium |
| **Container** | Inline `.wrap`, `.wrap-wide` padding classes | `Container` | Center (Max-w-7xl), Wide (Max-w-5xl) | Static | Responsive paddings (`px-4` mobile to `px-8` desktop) | None (Layout wrapper) | `components/ui/container.tsx` | High |
| **Section** | Generic `.section` and `.stats` classes | `Section` | Default (Off-white), Alternate (Charcoal), Dark (Burgundy soft) | Static | Spacing rhythm reduces by 30-40% on mobile devices | Semantic `<section>` element with heading tags | `components/ui/section.tsx` | High |
| **Typography** | `.page-title`, `.title-md`, `.lede`, `.display` | `Typography` | Display, Heading 1, Heading 2, Heading 3, Body, Muted, Code | Static | Dynamic scale using CSS clamp/utility classes | Correct heading outline tree (`h1` -> `h2` -> `h3`) | `components/ui/typography.tsx` | High |
| **ServiceCard** | Bento grid blocks `.bento-card` with numbers 01-08 | `ServiceCard` | Bento card | Normal, Hover glow, Selected | Grid goes from 3-column desktop to 1-column mobile | Semantic titles, descriptive text, visible technology tags | `components/marketing/service-card.tsx` | Medium |
| **ProductCard** | Complex nested lists `.pgroup` | `ProductCard` | Category card | Standard, Expanded state, Hover item | Grid columns wrap, sublists scroll on mobile screens | Clear list formatting, ARIA labels for vendor partnership tags | `components/marketing/product-card.tsx` | Medium |
| **CaseStudyCard** | Stat grid items `.case` | `CaseStudyCard` | Horizontal card | Normal, Hover link | Stacks details vertically on mobile viewport | Semantic headers, labeled metadata lists, clear action CTA | `components/marketing/case-study-card.tsx` | Medium |
| **Accordion** | Native `<details>` element with `.faq` class | `Accordion` | FAQ list item | Open, Closed | Flex-wrap layout adjustments for long header texts | Native HTML `<details>` and `<summary>` support | `components/ui/accordion.tsx` | Medium |
| **ContactForm** | Form in `.cta-card-form` | `ContactForm` | Default | Idle, Submitting, Success, Error | 2-column input fields stack vertically on mobile screens | Labels explicitly bound to fields, `aria-describedby` errors | `components/forms/contact-form.tsx` | High |
| **Metric** | Stats labels `.stat` | `Metric` | Hero metric, Section metric | Static | Text scale decreases on mobile viewports | Screen reader friendly numbers and labels | `components/ui/metric.tsx` | Medium |
| **LogoWall** | CSS Marquee `.logocloud-marquee` | `LogoWall` | Auto-scroll marquee | Active scrolling, Paused | Scroll rate slows down, width adjustments | Screen readers skip decorative logo walls | `components/ui/logo-wall.tsx` | Low |
| **TechnologyTag** | Static list items `.tag`, `.stack-item` | `TechnologyTag` | Default, Accent | Normal, Hover | Wraps inline into rows automatically | Semantic list structure | `components/ui/technology-tag.tsx` | Low |

---

## Component Anatomy Rules

### 1. Button Anatomy
- **Structure:** `[Prefix Icon] + [Label Text] + [Suffix Icon]`
- **Sizes:**
  - `sm`: height `32px` (`h-8`), font `12px` (`text-xs`), horizontal padding `12px`
  - `md`: height `40px` (`h-10`), font `14px` (`text-sm`), horizontal padding `16px`
  - `lg`: height `44px` (`h-11`), font `16px` (`text-base`), horizontal padding `20px`
- **Branding Color Spec:**
  - **Primary:** Deep Burgundy (`#800020` or HSL burgundy primary), text white. Focus ring offset.
  - **Secondary:** White/slate background, border `slate-200`, text `slate-700`.
- **States:**
  - Hover: Darker shade (+10% tone shift).
  - Disabled: Background `slate-100`, text `slate-400`, cursor `not-allowed`.
  - Loading: Replaces suffix/prefix icon with `animate-spin` Lucide Loader icon.

### 2. Form Fields Anatomy
- **Structure:** `[Label text + Asterisk key] -> [Field input text box] -> [Aria-describedby error message]`
- **Height:** Standard height of input and select boxes is `44px` (`h-11`) to prevent mobile keyboard zooming (font-size >= 16px).
- **Radius:** `rounded-md` (10px radius).
- **States:**
  - Focus: Burgundy border ring (`ring-1 ring-burgundy-500`).
  - Error: Input border `rose-500`, text description `rose-600` (`text-xs`).
