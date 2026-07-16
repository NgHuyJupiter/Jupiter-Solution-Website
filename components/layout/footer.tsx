import Link from '../ui/link';

interface FooterProps {
  locale: string;
}

export default function Footer({ locale }: FooterProps) {
  // Localized navigation text copy
  const text = locale === 'vi' ? {
    aboutText: 'Sao Mộc là người đồng hành kiến tạo giải pháp công nghệ, chuyển đổi số và AI — đặt khách hàng làm trung tâm.',
    addressTitle: 'Địa chỉ',
    address: 'Tầng 12, Toà nhà Sao Mộc\n88 Đại Cồ Việt, Hai Bà Trưng\nHà Nội, Việt Nam',
    phone: 'Số điện thoại',
    email: 'Email liên hệ',
    license: '© 2026 Công ty Cổ phần Giải pháp Công nghệ Sao Mộc. Đăng ký kinh doanh số 0109876543 [CONTENT VERIFICATION REQUIRED].',
    navTitle: 'Điều hướng',
    productsTitle: 'Sản phẩm',
    servicesTitle: 'Dịch vụ',
    capabilitiesTitle: 'Giới thiệu',
    contactTitle: 'Liên hệ',
    careers: 'Tuyển dụng',
    privacy: 'Chính sách bảo mật',
    terms: 'Điều khoản sử dụng',
  } : {
    aboutText: 'Sao Mộc is your partner in architecting technological solutions, digital transformation, and applied AI — putting clients at the center.',
    addressTitle: 'Address',
    address: '12th Floor, Sao Mộc Building\n88 Dai Co Viet, Hai Ba Trung\nHanoi, Vietnam',
    phone: 'Phone',
    email: 'Email',
    license: '© 2026 Sao Mộc Technology Solutions Joint Stock Company. Business Registration No. 0109876543 [CONTENT VERIFICATION REQUIRED].',
    navTitle: 'Navigation',
    productsTitle: 'Products',
    servicesTitle: 'Services',
    capabilitiesTitle: 'Capabilities',
    contactTitle: 'Contact',
    careers: 'Careers',
    privacy: 'Privacy Policy',
    terms: 'Terms of Use',
  };

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 pt-16 pb-8">
      <div className="container-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Summary Column */}
          <div className="flex flex-col gap-4">
            <Link href={`/${locale}`} className="inline-flex items-center gap-2 text-white">
              <span className="w-7 h-7 rounded bg-brand-600 flex items-center justify-center" aria-hidden="true">
                <span className="w-4 h-4 rounded-full border border-white border-r-transparent border-t-transparent -rotate-45" />
              </span>
              <span className="font-bold text-lg leading-none">Sao Mộc</span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              {text.aboutText}
            </p>
          </div>

          {/* Contact Direct & Address Column */}
          <div className="flex flex-col gap-3">
            <h5 className="text-sm font-semibold text-white uppercase tracking-wider mb-1">
              {text.addressTitle}
            </h5>
            <p className="text-sm text-slate-400 whitespace-pre-line leading-relaxed">
              {text.address}
            </p>
            <div className="text-sm mt-2">
              <span className="text-slate-500 font-medium">{text.phone}:</span>{' '}
              <a href="tel:+84326813947" className="hover:text-white transition-colors">
                (+84) 326.813.947
              </a>
            </div>
            <div className="text-sm">
              <span className="text-slate-500 font-medium">{text.email}:</span>{' '}
              <a href="mailto:info@jupiter-ai.pro" className="hover:text-white transition-colors">
                info@jupiter-ai.pro
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="flex flex-col gap-3">
            <h5 className="text-sm font-semibold text-white uppercase tracking-wider mb-1">
              {text.navTitle}
            </h5>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <Link href={`/${locale}/products`} className="hover:text-white text-slate-400 transition-colors">
                  {text.productsTitle}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/services`} className="hover:text-white text-slate-400 transition-colors">
                  {text.servicesTitle}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/capabilities`} className="hover:text-white text-slate-400 transition-colors">
                  {text.capabilitiesTitle}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/contact`} className="hover:text-white text-slate-400 transition-colors">
                  {text.contactTitle}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal / Recruitment Column */}
          <div className="flex flex-col gap-3">
            <h5 className="text-sm font-semibold text-white uppercase tracking-wider mb-1">
              {locale === 'vi' ? 'Pháp lý & Tuyển dụng' : 'Legal & Careers'}
            </h5>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <span className="text-slate-500 block">
                  {text.careers} — <span className="text-[10px] bg-slate-800 text-brand-100 px-1 py-0.5 rounded uppercase tracking-wider font-semibold">We are hiring</span>
                </span>
              </li>
              <li>
                <span className="hover:text-white text-slate-400 cursor-pointer transition-colors">
                  {text.privacy}
                </span>
              </li>
              <li>
                <span className="hover:text-white text-slate-400 cursor-pointer transition-colors">
                  {text.terms}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & business license bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
          <span>{text.license}</span>
          <span>{locale === 'vi' ? 'Quỹ đạo của đổi mới.' : 'Orbit of Innovation.'}</span>
        </div>
      </div>
    </footer>
  );
}
