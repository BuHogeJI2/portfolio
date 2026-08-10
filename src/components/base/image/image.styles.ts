import clsx from 'clsx';

export const imageContainerStyles = clsx('relative block');

export const imageStyles = clsx(
  'w-full h-full object-cover transition-opacity duration-300 relative z-10',
);

export const imageSkeletonStyles = clsx(
  'absolute inset-0 w-full h-full z-0',
  'border border-line/70 bg-surface-subtle dark:border-line/10',
  'animate-pulse motion-reduce:animate-none',
  'flex items-center justify-center',
);
