# Hệ thống Thiết kế Sao Mộc · Jupiter Solutions Technology

Tài liệu này là nguồn tham chiếu chuẩn, nhất quán và bắt buộc áp dụng để thiết kế, lập trình frontend và duy trì ngôn ngữ hình ảnh cho hệ thống website doanh nghiệp của **Sao Mộc · Jupiter Solutions Technology**.

---

## 1. Mục đích
Hệ thống thiết kế này (Design System) được xây dựng nhằm:
- Chuẩn hóa ngôn ngữ visual, cấu trúc giao diện và trải nghiệm người dùng cho website B2B công nghệ cao.
- Giúp các frontend developer và AI coding assistant dễ dàng tạo dựng hoặc chỉnh sửa giao diện nhất quán, tránh tự sáng tạo tùy tiện.
- Giữ vững tính nhất quán của tiếng nói thương hiệu và giao diện B2B chuyên nghiệp trong dài hạn.
- Đảm bảo chất lượng sản phẩm đầu ra luôn đạt tiêu chuẩn premium, dễ tiếp cận (Accessibility) và hiệu năng cao.

---

## 2. Brand Foundation (Nền tảng thương hiệu)
- **Tên thương hiệu chính thức:**
  - Tiếng Việt: `Sao Mộc`
  - Tiếng Anh: `Jupiter Solutions`
  - Tên đầy đủ: `Sao Mộc · Jupiter Solutions Technology`
- **Lĩnh vực hoạt động:** Giải pháp phần mềm doanh nghiệp, chuyển đổi số, AI ứng dụng, Data & Analytics, Cloud & DevOps, Tích hợp hệ thống, Hạ tầng mạng và an ninh thông tin, Vận hành & Bảo trì.
- **Đối tượng khách hàng chính:** Ban lãnh đạo, CTO, CIO, IT Director, Head of Engineering, Procurement của các tập đoàn, ngân hàng và tổ chức tài chính lớn.
- **Tính cách thương hiệu (Brand Personality):** 
  - **Intelligent (Thông minh):** Hiểu sâu về công nghệ và nghiệp vụ doanh nghiệp.
  - **Premium (Cao cấp):** Tinh tế, lịch sự, chuyên nghiệp, không phô trương.
  - **Trustworthy (Đáng tin cậy):** Đặt uy tín kỹ thuật lên hàng đầu, cam kết SLA thực tế.
  - **Engineering-led (Định hướng kỹ thuật):** Chú trọng cấu trúc chuẩn hóa, giải pháp thực dụng và hiệu năng cao.
  - **Calm (Điềm đạm):** Nhẹ nhàng, tự tin, không sử dụng các từ ngữ sáo rỗng hoặc hiệu ứng lòe loẹt.

---

## 3. Design Principles (Nguyên tắc thiết kế cốt lõi)
Hệ thống thiết kế của Sao Mộc dựa trên 4 trụ cột chính:
1. **Credibility before Spectacle (Độ tin cậy vượt trên sự trình diễn):** Giao diện phải phục vụ sự tin tưởng trước. Tránh các hiệu ứng "AI-slop", 3D trôi nổi hoặc glow neon làm loãng nội dung.
2. **Engineering Clarity (Rõ ràng về kỹ thuật):** Bố cục và thông tin phải dễ dàng quét đọc, các thông số kỹ thuật rõ ràng, case study chân thực, quy trình làm việc rành mạch.
3. **Controlled Visual Expression (Kiểm soát mức độ thể hiện):** Mọi graphic element hay khoảng trống phải có mục tiêu chức năng. Không thêm thắt chi tiết chỉ để lấp đầy không gian.
4. **Consistency over Novelty (Nhất quán quan trọng hơn sự mới lạ):** Sử dụng nhất quán các hard tokens, spacing scale, radius và components đã định nghĩa. Không tự ý thêm border-radius hay mã màu mới cho từng section.

---

## 4. Visual Language (Ngôn ngữ hình ảnh)
- **Cảm hứng thiết kế:** Lấy cảm hứng từ quỹ đạo chuyển động có kiểm soát (orbital motion), trọng lực (gravity), cấu trúc khối hình học vững chãi (monolithic structures), kiến trúc mô-đun (modular systems) và luồng dữ liệu liên tục.
- **Tránh tuyệt đối:** Tránh các hình ảnh robot 3D, mạng thần kinh phát sáng chung chung, chip bán dẫn minh họa giả lập, thành phố cyberpunk hoặc vũ trụ viễn tưởng.
- **Biểu tượng thương hiệu:** Sử dụng chữ J cách điệu hình học tối giản, tích hợp cấu trúc quỹ đạo tròn ẩn hoặc các đường cắt chính xác, thể hiện chuyển động tĩnh lặng và bền vững.

