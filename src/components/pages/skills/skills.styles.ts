import clsx from 'clsx';

export const containerStyles = clsx('relative flex flex-col gap-8 md:gap-12');

export const domainTitleStyles = clsx(
  'text-xl md:text-2xl font-bold',
  'text-primary-default dark:text-white',
);

export const domainDescriptionStyles = clsx(
  'mt-2 text-sm md:text-base',
  'text-secondary-default dark:text-white',
);

export const skillsContainerStyles = clsx('mt-4 flex flex-row flex-wrap gap-2 md:gap-4');

export const skillItemStyles = clsx(
  'group flex w-fit cursor-pointer flex-row items-center gap-2 rounded-xl px-2 py-1 md:px-4 md:py-2',
  'transition-all duration-300 ease-in-out',
  'bg-secondary-default/10 hover:scale-105 hover:shadow hover:shadow-primary-default/20',
  'dark:bg-blue-500/20 dark:hover:bg-blue-500/30',
);

export const skillIconStyles = clsx(
  'md:h-8 md:w-8 h-4 w-4 transition-transform duration-300 ease-in-out',
  'group-hover:rotate-12',
);

export const skillImageStyles = clsx('h-full w-full object-contain');

export const skillNameStyles = clsx(
  'text-sm md:text-base font-bold',
  'text-primary-default dark:text-white',
);

export const tooltipStyles = clsx(
  'pointer-events-none fixed z-50 max-w-xs rounded-lg px-3 py-2 text-xs md:text-sm shadow-lg',
  'bg-gray-800 text-white',
);

export const tooltipTitleStyles = clsx('mb-1 font-semibold');

export const tooltipDescriptionStyles = clsx('text-gray-300');

export const tooltipArrowStyles = clsx(
  'absolute left-1/2 top-full h-0 w-0 -translate-x-1/2 transform',
  'border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800',
);
