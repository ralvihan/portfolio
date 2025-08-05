import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [resolvedTheme, setResolvedTheme] = useState('light');

  // Function to get system preference
  const getSystemTheme = () => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  // Apply theme to document
  const applyTheme = (themeToApply) => {
    const root = document.documentElement;
    
    if (themeToApply === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  };

  // Initialize theme on mount - always follow system
  useEffect(() => {
    const systemTheme = getSystemTheme();
    setResolvedTheme(systemTheme);
    applyTheme(systemTheme);
  }, []);

  // Listen for system theme changes and automatically update
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = () => {
      const systemTheme = getSystemTheme();
      setResolvedTheme(systemTheme);
      applyTheme(systemTheme);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const value = {
    theme: 'system', // Always system
    resolvedTheme
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};