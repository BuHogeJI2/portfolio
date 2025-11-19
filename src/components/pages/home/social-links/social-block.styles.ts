import clsx from 'clsx';

export const socialBlockContainerStyles = clsx(
  'flex h-full min-h-[200px] w-full flex-1 flex-col items-center gap-4 pt-24',
  'md:mx-auto md:w-fit md:w-full md:flex-row md:justify-center md:pt-4',
);

export const socialBlockItemStyles = clsx(
  'flex w-full items-center gap-4 rounded-full border border-slate-200 bg-white px-8 py-4 shadow-lg',
  'hover:cursor-pointer hover:bg-slate-50',
  'dark:border-slate-700/50 dark:bg-slate-900/60 dark:backdrop-blur-md dark:hover:bg-slate-800/50',
  'transition-all duration-300 ease-in-out',
  'hover:scale-105 hover:shadow hover:shadow-primary-default/20',
  'dark:hover:bg-slate-800/50 dark:hover:shadow dark:hover:shadow-primary-default/20',
  'md:px-10 md:py-6 md:w-fit',
);

export const socialBlockItemContentStyles = clsx('flex items-center gap-4');

export const socialBlockItemLabelStyles = clsx(
  'text-md font-medium text-info-default dark:text-info-dark',
);

export const socialBlockItemIconStyles = clsx('h-5 w-5', 'md:h-6 md:w-6');
