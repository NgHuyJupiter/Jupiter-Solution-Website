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

  /* ── Engagement models ── */
  const models = isEn
    ? [
        {
          num: '01',
          title: 'Strategic Consulting',
          term: '2–6 weeks · Fixed scope',
          desc: 'Ideal for initial planning. Delivers a 12–24 month transformation roadmap, architectural blueprints, and viability audits.',
        },
        {
          num: '02',
          title: 'Fixed-Price Projects',
          term: '3–9 months · Fixed budget',
          desc: 'Best when requirements are locked. We define deliverables, timelines, and budgets, absorbing execution risks.',
        },
        {
          num: '03',
          title: 'Dedicated Engineering Squads',
          term: '6+ months · Resource billing',
          desc: 'A custom engineering team operating under your agile Scrum process. Highly scalable depending on backlog velocity.',
        },
        {
          num: '04',
          title: 'Managed Operations NOC',
          term: '12–36 month SLA contract',
          desc: 'Outsource NOC/SOC operations under strict SLA parameters. Covers hardware replacement, patches, and proactive monitoring.',
        },
      ]
    : [
        {
          num: '01',
          title: 'Tư vấn chiến lược',
          term: '2–6 tuần · Trọn gói',
          desc: 'Phù hợp khi doanh nghiệp cần khảo sát lộ trình chuyển đổi số 12-24 tháng, thiết kế kiến trúc hệ thống sơ bộ và đánh giá khả thi.',
        },
        {
          num: '02',
          title: 'Dự án giá cố định',
          term: '3–9 tháng · Thỏa thuận',
          desc: 'Phù hợp khi phạm vi công việc đã rõ ràng. Cam kết chặt chẽ tiến độ, chất lượng bàn giao và chi phí dự toán — chúng tôi chịu trách nhiệm thực thi.',
        },
        {
          num: '03',
          title: 'Đội ngũ chuyên trách',
          term: '6+ tháng · Thuê tài nguyên',
          desc: 'Bố trí đội ngũ kỹ sư vận hành riêng biệt dưới sự điều phối trực tiếp của khách hàng theo chu kỳ Scrum. Dễ dàng co giãn nhân sự.',
        },
        {
          num: '04',
          title: 'Vận hành ủy thác NOC/SOC',
          term: 'Hợp đồng 12–36 tháng theo SLA',
          desc: 'Sao Mộc chịu trách nhiệm giám sát NOC/SOC 24/7, ứng phó sự cố khẩn cấp, vá bảo mật phần mềm và bảo trì thiết bị onsite.',
        },
      ];

  return (
    <div className="flex flex-col w-full">

      {/* ── Page Header ──────────────────────────────────────── */}
      <section className="py-14 md:py-16 border-b border-[var(--color-border-default)] bg-gradient-to-b from-white to-slate-50 bg-tech-dots relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-burgundy-glow pointer-events-none" aria-hidden="true" />
        <Container>
          <div className="max-w-3xl">
            <span className="eyebrow mb-5 block">
              {isEn ? 'Lifecycle Services' : 'Dịch vụ trọn vòng đời'}
            </span>
            <Typography variant="h1" className="mb-4 text-text-primary leading-tight">
              {isEn ? 'Core Technology Operations' : 'Bốn trục lực hấp dẫn kéo doanh nghiệp tiến xa'}
            </Typography>
            <Typography variant="body-large" className="text-text-secondary max-w-2xl">
              {isEn
                ? 'We design, implement, and secure enterprise software and core network systems with absolute operational rigor.'
                : 'Chúng tôi thiết kế và vận hành các giải pháp công nghệ trọn vòng đời — từ tư vấn chiến lược, triển khai phát triển cho đến vận hành liên tục.'}
            </Typography>
          </div>
        </Container>
      </section>

      {/* ── Service Matrix ─────────────────────────────────────── */}
      <Section variant="default" className="border-b border-[var(--color-border-default)] bg-editorial-grid relative">
        <Container className="space-y-0 relative z-10">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group grid grid-cols-1 lg:grid-cols-12 gap-8 items-start py-12 ${
                index < services.length - 1 ? 'border-b border-[var(--color-border-default)]' : ''
              } opacity-0 animate-fade-up`}
              style={{ animationDelay: `${index * 80}ms` }}
            >
              {/* Left: index + title + problem */}
              <div className="lg:col-span-4 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="index-chip">{service.num}</span>
                  {/* Hover border accent indicator */}
                  <span
                    className="flex-1 h-px bg-[var(--color-border-default)] group-hover:bg-brand-200 transition-colors duration-[var(--motion-medium)]"
                    aria-hidden="true"
                  />
                </div>
                <Typography
                  variant="h2"
                  as="h2"
                  className="text-text-primary leading-tight group-hover:text-brand-700 transition-colors duration-[var(--motion-base)]"
                >
                  {service.title}
                </Typography>
                {/* Problem statement panel */}
                <div className="bg-[var(--color-surface-alt)] border border-[var(--color-border-default)] rounded-[var(--radius-md)] p-4 text-xs">
                  <span className="block font-semibold text-text-primary mb-1.5">
                    {isEn ? 'Problem statement:' : 'Bài toán giải quyết:'}
                  </span>
                  <p className="text-text-secondary leading-relaxed">{service.problem}</p>
                </div>
              </div>

              {/* Middle: scope + deliverables */}
              <div className="lg:col-span-5 space-y-5">
                <Typography variant="body-small" className="text-text-secondary leading-relaxed">
                  {service.description}
                </Typography>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-text-muted block mb-3">
                      {isEn ? 'Scope of service' : 'Phạm vi triển khai'}
                    </span>
                    <ul className="space-y-2 text-xs text-text-secondary">
                      {service.scope.map((s) => (
                        <li key={s} className="flex items-start gap-2">
                          <span className="text-brand-500 mt-[2px] shrink-0 leading-none" aria-hidden="true">▪</span>
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-text-muted block mb-3">
                      {isEn ? 'Key deliverables' : 'Bàn giao chính'}
                    </span>
                    <ul className="space-y-2 text-xs text-text-secondary">
                      {service.deliverables.map((d) => (
                        <li key={d} className="flex items-start gap-2">
                          <span className="text-brand-500 mt-[2px] shrink-0 leading-none" aria-hidden="true">▪</span>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Right: tags + CTA */}
              <div className="lg:col-span-3 flex flex-col justify-between gap-6 lg:items-end">
                <div className="flex flex-wrap lg:justify-end gap-1.5">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-semibold font-mono bg-white text-slate-500 border border-[var(--color-border-default)] px-2 py-0.5 rounded-[var(--radius-xs)] group-hover:border-slate-300 transition-colors duration-[var(--motion-fast)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Button
                  variant="primary"
                  size="sm"
                  className="w-full lg:w-auto"
                  href={`/${params.locale}/contact#contact-form`}
                >
                  {isEn ? 'Inquire service' : 'Yêu cầu tư vấn'}
                </Button>
              </div>
            </div>
          ))}
        </Container>
      </Section>

      {/* ── Engagement Models ──────────────────────────────────── */}
      <Section variant="subtle">
        <Container>
          <div className="mb-14">
            <span className="eyebrow mb-4 block">
              {isEn ? 'Engagement Models' : 'Mô hình hợp tác'}
            </span>
            <Typography variant="h2" className="mb-3 text-text-primary leading-tight max-w-xl">
              {isEn ? 'Four ways we collaborate' : 'Bốn phương thức để cùng nhau bắt đầu'}
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {models.map((model, idx) => (
              <div
                key={model.num}
                className="group relative bg-white border border-[var(--color-border-default)] hover:border-brand-200 rounded-[var(--radius-lg)] p-5 flex flex-col hover-lift opacity-0 animate-fade-up"
                style={{ animationDelay: `${idx * 80}ms` }}
              >
                {/* Top corner mark */}
                <span className="absolute top-3 right-3 font-mono text-[8px] text-slate-300 group-hover:text-brand-300 transition-colors duration-[var(--motion-base)] select-none" aria-hidden="true">+</span>

                {/* Index */}
                <span className="index-chip mb-4 inline-block w-fit">{model.num}</span>

                {/* Title */}
                <h4 className="text-sm font-semibold text-text-primary mb-1 group-hover:text-brand-700 transition-colors duration-[var(--motion-base)] leading-snug">
                  {model.title}
                </h4>

                {/* Term */}
                <span className="text-[10px] font-bold uppercase tracking-[0.08em] text-text-muted block mb-3">
                  {model.term}
                </span>

                {/* Description */}
                <p className="text-xs text-text-secondary leading-relaxed mt-auto">
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