---

## 5. Hard Tokens (Hệ thống Token cứng)
Hệ thống token cứng được đồng bộ trực tiếp với các biến CSS trong `globals.css` để ngăn chặn việc sử dụng arbitrary values (giá trị tùy tiện).

### Spacing Tokens (Hệ thống khoảng cách)
Dựa trên grid 4px:
- `spacing.2`: 8px (`gap-2`, `p-2`)
- `spacing.3`: 12px (`gap-3`, `p-3`)
- `spacing.4`: 16px (`gap-4`, `p-4`)
- `spacing.6`: 24px (`gap-6`, `p-6`)
- `spacing.8`: 32px (`gap-8`, `p-8`)
- `spacing.12`: 48px (`gap-12`, `p-12`)
- `spacing.16`: 64px (`gap-16`, `p-16`)
- `spacing.24`: 96px (`gap-24`, `p-24`)

### Radius Tokens (Hệ thống bo góc)
- `radius.xs`: 4px (`rounded-sm`) — Dùng cho badge, tag nhỏ.
- `radius.sm`: 8px (`rounded`) — Dùng cho inputs, inline tags.
- `radius.md`: 10px (`rounded-md`) — Dùng cho buttons, select dropdowns.
- `radius.lg`: 12px (`rounded-lg`) — Dùng cho bento cards, product cards.
- `radius.xl`: 16px (`rounded-xl`) — Dùng cho panels, lớn hơn.
- `radius.2xl`: 20px (`rounded-2xl`) — Dùng cho dialog modals lớn.
- `radius.full`: 9999px (`rounded-full`) — Chỉ dùng cho hình tròn avatar hoặc toggle switch.

### Border Tokens
- `border.subtle`: 1px solid `#E2E8F0` (`border-slate-200`) — Dùng cho divider và card border.
- `border.default`: 1px solid `#CBD5E1` (`border-slate-300`) — Dùng cho form inputs mặc định.
- `border.brand`: 1.5px solid `#800020` (`border-burgundy-600`) — Dùng cho active state.

---

## 6. Typography (Hệ thống chữ)
Ưu tiên hàng đầu cho font chữ hiển thị tiếng Việt mượt mà, chuyên nghiệp và có độ tương phản cao.

- **Primary Font Family:** `Plus Jakarta Sans`, fallback stack: `Be Vietnam Pro`, `Inter`, `sans-serif` (Thông qua `next/font/google`).
- **Monospace Font Family:** `JetBrains Mono` (Dành cho thông số kỹ thuật hoặc mã lỗi).

### Font Scale chuẩn:
1. **Display (Hero):** 40px (Desktop) / 32px (Mobile), line-height 1.2, weight 700.
2. **Heading 1:** 30px (Desktop) / 24px (Mobile), line-height 1.3, weight 700.
3. **Heading 2:** 24px (Desktop) / 20px (Mobile), line-height 1.35, weight 600.
4. **Heading 3:** 20px (Desktop) / 18px (Mobile), line-height 1.4, weight 600.
5. **Body Large:** 18px (Desktop) / 16px (Mobile), line-height 1.5, weight 400.
6. **Body (Mặc định):** 16px, line-height 1.6, weight 400.
7. **Body Small / Table:** 14px, line-height 1.5, weight 400 hoặc 500.
8. **Caption:** 12px, line-height 1.4, weight 500.

- **Quy tắc typography:**
  - Không viết hoa toàn bộ (uppercase) cho các đoạn text dài quá 3 từ.
  - Không dùng letter-spacing quá rộng gây khó đọc tiếng Việt.
  - Không sử dụng font size nhỏ hơn 12px cho bất kỳ yếu tố tương tác nào.

---

## 7. Color (Hệ thống màu sắc)
Thương hiệu Sao Mộc sử dụng màu **đỏ đô (burgundy/maroon)** làm màu nhận diện chính, kết hợp với các bề mặt trung tính sạch sẽ. Tránh xa các tone xanh lam SaaS phổ thông hoặc neon phát sáng.

