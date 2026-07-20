import Link from '../ui/link';

interface FooterProps {
  locale: string;
}

export default function Footer({ locale }: FooterProps) {
  const isVi = locale === 'vi';

  const text = isVi
    ? {
        tagline: 'Sao Mộc — đồng hành kiến tạo giải pháp công nghệ, chuyển đổi số và AI.',
        addressTitle: 'Địa chỉ',
        address: 'Tầng 12, Toà nhà Sao Mộc\n88 Đại Cồ Việt, Hai Bà Trưng\nHà Nội, Việt Nam',
        phone: 'Điện thoại',
        email: 'Email',
        license: '© 2026 Công ty Cổ phần Giải pháp Công nghệ Sao Mộc.',
        navTitle: 'Điều hướng',
        products: 'Sản phẩm',
        services: 'Dịch vụ',
        capabilities: 'Về chúng tôi',
        contact: 'Liên hệ',
        legalTitle: 'Pháp lý',
        privacy: 'Chính sách bảo mật',
        terms: 'Điều khoản sử dụng',
        careers: 'Tuyển dụng',
        hiringBadge: 'Đang tuyển',
        orbits: 'Quỹ đạo của đổi mới.',
      }
    : {
        tagline: 'Sao Mộc — your partner in enterprise technology solutions, digital transformation, and AI.',
        addressTitle: 'Address',
        address: '12th Floor, Sao Mộc Building\n88 Dai Co Viet, Hai Ba Trung\nHanoi, Vietnam',
        phone: 'Phone',
        email: 'Email',
        license: '© 2026 Sao Mộc Technology Solutions Joint Stock Company.',
        navTitle: 'Navigation',
        products: 'Products',
        services: 'Services',
        capabilities: 'About Us',
        contact: 'Contact',
        legalTitle: 'Legal',
        privacy: 'Privacy Policy',
        terms: 'Terms of Use',
        careers: 'Careers',
        hiringBadge: 'We are hiring',
        orbits: 'Orbit of Innovation.',
      };

  return (
    <footer className="bg-[#0B0A0A] text-text-secondary border-t border-white/[0.09]">
      
      {/* Top accent strip */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-[#8E2938] to-transparent" aria-hidden="true" />

      {/* Main footer content */}
      <div className="container-center pt-14 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* ── Brand Column ─────────────────────────────── */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href={`/${locale}`} className="inline-flex items-center gap-2.5 group mb-4">
              {/* Precision Orbit logomark — dark version */}
              <span
                className="w-8 h-8 rounded-[var(--radius-md)] bg-[#8E2938] border border-white/20 flex items-center justify-center shrink-0 transition-colors duration-[var(--motion-base)] group-hover:bg-[#A73748]"
                aria-hidden="true"
              >
                <svg viewBox="0 0 32 32" width="32" height="32" fill="none">
                  <ellipse
                    cx="16"
                    cy="16"
                    rx="9"
                    ry="5.5"
                    stroke="rgba(255,255,255,0.3)"
                    strokeWidth="1.2"
                    transform="rotate(-30 16 16)"
                  />
                  <path
                    d="M 16 10 A 6 6 0 1 1 10.5 18.5 L 10.5 13"
                    stroke="#F7F2F3"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <circle cx="22.5" cy="11.5" r="1.5" fill="#D46A79" />
                </svg>
              </span>
              <span className="flex flex-col leading-none">
                <span className="text-[0.9375rem] font-bold text-text-primary tracking-tight leading-none">Sao Mộc</span>
                <span className="text-[0.625rem] font-semibold text-text-muted leading-none mt-[3px] tracking-wide uppercase">Jupiter Solutions</span>
              </span>
            </Link>

            <p className="text-xs text-text-muted leading-relaxed max-w-[260px]">
              {text.tagline}
            </p>
          </div>

          {/* ── Contact & Address ─────────────────────────── */}
          <div>
            <h5 className="text-xs font-bold text-text-primary uppercase tracking-widest mb-4">
              {text.addressTitle}
            </h5>
            <address className="not-italic">
              <p className="text-xs text-text-secondary whitespace-pre-line leading-relaxed mb-3">
                {text.address}
              </p>
              <div className="space-y-1.5 text-xs">
                <div>
                  <span className="text-text-muted">{text.phone}:&nbsp;</span>
                  <a href="tel:+84326813947" className="text-text-secondary hover:text-text-primary transition-colors duration-[var(--motion-fast)]">
                    (+84) 326.813.947
                  </a>
                </div>
                <div>
                  <span className="text-text-muted">{text.email}:&nbsp;</span>
                  <a href="mailto:info@jupiter-ai.pro" className="text-text-secondary hover:text-text-primary transition-colors duration-[var(--motion-fast)]">
                    info@jupiter-ai.pro
                  </a>
                </div>
              </div>
            </address>
          </div>

          {/* ── Navigation ───────────────────────────────── */}
          <div>
            <h5 className="text-xs font-bold text-text-primary uppercase tracking-widest mb-4">
              {text.navTitle}
            </h5>
            <ul className="space-y-2.5">
              {[
                { label: text.products,     href: `/${locale}/products` },
                { label: text.services,     href: `/${locale}/services` },
                { label: text.capabilities, href: `/${locale}/capabilities` },
                { label: text.contact,      href: `/${locale}/contact` },
              ].map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-xs text-text-secondary hover:text-text-primary transition-colors duration-[var(--motion-fast)] link-underline"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Legal & Careers ───────────────────────────── */}
          <div>
            <h5 className="text-xs font-bold text-text-primary uppercase tracking-widest mb-4">
              {text.legalTitle}
            </h5>
            <ul className="space-y-2.5">
              <li>
                <span className="text-xs text-text-secondary flex items-center gap-2">
                  {text.careers}
                  <span className="text-[9px] font-bold bg-[#8E2938] text-[#F7F2F3] px-1.5 py-0.5 rounded-[var(--radius-xs)] uppercase tracking-wider">
                    {text.hiringBadge}
                  </span>
                </span>
              </li>
              <li>
                <Link href={`/${locale}/privacy`} className="text-xs text-text-secondary hover:text-text-primary transition-colors">
                  {text.privacy}
                </Link>
              </li>
              <li>
                <span className="text-xs text-text-muted cursor-default">{text.terms}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* ── Bottom bar ──────────────────────────────────── */}
        <div className="border-t border-white/[0.08] pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-text-muted leading-relaxed">
            {text.license}
          </p>
          <span className="text-xs text-text-muted font-medium tracking-wide italic shrink-0">
            {text.orbits}
          </span>
        </div>
      </div>
    </footer>
  );
}
