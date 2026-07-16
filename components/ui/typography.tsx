import * as React from 'react';

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'display' | 'h1' | 'h2' | 'h3' | 'h4' | 'body-large' | 'body' | 'body-small' | 'caption' | 'code';
  as?: React.ElementType;
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ children, className = '', variant = 'body', as, ...props }, ref) => {
    // Standard mapping of semantic HTML tags to layout sizes
    const defaultTags: Record<string, React.ElementType> = {
      display: 'h1',
      h1: 'h1',
      h2: 'h2',
      h3: 'h3',
      h4: 'h4',
      'body-large': 'p',
      body: 'p',
      'body-small': 'p',
      caption: 'span',
      code: 'code',
    };

    const Component = as || defaultTags[variant] || 'p';

    // Style token lists matching the design token specification
    const variantClasses = {
      display: 'text-clamp-display font-bold tracking-tight text-text-primary mb-4',
      h1: 'text-[30px] md:text-[30px] font-bold tracking-tight text-text-primary leading-tight mb-4',
      h2: 'text-2xl font-semibold tracking-tight text-text-primary leading-snug mb-3',
      h3: 'text-xl font-semibold tracking-tight text-text-primary leading-normal mb-2',
      h4: 'text-lg font-semibold text-text-primary leading-normal mb-2',
      'body-large': 'text-lg text-text-secondary leading-relaxed mb-4',
      body: 'text-base text-text-secondary leading-relaxed mb-3',
      'body-small': 'text-sm text-text-secondary leading-relaxed mb-2',
      caption: 'text-xs font-medium text-text-muted tracking-wide',
      code: 'font-mono text-sm px-1.5 py-0.5 rounded bg-slate-100 border border-slate-200 text-brand-600',
    };

    return (
      <Component
        ref={ref}
        className={`${variantClasses[variant]} ${className}`}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Typography.displayName = 'Typography';

export default Typography;
