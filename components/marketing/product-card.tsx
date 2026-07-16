import * as React from 'react';
import Typography from '../ui/typography';
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
    <div className="relative group bg-white border border-slate-200 hover:border-brand-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-[var(--motion-medium)] ease-[var(--ease-standard)] hover:-translate-y-0.5 flex flex-col justify-between overflow-hidden">
      {/* Decorative tech grid pattern underlay */}
      <div className="absolute inset-0 bg-tech-grid opacity-[0.4] group-hover:opacity-[0.7] transition-opacity duration-[var(--motion-medium)] pointer-events-none" />

      {/* Decorative Technical Crosshair Corner Markers */}
      <span className="absolute top-2 left-2 font-mono text-[9px] text-slate-300 group-hover:text-brand-300 transition-colors select-none" aria-hidden="true">+</span>
      <span className="absolute top-2 right-2 font-mono text-[9px] text-slate-300 group-hover:text-brand-300 transition-colors select-none" aria-hidden="true">+</span>

      <div className="relative z-10">
        {/* Card Header Vendor Branding */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
          <span className="font-mono text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-xs uppercase tracking-wider">
            {code}
          </span>
          <span className="text-xs font-semibold text-brand-600 font-sans tracking-wide">
            {partner}
          </span>
        </div>

        {/* Product Title */}
        <Typography variant="h3" className="mb-2 text-text-primary group-hover:text-brand-600 transition-colors duration-[var(--motion-base)]">
          {title}
        </Typography>

        {/* Product Description */}
        <Typography variant="body-small" className="text-text-secondary mb-6 leading-relaxed">
          {description}
        </Typography>

        {/* Subgroups & Models details list */}
        <div className="space-y-4">
          {subgroups.map((group) => (
            <div key={group.name} className="text-sm">
              <span className="font-semibold text-text-primary block mb-1.5 flex items-center gap-1.5">
                <span className="text-brand-600 text-xs transition-transform duration-[var(--motion-base)] group-hover:translate-x-0.5">▸</span> {group.name}
              </span>
              <ul className="space-y-1.5 pl-3.5 border-l border-slate-200/60">
                {group.items.map((item) => (
                  <li key={item.name} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 text-xs">
                    <span className="font-mono font-medium text-slate-700 bg-slate-50 px-1 py-0.5 rounded border border-slate-200 group-hover:border-slate-300/80 transition-colors">
                      {item.name}
                    </span>
                    <span className="text-text-muted">{item.note}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Inquiry CTA */}
      <div className="mt-8 border-t border-slate-100 pt-4 relative z-10">
        <Button
          variant="secondary"
          size="sm"
          className="w-full text-center hover:bg-brand-50 hover:text-brand-700 hover:border-brand-200 transition-colors"
          href={inquiryHref}
        >
          {inquiryText}
        </Button>
      </div>
    </div>
  );
}
