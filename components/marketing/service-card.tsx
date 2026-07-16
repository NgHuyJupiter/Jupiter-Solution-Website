import * as React from 'react';
import Typography from '../ui/typography';

interface ServiceCardProps extends React.HTMLAttributes<HTMLDivElement> {
  num: string;
  title: string;
  description: string;
  tags?: string[];
  icon?: React.ReactNode;
}

export default function ServiceCard({
  num,
  title,
  description,
  tags = [],
  icon,
  className = '',
  ...props
}: ServiceCardProps) {
  return (
    <div
      className={`relative group bg-white border border-slate-200 hover:border-slate-300 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-[var(--motion-medium)] ease-[var(--ease-standard)] hover:-translate-y-0.5 flex flex-col justify-between overflow-hidden ${className}`}
      {...props}
    >
      {/* Decorative vertical brand line expanding from bottom on card hover */}
      <span 
        className="absolute left-0 bottom-0 top-0 w-[3px] bg-brand-600 origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-[var(--motion-medium)] ease-[var(--ease-standard)]"
        aria-hidden="true"
      />

      {/* Decorative Brand Accent tint background on card hover */}
      <div className="absolute inset-0 bg-brand-50/10 opacity-0 group-hover:opacity-100 transition-opacity duration-[var(--motion-medium)] ease-[var(--ease-standard)] pointer-events-none" />

      <div className="relative z-10">
        {/* Top bar row with Step Number & Hover Chevron Arrow */}
        <div className="flex items-center justify-between mb-5">
          <span className="font-mono text-xs font-bold text-brand-600 bg-brand-50 px-2 py-0.5 rounded-xs tracking-wider">
            {num}
          </span>
          <span className="flex items-center gap-2">
            {icon && <span className="text-slate-400 group-hover:text-brand-600 transition-colors duration-[var(--motion-base)]">{icon}</span>}
            <svg 
              className="w-4 h-4 text-slate-300 group-hover:text-brand-600 group-hover:translate-x-1 transition-all duration-[var(--motion-base)] ease-[var(--ease-standard)]" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth="2.5"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>

        {/* Header Title */}
        <Typography variant="h3" className="mb-2 text-text-primary group-hover:text-brand-600 transition-colors duration-[var(--motion-base)]">
          {title}
        </Typography>

        {/* Body Description */}
        <Typography variant="body-small" className="text-text-secondary mb-6 line-clamp-3">
          {description}
        </Typography>
      </div>

      {/* Technology Tag Row */}
      {tags.length > 0 && (
        <div className="relative z-10 flex flex-wrap gap-1.5 mt-auto">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-semibold bg-slate-50 text-slate-600 border border-slate-200 px-2 py-0.5 rounded-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
