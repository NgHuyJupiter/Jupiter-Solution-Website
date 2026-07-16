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
      className={`relative group bg-white border border-slate-200 hover:border-slate-300 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between overflow-hidden ${className}`}
      {...props}
    >
      {/* Decorative Brand Accent tint background on card hover */}
      <div className="absolute inset-0 bg-brand-50/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />

      <div className="relative z-10">
        {/* Top bar row with Step Number & Optional Icon */}
        <div className="flex items-center justify-between mb-6">
          <span className="font-mono text-sm font-semibold text-brand-600 bg-brand-50 px-2 py-0.5 rounded-sm">
            {num}
          </span>
          {icon && <span className="text-slate-400 group-hover:text-brand-600 transition-colors">{icon}</span>}
        </div>

        {/* Header Title */}
        <Typography variant="h3" className="mb-2 text-text-primary">
          {title}
        </Typography>

        {/* Body Description */}
        <Typography variant="body-small" className="text-text-secondary mb-6">
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
