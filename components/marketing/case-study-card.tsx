import * as React from 'react';
import Typography from '../ui/typography';

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
    <div className="relative group bg-white border border-slate-200 hover:border-brand-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-[var(--motion-medium)] ease-[var(--ease-standard)] hover:-translate-y-0.5 flex flex-col justify-between overflow-hidden">
      {/* Decorative ambient underlay */}
      <div className="absolute inset-0 bg-brand-50/5 opacity-0 group-hover:opacity-100 transition-opacity duration-[var(--motion-medium)] pointer-events-none" />

      <div>
        {/* Case ID and Business Sector Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
          <span className="font-mono text-xs font-bold text-slate-500 transition-all duration-[var(--motion-base)] ease-[var(--ease-standard)] group-hover:text-brand-600 group-hover:scale-105 origin-left">
            {code}
          </span>
          <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-xs">
            {sector}
          </span>
        </div>

        {/* Project title */}
        <Typography variant="h3" className="mb-4 text-text-primary group-hover:text-brand-600 transition-colors duration-[var(--motion-base)]">
          {title}
        </Typography>

        {/* Content details divided by bold B2B sections with visual layering */}
        <div className="space-y-4 mb-6 text-sm">
          <div>
            <span className="font-semibold text-slate-700 block mb-0.5 text-xs">Thách thức / Challenge:</span>
            <p className="text-text-secondary text-xs leading-relaxed">{challenge}</p>
          </div>
          <div>
            <span className="font-semibold text-slate-700 block mb-0.5 text-xs">Giải pháp / Solution:</span>
            <p className="text-text-secondary text-xs leading-relaxed">{solution}</p>
          </div>
          {/* outcome metrics layered inside custom B2B panel */}
          <div className="bg-brand-50/30 border border-brand-100/50 rounded-sm p-3 mt-1.5 transition-colors group-hover:bg-brand-50/50">
            <span className="font-semibold text-brand-800 block mb-1 text-xs">Kết quả / Outcome:</span>
            <p className="text-brand-700 text-xs font-medium leading-relaxed">{result}</p>
          </div>
        </div>
      </div>

      <div>
        {/* Technology tags row */}
        {techs.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {techs.map((tech) => (
              <span
                key={tech}
                className="text-[10px] font-mono font-medium bg-slate-50 text-slate-500 border border-slate-200 px-2 py-0.5 rounded-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Bottom verification warning marker */}
        {!isVerified && (
          <div className="border-t border-slate-100 pt-3 text-[10px] font-semibold text-amber-600 bg-amber-50/50 px-2 py-1 rounded border border-amber-100 uppercase tracking-wider text-center select-none">
            [CONTENT VERIFICATION REQUIRED]
          </div>
        )}
      </div>
    </div>
  );
}
