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
  const isThemeToggle = type === ENavbarActionButtonType.THEME_TOGGLE;
  const label = isThemeToggle
    ? `Switch to ${theme === 'light' ? 'dark' : 'light'} theme`
    : 'Change language';

  return (
    <button
      type="button"
      className={actionButtonStyles}
      onClick={isThemeToggle ? toggleTheme : onClick}
      aria-label={label}
      title={label}
    >
      <div className={actionButtonContentStyles}>{content}</div>
    </button>
  );
}
