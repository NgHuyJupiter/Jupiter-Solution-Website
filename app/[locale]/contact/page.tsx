import { siteContentVi } from '@/content/vi/site';
import { siteContentEn } from '@/content/en/site';
import Container from '@/components/ui/container';
import Section from '@/components/ui/section';
import Typography from '@/components/ui/typography';
import ContactForm from '@/components/forms/contact-form';
import { getPageMetadata } from '@/lib/metadata/metadata-utils';
import { Metadata } from 'next';

interface PageProps {
  params: {
    locale: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const isEn = params.locale === 'en';
  return getPageMetadata({
    title: isEn ? 'Contact Our Team' : 'Liên hệ Đội ngũ Sao Mộc',
    description: isEn
      ? 'Get in touch with our solutions architects to discuss your enterprise IT infrastructure needs.'
      : 'Gửi yêu cầu khảo sát hoặc đặt lịch thảo luận cùng kỹ sư giải pháp mạng, cloud và an ninh thông tin.',
    path: '/contact',
    locale: params.locale,
  });
}

export default function ContactPage({ params }: PageProps) {
  const isEn = params.locale === 'en';
  const content = isEn ? siteContentEn : siteContentVi;

  return (
    <div className="flex flex-col w-full">
      {/* Page Header */}
      <Section variant="alternate" className="py-12 border-b border-slate-200 bg-white">
        <Container>
          <span className="text-xs font-bold text-brand-600 bg-brand-50 px-2.5 py-1 rounded-xs uppercase tracking-wider">
            {isEn ? 'Contact Us' : 'Liên hệ'}
          </span>
          <Typography variant="h1" className="mt-4 mb-3 text-text-primary">
            {isEn ? 'Start a Technical Discussion' : 'Bắt đầu cuộc trò chuyện kỹ thuật'}
          </Typography>
          <Typography variant="body-large" className="text-text-secondary max-w-2xl mb-0">
            {isEn
              ? 'Send us a brief summary of the technical problem or infrastructure project you are facing. Our architects will contact you within 1 business day.'
              : 'Gửi yêu cầu sơ bộ hoặc mô tả dự án hạ tầng mạng, tích hợp hệ thống bạn đang khảo sát. Chúng tôi phản hồi trong vòng 1 ngày làm việc.'}
          </Typography>
        </Container>
      </Section>

      {/* Main Contact Grid containing the Interactive Form */}
      <Section variant="default" className="py-16">
        <Container id="contact-form" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contacts */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-2">
                {isEn ? 'Business Channels' : 'Thông tin liên hệ trực tiếp'}
              </span>
              <div className="space-y-4 mt-4">
                <div className="flex items-start gap-3">
                  <span className="text-brand-600 mt-1 shrink-0" aria-hidden="true">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="M3 7l9 6 9-6" />
                    </svg>
                  </span>
                  <div>
                    <span className="text-xs text-text-muted block">{isEn ? 'Corporate Email' : 'Email công vụ'}</span>
                    <a href={`mailto:${content.brand.email}`} className="text-sm font-semibold text-text-primary hover:text-brand-600 transition-colors">
                      {content.brand.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-brand-600 mt-1 shrink-0" aria-hidden="true">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </span>
                  <div>
                    <span className="text-xs text-text-muted block">{isEn ? 'Sales Hotline' : 'Điện thoại kinh doanh'}</span>
                    <a href={`tel:${content.brand.phone}`} className="text-sm font-semibold text-text-primary hover:text-brand-600 transition-colors">
                      {content.brand.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-brand-600 mt-1 shrink-0" aria-hidden="true">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <circle cx="12" cy="11" r="3" />
                    </svg>
                  </span>
                  <div>
                    <span className="text-xs text-text-muted block">{isEn ? 'HQ Office Address' : 'Địa chỉ trụ sở chính'}</span>
                    <span className="text-sm font-semibold text-text-primary leading-relaxed">
                      {content.brand.address}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Expected SLA Response Time statement */}
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 text-xs text-text-secondary leading-relaxed">
              <span className="font-bold text-text-primary block mb-1">
                {isEn ? 'Our Response Commitment' : 'Cam kết phản hồi'}
              </span>
              {isEn
                ? 'Your inquiry is routed directly to our pre-sales solutions architects. We validate the technical scope and return a response within 24 business hours.'
                : 'Yêu cầu của bạn được chuyển thẳng đến bộ phận kỹ sư thiết kế giải pháp sơ bộ. Chúng tôi cam kết phản hồi chuyên môn trong vòng 24 giờ làm việc.'}
            </div>
          </div>

          {/* Right Column: Validation Form */}
          <div className="lg:col-span-7">
            <ContactForm locale={params.locale} />
          </div>
        </Container>
      </Section>
    </div>
  );
}
