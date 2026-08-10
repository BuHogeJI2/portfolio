import { PropsWithChildren, ReactElement, ReactNode } from 'react';
import { cn } from '@/lib/utils';

export type TTagTone = 'neutral' | 'accent';

interface ITagProps extends PropsWithChildren {
  tone?: TTagTone;
  icon?: ReactNode;
  className?: string;
}

const toneStyles: Record<TTagTone, string> = {
  neutral:
    'border-line/70 bg-surface-subtle/80 text-content-muted dark:border-line/10',
  accent: 'border-accent/20 bg-accent/10 text-accent',
};

export function Tag({
  children,
  tone = 'neutral',
  icon,
  className,
}: ITagProps): ReactElement {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-control border px-3 py-1 text-sm font-medium',
        toneStyles[tone],
        className,
      )}
    >
      {icon}
      {children}
    </span>
  );
}
