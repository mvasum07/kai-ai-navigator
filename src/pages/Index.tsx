
import React, { useState, useRef } from 'react';
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
import WidgetPanel from '../components/WidgetPanel';
import { Calendar, FileText, Bell, Newspaper, TrendingUp, Cloud, Lightbulb } from 'lucide-react';

import { useDashboardTheme } from '../contexts/DashboardThemeContext';

const Index = () => {
  const { currentScheme } = useDashboardTheme();
  const [widgets, setWidgets] = useState([
    { id: 'kai-earnings', x: 0, y: 0, width: 280, height: 320 }
  ]);
  
  const containerRef = useRef<HTMLDivElement>(null);

  const availableWidgets = [
    { id: 'calendar', title: 'Calendar', icon: <Calendar size={16} className="text-green-400" /> },
    { id: 'notes', title: 'Notes', icon: <FileText size={16} className="text-yellow-400" /> },
    { id: 'news', title: 'News', icon: <Newspaper size={16} className="text-red-400" /> },
    { id: 'stocks', title: 'Stocks/Crypto', icon: <TrendingUp size={16} className="text-purple-400" /> },
    { id: 'reminders', title: 'Reminders', icon: <Bell size={16} className="text-orange-400" /> },
    { id: 'brainstorming', title: 'Brainstorming', icon: <Lightbulb size={16} className="text-pink-400" /> }
  ];

  const addWidget = (widgetType: string) => {
    const newWidget = {
      id: `${widgetType}-${Date.now()}`,
      x: Math.random() * 300,
      y: Math.random() * 200,
      width: widgetType === 'brainstorming' ? 600 : 280,
      height: widgetType === 'brainstorming' ? 200 : 320
    };
    setWidgets(prev => [...prev, newWidget]);
  };

  const removeWidget = (widgetId: string) => {
    setWidgets(prev => prev.filter(widget => widget.id !== widgetId));
  };


  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/dashboard-bg.mp4" type="video/mp4" />
      </video>
      
      {/* Dark overlay for better readability */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      
      {/* Content wrapper */}
      <div className="relative z-20 min-h-screen transition-colors">
      <Header />
      <ThemeCustomizer />
      
      <div ref={containerRef} className="relative w-full h-screen pt-20">
        {/* Left Sidebar */}
        <div className="fixed left-6 top-32 space-y-6">
          <UserProfile />
          <ChatBuddy />
          <Accounts />
        </div>

        {/* Main Content Area - Dynamic Layout */}
        <div className="absolute left-64 right-12 top-32 px-6">
          {/* Dynamic Widgets */}
          {widgets.map((widget) => {
            const getWidgetContent = (id: string) => {
              const baseId = id.split('-')[0]; // Remove timestamp suffix
              switch (baseId) {
                case 'kai':
                  return { component: <KAIWidget />, title: 'KAI Earnings' };
                case 'weather':
                  return { component: <WeatherWidget />, title: 'Weather Dashboard' };
                case 'calendar':
                  return { component: <CalendarWidget />, title: 'Calendar' };
                case 'notes':
                  return { component: <NotesWidget />, title: 'Notes' };
                case 'news':
                  return { component: <NewsWidget />, title: 'News' };
                case 'stocks':
                  return { component: <StocksCryptoWidget />, title: 'Stocks/Crypto' };
                case 'reminders':
                  return { component: <RemindersWidget />, title: 'Reminders' };
                case 'brainstorming':
                  return { component: <BrainstormingWidget />, title: 'Brainstorming' };
                default:
                  return { component: <div>Unknown Widget</div>, title: 'Widget' };
              }
            };

            const { component, title } = getWidgetContent(widget.id);

            return (
              <ResizableWidget
                key={widget.id}
                initialWidth={widget.width}
                initialHeight={widget.height}
                initialX={widget.x}
                initialY={widget.y}
                title={title}
                widgetId={widget.id}
                onRemove={widget.id !== 'kai-earnings' ? removeWidget : undefined}
              >
                {component}
              </ResizableWidget>
            );
          })}
        </div>

        {/* Widget Panel */}
        <WidgetPanel 
          onAddWidget={addWidget}
          availableWidgets={availableWidgets}
        />
      </div>
      </div>
    </div>
  );
};

export default Index;
