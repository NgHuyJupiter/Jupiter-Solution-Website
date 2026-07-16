import * as React from 'react';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'center' | 'wide';
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, className = '', variant = 'center', ...props }, ref) => {
    const baseClass = variant === 'center' ? 'container-center' : 'container-wide';
    
    return (
      <div
        ref={ref}
        className={`${baseClass} px-4 md:px-8 ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = 'Container';

export default Container;
