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
      const savedTheme = localStorage.getItem('theme');

      return savedTheme === ETheme.LIGHT ? ETheme.LIGHT : ETheme.DARK;
    }

    return ETheme.DARK;
  });

  useEffect(() => {
    document.documentElement.classList.toggle(
      ETheme.DARK,
      theme === ETheme.DARK,
    );

    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', theme === ETheme.DARK ? '#0b1220' : '#f4efe7');
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
