import clsx from 'clsx';

export const labelStyles = clsx(
  'mb-2 block text-sm font-semibold text-content',
);

export const inputStyles = clsx(
  'w-full rounded-control border border-line/70 bg-surface-subtle/80 px-4 py-3 text-content shadow-sm',
  'placeholder:text-content-subtle dark:border-line/10',
  'focus:border-accent focus:outline-none focus:ring-2 focus:ring-focus focus:ring-offset-2 focus:ring-offset-surface',
  'disabled:cursor-not-allowed disabled:opacity-60',
);

export const textareaStyles = clsx(inputStyles, 'resize-y');

export const buttonStyles = clsx(
  'flex min-h-12 w-full items-center justify-center rounded-control bg-content px-6 py-3 text-sm font-semibold text-content-inverse shadow-sm',
  'transition duration-300 hover:-translate-y-0.5 hover:bg-content/90',
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-surface',
  'disabled:cursor-not-allowed disabled:translate-y-0 disabled:opacity-60',
);

export const successMessageStyles = clsx(
  'rounded-control border border-green-600/20 bg-green-50 p-4 text-green-900',
  'dark:bg-green-950/40 dark:text-green-100',
);

export const errorMessageStyles = clsx(
  'rounded-control border border-red-600/20 bg-red-50 p-4 text-red-900',
  'dark:bg-red-950/40 dark:text-red-100',
);
