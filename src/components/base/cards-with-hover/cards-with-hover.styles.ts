import clsx from 'clsx';

export const cardsContainerStyles = clsx(
  'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2',
);

export const cardItemStyles = clsx('group relative block h-full w-full p-2');

export const hoverBackgroundStyles = clsx(
  'absolute inset-0 hidden h-full w-full rounded-3xl bg-primary-default dark:bg-primary-dark md:block',
);

export const cardStyles = clsx(
  'relative z-20 flex h-full w-full flex-col overflow-hidden rounded-2xl border border-transparent bg-gray-200 group-hover:border-slate-700/20 dark:border-white/[0.2] dark:bg-[#27272A] dark:group-hover:border-slate-700',
);

export const cardContentStyles = clsx('relative z-50');

export const cardImageContainerStyles = clsx('relative w-full');

export const cardImageStyles = clsx(
  'h-100 w-full rounded-t-lg object-cover transition-opacity duration-300 relative z-10',
);

export const cardImageSkeletonStyles = clsx(
  'absolute inset-0 h-100 w-full rounded-t-lg z-0',
  'bg-gray-300 dark:bg-gray-700',
  'animate-pulse',
  'flex items-center justify-center',
);

export const cardTitleStyles = clsx(
  ' text-2xl md:text-lg font-bold tracking-wide text-info-default dark:text-zinc-100',
);

export const cardDescriptionContainerStyles = clsx('px-4 py-2');

export const cardDescriptionStyles = clsx(
  'text-sm leading-relaxed tracking-wide text-info-default dark:text-zinc-400',
);

export const cardTechnologiesStyles = clsx('flex flex-wrap gap-2 p-4');

export const technologyTagStyles = clsx(
  'inline-block rounded-full border border-primary-default px-2 md:px-3 py-1 text-xs font-medium text-primary-default dark:border-primary-dark/50 dark:text-primary-dark/80',
);

export const cardLinkContainerStyles = clsx(
  'mt-auto flex items-center px-4 py-2 md:p-4',
);

export const cardLinkStyles = clsx(
  'inline-flex items-center text-sm font-medium text-primary-default transition-colors duration-200 hover:text-blue-300 group-hover:underline dark:text-primary-dark',
);

export const cardLinkIconStyles = clsx(
  'ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1',
);

export const readMoreButtonStyles = clsx(
  'flex items-center md:hidden block',
  'text-primary-default dark:text-primary-dark underline underline-offset-4',
  'text-sm',
);
