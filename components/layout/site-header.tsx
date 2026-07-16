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

  // Localization strings matching B2B content rules
  const menuText = locale === 'vi' ? {
    home: 'Trang chủ',
    products: 'Sản phẩm',
    services: 'Dịch vụ',
    capabilities: 'Về chúng tôi',
    contact: 'Liên hệ',
    cta: 'Đặt lịch tư vấn',
  } : {
    home: 'Home',
    products: 'Products',
    services: 'Services',
    capabilities: 'About Us',
    contact: 'Contact',
    cta: 'Book Consultation',
  };

  const navLinks = [
    { name: menuText.home, path: `/${locale}` },
    { name: menuText.products, path: `/${locale}/products` },
    { name: menuText.services, path: `/${locale}/services` },
    { name: menuText.capabilities, path: `/${locale}/capabilities` },
    { name: menuText.contact, path: `/${locale}/contact` },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/95 backdrop-blur-sm shadow-xs">
        <div className="container-center h-16 flex items-center justify-between">
          {/* Brand Logo Anchor */}
          <Link href={`/${locale}`} className="flex items-center gap-2.5 focus-visible:ring-offset-2">
            {/* Geometric hidden J circular mark */}
            <span 
              className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center shrink-0 relative overflow-hidden"
              aria-hidden="true"
            >
              {/* Inner geometric ring representing orbit & hidden J segment */}
              <span className="w-5 h-5 rounded-full border-2 border-white/80 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-r-transparent border-t-transparent -rotate-45" />
              <span className="w-1.5 h-1.5 rounded-full bg-white absolute top-1.5 right-1.5" />
            </span>
            <span className="flex flex-col">
              <span className="text-base font-bold text-text-primary leading-none">Sao Mộc</span>
              <span className="text-[10px] font-medium text-text-muted leading-none mt-0.5">Jupiter Solutions</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                exact={link.path === `/${locale}`}
                className="text-sm font-medium text-text-secondary hover:text-brand-600 py-2"
                activeClassName="text-brand-600 font-semibold"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Actions Column (Lang switcher + CTA button + Mobile toggle) */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:inline-flex shrink-0">
              <LanguageSwitcher currentLocale={locale} />
            </div>
            
            <div className="hidden md:inline-flex">
              <Button
                variant="primary"
                size="sm"
                className="bg-brand-600 hover:bg-brand-700 text-white rounded-md"
                onClick={() => window.location.href = `/${locale}/contact#contact-form`}
              >
                {menuText.cta}
              </Button>
            </div>

            {/* Mobile Hamburger toggle button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="inline-flex lg:hidden p-2 rounded-md hover:bg-slate-100 text-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600"
              aria-label={locale === 'vi' ? 'Mở menu điều hướng' : 'Open navigation menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-nav-drawer"
            >
              <svg
                className="h-6 w-6"
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
      </header>

      {/* Mobile navigation side drawer overlay */}
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
