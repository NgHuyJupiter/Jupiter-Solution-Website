import * as React from 'react';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  variant?: 
    | 'default'       /* #FAFAFA — standard off-white */
    | 'alternate'     /* #FFFFFF — white surface */
    | 'subtle'        /* #F5F5F7 — slightly dimmer alternate */
    | 'brand-tint'    /* Very pale burgundy background */
    | 'dark'          /* Charcoal dark — for dark editorial sections */
    | 'dark-brand';   /* Charcoal with burgundy accent — for final CTAs */
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ children, className = '', variant = 'default', ...props }, ref) => {
    // Map variant to background + text + border classes
    const bgClasses: Record<string, string> = {
      default:     'section-bg-default text-text-primary',
      alternate:   'section-bg-alternate text-text-primary border-y border-[var(--color-border-default)]',
      subtle:      'section-bg-subtle text-text-primary border-y border-[var(--color-border-subtle)]',
      'brand-tint':'section-bg-brand text-text-primary border-y border-[var(--color-brand-100)]',
      dark:        'section-bg-dark text-white',
      'dark-brand':'section-bg-dark text-white',
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
