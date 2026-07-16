'use client';

import * as React from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { usePathname } from 'next/navigation';

export interface LinkProps extends NextLinkProps, Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  activeClassName?: string;
  exact?: boolean;
  variant?: 'default' | 'inline';
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ children, href, className = '', activeClassName = '', exact = false, variant = 'default', ...props }, ref) => {
    const pathname = usePathname();
    
    // Check if the link route matches the active page pathname
    const isActive = React.useMemo(() => {
      if (!pathname) return false;
      const hrefString = typeof href === 'object' ? href.pathname || '' : href;
      if (exact) {
        return pathname === hrefString;
      }
      return pathname.startsWith(hrefString);
    }, [pathname, href, exact]);

    const activeClasses = isActive ? activeClassName : '';
    const variantClasses = variant === 'inline' ? 'link-underline-hover' : '';

    return (
      <NextLink
        ref={ref}
        href={href}
        className={`transition-colors duration-[var(--motion-base)] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 rounded-sm ${activeClasses} ${variantClasses} ${className}`}
        {...props}
      >
        {children}
      </NextLink>
    );
  }
);

Link.displayName = 'Link';

export default Link;
