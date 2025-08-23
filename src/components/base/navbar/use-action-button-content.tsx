import { ENavbarActionButtonType, ETheme } from './navbar.types';

export function useActionButtonContent(
  type: ENavbarActionButtonType,
  theme: ETheme,
) {
  return type === ENavbarActionButtonType.LANGUAGE_TOGGLE ? (
    'EN'
  ) : (
    <img
      src={
        theme === ETheme.LIGHT
          ? '/icons/dark-mode.svg'
          : '/icons/light-mode.svg'
      }
      alt="Toggle theme"
      className="mx-auto my-auto h-3/4 w-3/4 dark:invert"
    />
  );
}
