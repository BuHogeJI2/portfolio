import { ReactElement, ReactNode } from 'react';
import { cn } from '@/lib/utils';

export type TSectionHeadingAlignment = 'left' | 'center';

interface ISectionHeadingProps {
  title: string;
  titleId?: string;
  eyebrow?: string;
  description?: ReactNode;
  alignment?: TSectionHeadingAlignment;
  className?: string;
}

export function SectionHeading({
  title,
  titleId,
  eyebrow,
  description,
  alignment = 'left',
  className,
}: ISectionHeadingProps): ReactElement {
  const isCentered = alignment === 'center';

  return (
    <div
      className={cn(
        'flex max-w-3xl flex-col gap-3',
        isCentered && 'mx-auto items-center text-center',
        className,
      )}
    >
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
          {eyebrow}
        </p>
      )}
      <h2
        id={titleId}
        className="text-3xl font-semibold tracking-tight text-content md:text-5xl"
      >
        {title}
      </h2>
      {description && (
        <div className="max-w-2xl text-base leading-7 text-content-muted md:text-lg">
          {description}
        </div>
      )}
    </div>
  );
}
