import * as React from 'react';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  variant?: 
    | 'default'       /* #100E0F — deep page background */
    | 'alternate'     /* #1C181A — primary dark warm slate surface */
    | 'subtle'        /* #171315 — slightly lighter charcoal base */
    | 'raised'        /* #241E21 — elevated surface / panel */
    | 'brand-tint'    /* #30171D — deep dark burgundy feature surface */
    | 'dark'          /* #0B0A0A — deepest spatial base */
    | 'dark-brand';   /* #30171D — dark burgundy CTA section */
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ children, className = '', variant = 'default', ...props }, ref) => {
    // Map variant to background + text + border classes
    const bgClasses: Record<string, string> = {
      default:     'bg-[#100E0F] text-text-primary',
      alternate:   'bg-[#1C181A] text-text-primary border-y border-white/[0.08]',
      subtle:      'bg-[#171315] text-text-primary border-y border-white/[0.06]',
      raised:      'bg-[#241E21] text-text-primary border-y border-white/[0.10]',
      'brand-tint':'bg-[#30171D] text-text-primary border-y border-white/[0.12]',
      dark:        'bg-[#0B0A0A] text-text-primary',
      'dark-brand':'bg-[#30171D] text-text-primary border-y border-white/[0.15]',
    };

    return (
      <section
        ref={ref}
        className={`section-rhythm ${bgClasses[variant]} ${className}`}
        {...props}
      >
        {children}
      </section>
    );
  }
);

Section.displayName = 'Section';

export default Section;
