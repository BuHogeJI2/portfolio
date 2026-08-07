import clsx from 'clsx';

export const headerStyles = clsx(
  'fixed left-0 right-0 z-[999] w-full',
  'transition-colors duration-300',
);

export const navContainerStyles = clsx('relative pt-4 md:pt-5');

export const navStyles = clsx(
  'rounded-card border border-line/70 bg-surface/75 px-4 py-3 shadow-surface backdrop-blur-xl',
  'dark:border-line/10',
);

export const desktopNavStyles = clsx('hidden md:block');

export const desktopNavContentStyles = clsx(
  'grid grid-cols-[auto_1fr_auto] items-center gap-6',
);

export const navListStyles = clsx(
  'mx-auto flex items-center gap-2 rounded-control border border-line/70 bg-surface-subtle/80 px-3 py-2',
  'dark:border-line/10',
);

export const navListItemStyles = clsx('list-none');

export const navLinkStyles = clsx(
  'relative rounded-control px-4 py-2 text-sm font-medium transition duration-300',
  'hover:bg-surface hover:text-content',
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-canvas',
);

export const navLinkActiveStyles = clsx(
  'border border-accent/20 bg-accent/10 text-content shadow-sm',
);

export const navLinkInactiveStyles = clsx('text-content-muted');

export const mobileMenuButtonStyles = clsx(
  'flex items-center gap-2',
  'rounded-control border border-line/70 bg-surface-subtle/80 px-4 py-2 text-sm font-medium text-content shadow-sm backdrop-blur',
  'transition duration-300 hover:bg-surface dark:border-line/10 md:hidden',
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-canvas',
);

export const mobileMenuIconStyles = clsx('h-4 w-4 text-content');

export const mobileMenuStyles = clsx('mt-4 md:hidden');

export const mobileMenuListStyles = clsx(
  'space-y-2 rounded-card border border-line/70 bg-surface/90 p-4 shadow-surface backdrop-blur-xl',
  'dark:border-line/10',
);

export const mobileMenuItemStyles = clsx();

export const mobileNavLinkStyles = clsx(
  'block rounded-2xl px-4 py-3 text-sm font-medium transition-all duration-300',
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus',
);

export const mobileNavLinkActiveStyles = clsx(
  'bg-accent/10 text-content shadow-sm',
);

export const mobileNavLinkInactiveStyles = clsx('text-content-muted');

// NavbarActionButton styles
export const actionButtonStyles = clsx(
  'rounded-control border border-line/70 bg-surface-subtle/80 p-2 text-content shadow-sm backdrop-blur transition duration-300',
  'hover:bg-surface dark:border-line/10',
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-canvas',
);

export const actionButtonContentStyles = clsx(
  'flex h-6 w-6 items-center justify-center',
);

export const mobileNavActionButtonContainerStyles = clsx(
  'flex items-center justify-between gap-3 md:hidden',
);
