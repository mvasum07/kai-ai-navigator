
import React, { createContext, useContext, useState, useEffect } from 'react';

export interface ColorScheme {
  id: string;
  name: string;
  background: string;
  widgetDefault: string;
}

export interface WidgetTheme {
  widgetId: string;
  gradient: string;
}

interface DashboardThemeContextType {
  currentScheme: ColorScheme;
  setColorScheme: (scheme: ColorScheme) => void;
  widgetThemes: WidgetTheme[];
  setWidgetTheme: (widgetId: string, gradient: string) => void;
  colorSchemes: ColorScheme[];
}

const colorSchemes: ColorScheme[] = [
  {
    id: 'default',
    name: 'Default',
    background: 'bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900',
    widgetDefault: 'bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500'
  },
  {
    id: 'ocean',
    name: 'Ocean',
    background: 'bg-gradient-to-br from-blue-100 via-cyan-50 to-teal-100 dark:from-blue-900 dark:via-cyan-900 dark:to-teal-900',
    widgetDefault: 'bg-gradient-to-br from-blue-400 via-cyan-500 to-teal-600'
  },
  {
    id: 'sunset',
    name: 'Sunset',
    background: 'bg-gradient-to-br from-orange-100 via-red-50 to-pink-100 dark:from-orange-900 dark:via-red-900 dark:to-pink-900',
    widgetDefault: 'bg-gradient-to-br from-orange-400 via-red-500 to-pink-600'
  },
  {
    id: 'forest',
    name: 'Forest',
    background: 'bg-gradient-to-br from-green-100 via-emerald-50 to-teal-100 dark:from-green-900 dark:via-emerald-900 dark:to-teal-900',
    widgetDefault: 'bg-gradient-to-br from-green-400 via-emerald-500 to-teal-600'
  },
  {
    id: 'purple',
    name: 'Purple Dream',
    background: 'bg-gradient-to-br from-purple-100 via-violet-50 to-indigo-100 dark:from-purple-900 dark:via-violet-900 dark:to-indigo-900',
    widgetDefault: 'bg-gradient-to-br from-purple-400 via-violet-500 to-indigo-600'
  }
];

const DashboardThemeContext = createContext<DashboardThemeContextType | undefined>(undefined);

export const DashboardThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentScheme, setCurrentScheme] = useState<ColorScheme>(colorSchemes[0]);
  const [widgetThemes, setWidgetThemes] = useState<WidgetTheme[]>([]);

  useEffect(() => {
    const savedScheme = localStorage.getItem('dashboardColorScheme');
    const savedWidgetThemes = localStorage.getItem('widgetThemes');
    
    if (savedScheme) {
      const scheme = colorSchemes.find(s => s.id === savedScheme) || colorSchemes[0];
      setCurrentScheme(scheme);
    }
    
    if (savedWidgetThemes) {
      setWidgetThemes(JSON.parse(savedWidgetThemes));
    }
  }, []);

  const setColorScheme = (scheme: ColorScheme) => {
    setCurrentScheme(scheme);
    localStorage.setItem('dashboardColorScheme', scheme.id);
  };

  const setWidgetTheme = (widgetId: string, gradient: string) => {
    const newThemes = widgetThemes.filter(t => t.widgetId !== widgetId);
    newThemes.push({ widgetId, gradient });
    setWidgetThemes(newThemes);
    localStorage.setItem('widgetThemes', JSON.stringify(newThemes));
  };

  return (
    <DashboardThemeContext.Provider value={{
      currentScheme,
      setColorScheme,
      widgetThemes,
      setWidgetTheme,
      colorSchemes
    }}>
      {children}
    </DashboardThemeContext.Provider>
  );
};

export const useDashboardTheme = () => {
  const context = useContext(DashboardThemeContext);
  if (context === undefined) {
    throw new Error('useDashboardTheme must be used within a DashboardThemeProvider');
  }
  return context;
};
