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

  // Scroll elevation state
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Localization strings
  const menuText = locale === 'vi'
    ? {
        home: 'Trang chủ',
        products: 'Sản phẩm',
        services: 'Dịch vụ',
        capabilities: 'Về chúng tôi',
        contact: 'Liên hệ',
        cta: 'Đặt lịch tư vấn',
      }
    : {
        home: 'Home',
        products: 'Products',
        services: 'Services',
        capabilities: 'About Us',
        contact: 'Contact',
        cta: 'Book Consultation',
      };

  const navLinks = [
    { name: menuText.home,         path: `/${locale}` },
    { name: menuText.products,     path: `/${locale}/products` },
    { name: menuText.services,     path: `/${locale}/services` },
    { name: menuText.capabilities, path: `/${locale}/capabilities` },
    { name: menuText.contact,      path: `/${locale}/contact` },
  ];

  return (
    <>
      <header
        className={[
          'sticky top-0 z-40 w-full',
          'border-b',
          'bg-white/97 backdrop-blur-sm',
          'transition-[border-color,box-shadow] duration-[var(--motion-medium)] ease-[var(--ease-standard)]',
          isScrolled
            ? 'border-[var(--color-border-default)] shadow-[var(--shadow-sm)]'
            : 'border-transparent shadow-none',
        ].join(' ')}
      >
        <div className="container-center h-[60px] flex items-center justify-between">

          {/* ── Brand Mark ─────────────────────────────────────────── */}
          <Link
            href={`/${locale}`}
            className="flex items-center gap-2.5 group focus-visible:rounded-[var(--radius-sm)]"
          >
            {/* Precision Orbit logomark — hidden J orbit segment */}
            <span
              className="w-8 h-8 rounded-[var(--radius-md)] bg-brand-600 flex items-center justify-center shrink-0 relative overflow-hidden transition-[background-color,transform] duration-[var(--motion-base)] ease-[var(--ease-standard)] group-hover:bg-brand-700 group-hover:scale-[1.04]"
              aria-hidden="true"
            >
              {/* Outer orbit arc */}
              <svg
                viewBox="0 0 32 32"
                width="32"
                height="32"
                fill="none"
                className="absolute inset-0"
              >
                {/* Elliptical orbit path */}
                <ellipse
                  cx="16"
                  cy="16"
                  rx="9"
                  ry="5.5"
                  stroke="rgba(255,255,255,0.25)"
                  strokeWidth="1.2"
                  transform="rotate(-30 16 16)"
                />
                {/* Hidden J segment — geometric letterform */}
                <path
                  d="M 16 10 A 6 6 0 1 1 10.5 18.5 L 10.5 13"
                  stroke="white"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  fill="none"
                />
                {/* Node dot */}
                <circle cx="22.5" cy="11.5" r="1.5" fill="rgba(255,255,255,0.6)" />
              </svg>
            </span>

            <span className="flex flex-col leading-none">
              <span className="text-[0.9375rem] font-bold text-text-primary tracking-tight leading-none">
                Sao Mộc
              </span>
              <span className="text-[0.625rem] font-semibold text-text-muted leading-none mt-[3px] tracking-wide uppercase">
                Jupiter Solutions
              </span>
            </span>
          </Link>

          {/* ── Desktop Navigation ──────────────────────────────────── */}
          <nav
            className="hidden lg:flex items-center gap-1"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                exact={link.path === `/${locale}`}
                className="relative px-3 py-2 text-sm font-medium text-text-secondary hover:text-text-primary rounded-[var(--radius-sm)] transition-colors duration-[var(--motion-base)] ease-[var(--ease-standard)] focus-visible:rounded-[var(--radius-sm)] group"
                activeClassName="text-brand-600 font-semibold"
              >
                {link.name}
                {/* Active / hover underline indicator */}
                <span
                  className="absolute bottom-1 left-3 right-3 h-[1.5px] bg-brand-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-[var(--motion-base)] ease-[var(--ease-standard)]"
                  aria-hidden="true"
                />
              </Link>
            ))}
          </nav>

          {/* ── Actions Column ──────────────────────────────────────── */}
          <div className="flex items-center gap-3">
            {/* Language switcher */}
            <div className="hidden sm:inline-flex shrink-0">
              <LanguageSwitcher currentLocale={locale} />
            </div>

            {/* Primary CTA — Book Consultation */}
            <div className="hidden md:inline-flex">
              <Button
                variant="primary"
                size="sm"
                href={`/${locale}/contact#contact-form`}
              >
                {menuText.cta}
              </Button>
            </div>

            {/* Mobile hamburger — visible below lg */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="inline-flex lg:hidden p-2 rounded-[var(--radius-md)] hover:bg-slate-100 text-slate-600 focus:outline-none focus-visible:shadow-[var(--shadow-brand)] transition-colors duration-[var(--motion-fast)]"
              aria-label={locale === 'vi' ? 'Mở menu điều hướng' : 'Open navigation menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-nav-drawer"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Bottom accent line — 1px burgundy trace at base of header */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px overflow-hidden"
          aria-hidden="true"
        >
          <div
            className={[
              'absolute left-0 top-0 h-full bg-brand-600',
              'transition-[width] duration-[var(--motion-slow)] ease-[var(--ease-standard)]',
              isScrolled ? 'w-[var(--header-accent-width,80px)]' : 'w-0',
            ].join(' ')}
            style={{ '--header-accent-width': '80px' } as React.CSSProperties}
          />
        </div>
      </header>

      {/* Mobile navigation drawer */}
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
