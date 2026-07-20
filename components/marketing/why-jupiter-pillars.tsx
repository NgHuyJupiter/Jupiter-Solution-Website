import React from 'react';
import Container from '../ui/container';
import Typography from '../ui/typography';

interface PillarItem {
  code: string;
  title: string;
  desc: string;
}

interface WhyJupiterPillarsProps {
  locale: string;
}

export default function WhyJupiterPillars({ locale }: WhyJupiterPillarsProps) {
  const isEn = locale === 'en';

  const pillars: PillarItem[] = isEn
    ? [
        {
          code: 'PIL.01',
          title: 'Scalable Architecture',
          desc: 'Systems are designed around expected workloads, integration constraints, and long-term maintainability.',
        },
        {
          code: 'PIL.02',
          title: 'Security by Design',
          desc: 'Zero Trust access controls, Least Privilege authorization, and end-to-end data encryption are embedded from day one.',
        },
        {
          code: 'PIL.03',
          title: 'Engineering Quality',
          desc: 'Built by certified solution architects (AWS, GCP, Juniper JNCIE, VMware) following strict code review guidelines.',
        },
        {
          code: 'PIL.04',
          title: 'End-to-End Delivery',
          desc: 'Single point of responsibility from initial architecture survey to 24/7 NOC/SOC operational support.',
        },
        {
          code: 'PIL.05',
          title: 'Operational Partnership',
          desc: 'Committed commercial SLAs, 30-day trial checkpoints, and continuous performance tuning.',
        },
        {
          code: 'PIL.06',
          title: 'Business-Aligned Solutions',
          desc: 'Technology choices are justified by measurable business metrics and operational velocity rather than hype.',
        },
      ]
    : [
        {
          code: 'PIL.01',
          title: 'Kiến trúc có khả năng mở rộng',
          desc: 'Hệ thống được thiết kế tối ưu dựa trên quy mô truy cập dự kiến, rào cản tích hợp và khả năng bảo trì dài hạn.',
        },
        {
          code: 'PIL.02',
          title: 'Bảo mật theo thiết kế (Security by Design)',
          desc: 'Tích hợp chính sách Zero Trust, mã hóa dữ liệu 100% và phân quyền tối thiểu (Least Privilege) ngay từ dòng code đầu tiên.',
        },
        {
          code: 'PIL.03',
          title: 'Năng lực kỹ thuật đã chứng minh',
          desc: 'Đội ngũ kỹ sư sở hữu chứng chỉ quốc tế (AWS, GCP, Juniper JNCIE, VMware, Splunk) trực tiếp khảo sát và triển khai.',
        },
        {
          code: 'PIL.04',
          title: 'Giao nhận đầu cuối (End-to-End)',
          desc: 'Chịu trách nhiệm toàn bộ vòng đời từ tư vấn giải pháp, lập trình phần mềm cho tới vận hành NOC/SOC 24/7.',
        },
        {
          code: 'PIL.05',
          title: 'Đồng hành vận hành lâu dài',
          desc: 'Cam kết SLA thương mại chặt chẽ, chính sách nghiệm thu theo mốc 30 ngày và tối ưu hóa hệ thống định kỳ.',
        },
        {
          code: 'PIL.06',
          title: 'Giải pháp gắn liền với hiệu quả kinh doanh',
          desc: 'Lựa chọn công nghệ dựa trên bài toán chi phí và hiệu suất vận hành thực tế thay vì theo đuổi trào lưu.',
        },
      ];

  return (
    <section className="py-20 md:py-24 border-b border-white/[0.09] bg-[#100E0F] relative overflow-hidden">
      <Container>
        <div className="mb-14">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#D46A79] bg-[#211C1E] px-3 py-1 rounded-[var(--radius-xs)] border border-white/10 inline-block mb-3">
            {isEn ? 'REASONS TO CHOOSE SAO MỘC' : 'TẠI SAO CHỌN SAO MỘC'}
          </span>
          <Typography variant="h2" className="text-3xl sm:text-4xl font-extrabold text-[#F7F2F3] mb-3">
            {isEn ? '6 Concrete Operational Pillars' : '6 Tôn chỉ kỹ thuật & Vận hành'}
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((p) => (
            <div
              key={p.code}
              className="bg-[#1C181A] border border-white/10 hover:border-white/20 rounded-[var(--radius-lg)] p-6 transition-all duration-200"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold text-[#D46A79] bg-[#171315] px-2.5 py-1 rounded-[var(--radius-xs)] border border-white/10">
                  {p.code}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#8E2938]" />
              </div>

              <h3 className="text-base font-bold text-[#F7F2F3] mb-2 leading-snug">
                {p.title}
              </h3>

              <p className="text-xs text-[#C8BEC1] leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
