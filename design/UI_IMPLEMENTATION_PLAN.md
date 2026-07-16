# UI Implementation Plan — Sao Mộc · Jupiter Solutions Technology

This plan defines the step-by-step technical implementation phases to deploy the new Design System.

---

## Phase 1: Foundation

### Task 1.1: Standardize Global CSS and Tailwind `@theme` mapping
- **Objective:** Establish the primitive and semantic CSS variables using the deep burgundy brand palette, 4px spacing systems, border-radius constants, and base typography rules in Tailwind CSS v4 style.
- **Files Affected:** 
  - `[NEW] [globals.css](file:///c:/Users/Admin/OneDrive/Desktop/jupiter/app/globals.css)`
- **Dependency:** None.
- **Acceptance Criteria:** 
  - Compiles with `@import "tailwindcss"`.
  - Defines `--color-brand-*` variables centering around burgundy `#800020` (maroon).
  - Eliminates all references to cyan, neon, or AI purple colors except as warnings.
- **Risk:** Brand color shifts may impact contrast on older screens. Must test WCAG AA ratios.
- **Estimated Complexity:** S

---

## Phase 2: Global Layout

### Task 2.1: Implement Next.js Root and Locale Layouts
- **Objective:** Create structural base layouts to support HTML language parameters (default `vi`), performance imports, web font initialization, and accessibility skips.
- **Files Affected:**
  - `[NEW] [layout.tsx](file:///c:/Users/Admin/OneDrive/Desktop/jupiter/app/layout.tsx)`
  - `[NEW] [layout.tsx](file:///c:/Users/Admin/OneDrive/Desktop/jupiter/app/%5Blocale%5D/layout.tsx)`
- **Dependency:** Phase 1 (globals.css)
- **Acceptance Criteria:**
  - Root layout integrates `Plus Jakarta Sans` or custom font dynamically via `next/font`.
  - Locale-specific subfolder setup handles localized title routing seamlessly.
  - Implements keyboard accessible skip links (`#main-content`).
- **Risk:** Routing conflicts if standard structure clashes with server setup.
- **Estimated Complexity:** M

---

## Phase 3: Shared Components

### Task 3.1: Build Base UI Components (Button, Link, Container, Section, Typography)
- **Objective:** Implement core UI primitives with complete state support, keyboard accessibility, and Tailwind v4 utility mappings.
- **Files Affected:**
  - `[NEW] [button.tsx](file:///c:/Users/Admin/OneDrive/Desktop/jupiter/components/ui/button.tsx)`
  - `[NEW] [link.tsx](file:///c:/Users/Admin/OneDrive/Desktop/jupiter/components/ui/link.tsx)`
  - `[NEW] [container.tsx](file:///c:/Users/Admin/OneDrive/Desktop/jupiter/components/ui/container.tsx)`
  - `[NEW] [section.tsx](file:///c:/Users/Admin/OneDrive/Desktop/jupiter/components/ui/section.tsx)`
  - `[NEW] [typography.tsx](file:///c:/Users/Admin/OneDrive/Desktop/jupiter/components/ui/typography.tsx)`
- **Dependency:** Phase 1
- **Acceptance Criteria:**
  - Button component handles `h-8`, `h-10`, `h-11` heights, disabled, and loading spinner states.
  - Typography exposes standard sizes (Display down to Caption) with strict margins.
  - Accessible focus outlines are present and styled properly.
- **Risk:** Premature abstraction might slow down page-specific custom UI needs.
- **Estimated Complexity:** M

### Task 3.2: Implement Global Site Header, Mobile Navigation, and Footer
- **Objective:** Deploy site-wide header containing the geometric logo, active link state markers, language switcher, footer columns, and keyboard focus trap navigation.
- **Files Affected:**
  - `[NEW] [site-header.tsx](file:///c:/Users/Admin/OneDrive/Desktop/jupiter/components/layout/site-header.tsx)`
  - `[NEW] [mobile-navigation.tsx](file:///c:/Users/Admin/OneDrive/Desktop/jupiter/components/layout/mobile-navigation.tsx)`
  - `[NEW] [footer.tsx](file:///c:/Users/Admin/OneDrive/Desktop/jupiter/components/layout/footer.tsx)`
