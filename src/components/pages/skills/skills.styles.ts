import clsx from "clsx";

export const containerStyles = clsx('relative flex flex-col gap-12');

export const domainTitleStyles = clsx(
  'text-2xl font-bold',
  'text-primary-default dark:text-white',
);

export const domainDescriptionStyles = clsx(
  'mt-2 text-sm',
  'text-secondary-default dark:text-white',
);

export const skillsContainerStyles = clsx('mt-4 flex flex-row flex-wrap gap-4');

export const skillItemStyles = clsx(
  'group flex w-fit cursor-pointer flex-row items-center gap-2 rounded-xl px-4 py-2',
  'transition-all duration-300 ease-in-out',
  'hover:scale-105 hover:bg-blue-500/30 hover:shadow-lg',
  'dark:bg-blue-500/20',
);

export const skillIconStyles = clsx(
  'h-8 w-8 transition-transform duration-300 ease-in-out',
  'group-hover:rotate-12',
);

export const skillImageStyles = clsx('h-full w-full object-contain');

export const skillNameStyles = clsx(
  'text-base font-bold',
  'text-primary-default dark:text-white',
);

export const tooltipStyles = clsx(
  'pointer-events-none fixed z-50 max-w-xs rounded-lg px-3 py-2 text-sm shadow-lg',
  'bg-gray-800 text-white',
);

export const tooltipTitleStyles = clsx('mb-1 font-semibold');

export const tooltipDescriptionStyles = clsx('text-gray-300');

export const tooltipArrowStyles = clsx(
  'absolute left-1/2 top-full h-0 w-0 -translate-x-1/2 transform',
  'border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800',
);