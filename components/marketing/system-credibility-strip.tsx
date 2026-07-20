import React from 'react';
import Container from '../ui/container';

interface SystemCredibilityStripProps {
  locale: string;
  stats: Array<{
    value: string;
    label: string;
    sub?: string;
  }>;
}

export default function SystemCredibilityStrip({ locale, stats }: SystemCredibilityStripProps) {
  const isEn = locale === 'en';

  return (
    <div
      className="bg-[#151112] border-b border-white/[0.09] py-8 text-[#F6F1F2]"
      aria-label={isEn ? 'System Credibility & Metrics' : 'Thông số năng lực hệ thống'}
    >
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 items-center">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className="relative flex flex-col group p-4 rounded-[var(--radius-md)] bg-[#1B1618]/60 border border-white/[0.06] hover:border-white/15 transition-all duration-300"
            >
              {/* Corner coordinate mark */}
              <span className="absolute top-2 right-2 font-mono text-[8px] text-[#81777A] group-hover:text-[#D66A7E] transition-colors">
                +{`0${idx + 1}`}
              </span>

              {/* Dominant Stat Value */}
              <span className="text-3xl sm:text-4xl font-extrabold text-[#F6F1F2] tracking-tight leading-none mb-2 tabular-nums">
                {stat.value}
              </span>

              {/* Stat Title */}
              <span className="text-xs font-semibold text-[#F6F1F2] leading-snug mb-1">
                {stat.label}
              </span>

              {/* Supporting Subtext */}
              {stat.sub && (
                <span className="text-[10px] font-mono text-[#81777A] leading-tight">
                  {stat.sub}
                </span>
              )}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
