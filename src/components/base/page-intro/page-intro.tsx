import { ReactElement, ReactNode } from 'react';
import { cn } from '@/lib/utils';

export type TPageIntroAlignment = 'left' | 'center';

interface IPageIntroProps {
  title: string;
  eyebrow?: string;
  description?: ReactNode;
  actions?: ReactNode;
  alignment?: TPageIntroAlignment;
  className?: string;
}

export function PageIntro({
  title,
  eyebrow,
  description,
  actions,
  alignment = 'left',
  className,
}: IPageIntroProps): ReactElement {
  const isCentered = alignment === 'center';

  return (
    <header
      className={cn(
        'flex max-w-4xl flex-col gap-5',
        isCentered && 'mx-auto items-center text-center',
        className,
      )}
    >
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
          {eyebrow}
        </p>
      )}
      <h1 className="text-4xl font-semibold tracking-[-0.04em] text-content sm:text-5xl md:text-6xl">
        {title}
      </h1>
      {description && (
        <div className="max-w-2xl text-base leading-7 text-content-muted md:text-lg">
          {description}
        </div>
      )}
      {actions && (
        <div
          className={cn(
            'flex w-full flex-col gap-3 pt-1 sm:w-auto sm:flex-row sm:flex-wrap',
            isCentered && 'justify-center',
          )}
        >
          {actions}
        </div>
      )}
    </header>
  );
}
