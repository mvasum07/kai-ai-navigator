
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
    id: 'modern-dark',
    name: 'Modern Dark',
    background: 'bg-[hsl(var(--dashboard-bg))]',
    widgetDefault: 'bg-[hsl(var(--widget-bg))] border border-[hsl(var(--widget-border))]'
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
