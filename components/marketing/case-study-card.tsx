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
    <article className="group relative bg-white border border-[var(--color-border-default)] hover:border-brand-200 rounded-[var(--radius-lg)] overflow-hidden hover-lift flex flex-col">
      
      {/* Editorial header bar */}
      <div className="flex items-stretch border-b border-[var(--color-border-subtle)]">
        {/* Left: case code strip */}
        <div className="bg-slate-50 group-hover:bg-brand-50 border-r border-[var(--color-border-subtle)] px-4 py-3 flex items-center justify-center shrink-0 transition-colors duration-[var(--motion-base)]">
          <span className="font-mono text-xs font-bold text-slate-500 group-hover:text-brand-600 uppercase tracking-widest rotate-0 transition-colors duration-[var(--motion-base)]">
            {code}
          </span>
        </div>
        {/* Right: sector label */}
        <div className="flex-1 px-4 py-3 flex items-center justify-between">
          <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-[var(--radius-xs)]">
            {sector}
          </span>
          {isVerified && (
            <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-[var(--radius-xs)]">
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
        <h3 className="text-clamp-h3 font-semibold text-text-primary group-hover:text-brand-700 transition-colors duration-[var(--motion-base)] mb-5 leading-snug tracking-tight">
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
          <div className="bg-brand-50 border border-brand-100 rounded-[var(--radius-md)] p-3.5 group-hover:bg-brand-50/80 transition-colors duration-[var(--motion-base)]">
            <div className="grid grid-cols-[80px_1fr] gap-x-4 items-start text-xs">
              <span className="text-[10px] font-bold uppercase tracking-[0.08em] text-brand-700 pt-0.5">
                Outcome
              </span>
              <p className="text-brand-800 font-medium leading-relaxed">{result}</p>
            </div>
          </div>
        </div>

        {/* Technology tags */}
        {techs.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-[var(--color-border-subtle)]">
            {techs.map((tech) => (
              <span
                key={tech}
                className="text-[10px] font-mono font-medium bg-slate-50 text-slate-500 border border-[var(--color-border-default)] px-2 py-0.5 rounded-[var(--radius-xs)]"
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
