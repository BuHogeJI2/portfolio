import clsx from 'clsx';

export const imageContainerStyles = clsx('relative block');

export const imageStyles = clsx(
  'w-full h-full object-cover transition-opacity duration-300 relative z-10',
);

export const imageSkeletonStyles = clsx(
  'absolute inset-0 w-full h-full z-0',
  'bg-gray-300 dark:bg-gray-700',
  'animate-pulse',
  'flex items-center justify-center',
);
