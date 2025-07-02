
import React from 'react';
import Header from '../components/Header';
import NotesWidget from '../components/NotesWidget';
import CalendarWidget from '../components/CalendarWidget';
import RemindersWidget from '../components/RemindersWidget';
import NewsWidget from '../components/NewsWidget';
import StocksCryptoWidget from '../components/StocksCryptoWidget';
import WeatherWidget from '../components/WeatherWidget';
import KAIWidget from '../components/KAIWidget';
import StaticWidget from '../components/StaticWidget';
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
        <div className="ml-64 mr-12 mt-32 grid grid-cols-4 gap-6 px-6">
          {/* Row 1 */}
          <div className="col-span-1">
            <StaticWidget title="KAI Earnings" className="h-80">
              <KAIWidget />
            </StaticWidget>
          </div>
          
          <div className="col-span-2">
            <StaticWidget title="Weather Dashboard" className="h-80">
              <WeatherWidget />
            </StaticWidget>
          </div>
          
          <div className="col-span-1">
            <StaticWidget title="Calendar" className="h-80">
              <CalendarWidget />
            </StaticWidget>
          </div>

          {/* Row 2 */}
          <div className="col-span-1">
            <StaticWidget title="Notes" className="h-70">
              <NotesWidget />
            </StaticWidget>
          </div>
          
          <div className="col-span-1">
            <StaticWidget title="News" className="h-70">
              <NewsWidget />
            </StaticWidget>
          </div>
          
          <div className="col-span-1">
            <StaticWidget title="Stocks/Crypto" className="h-70">
              <StocksCryptoWidget />
            </StaticWidget>
          </div>
          
          <div className="col-span-1">
            <StaticWidget title="Reminders" className="h-70">
              <RemindersWidget />
            </StaticWidget>
          </div>

          {/* Row 3 */}
          <div className="col-span-4">
            <StaticWidget title="Brainstorming" className="h-50">
              <BrainstormingWidget />
            </StaticWidget>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
