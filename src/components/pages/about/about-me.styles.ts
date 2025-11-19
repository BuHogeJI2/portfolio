import clsx from 'clsx';

export const aboutMeContainerStyles = clsx(
  'flex w-full flex-row items-center justify-between gap-12 py-12',
);

export const aboutMeContentStyles = clsx('flex flex-row gap-4');

export const aboutMeDescriptionStyles = clsx('flex-1/2 flex flex-col gap-4');

export const aboutMeTextStyles = clsx(
  'text-lg text-info-default dark:text-white',
);

export const aboutMeHighlightStyles = clsx(
  'font-bold text-secondary-default dark:text-secondary-dark',
);

export const aboutMePhotosContainerStyles = clsx(
  'flex flex-col items-center justify-center gap-4',
);

export const aboutMePhotoWrapperStyles = clsx('h-24 w-24 rounded-lg');

export const aboutMePhotoStyles = clsx('h-24 w-24 rounded-lg object-cover');

export const aboutMePhotoSeparatorStyles = clsx(
  'text-lg text-secondary-default dark:text-white',
);

export const aboutMeKeyPointsContainerStyles = clsx('flex flex-col gap-4');

export const aboutMeKeyPointStyles = clsx(
  'flex flex-col items-center justify-center gap-2 rounded-lg bg-primary-default p-4 text-white',
);

export const aboutMeKeyPointTitleStyles = clsx('text-4xl font-bold');

export const aboutMeKeyPointDescriptionStyles = clsx('text-center text-sm');
