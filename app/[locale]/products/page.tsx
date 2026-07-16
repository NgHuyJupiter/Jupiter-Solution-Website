import { siteContentVi } from '@/content/vi/site';
import { siteContentEn } from '@/content/en/site';
import Container from '@/components/ui/container';
import Section from '@/components/ui/section';
import Typography from '@/components/ui/typography';
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

  /* ── Comparison table rows ── */
  const tableRows = [
    {
      model: 'SRX 5800',
      throughput: isEn ? 'Up to 2 Tbps' : 'Lên đến 2 Tbps',
      ports: '100GbE · 40GbE · 10GbE',
      role: isEn ? 'Data Center & Telecom Core' : 'Trung tâm dữ liệu & Viễn thông lõi',
    },
    {
      model: 'SRX 4600',
      throughput: isEn ? 'Up to 400 Gbps' : 'Lên đến 400 Gbps',
      ports: '100GbE · 40GbE · 10GbE · 1U',
      role: isEn ? 'Enterprise HQ & Private Cloud' : 'Trụ sở doanh nghiệp & Private Cloud',
    },
    {
      model: 'SRX 1500',
      throughput: isEn ? 'Up to 9 Gbps' : 'Lên đến 9 Gbps',
      ports: '10GbE SFP+ · 1GbE RJ45',
      role: isEn ? 'Enterprise Edge & Medium Branch' : 'Nhánh doanh nghiệp & Chi nhánh vừa',
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
              {isEn ? 'Hardware & Software Platforms' : 'Nền tảng & Thiết bị'}
            </span>
            <Typography variant="h1" className="mb-4 text-text-primary leading-tight">
              {isEn ? 'Authorized System Integrations' : 'Thiết bị & Nền tảng chúng tôi triển khai'}
            </Typography>
            <Typography variant="body-large" className="text-text-secondary max-w-2xl">
              {content.products.intro}
            </Typography>
          </div>
        </Container>
      </section>

      {/* ── Product Cards ─────────────────────────────────────── */}
      <Section variant="default" className="border-b border-[var(--color-border-default)]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
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

      {/* ── Comparison Table ──────────────────────────────────── */}
      <Section variant="subtle">
        <Container>
          <div className="mb-10 opacity-0 animate-fade-up">
            <span className="eyebrow mb-4 block">
              {isEn ? 'Parameter comparison' : 'Đối chiếu thông số điển hình'}
            </span>
            <Typography variant="h2" className="mb-3 text-text-primary leading-tight max-w-xl">
              {isEn ? 'Core Network Security Gateways' : 'Các phân khúc tường lửa mạng lõi tiêu biểu'}
            </Typography>
          </div>

          {/* Scrollable table with Precision Authority design */}
          <div className="overflow-x-auto border border-[var(--color-border-default)] rounded-[var(--radius-lg)] shadow-[var(--shadow-xs)] opacity-0 animate-scale-in delay-150">
            <table className="min-w-full divide-y divide-[var(--color-border-default)] text-sm text-left bg-white">
              <thead>
                <tr className="bg-[var(--color-surface-alt)]">
                  <th scope="col" className="px-6 py-3.5 text-[10px] font-bold uppercase tracking-[0.1em] text-text-muted">
                    {isEn ? 'Model' : 'Thiết bị'}
                  </th>
                  <th scope="col" className="px-6 py-3.5 text-[10px] font-bold uppercase tracking-[0.1em] text-text-muted">
                    {isEn ? 'Throughput' : 'Băng thông'}
                  </th>
                  <th scope="col" className="px-6 py-3.5 text-[10px] font-bold uppercase tracking-[0.1em] text-text-muted">
                    {isEn ? 'Interface Ports' : 'Cổng kết nối'}
                  </th>
                  <th scope="col" className="px-6 py-3.5 text-[10px] font-bold uppercase tracking-[0.1em] text-text-muted">
                    {isEn ? 'Deployment Context' : 'Phạm vi triển khai'}
                  </th>
                  <th scope="col" className="px-6 py-3.5 text-right text-[10px] font-bold uppercase tracking-[0.1em] text-text-muted">
                    {isEn ? 'Action' : 'Hành động'}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-border-subtle)]">
                {tableRows.map((row, i) => (
                  <tr
                    key={row.model}
                    className="group hover:bg-brand-50/30 transition-colors duration-[var(--motion-fast)]"
                  >
                    <td className="px-6 py-4">
                      <span className="font-mono font-bold text-brand-600 group-hover:text-brand-700 transition-colors duration-[var(--motion-fast)]">
                        {row.model}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-text-secondary tabular-nums">{row.throughput}</td>
                    <td className="px-6 py-4 text-text-muted font-mono text-xs">{row.ports}</td>
                    <td className="px-6 py-4 text-text-secondary">{row.role}</td>
                    <td className="px-6 py-4 text-right">
                      <Link
                        href={`/${params.locale}/contact#contact-form`}
                        variant="inline"
                        className="text-xs font-bold text-brand-600 hover:text-brand-700 inline-flex items-center gap-1 group/row transition-colors duration-[var(--motion-fast)]"
                      >
                        <span>{isEn ? 'Request quote' : 'Yêu cầu báo giá'}</span>
                        <span className="transition-transform duration-[var(--motion-base)] group-hover/row:translate-x-0.5" aria-hidden="true">→</span>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </Section>
    </div>
  );
}
