
import React, { useState, useEffect } from 'react';
import { Search, Moon, Sun, ExternalLink, MapPin, Droplets, Wind } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Header = () => {
  const [url, setUrl] = useState('');
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [location] = useState('San Francisco, CA');
  const [weather] = useState({
    temperature: 72,
    condition: 'Partly Cloudy',
    humidity: 65,
    windSpeed: 8
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (url.trim()) {
      // Open in new tab/window
      const finalUrl = url.startsWith('http') ? url : `https://${url}`;
      window.open(finalUrl, '_blank', 'noopener,noreferrer');
      setUrl('');
    }
  };

  return (
    <div className="w-full bg-gray-600 dark:bg-gray-800 py-4 px-6 transition-colors">
      <div className="w-full flex items-center justify-between gap-4">
        <form onSubmit={handleSubmit} className="flex-1 max-w-lg">
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
                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-gray-400 hover:text-blue-500 transition-colors flex items-center gap-1"
                title="Open in new tab"
              >
                <Search size={16} />
                <ExternalLink size={12} />
              </button>
            </div>
          </div>
        </form>
        
        <div className="flex items-center gap-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 text-white hover:text-gray-300 transition-colors rounded-lg hover:bg-white/10"
            title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
          
          {/* Weather/Time Info */}
          <div className="bg-slate-700/50 rounded-lg px-4 py-2 text-white">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-white/80" />
                <span className="text-sm font-medium">{location}</span>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold">{formatTime(currentTime)}</div>
                <div className="text-xs text-white/70">{formatDate(currentTime)}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">{weather.temperature}°F</div>
                <div className="text-xs text-white/80">{weather.condition}</div>
              </div>
              <div className="flex gap-3 text-xs text-white/60">
                <div className="flex items-center gap-1">
                  <Droplets size={12} />
                  <span>{weather.humidity}%</span>
                </div>
                <div className="flex items-center gap-1">
                  <Wind size={12} />
                  <span>{weather.windSpeed} mph</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
