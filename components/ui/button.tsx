'use client';

import * as React from 'react';
import Link from './link';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'link';
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
    // Standard layout size definitions
    const sizeClasses = {
      sm: 'h-8 px-3 text-xs gap-1.5 rounded-sm',
      md: 'h-10 px-4 text-sm gap-2 rounded-md',
      lg: 'h-11 px-5 text-base gap-2.5 rounded-lg',
    };

    // Brand color variants (Primary Burgundy, Secondary Slate, Ghost, Link)
    const variantClasses = {
      primary:
        'bg-brand-600 hover:bg-brand-700 text-white shadow-sm font-medium border border-transparent focus-visible:ring-brand-500 active:scale-[0.98]',
      secondary:
        'bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 shadow-xs font-medium focus-visible:ring-slate-400 active:scale-[0.98]',
      ghost:
        'hover:bg-slate-100 text-slate-700 font-medium focus-visible:ring-slate-400 active:scale-[0.98]',
      link:
        'text-brand-600 hover:text-brand-700 underline-offset-4 hover:underline font-medium p-0 h-auto focus-visible:ring-brand-500',
    };

    const isBtnDisabled = disabled || isLoading;
    const combinedClassName = `inline-flex items-center justify-center transition-all duration-150 cursor-pointer select-none focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

    const content = (
      <>
        {/* Loading Spinner */}
        {isLoading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
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

        {/* Prefix Icon */}
        {!isLoading && leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}

        {/* Button Text */}
        <span className="truncate">{children}</span>

        {/* Suffix Icon */}
        {!isLoading && rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
      </>
    );

    // Render as custom Link if href is provided (for Server Component safety)
    if (href) {
      return (
        <Link
          ref={ref as any}
          href={href}
          className={combinedClassName}
          {...(props as any)}
        >
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref as any}
        type={type}
        disabled={isBtnDisabled}
        className={combinedClassName}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
