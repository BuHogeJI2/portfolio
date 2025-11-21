import clsx from 'clsx';

export const aboutMeContainerStyles = clsx(
  'flex w-full flex-col-reverse items-center justify-between gap-8',
  'md:flex-row md:gap-12 md:py-12'
);

export const aboutMeContentStyles = clsx(
  'flex w-full flex-col-reverse gap-4',
  'md:flex-row'
);

export const aboutMeDescriptionStyles = clsx(
  'flex w-full flex-col gap-4',
  'md:w-1/2 md:flex-1'
);

export const aboutMeTextStyles = clsx(
  'text-lg text-info-default dark:text-white',
);

export const aboutMeHighlightStyles = clsx(
  'font-bold text-secondary-default dark:text-secondary-dark',
);

export const aboutMePhotosContainerStyles = clsx(
  'flex flex-row items-center justify-center gap-4',
  'md:flex-col'
);

export const aboutMePhotoWrapperStyles = clsx('h-24 w-24 rounded-lg');

export const aboutMePhotoStyles = clsx('h-24 w-24 rounded-lg object-cover');

export const aboutMePhotoSeparatorStyles = clsx(
  'hidden text-lg text-secondary-default dark:text-white',
  'md:block'
);

export const aboutMeKeyPointsContainerStyles = clsx('flex flex-row md:justify-start justify-center md:flex-col gap-4');

export const aboutMeKeyPointStyles = clsx(
  'flex flex-row md:flex-col items-center justify-center md:gap-2 rounded-lg dark:bg-primary-dark/70 bg-primary-default p-4 text-white',
);

export const aboutMeKeyPointTitleStyles = clsx('text-4xl font-bold');

export const aboutMeKeyPointDescriptionStyles = clsx('text-center text-sm');
