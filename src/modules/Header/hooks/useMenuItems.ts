import { useTranslation } from 'react-i18next';

type TMenuItem = {
  page: string;
  link: string;
};

export default function useMenuItems(): Array<TMenuItem> {
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
