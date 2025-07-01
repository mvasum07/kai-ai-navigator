
import React from 'react';

const CalendarWidget = ({ style }: { style?: React.CSSProperties }) => {
  // Simple calendar grid for the compact widget
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const dates = Array.from({ length: 35 }, (_, i) => i + 1);

  return (
    <div 
      className="h-full p-2"
      style={style}
    >
      <div className="grid grid-cols-7 gap-1 mb-2">
        {days.map((day, index) => (
          <div key={index} className="text-center text-xs font-semibold text-gray-700">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {dates.slice(0, 35).map((date, index) => (
          <div
            key={index}
            className={`text-center text-xs p-1 rounded ${
              date <= 31 
                ? index < 5 
                  ? 'bg-red-200 text-red-800' 
                  : 'bg-blue-200 text-blue-800'
                : 'text-transparent'
            }`}
          >
            {date <= 31 ? date : ''}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarWidget;
