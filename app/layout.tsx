import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['vietnamese', 'latin'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: '%s · Sao Mộc · Jupiter Solutions Technology',
    default: 'Sao Mộc · Jupiter Solutions Technology',
  },
  description: 'Công ty Cổ phần Giải pháp Công nghệ Sao Mộc — Giải pháp công nghệ, chuyển đổi số, dịch vụ AI.',
};

export const viewport = {
  themeColor: '#100E0F',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="vi"
      className={`${plusJakartaSans.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-bg-default text-text-primary antialiased min-h-screen flex flex-col">
        {/* Skip to main content for keyboard screen reader accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-brand-600 focus:text-white focus:rounded-md focus:shadow-md"
        >
          Chuyển đến nội dung chính
        </a>
        
        {/* Main page content hydration container */}
        <main id="main-content" className="flex-1 flex flex-col focus:outline-none" tabIndex={-1}>
          {children}
        </main>
      </body>
    </html>
  );
}
