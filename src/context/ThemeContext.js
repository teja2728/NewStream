import { createContext, useContext, useEffect, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false; // Default to light mode
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    document.body.className = darkMode ? 'dark-theme' : 'light-theme';
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const theme = {
    darkMode,
    toggleTheme,
    colors: darkMode ? {
      primary: '#1a1a2e',
      secondary: '#16213e',
      accent: '#0f3460',
      text: '#e6e6e6',
      textSecondary: '#b8b8b8',
      background: '#121212',
      card: '#1e1e1e',
      border: '#2d2d2d',
      success: '#4caf50',
      danger: '#f44336',
      warning: '#ff9800',
      info: '#2196f3'
    } : {
      primary: '#f8f9fa',
      secondary: '#e9ecef',
      accent: '#0077b6',
      text: '#212529',
      textSecondary: '#495057',
      background: '#ffffff',
      card: '#ffffff',
      border: '#dee2e6',
      success: '#28a745',
      danger: '#dc3545',
      warning: '#ffc107',
      info: '#17a2b8'
    }
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};