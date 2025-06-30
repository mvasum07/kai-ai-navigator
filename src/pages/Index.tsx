
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
import KAIWidget from '../components/KAIWidget';
import DraggableResizableWidget from '../components/DraggableResizableWidget';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors relative overflow-hidden">
      <Header />
      
      <div className="relative w-full h-screen pt-16">
        {/* Notes Widget */}
        <DraggableResizableWidget
          initialPosition={{ x: 50, y: 80 }}
          initialSize={{ width: 300, height: 400 }}
          title="Notes"
        >
          <NotesWidget />
        </DraggableResizableWidget>

        {/* Calendar Widget */}
        <DraggableResizableWidget
          initialPosition={{ x: 50, y: 500 }}
          initialSize={{ width: 300, height: 350 }}
          title="Calendar"
        >
          <CalendarWidget />
        </DraggableResizableWidget>

        {/* Reminders Widget */}
        <DraggableResizableWidget
          initialPosition={{ x: 370, y: 500 }}
          initialSize={{ width: 280, height: 300 }}
          title="Reminders"
        >
          <RemindersWidget />
        </DraggableResizableWidget>

        {/* Weather Widget */}
        <DraggableResizableWidget
          initialPosition={{ x: 370, y: 80 }}
          initialSize={{ width: 400, height: 300 }}
          title="Weather"
        >
          <WeatherWidget />
        </DraggableResizableWidget>

        {/* KAI Logo */}
        <DraggableResizableWidget
          initialPosition={{ x: 800, y: 400 }}
          initialSize={{ width: 300, height: 200 }}
          title="KAI Logo"
        >
          <div className="flex items-center justify-center h-full">
            <KAILogo />
          </div>
        </DraggableResizableWidget>

        {/* KAI Widget */}
        <DraggableResizableWidget
          initialPosition={{ x: 800, y: 80 }}
          initialSize={{ width: 350, height: 500 }}
          title="KAI Earnings"
        >
          <KAIWidget />
        </DraggableResizableWidget>

        {/* News Widget */}
        <DraggableResizableWidget
          initialPosition={{ x: 1200, y: 80 }}
          initialSize={{ width: 320, height: 400 }}
          title="News"
        >
          <NewsWidget />
        </DraggableResizableWidget>

        {/* Stocks/Crypto Widget */}
        <DraggableResizableWidget
          initialPosition={{ x: 1200, y: 500 }}
          initialSize={{ width: 320, height: 300 }}
          title="Stocks/Crypto"
        >
          <StocksCryptoWidget />
        </DraggableResizableWidget>

        {/* Social Links */}
        <DraggableResizableWidget
          initialPosition={{ x: 370, y: 400 }}
          initialSize={{ width: 200, height: 100 }}
          title="Social Links"
        >
          <SocialLinks />
        </DraggableResizableWidget>
      </div>
    </div>
  );
};

export default Index;
