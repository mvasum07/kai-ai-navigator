
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface NewsItem {
  id: number;
  title: string;
  summary: string;
  category: string;
}

const NewsWidget = () => {
  const [expandedNews, setExpandedNews] = useState<number | null>(null);
  const [newsItems] = useState<NewsItem[]>([
    {
      id: 1,
      title: "Tech Giants Report Strong Q4 Earnings",
      summary: "Major technology companies including Apple, Google, and Microsoft reported better-than-expected quarterly earnings...",
      category: "Technology"
    },
    {
      id: 2,
      title: "Market Volatility Continues",
      summary: "Stock markets show continued volatility as investors react to Federal Reserve policy changes and global economic indicators...",
      category: "Finance"
    },
    {
      id: 3,
      title: "AI Breakthrough in Healthcare",
      summary: "Researchers announce significant advances in AI-powered diagnostic tools that could revolutionize medical imaging...",
      category: "Health"
    },
    {
      id: 4,
      title: "Climate Summit Outcomes",
      summary: "International climate summit concludes with new commitments from world leaders on carbon reduction targets...",
      category: "Environment"
    }
  ]);

  const toggleNews = (id: number) => {
    setExpandedNews(expandedNews === id ? null : id);
  };

  return (
    <div className="bg-gradient-to-br from-yellow-300 via-orange-300 to-pink-400 p-6 rounded-2xl shadow-lg relative overflow-hidden">
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <h2 className="text-white font-bold text-xl mb-4">CURRENT NEWS</h2>
        
        <div className="space-y-3 max-h-80 overflow-y-auto">
          {newsItems.map(item => (
            <div key={item.id} className="bg-white/20 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleNews(item.id)}
                className="w-full p-4 text-left flex justify-between items-center hover:bg-white/10 transition-all"
              >
                <div>
                  <h3 className="text-white font-semibold text-sm mb-1">{item.title}</h3>
                  <span className="text-white/70 text-xs bg-white/20 px-2 py-1 rounded">
                    {item.category}
                  </span>
                </div>
                {expandedNews === item.id ? (
                  <ChevronUp className="text-white" size={16} />
                ) : (
                  <ChevronDown className="text-white" size={16} />
                )}
              </button>
              
              {expandedNews === item.id && (
                <div className="px-4 pb-4">
                  <p className="text-white/90 text-sm leading-relaxed">
                    {item.summary}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsWidget;
