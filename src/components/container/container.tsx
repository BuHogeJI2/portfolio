import { PropsWithChildren, ReactElement } from 'react';

interface ContainerProps extends PropsWithChildren {
  className?: string;
  fluid?: boolean;
}

export function Container({ 
  children, 
  className = '',
  fluid = false 
}: ContainerProps): ReactElement {
  return (
    <div
      className={`
        mx-auto
        w-full
        px-4
        sm:px-6
        lg:px-8
        ${fluid ? 'max-w-full' : 'max-w-7xl'}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
