import { PropsWithChildren, ReactElement } from 'react';
import { cn } from '@/lib/utils';

export type TSurfaceVariant = 'default' | 'subtle' | 'elevated';
export type TSurfacePadding = 'none' | 'small' | 'medium' | 'large';

interface ISurfaceProps extends PropsWithChildren {
  variant?: TSurfaceVariant;
  padding?: TSurfacePadding;
  className?: string;
}

const variantStyles: Record<TSurfaceVariant, string> = {
  default:
    'border-line/70 bg-surface/75 shadow-surface backdrop-blur-xl dark:border-line/10',
  subtle:
    'border-line/60 bg-surface-subtle/80 dark:border-line/10 dark:bg-surface-subtle/70',
  elevated:
    'border-line/70 bg-surface-elevated/90 shadow-elevated backdrop-blur-xl dark:border-line/10',
};

const paddingStyles: Record<TSurfacePadding, string> = {
  none: '',
  small: 'p-4 md:p-5',
  medium: 'p-6 md:p-8',
  large: 'p-6 md:p-10',
};

export function Surface({
  children,
  variant = 'default',
  padding = 'medium',
  className,
}: ISurfaceProps): ReactElement {
  return (
    <div
      className={cn(
        'rounded-surface border',
        variantStyles[variant],
        paddingStyles[padding],
        className,
      )}
    >
      {children}
    </div>
  );
}
