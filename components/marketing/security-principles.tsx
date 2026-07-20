import React from 'react';
import Container from '../ui/container';
import Typography from '../ui/typography';

interface PrincipleItem {
  num: string;
  title: string;
  desc: string;
}

interface SecurityPrinciplesProps {
  locale: string;
  head: {
    eyebrow: string;
    title: string;
    description: string;
  };
  principles: PrincipleItem[];
}

export default function SecurityPrinciples({ locale, head, principles }: SecurityPrinciplesProps) {
  const isEn = locale === 'en';

  return (
    <section className="py-20 md:py-24 border-b border-white/[0.09] bg-[#151112] relative overflow-hidden bg-tech-dots">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-[400px] h-[400px] bg-burgundy-glow pointer-events-none opacity-45" aria-hidden="true" />

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

        {/* 6 Security Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {principles.map((item) => (
            <div
              key={item.num}
              className="group bg-[#1B1618] border border-white/10 hover:border-[#8F263D]/50 rounded-[var(--radius-lg)] p-6 transition-all duration-300 shadow-md"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold text-[#D66A7E] bg-[#151112] px-2.5 py-1 rounded-[var(--radius-xs)] border border-white/10">
                  {item.num}
                </span>
                <span className="text-[10px] font-mono text-[#81777A]">SEC.SECURE</span>
              </div>

              <h3 className="text-base font-bold text-[#F6F1F2] mb-2 leading-snug group-hover:text-white transition-colors">
                {item.title}
              </h3>

              <p className="text-xs text-[#B6ACAF] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
