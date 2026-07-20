import * as React from 'react';

interface CaseStudyCardProps {
  code: string;
  sector: string;
  title: string;
  challenge: string;
  solution: string;
  result: string;
  techs?: string[];
  isVerified?: boolean;
}

/**
 * CaseStudyCard — Editorial Layout
 *
 * Visually distinct from both ServiceCard and ProductCard:
 * - Full-width editorial strip with numbered code
 * - Challenge / Solution / Outcome in structured three-row format
 * - Outcome highlighted in brand-tinted panel
 * - No floating avatar, no decorative icon
 */
export default function CaseStudyCard({
  code,
  sector,
  title,
  challenge,
  solution,
  result,
  techs = [],
  isVerified = false,
}: CaseStudyCardProps) {
  return (
    <article className="group relative bg-[#1C181A] border border-white/10 hover:border-white/25 rounded-[var(--radius-lg)] overflow-hidden hover-lift flex flex-col">
      
      {/* Editorial header bar */}
      <div className="flex items-stretch border-b border-white/[0.08]">
        {/* Left: case code strip */}
        <div className="bg-[#171315] group-hover:bg-[#8E2938]/20 border-r border-white/[0.08] px-4 py-3 flex items-center justify-center shrink-0 transition-colors duration-[var(--motion-base)]">
          <span className="font-mono text-xs font-bold text-[#D46A79] group-hover:text-white uppercase tracking-widest transition-colors duration-[var(--motion-base)]">
            {code}
          </span>
        </div>
        {/* Right: sector label */}
        <div className="flex-1 px-4 py-3 flex items-center justify-between bg-[#1C181A]">
          <span className="text-xs font-semibold text-text-secondary bg-[#241E21] border border-white/10 px-2.5 py-0.5 rounded-[var(--radius-xs)]">
            {sector}
          </span>
          {isVerified && (
            <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2 py-0.5 rounded-[var(--radius-xs)]">
              <svg className="w-2.5 h-2.5" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M2 6l3 3 5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Verified
            </span>
          )}
        </div>
      </div>

      {/* Main content */}
      <div className="p-5 sm:p-6 flex flex-col flex-1">
        
        {/* Project title */}
        <h3 className="text-clamp-h3 font-semibold text-text-primary group-hover:text-white transition-colors duration-[var(--motion-base)] mb-5 leading-snug tracking-tight">
          {title}
        </h3>

        {/* Structured content rows */}
        <div className="space-y-4 mb-5 flex-1">
          <div className="grid grid-cols-[80px_1fr] gap-x-4 items-start text-xs">
            <span className="text-[10px] font-bold uppercase tracking-[0.08em] text-text-muted pt-0.5">
              Challenge
            </span>
            <p className="text-text-secondary leading-relaxed">{challenge}</p>
          </div>

          <div className="grid grid-cols-[80px_1fr] gap-x-4 items-start text-xs">
            <span className="text-[10px] font-bold uppercase tracking-[0.08em] text-text-muted pt-0.5">
              Solution
            </span>
            <p className="text-text-secondary leading-relaxed">{solution}</p>
          </div>

          {/* Outcome — highlighted panel */}
          <div className="bg-[#30171D] border border-[#8E2938]/40 rounded-[var(--radius-md)] p-3.5 group-hover:border-[#8E2938]/60 transition-colors duration-[var(--motion-base)]">
            <div className="grid grid-cols-[80px_1fr] gap-x-4 items-start text-xs">
              <span className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#D46A79] pt-0.5">
                Outcome
              </span>
              <p className="text-[#F7F2F3] font-medium leading-relaxed">{result}</p>
            </div>
          </div>
        </div>

        {/* Technology tags */}
        {techs.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-white/[0.08]">
            {techs.map((tech) => (
              <span
                key={tech}
                className="text-[10px] font-mono font-medium bg-[#171315] text-text-muted border border-white/10 px-2 py-0.5 rounded-[var(--radius-xs)]"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