### Palette màu chi tiết:
- **Brand Primary:** `#800020` (Đỏ đô / Burgundy) — Dùng cho primary CTA, active elements, visual anchors.
- **Brand Hover:** `#600018` — Trạng thái hover của nút đỏ đô.
- **Brand Soft:** `#FBF1F2` — Nền đỏ đô siêu nhạt (burgundy soft tint) cho highlight section.
- **Neutral Background:** `#FAFAFA` (Off-white dịu) — Nền chính của ứng dụng.
- **Elevated Surface:** `#FFFFFF` (Trắng tinh) — Nền của card, form, dialog.
- **Primary Text:** `#0F172A` (`slate-900`) — Chữ chính, tiêu đề.
- **Secondary Text:** `#475569` (`slate-600`) — Mô tả, phụ đề.
- **Muted Text:** `#64748B` (`slate-500`) — Placeholder, meta data.
- **Border Default:** `#E2E8F0` (`slate-200`) — Đường kẻ, border card.
- **Success:** `#059669` (`emerald-600`) — Trạng thái tích cực.
- **Warning:** `#D97706` (`amber-600`) — Cảnh báo (sử dụng tiết chế).
- **Danger:** `#E11D48` (`rose-600`) — Lỗi, nguy hiểm.
- **Information:** `#0284C7` (`sky-600`) — Thông tin bổ sung.

---

## 8. Spacing (Quy chuẩn khoảng cách)
Khoảng trống phải tạo nhịp điệu dễ scan dữ liệu, phân rõ mức độ quan trọng:
- **Section Rhythm:**
  - Desktop: padding dọc `96px` (`py-24`) đến `64px` (`py-16`).
  - Mobile: padding dọc `48px` (`py-12`) đến `40px` (`py-10`).
- **Gutter và Page Container:**
  - Max width container: `1280px` (`max-w-7xl`).
  - Padding gutter hai bên: `16px` (`px-4`) trên mobile, `32px` (`px-8`) trên desktop.
- **Stack Spacing (Chiều dọc):**
  - Giữa tiêu đề và nội dung: `24px` (`space-y-6`).
  - Giữa các form field: `16px` (`space-y-4`).

---

## 9. Radius (Quy chuẩn bo góc)
Sử dụng radius chuẩn để giữ tính nhất quán kiến trúc:
- **rounded-sm (8px):** Input field, select options.
- **rounded-md (10px):** Buttons, interactive cards nhỏ.
- **rounded-lg (12px):** Bento card, service block.
- **rounded-xl (16px):** Dialog container, popup form.

---

## 10. Borders (Quy chuẩn đường viền)
Đường viền đóng vai trò ngăn cách các lớp thông tin sạch sẽ thay vì dùng shadow tối màu.
- Dùng viền mỏng `1px` màu `#E2E8F0` (`border-slate-200`) cho hầu hết các card và panels.
- Khi hover, chuyển nhẹ sang `#CBD5E1` (`border-slate-300`).
- Không dùng viền dày trên 2px ngoại trừ tiêu điểm (focus ring) của bàn phím.

---

## 11. Shadows (Quy chuẩn bóng đổ)
Bóng đổ phải cực kỳ tinh tế và tối giản:
- **Card Shadow:** `shadow-sm` (bóng đổ rất nhẹ, độ mờ thấp).
- **Overlay/Modal Shadow:** `shadow-md` hoặc `shadow-lg` cho dialog nổi.
- **Cấm:** Tuyệt đối không sử dụng bóng đổ có màu (colored shadow), hiệu ứng phát sáng (glow) hay bóng đổ lan quá rộng tạo cảm giác nặng nề.

---

## 12. Layout System (Hệ thống bố cục)
- **Grid System:** Sử dụng flexbox và CSS Grid dựa trên hệ 12 cột cho desktop.
  - Bento grid của trang Dịch vụ: 3 cột hoặc 4 cột cân xứng.
  - Bố cục trang sản phẩm: dạng list/card chia 3.
- **Reading Width:** Các đoạn mô tả dài không được vượt quá `680px` (khoảng `text-lg max-w-2xl`) để tối ưu hóa khả năng đọc của mắt người.

---

