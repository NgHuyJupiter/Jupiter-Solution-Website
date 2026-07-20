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
          className="group bg-[#1C181A] border border-white/10 rounded-lg shadow-sm overflow-hidden transition-all duration-200 hover:border-white/20 [&_summary::-webkit-details-marker]:hidden"
        >
          {/* Summary toggle header */}
          <summary className="flex items-center justify-between p-5 cursor-pointer list-none select-none focus:outline-none focus-visible:bg-white/[0.04]">
            <div className="flex items-center gap-4 pr-4">
              <span className="font-mono text-xs font-semibold text-[#D46A79] bg-[#8E2938]/20 border border-[#8E2938]/30 px-2 py-0.5 rounded-sm">
                {item.num}
              </span>
              <span className="font-semibold text-text-primary text-sm sm:text-base leading-snug">
                {item.question}
              </span>
            </div>
            
            {/* Custom details state indicator icon (+ to -) */}
            <span className="relative flex-shrink-0 ml-1.5 w-6 h-6 flex items-center justify-center rounded-full bg-white/[0.06] text-text-secondary group-hover:bg-[#8E2938]/30 group-hover:text-text-primary transition-colors">
              <span className="absolute w-2.5 h-0.5 bg-current rounded-sm transition-transform duration-200 group-open:rotate-180" />
              <span className="absolute w-0.5 h-2.5 bg-current rounded-sm transition-transform duration-200 group-open:rotate-90 group-open:scale-y-0" />
            </span>
          </summary>

          {/* Details toggle body wrapper */}
          <div className="border-t border-white/[0.08] p-5 bg-[#171315] transition-all duration-200 ease-[var(--ease-standard)] group-open:animate-fade-in">
            <Typography variant="body-small" className="text-text-secondary mb-0">
              {item.answer}
            </Typography>
          </div>
        </details>
      ))}
    </div>
  );
}
