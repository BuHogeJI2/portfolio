import clsx from 'clsx';

export const headerStyles = clsx('fixed left-0 right-0 z-[999] w-full');

export const navContainerStyles = clsx('relative');

export const navStyles = clsx('flex items-center justify-center py-4 pt-12');

export const desktopNavStyles = clsx('hidden w-full md:block');

export const desktopNavContentStyles = clsx(
  'flex items-center justify-between gap-4',
);

export const navListStyles = clsx(
  'flex flex-1 items-center justify-between rounded-full border border-slate-200 bg-white px-8 py-2 shadow-lg dark:border-slate-700/50 dark:bg-slate-900/60 dark:backdrop-blur-md',
);

export const navLinkStyles = clsx(
  'relative rounded-full px-8 py-2 text-base font-medium transition-all duration-300 hover:bg-slate-100 dark:hover:bg-slate-800/50',
);

export const navLinkActiveStyles = clsx(
  'text-primary-default dark:text-primary-dark',
);

export const navLinkInactiveStyles = clsx(
  'text-info-default dark:text-info-dark',
);

export const mobileMenuButtonStyles = clsx(
  'block rounded-full border border-slate-200 bg-white p-2 shadow-lg dark:border-slate-700/50 dark:bg-slate-900/60 dark:backdrop-blur-md md:hidden',
);

export const mobileMenuIconStyles = clsx(
  'text-secondary-DEFAULT h-6 w-6 dark:text-secondary-dark',
);

export const mobileMenuStyles = clsx('md:hidden');

export const mobileMenuListStyles = clsx(
  'rounded-lg border border-slate-200 bg-white p-4 shadow-lg dark:border-slate-700/50 dark:bg-slate-900/60 dark:backdrop-blur-md',
);

export const mobileMenuItemStyles = clsx('mb-2');

export const mobileNavLinkStyles = clsx(
  'block rounded-lg px-8 py-2 text-base font-medium transition-all duration-300',
);

export const mobileNavLinkActiveStyles = clsx(
  'text-primary-DEFAULT bg-slate-100 dark:bg-slate-800 dark:text-primary-dark',
);

export const mobileNavLinkInactiveStyles = clsx(
  'text-secondary-DEFAULT hover:text-primary-DEFAULT hover:bg-slate-50 dark:text-secondary-dark dark:hover:bg-slate-800/50 dark:hover:text-primary-dark',
);

// NavbarActionButton styles
export const actionButtonStyles = clsx(
  'text-secondary-default dark:text-secondary-dark rounded-full border border-slate-200/50 bg-white/60 p-2 shadow-lg backdrop-blur-md transition-all duration-300 hover:bg-white/80 dark:border-slate-700/50 dark:bg-slate-900/60 dark:hover:border-slate-700/50 dark:hover:bg-slate-900/80',
);

export const actionButtonContentStyles = clsx(
  'flex h-6 w-6 items-center justify-center',
);
