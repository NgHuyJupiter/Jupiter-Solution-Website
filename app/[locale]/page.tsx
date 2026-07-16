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
    <div className="flex flex-col w-full">

      {/* ════════════════════════════════════════════════════════════
          1. HERO — Precision Authority Entry Point
          Swiss grid: 7 cols text | 5 cols Precision Orbit graphic
          ════════════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden border-b border-[var(--color-border-default)] bg-gradient-to-b from-white via-slate-50 to-slate-100 bg-editorial-grid"
        aria-label={isEn ? 'Hero' : 'Giới thiệu'}
      >
        {/* Ambient glow — very subtle, behind right column graphic */}
        <div className="absolute right-0 top-0 w-1/2 h-full bg-burgundy-glow pointer-events-none" aria-hidden="true" />

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
              className="text-text-primary mb-5 opacity-0 animate-fade-up delay-100"
            >
              {heroCopy.headline}
            </Typography>

            {/* Supporting description */}
            <Typography
              variant="body-large"
              className="text-text-secondary mb-8 max-w-[540px] opacity-0 animate-fade-up delay-200"
            >
              {heroCopy.description}
            </Typography>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mb-10 opacity-0 animate-fade-up delay-300">
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
              className="grid grid-cols-3 gap-6 sm:gap-10 border-t border-[var(--color-border-default)] pt-8 w-full max-w-md opacity-0 animate-fade-in delay-400"
              role="list"
              aria-label={isEn ? 'Company statistics' : 'Thống kê công ty'}
            >
              {heroCopy.stats.map((stat) => (
                <div key={stat.label} className="flex flex-col" role="listitem">
                  <span className="text-2xl sm:text-3xl font-extrabold text-brand-600 leading-none tabular-nums">
                    {stat.value}
                  </span>
                  <span className="text-[11px] font-medium text-text-muted mt-1.5 leading-tight">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right Column: Precision Orbit Diagram ─────────── */}
          <div
            className="lg:col-span-5 hidden lg:flex items-center justify-center opacity-0 animate-scale-in delay-200"
            aria-hidden="true"
          >
            <div className="relative w-full max-w-[440px] aspect-square">
              {/* Outer frame — precision panel */}
              <div className="absolute inset-0 rounded-[var(--radius-xl)] border border-[var(--color-border-default)] bg-white/60 backdrop-blur-xs shadow-[var(--shadow-sm)]">
                {/* Corner coordinate marks */}
                <span className="absolute top-3 left-3 font-mono text-[8px] text-slate-300 select-none">+</span>
                <span className="absolute top-3 right-3 font-mono text-[8px] text-slate-300 select-none">+</span>
                <span className="absolute bottom-3 left-3 font-mono text-[8px] text-slate-300 select-none">+</span>
                <span className="absolute bottom-3 right-3 font-mono text-[8px] text-slate-300 select-none">+</span>
              </div>

              {/* SVG Precision Orbit Diagram */}
              <svg
                viewBox="0 0 440 440"
                className="relative z-10 w-full h-full select-none"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Grid alignment lines */}
                <line x1="220" y1="40" x2="220" y2="400" stroke="rgba(148,163,184,0.06)" strokeWidth="1" />
                <line x1="40" y1="220" x2="400" y2="220" stroke="rgba(148,163,184,0.06)" strokeWidth="1" />

                {/* Outer orbit circle */}
                <circle
                  cx="220" cy="220" r="170"
                  stroke="rgba(128,0,32,0.05)"
                  strokeWidth="1.5"
                />

                {/* Dashed tracking orbit */}
                <circle
                  cx="220" cy="220" r="130"
                  stroke="rgba(128,0,32,0.09)"
                  strokeWidth="1.2"
                  strokeDasharray="4 5"
                />

                {/* Inner precision circle */}
                <circle
                  cx="220" cy="220" r="90"
                  stroke="rgba(128,0,32,0.13)"
                  strokeWidth="1"
                />

                {/* Asymmetric ellipse trajectory */}
                <ellipse
                  cx="220" cy="220"
                  rx="150" ry="85"
                  stroke="rgba(128,0,32,0.07)"
                  strokeWidth="1.2"
                  transform="rotate(-18 220 220)"
                />

                {/* Connector radials from center */}
                <line x1="220" y1="220" x2="95" y2="125"  stroke="rgba(148,163,184,0.12)" strokeWidth="1" />
                <line x1="220" y1="220" x2="345" y2="125" stroke="rgba(148,163,184,0.12)" strokeWidth="1" />
                <line x1="220" y1="220" x2="220" y2="335" stroke="rgba(148,163,184,0.12)" strokeWidth="1" />
                <line x1="220" y1="220" x2="100" y2="305" stroke="rgba(148,163,184,0.12)" strokeWidth="1" />
                <line x1="220" y1="220" x2="340" y2="305" stroke="rgba(148,163,184,0.10)" strokeWidth="1" />

                {/* Central Hub — geometric J with orbit ring */}
                <g>
                  <circle cx="220" cy="220" r="30" fill="white" stroke="rgba(128,0,32,0.15)" strokeWidth="1.5" />
                  <circle cx="220" cy="220" r="30" fill="white" stroke="var(--color-brand-600)" strokeWidth="2" opacity="0.9" />
                  {/* Geometric J letterform */}
                  <path
                    d="M 220 207 A 11 11 0 1 1 209 224 L 209 210"
                    stroke="var(--color-brand-600)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    fill="none"
                  />
                  {/* Center node */}
                  <circle cx="220" cy="220" r="2.5" fill="var(--color-brand-600)" />
                </g>

                {/* Module 1: CLOUD OPS (top right) */}
                <g transform="translate(295, 102)">
                  <rect x="-8" y="-14" width="96" height="40" rx="4" fill="white" stroke="rgba(148,163,184,0.22)" strokeWidth="1" />
                  <rect x="-8" y="-14" width="96" height="40" rx="4" fill="white" stroke="rgba(148,163,184,0.22)" strokeWidth="1" />
                  <text x="40" y="4"  textAnchor="middle" fill="var(--color-text-primary)" fontSize="8.5" fontWeight="700" fontFamily="var(--font-sans)">CLOUD</text>
                  <text x="40" y="16" textAnchor="middle" fill="var(--color-text-muted)"   fontSize="7"   fontWeight="500" fontFamily="var(--font-mono)">INFRASTRUCTURE</text>
                  <circle cx="-8" cy="6" r="2.5" fill="var(--color-brand-600)" />
                </g>

                {/* Module 2: SECURITY SOC (top left) */}
                <g transform="translate(55, 102)">
                  <rect x="-8" y="-14" width="96" height="40" rx="4" fill="white" stroke="rgba(148,163,184,0.22)" strokeWidth="1" />
                  <text x="40" y="4"  textAnchor="middle" fill="var(--color-text-primary)" fontSize="8.5" fontWeight="700" fontFamily="var(--font-sans)">SECURITY</text>
                  <text x="40" y="16" textAnchor="middle" fill="var(--color-text-muted)"   fontSize="7"   fontWeight="500" fontFamily="var(--font-mono)">ZERO TRUST SOC</text>
                  <circle cx="88" cy="6" r="2.5" fill="var(--color-brand-500)" />
                </g>

                {/* Module 3: APPLIED AI (bottom center) */}
                <g transform="translate(172, 315)">
                  <rect x="-8" y="-14" width="96" height="40" rx="4" fill="white" stroke="rgba(148,163,184,0.22)" strokeWidth="1" />
                  <text x="40" y="4"  textAnchor="middle" fill="var(--color-text-primary)" fontSize="8.5" fontWeight="700" fontFamily="var(--font-sans)">APPLIED AI</text>
                  <text x="40" y="16" textAnchor="middle" fill="var(--color-text-muted)"   fontSize="7"   fontWeight="500" fontFamily="var(--font-mono)">RAG · AGENTS</text>
                  <circle cx="40" cy="-14" r="2.5" fill="var(--color-brand-600)" />
                </g>

                {/* Module 4: SOFTWARE (bottom left) */}
                <g transform="translate(60, 286)">
                  <rect x="-8" y="-14" width="96" height="40" rx="4" fill="white" stroke="rgba(148,163,184,0.22)" strokeWidth="1" />
                  <text x="40" y="4"  textAnchor="middle" fill="var(--color-text-primary)" fontSize="8.5" fontWeight="700" fontFamily="var(--font-sans)">SOFTWARE</text>
                  <text x="40" y="16" textAnchor="middle" fill="var(--color-text-muted)"   fontSize="7"   fontWeight="500" fontFamily="var(--font-mono)">CORE SYSTEMS</text>
                  <circle cx="88" cy="6" r="2.5" fill="rgba(148,163,184,0.5)" />
                </g>

                {/* Module 5: DEVOPS (bottom right) */}
                <g transform="translate(285, 286)">
                  <rect x="-8" y="-14" width="96" height="40" rx="4" fill="white" stroke="rgba(148,163,184,0.22)" strokeWidth="1" />
                  <text x="40" y="4"  textAnchor="middle" fill="var(--color-text-primary)" fontSize="8.5" fontWeight="700" fontFamily="var(--font-sans)">DEVOPS</text>
                  <text x="40" y="16" textAnchor="middle" fill="var(--color-text-muted)"   fontSize="7"   fontWeight="500" fontFamily="var(--font-mono)">CI/CD · MONITORING</text>
                  <circle cx="-8" cy="6" r="2.5" fill="rgba(148,163,184,0.35)" />
                </g>

                {/* Geo-coordinate label */}
                <text x="16" y="428" fill="rgba(148,163,184,0.4)" fontSize="6.5" fontFamily="var(--font-mono)">
                  SYS.LOC: 21.0285°N 105.8542°E
                </text>
                <text x="380" y="428" textAnchor="end" fill="rgba(148,163,184,0.4)" fontSize="6.5" fontFamily="var(--font-mono)">
                  v2.4
                </text>
              </svg>
            </div>
          </div>
        </Container>
      </section>

      {/* ════════════════════════════════════════════════════════════
          2. INDUSTRY CREDIBILITY STRIP
          ════════════════════════════════════════════════════════════ */}
      <div
        className="bg-white border-b border-[var(--color-border-default)] py-6"
        aria-label={isEn ? 'Industry sectors served' : 'Lĩnh vực phục vụ'}
      >
        <Container>
          <div className="flex flex-col items-center gap-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-text-subtle">
              {isEn ? 'Core Industry Verticals' : 'Ngành công nghiệp trọng yếu'}
            </span>
            <div className="flex flex-wrap items-center justify-center gap-0">
              {sectors.map((sector, i) => (
                <span key={sector} className="flex items-center">
                  <span className="text-sm font-semibold text-slate-400 hover:text-slate-600 transition-colors duration-[var(--motion-fast)] px-4 md:px-6 py-1">
                    {sector}
                  </span>
                  {i < sectors.length - 1 && (
                    <span className="w-px h-4 bg-slate-200" aria-hidden="true" />
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
      <Section variant="default" className="border-b border-[var(--color-border-default)] relative overflow-hidden bg-tech-dots">
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
      <Section variant="subtle" className="border-b border-[var(--color-border-default)] relative overflow-hidden bg-tech-grid">
        {/* Soft radial glow on the left */}
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-burgundy-glow pointer-events-none" aria-hidden="true" />
        <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Left: quote + CTA */}
          <div className="lg:col-span-7">
            <span className="eyebrow mb-5 block">{content.home.capabilitiesHead.eyebrow}</span>
            <blockquote className="text-clamp-h2 font-semibold text-text-primary leading-snug tracking-tight mb-6 italic border-l-2 border-brand-600 pl-6">
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
            <div className="bg-white border border-[var(--color-border-default)] rounded-[var(--radius-lg)] overflow-hidden shadow-[var(--shadow-xs)]">
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
                  value: 'Hà Nội · Tp. HCM · Singapore', // CONTENT VERIFICATION REQUIRED
                },
              ].map((row, i, arr) => (
                <div
                  key={row.label}
                  className={`px-6 py-5 flex flex-col ${i < arr.length - 1 ? 'border-b border-[var(--color-border-default)]' : ''}`}
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
      <Section variant="default" className="border-b border-[var(--color-border-default)] relative overflow-hidden bg-tech-dots">
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
      <Section variant="subtle" className="border-b border-[var(--color-border-default)] relative overflow-hidden bg-tech-grid">
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
      <Section variant="default" className="border-b border-[var(--color-border-default)] relative overflow-hidden bg-tech-dots">
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
                    className="hidden lg:block absolute top-7 left-1/2 w-full h-px bg-[var(--color-border-default)] z-0"
                    aria-hidden="true"
                  />
                )}

                <div className="relative z-10 bg-[var(--color-bg-default)] group-hover:bg-white border border-[var(--color-border-default)] group-hover:border-brand-200 rounded-[var(--radius-lg)] p-5 mx-2 flex-1 transition-[background-color,border-color,box-shadow] duration-[var(--motion-medium)] ease-[var(--ease-standard)] group-hover:shadow-[var(--shadow-sm)]">
                  {/* Step number */}
                  <span className="index-chip mb-4 inline-block">{step.num}</span>

                  {/* Step title */}
                  <h4 className="text-sm font-semibold text-text-primary mb-2 group-hover:text-brand-700 transition-colors duration-[var(--motion-base)] leading-snug">
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
          8. FINAL CTA — Dark Charcoal Section
          ════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[var(--color-surface-dark)] text-white">
        {/* Burgundy gradient accent */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-brand-950/40 via-transparent to-transparent pointer-events-none"
          aria-hidden="true"
        />
        {/* Subtle grid on dark surface */}
        <div
          className="absolute inset-0 bg-dark-grid opacity-40 pointer-events-none"
          aria-hidden="true"
        />

        <Container className="relative z-10 py-20 md:py-24 text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.12em] text-brand-300 bg-brand-900/60 border border-brand-800 px-3 py-1.5 rounded-[var(--radius-xs)] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" aria-hidden="true" />
            {isEn ? 'Start the conversation' : 'Bắt đầu hợp tác'}
          </span>

          <Typography
            variant="h2"
            as="h2"
            className="text-white mb-5 leading-tight"
          >
            {isEn
              ? "Let's align your technology strategy"
              : 'Hãy đưa giải pháp công nghệ vào vận hành thực tế'}
          </Typography>

          <Typography variant="body-large" className="text-slate-300 mb-10 max-w-lg mx-auto">
            {isEn
              ? 'Schedule a 30-minute consultation with our system architects to outline your roadmap.'
              : 'Đặt lịch trao đổi 30 phút cùng đội ngũ kỹ sư trưởng để phác thảo sơ bộ giải pháp hạ tầng.'}
          </Typography>

          <Button
            variant="primary"
            size="lg"
            href={`/${params.locale}/contact#contact-form`}
            className="bg-brand-600 hover:bg-brand-500 border-transparent shadow-lg hover:shadow-brand-900/50"
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
