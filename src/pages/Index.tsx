
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
import AutoAdjustControls from '../components/AutoAdjustControls';
import { useDashboardTheme } from '../contexts/DashboardThemeContext';

const Index = () => {
  const { currentScheme } = useDashboardTheme();
  const [widgets, setWidgets] = useState([
    { id: 'kai-earnings', x: 0, y: 0, width: 280, height: 320 },
    { id: 'weather', x: 300, y: 0, width: 580, height: 320 },
    { id: 'calendar', x: 900, y: 0, width: 280, height: 320 },
    { id: 'notes', x: 0, y: 340, width: 280, height: 280 },
    { id: 'news', x: 300, y: 340, width: 280, height: 280 },
    { id: 'stocks', x: 600, y: 340, width: 280, height: 280 },
    { id: 'reminders', x: 900, y: 340, width: 280, height: 280 },
    { id: 'brainstorming', x: 0, y: 640, width: 1200, height: 200 }
  ]);
  
  const containerRef = useRef<HTMLDivElement>(null);

  const handleAutoLayout = () => {
    const containerWidth = containerRef.current?.clientWidth || 1200;
    const cols = Math.floor(containerWidth / 300);
    const newWidgets = [...widgets];
    
    newWidgets.forEach((widget, index) => {
      const row = Math.floor(index / cols);
      const col = index % cols;
      widget.x = col * 300 + col * 20; // 20px gap
      widget.y = row * 340 + row * 20; // 20px gap
    });
    
    setWidgets(newWidgets);
  };

  const handleResetPositions = () => {
    setWidgets([
      { id: 'kai-earnings', x: 0, y: 0, width: 280, height: 320 },
      { id: 'weather', x: 300, y: 0, width: 580, height: 320 },
      { id: 'calendar', x: 900, y: 0, width: 280, height: 320 },
      { id: 'notes', x: 0, y: 340, width: 280, height: 280 },
      { id: 'news', x: 300, y: 340, width: 280, height: 280 },
      { id: 'stocks', x: 600, y: 340, width: 280, height: 280 },
      { id: 'reminders', x: 900, y: 340, width: 280, height: 280 },
      { id: 'brainstorming', x: 0, y: 640, width: 1200, height: 200 }
    ]);
  };

  const handleOptimizeLayout = () => {
    const containerWidth = containerRef.current?.clientWidth || 1200;
    const optimizedWidgets = [...widgets];
    
    // Sort widgets by size (larger ones first)
    optimizedWidgets.sort((a, b) => (b.width * b.height) - (a.width * a.height));
    
    let currentX = 0;
    let currentY = 0;
    let rowHeight = 0;
    
    optimizedWidgets.forEach((widget) => {
      if (currentX + widget.width > containerWidth) {
        // Move to next row
        currentX = 0;
        currentY += rowHeight + 20;
        rowHeight = 0;
      }
      
      widget.x = currentX;
      widget.y = currentY;
      
      currentX += widget.width + 20;
      rowHeight = Math.max(rowHeight, widget.height);
    });
    
    setWidgets(optimizedWidgets);
  };

  return (
    <div className={`min-h-screen ${currentScheme.background} transition-colors overflow-hidden`}>
      <Header />
      <ThemeCustomizer />
      <AutoAdjustControls 
        onAutoLayout={handleAutoLayout}
        onResetPositions={handleResetPositions}
        onOptimizeLayout={handleOptimizeLayout}
      />
      
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
              switch (id) {
                case 'kai-earnings':
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
              >
                {component}
              </ResizableWidget>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Index;
