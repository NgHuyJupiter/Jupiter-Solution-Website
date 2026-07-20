import React from 'react';
import Container from '../ui/container';
import Typography from '../ui/typography';
import Button from '../ui/button';

interface ServicePillar {
  id: string;
  code: string;
  title: string;
  description: string;
  capabilities: string[];
  outcome: string;
}

interface ServiceEcosystemProps {
  locale: string;
  head: {
    eyebrow: string;
    title: string;
    description: string;
  };
  pillars: ServicePillar[];
}

export default function ServiceEcosystem({ locale, head, pillars }: ServiceEcosystemProps) {
  const isEn = locale === 'en';

  return (
    <section className="py-20 md:py-24 border-b border-white/[0.09] bg-[#151112] relative overflow-hidden bg-tech-dots">
      {/* Radial Burgundy Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-burgundy-glow pointer-events-none opacity-60" aria-hidden="true" />
      
      <Container className="relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
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
          <div>
            <Button
              variant="secondary"
              size="md"
              href={`/${locale}/services`}
            >
              {isEn ? 'All Enterprise Services' : 'Tất cả dịch vụ'}
            </Button>
          </div>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              className="group bg-[#1B1618] border border-white/10 hover:border-[#8F263D]/60 rounded-[var(--radius-xl)] p-6 md:p-8 flex flex-col justify-between transition-all duration-300 shadow-lg relative overflow-hidden"
            >
              {/* Pillar top accent stripe */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8F263D] via-[#D66A7E] to-transparent" />

              <div>
                {/* Header code badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs font-bold tracking-widest text-[#D66A7E] bg-[#151112] px-3 py-1 rounded-[var(--radius-xs)] border border-white/10">
                    {pillar.code}
                  </span>
                  <span className="font-mono text-[10px] text-[#81777A] uppercase">
                    SYS.MOD // {pillar.id}
                  </span>
                </div>

                {/* Pillar Title */}
                <h3 className="text-xl font-bold text-[#F6F1F2] mb-3 leading-snug group-hover:text-white transition-colors">
                  {pillar.title}
                </h3>

                {/* Pillar Description */}
                <p className="text-xs text-[#B6ACAF] leading-relaxed mb-6">
                  {pillar.description}
                </p>

                {/* Core capabilities list */}
                <div className="mb-6 space-y-2">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#81777A] block mb-2">
                    {isEn ? 'CORE CAPABILITIES' : 'NĂNG LỰC CỐT LÕI'}
                  </span>
                  {pillar.capabilities.map((cap) => (
                    <div key={cap} className="flex items-center gap-2 text-xs font-semibold text-[#F6F1F2]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D66A7E]" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Business Outcome Panel */}
              <div className="bg-[#151112] border border-white/10 rounded-[var(--radius-md)] p-4 text-xs">
                <span className="block text-[10px] font-mono font-bold uppercase tracking-wider text-[#D66A7E] mb-1">
                  {isEn ? 'BUSINESS OUTCOME' : 'TÁC ĐỘNG NGHIỆP VỤ'}
                </span>
                <p className="text-[#B6ACAF] leading-relaxed font-medium">
                  {pillar.outcome}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
