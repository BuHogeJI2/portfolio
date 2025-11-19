import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaWordpressSimple,
  FaFilePdf,
  FaDownload,
} from 'react-icons/fa';
import { ReactElement } from 'react';
import clsx from 'clsx';

interface ISocialLink {
  href: string;
  icon: ReactElement;
  label: string;
}

const socialBlockClassName = clsx(
  'text-secondary-default dark:text-secondary-dark',
  'h-5 w-5',
  'md:h-6 md:w-6',
);

const socialLinkClassName = clsx(
  'h-6 w-6',
  'md:text-gray-600 dark:md:text-gray-400',
  'text-secondary-default dark:text-secondary-dark',
  'hover:text-primary-default dark:hover:text-primary-dark',
  'transition-all duration-300 ease-in-out',
  'hover:scale-105',
  'md:hover:scale-105',
);

export const socialLinks: ISocialLink[] = [
  {
    href: 'https://github.com/BuHogeJI2',
    icon: <FaGithub className={socialLinkClassName} />,
    label: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/d-demidovich/',
    icon: <FaLinkedin className={socialLinkClassName} />,
    label: 'LinkedIn',
  },
];

export const socialBlocks: ISocialLink[] = [
  {
    href: '/contact',
    icon: <FaEnvelope className={socialBlockClassName} />,
    label: 'Contact me here',
  },
  {
    href: '/', // todo: fix link
    icon: <FaWordpressSimple className={socialBlockClassName} />, // todo: fix icon
    label: 'Hire me on UpWork',
  },
  {
    href: '/', // todo: fix link
    icon: <FaDownload className={socialBlockClassName} />,
    label: 'Download CV',
  },
];
