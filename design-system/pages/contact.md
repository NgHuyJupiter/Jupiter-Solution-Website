# Contact Page Design Specifications - Overrides

This document defines page-specific design rules for the **Jupiter Solutions Contact Page & Form**.

---

## 1. Grid Composition
*   **Structure:** 12-column desktop split layout (5 columns contact direct info, 7 columns interactive B2B pre-sales pre-qualification form).

---

## 2. Interactive Form Inputs
*   **Borders & focus rings:** Inputs and selects style with focus boundaries:
    *   Transition border color to primary brand burgundy (`#7A1F2B`).
    *   Add soft burgundy glow outline ring (`focus:ring-2 focus:ring-brand-500/20`).
*   **Error Indicators:**
    *   Display helper messages underneath inputs in warning red (`text-rose-600`).
    *   Animate entry with fade-in.
    *   Connect fields directly via `aria-describedby` matching the error IDs.
*   **Success Messages:** Rendered using standard green panel overlays (`bg-emerald-50`, `border-emerald-200`) with entry scale animation.
