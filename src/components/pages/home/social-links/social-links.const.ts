export interface ISocialLinkData {
  href: string;
  label: string;
  iconType: 'github' | 'linkedin' | 'upwork';
}

export const socialLinksData: ISocialLinkData[] = [
  {
    href: 'https://github.com/BuHogeJI2',
    label: 'GitHub',
    iconType: 'github',
  },
  {
    href: 'https://www.linkedin.com/in/d-demidovich/',
    label: 'LinkedIn',
    iconType: 'linkedin',
  },
  {
    href: 'https://www.upwork.com/freelancers/~0172bfbb89bd2d6d6b',
    label: 'Upwork',
    iconType: 'upwork',
  },
];
