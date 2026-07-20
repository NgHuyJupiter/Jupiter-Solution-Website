import { siteContentVi } from '@/content/vi/site';
import { siteContentEn } from '@/content/en/site';
import Container from '@/components/ui/container';
import Section from '@/components/ui/section';
import Typography from '@/components/ui/typography';
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
    title: isEn ? 'Our Technical Capabilities' : 'Năng lực Kỹ thuật & Đội ngũ',
    description: isEn
      ? 'A team of 60+ engineers possessing certified credentials across cloud, systems integration, and cybersecurity.'
      : 'Đội ngũ hơn 60 kỹ sư nắm giữ các chứng chỉ hãng quốc tế về điện toán đám mây, mạng lõi, an ninh và ảo hóa.',
    path: '/capabilities',
    locale: params.locale,
  });
}

export default function CapabilitiesPage({ params }: PageProps) {
  const isEn = params.locale === 'en';
  const content = isEn ? siteContentEn : siteContentVi;
  const certs = content.capabilities.certs;
  const ratios = content.capabilities.ratios;

  return (
    <div className="flex flex-col w-full bg-[#100E0F] text-text-primary">

      {/* ── Page Header ──────────────────────────────────────── */}
      <section className="py-14 md:py-16 border-b border-white/[0.09] bg-[#100E0F] bg-tech-dots relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-burgundy-glow pointer-events-none" aria-hidden="true" />
        <Container>
          <div className="max-w-3xl">
            <span className="eyebrow mb-5 block">
              {isEn ? 'Capabilities' : 'Năng lực kỹ thuật'}
            </span>
            <Typography variant="h1" className="mb-4 text-text-primary leading-tight">
              {isEn ? 'Engineering Strength & Team Structure' : 'Một đội ngũ kỹ thuật đa năng'}
            </Typography>
            <Typography variant="body-large" className="text-text-secondary max-w-2xl">
              {content.capabilities.intro}
            </Typography>
          </div>
        </Container>
      </section>

      {/* ── Team Structure — Ratio Bars ──────────────────────── */}
      <Section variant="alternate" className="border-b border-white/[0.09] bg-editorial-grid relative">
        <Container className="relative z-10">
          <div className="mb-12 opacity-0 animate-fade-up">
            <span className="eyebrow mb-4 block">
              {isEn ? 'Team Composition' : 'Cấu trúc đội ngũ'}
            </span>
            <Typography variant="h2" className="mb-3 text-text-primary leading-tight max-w-xl">
              {isEn ? 'How our engineering resource is structured' : 'Phân bổ nhân sự kỹ thuật chuyên biệt'}
            </Typography>
          </div>

          {/* Ratio cards — structured rows */}
          <div className="space-y-3">
            {ratios.map((ratio, index) => (
              <div
                key={ratio.title}
                className="group relative bg-[#1C181A] border border-white/10 hover:border-white/25 rounded-[var(--radius-lg)] p-5 grid grid-cols-1 sm:grid-cols-[80px_180px_1fr] gap-4 items-center hover-lift opacity-0 animate-fade-up"
                style={{ animationDelay: `${(index + 1) * 60}ms` }}
              >
                {/* Percentage — dominant number */}
                <span className="text-3xl font-extrabold text-[#F7F2F3] leading-none tabular-nums group-hover:scale-105 origin-left transition-transform duration-[var(--motion-base)]">
                  {ratio.percent}
                </span>

                {/* Title */}
                <h4 className="text-sm font-semibold text-text-primary group-hover:text-white transition-colors duration-[var(--motion-base)] leading-snug">
                  {ratio.title}
                </h4>

                {/* Description */}
                <p className="text-xs text-text-secondary leading-relaxed">
                  {ratio.desc}
                </p>

                {/* Corner mark */}
                <span className="absolute top-2.5 right-2.5 font-mono text-[8px] text-text-muted group-hover:text-[#D46A79] transition-colors duration-[var(--motion-base)] select-none" aria-hidden="true">+</span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Certifications — Structured Grid ─────────────────── */}
      <Section variant="subtle" className="border-b border-white/[0.09]">
        <Container>
          <div className="mb-12 opacity-0 animate-fade-up">
            <span className="eyebrow mb-4 block">
              {isEn ? 'Certifications & Compliance' : 'Chứng chỉ & Tuân thủ'}
            </span>
            <Typography variant="h2" className="mb-3 text-text-primary leading-tight max-w-xl">
              {isEn ? 'Authorized OEM Credentials' : 'Các chứng chỉ kỹ thuật quốc tế'}
            </Typography>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certs.map((cert, index) => (
              <div
                key={cert.code}
                className="group bg-[#1C181A] border border-white/10 hover:border-white/25 rounded-[var(--radius-lg)] p-5 hover-lift opacity-0 animate-fade-up"
                style={{ animationDelay: `${(index + 1) * 55}ms` }}
              >
                {/* Cert code badge */}
                <span className="font-mono text-[10px] font-bold text-text-primary bg-[#171315] border border-white/10 group-hover:border-[#8E2938]/40 group-hover:bg-[#8E2938]/20 transition-colors duration-[var(--motion-base)] px-2 py-0.5 rounded-[var(--radius-xs)] uppercase tracking-widest inline-block mb-3">
                  {cert.code}
                </span>

                {/* Cert title */}
                <h4 className="text-xs font-semibold text-text-primary leading-snug mb-2 group-hover:text-white transition-colors duration-[var(--motion-base)]">
                  {cert.title}
                </h4>

                {/* Cert count — prominent */}
                <span className="text-base font-bold text-[#D46A79]">
                  {cert.count}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Office Presence ───────────────────────────────────── */}
      <Section variant="raised">
        <Container className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <span className="eyebrow mb-5 block">
              {isEn ? 'Physical Presence' : 'Địa điểm & Văn phòng'}
            </span>
            <Typography variant="h2" className="mb-4 text-text-primary leading-tight">
              {isEn ? 'Our primary locations' : 'Hiện diện của Sao Mộc'}
            </Typography>
            <p className="text-sm text-text-secondary leading-relaxed mb-6 max-w-md">
              {isEn
                ? 'Our core engineering and pre-sales labs are based in Hanoi. We coordinate support services for corporate clients across secondary branches.'
                : 'Trụ sở chính và phòng Lab thử nghiệm PoC của chúng tôi đặt tại Hà Nội. Đội ngũ kỹ sư hỗ trợ các chi nhánh lớn của khách hàng trên toàn quốc thông qua SLA bảo trì onsite.'}
            </p>
            {/* HQ address with brand-bar accent */}
            <div className="brand-bar">
              <span className="font-bold text-text-primary block mb-1 text-sm">
                Hà Nội {isEn ? '(Headquarters)' : '(Trụ sở chính)'}
              </span>
              <span className="text-sm text-text-secondary leading-relaxed">{content.brand.address}</span>
            </div>
          </div>

          {/* Regional offices panel */}
          <div className="lg:col-span-5 bg-[#171315] border border-white/10 rounded-[var(--radius-lg)] overflow-hidden">
            <div className="px-5 py-4 border-b border-white/10">
              <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-text-muted">
                {isEn ? 'Regional Offices' : 'Văn phòng khu vực'}
              </span>
            </div>
            <div className="divide-y divide-white/[0.08]">
              {[
                {
                  city: isEn ? 'Ho Chi Minh City' : 'Thành phố Hồ Chí Minh',
                  type: isEn ? 'Representative Office' : 'Văn phòng đại diện',
                  note: isEn ? 'Address to be confirmed' : 'Địa chỉ đang cập nhật',
                },
                {
                  city: 'Singapore',
                  type: isEn ? 'Regional Office' : 'Văn phòng khu vực',
                  note: isEn ? 'Address to be confirmed' : 'Địa chỉ đang cập nhật',
                },
              ].map((office) => (
                <div key={office.city} className="px-5 py-4">
                  <span className="text-sm font-semibold text-text-primary block mb-0.5">{office.city}</span>
                  <span className="text-xs text-text-muted block mb-1">{office.type}</span>
                  <span className="text-xs text-text-subtle italic">{office.note}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
