import { useCallback, useState } from 'react';
import { ETheme } from './navbar.types';

export function useThemeToggler() {
  const [theme, setTheme] = useState<ETheme>(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark')
        ? ETheme.DARK
        : ETheme.LIGHT;
    }

    return ETheme.LIGHT;
  });

  const handleThemeSwitch = useCallback(() => {
    const newTheme = theme === ETheme.LIGHT ? ETheme.DARK : ETheme.LIGHT;

    document.documentElement.classList.toggle('dark');
    setTheme(newTheme);

    localStorage.setItem('theme', newTheme);
  }, [theme]);

  return { theme, handleThemeSwitch };
}
