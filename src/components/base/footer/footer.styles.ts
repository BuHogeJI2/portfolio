import clsx from 'clsx';

export const footerStyles = clsx('relative z-10 mt-2 md:mt-3');

export const footerTopBorderStyles = clsx(
  'absolute top-0 left-0 right-0',
  'h-px',
  'bg-gradient-to-r',
  'from-transparent via-slate-300/80 to-transparent dark:via-white/10',
);

export const footerContainerStyles = clsx(
  'mx-auto w-full',
  'max-w-6xl',
  'px-4 sm:px-6 lg:px-8',
  'py-8 md:py-12',
);

export const footerGridStyles = clsx(
  'grid gap-8 rounded-[2rem] border border-white/70 bg-white/72 p-6 shadow-[0_22px_70px_rgba(15,23,42,0.08)] backdrop-blur-xl',
  'dark:border-white/10 dark:bg-white/5 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] md:gap-12 md:p-8',
);

export const footerSectionTwoColStyles = clsx('space-y-4');

export const footerSectionFullWidthStyles = clsx('space-y-5');

export const footerSectionTitleStyles = clsx(
  'text-xs font-semibold uppercase tracking-[0.24em]',
  'text-primary-default/80 dark:text-primary-dark/80',
);

export const footerNavListStyles = clsx('grid gap-3 sm:grid-cols-2');
export const footerNavItemStyles = clsx('list-none');
export const footerNavLinkStyles = clsx(
  'inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-slate-50/80 px-4 py-2 text-sm text-slate-600 transition-all duration-300',
  'hover:bg-white hover:text-slate-900 dark:border-white/10 dark:bg-slate-950/35 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white',
);

export const footerNavIconStyles = clsx('h-4 w-4');

export const footerSocialListStyles = clsx('flex flex-wrap gap-3');
export const footerSocialItemStyles = clsx('list-none');
export const footerSocialLinkStyles = clsx(
  'inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-slate-50/80 px-4 py-2 text-sm text-slate-600 transition-all duration-300',
  'hover:bg-white hover:text-slate-900 dark:border-white/10 dark:bg-slate-950/35 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white',
);

export const footerSocialIconStyles = clsx('h-4 w-4');

export const footerContactInfoStyles = clsx(
  'flex flex-col gap-3 sm:flex-row sm:flex-wrap',
);

export const footerContactLinkStyles = clsx(
  'inline-flex items-center justify-center gap-3 rounded-full border px-5 py-3 text-sm font-semibold transition-colors duration-300',
);

export const footerTaglineStyles = clsx(
  'max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300',
);

export const footerAvailabilityStyles = clsx('mt-2');

export const footerAvailabilityBadgeStyles = clsx(
  'inline-block',
  'px-3 py-1',
  'text-xs font-medium',
  'rounded-full',
  'bg-emerald-100 text-emerald-800 border border-emerald-200',
  'dark:bg-emerald-400/10 dark:text-emerald-200 dark:border-emerald-300/25',
);

export const footerBottomStyles = clsx(
  'mt-8 flex flex-col gap-3 border-t border-slate-200/80 pt-6 text-sm text-slate-500 dark:border-white/10 dark:text-slate-400 md:flex-row md:items-center md:justify-between',
);

export const footerCopyrightStyles = clsx('text-sm');

export const footerBuiltWithStyles = clsx(
  'text-xs',
  'text-slate-500 dark:text-slate-400',
);

export const footerBuiltWithLinkStyles = clsx(
  'text-primary-default dark:text-primary-dark/90',
  'hover:underline',
  'transition-colors duration-200',
);
