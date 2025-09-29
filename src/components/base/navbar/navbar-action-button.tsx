import { ENavbarActionButtonType } from './navbar.types';
import { useThemeToggler } from './use-theme-toggler';
import { useActionButtonContent } from './use-action-button-content';
import { actionButtonStyles, actionButtonContentStyles } from './navbar.styles';

interface INavbarActionButtonProps {
  type: ENavbarActionButtonType;
  onClick?: () => void;
}

export function NavbarActionButton({
  type,
  onClick,
}: INavbarActionButtonProps) {
  const { theme, handleThemeSwitch } = useThemeToggler();
  const content = useActionButtonContent(type, theme);

  return (
    <button
      className={actionButtonStyles}
      onClick={
        type === ENavbarActionButtonType.THEME_TOGGLE
          ? handleThemeSwitch
          : onClick
      }
    >
      <div className={actionButtonContentStyles}>{content}</div>
    </button>
  );
}
