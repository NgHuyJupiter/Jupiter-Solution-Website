import Link from '../ui/link';

interface FooterProps {
  locale: string;
}

export default function Footer({ locale }: FooterProps) {
  const isEn = locale === 'en';

  const text = isEn
    ? {
        tagline: 'Enterprise technology systems engineered for scalability, security, and continuous operation.',
        address: '12th Floor, Sao Mộc Building, 88 Đại Cồ Việt, Hai Bà Trưng, Hà Nội, Vietnam',
        phone: '(+84) 326.813.947',
        email: 'info@jupiter-ai.pro',
        license: '© 2026 Sao Mộc Technology Solutions Joint Stock Company. Business Reg No. 0109876543.',
        solutionsTitle: 'Solutions & Domains',
        companyTitle: 'Company',
        resourcesTitle: 'Enterprise Resources',
        supportTitle: 'Support & Governance',
        privacy: 'Privacy Policy',
        terms: 'Terms of Use',
        orbits: 'Orbit of Innovation.',
      }
    : {
        tagline: 'Hệ thống công nghệ doanh nghiệp được thiết kế tối ưu cho khả năng mở rộng, bảo mật và vận hành 24/7.',
        address: 'Tầng 12, Toà nhà Sao Mộc, 88 Đại Cồ Việt, Hai Bà Trưng, Hà Nội, Việt Nam',
        phone: '(+84) 326.813.947',
        email: 'info@jupiter-ai.pro',
        license: '© 2026 Công ty Cổ phần Giải pháp Công nghệ Sao Mộc. ĐKKD số 0109876543.',
        solutionsTitle: 'Giải pháp & Lĩnh vực',
        companyTitle: 'Công ty',
        resourcesTitle: 'Tài nguyên doanh nghiệp',
        supportTitle: 'Hỗ trợ & Quản trị',
        privacy: 'Chính sách bảo mật',
        terms: 'Điều khoản sử dụng',
        orbits: 'Quỹ đạo của đổi mới.',
      };

  return (
    <footer className="bg-[#0B0A0A] text-[#C8BEC1] border-t border-white/[0.09] relative overflow-hidden">
      {/* Top accent line */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-[#8E2938] to-transparent" aria-hidden="true" />

      <div className="container-center pt-14 pb-10 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">

          {/* ── Brand & Identity ───────────────────────────── */}
          <div className="lg:col-span-2 pr-0 lg:pr-6">
            <Link href={`/${locale}`} className="inline-flex items-center gap-2.5 group mb-4">
              <span className="w-8 h-8 rounded-[var(--radius-md)] bg-[#8E2938] border border-white/20 flex items-center justify-center shrink-0 transition-colors group-hover:bg-[#A73748]">
                <svg viewBox="0 0 32 32" width="32" height="32" fill="none">
                  <ellipse cx="16" cy="16" rx="9" ry="5.5" stroke="rgba(255,255,255,0.3)" strokeWidth="1.2" transform="rotate(-30 16 16)" />
                  <path d="M 16 10 A 6 6 0 1 1 10.5 18.5 L 10.5 13" stroke="#F7F2F3" strokeWidth="2.2" strokeLinecap="round" fill="none" />
                  <circle cx="22.5" cy="11.5" r="1.5" fill="#D46A79" />
                </svg>
              </span>
              <span className="flex flex-col leading-none">
                <span className="text-base font-bold text-[#F7F2F3] tracking-tight">Sao Mộc</span>
                <span className="text-[10px] font-semibold text-[#968B8F] tracking-wide uppercase mt-0.5">Jupiter Solutions</span>
              </span>
            </Link>

            <p className="text-xs text-[#968B8F] leading-relaxed max-w-sm mb-6">
              {text.tagline}
            </p>

            <div className="text-xs text-[#968B8F] space-y-1">
              <p className="font-mono text-[10px] text-[#D46A79] uppercase font-bold">HEADQUARTERS</p>
              <p>{text.address}</p>
              <p className="pt-1">
                <span className="font-mono text-[10px] uppercase text-[#968B8F] mr-2">HOTLINE:</span>
                <a href={`tel:${text.phone}`} className="text-[#F7F2F3] font-semibold hover:text-[#D46A79]">{text.phone}</a>
              </p>
            </div>
          </div>

          {/* ── Solutions Group ───────────────────────────── */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#F7F2F3] mb-4">
              {text.solutionsTitle}
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li><Link href={`/${locale}/services#tech-solutions`} className="hover:text-white transition-colors">Phát triển phần mềm</Link></li>
              <li><Link href={`/${locale}/services#applied-ai`} className="hover:text-white transition-colors">AI & Tự động hóa</Link></li>
              <li><Link href={`/${locale}/services#digital-transformation`} className="hover:text-white transition-colors">Dữ liệu & Phân tích</Link></li>
              <li><Link href={`/${locale}/services#cloud-infrastructure`} className="hover:text-white transition-colors">Cloud & DevOps</Link></li>
              <li><Link href={`/${locale}/services#networking-security`} className="hover:text-white transition-colors">Hạ tầng & Tích hợp</Link></li>
              <li><Link href={`/${locale}/services#cybersecurity-soc`} className="hover:text-white transition-colors">An ninh mạng SOC</Link></li>
            </ul>
          </div>

          {/* ── Company Group ─────────────────────────────── */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#F7F2F3] mb-4">
              {text.companyTitle}
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li><Link href={`/${locale}/capabilities`} className="hover:text-white transition-colors">Về Sao Mộc</Link></li>
              <li><Link href={`/${locale}/capabilities`} className="hover:text-white transition-colors">Năng lực kỹ thuật</Link></li>
              <li><Link href={`/${locale}/products`} className="hover:text-white transition-colors">Đối tác OEM chính hãng</Link></li>
              <li><Link href={`/${locale}/contact`} className="hover:text-white transition-colors">Liên hệ tư vấn</Link></li>
            </ul>
          </div>

          {/* ── Resources & Governance ────────────────────── */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#F7F2F3] mb-4">
              {text.resourcesTitle}
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li><Link href={`/${locale}/#case-studies`} className="hover:text-white transition-colors">Dự án đã bàn giao</Link></li>
              <li><Link href={`/${locale}/#methodology`} className="hover:text-white transition-colors">Quy trình 5 bước</Link></li>
              <li><Link href={`/${locale}/capabilities`} className="hover:text-white transition-colors">Hồ sơ năng lực</Link></li>
              <li><Link href={`/${locale}/privacy`} className="hover:text-white transition-colors">{text.privacy}</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#968B8F]">
          <p>{text.license}</p>
          <div className="flex items-center gap-4">
            <Link href={`/${locale}/privacy`} className="hover:text-[#F7F2F3] transition-colors">{text.privacy}</Link>
            <span>·</span>
            <span className="font-mono text-[#D46A79]">{text.orbits}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