- **Dependency:** Phase 3.1
- **Acceptance Criteria:**
  - Nav bar shifts to hamburger slide-out drawer on tablet sizes (`<1024px`).
  - Mobile menu traps focus, closes when clicking backdrop (`bg-slate-900/50`), and triggers via Escape key.
  - Footer displays the verified business license data.
- **Risk:** Navigation drawer overflow behavior on small screens.
- **Estimated Complexity:** M

---

## Phase 4: Homepage

### Task 4.1: Homepage Layout Migration
- **Objective:** Redesign homepage to leverage B2B structural hierarchy, displaying services, unverified metrics as verified blocks (or tagged appropriately), and logo wall.
- **Files Affected:**
  - `[NEW] [page.tsx](file:///c:/Users/Admin/OneDrive/Desktop/jupiter/app/%5Blocale%5D/page.tsx)`
- **Dependency:** Phase 3.2
- **Acceptance Criteria:**
  - Hero block uses simple, clean copy with deep burgundy accent highlights instead of neon.
  - Raw zero metrics are replaced by realistic placeholders tagged with `[CONTENT VERIFICATION REQUIRED]`.
- **Risk:** Homepage layout changes could lead to visual regression.
- **Estimated Complexity:** L

---

## Phase 5: Products Page

### Task 5.1: Products Category Layout Migration
- **Objective:** Organize third-party hardware listings (Juniper Networks, HPE, Splunk) clearly, preventing user confusion about OEM identities, with clear comparison tags.
- **Files Affected:**
  - `[NEW] [page.tsx](file:///c:/Users/Admin/OneDrive/Desktop/jupiter/app/%5Blocale%5D/products/page.tsx)`
  - `[NEW] [product-card.tsx](file:///c:/Users/Admin/OneDrive/Desktop/jupiter/components/marketing/product-card.tsx)`
- **Dependency:** Phase 3.2
- **Acceptance Criteria:**
  - Displays partner tags (`Juniper Networks`, `HPE`, `VMware`) distinctly.
  - Lists technical specifications and offers clear comparison layout elements.
- **Risk:** Long technical names overlapping table borders on mobile screen viewports.
- **Estimated Complexity:** M

---

## Phase 6: Services Page

### Task 6.1: Service Bento Grid Migration
- **Objective:** Restructure standard bento items to show problems, scopes, expected outcomes, and technology tags, avoiding placeholder visual illustrations.
- **Files Affected:**
  - `[NEW] [page.tsx](file:///c:/Users/Admin/OneDrive/Desktop/jupiter/app/%5Blocale%5D/services/page.tsx)`
  - `[NEW] [service-card.tsx](file:///c:/Users/Admin/OneDrive/Desktop/jupiter/components/marketing/service-card.tsx)`
- **Dependency:** Phase 3.2
- **Acceptance Criteria:**
  - Replaces neon line charts/diagrams with geometric, B2B-friendly visuals.
  - Incorporates specific scope text instead of filler paragraphs.
- **Risk:** Bento items scaling incorrectly on medium tablet screens.
- **Estimated Complexity:** M

---

## Phase 7: Capabilities/About Page

### Task 7.1: About Page and Organization Chart Scaffolding
- **Objective:** Outline team percentages, standard certifications, and company history with verified milestones.
- **Files Affected:**
  - `[NEW] [page.tsx](file:///c:/Users/Admin/OneDrive/Desktop/jupiter/app/%5Blocale%5D/capabilities/page.tsx)`
- **Dependency:** Phase 3.2
- **Acceptance Criteria:**
  - Standardizes the company foundation year to a single verified date or marks it with `[CONTENT VERIFICATION REQUIRED]`.
  - Integrates the 6 cert tags matching Lucide icons correctly.
