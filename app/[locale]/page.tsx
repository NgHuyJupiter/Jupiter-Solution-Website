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

// Generate dynamic B2B metadata for the Homepage
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
  const servicesCopy = content.services.list.slice(0, 4); // Show top 4 services on homepage
  const productsCopy = content.products.list;
  const caseStudiesCopy = content.caseStudies.list.slice(0, 2); // Show top 2 case studies
  const stepsCopy = content.home.processSteps;

  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section */}
      <Section variant="default" className="pt-16 pb-20 border-b border-slate-200">
        <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Left Column Text */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold text-brand-600 bg-brand-50 rounded-xs mb-6 uppercase tracking-wider">
              {heroCopy.eyebrow}
            </span>
            <Typography variant="display" className="text-text-primary leading-tight font-extrabold mb-5">
              {heroCopy.headline}
            </Typography>
            <Typography variant="body-large" className="text-text-secondary mb-8 max-w-xl">
              {heroCopy.description}
            </Typography>
            
            {/* CTA Actions */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-10">
              <Button
                variant="primary"
                size="lg"
                className="bg-brand-600 hover:bg-brand-700 text-white rounded-md w-full sm:w-auto"
                href={`/${params.locale}/contact#contact-form`}
              >
                {heroCopy.ctaPrimary}
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
                href={`/${params.locale}/services`}
              >
                {heroCopy.ctaSecondary}
              </Button>
            </div>

            {/* Numerical stats row */}
            <div className="grid grid-cols-3 gap-6 sm:gap-10 border-t border-slate-200 pt-8 w-full">
              {heroCopy.stats.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-bold text-brand-600 leading-none">
                    {stat.value}
                  </span>
                  <span className="text-[11px] sm:text-xs font-medium text-text-secondary mt-1.5 leading-tight">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Right Column: Clean geometric system layout placeholder */}
          <div className="lg:col-span-5 relative hidden lg:block" aria-hidden="true">
            <div className="w-full aspect-square max-w-md mx-auto rounded-xl border border-slate-200 bg-white p-8 relative shadow-sm">
              {/* Inner geometric shapes mimicking modular systems */}
              <div className="absolute inset-0 bg-slate-50/50 rounded-xl" />
              <div className="relative z-10 w-full h-full border border-dashed border-slate-300 rounded-lg flex items-center justify-center p-6">
                <div className="w-4/5 h-4/5 rounded-full border border-slate-200 relative flex items-center justify-center">
                  <div className="w-3/5 h-3/5 rounded-full border border-slate-300/80 border-dashed relative flex items-center justify-center">
                    <span className="w-10 h-10 rounded-lg bg-brand-600/10 border border-brand-600 flex items-center justify-center">
                      <span className="w-4 h-4 rounded-full border border-brand-600 border-r-transparent border-t-transparent -rotate-45" />
                    </span>
                  </div>
                  {/* Orbit nodes representing system nodes */}
                  <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-slate-300 border border-white" />
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 rounded-full bg-brand-600 border border-white" />
                  <span className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-slate-300 border border-white" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 2. Customer Logo Wall Marquee */}
      <div className="border-b border-slate-200 py-8 bg-white" aria-label="Khách hàng và đối tác">
        <Container className="flex flex-col gap-4">
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest text-center">
            {isEn ? 'Sectors and Core Industries' : 'Các lĩnh vực và hạ tầng công nghiệp'}
          </span>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 text-sm font-semibold text-slate-400">
            <span>Ngân hàng &amp; Tài chính</span>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
            <span>Năng lượng &amp; Điện lực</span>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
            <span>Chứng khoán &amp; Bảo hiểm</span>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
            <span>Hạ tầng mạng Viễn thông</span>
          </div>
        </Container>
      </div>

      {/* 3. Strategic Services Section */}
      <Section variant="default" className="border-b border-slate-200">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-brand-600 bg-brand-50 px-2.5 py-1 rounded-xs uppercase tracking-wider">
              {content.home.servicesHead.eyebrow}
            </span>
            <Typography variant="h2" className="mt-4 mb-3 text-text-primary">
              {content.home.servicesHead.title}
            </Typography>
            <Typography variant="body" className="text-text-secondary">
              {content.home.servicesHead.description}
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
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

          <div className="text-center">
            <Button
              variant="secondary"
              size="md"
              href={`/${params.locale}/services`}
            >
              {isEn ? 'View all services' : 'Xem toàn bộ dịch vụ'} →
            </Button>
          </div>
        </Container>
      </Section>

      {/* 4. Capabilities & Citations */}
      <Section variant="alternate">
        <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <span className="text-xs font-bold text-brand-600 bg-brand-50 px-2.5 py-1 rounded-xs uppercase tracking-wider">
              {content.home.capabilitiesHead.eyebrow}
            </span>
            <h3 className="text-xl sm:text-2xl font-semibold text-text-primary leading-relaxed mt-4 mb-6 italic">
              &ldquo;{content.home.capabilitiesHead.description}&rdquo;
            </h3>
            <Button
              variant="ghost"
              className="text-brand-600 hover:text-brand-700"
              href={`/${params.locale}/capabilities`}
            >
              {isEn ? 'Read company capabilities' : 'Tìm hiểu năng lực của chúng tôi'} →
            </Button>
          </div>

          {/* Capabilities metadata side indicators */}
          <div className="lg:col-span-4 bg-bg-default border border-slate-200 rounded-lg p-6 space-y-4">
            <div className="flex flex-col pb-4 border-b border-slate-200">
              <span className="text-xs text-text-muted">{isEn ? 'Founding Year' : 'Năm thành lập'}</span>
              <span className="text-lg font-bold text-text-primary mt-0.5">2019, Hà Nội</span>
            </div>
            <div className="flex flex-col pb-4 border-b border-slate-200">
              <span className="text-xs text-text-muted">{isEn ? 'Staffing' : 'Đội ngũ'}</span>
              <span className="text-lg font-bold text-text-primary mt-0.5">60+ Kỹ sư &amp; Chuyên gia</span>
            </div>
            {/* CONTENT VERIFICATION REQUIRED: HCM & SG offices address confirmation */}
            <div className="flex flex-col">
              <span className="text-xs text-text-muted">{isEn ? 'Office Presence' : 'Văn phòng hiện diện'}</span>
              <span className="text-lg font-bold text-text-primary mt-0.5">Hà Nội · Tp. HCM · Singapore</span>
            </div>
          </div>
        </Container>
      </Section>

      {/* 5. Strategic Partners & Products Showcase */}
      <Section variant="default" className="border-t border-b border-slate-200">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-brand-600 bg-brand-50 px-2.5 py-1 rounded-xs uppercase tracking-wider">
              {isEn ? 'Partner ecosystem' : 'Đối tác & Nền tảng'}
            </span>
            <Typography variant="h2" className="mt-4 mb-3 text-text-primary">
              {isEn ? 'Enterprise Technology Integration' : 'Tích hợp công nghệ cấp doanh nghiệp'}
            </Typography>
            <Typography variant="body" className="text-text-secondary">
              {content.products.intro}
            </Typography>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            {productsCopy.map((prod) => (
              <ProductCard
                key={prod.id}
                code={prod.code}
                partner={prod.partner}
                title={prod.title}
                description={prod.description}
                subgroups={prod.subgroups}
                inquiryText={isEn ? 'Consultation quote' : 'Yêu cầu tư vấn'}
                inquiryHref={`/${params.locale}/contact#contact-form`}
              />
            ))}
          </div>

          <div className="text-center">
            <Button
              variant="secondary"
              size="md"
              href={`/${params.locale}/products`}
            >
              {isEn ? 'View technical specs' : 'Xem thông số kỹ thuật'} →
            </Button>
          </div>
        </Container>
      </Section>

      {/* 6. Case Studies Section */}
      <Section variant="default" className="border-b border-slate-200">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-brand-600 bg-brand-50 px-2.5 py-1 rounded-xs uppercase tracking-wider">
              Case Studies
            </span>
            <Typography variant="h2" className="mt-4 mb-3 text-text-primary">
              {isEn ? 'Delivered Projects' : 'Một số dự án hạ tầng đã bàn giao'}
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

      {/* 7. Delivery Process Workflow */}
      <Section variant="alternate">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-brand-600 bg-brand-50 px-2.5 py-1 rounded-xs uppercase tracking-wider">
              {content.home.processHead.eyebrow}
            </span>
            <Typography variant="h2" className="mt-4 mb-3 text-text-primary">
              {content.home.processHead.title}
            </Typography>
            <Typography variant="body" className="text-text-secondary">
              {content.home.processHead.description}
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {stepsCopy.map((step) => (
              <div key={step.num} className="bg-bg-default border border-slate-200 rounded-lg p-5 flex flex-col justify-between hover:border-slate-300 transition-colors">
                <div>
                  <span className="font-mono text-sm font-semibold text-brand-600 bg-brand-50 px-2 py-0.5 rounded-sm mb-4 inline-block">
                    {step.num}
                  </span>
                  <h4 className="text-sm font-semibold text-text-primary mb-2">
                    {step.title}
                  </h4>
                </div>
                <p className="text-xs text-text-secondary leading-relaxed mt-2">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 8. Final CTA Section */}
      <Section variant="brand-tint" className="text-center">
        <Container className="max-w-3xl mx-auto py-6">
          <span className="text-xs font-bold text-brand-600 bg-white/80 border border-brand-100 px-3 py-1 rounded-xs uppercase tracking-wider">
            {isEn ? 'Start Collaboration' : 'Đặt lịch tư vấn'}
          </span>
          <Typography variant="h2" className="mt-6 mb-4 text-text-primary leading-tight">
            {isEn ? 'Let\'s align your technology strategy' : 'Hãy đưa giải pháp công nghệ vào vận hành thực tế'}
          </Typography>
          <Typography variant="body-large" className="text-text-secondary mb-8 max-w-xl mx-auto">
            {isEn
              ? 'Schedule a 30-minute consultation with our system architects to outline a roadmap.'
              : 'Đặt lịch trao đổi 30 phút cùng đội ngũ kỹ sư trưởng của chúng tôi để phác thảo sơ bộ giải pháp hạ tầng.'}
          </Typography>
          <Button
            variant="primary"
            size="lg"
            className="bg-brand-600 hover:bg-brand-700 text-white rounded-md px-8"
            href={`/${params.locale}/contact#contact-form`}
          >
            {isEn ? 'Consult with an Expert' : 'Đặt lịch tư vấn ngay'}
          </Button>
        </Container>
      </Section>
    </div>
  );
}
