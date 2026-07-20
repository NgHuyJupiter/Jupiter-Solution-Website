import * as React from 'react';

interface ServiceCardProps extends React.HTMLAttributes<HTMLDivElement> {
  num: string;
  title: string;
  description: string;
  tags?: string[];
  icon?: React.ReactNode;
}

/**
 * ServiceCard — Indexed Service Entry
 *
 * Design direction: Swiss Modernism 2.0 — indexed list style
 * NOT a generic rounded card. Uses left-border indicator, index chip,
 * and clean typographic hierarchy. Hover changes border to brand-600.
 */
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
      className={[
        'group relative',
        'bg-[#1C181A] border border-white/10',
        'hover:border-white/25',
        'rounded-[var(--radius-lg)]',
        'p-5 sm:p-6',
        'hover-lift',
        'overflow-hidden',
        'flex flex-col',
        className,
      ].join(' ')}
      {...props}
    >
      {/* Left brand bar — reveals on hover */}
      <span
        className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#8E2938] origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-[var(--motion-medium)] ease-[var(--ease-standard)]"
        aria-hidden="true"
      />

      {/* Subtle BG wash on hover */}
      <div
        className="absolute inset-0 bg-[#8E2938]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-[var(--motion-medium)] pointer-events-none rounded-[var(--radius-lg)]"
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col h-full">
        {/* Header row: index + arrow */}
        <div className="flex items-start justify-between mb-4">
          <span className="index-chip">{num}</span>
          <span
            className="w-7 h-7 flex items-center justify-center rounded-full border border-white/10 group-hover:border-white/25 group-hover:bg-[#8E2938]/20 transition-all duration-[var(--motion-base)]"
            aria-hidden="true"
          >
            <svg
              className="w-3.5 h-3.5 text-text-muted group-hover:text-text-primary group-hover:translate-x-0.5 transition-all duration-[var(--motion-base)] ease-[var(--ease-standard)]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>

        {/* Title */}
        <h3 className="text-clamp-h3 font-semibold text-text-primary group-hover:text-white transition-colors duration-[var(--motion-base)] mb-2 leading-snug tracking-tight">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-text-secondary leading-relaxed mb-5 line-clamp-3 flex-1">
          {description}
        </p>

        {/* Technology tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-auto">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-semibold font-mono bg-[#171315] text-text-muted border border-white/10 px-2 py-0.5 rounded-[var(--radius-xs)] group-hover:border-white/20 group-hover:text-text-secondary transition-colors duration-[var(--motion-fast)]"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
