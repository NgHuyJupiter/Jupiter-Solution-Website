import { siteContentVi } from '@/content/vi/site';
import { siteContentEn } from '@/content/en/site';
import Container from '@/components/ui/container';
import Section from '@/components/ui/section';
import Typography from '@/components/ui/typography';
import Button from '@/components/ui/button';
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
    title: isEn ? 'Enterprise Technology Services' : 'Dịch vụ Công nghệ & Chuyển đổi số',
    description: isEn
      ? 'Full lifecycle strategic services—from architecture design and cloud DevOps to applied AI.'
      : 'Sao Mộc cung cấp các dịch vụ giải pháp phần mềm, tích hợp hệ thống mạng bảo mật, an ninh SOC và vận hành NOC bảo trì ATM.',
    path: '/services',
    locale: params.locale,
  });
}

export default function ServicesPage({ params }: PageProps) {
  const isEn = params.locale === 'en';
  const content = isEn ? siteContentEn : siteContentVi;
  const services = content.services.list;

  const models = isEn ? [
    { num: '01', title: 'Strategic Consulting', term: '2–6 weeks · Fixed scope', desc: 'Ideal for initial planning. Delivers a 12–24 month transformation roadmap, architectural blueprints, and viability audits.' },
    { num: '02', title: 'Fixed-Price Projects', term: '3–9 months · Fixed budget', desc: 'Best when requirements are locked. We define deliverables, timelines, and budgets, absorbing execution risks.' },
    { num: '03', title: 'Dedicated Engineering Squads', term: '6+ months · Resource billing', desc: 'A custom engineering team operating under your agile Scrum process. Highly scalable depending on backlog velocity.' },
    { num: '04', title: 'Managed Operations NOC', term: '12–36 month SLA contract', desc: 'Outsource NOC/SOC operations under strict SLA parameters. Covers hardware replacement, patches, and proactive monitoring.' }
  ] : [
    { num: '01', title: 'Tư vấn chiến lược', term: '2–6 tuần · Trọn gói', desc: 'Phù hợp khi doanh nghiệp cần khảo sát lộ trình chuyển đổi số 12-24 tháng, thiết kế kiến trúc hệ thống sơ bộ và đánh giá khả thi.' },
    { num: '02', title: 'Dự án giá cố định', term: '3–9 tháng · Thỏa thuận', desc: 'Phù hợp khi phạm vi công việc đã rõ ràng. Cam kết chặt chẽ tiến độ, chất lượng bàn giao và chi phí dự toán — chúng tôi chịu trách nhiệm thực thi.' },
    { num: '03', title: 'Đội ngũ chuyên trách', term: '6+ tháng · Thuê tài nguyên', desc: 'Bố trí đội ngũ kỹ sư vận hành riêng biệt dưới sự điều phối trực tiếp của khách hàng theo chu kỳ Scrum. Dễ dàng co giãn nhân sự.' },
    { num: '04', title: 'Vận hành ủy thác NOC/SOC', term: 'Hợp đồng 12–36 tháng theo SLA', desc: 'Sao Mộc chịu trách nhiệm giám sát NOC/SOC 24/7, ứng phó sự cố khẩn cấp, vá bảo mật phần mềm và bảo trì thiết bị onsite.' }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Page Header */}
      <Section variant="alternate" className="py-12 border-b border-slate-200 bg-white">
        <Container>
          <span className="text-xs font-bold text-brand-600 bg-brand-50 px-2.5 py-1 rounded-xs uppercase tracking-wider">
            {isEn ? 'Lifecycle Services' : 'Dịch vụ trọn vòng đời'}
          </span>
          <Typography variant="h1" className="mt-4 mb-3 text-text-primary">
            {isEn ? 'Core Technology Operations' : 'Bốn trục lực hấp dẫn kéo doanh nghiệp tiến xa'}
          </Typography>
          <Typography variant="body-large" className="text-text-secondary max-w-3xl mb-0">
            {isEn
              ? 'We design, implement, and secure enterprise software and core network systems with absolute operational rigor.'
              : 'Chúng tôi thiết kế và vận hành các giải pháp công nghệ trọn vòng đời — từ tư vấn chiến lược, triển khai phát triển cho đến vận hành liên tục.'}
          </Typography>
        </Container>
      </Section>

      {/* Strategic Services Detailed Section list */}
      <Section variant="default" className="border-b border-slate-200 bg-tech-grid relative">
        <Container className="space-y-16 relative z-10">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-12 border-b border-slate-200/80 last:border-b-0 last:pb-0 group opacity-0 animate-fade-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Left Column: Title & Problem statement */}
              <div className="lg:col-span-4 space-y-3 lg:border-l-2 lg:border-slate-100 lg:pl-4 lg:group-hover:border-brand-500 transition-colors duration-[var(--motion-medium)]">
                <span className="font-mono text-xs font-bold text-brand-600 bg-brand-50 px-2 py-0.5 rounded-xs inline-block">
                  {service.num}
                </span>
                <Typography variant="h2" className="text-text-primary leading-tight mt-1 group-hover:text-brand-600 transition-colors duration-[var(--motion-base)]">
                  {service.title}
                </Typography>
                <div className="bg-slate-50 border border-slate-200 rounded p-4 text-xs shadow-2xs">
                  <span className="font-semibold text-slate-700 block mb-1">
                    {isEn ? 'Problem we solve:' : 'Bài toán giải quyết:'}
                  </span>
                  <p className="text-text-secondary leading-relaxed mb-0">{service.problem}</p>
                </div>
              </div>

              {/* Middle Column: Scope & Deliverables */}
              <div className="lg:col-span-5 space-y-4">
                <Typography variant="body-small" className="text-text-secondary leading-relaxed">
                  {service.description}
                </Typography>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <span className="text-xs font-semibold text-text-primary block mb-2">
                      {isEn ? 'Scope of Service' : 'Phạm vi triển khai'}
                    </span>
                    <ul className="space-y-1.5 text-xs text-text-secondary">
                      {service.scope.map((s) => (
                        <li key={s} className="flex items-start gap-1.5">
                          <span className="text-brand-500 mt-0.5 shrink-0">▪</span>
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <span className="text-xs font-semibold text-text-primary block mb-2">
                      {isEn ? 'Key Deliverables' : 'Bàn giao chính'}
                    </span>
                    <ul className="space-y-1.5 text-xs text-text-secondary">
                      {service.deliverables.map((d) => (
                        <li key={d} className="flex items-start gap-1.5">
                          <span className="text-brand-500 mt-0.5 shrink-0">▪</span>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Right Column: Tags & CTA */}
              <div className="lg:col-span-3 flex flex-col justify-between h-full space-y-6 lg:items-end">
                <div className="flex flex-wrap lg:justify-end gap-1.5">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-semibold bg-white text-slate-600 border border-slate-200 px-2 py-0.5 rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="lg:mt-auto w-full">
                  <Button
                    variant="primary"
                    size="sm"
                    className="w-full bg-brand-600 hover:bg-brand-700 text-white rounded-md transition-all"
                    href={`/${params.locale}/contact#contact-form`}
                  >
                    {isEn ? 'Inquire service' : 'Yêu cầu tư vấn'}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </Container>
      </Section>

      {/* Engagement cooperation models */}
      <Section variant="alternate">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16 opacity-0 animate-fade-up">
            <span className="text-xs font-bold text-brand-600 bg-brand-50 px-2.5 py-1 rounded-xs uppercase tracking-wider">
              {isEn ? 'Engagement Models' : 'Mô hình hợp tác'}
            </span>
            <Typography variant="h2" className="mt-4 mb-2 text-text-primary">
              {isEn ? 'Four ways we collaborate' : 'Bốn phương thức để cùng nhau bắt đầu'}
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {models.map((model, idx) => (
              <div 
                key={model.num} 
                className="group relative bg-white border border-slate-200 hover:border-brand-200 rounded-lg p-5 flex flex-col justify-between hover:shadow-md transition-all duration-[var(--motion-medium)] ease-[var(--ease-standard)] hover:-translate-y-0.5 opacity-0 animate-fade-up"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                {/* Subtle corner marker */}
                <span className="absolute top-2 right-2 font-mono text-[8px] text-slate-300 group-hover:text-brand-300 select-none" aria-hidden="true">+</span>
                
                <div>
                  <span className="font-mono text-xs font-bold text-brand-600 bg-brand-50 px-2 py-0.5 rounded-xs mb-4 inline-block">
                    {model.num}
                  </span>
                  <h4 className="text-sm font-semibold text-text-primary mb-1 group-hover:text-brand-600 transition-colors">
                    {model.title}
                  </h4>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wide block mb-3">
                    {model.term}
                  </span>
                </div>
                <p className="text-xs text-text-secondary leading-relaxed mt-2">
                  {model.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}
