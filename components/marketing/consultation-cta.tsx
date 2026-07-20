import React from 'react';
import Container from '../ui/container';
import Typography from '../ui/typography';
import Button from '../ui/button';

interface ConsultationCTAProps {
  locale: string;
  brand: {
    email: string;
    phone: string;
    address: string;
  };
}

export default function ConsultationCTA({ locale, brand }: ConsultationCTAProps) {
  const isEn = locale === 'en';

  return (
    <section className="relative overflow-hidden bg-[#211B1D] text-[#F6F1F2] border-t border-white/15 py-20 md:py-24">
      {/* Dark burgundy gradient accent */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#8F263D]/30 via-transparent to-transparent pointer-events-none"
        aria-hidden="true"
      />
      {/* Subtle grid on dark surface */}
      <div
        className="absolute inset-0 bg-dark-grid opacity-30 pointer-events-none"
        aria-hidden="true"
      />

      <Container className="relative z-10 text-center max-w-3xl mx-auto">
        <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#F6F1F2] bg-[#8F263D]/40 border border-[#8F263D]/60 px-3.5 py-1.5 rounded-[var(--radius-xs)] mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D66A7E] animate-pulse" aria-hidden="true" />
          {isEn ? 'START THE CONVERSATION' : 'BẮT ĐẦU HỢP TÁC'}
        </span>

        <Typography
          variant="h2"
          as="h2"
          className="text-[#F6F1F2] mb-4 leading-tight font-bold"
        >
          {isEn
            ? 'Your enterprise problem does not need another isolated tool.'
            : 'Bài toán của bạn không cần thêm một công cụ rời rạc.'}
        </Typography>

        <Typography variant="body-large" className="text-[#B6ACAF] mb-8 max-w-xl mx-auto">
          {isEn
            ? 'Let’s architect a unified technology system engineered to operate, scale, and generate long-term value.'
            : 'Hãy cùng thiết kế một hệ thống công nghệ có thể vận hành, mở rộng và tạo ra giá trị lâu dài.'}
        </Typography>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <Button
            variant="primary"
            size="lg"
            href={`/${locale}/contact#contact-form`}
            className="bg-[#8F263D] hover:bg-[#A52D48] border-white/20 shadow-xl"
            rightIcon={
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            }
          >
            {isEn ? 'Discuss a Project' : 'Trao đổi dự án'}
          </Button>

          <span className="text-xs font-mono text-[#81777A]">
            {isEn ? 'Initial consultation duration: ~30 minutes' : 'Buổi trao đổi đầu tiên kéo dài khoảng 30 phút.'}
          </span>
        </div>

        {/* Direct Contact Methods */}
        <div className="pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[#B6ACAF]">
          <div>
            <span className="block font-mono text-[10px] text-[#81777A] uppercase mb-1">EMAIL</span>
            <a href={`mailto:${brand.email}`} className="text-[#F6F1F2] hover:text-[#D66A7E] transition-colors font-semibold">
              {brand.email}
            </a>
          </div>
          <div>
            <span className="block font-mono text-[10px] text-[#81777A] uppercase mb-1">HOTLINE</span>
            <a href={`tel:${brand.phone}`} className="text-[#F6F1F2] hover:text-[#D66A7E] transition-colors font-semibold">
              {brand.phone}
            </a>
          </div>
          <div>
            <span className="block font-mono text-[10px] text-[#81777A] uppercase mb-1">HEADQUARTERS</span>
            <span className="text-[#F6F1F2] font-semibold">Hà Nội, Việt Nam</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
