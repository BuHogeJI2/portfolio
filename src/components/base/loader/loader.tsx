import { ReactElement } from 'react';
import { cn } from '@/lib/utils';

interface LoaderProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function Loader({ className, size = 'md' }: LoaderProps): ReactElement {
  const sizeClasses = {
    sm: 'w-8 h-8 border-2',
    md: 'w-12 h-12 border-4',
    lg: 'w-16 h-16 border-4',
  };

  return (
    <div className={cn('flex h-[50vh] items-center justify-center', className)}>
      <div className="relative">
        <div
          className={cn(
            'animate-spin rounded-full border-transparent border-t-primary-default dark:border-t-primary-dark',
            sizeClasses[size],
          )}
        />
        <div
          className={cn(
            'absolute inset-0 animate-spin rounded-full border-transparent border-r-secondary-default opacity-50 dark:border-r-secondary-dark',
            sizeClasses[size],
          )}
          style={{
            animationDirection: 'reverse',
            animationDuration: '1.5s',
          }}
        />
      </div>
    </div>
  );
}
