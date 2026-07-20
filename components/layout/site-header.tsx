'use client';

import * as React from 'react';
import Link from '../ui/link';
import Button from '../ui/button';
import LanguageSwitcher from './language-switcher';
import MobileNavigation from './mobile-navigation';

interface SiteHeaderProps {
  locale: string;
}

export default function SiteHeader({ locale }: SiteHeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null);
  const headerRef = React.useRef<HTMLElement>(null);

  // Scroll elevation state
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle outside click & Escape key to close dropdowns
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveDropdown(null);
    };
    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const isEn = locale === 'en';

  const menuText = isEn
    ? {
        solutions: 'Solutions',
        services: 'Services',
        products: 'Products',
        industries: 'Industries',
        capabilities: 'Capabilities',
        resources: 'Resources',
        about: 'About Sao Mộc',
        cta: 'Speak with an Expert',
      }
    : {
        solutions: 'Giải pháp',
        services: 'Dịch vụ',
        products: 'Sản phẩm',
        industries: 'Ngành',
        capabilities: 'Năng lực',
        resources: 'Tài nguyên',
        about: 'Về Sao Mộc',
        cta: 'Trao đổi với chuyên gia',
      };

  const navLinks = [
    { name: menuText.solutions, path: `/${locale}/services#solutions`, hasDropdown: 'solutions' },
    { name: menuText.services, path: `/${locale}/services`, hasDropdown: 'services' },
    { name: menuText.products, path: `/${locale}/products`, hasDropdown: 'products' },
    { name: menuText.industries, path: `/${locale}/services#industries`, hasDropdown: 'industries' },
    { name: menuText.capabilities, path: `/${locale}/capabilities` },
    { name: menuText.resources, path: `/${locale}/services#resources`, hasDropdown: 'resources' },
    { name: menuText.about, path: `/${locale}/capabilities` },
  ];

  return (
    <>
      <header
        ref={headerRef}
        className={[
          'sticky top-0 z-40 w-full',
          'border-b border-white/[0.09]',
          'bg-[#100E0F]/95 backdrop-blur-md',
          'transition-[border-color,box-shadow,background-color] duration-200',
          isScrolled
            ? 'border-white/15 bg-[#100E0F]/98 shadow-[0_4px_20px_rgba(0,0,0,0.6)]'
            : 'border-white/[0.08]',
        ].join(' ')}
      >
        <div className="container-center h-[64px] flex items-center justify-between">

          {/* ── Brand Mark ─────────────────────────────────────────── */}
          <Link
            href={`/${locale}`}
            className="flex items-center gap-3 group focus-visible:rounded-[var(--radius-sm)] shrink-0"
          >
            <span
              className="w-9 h-9 rounded-[var(--radius-md)] bg-[#8E2938] border border-white/15 flex items-center justify-center shrink-0 relative overflow-hidden transition-[background-color,transform] duration-200 group-hover:bg-[#A73748] group-hover:scale-[1.04]"
              aria-hidden="true"
            >
              <svg viewBox="0 0 32 32" width="32" height="32" fill="none" className="absolute inset-0">
                <ellipse cx="16" cy="16" rx="9" ry="5.5" stroke="rgba(255,255,255,0.3)" strokeWidth="1.2" transform="rotate(-30 16 16)" />
                <path d="M 16 10 A 6 6 0 1 1 10.5 18.5 L 10.5 13" stroke="#F7F2F3" strokeWidth="2.2" strokeLinecap="round" fill="none" />
                <circle cx="22.5" cy="11.5" r="1.5" fill="#D46A79" />
              </svg>
            </span>

            <span className="flex flex-col leading-none">
              <span className="text-[0.9375rem] font-bold text-[#F7F2F3] tracking-tight leading-none">
                Sao Mộc
              </span>
              <span className="text-[0.625rem] font-semibold text-[#968B8F] leading-none mt-[3px] tracking-wide uppercase">
                Jupiter Solutions
              </span>
            </span>
          </Link>

          {/* ── Desktop Navigation Menu ─────────────────────────────── */}
          <nav className="hidden lg:flex items-center gap-1 relative" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isOpen = activeDropdown === link.hasDropdown;

              return (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.hasDropdown)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.path}
                    className="inline-flex items-center gap-1 px-3 py-2 text-xs font-semibold text-[#C8BEC1] hover:text-[#F7F2F3] rounded-[var(--radius-sm)] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D46A79]"
                  >
                    <span>{link.name}</span>
                    {link.hasDropdown && (
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 12 12"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className={`transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#D46A79]' : 'opacity-60'}`}
                      >
                        <path d="M2 4l4 4 4-4" />
                      </svg>
                    )}
                  </Link>

                  {/* Grouped Solutions Mega-Dropdown */}
                  {link.hasDropdown === 'solutions' && isOpen && (
                    <div className="absolute top-full left-0 w-[540px] bg-[#1C181A] border border-white/15 rounded-[var(--radius-lg)] shadow-2xl p-5 grid grid-cols-2 gap-4 z-50 animate-fade-in">
                      <div>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#D46A79] block mb-2">
                          {isEn ? 'BY DOMAIN' : 'THEO LĨNH VỰC CÔNG NGHỆ'}
                        </span>
                        <div className="space-y-1">
                          <Link href={`/${locale}/services#tech-solutions`} className="block p-2 rounded hover:bg-[#211C1E] text-xs font-semibold text-[#F7F2F3]">
                            Phát triển phần mềm
                          </Link>
                          <Link href={`/${locale}/services#applied-ai`} className="block p-2 rounded hover:bg-[#211C1E] text-xs font-semibold text-[#F7F2F3]">
                            AI & Tự động hóa
                          </Link>
                          <Link href={`/${locale}/services#digital-transformation`} className="block p-2 rounded hover:bg-[#211C1E] text-xs font-semibold text-[#F7F2F3]">
                            Dữ liệu & Phân tích
                          </Link>
                          <Link href={`/${locale}/services#cloud-infrastructure`} className="block p-2 rounded hover:bg-[#211C1E] text-xs font-semibold text-[#F7F2F3]">
                            Cloud & DevOps
                          </Link>
                        </div>
                      </div>

                      <div>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#D46A79] block mb-2">
                          {isEn ? 'BY CHALLENGE' : 'THEO BÀI TOÁN DOANH NGHIỆP'}
                        </span>
                        <div className="space-y-1">
                          <Link href={`/${locale}/#challenges`} className="block p-2 rounded hover:bg-[#211C1E] text-xs font-semibold text-[#C8BEC1] hover:text-white">
                            Hiện đại hóa hệ thống
                          </Link>
                          <Link href={`/${locale}/#challenges`} className="block p-2 rounded hover:bg-[#211C1E] text-xs font-semibold text-[#C8BEC1] hover:text-white">
                            Di chuyển lên Cloud
                          </Link>
                          <Link href={`/${locale}/#challenges`} className="block p-2 rounded hover:bg-[#211C1E] text-xs font-semibold text-[#C8BEC1] hover:text-white">
                            Ứng dụng AI vận hành
                          </Link>
                          <Link href={`/${locale}/#challenges`} className="block p-2 rounded hover:bg-[#211C1E] text-xs font-semibold text-[#C8BEC1] hover:text-white">
                            Tăng cường an ninh mạng
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Grouped Products Dropdown */}
                  {link.hasDropdown === 'products' && isOpen && (
                    <div className="absolute top-full left-0 w-[320px] bg-[#1C181A] border border-white/15 rounded-[var(--radius-lg)] shadow-2xl p-4 z-50 animate-fade-in">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#D46A79] block mb-2">
                        {isEn ? 'PRODUCTS & INTEGRATION' : 'SẢN PHẨM & TÍCH HỢP OEM'}
                      </span>
                      <div className="space-y-1 text-xs font-semibold">
                        <Link href={`/${locale}/products#juniper-networking`} className="block p-2 rounded hover:bg-[#211C1E] text-[#F7F2F3]">
                          Hạ tầng Juniper Networks
                        </Link>
                        <Link href={`/${locale}/products#hpe-vmware-systems`} className="block p-2 rounded hover:bg-[#211C1E] text-[#F7F2F3]">
                          Máy chủ & Ảo hóa HPE / VMware
                        </Link>
                        <Link href={`/${locale}/products#security-solutions`} className="block p-2 rounded hover:bg-[#211C1E] text-[#F7F2F3]">
                          Giám sát Splunk & BeyondTrust
                        </Link>
                      </div>
                    </div>
                  )}

                  {/* Grouped Industries Dropdown */}
                  {link.hasDropdown === 'industries' && isOpen && (
                    <div className="absolute top-full left-0 w-[280px] bg-[#1C181A] border border-white/15 rounded-[var(--radius-lg)] shadow-2xl p-4 z-50 animate-fade-in">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#D46A79] block mb-2">
                        {isEn ? 'TARGET SECTORS' : 'NGÀNH TRỌNG ĐIỂM'}
                      </span>
                      <div className="space-y-1 text-xs font-semibold">
                        <Link href={`/${locale}/#industries`} className="block p-2 rounded hover:bg-[#211C1E] text-[#F7F2F3]">
                          Ngân hàng & Tài chính
                        </Link>
                        <Link href={`/${locale}/#industries`} className="block p-2 rounded hover:bg-[#211C1E] text-[#F7F2F3]">
                          Năng lượng & Điện lực
                        </Link>
                        <Link href={`/${locale}/#industries`} className="block p-2 rounded hover:bg-[#211C1E] text-[#F7F2F3]">
                          Chứng khoán & Bảo hiểm
                        </Link>
                        <Link href={`/${locale}/#industries`} className="block p-2 rounded hover:bg-[#211C1E] text-[#F7F2F3]">
                          Hạ tầng Viễn thông
                        </Link>
                      </div>
                    </div>
                  )}

                  {/* Grouped Resources Dropdown */}
                  {link.hasDropdown === 'resources' && isOpen && (
                    <div className="absolute top-full left-0 w-[260px] bg-[#1C181A] border border-white/15 rounded-[var(--radius-lg)] shadow-2xl p-4 z-50 animate-fade-in">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#D46A79] block mb-2">
                        {isEn ? 'ENTERPRISE RESOURCES' : 'TÀI NGUYÊN DOANH NGHIỆP'}
                      </span>
                      <div className="space-y-1 text-xs font-semibold">
                        <Link href={`/${locale}/#case-studies`} className="block p-2 rounded hover:bg-[#211C1E] text-[#F7F2F3]">
                          Dự án đã bàn giao (Case Studies)
                        </Link>
                        <Link href={`/${locale}/#methodology`} className="block p-2 rounded hover:bg-[#211C1E] text-[#F7F2F3]">
                          Quy trình 5 bước
                        </Link>
                        <Link href={`/${locale}/capabilities`} className="block p-2 rounded hover:bg-[#211C1E] text-[#F7F2F3]">
                          Hồ sơ năng lực kỹ thuật
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* ── Actions Column ──────────────────────────────────────── */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:inline-flex shrink-0">
              <LanguageSwitcher currentLocale={locale} />
            </div>

            <div className="hidden md:inline-flex">
              <Button
                variant="primary"
                size="sm"
                href={`/${locale}/contact#contact-form`}
                className="bg-[#8E2938] hover:bg-[#A73748] border-white/20 shadow-md"
              >
                {menuText.cta}
              </Button>
            </div>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="inline-flex lg:hidden p-2 rounded-[var(--radius-md)] bg-[#211C1E] border border-white/10 hover:bg-[#282124] text-[#F7F2F3] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D46A79]"
              aria-label={isEn ? 'Open navigation menu' : 'Mở menu điều hướng'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-nav-drawer"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <MobileNavigation
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navLinks={navLinks}
        locale={locale}
        ctaLabel={menuText.cta}
      />
    </>
  );
}
