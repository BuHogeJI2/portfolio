import { PropsWithChildren, ReactElement } from 'react';
import clsx from 'clsx';

interface ContainerProps extends PropsWithChildren {
  className?: string;
  fluid?: boolean;
}

export function Container({
  children,
  className,
  fluid = false,
}: ContainerProps): ReactElement {
  return (
    <div
      className={clsx(
        'mx-auto w-full px-4 sm:px-6 lg:px-8',
        fluid ? 'max-w-full' : 'max-w-6xl',
        className,
      )}
    >
      {children}
    </div>
  );
}
