import {
  createContext,
  useContext,
  useCallback,
  useEffect,
  useState,
  ReactNode,
} from 'react';
import { ETheme } from '@/components/base/navbar/navbar.types';

interface ThemeContextType {
  theme: ETheme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined,
);

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<ETheme>(() => {
    if (typeof window !== 'undefined') {
      // Check for saved theme preference or system preference
      const savedTheme = localStorage.getItem('theme');
      const systemPrefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)',
      ).matches;

      const initialTheme =
        savedTheme === ETheme.DARK || (!savedTheme && systemPrefersDark)
          ? ETheme.DARK
          : ETheme.LIGHT;

      // Apply theme to DOM immediately
      if (initialTheme === ETheme.DARK) {
        document.documentElement.classList.add(ETheme.DARK);
      }

      return initialTheme;
    }
    return ETheme.LIGHT;
  });

  // Sync DOM class with theme state
  useEffect(() => {
    if (theme === ETheme.DARK) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme(prevTheme => {
      const newTheme = prevTheme === ETheme.LIGHT ? ETheme.DARK : ETheme.LIGHT;
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
}
