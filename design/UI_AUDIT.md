# UI Audit — Sao Mộc · Jupiter Solutions Technology

This audit evaluates the current website (`https://www.jupiter-ai.pro/`) against visual guidelines, structural hierarchy, content credibility, accessibility, performance, and B2B corporate B2B standards.

## Audit Summary Table

| Page | Issue | Severity | Evidence | Recommendation | Priority |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `/` & `/capabilities` | **Contradictory Foundation Year** | Critical | Hero section states `Thành lập 2026`, but About section states `Thành lập 2019`. | Standardize founding year across all files. Add `[CONTENT VERIFICATION REQUIRED]`. | High |
| `/` | **Broken/Zero Performance Metrics** | Critical | Stats grid shows `0 Dự án bàn giao`, `0 Khách hàng doanh nghiệp`, `0+ Kỹ sư & chuyên gia`. | Replace raw zero placeholders with verified metrics. Add `[CONTENT VERIFICATION REQUIRED]`. | High |
| `/products` & `/capabilities` | **Inconsistent Staff & Expert Counts** | Major | Products lists `45+ Kỹ sư có chứng chỉ`, but Capabilities lists `60+ kỹ sư & chuyên gia`. | Align the numbers. Specify the breakout of engineers vs consultants. Add `[CONTENT VERIFICATION REQUIRED]`. | Medium |
| Global | **Cyan Accent & Glow Incompatibility** | Major | HTML tag: `data-accent="cyan"`. Background uses neon mesh-blobs. Buttons use `sky-600`. | Redefine color system to use deep burgundy (`đỏ đô`) as primary and remove all cyan/neon glows. | High |
| `/` & `/products` | **Unconfirmed Partners & Case Studies** | Major | Client names like `SVTIN`, `NexGen VN`. Case studies list unnamed top-5 banks. | Replace with real client logos and verified case studies. Add `[CONTENT VERIFICATION REQUIRED]`. | Medium |
| `/` & `/capabilities` | **Unconfirmed HCM & Singapore Offices** | Minor | About page lists HCM & Singapore offices, but contact direct list only Hanoi. | Verify addresses for these locations or remove them from text. Add `[CONTENT VERIFICATION REQUIRED]`. | Medium |
| Global | **Vague CTA Button Labels** | Minor | Hero: `Khám phá dịch vụ`, `Bắt đầu dự án`. | Change to precise action-oriented labels: `Xem dịch vụ triển khai`, `Đặt lịch tư vấn`. | Low |
| Global | **Route-less Language Switcher** | Major | Language toggle buttons do not change URLs or support alternate SEO indexing. | Establish actual `/vi` and `/en` routes with Next.js alternate metadata links. | High |
| `/contact` | **Form Validation Accessibility Gap** | Major | Inputs do not link to errors via `aria-describedby` or support keyboard error focus. | Implement dynamic React Hook Form validation with accessible error markers. | High |
| Global | **Performance Drag from Custom Cursor** | Minor | `.cursor-dot` and `.cursor-ring` run JavaScript tracking on mouseMove. | Remove custom cursors. Rely on standard browser cursors and clear focus states. | Medium |
| Global | **Legal Number Verification** | Major | Footer shows `Đăng ký kinh doanh số 0109876543`. | Confirm the validity of this registration number. Add `[CONTENT VERIFICATION REQUIRED]`. | High |
| Global | **Social & Career Fake Links** | Minor | Footer social and career navigation use `#` placeholder links. | Remove fake links or direct them to empty state placeholder pages. | Medium |

---

## Technical Audit Details

### 1. Information Architecture & Navigation
- **Current Setup:** Global sticky navigation header with links: `Trang chủ`, `Sản phẩm`, `Dịch vụ`, `Về chúng tôi`, `Liên hệ`.
- **Issues:**
  - On `/capabilities` the header title is `Một đội ngũ kỹ thuật, đa trọng lực.` which matches the `/capabilities` path but links to `Về chúng tôi` in navigation.
  - Submenus and footers contain dummy hashes (`#`) for social networks (LinkedIn, GitHub, Twitter) and Careers.
  - The language switcher triggers purely client-side React state rather than localizing Next.js metadata and document parameters, resulting in search engines only indexing the Vietnamese version.

### 2. Branding & Color System Alignment
- **Accent Mismatch:** The current site uses a bright cyan accent system (`#22D3EE` / `sky-600` / `indigo-400` / `purple-500` overlays) combined with neon glow effects in CSS. This conflicts with the company's designated **maroon/burgundy (`đỏ đô`)** core brand.
- **Background Noise:** The `.mesh-bg` with translating cyan blobs and `.noise` overlays degrade readability on mobile devices and distract from the B2B tech credibility.

### 3. Typography & Accessibility (WCAG 2.2 AA)
- **Contrast Check:** Low-contrast text elements are present:
  - Grey secondary/muted labels (e.g., `.dash-side-item`, `.p-note`) on dark/off-white background are below the 4.5:1 ratio.
  - Neon gradients on background elements fail structural element contrast constraints.
- **Keyboard Navigation:** The mobile drawer toggle and dropdowns lack correct focus indicators, and focus trap behavior is absent in dialogs.

### 4. SEO & Core Web Vitals
- **Metadata duplication:** Root metadata lacks page-specific parameters. All pages share generic title metadata.
- **Content density:** The Homepage contains heavy SVGs/diagrams and a custom JS-driven slider/marquee that causes cumulative layout shift (CLS).
