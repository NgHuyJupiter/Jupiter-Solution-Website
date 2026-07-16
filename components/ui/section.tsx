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
      default:     'bg-[var(--color-bg-default)] text-text-primary',
      alternate:   'bg-[var(--color-surface-card)] text-text-primary border-y border-[var(--color-border-default)]',
      subtle:      'bg-[var(--color-surface-alt)] text-text-primary border-y border-[var(--color-border-subtle)]',
      'brand-tint':'bg-[var(--color-brand-50)] text-text-primary border-y border-[var(--color-brand-100)]',
      dark:        'bg-[var(--color-surface-dark)] text-white',
      'dark-brand':'bg-[var(--color-surface-dark)] text-white',
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
