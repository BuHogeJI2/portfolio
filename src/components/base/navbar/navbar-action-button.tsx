import { ENavbarActionButtonType } from './navbar.types';
import { useThemeToggler } from './use-theme-toggler';
import { useActionButtonContent } from './use-action-button-content';

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
      className="text-secondary-default dark:text-secondary-dark rounded-full border border-slate-200/50 bg-white/60 p-2 shadow-lg backdrop-blur-md transition-all duration-300 hover:bg-white/80 dark:border-slate-700/50 dark:bg-slate-900/60 dark:hover:border-slate-700/50 dark:hover:bg-slate-900/80"
      onClick={
        type === ENavbarActionButtonType.THEME_TOGGLE
          ? handleThemeSwitch
          : onClick
      }
    >
      <div className="flex h-6 w-6 items-center justify-center">{content}</div>
    </button>
  );
}
