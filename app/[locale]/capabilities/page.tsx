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
    <div className="flex flex-col w-full">
      {/* Page Header */}
      <Section variant="alternate" className="py-12 border-b border-slate-200 bg-white">
        <Container>
          <span className="text-xs font-bold text-brand-600 bg-brand-50 px-2.5 py-1 rounded-xs uppercase tracking-wider">
            {isEn ? 'Capabilities' : 'Năng lực kỹ thuật'}
          </span>
          <Typography variant="h1" className="mt-4 mb-3 text-text-primary">
            {isEn ? 'Engineering Strength & Team Structure' : 'Một đội ngũ kỹ thuật đa năng'}
          </Typography>
          <Typography variant="body-large" className="text-text-secondary max-w-3xl mb-0">
            {content.capabilities.intro}
          </Typography>
        </Container>
      </Section>

      {/* Team ratios distribution */}
      <Section variant="default" className="border-b border-slate-200">
        <Container>
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold text-brand-600 bg-brand-50 px-2.5 py-1 rounded-xs uppercase tracking-wider">
              {isEn ? 'Team proportion' : 'Cấu trúc đội ngũ'}
            </span>
            <Typography variant="h2" className="mt-4 mb-2 text-text-primary">
              {isEn ? 'How our engineering resource is structured' : 'Phân bổ nhân sự kỹ thuật chuyên biệt'}
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ratios.map((ratio) => (
              <div key={ratio.title} className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm hover:border-slate-300 transition-colors">
                <span className="text-3xl font-extrabold text-brand-600 leading-none block mb-2">
                  {ratio.percent}
                </span>
                <h4 className="text-sm font-semibold text-text-primary mb-1">
                  {ratio.title}
                </h4>
                <p className="text-xs text-text-secondary leading-relaxed mt-1">
                  {ratio.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Certifications and Compliance list */}
      <Section variant="alternate" className="border-b border-slate-200">
        <Container>
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold text-brand-600 bg-brand-50 px-2.5 py-1 rounded-xs uppercase tracking-wider">
              {isEn ? 'Certifications & Compliance' : 'Chứng chỉ & Tuân thủ'}
            </span>
            <Typography variant="h2" className="mt-4 mb-2 text-text-primary">
              {isEn ? 'Authorized OEM Credentials' : 'Các chứng chỉ kỹ thuật quốc tế'}
            </Typography>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certs.map((cert) => (
              <div key={cert.code} className="bg-bg-default border border-slate-200 rounded p-4 hover:border-slate-300 transition-colors">
                <span className="font-mono text-xs font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-sm uppercase tracking-wider block w-fit mb-3">
                  {cert.code}
                </span>
                <h4 className="text-xs font-semibold text-text-primary leading-snug mb-1">
                  {cert.title}
                </h4>
                <span className="text-[11px] font-bold text-brand-600">
                  {cert.count}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Offices Locations (Address Verification) */}
      <Section variant="default">
        <Container className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 max-w-xl">
            <span className="text-xs font-bold text-brand-600 bg-brand-50 px-2.5 py-1 rounded-xs uppercase tracking-wider">
              {isEn ? 'Physical Presence' : 'Địa điểm & Văn phòng'}
            </span>
            <Typography variant="h2" className="mt-4 mb-4 text-text-primary">
              {isEn ? 'Our primary locations' : 'Hiện diện của Sao Mộc'}
            </Typography>
            <p className="text-sm text-text-secondary leading-relaxed mb-6">
              {isEn
                ? 'Our core engineering and pre-sales labs are based in Hanoi. We coordinate support services for corporate clients across secondary branches.'
                : 'Trụ sở chính và phòng Lab thử nghiệm PoC của chúng tôi đặt tại Hà Nội. Đội ngũ kỹ sư hỗ trợ các chi nhánh lớn của khách hàng trên toàn quốc thông qua SLA bảo trì onsite.'}
            </p>
            <div className="text-sm border-l-2 border-brand-600 pl-4 py-1">
              <span className="font-bold text-text-primary block mb-1">Hà Nội (Trụ sở chính)</span>
              <span className="text-text-secondary block leading-relaxed">{content.brand.address}</span>
            </div>
          </div>

          <div className="lg:col-span-4 bg-bg-default border border-slate-200 rounded-lg p-5 text-xs space-y-4">
            <span className="font-bold text-text-primary block border-b border-slate-200 pb-2">
              {isEn ? 'Other Regional Presences' : 'Các hiện diện khu vực khác'}
            </span>
            {/* CONTENT VERIFICATION REQUIRED: Verify offices in HCM and Singapore */}
            <div>
              <span className="font-semibold text-slate-700 block">Thành phố Hồ Chí Minh (Văn phòng đại diện)</span>
              <span className="text-text-muted mt-0.5 block">[CONTENT VERIFICATION REQUIRED: HCM Office Address]</span>
            </div>
            <div>
              <span className="font-semibold text-slate-700 block">Singapore Office</span>
              <span className="text-text-muted mt-0.5 block">[CONTENT VERIFICATION REQUIRED: Singapore Office Address]</span>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
