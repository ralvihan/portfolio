import { useTheme } from './ThemeProvider';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ThemeSelector = () => {
  const { theme, changeTheme, themes } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const themeIcons = {
    light: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    dark: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    ),
    system: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  };

  const themeLabels = {
    light: 'Light',
    dark: 'Dark',
    system: 'System'
  };

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {themeIcons[theme]}
        <span className="text-sm font-medium hidden sm:block">
          {themeLabels[theme]}
        </span>
        <svg 
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-1 z-50"
          >
            {themes.map((themeOption) => (
              <motion.button
                key={themeOption}
                onClick={() => {
                  changeTheme(themeOption);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 ${
                  theme === themeOption 
                    ? 'bg-gray-100 dark:bg-gray-700 text-blue-600 dark:text-blue-400' 
                    : 'text-gray-900 dark:text-gray-100'
                }`}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.1 }}
              >
                {themeIcons[themeOption]}
                <span className="text-sm font-medium">
                  {themeLabels[themeOption]}
                </span>
                {theme === themeOption && (
                  <svg className="w-4 h-4 ml-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                )}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop untuk mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 md:hidden" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default ThemeSelector;