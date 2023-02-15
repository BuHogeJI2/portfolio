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
  menuLinks: [
    {
      page: 'Home',
      link: '/',
    },
    {
      page: 'Info',
      link: '/info',
    },
    {
      page: 'Contacts',
      link: '/contacts',
    },
  ],
};
