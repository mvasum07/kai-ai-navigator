
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CalendarWidget = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  
  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };
  
  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };
  
  const days = [];
  
  // Empty cells for days before the first day of the month
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(<div key={`empty-${i}`} className="p-2"></div>);
  }
  
  // Days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    const isToday = new Date().toDateString() === new Date(currentDate.getFullYear(), currentDate.getMonth(), day).toDateString();
    days.push(
      <div
        key={day}
        className={`p-2 text-center text-sm cursor-pointer rounded-lg transition-all hover:bg-white/20 ${
          isToday ? 'bg-white/30 text-white font-bold' : 'text-white/90'
        }`}
      >
        {day}
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-cyan-400 to-blue-600 p-6 rounded-2xl shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white font-bold text-xl">Calendar</h2>
      </div>
      
      <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
        <div className="flex justify-between items-center mb-4">
          <button onClick={previousMonth} className="text-white/80 hover:text-white">
            <ChevronLeft size={20} />
          </button>
          <h3 className="text-white font-semibold">
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h3>
          <button onClick={nextMonth} className="text-white/80 hover:text-white">
            <ChevronRight size={20} />
          </button>
        </div>
        
        <div className="grid grid-cols-7 gap-1 mb-2">
          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(day => (
            <div key={day} className="p-2 text-center text-white/70 text-xs font-semibold">
              {day}
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-7 gap-1">
          {days}
        </div>
      </div>
    </div>
  );
};

export default CalendarWidget;
