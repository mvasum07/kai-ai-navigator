
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
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '../components/ui/resizable';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
      <Header />
      
      <div className="max-w-7xl mx-auto p-6 h-screen">
        <ResizablePanelGroup direction="horizontal" className="gap-6">
          {/* Left Column */}
          <ResizablePanel defaultSize={25} minSize={20}>
            <ResizablePanelGroup direction="vertical" className="gap-6">
              <ResizablePanel defaultSize={35} minSize={15}>
                <NotesWidget />
              </ResizablePanel>
              <ResizableHandle withHandle />
              <ResizablePanel defaultSize={30} minSize={15}>
                <CalendarWidget />
              </ResizablePanel>
              <ResizableHandle withHandle />
              <ResizablePanel defaultSize={25} minSize={15}>
                <RemindersWidget />
              </ResizablePanel>
              <ResizableHandle withHandle />
              <ResizablePanel defaultSize={10} minSize={5}>
                <SocialLinks />
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
          
          <ResizableHandle withHandle />
          
          {/* Center Column */}
          <ResizablePanel defaultSize={50} minSize={30}>
            <ResizablePanelGroup direction="vertical" className="gap-6">
              <ResizablePanel defaultSize={40} minSize={20}>
                <WeatherWidget />
              </ResizablePanel>
              <ResizableHandle withHandle />
              <ResizablePanel defaultSize={60} minSize={30}>
                <div className="flex items-center justify-center h-full">
                  <KAILogo />
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
          
          <ResizableHandle withHandle />
          
          {/* Right Column */}
          <ResizablePanel defaultSize={25} minSize={20}>
            <ResizablePanelGroup direction="vertical" className="gap-6">
              <ResizablePanel defaultSize={40} minSize={20}>
                <KAIWidget />
              </ResizablePanel>
              <ResizableHandle withHandle />
              <ResizablePanel defaultSize={35} minSize={20}>
                <NewsWidget />
              </ResizablePanel>
              <ResizableHandle withHandle />
              <ResizablePanel defaultSize={25} minSize={15}>
                <StocksCryptoWidget />
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
};

export default Index;
