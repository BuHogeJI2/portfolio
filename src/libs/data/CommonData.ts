import { isMobile } from 'react-device-detect';
import { useTranslation } from 'react-i18next';
import { ELightMode } from './Constants';

export const commonData = {
  copyright: `Copyright © 2023 ${isMobile ? '' : 'Dmitry Demidovich'}`,
  socialLinks: (lightMode?: ELightMode) => [
    {
      name: 'Github',
      icon:
        lightMode === ELightMode.LIGHT
          ? '/portfolio/images/svg/github-light.svg'
          : '/portfolio/images/svg/github-dark.svg',
      link: 'https://github.com/BuHogeJI2',
    },
    {
      name: 'Linkedin',
      icon:
        lightMode === ELightMode.LIGHT
          ? '/portfolio/images/svg/linkedin-light.svg'
          : '/portfolio/images/svg/linkedin-dark.svg',
      link: 'https://www.linkedin.com/in/d-demidovich/',
    },
    {
      name: 'E-mail',
      icon:
        lightMode === ELightMode.LIGHT
          ? '/portfolio/images/svg/mail-light.svg'
          : '/portfolio/images/svg/mail-dark.svg',
      link: 'mailto:dzmitrydziamidovich@gmail.com',
    },
  ],
  menuIcons: {
    burgerLight: '/portfolio/images/burger-light.png',
    burgerDark: '/portfolio/images/burger-dark.png',
    closeDark: '/portfolio/images/close-dark.png',
    closeLight: '/portfolio/images/close-white.png',
  },
  skills: [
    'TypeScript',
    'React.js',
    'Next.js',
    'Jest',
    'ESLint',
    'Apollo Graphql',
    'Graphql',
    'Git',
    '_lodash',
    'HTML',
    'CSS',
    'npm',
    'Webpack',
    'styled-components',
    'REST',
    'i18next',
    'Bit',
  ],
};

type TMenuItem = {
  page: string;
  link: string;
};

export function useMenuItems(): Array<TMenuItem> {
  const [t] = useTranslation();

  return [
    {
      page: t('menu.about'),
      link: '/portfolio',
    },
    {
      page: t('menu.skills'),
      link: '/skills',
    },
    {
      page: t('menu.tools'),
      link: '/tools',
    },
  ];
}
