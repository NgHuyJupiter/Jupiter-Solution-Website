import * as React from 'react';
import Typography from './typography';

interface AccordionItem {
  id: string;
  num: string;
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  return (
    <div className="space-y-3.5 w-full">
      {items.map((item) => (
        <details
          key={item.id}
          className="group bg-white border border-slate-200 rounded-lg shadow-xs overflow-hidden transition-all duration-200 [&_summary::-webkit-details-marker]:hidden"
        >
          {/* Summary toggle header */}
          <summary className="flex items-center justify-between p-5 cursor-pointer list-none select-none focus:outline-none focus-visible:bg-slate-50">
            <div className="flex items-center gap-4 pr-4">
              <span className="font-mono text-xs font-semibold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-sm">
                {item.num}
              </span>
              <span className="font-semibold text-text-primary text-sm sm:text-base leading-snug">
                {item.question}
              </span>
            </div>
            
            {/* Custom details state indicator icon (+ to -) */}
            <span className="relative flex-shrink-0 ml-1.5 w-5 h-5 flex items-center justify-center rounded-full bg-slate-100 group-hover:bg-brand-50 group-hover:text-brand-600 transition-colors">
              <span className="absolute w-2.5 h-0.5 bg-current rounded-sm" />
              <span className="absolute w-0.5 h-2.5 bg-current rounded-sm transition-transform duration-200 group-open:rotate-90" />
            </span>
          </summary>

          {/* Details toggle body wrapper */}
          <div className="border-t border-slate-100 p-5 bg-slate-50/50">
            <Typography variant="body-small" className="text-text-secondary mb-0">
              {item.answer}
            </Typography>
          </div>
        </details>
      ))}
    </div>
  );
}
