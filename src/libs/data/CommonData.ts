import { isMobile } from 'react-device-detect';
import { ELightMode } from '../context/LightModeContext';

export const commonData = {
  copyright: `Copyright © 2023 ${isMobile ? '' : 'Dmitry Demidovich'}`,
  socialLinks: (lightMode?: ELightMode) => [
    {
      name: 'Github',
      icon:
        lightMode === ELightMode.LIGHT
          ? '/images/svg/github-light.svg'
          : '/images/svg/github-dark.svg',
      link: 'https://github.com/BuHogeJI2',
    },
    {
      name: 'Linkedin',
      icon:
        lightMode === ELightMode.LIGHT
          ? '/images/svg/linkedin-light.svg'
          : '/images/svg/linkedin-dark.svg',
      link: 'https://www.linkedin.com/in/d-demidovich/',
    },
    {
      name: 'E-mail',
      icon:
        lightMode === ELightMode.LIGHT
          ? '/images/svg/mail-light.svg'
          : '/images/svg/mail-dark.svg',
      link: 'mailto:dzmitrydziamidovich@gmail.com',
    },
  ],
  menuIcons: {
    burgerLight: '/images/burger-light.png',
    burgerDark: '/images/burger-dark.png',
    closeDark: '/images/close-dark.png',
    closeLight: '/images/close-white.png',
  },
  menuLinks: [
    {
      page: 'About',
      link: '/',
    },
    {
      page: 'Skills',
      link: '/skills',
    },
    {
      page: 'Contacts',
      link: '/contacts',
    },
  ],
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
  ],
};
