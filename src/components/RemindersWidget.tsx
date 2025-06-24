
import React, { useState } from 'react';
import { Check, Plus, X } from 'lucide-react';

interface Reminder {
  id: number;
  text: string;
  completed: boolean;
}

const RemindersWidget = () => {
  const [reminders, setReminders] = useState<Reminder[]>([
    { id: 1, text: 'Call client at 3 PM', completed: false },
    { id: 2, text: 'Submit quarterly report', completed: false },
    { id: 3, text: 'Team standup meeting', completed: true },
  ]);
  const [newReminder, setNewReminder] = useState('');

  const addReminder = () => {
    if (newReminder.trim()) {
      setReminders([...reminders, { 
        id: Date.now(), 
        text: newReminder.trim(), 
        completed: false 
      }]);
      setNewReminder('');
    }
  };

  const toggleReminder = (id: number) => {
    setReminders(reminders.map(reminder =>
      reminder.id === id ? { ...reminder, completed: !reminder.completed } : reminder
    ));
  };

  const deleteReminder = (id: number) => {
    setReminders(reminders.filter(reminder => reminder.id !== id));
  };

  return (
    <div className="bg-gradient-to-br from-pink-400 via-purple-400 to-yellow-400 p-6 rounded-2xl shadow-lg relative overflow-hidden">
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-white font-bold text-xl">Reminders</h2>
          <button
            onClick={() => setNewReminder('New reminder')}
            className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-lg transition-all"
          >
            <Plus size={16} />
          </button>
        </div>
        
        <div className="space-y-2">
          {reminders.map(reminder => (
            <div key={reminder.id} className="bg-white/20 p-3 rounded-lg flex items-center gap-3 group">
              <button
                onClick={() => toggleReminder(reminder.id)}
                className={`w-5 h-5 rounded-full border-2 border-white flex items-center justify-center transition-all ${
                  reminder.completed ? 'bg-white' : 'bg-transparent'
                }`}
              >
                {reminder.completed && <Check size={12} className="text-pink-400" />}
              </button>
              <span className={`text-white text-sm flex-1 ${
                reminder.completed ? 'line-through opacity-70' : ''
              }`}>
                {reminder.text}
              </span>
              <button
                onClick={() => deleteReminder(reminder.id)}
                className="text-white/70 hover:text-white opacity-0 group-hover:opacity-100 transition-all"
              >
                <X size={14} />
              </button>
            </div>
          ))}
        </div>
        
        {newReminder && (
          <div className="bg-white/20 p-3 rounded-lg mt-2">
            <input
              type="text"
              value={newReminder}
              onChange={(e) => setNewReminder(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addReminder()}
              className="w-full bg-transparent text-white placeholder-white/70 outline-none text-sm"
              placeholder="Enter reminder..."
              autoFocus
            />
            <div className="flex gap-2 mt-2">
              <button
                onClick={addReminder}
                className="bg-white/20 hover:bg-white/30 text-white px-3 py-1 rounded text-xs transition-all"
              >
                Save
              </button>
              <button
                onClick={() => setNewReminder('')}
                className="bg-white/20 hover:bg-white/30 text-white px-3 py-1 rounded text-xs transition-all"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RemindersWidget;
