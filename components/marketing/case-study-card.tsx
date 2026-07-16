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
    <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-all duration-200">
      <div>
        {/* Case ID and Business Sector Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
          <span className="font-mono text-xs font-bold text-slate-500">
            {code}
          </span>
          <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-sm">
            {sector}
          </span>
        </div>

        {/* Project title */}
        <Typography variant="h3" className="mb-4 text-text-primary">
          {title}
        </Typography>

        {/* Content details divided by bold B2B sections */}
        <div className="space-y-3.5 mb-6 text-sm">
          <div>
            <span className="font-semibold text-slate-700 block mb-0.5">Thách thức:</span>
            <p className="text-text-secondary text-xs leading-relaxed">{challenge}</p>
          </div>
          <div>
            <span className="font-semibold text-slate-700 block mb-0.5">Giải pháp:</span>
            <p className="text-text-secondary text-xs leading-relaxed">{solution}</p>
          </div>
          <div>
            <span className="font-semibold text-slate-700 block mb-0.5">Kết quả:</span>
            <p className="text-brand-600 text-xs font-medium leading-relaxed">{result}</p>
          </div>
        </div>
      </div>

      <div>
        {/* Technology tags row */}
        {techs.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-4">
            {techs.map((tech) => (
              <span
                key={tech}
                className="text-[10px] font-mono font-medium bg-slate-50 text-slate-500 border border-slate-200 px-1.5 py-0.5 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Bottom verification warning marker */}
        {!isVerified && (
          <div className="border-t border-slate-100 pt-3 text-[10px] font-semibold text-amber-600 bg-amber-50/50 px-2 py-1 rounded border border-amber-100 uppercase tracking-wider text-center">
            [CONTENT VERIFICATION REQUIRED]
          </div>
        )}
      </div>
    </div>
  );
}
