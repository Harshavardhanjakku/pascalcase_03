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
      // Prioritize user's stored preference over system theme
      const stored = localStorage.getItem('theme') as Theme | null;
      if (stored) {
        setThemeState(stored);
        document.documentElement.setAttribute('data-theme', stored);
        document.documentElement.style.colorScheme = stored;
      } else {
        // Only use system preference if no user preference is stored
        const system: Theme =
          window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light';
        setThemeState(system);
        document.documentElement.setAttribute('data-theme', system);
        document.documentElement.style.colorScheme = system;
      }
    }
  }, [theme]);

  const setTheme = useCallback((t: Theme) => {
    setThemeState(t);
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', t);
      // Force update the DOM immediately
      document.documentElement.setAttribute('data-theme', t);
      document.documentElement.style.colorScheme = t;
      // Also set a class for additional browser compatibility
      document.documentElement.className = document.documentElement.className.replace(
        /theme-\w+/g,
        '',
      );
      document.documentElement.classList.add(`theme-${t}`);
    }
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
      
      // Set theme attributes and properties
      document.documentElement.setAttribute('data-theme', theme);
      document.documentElement.style.colorScheme = theme;
      
      // Add theme class for additional browser compatibility
      document.documentElement.className = document.documentElement.className.replace(/theme-\\w+/g, '');
      document.documentElement.classList.add('theme-' + theme);
      
      // Set CSS custom properties immediately to prevent flash
      document.documentElement.style.setProperty('--initial-theme', theme);
      
      // Force immediate style application for Edge/Safari
      if (window.navigator.userAgent.includes('Edge') || window.navigator.userAgent.includes('Safari')) {
        document.documentElement.style.setProperty('--theme-applied', '1');
      }
    } catch(e) {
      // Fallback to system preference
      const system = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', system);
      document.documentElement.style.colorScheme = system;
      document.documentElement.className = document.documentElement.className.replace(/theme-\\w+/g, '');
      document.documentElement.classList.add('theme-' + system);
      document.documentElement.style.setProperty('--initial-theme', system);
    }
  })();`;
  return (
    <Script id="theme-init" strategy="beforeInteractive">
      {script}
    </Script>
  );
}