- **Risk:** Unaligned numbers in staff percentages.
- **Estimated Complexity:** M

---

## Phase 8: Contact Page

### Task 8.1: B2B Contact Form Redesign
- **Objective:** Implement a robust contact form with strict validation parameters, budget/service selectors, and accessible markup mappings.
- **Files Affected:**
  - `[NEW] [page.tsx](file:///c:/Users/Admin/OneDrive/Desktop/jupiter/app/%5Blocale%5D/contact/page.tsx)`
  - `[NEW] [contact-form.tsx](file:///c:/Users/Admin/OneDrive/Desktop/jupiter/components/forms/contact-form.tsx)`
- **Dependency:** Phase 3.2
- **Acceptance Criteria:**
  - Inputs support required validation, focus borders, and aria-describedby errors.
  - Expected response times are clearly stated.
- **Risk:** Form submission UX lockouts due to incorrect handling of submitting states.
- **Estimated Complexity:** M

---

## Phase 9: Case Studies

### Task 9.1: Case Study Card Integration
- **Objective:** Scaffolds horizontal layouts detailing client context, challenges, solutions, and measurable outcomes.
- **Files Affected:**
  - `[NEW] [case-study-card.tsx](file:///c:/Users/Admin/OneDrive/Desktop/jupiter/components/marketing/case-study-card.tsx)`
- **Dependency:** Phase 3.1
- **Acceptance Criteria:**
  - Clearly structures case info: Bank case, Energy case, Splunk SOC case.
  - Contains disclaimer tagging for verification requirements.
- **Risk:** Lack of real customer permission requires generic tags instead of brands.
- **Estimated Complexity:** S

---

## Phase 10: Accessibility

### Task 10.1: Accessible Elements Audit and Fixes
- **Objective:** Ensure complete compliance with WCAG 2.2 AA (focus states, keyboard nav, screen readers, contrast checking).
- **Files Affected:** All component files.
- **Dependency:** Phase 3 to 9.
- **Acceptance Criteria:**
  - Tab navigation handles drawer overlays and modal forms cleanly.
  - High contrast margins are maintained.
- **Risk:** Complex focus traps could block normal flow.
- **Estimated Complexity:** S

---

## Phase 11: SEO

### Task 11.1: Next.js Metadata API and Alternates Integration
- **Objective:** Inject dynamic canonical headers, sitemaps, OpenGraph data, and hreflang VI/EN URL bindings.
- **Files Affected:**
  - `[NEW] [metadata-utils.ts](file:///c:/Users/Admin/OneDrive/Desktop/jupiter/lib/metadata/metadata-utils.ts)`
- **Dependency:** Phase 2
- **Acceptance Criteria:**
  - Automatically translates pages correctly.
  - Binds Organization schema formats for Google crawler indexing.
- **Risk:** Duplicate content warnings if localized routing fails.
- **Estimated Complexity:** S

---

## Phase 12: Performance

### Task 12.1: Server Components and Caching Standard
- **Objective:** Enforce Server-first page generation. Only load Client Components for specific interactions (e.g. form validation, drawers).
- **Files Affected:** All files.
- **Dependency:** Phase 2 to 9.
- **Acceptance Criteria:**
  - Homepage does not cause dynamic page hydrate delays.
  - Lazy loads heavy assets like maps or third-party widgets.
- **Risk:** Incorrect use of client-directives causing large bundles.
- **Estimated Complexity:** S

---

## Phase 13: QA

### Task 13.1: Final Validation Check
- **Objective:** Audit responsive scaling, color ratios, font renders, text sizes, and loading logic.
- **Files Affected:** All files.
- **Dependency:** All tasks.
- **Acceptance Criteria:**
  - Core web metrics are validated and comply with the checklist.
- **Risk:** Tight schedules can result in missed minor edge cases.
- **Estimated Complexity:** S
