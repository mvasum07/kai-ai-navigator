
import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

const ChatBuddy = () => {
  return (
    <div className="bg-pink-200/90 backdrop-blur-sm rounded-lg p-3 min-w-[140px]">
      <div className="text-gray-800 font-semibold mb-2 flex items-center gap-2">
        <MessageCircle size={16} />
        Chat Buddy
      </div>
      <div className="space-y-1 text-sm text-gray-700">
        <div className="cursor-pointer hover:text-gray-900">User 1</div>
        <div className="cursor-pointer hover:text-gray-900">User 2</div>
      </div>
    </div>
  );
};

export default ChatBuddy;
