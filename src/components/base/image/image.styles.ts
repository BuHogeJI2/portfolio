import clsx from 'clsx';

export const imageContainerStyles = clsx('relative block');

export const imageStyles = clsx(
  'relative z-10 h-full w-full object-cover',
);

export const imageFallbackStyles = clsx(
  'flex w-full items-center justify-center',
  'border border-line/70 bg-surface-subtle dark:border-line/10',
);
