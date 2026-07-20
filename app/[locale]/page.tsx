import { siteContentVi } from '@/content/vi/site';
import { siteContentEn } from '@/content/en/site';
import Container from '@/components/ui/container';
import Section from '@/components/ui/section';
import Typography from '@/components/ui/typography';
import Button from '@/components/ui/button';
import Link from '@/components/ui/link';
import ServiceCard from '@/components/marketing/service-card';
import ProductCard from '@/components/marketing/product-card';
import CaseStudyCard from '@/components/marketing/case-study-card';
import TechnologyOrbit from '@/components/marketing/technology-orbit';
import { getPageMetadata } from '@/lib/metadata/metadata-utils';
import { Metadata } from 'next';

interface PageProps {
  params: {
    locale: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const content = params.locale === 'en' ? siteContentEn : siteContentVi;
  return getPageMetadata({
    title: content.brand.fullName,
    description: content.home.hero.description,
    path: '/',
    locale: params.locale,
  });
}

export default function Homepage({ params }: PageProps) {
  const isEn = params.locale === 'en';
  const content = isEn ? siteContentEn : siteContentVi;

  const heroCopy = content.home.hero;
  const servicesCopy = content.services.list.slice(0, 4);
  const productsCopy = content.products.list;
  const caseStudiesCopy = content.caseStudies.list.slice(0, 2);
  const stepsCopy = content.home.processSteps;

  /* ── Industry sectors for credibility strip ── */
  const sectors = isEn
    ? ['Banking & Finance', 'Energy & Utilities', 'Securities & Insurance', 'Telecom Infrastructure']
    : ['Ngân hàng & Tài chính', 'Năng lượng & Điện lực', 'Chứng khoán & Bảo hiểm', 'Hạ tầng Viễn thông'];

  return (
    <div className="flex flex-col w-full bg-[#100E0F] text-text-primary">

      {/* ════════════════════════════════════════════════════════════
          1. HERO — Jupiter Dark Precision Enterprise Entry
          Asymmetric Swiss grid: 7 cols text | 5 cols Orbital Architecture graphic
          ════════════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden border-b border-white/[0.09] bg-[#100E0F] bg-editorial-grid"
        aria-label={isEn ? 'Hero' : 'Giới thiệu'}
      >
        {/* Muted burgundy ambient glow behind right column graphic */}
        <div className="absolute right-0 top-0 w-3/5 h-full bg-burgundy-glow pointer-events-none opacity-80" aria-hidden="true" />

        <Container className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16 items-center relative z-10 pt-16 pb-20 md:pt-20 md:pb-24">

          {/* ── Left Column: Copy ─────────────────────────────── */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">

            {/* Eyebrow label */}
            <span
              className="eyebrow mb-6 opacity-0 animate-fade-in"
              aria-label={heroCopy.eyebrow}
            >
              {heroCopy.eyebrow}
            </span>

            {/* Primary Headline */}
            <Typography
              variant="display"
              as="h1"
              className="text-[#F7F2F3] mb-5 opacity-0 animate-fade-up delay-100 font-extrabold tracking-tight"
            >
              {heroCopy.headline}
            </Typography>

            {/* Supporting description */}
            <Typography
              variant="body-large"
              className="text-[#C8BEC1] mb-8 max-w-[540px] opacity-0 animate-fade-up delay-200"
            >
              {heroCopy.description}
            </Typography>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-auto mb-10 opacity-0 animate-fade-up delay-300">
              <Button
                variant="primary"
                size="lg"
                href={`/${params.locale}/contact#contact-form`}
                rightIcon={
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                }
              >
                {heroCopy.ctaPrimary}
              </Button>
              <Button
                variant="secondary"
                size="lg"
                href={`/${params.locale}/services`}
              >
                {heroCopy.ctaSecondary}
              </Button>
            </div>

            {/* Stats credibility row */}
            <div
              className="grid grid-cols-3 gap-6 sm:gap-10 border-t border-white/[0.09] pt-8 w-full max-w-md opacity-0 animate-fade-in delay-400"
              role="list"
              aria-label={isEn ? 'Company statistics' : 'Thống kê công ty'}
            >
              {heroCopy.stats.map((stat) => (
                <div key={stat.label} className="flex flex-col" role="listitem">
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#F7F2F3] leading-none tabular-nums">
                    {stat.value}
                  </span>
                  <span className="text-[11px] font-medium text-text-muted mt-1.5 leading-tight">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right Column: Animated Precision Orbit Planetary System ─────────── */}
          <div className="lg:col-span-5 flex items-center justify-center pt-6 lg:pt-0">
            <TechnologyOrbit />
          </div>
        </Container>
      </section>

      {/* ════════════════════════════════════════════════════════════
          2. INDUSTRY CREDIBILITY STRIP
          ════════════════════════════════════════════════════════════ */}
      <div
        className="bg-[#171315] border-b border-white/[0.09] py-6"
        aria-label={isEn ? 'Industry sectors served' : 'Lĩnh vực phục vụ'}
      >
        <Container>
          <div className="flex flex-col items-center gap-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-text-muted">
              {isEn ? 'Core Industry Verticals' : 'Ngành công nghiệp trọng yếu'}
            </span>
            <div className="flex flex-wrap items-center justify-center gap-0">
              {sectors.map((sector, i) => (
                <span key={sector} className="flex items-center">
                  <span className="text-xs font-semibold text-text-secondary hover:text-[#F7F2F3] transition-colors duration-[var(--motion-fast)] px-4 md:px-6 py-1">
                    {sector}
                  </span>
                  {i < sectors.length - 1 && (
                    <span className="w-px h-4 bg-white/10" aria-hidden="true" />
                  )}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* Section divider */}
      <div className="divider-orbit" aria-hidden="true" />

      {/* ════════════════════════════════════════════════════════════
          3. STRATEGIC SERVICES — Indexed Grid
          ════════════════════════════════════════════════════════════ */}
      <Section variant="alternate" className="border-b border-white/[0.09] relative overflow-hidden bg-tech-dots">
        {/* Soft radial glow in the corner */}
        <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-burgundy-glow pointer-events-none" aria-hidden="true" />
        <Container>
          {/* Section heading */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div className="max-w-xl">
              <span className="eyebrow mb-4 block">{content.home.servicesHead.eyebrow}</span>
              <Typography variant="h2" className="mb-3 text-text-primary leading-tight">
                {content.home.servicesHead.title}
              </Typography>
              <Typography variant="body" className="text-text-secondary">
                {content.home.servicesHead.description}
              </Typography>
            </div>
            <div className="shrink-0">
              <Button
                variant="secondary"
                size="md"
                href={`/${params.locale}/services`}
                rightIcon={
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M2 7h10M8 3l4 4-4 4" />
                  </svg>
                }
              >
                {isEn ? 'All services' : 'Tất cả dịch vụ'}
              </Button>
            </div>
          </div>

          {/* Services grid — 2 col on md+, 4 items */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {servicesCopy.map((service) => (
              <ServiceCard
                key={service.id}
                num={service.num}
                title={service.title}
                description={service.description}
                tags={service.tags}
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* Section divider */}
      <div className="divider-orbit" aria-hidden="true" />

      {/* ════════════════════════════════════════════════════════════
          4. CAPABILITIES — Asymmetric Split Layout
          ════════════════════════════════════════════════════════════ */}
      <Section variant="subtle" className="border-b border-white/[0.09] relative overflow-hidden bg-tech-grid">
        {/* Soft radial glow on the left */}
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-burgundy-glow pointer-events-none" aria-hidden="true" />
        <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Left: quote + CTA */}
          <div className="lg:col-span-7">
            <span className="eyebrow mb-5 block">{content.home.capabilitiesHead.eyebrow}</span>
            <blockquote className="text-clamp-h2 font-semibold text-text-primary leading-snug tracking-tight mb-6 italic border-l-2 border-[#8E2938] pl-6">
              &ldquo;{content.home.capabilitiesHead.description}&rdquo;
            </blockquote>
            <Button
              variant="outline"
              size="md"
              href={`/${params.locale}/capabilities`}
              rightIcon={
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M2 7h10M8 3l4 4-4 4" />
                </svg>
              }
            >
              {isEn ? 'Engineering capabilities' : 'Năng lực kỹ thuật'}
            </Button>
          </div>

          {/* Right: company metadata panel */}
          <div className="lg:col-span-5">
            <div className="bg-[#1C181A] border border-white/10 rounded-[var(--radius-lg)] overflow-hidden shadow-md">
              {[
                {
                  label: isEn ? 'Established' : 'Năm thành lập',
                  value: '2019, Hà Nội',
                },
                {
                  label: isEn ? 'Engineering team' : 'Đội ngũ kỹ thuật',
                  value: isEn ? '60+ Engineers & Specialists' : '60+ Kỹ sư & Chuyên gia',
                },
                {
                  label: isEn ? 'Office presence' : 'Văn phòng hiện diện',
                  value: 'Hà Nội · Tp. HCM · Singapore',
                },
              ].map((row, i, arr) => (
                <div
                  key={row.label}
                  className={`px-6 py-5 flex flex-col ${i < arr.length - 1 ? 'border-b border-white/[0.08]' : ''}`}
                >
                  <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-text-muted mb-1">
                    {row.label}
                  </span>
                  <span className="text-base font-bold text-text-primary leading-tight">
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Section divider */}
      <div className="divider-orbit" aria-hidden="true" />

      {/* ════════════════════════════════════════════════════════════
          5. TECHNOLOGY INTEGRATION — Product Showcase
          ════════════════════════════════════════════════════════════ */}
      <Section variant="raised" className="border-b border-white/[0.09] relative overflow-hidden bg-tech-dots">
        {/* Soft radial glow in the center-right */}
        <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[400px] h-[400px] bg-burgundy-glow pointer-events-none" aria-hidden="true" />
        <Container className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div className="max-w-xl">
              <span className="eyebrow mb-4 block">
                {isEn ? 'Partner Ecosystem' : 'Đối tác & Nền tảng'}
              </span>
              <Typography variant="h2" className="mb-3 text-text-primary leading-tight">
                {isEn ? 'Enterprise Technology Integration' : 'Tích hợp công nghệ cấp doanh nghiệp'}
              </Typography>
              <Typography variant="body" className="text-text-secondary">
                {content.products.intro}
              </Typography>
            </div>
            <div className="shrink-0">
              <Button
                variant="secondary"
                size="md"
                href={`/${params.locale}/products`}
                rightIcon={
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M2 7h10M8 3l4 4-4 4" />
                  </svg>
                }
              >
                {isEn ? 'Technical specs' : 'Thông số kỹ thuật'}
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {productsCopy.map((prod) => (
              <ProductCard
                key={prod.id}
                code={prod.code}
                partner={prod.partner}
                title={prod.title}
                description={prod.description}
                subgroups={prod.subgroups}
                inquiryText={isEn ? 'Request consultation' : 'Yêu cầu tư vấn'}
                inquiryHref={`/${params.locale}/contact#contact-form`}
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* ════════════════════════════════════════════════════════════
          6. CASE STUDIES — Editorial Layout
          ════════════════════════════════════════════════════════════ */}
      <Section variant="brand-tint" className="border-b border-white/[0.09] relative overflow-hidden bg-tech-grid">
        {/* Soft radial glow in the top-left */}
        <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-burgundy-glow pointer-events-none" aria-hidden="true" />
        <Container className="relative z-10">
          <div className="mb-14">
            <span className="eyebrow mb-4 block">
              {isEn ? 'Delivered Projects' : 'Dự án đã bàn giao'}
            </span>
            <Typography variant="h2" className="mb-3 text-text-primary leading-tight max-w-xl">
              {isEn ? 'Verified case studies' : 'Một số dự án hạ tầng đã bàn giao'}
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {caseStudiesCopy.map((item) => (
              <CaseStudyCard
                key={item.id}
                code={item.code}
                sector={item.sector}
                title={item.title}
                challenge={item.challenge}
                solution={item.solution}
                result={item.result}
                techs={item.techs}
                isVerified={item.isVerified}
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* ════════════════════════════════════════════════════════════
          7. DELIVERY PROCESS — Vertical Rail
          ════════════════════════════════════════════════════════════ */}
      <Section variant="alternate" className="border-b border-white/[0.09] relative overflow-hidden bg-tech-dots">
        {/* Soft radial glow in the center-bottom */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-burgundy-glow pointer-events-none" aria-hidden="true" />
        <Container className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div className="max-w-xl">
              <span className="eyebrow mb-4 block">{content.home.processHead.eyebrow}</span>
              <Typography variant="h2" className="mb-3 text-text-primary leading-tight">
                {content.home.processHead.title}
              </Typography>
              <Typography variant="body" className="text-text-secondary">
                {content.home.processHead.description}
              </Typography>
            </div>
          </div>

          {/* Process steps — horizontal numbered rail on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0">
            {stepsCopy.map((step, index) => (
              <div
                key={step.num}
                className="relative group flex flex-col"
              >
                {/* Connector line (hidden on last item) */}
                {index < stepsCopy.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-7 left-1/2 w-full h-px bg-white/10 z-0"
                    aria-hidden="true"
                  />
                )}

                <div className="relative z-10 bg-[#1C181A] group-hover:bg-[#241E21] border border-white/10 group-hover:border-white/25 rounded-[var(--radius-lg)] p-5 mx-2 flex-1 transition-[background-color,border-color,box-shadow] duration-[var(--motion-medium)] ease-[var(--ease-standard)] group-hover:shadow-md">
                  {/* Step number */}
                  <span className="index-chip mb-4 inline-block">{step.num}</span>

                  {/* Step title */}
                  <h4 className="text-sm font-semibold text-text-primary mb-2 group-hover:text-white transition-colors duration-[var(--motion-base)] leading-snug">
                    {step.title}
                  </h4>

                  {/* Step description */}
                  <p className="text-xs text-text-secondary leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ════════════════════════════════════════════════════════════
          8. FINAL CTA — Dark Burgundy CTA Section
          ════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#30171D] text-[#F7F2F3] border-t border-white/15">
        {/* Burgundy gradient accent */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#8E2938]/30 via-transparent to-transparent pointer-events-none"
          aria-hidden="true"
        />
        {/* Subtle grid on dark surface */}
        <div
          className="absolute inset-0 bg-dark-grid opacity-30 pointer-events-none"
          aria-hidden="true"
        />

        <Container className="relative z-10 py-20 md:py-24 text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#F7F2F3] bg-[#8E2938]/40 border border-[#8E2938]/60 px-3.5 py-1.5 rounded-[var(--radius-xs)] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D46A79] animate-pulse" aria-hidden="true" />
            {isEn ? 'Start the conversation' : 'Bắt đầu hợp tác'}
          </span>

          <Typography
            variant="h2"
            as="h2"
            className="text-[#F7F2F3] mb-5 leading-tight"
          >
            {isEn
              ? "Let's align your technology strategy"
              : 'Hãy đưa giải pháp công nghệ vào vận hành thực tế'}
          </Typography>

          <Typography variant="body-large" className="text-[#C8BEC1] mb-10 max-w-lg mx-auto">
            {isEn
              ? 'Schedule a 30-minute consultation with our system architects to outline your roadmap.'
              : 'Đặt lịch trao đổi 30 phút cùng đội ngũ kỹ sư trưởng để phác thảo sơ bộ giải pháp hạ tầng.'}
          </Typography>

          <Button
            variant="primary"
            size="lg"
            href={`/${params.locale}/contact#contact-form`}
            className="bg-[#8E2938] hover:bg-[#A73748] border-white/20 shadow-xl"
            rightIcon={
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            }
          >
            {isEn ? 'Consult with an Expert' : 'Đặt lịch tư vấn ngay'}
          </Button>
        </Container>
      </section>
    </div>
  );
}
