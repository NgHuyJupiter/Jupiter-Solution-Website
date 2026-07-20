import React from 'react';
import Container from '../ui/container';
import Typography from '../ui/typography';
import Link from '../ui/link';

interface DomainItem {
  id: string;
  code: string;
  title: string;
  outcome: string;
  scope: string[];
  techs: string[];
  href: string;
}

interface SolutionDomainsProps {
  locale: string;
}

export default function SolutionDomains({ locale }: SolutionDomainsProps) {
  const isEn = locale === 'en';

  const domains: DomainItem[] = isEn
    ? [
        {
          id: 'software',
          code: 'DOM.01',
          title: 'Software Engineering',
          outcome: 'Custom web portals, internal core business platforms, and microservices.',
          scope: ['Web & Mobile Platforms', 'Core Business Systems', 'API & Microservices'],
          techs: ['Next.js', 'Node.js', 'Python', 'PostgreSQL'],
          href: `/${locale}/services#tech-solutions`,
        },
        {
          id: 'ai',
          code: 'DOM.02',
          title: 'AI & Automation',
          outcome: 'Enterprise RAG pipelines and autonomous operational AI agents on private data.',
          scope: ['Enterprise RAG Systems', 'Autonomous AI Agents', 'Model Fine-Tuning'],
          techs: ['LangChain', 'LlamaIndex', 'Vector DB', 'PyTorch'],
          href: `/${locale}/services#applied-ai`,
        },
        {
          id: 'data',
          code: 'DOM.03',
          title: 'Data Platforms',
          outcome: 'Centralized streaming data lakes for real-time executive analytics.',
          scope: ['ETL/ELT Pipelines', 'Data Warehousing', 'Real-time KPI Dashboards'],
          techs: ['Apache Spark', 'Snowflake', 'Postgres', 'Power BI'],
          href: `/${locale}/services#digital-transformation`,
        },
        {
          id: 'cloud',
          code: 'DOM.04',
          title: 'Cloud & DevOps',
          outcome: 'Hybrid cloud deployment, Terraform IaC, and automated CI/CD pipelines.',
          scope: ['Hybrid & Multi-Cloud', 'DevOps CI/CD Automation', 'Cloud Spending Tuning'],
          techs: ['AWS', 'GCP', 'Kubernetes', 'Terraform'],
          href: `/${locale}/services#cloud-infrastructure`,
        },
        {
          id: 'infra',
          code: 'DOM.05',
          title: 'Infrastructure & Integration',
          outcome: 'Core network routing, HPE servers, and VMware HCI virtualization.',
          scope: ['Juniper Core Routing', 'HPE All-Flash Datacenter', 'VMware vSphere & vSAN'],
          techs: ['Juniper SRX', 'HPE ProLiant', 'VMware HCI', 'SD-WAN'],
          href: `/${locale}/products#juniper-networking`,
        },
        {
          id: 'sec',
          code: 'DOM.06',
          title: 'Cybersecurity & SOC',
          outcome: '24/7 SIEM monitoring, BeyondTrust PAM access control, and Incident Response.',
          scope: ['Splunk SIEM 24/7 NOC/SOC', 'BeyondTrust Privileged Access', 'ForeScout IoT/OT Security'],
          techs: ['Splunk SOAR', 'BeyondTrust', 'ForeScout', 'NGFW'],
          href: `/${locale}/services#cybersecurity-soc`,
        },
      ]
    : [
        {
          id: 'software',
          code: 'DOM.01',
          title: 'Phát triển Phần mềm Doanh nghiệp',
          outcome: 'Xây dựng web portal, phần mềm lõi nghiệp vụ và kiến trúc Microservices.',
          scope: ['Web & Mobile Platform', 'Hệ thống Core Business', 'Hệ thống API & Microservices'],
          techs: ['Next.js', 'Node.js', 'Python', 'PostgreSQL'],
          href: `/${locale}/services#tech-solutions`,
        },
        {
          id: 'ai',
          code: 'DOM.02',
          title: 'AI & Tự động hóa Vận hành',
          outcome: 'Triển khai AI RAG riêng biệt và tác tử AI tự động trên tập dữ liệu bảo mật.',
          scope: ['Enterprise RAG Systems', 'Tác tử AI (AI Agents)', 'Tinh chỉnh mô hình LLM riêng'],
          techs: ['LangChain', 'LlamaIndex', 'Vector DB', 'PyTorch'],
          href: `/${locale}/services#applied-ai`,
        },
        {
          id: 'data',
          code: 'DOM.03',
          title: 'Nền tảng Dữ liệu Tập trung',
          outcome: 'Xây dựng kho dữ liệu thời gian thực phục vụ báo cáo trực quan cho ban lãnh đạo.',
          scope: ['Đường ống dữ liệu ETL/ELT', 'Kho dữ liệu Data Warehouse', 'Dashboard chỉ số KPI'],
          techs: ['Apache Spark', 'Snowflake', 'Postgres', 'Power BI'],
          href: `/${locale}/services#digital-transformation`,
        },
        {
          id: 'cloud',
          code: 'DOM.04',
          title: 'Cloud & DevOps SRE',
          outcome: 'Đưa nghiệp vụ lên nền tảng đám mây an toàn, tự động hóa đường ống CI/CD.',
          scope: ['Kiến trúc Hybrid Cloud', 'Cấu hình hạ tầng Terraform IaC', 'CI/CD & DevOps tự động'],
          techs: ['AWS', 'GCP', 'Kubernetes', 'Terraform'],
          href: `/${locale}/services#cloud-infrastructure`,
        },
        {
          id: 'infra',
          code: 'DOM.05',
          title: 'Hạ tầng Mạng & Trung tâm Dữ liệu',
          outcome: 'Hiện đại hóa mạng lõi Juniper Networks, máy chủ HPE và ảo hóa VMware HCI.',
          scope: ['Mạng lõi Juniper SRX', 'Máy chủ lưu trữ HPE All-Flash', 'Ảo hóa VMware vSAN HCI'],
          techs: ['Juniper SRX', 'HPE ProLiant', 'VMware HCI', 'SD-WAN'],
          href: `/${locale}/products#juniper-networking`,
        },
        {
          id: 'sec',
          code: 'DOM.06',
          title: 'An ninh mạng & Giám sát SOC 24/7',
          outcome: 'Giám sát sự kiện an toàn thông tin 24/7 với Splunk SIEM và kiểm soát BeyondTrust PAM.',
          scope: ['Giám sát Splunk SIEM SOC', 'Quản lý đặc quyền BeyondTrust', 'Giám sát IoT/OT ForeScout'],
          techs: ['Splunk SOAR', 'BeyondTrust', 'ForeScout', 'NGFW'],
          href: `/${locale}/services#cybersecurity-soc`,
        },
      ];

  return (
    <section className="py-20 md:py-24 border-b border-white/[0.09] bg-[#151112] relative overflow-hidden bg-tech-grid">
      <Container>
        <div className="mb-14">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#D46A79] bg-[#211C1E] px-3 py-1 rounded-[var(--radius-xs)] border border-white/10 inline-block mb-3">
            {isEn ? 'CORE SOLUTION DOMAINS' : 'LĨNH VỰC GIẢI PHÁP CỐT LÕI'}
          </span>
          <Typography variant="h2" className="text-3xl sm:text-4xl font-extrabold text-[#F7F2F3] mb-3">
            {isEn ? '6 Enterprise Capability Domains' : '6 Miền năng lực giải pháp chính'}
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains.map((d) => (
            <div
              key={d.id}
              className="group bg-[#1C181A] border border-white/10 hover:border-[#8E2938]/60 rounded-[var(--radius-lg)] p-6 flex flex-col justify-between transition-all duration-200 shadow-md relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-[#D46A79] bg-[#171315] px-2.5 py-1 rounded-[var(--radius-xs)] border border-white/10">
                    {d.code}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8E2938] group-hover:bg-[#D46A79] transition-colors" />
                </div>

                <h3 className="text-lg font-bold text-[#F7F2F3] mb-2 group-hover:text-white transition-colors leading-snug">
                  {d.title}
                </h3>

                <p className="text-xs text-[#C8BEC1] leading-relaxed mb-4">
                  {d.outcome}
                </p>

                <div className="space-y-1.5 mb-6">
                  {d.scope.map((s) => (
                    <div key={s} className="flex items-center gap-2 text-[11px] font-medium text-[#C8BEC1]">
                      <span className="w-1 h-1 rounded-full bg-[#D46A79]" />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {d.techs.map((t) => (
                    <span key={t} className="text-[10px] font-mono text-[#968B8F] bg-[#171315] px-2 py-0.5 rounded border border-white/[0.06]">
                      {t}
                    </span>
                  ))}
                </div>

                <Link
                  href={d.href}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#D46A79] group-hover:text-white transition-colors pt-2 border-t border-white/[0.06] w-full justify-between"
                >
                  <span>{isEn ? 'View Architecture' : 'Xem chi tiết'}</span>
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
