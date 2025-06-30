
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
import ThemeCustomizer from '../components/ThemeCustomizer';
import { useDashboardTheme } from '../contexts/DashboardThemeContext';

const Index = () => {
  const { currentScheme } = useDashboardTheme();

  return (
    <div className={`min-h-screen ${currentScheme.background} transition-colors overflow-hidden`}>
      <Header />
      <ThemeCustomizer />
      
      <div className="relative w-full h-screen pt-16">
        {/* Left Column Widgets */}
        <ResizableWidget
          initialWidth={320}
          initialHeight={300}
          initialX={20}
          initialY={20}
          title="Notes"
          widgetId="notes"
        >
          <NotesWidget />
        </ResizableWidget>

        <ResizableWidget
          initialWidth={320}
          initialHeight={280}
          initialX={20}
          initialY={340}
          title="Calendar"
          widgetId="calendar"
        >
          <CalendarWidget />
        </ResizableWidget>

        <ResizableWidget
          initialWidth={320}
          initialHeight={250}
          initialX={20}
          initialY={640}
          title="Reminders"
          widgetId="reminders"
        >
          <RemindersWidget />
        </ResizableWidget>

        <ResizableWidget
          initialWidth={320}
          initialHeight={100}
          initialX={20}
          initialY={910}
          title="Social Links"
          widgetId="social"
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
          widgetId="weather"
        >
          <WeatherWidget />
        </ResizableWidget>

        <ResizableWidget
          initialWidth={400}
          initialHeight={400}
          initialX={360}
          initialY={340}
          title="KAI Logo"
          widgetId="kai-logo"
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
          widgetId="kai-earnings"
        >
          <KAIWidget />
        </ResizableWidget>

        <ResizableWidget
          initialWidth={350}
          initialHeight={350}
          initialX={780}
          initialY={440}
          title="News"
          widgetId="news"
        >
          <NewsWidget />
        </ResizableWidget>

        <ResizableWidget
          initialWidth={350}
          initialHeight={300}
          initialX={780}
          initialY={810}
          title="Stocks/Crypto"
          widgetId="stocks"
        >
          <StocksCryptoWidget />
        </ResizableWidget>
      </div>
    </div>
  );
};

export default Index;
