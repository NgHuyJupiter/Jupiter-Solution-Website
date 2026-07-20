import { siteContentVi } from '@/content/vi/site';
import { siteContentEn } from '@/content/en/site';
import Container from '@/components/ui/container';
import Section from '@/components/ui/section';
import Typography from '@/components/ui/typography';
import Button from '@/components/ui/button';
import CaseStudyCard from '@/components/marketing/case-study-card';
import TechnologyOrbit from '@/components/marketing/technology-orbit';
import SystemCredibilityStrip from '@/components/marketing/system-credibility-strip';
import SolutionByChallenge from '@/components/marketing/solution-by-challenge';
import SolutionDomains from '@/components/marketing/solution-domains';
import WhyJupiterPillars from '@/components/marketing/why-jupiter-pillars';
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
  const caseStudiesCopy = content.caseStudies.list.slice(0, 2);
  const stepsCopy = content.home.processSteps;

  /* ── Verified OEM Integration Partners ── */
  const partners = [
    { name: 'Juniper Networks', tag: 'NETWORKING & SECURITY' },
    { name: 'HPE Enterprise', tag: 'SERVERS & STORAGE' },
    { name: 'VMware', tag: 'VIRTUALIZATION & HCI' },
    { name: 'Splunk', tag: 'SIEM & SOAR ANALYTICS' },
    { name: 'BeyondTrust', tag: 'PRIVILEGED ACCESS' },
    { name: 'ForeScout', tag: 'IOT / OT SECURITY' },
  ];

  return (
    <div className="flex flex-col w-full bg-[#100E0F] text-[#F7F2F3]">

      {/* ════════════════════════════════════════════════════════════
          1. HERO — Jupiter Enterprise Orbit
          Value proposition: Who we are, Who we serve, Outcome, Dual CTAs
          ════════════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden border-b border-white/[0.09] bg-[#100E0F] bg-editorial-grid"
        aria-label={isEn ? 'Hero' : 'Giới thiệu'}
      >
        {/* Burgundy ambient light */}
        <div className="absolute right-0 top-0 w-3/5 h-full bg-burgundy-glow pointer-events-none opacity-80" aria-hidden="true" />

        <Container className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16 items-center relative z-10 pt-16 pb-20 md:pt-20 md:pb-24">

          {/* ── Left Column: Value Proposition ──────────────────── */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <span
              className="eyebrow mb-6 font-mono text-xs font-bold uppercase tracking-widest text-[#D46A79] bg-[#1C181A] px-3 py-1 rounded-[var(--radius-xs)] border border-white/10"
              aria-label={heroCopy.eyebrow}
            >
              {heroCopy.eyebrow}
            </span>

            <Typography
              variant="display"
              as="h1"
              className="text-[#F7F2F3] mb-5 font-extrabold tracking-tight leading-tight text-3xl sm:text-4xl md:text-5xl"
            >
              {heroCopy.headline}
            </Typography>

            <Typography
              variant="body-large"
              className="text-[#C8BEC1] mb-8 max-w-[560px] leading-relaxed text-sm sm:text-base"
            >
              {heroCopy.description}
            </Typography>

            <div className="mb-8 inline-flex items-center gap-2 px-3 py-1.5 rounded-[var(--radius-xs)] bg-[#1C181A] border border-white/10 font-mono text-[10px] text-[#D46A79]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8E2938] animate-pulse" aria-hidden="true" />
              <span>{heroCopy.credibilityPill}</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                href={`/${params.locale}/contact#contact-form`}
                className="bg-[#8E2938] hover:bg-[#A73748] border-white/20 shadow-xl"
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
          </div>

          {/* ── Right Column: Precision Orbit System ─────────────── */}
          <div className="lg:col-span-5 flex items-center justify-center pt-6 lg:pt-0">
            <TechnologyOrbit />
          </div>
        </Container>
      </section>

      {/* ════════════════════════════════════════════════════════════
          2. ENTERPRISE PROOF STRIP — Status Metrics
          ════════════════════════════════════════════════════════════ */}
      <SystemCredibilityStrip locale={params.locale} stats={heroCopy.stats} />

      {/* ════════════════════════════════════════════════════════════
          3. VERIFIED OEM PARTNERS STRIP
          ════════════════════════════════════════════════════════════ */}
      <div
        className="bg-[#100E0F] border-b border-white/[0.09] py-10"
        aria-label={isEn ? 'OEM Integration Partners' : 'Đối tác tích hợp OEM'}
      >
        <Container>
          <div className="flex flex-col items-center gap-6">
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.15em] text-[#968B8F]">
              {isEn
                ? 'VERIFIED OEM INTEGRATION PARTNERS & HARDWARE ECOSYSTEM'
                : 'ĐỐI TÁC TÍCH HỢP HỆ THỐNG & ĐỐI TÁC PHẦN CỨNG CHÍNH HÃNG'}
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 w-full">
              {partners.map((p) => (
                <div
                  key={p.name}
                  className="group bg-[#171315] border border-white/[0.08] hover:border-white/20 p-4 rounded-[var(--radius-md)] flex flex-col items-center text-center transition-colors"
                >
                  <span className="text-xs font-bold text-[#F7F2F3] group-hover:text-white transition-colors mb-1">
                    {p.name}
                  </span>
                  <span className="text-[9px] font-mono text-[#968B8F]">
                    {p.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* ════════════════════════════════════════════════════════════
          4. SOLUTIONS MATRIX BY CUSTOMER CHALLENGE
          ════════════════════════════════════════════════════════════ */}
      <SolutionByChallenge locale={params.locale} />

      {/* ════════════════════════════════════════════════════════════
          5. CORE SOLUTION DOMAINS
          ════════════════════════════════════════════════════════════ */}
      <SolutionDomains locale={params.locale} />

      {/* ════════════════════════════════════════════════════════════
          6. REASONS TO CHOOSE JUPITER PILLARS
          ════════════════════════════════════════════════════════════ */}
      <WhyJupiterPillars locale={params.locale} />

      {/* ════════════════════════════════════════════════════════════
          7. SERVICE ECOSYSTEM ARCHITECTURE
          ════════════════════════════════════════════════════════════ */}
      <ServiceEcosystem
        locale={params.locale}
        head={content.home.servicePillarsHead}
        pillars={content.home.servicePillars}
      />

      {/* ════════════════════════════════════════════════════════════
          8. VERIFIED CASE STUDIES
          ════════════════════════════════════════════════════════════ */}
      <Section variant="brand-tint" className="border-b border-white/[0.09] relative overflow-hidden bg-tech-grid">
        <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-burgundy-glow pointer-events-none opacity-50" aria-hidden="true" />
        <Container className="relative z-10" id="case-studies">
          <div className="mb-14">
            <span className="eyebrow mb-4 block text-[#D46A79]">
              {isEn ? 'VERIFIED CUSTOMER STORIES' : 'DỰ ÁN ĐÃ BÀN GIAO THỰC TẾ'}
            </span>
            <Typography variant="h2" className="mb-3 text-[#F7F2F3] leading-tight max-w-xl font-bold">
              {isEn ? 'Delivered Infrastructure Outcomes' : 'Các dự án hạ tầng tiêu biểu đã nghiệm thu'}
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
          9. 5-STAGE DELIVERY METHODOLOGY
          ════════════════════════════════════════════════════════════ */}
      <div id="methodology">
        <DeliveryMethodology
          locale={params.locale}
          head={content.home.processHead}
          steps={stepsCopy}
        />
      </div>

      {/* ════════════════════════════════════════════════════════════
          10. TECHNICAL CAPABILITY & CERTIFIED ENGINEERS
          ════════════════════════════════════════════════════════════ */}
      <Section variant="subtle" className="border-b border-white/[0.09]">
        <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <span className="eyebrow mb-4 block text-[#D46A79]">
              {content.home.capabilitiesHead.eyebrow}
            </span>
            <Typography variant="h2" className="text-3xl font-extrabold text-[#F7F2F3] mb-6 italic tracking-tight border-l-2 border-[#8E2938] pl-6">
              &ldquo;{content.home.capabilitiesHead.title}&rdquo;
            </Typography>
            <Typography variant="body-large" className="text-[#C8BEC1] mb-8 max-w-xl">
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
            <div className="bg-[#1C181A] border border-white/10 rounded-[var(--radius-lg)] p-6 shadow-xl">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#968B8F] block mb-4">
                {isEn ? 'ENGINEERING RESOURCE DISTRIBUTION' : 'PHÂN BỔ NHÂN SỰ KỸ THUẬT'}
              </span>
              <div className="space-y-4">
                {content.capabilities.ratios.slice(0, 4).map((r) => (
                  <div key={r.title} className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                    <div>
                      <span className="text-xs font-bold text-[#F7F2F3] block">{r.title}</span>
                      <span className="text-[10px] text-[#968B8F] block">{r.desc}</span>
                    </div>
                    <span className="font-mono text-lg font-extrabold text-[#D46A79]">{r.percent}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ════════════════════════════════════════════════════════════
          11. SECURITY & RELIABILITY GOVERNANCE
          ════════════════════════════════════════════════════════════ */}
      <SecurityPrinciples
        locale={params.locale}
        head={content.home.securityHead}
        principles={content.home.securityPrinciples}
      />

      {/* ════════════════════════════════════════════════════════════
          12. FINAL CONVERSATION CTA
          ════════════════════════════════════════════════════════════ */}
      <ConsultationCTA locale={params.locale} brand={content.brand} />
    </div>
  );
}
