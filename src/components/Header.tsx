
import React, { useState } from 'react';
import { Search, Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Header = () => {
  const [url, setUrl] = useState('');
  const { isDarkMode, toggleDarkMode } = useTheme();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (url.trim()) {
      // In a real implementation, this would open in the built-in browser
      window.open(url.startsWith('http') ? url : `https://${url}`, '_blank');
      setUrl('');
    }
  };

  return (
    <div className="w-full bg-gray-600 dark:bg-gray-800 py-4 px-6 transition-colors">
      <div className="max-w-4xl mx-auto flex items-center gap-4">
        <form onSubmit={handleSubmit} className="flex-1">
          <div className="relative">
            <label htmlFor="url-input" className="block text-white text-sm font-medium mb-2">
              Enter Url:
            </label>
            <div className="relative">
              <input
                id="url-input"
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Enter website URL..."
                className="w-full px-4 py-3 pr-12 bg-white dark:bg-gray-700 dark:text-white rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-gray-400 hover:text-blue-500 transition-colors"
              >
                <Search size={20} />
              </button>
            </div>
          </div>
        </form>
        
        <button
          onClick={toggleDarkMode}
          className="p-2 text-white hover:text-gray-300 transition-colors rounded-lg hover:bg-white/10"
          title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
        </button>
      </div>
    </div>
  );
};

export default Header;
