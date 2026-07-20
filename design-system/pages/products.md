# Products Page Design Specifications - Overrides

This document defines page-specific design rules for the **Jupiter Solutions Products Page**.

---

## 1. Page Composition
*   **Pattern Name:** Integrated Partner Solutions
*   **Ownership Labels:** Clear tags separating partner brands (HPE, Juniper, Splunk, BeyondTrust, ForeScout) from implementation services.

---

## 2. Technical Specs Comparison Table
*   **Structure:** 5-column specs layout (Feature, Core Capability, Jupiter Premium, HPE/Juniper comparison, and Action column).
*   **Row Interactions:**
    *   Row hover highlighting using very light slate/gray backdrop (`bg-slate-50/70`).
    *   Inline actions: "Inquire Now" inline links with hover translations (`group-hover:translate-x-0.5`).
*   **Mobile Behavior:** The table wraps in `overflow-x-auto` to allow horizontal swipe without breaking layout bounds.