## 13. Responsive Standards (Tiêu chuẩn co giãn)
Thiết kế theo định hướng mobile-first:
- **Breakpoints:**
  - Mobile nhỏ: `<375px`
  - Mobile mặc định: `>=375px` (sm)
  - Tablet: `>=768px` (md)
  - Laptop: `>=1024px` (lg)
  - Desktop: `>=1280px` (xl)
- **Hành vi đáp ứng:**
  - **SiteHeader:** Thu về hamburger menu có drawer từ góc bên phải ở màn hình dưới `1024px`.
  - **Form Grid:** Cấu trúc form 2 cột trên desktop sẽ tự động xếp chồng (stack) thành 1 cột trên mobile.
  - **Tables:** Sử dụng thanh cuộn ngang độc lập cho các bảng thông số kỹ thuật dài (`overflow-x-auto`), tuyệt đối không làm tràn hoặc co text quá nhỏ.
  - **Touch Targets:** Nút và input trên mobile có chiều cao tối thiểu `44px` để ngón tay dễ chạm.

---

## 14. Motion (Quy chuẩn chuyển động)
Chuyển động chỉ được sử dụng để định hướng trạng thái, không dùng để gây chú ý.
- **Timing:** 
  - Hover chuyển màu: `150ms ease`.
  - Mở accordion / dropdown: `200ms cubic-bezier(0.4, 0, 0.2, 1)`.
  - Trượt Mobile menu: `240ms cubic-bezier(0.16, 1, 0.3, 1)`.
- **Reduced Motion:** Tắt toàn bộ hiệu ứng translate dịch chuyển nếu hệ điều hành của người dùng yêu cầu giảm chuyển động (`motion-reduce:transition-none`).

---

## 15. Iconography (Hệ thống biểu tượng)
- **Thư viện duy nhất:** `Lucide React`.
- **Độ dày nét vẽ (Stroke width):** Cố định ở mức `1.5px` hoặc `2px` tùy theo ngữ cảnh, không dùng nét vẽ quá dày.
- **Kích thước chuẩn:**
  - Inline trong button/text: `16px`.
  - Header hoặc menu item: `20px`.
  - Empty state / Illustration: `32px`.
- **Nguyên tắc:** Mỗi icon phải đi kèm nhãn text rõ ràng, hoặc có thuộc tính `title`/`aria-label` cho các icon button chỉ có hình.

---

## 16. Imagery (Quy chuẩn hình ảnh)
- **Phong cách:** Ưu tiên ảnh chụp thực tế về văn phòng, hạ tầng kỹ thuật thật, đội ngũ chuyên gia làm việc thực tế, ảnh PoC lab.
- **Tránh xa:** Stock photo bắt tay sáo rỗng, ảnh robot 3D bóng bẩy hoặc hình vẽ trừu tượng không có nội dung nghiệp vụ thực tế.
- **Trạng thái placeholder:** Nếu chưa có ảnh thật, sử dụng cấu trúc lưới vector hình học xám nhẹ kèm ghi chú `[Yêu cầu ảnh thực tế - Sao Mộc]`, không lấy ảnh mạng giả làm ảnh của công ty.

---

## 17. Component Rules (Quy chuẩn Component)
Mỗi component được xây dựng phải đáp ứng đầy đủ các state:
- **Button:**
  - Primary: Nền đỏ đô, chữ trắng. Hover: Nền đỏ đô đậm hơn. Active: co lại nhẹ (`active:scale-[0.98]`).
  - Secondary: Nền trắng, viền xám nhạt, chữ xám đậm.
  - Loading state: Hiện spinner nhỏ 16px ở góc, disable click tạm thời.
- **Form Input:**
  - Mặc định: Viền xám nhạt, placeholder xám vừa.
  - Focus: Viền đỏ đô, có outline ring nhẹ.
  - Error: Viền màu đỏ cảnh báo (`border-rose-500`), kèm helper text báo lỗi ở dưới.

---

