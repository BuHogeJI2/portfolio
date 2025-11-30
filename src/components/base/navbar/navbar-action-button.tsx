import { useTheme } from '@/contexts/theme-context';
import { actionButtonContentStyles, actionButtonStyles } from './navbar.styles';
import { ENavbarActionButtonType } from './navbar.types';
import { useActionButtonContent } from './use-action-button-content';

interface INavbarActionButtonProps {
  type: ENavbarActionButtonType;
  onClick?: () => void;
}

export function NavbarActionButton({
  type,
  onClick,
}: INavbarActionButtonProps) {
  const { theme, toggleTheme } = useTheme();
  const content = useActionButtonContent(type, theme);

  return (
    <button
      className={actionButtonStyles}
      onClick={
        type === ENavbarActionButtonType.THEME_TOGGLE ? toggleTheme : onClick
      }
    >
      <div className={actionButtonContentStyles}>{content}</div>
    </button>
  );
}
