
import React from 'react';
import Header from '../components/Header';
import NotesWidget from '../components/NotesWidget';
import CalendarWidget from '../components/CalendarWidget';
import RemindersWidget from '../components/RemindersWidget';
import NewsWidget from '../components/NewsWidget';
import StocksCryptoWidget from '../components/StocksCryptoWidget';
import WeatherWidget from '../components/WeatherWidget';
import KAIWidget from '../components/KAIWidget';
import ResizableWidget from '../components/ResizableWidget';
import ThemeCustomizer from '../components/ThemeCustomizer';
import BrainstormingWidget from '../components/BrainstormingWidget';
import UserProfile from '../components/UserProfile';
import Accounts from '../components/Accounts';
import ChatBuddy from '../components/ChatBuddy';
import { useDashboardTheme } from '../contexts/DashboardThemeContext';

const Index = () => {
  const { currentScheme } = useDashboardTheme();

  return (
    <div className={`min-h-screen ${currentScheme.background} transition-colors overflow-hidden`}>
      <Header />
      <ThemeCustomizer />
      
      <div className="relative w-full h-screen pt-20">
        {/* Left Sidebar */}
        <div className="fixed left-6 top-32 space-y-6">
          <UserProfile />
          <ChatBuddy />
          <Accounts />
        </div>

        {/* Main Content Area - Grid Layout */}
        <div className="absolute left-64 right-12 top-32 grid grid-cols-4 gap-6 px-6">
          {/* Row 1 */}
          <div className="col-span-1">
            <ResizableWidget
              initialWidth={280}
              initialHeight={320}
              initialX={0}
              initialY={0}
              title="KAI Earnings"
              widgetId="kai-earnings"
            >
              <KAIWidget />
            </ResizableWidget>
          </div>
          
          <div className="col-span-2">
            <ResizableWidget
              initialWidth={580}
              initialHeight={320}
              initialX={0}
              initialY={0}
              title="Weather Dashboard"
              widgetId="weather"
            >
              <WeatherWidget />
            </ResizableWidget>
          </div>
          
          <div className="col-span-1">
            <ResizableWidget
              initialWidth={280}
              initialHeight={320}
              initialX={0}
              initialY={0}
              title="Calendar"
              widgetId="calendar"
            >
              <CalendarWidget />
            </ResizableWidget>
          </div>

          {/* Row 2 */}
          <div className="col-span-1 mt-8">
            <ResizableWidget
              initialWidth={280}
              initialHeight={280}
              initialX={0}
              initialY={0}
              title="Notes"
              widgetId="notes"
            >
              <NotesWidget />
            </ResizableWidget>
          </div>
          
          <div className="col-span-1 mt-8">
            <ResizableWidget
              initialWidth={280}
              initialHeight={280}
              initialX={0}
              initialY={0}
              title="News"
              widgetId="news"
            >
              <NewsWidget />
            </ResizableWidget>
          </div>
          
          <div className="col-span-1 mt-8">
            <ResizableWidget
              initialWidth={280}
              initialHeight={280}
              initialX={0}
              initialY={0}
              title="Stocks/Crypto"
              widgetId="stocks"
            >
              <StocksCryptoWidget />
            </ResizableWidget>
          </div>
          
          <div className="col-span-1 mt-8">
            <ResizableWidget
              initialWidth={280}
              initialHeight={280}
              initialX={0}
              initialY={0}
              title="Reminders"
              widgetId="reminders"
            >
              <RemindersWidget />
            </ResizableWidget>
          </div>

          {/* Row 3 */}
          <div className="col-span-4 mt-8">
            <ResizableWidget
              initialWidth={1200}
              initialHeight={200}
              initialX={0}
              initialY={0}
              title="Brainstorming"
              widgetId="brainstorming"
            >
              <BrainstormingWidget />
            </ResizableWidget>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
