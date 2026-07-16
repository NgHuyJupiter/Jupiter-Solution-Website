import * as React from 'react';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  variant?: 'default' | 'alternate' | 'brand-tint' | 'dark';
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ children, className = '', variant = 'default', ...props }, ref) => {
    // Background color mappings based on B2B design system rules
    const bgClasses = {
      default: 'bg-bg-default text-text-primary',
      alternate: 'bg-surface-card text-text-primary border-y border-slate-200',
      'brand-tint': 'bg-brand-50 text-text-primary border-y border-brand-100',
      dark: 'bg-slate-900 text-white border-y border-slate-800',
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
