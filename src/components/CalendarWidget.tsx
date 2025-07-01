
import React, { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';

const CalendarWidget = ({ style }: { style?: React.CSSProperties }) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  return (
    <div 
      className="h-full flex flex-col"
      style={style}
    >
      <div className="text-center mb-4">
        <h3 className="text-lg font-semibold text-white mb-2">
          {selectedDate ? format(selectedDate, 'MMMM yyyy') : 'Calendar'}
        </h3>
        {selectedDate && (
          <p className="text-white/80 text-sm">
            Selected: {format(selectedDate, 'PPP')}
          </p>
        )}
      </div>
      
      <div className="flex-1 flex items-center justify-center">
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={setSelectedDate}
          className="rounded-md border-none bg-white/10 backdrop-blur-sm text-white"
          classNames={{
            months: "flex flex-col",
            month: "space-y-4",
            caption: "flex justify-center pt-1 relative items-center text-white",
            caption_label: "text-sm font-medium",
            nav: "space-x-1 flex items-center",
            nav_button: "h-7 w-7 bg-white/20 p-0 opacity-70 hover:opacity-100 text-white border-none",
            nav_button_previous: "absolute left-1",
            nav_button_next: "absolute right-1",
            table: "w-full border-collapse space-y-1",
            head_row: "flex",
            head_cell: "text-white/70 rounded-md w-8 font-normal text-xs",
            row: "flex w-full mt-2",
            cell: "h-8 w-8 text-center text-sm p-0 relative hover:bg-white/20 rounded-md",
            day: "h-8 w-8 p-0 font-normal text-white hover:bg-white/20 rounded-md",
            day_selected: "bg-white/30 text-white font-semibold",
            day_today: "bg-white/20 text-white font-semibold",
            day_outside: "text-white/30",
            day_disabled: "text-white/20",
          }}
        />
      </div>
    </div>
  );
};

export default CalendarWidget;
