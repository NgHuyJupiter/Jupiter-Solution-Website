import * as React from 'react';
import Button from '../ui/button';

interface ProductItem {
  name: string;
  note: string;
}

interface ProductSubGroup {
  name: string;
  items: ProductItem[];
}

interface ProductCardProps {
  code: string;
  partner: string;
  title: string;
  description: string;
  subgroups: ProductSubGroup[];
  inquiryText?: string;
  inquiryHref?: string;
}

/**
 * ProductCard — Technology Integration Showcase
 *
 * Visually distinct from ServiceCard:
 * - Top-accent bar instead of left-border
 * - Code/Partner header with clear vendor identification
 * - Technical model list with monospace model numbers
 * - Different surface tint (no tech-grid overlay)
 */
export default function ProductCard({
  code,
  partner,
  title,
  description,
  subgroups,
  inquiryText = 'Liên hệ báo giá',
  inquiryHref,
}: ProductCardProps) {
  return (
    <div className="group relative bg-[#1C181A] border border-white/10 hover:border-white/25 rounded-[var(--radius-lg)] overflow-hidden hover-lift flex flex-col">
      
      {/* Top accent bar — 3px brand stripe */}
      <div className="h-[3px] bg-gradient-to-r from-[#8E2938] via-[#A73748] to-[#D46A79] transition-opacity duration-[var(--motion-medium)]" aria-hidden="true" />

      {/* Corner alignment marks — Precision Orbit language */}
      <span className="absolute top-4 right-4 font-mono text-[8px] text-text-muted group-hover:text-[#D46A79] transition-colors duration-[var(--motion-base)] select-none" aria-hidden="true">+</span>

      <div className="p-5 sm:p-6 flex flex-col flex-1">
        
        {/* Card header: Code + Vendor */}
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.08]">
          <span className="font-mono text-[10px] font-bold text-text-primary bg-[#171315] border border-white/10 group-hover:border-[#8E2938]/40 group-hover:bg-[#8E2938]/20 px-2 py-0.5 rounded-[var(--radius-xs)] uppercase tracking-widest transition-colors duration-[var(--motion-base)]">
            {code}
          </span>
          <span className="text-xs font-semibold text-[#D46A79] tracking-wide">
            {partner}
          </span>
        </div>

        {/* Product Title */}
        <h3 className="text-clamp-h3 font-semibold text-text-primary group-hover:text-white transition-colors duration-[var(--motion-base)] mb-2 leading-snug tracking-tight">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-text-secondary leading-relaxed mb-5">
          {description}
        </p>

        {/* Technical subgroups — model matrix */}
        <div className="space-y-4 mb-6 flex-1">
          {subgroups.map((group) => (
            <div key={group.name}>
              <div className="flex items-center gap-1.5 mb-2">
                <span className="text-[#D46A79] transition-transform duration-[var(--motion-base)] group-hover:translate-x-0.5" aria-hidden="true">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
                    <polygon points="0,0 10,5 0,10" />
                  </svg>
                </span>
                <span className="text-xs font-semibold text-text-primary">{group.name}</span>
              </div>
              <ul className="space-y-1.5 pl-4 border-l border-white/[0.08]">
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 text-xs"
                  >
                    <span className="font-mono font-medium text-text-primary bg-[#171315] border border-white/10 group-hover:border-white/20 px-1.5 py-0.5 rounded-[var(--radius-xs)] transition-colors duration-[var(--motion-fast)] w-fit">
                      {item.name}
                    </span>
                    <span className="text-text-muted text-[11px]">{item.note}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Inquiry CTA */}
        <div className="mt-auto border-t border-white/[0.08] pt-4">
          <Button
            variant="outline"
            size="sm"
            className="w-full text-center"
            href={inquiryHref}
          >
            {inquiryText}
          </Button>
        </div>
      </div>
    </div>
  );
}
