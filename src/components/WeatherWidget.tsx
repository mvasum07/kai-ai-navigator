
import React, { useState, useEffect } from 'react';
import { MapPin, Thermometer, Clock } from 'lucide-react';

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

  return (
    <div 
      className="h-full flex flex-col justify-center items-center text-center"
      style={style}
    >
      <div className="text-gray-800 font-bold text-lg mb-2">{location}</div>
      <div className="text-4xl font-bold text-gray-800 mb-1">{weather.temperature}°F</div>
      <div className="text-gray-700 mb-2">{weather.condition}</div>
      <div className="text-gray-600 text-sm">{currentTime.toLocaleTimeString()}</div>
      <div className="text-gray-600 text-sm">{currentTime.toLocaleDateString('en-US', { 
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })}</div>
    </div>
  );
};

export default WeatherWidget;
