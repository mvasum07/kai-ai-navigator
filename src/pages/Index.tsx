
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
import ResizableWidget from '../components/ResizableWidget';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors overflow-hidden">
      <Header />
      
      <div className="relative w-full h-screen pt-16">
        {/* Left Column Widgets */}
        <ResizableWidget
          initialWidth={320}
          initialHeight={300}
          initialX={20}
          initialY={20}
          title="Notes"
        >
          <NotesWidget />
        </ResizableWidget>

        <ResizableWidget
          initialWidth={320}
          initialHeight={280}
          initialX={20}
          initialY={340}
          title="Calendar"
        >
          <CalendarWidget />
        </ResizableWidget>

        <ResizableWidget
          initialWidth={320}
          initialHeight={250}
          initialX={20}
          initialY={640}
          title="Reminders"
        >
          <RemindersWidget />
        </ResizableWidget>

        <ResizableWidget
          initialWidth={320}
          initialHeight={100}
          initialX={20}
          initialY={910}
          title="Social Links"
        >
          <SocialLinks />
        </ResizableWidget>

        {/* Center Widgets */}
        <ResizableWidget
          initialWidth={400}
          initialHeight={300}
          initialX={360}
          initialY={20}
          title="Weather"
        >
          <WeatherWidget />
        </ResizableWidget>

        <ResizableWidget
          initialWidth={400}
          initialHeight={400}
          initialX={360}
          initialY={340}
          title="KAI Logo"
        >
          <div className="flex items-center justify-center h-full">
            <KAILogo />
          </div>
        </ResizableWidget>

        {/* Right Column Widgets */}
        <ResizableWidget
          initialWidth={350}
          initialHeight={400}
          initialX={780}
          initialY={20}
          title="KAI Earnings"
        >
          <KAIWidget />
        </ResizableWidget>

        <ResizableWidget
          initialWidth={350}
          initialHeight={350}
          initialX={780}
          initialY={440}
          title="News"
        >
          <NewsWidget />
        </ResizableWidget>

        <ResizableWidget
          initialWidth={350}
          initialHeight={300}
          initialX={780}
          initialY={810}
          title="Stocks/Crypto"
        >
          <StocksCryptoWidget />
        </ResizableWidget>
      </div>
    </div>
  );
};

export default Index;
