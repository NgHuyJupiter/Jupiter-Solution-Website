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
import SystemCredibilityStrip from '@/components/marketing/system-credibility-strip';
import BusinessChallenges from '@/components/marketing/business-challenges';
import ServiceEcosystem from '@/components/marketing/service-ecosystem';
import DeliveryMethodology from '@/components/marketing/delivery-methodology';
import SecurityPrinciples from '@/components/marketing/security-principles';
import ConsultationCTA from '@/components/marketing/consultation-cta';
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
  const productsCopy = content.products.list;
  const caseStudiesCopy = content.caseStudies.list.slice(0, 2);
  const stepsCopy = content.home.processSteps;

  /* ── Authorized OEM Integration Partners ── */
  const partners = [
    { name: 'Juniper Networks', tag: 'NETWORKING & SECURITY' },
    { name: 'HPE Enterprise', tag: 'SERVERS & STORAGE' },
    { name: 'VMware', tag: 'VIRTUALIZATION & HCI' },
    { name: 'Splunk', tag: 'SIEM & SOAR ANALYTICS' },
    { name: 'BeyondTrust', tag: 'PRIVILEGED ACCESS' },
    { name: 'ForeScout', tag: 'IOT / OT SECURITY' },
  ];

  return (
    <div className="flex flex-col w-full bg-[#100D0E] text-[#F6F1F2]">

      {/* ════════════════════════════════════════════════════════════
          1. HERO — Orbital Enterprise System Entry
          Asymmetric Swiss grid: 7 cols text | 5 cols Dynamic Orbit graphic
          ════════════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden border-b border-white/[0.09] bg-[#100D0E] bg-editorial-grid"
        aria-label={isEn ? 'Hero' : 'Giới thiệu'}
      >
        {/* Muted burgundy ambient glow */}
        <div className="absolute right-0 top-0 w-3/5 h-full bg-burgundy-glow pointer-events-none opacity-80" aria-hidden="true" />

        <Container className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16 items-center relative z-10 pt-16 pb-20 md:pt-20 md:pb-24">

          {/* ── Left Column: Copy ─────────────────────────────── */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">

            {/* Eyebrow label */}
            <span
              className="eyebrow mb-6 font-mono text-xs font-bold uppercase tracking-widest text-[#D66A7E] bg-[#1B1618] px-3 py-1 rounded-[var(--radius-xs)] border border-white/10"
              aria-label={heroCopy.eyebrow}
            >
              {heroCopy.eyebrow}
            </span>

            {/* Primary Headline */}
            <Typography
              variant="display"
              as="h1"
              className="text-[#F6F1F2] mb-5 font-extrabold tracking-tight leading-tight text-3xl sm:text-4xl md:text-5xl"
            >
              {heroCopy.headline}
            </Typography>

            {/* Supporting description */}
            <Typography
              variant="body-large"
              className="text-[#B6ACAF] mb-8 max-w-[560px] leading-relaxed text-sm sm:text-base"
            >
              {heroCopy.description}
            </Typography>

            {/* Credibility Pill */}
            <div className="mb-8 inline-flex items-center gap-2 px-3 py-1.5 rounded-[var(--radius-xs)] bg-[#1B1618] border border-white/10 font-mono text-[10px] text-[#D66A7E]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8F263D] animate-pulse" aria-hidden="true" />
              <span>{heroCopy.credibilityPill}</span>
            </div>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                href={`/${params.locale}/contact#contact-form`}
                className="bg-[#8F263D] hover:bg-[#A52D48] border-white/20 shadow-xl"
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
                href={`/${params.locale}/capabilities`}
              >
                {heroCopy.ctaSecondary}
              </Button>
            </div>
          </div>

          {/* ── Right Column: Interactive Technology Orbit System ── */}
          <div className="lg:col-span-5 flex items-center justify-center pt-6 lg:pt-0">
            <TechnologyOrbit />
          </div>
        </Container>
      </section>

      {/* ════════════════════════════════════════════════════════════
          2. SYSTEM CREDIBILITY STRIP — Horizontal Enterprise Status
          ════════════════════════════════════════════════════════════ */}
      <SystemCredibilityStrip locale={params.locale} stats={heroCopy.stats} />

      {/* ════════════════════════════════════════════════════════════
          3. CLIENT & OEM PARTNER PROOF
          ════════════════════════════════════════════════════════════ */}
      <div
        className="bg-[#100D0E] border-b border-white/[0.09] py-10"
        aria-label={isEn ? 'OEM Partners' : 'Đối tác công nghệ'}
      >
        <Container>
          <div className="flex flex-col items-center gap-6">
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.15em] text-[#81777A]">
              {isEn
                ? 'CHOSEN FOR HIGH-AVAILABILITY & ENTERPRISE INTEGRATION PROJECTS'
                : 'ĐƯỢC LỰA CHỌN TRONG CÁC DỰ ÁN YÊU CẦU ĐỘ ỔN ĐỊNH & KHẢ NĂNG MỞ RỘNG CAO'}
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 w-full">
              {partners.map((p) => (
                <div
                  key={p.name}
                  className="group bg-[#151112] border border-white/[0.08] hover:border-white/20 p-4 rounded-[var(--radius-md)] flex flex-col items-center text-center transition-colors"
                >
                  <span className="text-xs font-bold text-[#F6F1F2] group-hover:text-white transition-colors mb-1">
                    {p.name}
                  </span>
                  <span className="text-[9px] font-mono text-[#81777A]">
                    {p.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* ════════════════════════════════════════════════════════════
          4. BUSINESS CHALLENGES — Diagnostic Operational Grid
          ════════════════════════════════════════════════════════════ */}
      <BusinessChallenges
        locale={params.locale}
        head={content.home.challengesHead}
        challenges={content.home.challenges}
      />

      {/* ════════════════════════════════════════════════════════════
          5. SERVICE ECOSYSTEM — 3 Architectural Pillars
          ════════════════════════════════════════════════════════════ */}
      <ServiceEcosystem
        locale={params.locale}
        head={content.home.servicePillarsHead}
        pillars={content.home.servicePillars}
      />

      {/* ════════════════════════════════════════════════════════════
          6. SELECTED CASE STUDIES — Editorial Layout
          ════════════════════════════════════════════════════════════ */}
      <Section variant="brand-tint" className="border-b border-white/[0.09] relative overflow-hidden bg-tech-grid">
        <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-burgundy-glow pointer-events-none opacity-50" aria-hidden="true" />
        <Container className="relative z-10">
          <div className="mb-14">
            <span className="eyebrow mb-4 block text-[#D66A7E]">
              {isEn ? 'DELIVERED PROJECTS' : 'DỰ ÁN ĐÃ BÀN GIAO'}
            </span>
            <Typography variant="h2" className="mb-3 text-[#F6F1F2] leading-tight max-w-xl font-bold">
              {isEn ? 'Verified Enterprise Case Studies' : 'Một số dự án hạ tầng tiêu biểu đã bàn giao'}
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          7. DELIVERY METHODOLOGY — 5-Stage System Timeline
          ════════════════════════════════════════════════════════════ */}
      <DeliveryMethodology
        locale={params.locale}
        head={content.home.processHead}
        steps={stepsCopy}
      />

      {/* ════════════════════════════════════════════════════════════
          8. TECHNICAL CAPABILITIES & TEAM COMPOSITION
          ════════════════════════════════════════════════════════════ */}
      <Section variant="subtle" className="border-b border-white/[0.09]">
        <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <span className="eyebrow mb-4 block text-[#D66A7E]">
              {content.home.capabilitiesHead.eyebrow}
            </span>
            <Typography variant="h2" className="text-3xl font-extrabold text-[#F6F1F2] mb-6 italic tracking-tight border-l-2 border-[#8F263D] pl-6">
              &ldquo;{content.home.capabilitiesHead.title}&rdquo;
            </Typography>
            <Typography variant="body-large" className="text-[#B6ACAF] mb-8 max-w-xl">
              {content.home.capabilitiesHead.description}
            </Typography>
            <Button
              variant="outline"
              size="md"
              href={`/${params.locale}/capabilities`}
            >
              {isEn ? 'Engineering Capabilities' : 'Năng lực kỹ thuật chi tiết'}
            </Button>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-[#1B1618] border border-white/10 rounded-[var(--radius-lg)] p-6 shadow-xl">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#81777A] block mb-4">
                {isEn ? 'ENGINEERING RESOURCE DISTRIBUTION' : 'PHÂN BỔ NHÂN SỰ KỸ THUẬT'}
              </span>
              <div className="space-y-4">
                {content.capabilities.ratios.slice(0, 4).map((r) => (
                  <div key={r.title} className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                    <div>
                      <span className="text-xs font-bold text-[#F6F1F2] block">{r.title}</span>
                      <span className="text-[10px] text-[#81777A] block">{r.desc}</span>
                    </div>
                    <span className="font-mono text-lg font-extrabold text-[#D66A7E]">{r.percent}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ════════════════════════════════════════════════════════════
          9. SECURITY & RELIABILITY GOVERNANCE
          ════════════════════════════════════════════════════════════ */}
      <SecurityPrinciples
        locale={params.locale}
        head={content.home.securityHead}
        principles={content.home.securityPrinciples}
      />

      {/* ════════════════════════════════════════════════════════════
          10. FINAL CONVERSATION CTA
          ════════════════════════════════════════════════════════════ */}
      <ConsultationCTA locale={params.locale} brand={content.brand} />
    </div>
  );
}
