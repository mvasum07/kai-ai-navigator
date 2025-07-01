
import React, { useState, useEffect } from 'react';
import { MapPin } from 'lucide-react';

const WeatherWidget = ({ style }: { style?: React.CSSProperties }) => {
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

  return (
    <div 
      className="h-full flex flex-col p-6 relative bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 rounded-lg"
      style={style}
    >
      {/* Top Right Corner - All Info */}
      <div className="absolute top-4 right-4 text-right text-white">
        <div className="flex items-center gap-2 justify-end mb-1">
          <MapPin size={14} />
          <span className="text-sm font-medium">{location}</span>
        </div>
        <div className="text-2xl font-bold">{formatTime(currentTime)}</div>
        <div className="text-lg font-semibold">{weather.temperature}°F</div>
        <div className="text-sm opacity-90">{formatDate(currentTime)}</div>
        <div className="text-sm opacity-80">{weather.condition}</div>
        <div className="flex items-center gap-3 text-xs opacity-70 mt-1">
          <span>{weather.humidity}%</span>
          <span>{weather.windSpeed} mph</span>
        </div>
      </div>

      {/* Main Content Area - Clean */}
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <div className="text-8xl font-bold text-white/20 mb-4">{weather.temperature}°</div>
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;
