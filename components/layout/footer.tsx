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
    <footer className="bg-[var(--color-surface-darker)] text-slate-300 border-t border-slate-800/80">
      
      {/* Top accent strip */}
      <div className="h-[2px] bg-gradient-to-r from-brand-700/0 via-brand-600 to-brand-700/0" aria-hidden="true" />

      {/* Main footer content */}
      <div className="container-center pt-14 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* ── Brand Column ─────────────────────────────── */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href={`/${locale}`} className="inline-flex items-center gap-2.5 group mb-4">
              {/* Precision Orbit logomark — dark version */}
              <span
                className="w-8 h-8 rounded-[var(--radius-md)] bg-brand-700 flex items-center justify-center shrink-0 transition-colors duration-[var(--motion-base)] group-hover:bg-brand-600"
                aria-hidden="true"
              >
                <svg viewBox="0 0 32 32" width="32" height="32" fill="none">
                  <ellipse
                    cx="16"
                    cy="16"
                    rx="9"
                    ry="5.5"
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="1.2"
                    transform="rotate(-30 16 16)"
                  />
                  <path
                    d="M 16 10 A 6 6 0 1 1 10.5 18.5 L 10.5 13"
                    stroke="white"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <circle cx="22.5" cy="11.5" r="1.5" fill="rgba(255,255,255,0.5)" />
                </svg>
              </span>
              <span className="flex flex-col leading-none">
                <span className="text-[0.9375rem] font-bold text-white tracking-tight leading-none">Sao Mộc</span>
                <span className="text-[0.625rem] font-semibold text-slate-400 leading-none mt-[3px] tracking-wide uppercase">Jupiter Solutions</span>
              </span>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-[240px]">
              {text.tagline}
            </p>
          </div>

          {/* ── Contact & Address ─────────────────────────── */}
          <div>
            <h5 className="text-xs font-bold text-white uppercase tracking-widest mb-4">
              {text.addressTitle}
            </h5>
            <address className="not-italic">
              <p className="text-sm text-slate-400 whitespace-pre-line leading-relaxed mb-3">
                {text.address}
              </p>
              <div className="space-y-1.5 text-sm">
                <div>
                  <span className="text-slate-500 text-xs">{text.phone}:&nbsp;</span>
                  <a href="tel:+84326813947" className="text-slate-300 hover:text-white transition-colors duration-[var(--motion-fast)]">
                    (+84) 326.813.947
                  </a>
                </div>
                <div>
                  <span className="text-slate-500 text-xs">{text.email}:&nbsp;</span>
                  <a href="mailto:info@jupiter-ai.pro" className="text-slate-300 hover:text-white transition-colors duration-[var(--motion-fast)]">
                    info@jupiter-ai.pro
                  </a>
                </div>
              </div>
            </address>
          </div>

          {/* ── Navigation ───────────────────────────────── */}
          <div>
            <h5 className="text-xs font-bold text-white uppercase tracking-widest mb-4">
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
                    className="text-sm text-slate-400 hover:text-white transition-colors duration-[var(--motion-fast)] link-underline"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Legal & Careers ───────────────────────────── */}
          <div>
            <h5 className="text-xs font-bold text-white uppercase tracking-widest mb-4">
              {text.legalTitle}
            </h5>
            <ul className="space-y-2.5">
              <li>
                <span className="text-sm text-slate-400 flex items-center gap-2">
                  {text.careers}
                  <span className="text-[9px] font-bold bg-brand-700 text-brand-100 px-1.5 py-0.5 rounded-[var(--radius-xs)] uppercase tracking-wider">
                    {text.hiringBadge}
                  </span>
                </span>
              </li>
              <li>
                <span className="text-sm text-slate-500 cursor-default">{text.privacy}</span>
              </li>
              <li>
                <span className="text-sm text-slate-500 cursor-default">{text.terms}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* ── Bottom bar ──────────────────────────────────── */}
        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-slate-600 leading-relaxed">
            {text.license}
            {/* CONTENT VERIFICATION REQUIRED: Confirm business registration number */}
          </p>
          <span className="text-xs text-slate-700 font-medium tracking-wide italic shrink-0">
            {text.orbits}
          </span>
        </div>
      </div>
    </footer>
  );
}
