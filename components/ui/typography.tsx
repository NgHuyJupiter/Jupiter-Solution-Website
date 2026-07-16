import * as React from 'react';

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 
    | 'display' 
    | 'h1' 
    | 'h2' 
    | 'h3' 
    | 'h4' 
    | 'body-large' 
    | 'body' 
    | 'body-small' 
    | 'caption' 
    | 'code'
    | 'label'
    | 'overline';
  as?: React.ElementType;
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ children, className = '', variant = 'body', as, ...props }, ref) => {
    // Semantic HTML tag mapping
    const defaultTags: Record<string, React.ElementType> = {
      display:      'h1',
      h1:           'h1',
      h2:           'h2',
      h3:           'h3',
      h4:           'h4',
      'body-large': 'p',
      body:         'p',
      'body-small': 'p',
      caption:      'span',
      label:        'span',
      overline:     'span',
      code:         'code',
    };

    const Component = as || defaultTags[variant] || 'p';

    // Design token-driven classes — Swiss Modernism 2.0 scale
    const variantClasses: Record<string, string> = {
      // Hero / page-title — clamp(40px → 64px)
      display:
        'text-clamp-display font-extrabold tracking-tight text-text-primary leading-none',

      // Page H1 — clamp(32px → 52px)
      h1:
        'text-clamp-h1 font-bold tracking-tight text-text-primary leading-tight',

      // Section H2 — clamp(24px → 36px)
      h2:
        'text-clamp-h2 font-semibold tracking-tight text-text-primary leading-snug',

      // Card / sub-section H3 — clamp(18px → 26px)
      h3:
        'text-clamp-h3 font-semibold tracking-tight text-text-primary leading-snug',

      // Sub-heading H4 — 17–20px
      h4:
        'text-[1.0625rem] md:text-[1.125rem] font-semibold text-text-primary leading-normal tracking-tight',

      // Intro / lead copy — 18–20px
      'body-large':
        'text-[1.0625rem] md:text-[1.125rem] lg:text-[1.25rem] text-text-secondary leading-relaxed',

      // Standard body — 16–18px
      body:
        'text-[0.9375rem] md:text-base lg:text-[1.0625rem] text-text-secondary leading-relaxed',

      // Small body — 14px
      'body-small':
        'text-sm text-text-secondary leading-relaxed',

      // Caption / metadata — 12–13px
      caption:
        'text-xs font-medium text-text-muted tracking-wide',

      // Form label
      label:
        'text-sm font-semibold text-text-primary',

      // Overline / eyebrow variant (use .eyebrow utility class for full treatment)
      overline:
        'text-[0.6875rem] font-bold uppercase tracking-[0.1em] text-text-muted',

      // Inline code
      code:
        'font-mono text-sm px-1.5 py-0.5 rounded-[var(--radius-sm)] bg-slate-100 border border-slate-200 text-brand-700',
    };

    return (
      <Component
        ref={ref}
        className={`${variantClasses[variant] || ''} ${className}`}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Typography.displayName = 'Typography';

export default Typography;
