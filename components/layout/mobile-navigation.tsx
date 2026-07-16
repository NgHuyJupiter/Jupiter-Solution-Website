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
        className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs transition-opacity duration-200"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-out Panel */}
      <div
        ref={drawerRef}
        className="fixed right-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-xl flex flex-col p-6 border-l border-slate-200 transition-transform duration-300"
      >
        {/* Drawer header control row */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-md bg-brand-600 flex items-center justify-center" aria-hidden="true">
              <span className="w-3.5 h-3.5 rounded-full border border-white border-r-transparent border-t-transparent -rotate-45" />
            </span>
            <span className="text-sm font-bold text-text-primary">Sao Mộc</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-md hover:bg-slate-100 text-slate-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600"
            aria-label={locale === 'vi' ? 'Đóng menu' : 'Close menu'}
          >
            <svg
              className="h-6 w-6"
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
        <nav className="flex flex-col gap-4 mb-8" aria-label="Mobile Navigation Menu">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              exact={link.path === `/${locale}`}
              onClick={onClose}
              className="text-base font-semibold text-text-secondary hover:text-brand-600 py-2 border-b border-slate-100"
              activeClassName="text-brand-600 font-bold border-brand-100"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile controls alignment (Lang switcher + CTA button) */}
        <div className="mt-auto flex flex-col gap-4">
          <div className="flex items-center justify-between py-2 border-t border-slate-100 pt-4">
            <span className="text-sm font-medium text-text-secondary">Ngôn ngữ / Language</span>
            <LanguageSwitcher currentLocale={locale} />
          </div>

          <Button
            variant="primary"
            size="lg"
            className="w-full bg-brand-600 hover:bg-brand-700 text-white rounded-md mt-2"
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
