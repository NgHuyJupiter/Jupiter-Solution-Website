import { notFound } from 'next/navigation';
import SiteHeader from '@/components/layout/site-header';
import Footer from '@/components/layout/footer';

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

const SUPPORTED_LOCALES = ['vi', 'en'];

export default function LocaleLayout({ children, params }: LocaleLayoutProps) {
  // Validate that the route locale is supported
  if (!SUPPORTED_LOCALES.includes(params.locale)) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Site Global Header Navigation */}
      <SiteHeader locale={params.locale} />

      {/* Main page content layout shell */}
      <div className="flex-1 flex flex-col">
        {children}
      </div>

      {/* Site Global Footer */}
      <Footer locale={params.locale} />
    </div>
  );
}

// Generate static params for optimal server loading pre-fetch
export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}
