'use client';

import * as React from 'react';
import Link from './link';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  href?: string;
}

const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      children,
      className = '',
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      disabled,
      type = 'button',
      href,
      ...props
    },
    ref
  ) => {
    // Size definitions — Swiss Modernism grid-aligned
    const sizeClasses = {
      sm: 'h-8 px-3.5 text-xs gap-1.5',
      md: 'h-10 px-5 text-sm gap-2',
      lg: 'h-12 px-6 text-[0.9375rem] gap-2.5',
    };

    // Variant classes — typographically precise, burgundy identity
    const variantClasses = {
      // Deep Burgundy CTA — primary conversion action
      primary:
        'bg-brand-600 hover:bg-brand-700 active:bg-brand-800 text-white font-semibold rounded-[var(--radius-sm)] border border-transparent shadow-[var(--shadow-xs)] hover:shadow-[var(--shadow-sm)] focus-visible:shadow-[var(--shadow-brand)] active:scale-[0.98] hover:-translate-y-px',

      // White / outlined secondary — equal visual weight
      secondary:
        'bg-white hover:bg-slate-50 active:bg-slate-100 text-slate-700 font-semibold rounded-[var(--radius-sm)] border border-[var(--color-border-default)] hover:border-[var(--color-border-emphasis)] shadow-[var(--shadow-xs)] hover:shadow-[var(--shadow-sm)] active:scale-[0.98] hover:-translate-y-px',

      // Outline — transparent BG with brand border
      outline:
        'bg-transparent hover:bg-brand-50 active:bg-brand-100 text-brand-600 hover:text-brand-700 font-semibold rounded-[var(--radius-sm)] border border-brand-300 hover:border-brand-500 active:scale-[0.98]',

      // Ghost — no border, minimal presence
      ghost:
        'bg-transparent hover:bg-slate-100 active:bg-slate-200 text-slate-700 font-semibold rounded-[var(--radius-sm)] border border-transparent active:scale-[0.98]',

      // Link — inline text style
      link:
        'text-brand-600 hover:text-brand-700 font-semibold underline-offset-4 hover:underline bg-transparent border-transparent h-auto px-0 py-0',
    };

    const isBtnDisabled = disabled || isLoading;

    const baseClasses = [
      'inline-flex items-center justify-center',
      'select-none cursor-pointer',
      'transition-[background-color,border-color,box-shadow,transform,opacity]',
      'duration-[var(--motion-base)]',
      'ease-[var(--ease-standard)]',
      'focus:outline-none',
      'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
      'group',
      sizeClasses[size],
      variantClasses[variant],
      className,
    ].join(' ');

    const content = (
      <>
        {/* Loading Spinner */}
        {isLoading && (
          <svg
            className="animate-spin -ml-0.5 h-4 w-4 text-current shrink-0"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}

        {/* Left Icon — subtle movement on hover */}
        {!isLoading && leftIcon && (
          <span
            className="inline-flex shrink-0 transition-transform duration-[var(--motion-base)] ease-[var(--ease-standard)] group-hover:-translate-x-0.5"
            aria-hidden="true"
          >
            {leftIcon}
          </span>
        )}

        {/* Button Text */}
        <span className="truncate">{children}</span>

        {/* Right Icon — arrow moves right on hover */}
        {!isLoading && rightIcon && (
          <span
            className="inline-flex shrink-0 transition-transform duration-[var(--motion-base)] ease-[var(--ease-standard)] group-hover:translate-x-0.5"
            aria-hidden="true"
          >
            {rightIcon}
          </span>
        )}
      </>
    );

    // Render as Link when href is provided (Server Component-safe)
    if (href) {
      return (
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={baseClasses}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        type={type}
        disabled={isBtnDisabled}
        className={baseClasses}
        {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
