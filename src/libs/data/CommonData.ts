import { isMobile } from 'react-device-detect';

export const commonData = {
  copyright: `Copyright © 2023 ${isMobile ? '' : 'Dmitry Demidovich'}`,
  socialLinks: [
    {
      name: 'Linkedin',
      icon: '/images/svg/linkedin.svg',
      link: 'https://www.linkedin.com/in/d-demidovich/',
    },
    {
      name: 'Github',
      icon: '/images/svg/github.svg',
      link: 'https://github.com/BuHogeJI2',
    },
    {
      name: 'E-mail',
      icon: '/images/svg/mail.svg',
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
};
