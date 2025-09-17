'use client';
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

type Theme = 'dark' | 'light';

type ThemeContextValue = {
  theme: Theme;
  setTheme: (t: Theme) => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('dark'); // Always start with dark on server
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Get theme from the data-theme attribute set by ThemeScript
    const dataTheme = document.documentElement.getAttribute('data-theme') as Theme | null;
    if (dataTheme && dataTheme !== theme) {
      setThemeState(dataTheme);
    } else if (!dataTheme) {
      // Fallback to localStorage or system preference
      const stored = localStorage.getItem('theme') as Theme | null;
      const system: Theme =
        window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light';
      const initial = stored ?? system;
      setThemeState(initial);
      document.documentElement.setAttribute('data-theme', initial);
    }
  }, [theme]);

  const setTheme = useCallback((t: Theme) => {
    setThemeState(t);
    if (typeof window !== 'undefined') localStorage.setItem('theme', t);
    document.documentElement.setAttribute('data-theme', t);
  }, []);

  const toggleTheme = useCallback(
    () => setTheme(theme === 'dark' ? 'light' : 'dark'),
    [theme, setTheme],
  );

  const value = useMemo(() => ({ theme, setTheme, toggleTheme }), [theme, setTheme, toggleTheme]);

  // Prevent hydration mismatch by not rendering theme-dependent content until mounted
  if (!mounted) {
    return (
      <ThemeContext.Provider value={{ theme: 'dark', setTheme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    );
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}

import Script from 'next/script';

export function ThemeScript() {
  // Avoids flash of wrong theme; must run before hydration
  const script = `(function() {
    try {
      const stored = localStorage.getItem('theme');
      const system = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      const theme = stored || system;
      document.documentElement.setAttribute('data-theme', theme);
      document.documentElement.style.colorScheme = theme;
      // Also set CSS custom properties immediately to prevent flash
      document.documentElement.style.setProperty('--initial-theme', theme);
    } catch(e) {
      // Fallback to system preference
      const system = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', system);
      document.documentElement.style.colorScheme = system;
      document.documentElement.style.setProperty('--initial-theme', system);
    }
  })();`;
  return (
    <Script id="theme-init" strategy="beforeInteractive">
      {script}
    </Script>
  );
}
