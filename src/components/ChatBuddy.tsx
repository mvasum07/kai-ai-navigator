
import React, { useState } from 'react';
import { MessageCircle, Users } from 'lucide-react';

const ChatBuddy = () => {
  const [activeUsers] = useState([
    { name: 'Alex Chen', status: 'online', avatar: '👨‍💻' },
    { name: 'Sarah Kim', status: 'away', avatar: '👩‍🎨' },
    { name: 'Mike Johnson', status: 'online', avatar: '👨‍💼' },
  ]);

  return (
    <div className="bg-gray-800/90 backdrop-blur-sm rounded-xl p-4 min-w-[200px] border border-gray-700/50">
      <div className="flex items-center gap-2 mb-4">
        <MessageCircle size={18} className="text-blue-400" />
        <h3 className="text-white font-medium">Chat Buddy</h3>
        <div className="ml-auto flex items-center gap-1">
          <Users size={14} className="text-gray-400" />
          <span className="text-gray-400 text-xs">{activeUsers.length}</span>
        </div>
      </div>
      
      <div className="space-y-2">
        {activeUsers.map((user, index) => (
          <div 
            key={index}
            className="flex items-center gap-3 p-2 rounded-lg bg-gray-700/30 hover:bg-gray-700/50 cursor-pointer transition-colors"
          >
            <div className="relative">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-sm">
                {user.avatar}
              </div>
              <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-gray-800 ${
                user.status === 'online' ? 'bg-green-400' : 'bg-yellow-400'
              }`} />
            </div>
            <div className="flex-1">
              <div className="text-white text-sm font-medium">{user.name}</div>
              <div className="text-gray-400 text-xs capitalize">{user.status}</div>
            </div>
          </div>
        ))}
      </div>
      
      <button className="w-full mt-4 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors">
        Start Chat
      </button>
    </div>
  );
};

export default ChatBuddy;