## 18. Page Templates (Mẫu trang chuẩn)
Quy hoạch cấu trúc các trang chính thức:
- **Homepage:** Hero chính xác mục tiêu -> Wall logo đối tác -> Core Services -> Capability stats (Đảm bảo số liệu thật) -> Highlight Case Studies -> Form CTA liên hệ -> Footer.
- **Products:** Header trang -> Category filter -> Grid Product Cards (Ghi rõ là đối tác triển khai chính hãng của Juniper/HPE/Splunk) -> Tech specs comparison -> CTA đặt tư vấn.
- **Services:** Group dịch vụ (Web, AI, Cloud, SOC, ATM) -> Mô hình hợp tác -> Quy trình 5 bước -> FAQ -> CTA liên hệ.
- **Capabilities/About:** công ty và tôn chỉ -> Đội ngũ kỹ sư & Chứng chỉ quốc tế -> Quy trình đảm bảo chất lượng -> Địa chỉ văn phòng chính.
- **Contact:** Form B2B chuẩn -> Direct contact info (Phone, Email) -> expected response time (trong vòng 1 ngày làm việc).

---

## 19. Content Design & Voice/Tone (Tiếng nói thương hiệu)
Tiếng nói của Sao Mộc phải **chuyên nghiệp, kỹ thuật, tự tin nhưng điềm đạm**:
- **Tránh xa sáo rỗng:** Tuyệt đối không dùng các từ như "vào quỹ đạo của đổi mới" trong mọi heading và copy, tránh các từ sáo rỗng như "Unlock the future", "Next-gen AI", "Revolutionize business".
- **CTA rõ ràng:** Sử dụng động từ cụ thể.
  - ✅ `Đặt lịch tư vấn`, `Xem năng lực triển khai`, `Gửi yêu cầu`.
  - ❌ `Bắt đầu`, `Khám phá`, `Vào quỹ đạo`.
- **Xác thực nội dung:** Mọi con số chưa được phê duyệt chính thức phải gắn thẻ `[CONTENT VERIFICATION REQUIRED]` để kiểm duyệt trước khi xuất bản.

---

## 20. Accessibility (Tiêu chuẩn dễ tiếp cận)
Thiết kế hướng tới WCAG 2.2 AA:
- **Tương phản:** Độ tương phản text tối thiểu `4.5:1` cho văn bản thường.
- **Keyboard navigation:** Người dùng phải điều khiển được toàn bộ website chỉ bằng phím `Tab`, `Space`, `Enter` và `Escape`.
- **Semantic HTML:** Luôn dùng đúng tag (`<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`). Không dùng thẻ `div` làm button.
- **Aria support:** Các input trong contact form có liên kết rõ ràng với error message thông qua thuộc tính `aria-describedby`.

---

## 21. SEO & Discoverability (Tối ưu tìm kiếm)
Tận dụng tối đa Next.js Metadata API:
- Định nghĩa sitemap tự động và page metadata cho từng route.
- Bắt buộc khai báo `robots.txt` chuẩn để bot Google quét.
- Sử dụng các thẻ `hreflang` liên kết giữa bản tiếng Anh và tiếng Việt chính xác.
- Khai báo Schema JSON-LD cho doanh nghiệp (Organization) và dịch vụ (Service) trong root layout.

---

## 22. Performance (Tiêu chuẩn hiệu năng)
- **Core Web Vitals:** Mục tiêu LCP < 2.5s, CLS = 0.
- **Next.js Server Components:** Sử dụng React Server Components làm mặc định để giảm lượng JavaScript truyền xuống client. Chỉ dùng `"use client"` cho form tương tác và drawer menu.
- **next/image:** Bắt buộc dùng `next/image` cho mọi ảnh, cung cấp thuộc tính `sizes` và định dạng WebP/AVIF tự động.
- **Font Loading:** Tải font thông qua hệ thống local của Next.js để ngăn chặn hiện tượng tráo font gây giật trang (FOUT).

---

## 23. Next.js Implementation Guide (Hướng dẫn triển khai)
Cấu trúc thư mục chuẩn hóa cho dự án Next.js:
```text
app/
  [locale]/
    layout.tsx       # Root layout đa ngôn ngữ
    page.tsx         # Trang chủ
    products/        # Trang sản phẩm
    services/        # Trang dịch vụ
    capabilities/    # Trang giới thiệu năng lực
    contact/         # Trang liên hệ
  globals.css        # Khai báo theme CSS
components/
  ui/                # Các component nguyên tử (Button, Input, Accordion)
  layout/            # Component layout chung (SiteHeader, Footer)
  marketing/         # Component marketing (ServiceCard, ProductCard)
  forms/             # Form xử lý nghiệp vụ (ContactForm)
lib/
  metadata/          # Cấu hình Metadata API
  utils/             # Hàm tiện ích (cn, validation)
```

