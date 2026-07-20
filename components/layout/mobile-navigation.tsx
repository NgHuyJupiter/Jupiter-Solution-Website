'use client';

import * as React from 'react';
import Link from '../ui/link';
import Button from '../ui/button';
import LanguageSwitcher from './language-switcher';

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: Array<{ name: string; path: string }>;
  locale: string;
  ctaLabel: string;
}

export default function MobileNavigation({
  isOpen,
  onClose,
  navLinks,
  locale,
  ctaLabel,
}: MobileNavigationProps) {
  const drawerRef = React.useRef<HTMLDivElement>(null);

  // Close navigation drawer when Escape key is pressed
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Trap keyboard focus inside mobile navigation drawer when open
  React.useEffect(() => {
    if (!isOpen) return;
    
    // Lock background page scroll when drawer is active
    document.body.style.overflow = 'hidden';
    
    const focusableElements = drawerRef.current?.querySelectorAll(
      'button, a, [tabIndex="0"]'
    );
    if (!focusableElements || focusableElements.length === 0) return;

    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleFocusTrap = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    window.addEventListener('keydown', handleFocusTrap);
    firstElement.focus();

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleFocusTrap);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      id="mobile-nav-drawer"
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 lg:hidden"
    >
      {/* Backdrop overlay background */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity duration-200"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-out Panel */}
      <div
        ref={drawerRef}
        className="fixed right-0 top-0 bottom-0 w-full max-w-xs sm:max-w-sm bg-[#171315] shadow-2xl flex flex-col p-6 border-l border-white/15 transition-transform duration-300"
      >
        {/* Drawer header control row */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <span className="w-7 h-7 rounded-md bg-[#8E2938] border border-white/20 flex items-center justify-center" aria-hidden="true">
              <span className="w-3.5 h-3.5 rounded-full border border-white border-r-transparent border-t-transparent -rotate-45" />
            </span>
            <span className="text-sm font-bold text-text-primary">Sao Mộc</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-md bg-surface-raised border border-white/10 text-text-primary hover:bg-surface focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D46A79]"
            aria-label={locale === 'vi' ? 'Đóng menu' : 'Close menu'}
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Menu Navigation Links */}
        <nav className="flex flex-col gap-2 mb-8" aria-label="Mobile Navigation Menu">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              exact={link.path === `/${locale}`}
              onClick={onClose}
              className="text-base font-semibold text-text-secondary hover:text-text-primary py-2.5 px-3 rounded-md transition-colors border-b border-white/5 hover:bg-white/[0.04]"
              activeClassName="text-text-primary font-bold bg-white/[0.08] border-white/15"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile controls alignment (Lang switcher + CTA button) */}
        <div className="mt-auto flex flex-col gap-4">
          <div className="flex items-center justify-between py-2 border-t border-white/10 pt-4">
            <span className="text-xs font-medium text-text-muted">Ngôn ngữ / Language</span>
            <LanguageSwitcher currentLocale={locale} />
          </div>

          <Button
            variant="primary"
            size="lg"
            className="w-full bg-[#8E2938] hover:bg-[#A73748] text-[#F7F2F3] rounded-md mt-2"
            onClick={() => {
              onClose();
              window.location.href = `/${locale}/contact#contact-form`;
            }}
          >
            {ctaLabel}
          </Button>
        </div>
      </div>
    </div>
  );
}
