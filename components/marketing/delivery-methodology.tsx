import React from 'react';
import Container from '../ui/container';
import Typography from '../ui/typography';

interface ProcessStep {
  num: string;
  title: string;
  desc: string;
}

interface DeliveryMethodologyProps {
  locale: string;
  head: {
    eyebrow: string;
    title: string;
    description: string;
  };
  steps: ProcessStep[];
}

export default function DeliveryMethodology({ locale, head, steps }: DeliveryMethodologyProps) {
  const isEn = locale === 'en';

  return (
    <section className="py-20 md:py-24 border-b border-white/[0.09] bg-[#100D0E] relative overflow-hidden bg-editorial-grid">
      {/* Muted Burgundy Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-burgundy-glow pointer-events-none opacity-40" aria-hidden="true" />

      <Container className="relative z-10">
        <div className="max-w-2xl mb-16">
          <span className="eyebrow mb-4 block text-[#D66A7E]">
            {head.eyebrow}
          </span>
          <Typography variant="h2" className="text-[#F6F1F2] leading-tight mb-3 font-bold">
            {head.title}
          </Typography>
          <Typography variant="body-large" className="text-[#B6ACAF]">
            {head.description}
          </Typography>
        </div>

        {/* 5-Stage System Horizontal Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((step, idx) => (
            <div
              key={step.num}
              className="group relative bg-[#151112] hover:bg-[#1B1618] border border-white/10 hover:border-white/25 rounded-[var(--radius-lg)] p-5 flex flex-col justify-between transition-all duration-300 shadow-md"
            >
              {/* Top connector line for desktop */}
              {idx < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-7 left-1/2 w-full h-[1px] bg-white/10 z-0 pointer-events-none"
                  aria-hidden="true"
                />
              )}

              <div className="relative z-10">
                {/* Step index chip */}
                <span className="font-mono text-xs font-bold text-[#D66A7E] bg-[#211B1D] px-2.5 py-1 rounded-[var(--radius-xs)] border border-white/10 inline-block mb-4">
                  {step.num}
                </span>

                {/* Step Title */}
                <h4 className="text-sm font-bold text-[#F6F1F2] mb-2 group-hover:text-white transition-colors leading-snug">
                  {step.title}
                </h4>

                {/* Step Description */}
                <p className="text-xs text-[#B6ACAF] leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Bottom orbital node indicator */}
              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-[9px] font-mono text-[#81777A] uppercase">
                  {isEn ? `STAGE 0${idx + 1}` : `GIAI ĐOẠN 0${idx + 1}`}
                </span>
                <span className="w-2 h-2 rounded-full bg-[#8F263D] group-hover:bg-[#D66A7E] group-hover:scale-125 transition-all" />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