---

## 24. Tailwind CSS v4 Mapping
Tailwind CSS v4 khai báo trực tiếp trong `globals.css` bằng CSS custom variables.

```css
@import "tailwindcss";

@theme inline {
  --color-brand-50: #FBF1F2;
  --color-brand-100: #F7D6D9;
  --color-brand-600: #800020; /* Màu Đỏ đô chính thức */
  --color-brand-700: #600018; /* Hover đỏ đô */
  
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
  --radius-2xl: 20px;
  
  --font-sans: 'Plus Jakarta Sans', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}
```

---

## 25. Anti-patterns (Những điều cấm kỵ)
- **Không dùng gradient neon phát sáng,** overlay tím AI hoặc glow bóng đổ rực rỡ.
- **Không nhồi nhét text sáo rỗng** ở các phần trống, giữ cấu trúc thông tin có chiều sâu.
- **Không dùng arbitrary border-radius** (ví dụ: `rounded-[28px]` hay `rounded-3xl` cho card thường).
- **Không dùng tag button giả** bằng thẻ `div` hoặc `span` không hỗ trợ keyboard focus.
- **Không sử dụng dữ liệu kinh doanh bịa đặt** mà chưa được đánh dấu kiểm duyệt.

---

## 26. Execution Rules (Quy tắc thực thi)
- AI assistant khi chỉnh sửa giao diện phải đối chiếu component hiện tại trước khi tạo mới.
- Bắt buộc tuân thủ đúng tên semantic token trong CSS thay vì viết cứng mã HEX vào style class.
- Khi refactor giao diện, không được thay đổi business API contract của trang nếu không có yêu cầu đặc biệt.

---

## 27. Exception Rules (Quy tắc xử lý ngoại lệ)
Chỉ cho phép phá vỡ các quy chuẩn thiết kế khi gặp yêu cầu đặc biệt về:
1. **Chức năng nghiệp vụ đặc thù** mà component mặc định không thể đáp ứng.
2. **Khắc phục lỗi accessibility** nghiêm trọng trên một số thiết bị hỗ trợ.
3. **Tối ưu hóa hiệu năng tải trang** vượt trội.
Mọi ngoại lệ phải được ghi lại rõ ràng trong file `DESIGN_EXCEPTIONS.md` tự động tạo ra.

---

## 28. Review Checklist (Danh sách kiểm tra trước khi ship)
Trước khi kết xuất mã nguồn hoặc thiết kế, hãy kiểm tra:
- [ ] Giao diện đã sử dụng màu Đỏ đô làm màu chủ đạo và loại bỏ hoàn toàn màu xanh/cyan neon?
- [ ] Mọi con số/số liệu thống kê đã được kiểm duyệt hoặc gắn tag `[CONTENT VERIFICATION REQUIRED]`?
- [ ] Có bất kỳ nút bấm nào bị thiếu focus outline khi dùng phím Tab không?
- [ ] Các input form đã liên kết `aria-describedby` với câu báo lỗi chưa?
- [ ] Kích thước font chữ và padding dọc đã tự động scale đúng chuẩn trên mobile chưa?
- [ ] Đã khai báo thẻ Next.js Metadata API đầy đủ cho trang chưa?

---

## 29. AI Session Prompts (Prompts chuẩn cho AI phiên sau)
Dành cho AI khác tiếp tục phát triển codebase này:

```text
Bạn là AI chuyên phát triển frontend Next.js App Router và Tailwind CSS v4.
Nhiệm vụ của bạn là sửa đổi/thêm mới giao diện cho website doanh nghiệp Sao Mộc.
Hãy đọc kỹ file design/DESIGN_SYSTEM_JUPITER_VN.md trước khi viết mã.
Yêu cầu bắt buộc:
1. Chỉ dùng các biến màu thương hiệu đỏ đô (--color-brand-600) thay cho các màu cyan/SaaS cũ.
2. Tuyệt đối không dùng gradient, shadow lòe loẹt, hay glow neon.
3. Bo góc tuân thủ đúng hệ token 4px (rounded-lg cho card, rounded-md cho button).
4. Viết mã có cấu trúc Server Components làm mặc định, sử dụng TypeScript nghiêm ngặt.
5. Giữ các nhãn text tối giản, không tự bịa thông tin khách hàng hay dự án.
```
