import { ReactElement } from 'react';
import { cn } from '@/lib/utils';

interface ILoaderProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function Loader({ className, size = 'md' }: ILoaderProps): ReactElement {
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
            'animate-spin rounded-full border-transparent border-t-accent motion-reduce:animate-none',
            sizeClasses[size],
          )}
        />
        <div
          className={cn(
            'absolute inset-0 animate-spin rounded-full border-transparent border-r-accent-strong opacity-50 motion-reduce:animate-none',
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
