'use client';

import React, { useState } from 'react';
import Container from '../ui/container';
import Typography from '../ui/typography';
import Button from '../ui/button';

interface SolutionItem {
  id: string;
  code: string;
  challenge: string;
  outcome: string;
  solution: string;
  scope: string[];
  ctaText: string;
  ctaHref: string;
}

interface SolutionByChallengeProps {
  locale: string;
}

export default function SolutionByChallenge({ locale }: SolutionByChallengeProps) {
  const isEn = locale === 'en';

  const items: SolutionItem[] = isEn
    ? [
        {
          id: 'modernize',
          code: 'SOL.01',
          challenge: 'Monolithic legacy software slows down product launch velocity.',
          outcome: 'Reduce time-to-market by 40% with microservices architecture.',
          solution: 'Legacy System Modernization',
          scope: ['Monolith to Microservices Migration', 'API Gateway Engineering', 'Automated Integration Testing'],
          ctaText: 'Explore Modernization',
          ctaHref: `/${locale}/services#tech-solutions`,
        },
        {
          id: 'automation',
          code: 'SOL.02',
          challenge: 'Manual workflows create operational errors and delays.',
          outcome: 'Eliminate 80% of repetitive data entry tasks through intelligent pipelines.',
          solution: 'Workflow & Process Automation',
          scope: ['RPA & Cross-departmental Pipelines', 'Real-time Event Triggers', 'Custom ERP/CRM Workflows'],
          ctaText: 'Explore Automation',
          ctaHref: `/${locale}/services#digital-transformation`,
        },
        {
          id: 'cloud',
          code: 'SOL.03',
          challenge: 'Unpredictable cloud hosting costs and lack of infrastructure observability.',
          outcome: 'Optimize cloud spending by 35% with 99.99% operational SLA.',
          solution: 'Cloud Infrastructure & DevOps',
          scope: ['Multi-Cloud & Hybrid Architecture', 'Terraform Infrastructure as Code (IaC)', 'CI/CD Automated Pipelines'],
          ctaText: 'Explore Cloud',
          ctaHref: `/${locale}/services#cloud-infrastructure`,
        },
        {
          id: 'data',
          code: 'SOL.04',
          challenge: 'Enterprise data is fragmented across siloed databases without single source of truth.',
          outcome: 'Unify real-time analytics for C-level executive decision support.',
          solution: 'Enterprise Data Lake & Analytics',
          scope: ['ETL/ELT Streaming Pipelines', 'Centralized Data Warehouse', 'Real-time KPI Dashboards'],
          ctaText: 'Explore Data Systems',
          ctaHref: `/${locale}/services#digital-transformation`,
        },
        {
          id: 'ai',
          code: 'SOL.05',
          challenge: 'Desire to apply AI safely on private data without risking IP leaks.',
          outcome: 'Deploy private RAG models with strict enterprise security boundaries.',
          solution: 'Applied AI & Knowledge Retrieval',
          scope: ['Enterprise RAG Pipelines', 'Autonomous Operational AI Agents', 'Fine-tuned Private LLMs'],
          ctaText: 'Explore Applied AI',
          ctaHref: `/${locale}/services#applied-ai`,
        },
        {
          id: 'security',
          code: 'SOL.06',
          challenge: 'Lack of 24/7 security monitoring exposing core network to zero-day threats.',
          outcome: 'Detect anomalies in real time with continuous SIEM/SOC response.',
          solution: 'Zero Trust Cybersecurity & SOC',
          scope: ['Splunk SIEM 24/7 Threat Detection', 'BeyondTrust Privileged Access (PAM)', 'Juniper NGFW Firewalls'],
          ctaText: 'Explore Security',
          ctaHref: `/${locale}/services#cybersecurity-soc`,
        },
      ]
    : [
        {
          id: 'modernize',
          code: 'SOL.01',
          challenge: 'Phần mềm cũ cồng kềnh cản trở tốc độ đưa sản phẩm mới ra thị trường.',
          outcome: 'Rút ngắn 40% thời gian triển khai với kiến trúc Microservices hiện đại.',
          solution: 'Hiện đại hóa hệ thống Legacy',
          scope: ['Chuyển đổi Monolith sang Microservices', 'Xây dựng API Gateway chuẩn hóa', 'Tự động hóa kiểm thử tích hợp'],
          ctaText: 'Xem giải pháp',
          ctaHref: `/${locale}/services#tech-solutions`,
        },
        {
          id: 'automation',
          code: 'SOL.02',
          challenge: 'Quy trình nghiệp vụ phụ thuộc nhiều vào thao tác con người thủ công.',
          outcome: 'Giảm 80% thời gian xử lý thủ công nhờ đường ống dữ liệu tự động.',
          solution: 'Số hóa & Tự động hóa Quy trình',
          scope: ['Tự động hóa liên phòng ban (RPA)', 'Kịch bản xử lý sự kiện thời gian thực', 'Số hóa quy trình ERP/CRM'],
          ctaText: 'Xem giải pháp',
          ctaHref: `/${locale}/services#digital-transformation`,
        },
        {
          id: 'cloud',
          code: 'SOL.03',
          challenge: 'Chi phí đám mây gia tăng không kiểm soát và thiếu khả năng quan sát.',
          outcome: 'Tối ưu 35% chi phí hạ tầng Cloud với cam kết SLA 99.99% uptime.',
          solution: 'Kiến trúc Cloud & DevOps SRE',
          scope: ['Tư vấn Hybrid Cloud & Multi-Cloud', 'Hạ tầng mã hóa Terraform (IaC)', 'Đường ống CI/CD tự động'],
          ctaText: 'Xem giải pháp',
          ctaHref: `/${locale}/services#cloud-infrastructure`,
        },
        {
          id: 'data',
          code: 'SOL.04',
          challenge: 'Dữ liệu nằm phân mảnh trong nhiều cơ sở dữ liệu không kết nối.',
          outcome: 'Hợp nhất kho dữ liệu thời gian thực phục vụ báo cáo trực quan cho ban lãnh đạo.',
          solution: 'Nền tảng Dữ liệu Tập trung',
          scope: ['Đường ống xử lý dữ liệu ETL/ELT', 'Kho dữ liệu Data Warehouse', 'Dashboard chỉ số KPI thời gian thực'],
          ctaText: 'Xem giải pháp',
          ctaHref: `/${locale}/services#digital-transformation`,
        },
        {
          id: 'ai',
          code: 'SOL.05',
          challenge: 'Muốn ứng dụng AI nhưng lo ngại vấn đề bảo mật dữ liệu nội bộ.',
          outcome: 'Triển khai AI RAG riêng biệt trên tập dữ liệu doanh nghiệp an toàn tuyệt đối.',
          solution: 'AI Ứng dụng & Tra cứu Tri thức',
          scope: ['Xây dựng RAG trên dữ liệu nội bộ', 'Tác tử AI hỗ trợ vận hành tự động', 'Tinh chỉnh mô hình LLM riêng'],
          ctaText: 'Xem giải pháp',
          ctaHref: `/${locale}/services#applied-ai`,
        },
        {
          id: 'security',
          code: 'SOL.06',
          challenge: 'Thiếu nhân sự giám sát an ninh thông tin liên tục 24/7 trước mã độc.',
          outcome: 'Phát hiện và ngăn chặn hành vi bất thường thời gian thực với trung tâm SOC.',
          solution: 'An ninh mạng & Giám sát SOC 24/7',
          scope: ['Giám sát sự kiện Splunk SIEM 24/7', 'Kiểm soát đặc quyền BeyondTrust PAM', 'Tường lửa thế hệ mới Juniper SRX'],
          ctaText: 'Xem giải pháp',
          ctaHref: `/${locale}/services#cybersecurity-soc`,
        },
      ];

  const [activeId, setActiveId] = useState<string>(items[0].id);
  const activeItem = items.find((i) => i.id === activeId) || items[0];

  return (
    <section id="challenges" className="py-20 md:py-24 border-b border-white/[0.09] bg-[#100E0F] relative overflow-hidden">
      <Container>
        <div className="mb-14 text-left">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#D46A79] bg-[#211C1E] px-3 py-1 rounded-[var(--radius-xs)] border border-white/10 inline-block mb-3">
            {isEn ? 'SOLUTION MATRIX BY CHALLENGE' : 'MA TRẬN GIẢI PHÁP THEO BÀI TOÁN'}
          </span>
          <Typography variant="h2" className="text-3xl sm:text-4xl font-extrabold text-[#F7F2F3] mb-3">
            {isEn ? 'Enterprise Decision Guide' : 'Tìm giải pháp phù hợp với bài toán của bạn'}
          </Typography>
          <Typography variant="body-large" className="text-[#C8BEC1] max-w-xl">
            {isEn
              ? 'Select your current business bottleneck to see Jupiter’s tailored outcome, architecture scope, and implementation path.'
              : 'Chọn điểm nghẽn vận hành hiện tại để xem mục tiêu chuyển đổi, phạm vi kỹ thuật và lộ trình triển khai từ Sao Mộc.'}
          </Typography>
        </div>

        {/* Desktop Interactive Decision Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Challenge Selector Column */}
          <div className="lg:col-span-5 space-y-3">
            {items.map((item) => (
              <button
                type="button"
                key={item.id}
                onClick={() => setActiveId(item.id)}
                className={[
                  'w-full text-left p-4 rounded-[var(--radius-md)] border transition-all duration-200 flex items-start gap-3 cursor-pointer',
                  activeId === item.id
                    ? 'bg-[#1C181A] border-[#8E2938] text-white shadow-md'
                    : 'bg-[#171315] border-white/[0.08] text-[#C8BEC1] hover:border-white/20 hover:text-white',
                ].join(' ')}
              >
                <span className="font-mono text-xs font-bold text-[#D46A79] bg-[#211C1E] px-2 py-0.5 rounded shrink-0">
                  {item.code}
                </span>
                <div>
                  <h4 className="text-xs font-bold mb-1 leading-snug">{item.solution}</h4>
                  <p className="text-[11px] opacity-80 line-clamp-1">{item.challenge}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Right Active Solution Detail Panel */}
          <div className="lg:col-span-7 bg-[#1C181A] border border-white/15 rounded-[var(--radius-lg)] p-6 md:p-8 relative overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
              <span className="font-mono text-xs font-bold text-[#D46A79] uppercase">
                {activeItem.code} {'// TARGET OUTCOME'}
              </span>
              <span className="w-2 h-2 rounded-full bg-[#8E2938] animate-pulse" />
            </div>

            <div className="mb-6">
              <span className="text-[10px] font-mono text-[#968B8F] uppercase font-bold block mb-1">
                {isEn ? 'CUSTOMER CHALLENGE' : 'THÁCH THỨC DOANH NGHIỆP'}
              </span>
              <p className="text-sm font-semibold text-[#C8BEC1] leading-relaxed">
                {activeItem.challenge}
              </p>
            </div>

            <div className="bg-[#171315] border border-white/10 rounded-[var(--radius-md)] p-4 mb-6">
              <span className="text-[10px] font-mono font-bold uppercase text-[#D46A79] block mb-1">
                {isEn ? 'DESIRED BUSINESS OUTCOME' : 'KẾT QUẢ VẬN HÀNH KỲ VỌNG'}
              </span>
              <p className="text-base font-bold text-[#F7F2F3]">
                {activeItem.outcome}
              </p>
            </div>

            <div className="mb-8">
              <span className="text-[10px] font-mono text-[#968B8F] uppercase font-bold block mb-3">
                {isEn ? 'IMPLEMENTATION SCOPE' : 'PHẠM VI KỸ THUẬT THỰC HIỆN'}
              </span>
              <div className="space-y-2">
                {activeItem.scope.map((s) => (
                  <div key={s} className="flex items-center gap-2 text-xs font-semibold text-[#F7F2F3]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D46A79]" />
                    <span>{s}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button variant="primary" size="md" href={activeItem.ctaHref}>
              {activeItem.ctaText}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
