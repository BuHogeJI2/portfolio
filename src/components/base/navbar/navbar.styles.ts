import clsx from 'clsx';

export const headerStyles = clsx(
  'fixed left-0 right-0 z-[999] w-full',
  'transition-colors duration-300',
);

export const navContainerStyles = clsx('relative pt-4 md:pt-5');

export const navStyles = clsx(
  'rounded-[1.75rem] border border-white/70 bg-white/68 px-4 py-3 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur-xl',
  'dark:border-white/10 dark:bg-slate-950/45 dark:shadow-[0_20px_60px_rgba(2,6,23,0.4)]',
);

export const desktopNavStyles = clsx('hidden md:block');

export const desktopNavContentStyles = clsx(
  'grid grid-cols-[auto_1fr_auto] items-center gap-6',
);

export const navListStyles = clsx(
  'mx-auto flex items-center gap-2 rounded-full border border-slate-200/80 bg-slate-50/85 px-3 py-2',
  'dark:border-white/10 dark:bg-white/5',
);

export const navListItemStyles = clsx('list-none');

export const navLinkStyles = clsx(
  'relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300',
  'hover:bg-white hover:text-slate-900 dark:hover:bg-white/10 dark:hover:text-white',
);

export const navLinkActiveStyles = clsx(
  'border border-primary-default/20 bg-primary-default/12 text-slate-950 shadow-sm dark:border-primary-dark/20 dark:bg-white/10 dark:text-white',
);

export const navLinkInactiveStyles = clsx('text-slate-600 dark:text-slate-300');

export const mobileMenuButtonStyles = clsx(
  'flex items-center gap-2',
  'rounded-full border border-slate-200/80 bg-slate-50/85 px-4 py-2 text-sm font-medium shadow-sm backdrop-blur',
  'dark:border-white/10 dark:bg-white/5 md:hidden',
);

export const mobileMenuIconStyles = clsx(
  'h-4 w-4 text-slate-700 dark:text-slate-200',
);

export const mobileMenuStyles = clsx('mt-4 md:hidden');

export const mobileMenuListStyles = clsx(
  'space-y-2 rounded-[1.5rem] border border-white/70 bg-white/78 p-4 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur-xl',
  'dark:border-white/10 dark:bg-slate-950/65',
);

export const mobileMenuItemStyles = clsx();

export const mobileNavLinkStyles = clsx(
  'block rounded-2xl px-4 py-3 text-sm font-medium transition-all duration-300',
);

export const mobileNavLinkActiveStyles = clsx(
  'bg-primary-default/12 text-slate-950 shadow-sm dark:bg-white/10 dark:text-white',
);

export const mobileNavLinkInactiveStyles = clsx(
  'text-slate-600 dark:text-slate-300',
);

// NavbarActionButton styles
export const actionButtonStyles = clsx(
  'rounded-full border border-slate-200/80 bg-slate-50/85 p-2 text-slate-700 shadow-sm backdrop-blur transition-all duration-300',
  'hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-slate-100 dark:hover:bg-white/10',
);

export const actionButtonContentStyles = clsx(
  'flex h-6 w-6 items-center justify-center',
);

export const mobileNavActionButtonContainerStyles = clsx(
  'flex items-center justify-between gap-3 md:hidden',
);
