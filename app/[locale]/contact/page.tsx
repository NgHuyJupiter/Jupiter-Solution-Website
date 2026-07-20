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

  /* ── Contact channel rows ── */
  const channels = [
    {
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3 7l9 6 9-6" />
        </svg>
      ),
      label: isEn ? 'Corporate email' : 'Email công vụ',
      value: content.brand.email,
      href: `mailto:${content.brand.email}`,
    },
    {
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: isEn ? 'Sales hotline' : 'Điện thoại kinh doanh',
      value: content.brand.phone,
      href: `tel:${content.brand.phone}`,
    },
    {
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <circle cx="12" cy="11" r="3" />
        </svg>
      ),
      label: isEn ? 'HQ office' : 'Trụ sở chính',
      value: content.brand.address,
      href: undefined,
    },
  ];

  return (
    <div className="flex flex-col w-full bg-[#100E0F] text-text-primary">

      {/* ── Page Header ──────────────────────────────────────── */}
      <section className="py-14 md:py-16 border-b border-white/[0.09] bg-[#100E0F] bg-tech-dots relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-burgundy-glow pointer-events-none" aria-hidden="true" />
        <Container>
          <div className="max-w-3xl">
            <span className="eyebrow mb-5 block">
              {isEn ? 'Contact Us' : 'Liên hệ'}
            </span>
            <Typography variant="h1" className="mb-4 text-text-primary leading-tight">
              {isEn ? 'Start a Technical Discussion' : 'Bắt đầu cuộc trò chuyện kỹ thuật'}
            </Typography>
            <Typography variant="body-large" className="text-text-secondary max-w-2xl">
              {isEn
                ? 'Send us a brief summary of the technical problem or infrastructure project you are facing. Our architects will contact you within 1 business day.'
                : 'Gửi yêu cầu sơ bộ hoặc mô tả dự án hạ tầng mạng, tích hợp hệ thống bạn đang khảo sát. Chúng tôi phản hồi trong vòng 1 ngày làm việc.'}
            </Typography>
          </div>
        </Container>
      </section>

      {/* ── Contact Grid ─────────────────────────────────────── */}
      <Section variant="alternate">
        <Container
          id="contact-form"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
        >
          {/* Left: channels + commitment */}
          <div className="lg:col-span-4 space-y-8">

            {/* Contact channels */}
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-text-muted block mb-5">
                {isEn ? 'Direct channels' : 'Kênh liên hệ trực tiếp'}
              </span>

              <div className="space-y-0 divide-y divide-white/[0.08] border border-white/10 rounded-[var(--radius-lg)] overflow-hidden bg-[#171315]">
                {channels.map(({ icon, label, value, href }) => (
                  <div key={label} className="group px-5 py-4 flex items-start gap-4 hover:bg-[#241E21] transition-colors duration-[var(--motion-fast)]">
                    <span className="text-[#D46A79] mt-0.5 shrink-0">
                      {icon}
                    </span>
                    <div className="min-w-0">
                      <span className="text-[10px] font-bold uppercase tracking-[0.08em] text-text-muted block mb-1">
                        {label}
                      </span>
                      {href ? (
                        <a
                          href={href}
                          className="text-sm font-semibold text-[#F7F2F3] hover:text-[#D46A79] transition-colors duration-[var(--motion-fast)] break-all link-underline"
                        >
                          {value}
                        </a>
                      ) : (
                        <span className="text-sm font-semibold text-[#F7F2F3] leading-relaxed whitespace-pre-line">
                          {value}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Response commitment panel */}
            <div className="bg-[#171315] border border-white/10 rounded-[var(--radius-lg)] p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" aria-hidden="true" />
                <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-text-muted">
                  {isEn ? 'Response SLA' : 'Cam kết phản hồi'}
                </span>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                {isEn
                  ? 'Your inquiry is routed directly to our pre-sales architects. We validate the technical scope and respond within 24 business hours.'
                  : 'Yêu cầu của bạn được chuyển thẳng đến bộ phận kỹ sư thiết kế giải pháp sơ bộ. Chúng tôi cam kết phản hồi chuyên môn trong vòng 24 giờ làm việc.'}
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-8">
            <ContactForm locale={params.locale} />
          </div>
        </Container>
      </Section>
    </div>
  );
}
