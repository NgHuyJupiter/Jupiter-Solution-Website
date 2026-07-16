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
    <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-all">
      <div>
        {/* Card Header Vendor Branding */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
          <span className="font-mono text-xs font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-sm uppercase tracking-wider">
            {code}
          </span>
          <span className="text-xs font-semibold text-brand-600 font-sans">
            {partner}
          </span>
        </div>

        {/* Product Title */}
        <Typography variant="h3" className="mb-2 text-text-primary">
          {title}
        </Typography>

        {/* Product Description */}
        <Typography variant="body-small" className="text-text-secondary mb-6">
          {description}
        </Typography>

        {/* Subgroups & Models details list */}
        <div className="space-y-4">
          {subgroups.map((group) => (
            <div key={group.name} className="text-sm">
              <span className="font-semibold text-text-primary block mb-1.5 flex items-center gap-1.5">
                <span className="text-brand-600 text-xs">▸</span> {group.name}
              </span>
              <ul className="space-y-1.5 pl-4 border-l border-slate-100">
                {group.items.map((item) => (
                  <li key={item.name} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 text-xs">
                    <span className="font-mono font-medium text-slate-700 bg-slate-50 px-1 py-0.5 rounded border border-slate-200">
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
      <div className="mt-8 border-t border-slate-100 pt-4">
        <Button
          variant="secondary"
          size="sm"
          className="w-full text-center"
          href={inquiryHref}
        >
          {inquiryText}
        </Button>
      </div>
    </div>
  );
}
