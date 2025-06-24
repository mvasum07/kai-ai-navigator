
import React, { useState, useEffect } from 'react';
import { MapPin, Thermometer, Clock } from 'lucide-react';

const WeatherWidget = () => {
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
    <div className="mb-8">
      <div className="bg-gray-600 rounded-xl p-4 mb-4 inline-flex items-center gap-3">
        <MapPin className="text-white" size={20} />
        <span className="text-white font-medium">Current Location</span>
      </div>
      
      <div className="bg-gradient-to-r from-teal-400 to-green-500 rounded-2xl p-6 shadow-lg relative overflow-hidden mb-6">
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
        <div className="relative z-10 text-center">
          <h3 className="text-white font-bold text-xl mb-2">Weather</h3>
          <div className="text-white/90 text-sm mb-3">{location}</div>
          <div className="flex justify-center gap-8 mb-4">
            <div className="bg-amber-500 text-white px-4 py-2 rounded-full font-semibold">
              <div className="flex items-center gap-2">
                <Thermometer size={16} />
                <span>Data</span>
              </div>
            </div>
            <div className="bg-amber-600 text-white px-4 py-2 rounded-full font-semibold">
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>Time</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 text-white/90 text-sm">
            <div>
              <div className="font-semibold">{weather.temperature}°F</div>
              <div>{weather.condition}</div>
            </div>
            <div>
              <div className="font-semibold">{currentTime.toLocaleTimeString()}</div>
              <div>{currentTime.toLocaleDateString()}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;
