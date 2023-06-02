import { useTranslation } from 'react-i18next';

type TMenuItem = {
  id: number;
  page: string;
  link: string;
};

export default function useMenuItems(): Array<TMenuItem> {
  const [t] = useTranslation();

  return [
    {
      id: 1,
      page: t('menu.about'),
      link: '/portfolio',
    },
    {
      id: 2,
      page: t('menu.skills'),
      link: '/resume',
    },
    {
      id: 3,
      page: t('menu.contact'),
      link: '/contact',
    },
    {
      id: 4,
      page: t('menu.tools'),
      link: '/tools',
    },
  ];
}
