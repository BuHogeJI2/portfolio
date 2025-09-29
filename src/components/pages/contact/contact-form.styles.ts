import clsx from 'clsx';

export const labelStyles = clsx(
  'mb-2 block text-sm font-medium',
  'text-gray-700 dark:text-gray-300',
);

export const inputStyles = clsx(
  'w-full rounded-md border px-3 py-2 shadow-sm',
  'placeholder-gray-400',
  'focus:border-primary-default focus:outline-none focus:ring-2 focus:ring-primary-default',
  'disabled:cursor-not-allowed disabled:opacity-50',
  'border-gray-300',
  'dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500',
);

export const textareaStyles = clsx(inputStyles, 'resize-vertical');

export const buttonStyles = clsx(
  'flex w-full justify-center rounded-md border border-transparent',
  'px-4 py-2 text-sm font-medium text-white shadow-sm',
  'bg-primary-default dark:bg-primary-dark',
  'disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100',
  'hover:bg-primary-default/90 dark:hover:bg-primary-dark/90',
  'transition-colors duration-200',
);

export const successMessageStyles = clsx(
  'rounded-md p-4',
  'bg-green-50 text-green-800',
  'dark:bg-green-900 dark:text-green-200',
);

export const errorMessageStyles = clsx(
  'rounded-md p-4',
  'bg-red-50 text-red-800',
  'dark:bg-red-900 dark:text-red-200',
);
