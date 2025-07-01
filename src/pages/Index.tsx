
import React from 'react';
import Header from '../components/Header';
import NotesWidget from '../components/NotesWidget';
import CalendarWidget from '../components/CalendarWidget';
import RemindersWidget from '../components/RemindersWidget';
import NewsWidget from '../components/NewsWidget';
import StocksCryptoWidget from '../components/StocksCryptoWidget';
import WeatherWidget from '../components/WeatherWidget';
import SocialLinks from '../components/SocialLinks';
import KAIWidget from '../components/KAIWidget';
import ResizableWidget from '../components/ResizableWidget';
import ThemeCustomizer from '../components/ThemeCustomizer';
import RecentActivity from '../components/RecentActivity';
import BrainstormingWidget from '../components/BrainstormingWidget';
import UserProfile from '../components/UserProfile';
import Accounts from '../components/Accounts';
import ChatBuddy from '../components/ChatBuddy';
import SearchBar from '../components/SearchBar';
import { useDashboardTheme } from '../contexts/DashboardThemeContext';

const Index = () => {
  const { currentScheme } = useDashboardTheme();

  return (
    <div className={`min-h-screen ${currentScheme.background} transition-colors overflow-hidden`}>
      <Header />
      <ThemeCustomizer />
      
      {/* Search Bar */}
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
        <SearchBar />
      </div>
      
      <div className="relative w-full h-screen pt-16">
        {/* Left Sidebar */}
        <div className="fixed left-4 top-20 space-y-4">
          <UserProfile />
          <Accounts />
          <SocialLinks />
          <ChatBuddy />
        </div>

        {/* Main Content Area Widgets */}
        <ResizableWidget
          initialWidth={320}
          initialHeight={280}
          initialX={200}
          initialY={100}
          title="KAI Earnings"
          widgetId="kai-earnings"
        >
          <KAIWidget />
        </ResizableWidget>

        <ResizableWidget
          initialWidth={400}
          initialHeight={200}
          initialX={540}
          initialY={100}
          title="Weather"
          widgetId="weather"
        >
          <WeatherWidget />
        </ResizableWidget>

        <ResizableWidget
          initialWidth={320}
          initialHeight={300}
          initialX={960}
          initialY={100}
          title="News"
          widgetId="news"
        >
          <NewsWidget />
        </ResizableWidget>

        <ResizableWidget
          initialWidth={280}
          initialHeight={250}
          initialX={1300}
          initialY={100}
          title="Notes"
          widgetId="notes"
        >
          <NotesWidget />
        </ResizableWidget>

        <ResizableWidget
          initialWidth={280}
          initialHeight={200}
          initialX={1300}
          initialY={370}
          title="Reminders"
          widgetId="reminders"
        >
          <RemindersWidget />
        </ResizableWidget>

        <ResizableWidget
          initialWidth={350}
          initialHeight={120}
          initialX={1200}
          initialY={590}
          title="Calendar"
          widgetId="calendar"
        >
          <CalendarWidget />
        </ResizableWidget>

        <ResizableWidget
          initialWidth={380}
          initialHeight={150}
          initialX={1200}
          initialY={730}
          title="Stocks/Crypto"
          widgetId="stocks"
        >
          <StocksCryptoWidget />
        </ResizableWidget>

        <ResizableWidget
          initialWidth={350}
          initialHeight={200}
          initialX={1200}
          initialY={900}
          title="Brainstorming"
          widgetId="brainstorming"
        >
          <BrainstormingWidget />
        </ResizableWidget>

        {/* Bottom Recent Activity */}
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2">
          <RecentActivity />
        </div>
      </div>
    </div>
  );
};

export default Index;
