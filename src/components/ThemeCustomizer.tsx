
import React, { useState } from 'react';
import { Palette, X, Check } from 'lucide-react';
import { useDashboardTheme } from '../contexts/DashboardThemeContext';

const ThemeCustomizer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'dashboard' | 'widgets'>('dashboard');
  const { currentScheme, setColorScheme, colorSchemes, widgetThemes, setWidgetTheme } = useDashboardTheme();

  const widgetGradients = [
    'bg-gradient-to-br from-purple-500 via-blue-500 to-teal-500',
    'bg-gradient-to-br from-pink-500 via-red-500 to-orange-500',
    'bg-gradient-to-br from-green-500 via-emerald-500 to-cyan-500',
    'bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500',
    'bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500',
    'bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600',
    'bg-gradient-to-br from-emerald-400 via-teal-500 to-blue-500',
    'bg-gradient-to-br from-rose-400 via-pink-500 to-purple-600',
  ];

  const widgets = [
    { id: 'notes', name: 'Notes' },
    { id: 'calendar', name: 'Calendar' },
    { id: 'reminders', name: 'Reminders' },
    { id: 'social', name: 'Social Links' },
    { id: 'weather', name: 'Weather' },
    { id: 'kai-logo', name: 'KAI Logo' },
    { id: 'kai-earnings', name: 'KAI Earnings' },
    { id: 'news', name: 'News' },
    { id: 'stocks', name: 'Stocks/Crypto' }
  ];

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-20 right-4 z-50 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all border border-gray-200 dark:border-gray-700"
        title="Customize Theme"
      >
        <Palette size={20} className="text-gray-600 dark:text-gray-300" />
      </button>
    );
  }

  return (
    <div className="fixed top-20 right-4 z-50 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 w-80 max-h-96 overflow-hidden">
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
        <h3 className="font-semibold text-gray-800 dark:text-gray-200">Theme Customizer</h3>
        <button
          onClick={() => setIsOpen(false)}
          className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
        >
          <X size={16} className="text-gray-500" />
        </button>
      </div>

      <div className="flex border-b border-gray-200 dark:border-gray-700">
        <button
          onClick={() => setActiveTab('dashboard')}
          className={`flex-1 px-4 py-2 text-sm font-medium transition-colors ${
            activeTab === 'dashboard'
              ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
              : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
          }`}
        >
          Dashboard
        </button>
        <button
          onClick={() => setActiveTab('widgets')}
          className={`flex-1 px-4 py-2 text-sm font-medium transition-colors ${
            activeTab === 'widgets'
              ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
              : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
          }`}
        >
          Widgets
        </button>
      </div>

      <div className="p-4 overflow-y-auto max-h-80">
        {activeTab === 'dashboard' && (
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">Color Schemes</h4>
            <div className="grid grid-cols-1 gap-2">
              {colorSchemes.map((scheme) => (
                <button
                  key={scheme.id}
                  onClick={() => setColorScheme(scheme)}
                  className={`flex items-center justify-between p-3 rounded-lg border transition-all ${
                    currentScheme.id === scheme.id
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                      : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full ${scheme.widgetDefault}`}></div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{scheme.name}</span>
                  </div>
                  {currentScheme.id === scheme.id && (
                    <Check size={16} className="text-blue-500" />
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'widgets' && (
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">Widget Colors</h4>
            {widgets.map((widget) => (
              <div key={widget.id} className="space-y-2">
                <h5 className="text-xs font-medium text-gray-600 dark:text-gray-400">{widget.name}</h5>
                <div className="grid grid-cols-4 gap-2">
                  {widgetGradients.map((gradient, index) => {
                    const currentTheme = widgetThemes.find(t => t.widgetId === widget.id);
                    const isSelected = currentTheme?.gradient === gradient;
                    
                    return (
                      <button
                        key={index}
                        onClick={() => setWidgetTheme(widget.id, gradient)}
                        className={`w-12 h-8 rounded-md ${gradient} border-2 transition-all ${
                          isSelected ? 'border-white shadow-md scale-110' : 'border-gray-300 dark:border-gray-600'
                        }`}
                      />
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ThemeCustomizer;
