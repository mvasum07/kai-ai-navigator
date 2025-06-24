
import React from 'react';
import Header from '../components/Header';
import NotesWidget from '../components/NotesWidget';
import CalendarWidget from '../components/CalendarWidget';
import RemindersWidget from '../components/RemindersWidget';
import NewsWidget from '../components/NewsWidget';
import StocksCryptoWidget from '../components/StocksCryptoWidget';
import WeatherWidget from '../components/WeatherWidget';
import SocialLinks from '../components/SocialLinks';
import KAILogo from '../components/KAILogo';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
      <Header />
      
      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-12 gap-6 h-screen">
          {/* Left Column */}
          <div className="col-span-3 space-y-6">
            <NotesWidget />
            <CalendarWidget />
            <RemindersWidget />
            <SocialLinks />
          </div>
          
          {/* Center Column */}
          <div className="col-span-6 flex flex-col items-center justify-center">
            <WeatherWidget />
            <KAILogo />
          </div>
          
          {/* Right Column */}
          <div className="col-span-3 space-y-6">
            <NewsWidget />
            <StocksCryptoWidget />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
