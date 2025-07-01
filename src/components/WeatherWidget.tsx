
import React, { useState, useEffect } from 'react';
import { MapPin, Thermometer, Droplets, Wind } from 'lucide-react';

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
      className="h-full flex flex-col p-4 relative"
      style={style}
    >
      {/* Location Header */}
      <div className="flex items-center gap-2 mb-4">
        <MapPin size={16} className="text-white/80" />
        <span className="text-white font-medium">{location}</span>
      </div>

      {/* Main Weather Display */}
      <div className="flex-1 flex flex-col justify-center items-center text-center">
        <div className="text-6xl font-bold text-white mb-2">{weather.temperature}°F</div>
        <div className="text-white/80 text-lg mb-4">{weather.condition}</div>
        
        {/* Weather Details */}
        <div className="flex gap-6 text-white/60 text-sm">
          <div className="flex items-center gap-1">
            <Droplets size={14} />
            <span>{weather.humidity}%</span>
          </div>
          <div className="flex items-center gap-1">
            <Wind size={14} />
            <span>{weather.windSpeed} mph</span>
          </div>
        </div>
      </div>

      {/* Date and Time - Fixed in Right Corner */}
      <div className="absolute top-4 right-4 text-right">
        <div className="text-white font-bold text-xl">{formatTime(currentTime)}</div>
        <div className="text-white/70 text-sm">{formatDate(currentTime)}</div>
      </div>
    </div>
  );
};

export default WeatherWidget;
