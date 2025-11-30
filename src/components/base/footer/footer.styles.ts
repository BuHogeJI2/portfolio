import clsx from 'clsx';

// Main footer container
export const footerStyles = clsx(
  'bg-gray-50 dark:bg-gray-900',
  'mt-16 md:mt-16',
  'relative',
  'animate-fade-in-up',
);

// Top border separator
export const footerTopBorderStyles = clsx(
  'absolute top-0 left-0 right-0',
  'h-px',
  'bg-gradient-to-r',
  'from-transparent via-gray-300 dark:via-gray-700 to-transparent',
);

// Container with padding - matches Container component max-width
export const footerContainerStyles = clsx(
  'mx-auto w-full',
  'max-w-6xl',
  'px-4 sm:px-6 lg:px-8',
  'py-8 md:py-12',
);

// Responsive grid layout
export const footerGridStyles = clsx(
  'grid grid-cols-2',
  'sm:grid-cols-2',
  'lg:grid-cols-4',
  'gap-8 md:gap-12',
  'mb-8',
);

// Footer section container
export const footerSectionStyles = clsx('flex flex-col', 'space-y-4');

// Navigation and Connect sections (1 column each on mobile, side by side)
export const footerSectionTwoColStyles = clsx('flex flex-col', 'space-y-4');

// Contact & Resources and About sections (full width on mobile)
export const footerSectionFullWidthStyles = clsx(
  'flex flex-col',
  'space-y-4',
  'col-span-2 sm:col-span-1',
);

// Section title
export const footerSectionTitleStyles = clsx(
  'text-base font-semibold',
  'text-gray-900 dark:text-gray-100',
  'mb-2',
);

// Navigation list
export const footerNavListStyles = clsx('flex flex-col', 'space-y-2');

// Navigation item
export const footerNavItemStyles = clsx('list-none');

// Navigation link
export const footerNavLinkStyles = clsx(
  'flex items-center gap-2',
  'text-sm',
  'text-gray-600 dark:text-gray-400',
  'hover:text-primary-default dark:hover:text-primary-dark',
  'transition-all duration-300 ease-in-out',
  'hover:translate-x-1',
  'group',
);

// Navigation icon
export const footerNavIconStyles = clsx(
  'w-4 h-4',
  'text-gray-500 dark:text-gray-500',
  'group-hover:text-primary-default dark:group-hover:text-primary-dark',
  'transition-colors duration-300',
);

// Social links list
export const footerSocialListStyles = clsx('flex flex-col', 'space-y-2');

// Social item
export const footerSocialItemStyles = clsx('list-none');

// Social link
export const footerSocialLinkStyles = clsx(
  'flex items-center gap-2',
  'text-sm',
  'text-gray-600 dark:text-gray-400',
  'hover:text-primary-default dark:hover:text-primary-dark',
  'transition-all duration-300 ease-in-out',
  'hover:translate-x-1',
  'group',
);

// Social icon
export const footerSocialIconStyles = clsx(
  'w-4 h-4',
  'text-gray-500 dark:text-gray-500',
  'group-hover:text-primary-default dark:group-hover:text-primary-dark',
  'transition-colors duration-300',
  'group-hover:scale-110',
);

// Contact info container
export const footerContactInfoStyles = clsx(
  'flex flex-col',
  'space-y-2',
  'mb-4',
);

// Contact link
export const footerContactLinkStyles = clsx(
  'flex items-center gap-2',
  'text-sm',
  'text-gray-600 dark:text-gray-400',
  'hover:text-primary-default dark:hover:text-primary-dark',
  'transition-all duration-300 ease-in-out',
  'hover:translate-x-1',
  'group',
);

// Tagline
export const footerTaglineStyles = clsx(
  'text-sm',
  'text-gray-600 dark:text-gray-400',
  'leading-relaxed',
  'mb-4',
);

// Availability container
export const footerAvailabilityStyles = clsx('mt-2');

// Availability badge
export const footerAvailabilityBadgeStyles = clsx(
  'inline-block',
  'px-3 py-1',
  'text-xs font-medium',
  'rounded-full',
  'bg-green-100 dark:bg-green-900/30',
  'text-green-800 dark:text-green-300',
  'border border-green-200 dark:border-green-800',
);

// Bottom section
export const footerBottomStyles = clsx(
  'pt-6',
  'border-t border-gray-200 dark:border-gray-800',
  'mt-8',
);

// Copyright text
export const footerCopyrightStyles = clsx(
  'text-center',
  'text-sm',
  'text-gray-600 dark:text-gray-400',
);

// Built with section
export const footerBuiltWithStyles = clsx(
  'text-xs',
  'text-gray-500 dark:text-gray-500',
  'mt-2',
);

// Built with link
export const footerBuiltWithLinkStyles = clsx(
  'text-primary-default dark:text-primary-dark',
  'hover:underline',
  'transition-colors duration-200',
);
