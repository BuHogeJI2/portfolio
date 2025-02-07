import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { ReactElement } from 'react';

interface ISocialLink {
  href: string;
  icon: ReactElement;
  label: string;
}

const socialLinkClassName =
  'hover:text-primary-default dark:hover:text-primary-dark h-6 w-6 text-gray-600 dark:text-gray-400';

export const socialLinks: ISocialLink[] = [
  {
    href: 'https://https://github.com/BuHogeJI2',
    icon: <FaGithub className={socialLinkClassName} />,
    label: 'GitHub',
  },
  {
    href: 'https://linkedin.com/in/YOUR_USERNAME',
    icon: <FaLinkedin className={socialLinkClassName} />,
    label: 'LinkedIn',
  },
];
