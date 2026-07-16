'use client';

import * as React from 'react';
import { usePathname, useRouter } from 'next/navigation';

interface LanguageSwitcherProps {
  currentLocale: string;
}

export default function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();

  // Swap pathname locale prefixes (e.g., /vi/services -> /en/services)
  const handleLocaleChange = (targetLocale: string) => {
    if (targetLocale === currentLocale) return;

    if (!pathname) {
      router.push(`/${targetLocale}`);
      return;
    }

    const segments = pathname.split('/');
    if (segments.length > 1 && (segments[1] === 'vi' || segments[1] === 'en')) {
      segments[1] = targetLocale;
    } else {
      segments.unshift(targetLocale);
    }
    
    router.push(segments.join('/') || `/${targetLocale}`);
  };

  return (
    <div
      role="group"
      aria-label="Chọn ngôn ngữ / Select language"
      className="inline-flex items-center rounded-sm bg-slate-100 p-0.5 border border-slate-200"
    >
      <button
        type="button"
        onClick={() => handleLocaleChange('vi')}
        className={`px-2.5 py-1 text-xs font-semibold rounded-sm transition-all focus:outline-none focus-visible:ring-1 focus-visible:ring-brand-600 ${
          currentLocale === 'vi'
            ? 'bg-white text-brand-600 shadow-xs'
            : 'text-slate-500 hover:text-slate-900 bg-transparent'
        }`}
        aria-current={currentLocale === 'vi' ? 'true' : undefined}
      >
        VI
      </button>
      <button
        type="button"
        onClick={() => handleLocaleChange('en')}
        className={`px-2.5 py-1 text-xs font-semibold rounded-sm transition-all focus:outline-none focus-visible:ring-1 focus-visible:ring-brand-600 ${
          currentLocale === 'en'
            ? 'bg-white text-brand-600 shadow-xs'
            : 'text-slate-500 hover:text-slate-900 bg-transparent'
        }`}
        aria-current={currentLocale === 'en' ? 'true' : undefined}
      >
        EN
      </button>
    </div>
  );
}
