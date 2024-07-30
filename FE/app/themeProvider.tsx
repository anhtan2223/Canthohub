'use client'
import React, { createContext, useContext, useState, useEffect } from 'react';
import { ConfigProvider, theme as antdTheme } from "antd";
const darkTheme = {
    token: {
      colorPrimary: 'rgba(15, 33, 103, 1)', // dark-blue
      colorSuccess: 'rgba(53, 89, 224, 1)', // medium-blue
      colorWarning: 'rgba(76, 185, 231, 1)', // light-blue
      colorBgBase: 'rgb(26, 34, 44)', // dark background
      colorBgContainer: 'rgb(36, 48, 63)', // dark secondary background
      colorText: 'rgb(174, 183, 192)', // dark-text
      colorTextSecondary: 'rgb(174, 183, 192)', // dark-text-secondary
      colorBorder: '#4A5568', // dark border color
    }
  };
  
  const lightTheme = {
    token: {
      colorPrimary: 'rgba(15, 33, 103, 1)', // dark-blue
      colorSuccess: 'rgba(53, 89, 224, 1)', // medium-blue
      colorWarning: 'rgba(76, 185, 231, 1)', // light-blue
      colorBgBase: 'rgba(245, 245, 245, 1)', // body
      colorBgContainer: 'rgba(255, 255, 255, 1)', // secondary
      colorText: 'rgba(137, 137, 137, 1)', // text
      colorTextSecondary: 'rgba(137, 137, 137, 1)', // text-secondary
      colorBorder: 'rgba(217, 217, 217, 1)', // border color
    }
  };

interface ThemeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkModeEnabled = localStorage.getItem('theme') === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);

    if (darkModeEnabled) {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => {
      const newMode = !prev;
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      if (newMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return newMode;
    });
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
        <ConfigProvider
            theme={{
                algorithm: isDarkMode ? [antdTheme.darkAlgorithm] : [antdTheme.defaultAlgorithm],
            }}
            >
            {children}
        </ConfigProvider>
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
