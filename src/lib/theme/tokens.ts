export const colorTokens = {
  brand: {
    primary: '#2563eb',
    primaryForeground: '#ffffff',
    muted: '#e5e7eb',
    mutedForeground: '#111827',
  },
};

export const radiusTokens = {
  sm: '0.25rem',
  md: '0.5rem',
  lg: '0.75rem',
  xl: '1rem',
  full: '9999px',
};

export type ThemeTokens = {
  colors: typeof colorTokens;
  radii: typeof radiusTokens;
};

export const themeTokens: ThemeTokens = {
  colors: colorTokens,
  radii: radiusTokens,
};
