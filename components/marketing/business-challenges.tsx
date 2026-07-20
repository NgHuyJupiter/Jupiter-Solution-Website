import React from 'react';
import Container from '../ui/container';
import Typography from '../ui/typography';

interface ChallengeItem {
  id: string;
  code: string;
  title: string;
  desc: string;
}

interface BusinessChallengesProps {
  locale: string;
  head: {
    eyebrow: string;
    title: string;
    description: string;
    transition: string;
  };
  challenges: ChallengeItem[];
}

export default function BusinessChallenges({ locale, head, challenges }: BusinessChallengesProps) {
  const isEn = locale === 'en';

  return (
    <section className="py-20 md:py-24 border-b border-white/[0.09] bg-[#100D0E] relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-burgundy-glow pointer-events-none opacity-50" aria-hidden="true" />
      
      <Container className="relative z-10">
        {/* Asymmetric Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-7">
            <span className="eyebrow mb-4 block text-[#D66A7E]">
              {head.eyebrow}
            </span>
            <Typography variant="h2" className="text-[#F6F1F2] leading-tight mb-4 font-bold">
              {head.title}
            </Typography>
            <Typography variant="body-large" className="text-[#B6ACAF] max-w-xl">
              {head.description}
            </Typography>
          </div>

          {/* Diagnostic status badge on right */}
          <div className="lg:col-span-5 flex lg:justify-end">
            <div className="bg-[#1B1618] border border-white/10 rounded-[var(--radius-lg)] p-5 text-xs text-[#B6ACAF] max-w-sm">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#D66A7E] block mb-2">
                {isEn ? 'DIAGNOSTIC OBSERVED IMPACT' : 'TÁC ĐỘNG VẬN HÀNH RỦI RỎ'}
              </span>
              <p className="leading-relaxed text-[11px]">
                {isEn
                  ? 'Isolated software tools increase integration debt, double operational budgets, and create security blind spots.'
                  : 'Công cụ rời rạc làm tăng nợ kỹ thuật (Technical Debt), nhân đôi chi phí vận hành và tạo lỗ hổng bảo mật.'}
              </p>
            </div>
          </div>
        </div>

        {/* 6 Diagnostic Operational Challenge Signals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {challenges.map((c) => (
            <div
              key={c.id}
              className="group bg-[#151112] border border-white/[0.08] hover:border-[#8F263D]/40 rounded-[var(--radius-lg)] p-6 transition-all duration-300 hover:shadow-lg relative overflow-hidden"
            >
              {/* Top signal bar */}
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold text-[#D66A7E] bg-[#211B1D] px-2.5 py-1 rounded-[var(--radius-xs)] border border-white/10">
                  {c.code}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#8F263D] group-hover:bg-[#D66A7E] transition-colors" />
              </div>

              <h3 className="text-base font-semibold text-[#F6F1F2] mb-2 leading-snug group-hover:text-white transition-colors">
                {c.title}
              </h3>
              
              <p className="text-xs text-[#B6ACAF] leading-relaxed">
                {c.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Narrative Transition Banner */}
        <div className="bg-[#211B1D] border border-white/15 rounded-[var(--radius-lg)] p-6 md:p-8 text-center max-w-3xl mx-auto relative overflow-hidden">
          <div className="absolute inset-0 bg-burgundy-glow opacity-40 pointer-events-none" aria-hidden="true" />
          <p className="text-base md:text-lg font-semibold text-[#F6F6F6] relative z-10 leading-snug">
            {head.transition}
          </p>
        </div>
      </Container>
    </section>
  );
}
