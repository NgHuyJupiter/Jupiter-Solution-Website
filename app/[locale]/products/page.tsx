import { siteContentVi } from '@/content/vi/site';
import { siteContentEn } from '@/content/en/site';
import Container from '@/components/ui/container';
import Section from '@/components/ui/section';
import Typography from '@/components/ui/typography';
import Button from '@/components/ui/button';
import Link from '@/components/ui/link';
import ProductCard from '@/components/marketing/product-card';
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
    title: isEn ? 'Hardware & Platform Integrations' : 'Danh mục Thiết bị & Nền tảng Triển khai',
    description: isEn
      ? 'Sao Mộc is an authorized integration partner for global hardware, compute, and security providers.'
      : 'Sao Mộc là đối tác triển khai chính hãng của các thương hiệu hạ tầng lớn toàn cầu như Juniper Networks, HPE và VMware.',
    path: '/products',
    locale: params.locale,
  });
}

export default function ProductsPage({ params }: PageProps) {
  const isEn = params.locale === 'en';
  const content = isEn ? siteContentEn : siteContentVi;
  const products = content.products.list;

  return (
    <div className="flex flex-col w-full">
      {/* Page Header */}
      <Section variant="alternate" className="py-12 border-b border-slate-200 bg-white">
        <Container>
          <span className="text-xs font-bold text-brand-600 bg-brand-50 px-2.5 py-1 rounded-xs uppercase tracking-wider">
            {isEn ? 'Hardware & Software Platforms' : 'Nền tảng & Thiết bị'}
          </span>
          <Typography variant="h1" className="mt-4 mb-3 text-text-primary">
            {isEn ? 'Authorized System Integrations' : 'Thiết bị & Nền tảng chúng tôi triển khai'}
          </Typography>
          <Typography variant="body-large" className="text-text-secondary max-w-3xl mb-0">
            {content.products.intro}
          </Typography>
        </Container>
      </Section>

      {/* Main Category Cards */}
      <Section variant="default" className="border-b border-slate-200">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {products.map((group) => (
              <ProductCard
                key={group.id}
                code={group.code}
                partner={group.partner}
                title={group.title}
                description={group.description}
                subgroups={group.subgroups}
                inquiryText={isEn ? 'Inquire specifications' : 'Yêu cầu báo giá kỹ thuật'}
                inquiryHref={`/${params.locale}/contact#contact-form`}
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* Comparison Specifications Table */}
      <Section variant="alternate">
        <Container>
          <div className="max-w-2xl mb-10 opacity-0 animate-fade-up">
            <span className="text-xs font-bold text-brand-600 bg-brand-50 px-2.5 py-1 rounded-xs uppercase tracking-wider">
              {isEn ? 'Parameters comparison' : 'Đối chiếu thông số điển hình'}
            </span>
            <Typography variant="h2" className="mt-4 mb-2 text-text-primary">
              {isEn ? 'Core Network Security Gateways' : 'Các phân khúc tường lửa mạng lõi tiêu biểu'}
            </Typography>
          </div>
 
          <div className="overflow-x-auto border border-slate-200 rounded-lg shadow-sm opacity-0 animate-scale-in delay-150">
            <table className="min-w-full divide-y divide-slate-200 text-sm text-left bg-white">
              <thead className="bg-slate-50 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                <tr>
                  <th scope="col" className="px-6 py-4">{isEn ? 'Model' : 'Thiết bị'}</th>
                  <th scope="col" className="px-6 py-4">{isEn ? 'Throughput' : 'Băng thông'}</th>
                  <th scope="col" className="px-6 py-4">{isEn ? 'Interface Ports' : 'Cổng kết nối'}</th>
                  <th scope="col" className="px-6 py-4">{isEn ? 'Role Context' : 'Phạm vi triển khai'}</th>
                  <th scope="col" className="px-6 py-4 text-right">{isEn ? 'Action' : 'Hành động'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr className="hover:bg-slate-50/60 transition-colors duration-[var(--motion-fast)]">
                  <td className="px-6 py-4 font-mono font-bold text-brand-600">SRX 5800</td>
                  <td className="px-6 py-4">Up to 2 Tbps</td>
                  <td className="px-6 py-4">100GbE, 40GbE, 10GbE</td>
                  <td className="px-6 py-4">Data Center &amp; Telecom Core</td>
                  <td className="px-6 py-4 text-right">
                    <Link
                      href={`/${params.locale}/contact#contact-form`}
                      variant="inline"
                      className="text-xs font-bold text-brand-600 hover:text-brand-700 inline-flex items-center gap-1 group/row"
                    >
                      <span>{isEn ? 'Request Quote' : 'Yêu cầu báo giá'}</span>
                      <span className="transition-transform duration-[var(--motion-base)] group-hover/row:translate-x-0.5">→</span>
                    </Link>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition-colors duration-[var(--motion-fast)]">
                  <td className="px-6 py-4 font-mono font-bold text-brand-600">SRX 4600</td>
                  <td className="px-6 py-4">Up to 400 Gbps</td>
                  <td className="px-6 py-4">100GbE, 40GbE, 10GbE, 1U Size</td>
                  <td className="px-6 py-4">Enterprise Headquarter &amp; Private Cloud</td>
                  <td className="px-6 py-4 text-right">
                    <Link
                      href={`/${params.locale}/contact#contact-form`}
                      variant="inline"
                      className="text-xs font-bold text-brand-600 hover:text-brand-700 inline-flex items-center gap-1 group/row"
                    >
                      <span>{isEn ? 'Request Quote' : 'Yêu cầu báo giá'}</span>
                      <span className="transition-transform duration-[var(--motion-base)] group-hover/row:translate-x-0.5">→</span>
                    </Link>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition-colors duration-[var(--motion-fast)]">
                  <td className="px-6 py-4 font-mono font-bold text-brand-600">SRX 1500</td>
                  <td className="px-6 py-4">Up to 9 Gbps</td>
                  <td className="px-6 py-4">10GbE SFP+, 1GbE RJ45</td>
                  <td className="px-6 py-4">Enterprise Edge &amp; Medium Branch</td>
                  <td className="px-6 py-4 text-right">
                    <Link
                      href={`/${params.locale}/contact#contact-form`}
                      variant="inline"
                      className="text-xs font-bold text-brand-600 hover:text-brand-700 inline-flex items-center gap-1 group/row"
                    >
                      <span>{isEn ? 'Request Quote' : 'Yêu cầu báo giá'}</span>
                      <span className="transition-transform duration-[var(--motion-base)] group-hover/row:translate-x-0.5">→</span>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Container>
      </Section>
    </div>
  );
}
