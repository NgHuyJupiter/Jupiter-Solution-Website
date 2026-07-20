# Homepage Design Specifications - Overrides

This document defines page-specific design rules for the **Jupiter Solutions Homepage**.

---

## 1. Landing Pattern & Layouts
*   **Pattern Name:** Trust & Authority + Conversion
*   **Layout Sections:**
    *   *Hero:* Asymmetric split (7 cols left text & CTA, 5 cols right Precision Orbit diagram).
    *   *Section Breaks:* Thin `1px` horizontal boundaries with aligned coordinate markers (`+` grid junctions).

---

## 2. Graphic Language: Precision Orbit
*   **Hero Visual:** Detailed modular systems drawing in SVG format.
    *   *Visual Nodes:* Security SOC, Cloud infra, software cores.
    *   *Subtle Mark:* Crooked segments spelling the geometric shape of a 'J'.
*   **Grid Layouts:** Crosshair `+` symbols offset at section borders.

---

## 3. Motion & Transitions
*   **Intro Animations:**
    *   Hero heading: translation up `16px` on opacity fade (`var(--motion-medium)`).
    *   Staggered text: description and buttons delayed by `100ms` and `200ms`.
*   **Interaction timing:** All hover states transition over `200ms` standard curve.
*   **Reduced-Motion Override:** Instantly displays all graphics at full opacity, bypasses all translation slide keyframes.
