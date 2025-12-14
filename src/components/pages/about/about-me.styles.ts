import clsx from 'clsx';

export const aboutMeContainerStyles = clsx(
  'flex w-full flex-col gap-8',
  'md:gap-12 md:pt-12',
);

export const aboutMeContentStyles = clsx(
  'flex w-full flex-col-reverse gap-6',
  'md:flex-row md:gap-8',
);

export const aboutMeDescriptionStyles = clsx(
  'flex w-full flex-col gap-4',
  'md:w-3/4',
);

export const aboutMeTextStyles = clsx(
  'text-lg text-info-default dark:text-white',
);

export const aboutMeHighlightStyles = clsx(
  'font-bold text-secondary-default dark:text-secondary-dark',
);

export const aboutMePhotosContainerStyles = clsx('mx-auto w-full');

export const aboutMeKeyPointsContainerStyles = clsx(
  'flex w-full flex-row gap-4 items-center justify-center',
  'md:w-1/4 md:flex-col',
);

export const aboutMeKeyPointStyles = clsx(
  'w-fit flex flex-col gap-2 rounded-lg dark:bg-primary-dark/70 bg-primary-default p-4 text-white align-center justify-center',
);

export const aboutMeKeyPointTitleStyles = clsx(
  'text-4xl font-bold text-center',
);

export const aboutMeKeyPointDescriptionStyles = clsx('text-center text-sm');
