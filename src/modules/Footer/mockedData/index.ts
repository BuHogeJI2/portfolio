import { isMobile } from 'react-device-detect';
import { ELightMode } from '../../../constants';

export const footer = {
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
};
