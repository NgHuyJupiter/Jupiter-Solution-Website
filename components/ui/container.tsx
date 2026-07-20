import * as React from 'react';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'center' | 'wide';
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, className = '', variant = 'center', ...props }, ref) => {
    // container-center and container-wide classes handle all padding
    // via the responsive padding defined in globals.css utilities
    const baseClass = variant === 'center' ? 'container-center' : 'container-wide';

    return (
      <div
        ref={ref}
        className={`${baseClass} ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = 'Container';

export default Container;
