
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

        {/* Main Content Area - Enhanced Grid Layout */}
        <div className="ml-64 mr-8 mt-8 px-6">
          {/* Top Row - Primary Widgets */}
          <div className="grid grid-cols-3 gap-6 mb-6">
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <StaticWidget title="KAI Earnings" className="h-80 hover-scale">
                <KAIWidget />
              </StaticWidget>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <StaticWidget title="Stocks/Crypto" className="h-80 hover-scale">
                <StocksCryptoWidget />
              </StaticWidget>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <StaticWidget title="Calendar" className="h-80 hover-scale">
                <CalendarWidget />
              </StaticWidget>
            </div>
          </div>

          {/* Middle Row - Content Widgets */}
          <div className="grid grid-cols-3 gap-6 mb-6">
            <div className="animate-fade-in" style={{ animationDelay: '0.7s' }}>
              <StaticWidget title="Notes" className="h-72 hover-scale">
                <NotesWidget />
              </StaticWidget>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '0.9s' }}>
              <StaticWidget title="News" className="h-72 hover-scale">
                <NewsWidget />
              </StaticWidget>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '1.1s' }}>
              <StaticWidget title="Reminders" className="h-72 hover-scale">
                <RemindersWidget />
              </StaticWidget>
            </div>
          </div>

          {/* Bottom Row - Full Width */}
          <div className="animate-fade-in" style={{ animationDelay: '1.3s' }}>
            <StaticWidget title="Brainstorming" className="h-64 hover-scale">
              <BrainstormingWidget />
            </StaticWidget>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
