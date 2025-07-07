import React, { useState } from 'react';
import { Plus, Grip, X } from 'lucide-react';

interface WidgetPanelProps {
  onAddWidget: (widgetType: string) => void;
  availableWidgets: Array<{ id: string; title: string; icon: React.ReactNode }>;
}

const WidgetPanel = ({ onAddWidget, availableWidgets }: WidgetPanelProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed right-6 top-32 z-50">
      {/* Toggle Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="bg-gray-800/90 backdrop-blur-sm border border-gray-700/50 rounded-xl p-3 text-white hover:bg-gray-700/90 transition-colors shadow-lg"
      >
        {isExpanded ? <X size={20} /> : <Plus size={20} />}
      </button>

      {/* Widget Panel */}
      {isExpanded && (
        <div className="mt-4 bg-gray-800/90 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 min-w-[250px] shadow-lg">
          <h3 className="text-white font-medium mb-4 flex items-center gap-2">
            <Grip size={16} />
            Add Widgets
          </h3>
          
          <div className="space-y-2">
            {availableWidgets.map((widget) => (
              <button
                key={widget.id}
                onClick={() => onAddWidget(widget.id)}
                className="w-full flex items-center gap-3 p-3 bg-gray-700/30 hover:bg-gray-700/50 rounded-lg transition-colors text-left"
              >
                {widget.icon}
                <span className="text-white text-sm font-medium">{widget.title}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default WidgetPanel;