
import React from 'react';
import { User, Settings } from 'lucide-react';

const UserProfile = () => {
  return (
    <div className="bg-gray-800/90 backdrop-blur-sm rounded-xl p-4 min-w-[200px] border border-gray-700/50">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
          <User size={24} className="text-white" />
        </div>
        <div>
          <h3 className="text-white font-semibold">KAI User</h3>
          <p className="text-gray-400 text-sm">Premium Member</p>
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-300">Status</span>
          <span className="text-green-400 flex items-center gap-1">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            Online
          </span>
        </div>
        
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-300">KAI Tokens</span>
          <span className="text-blue-400 font-medium">1,250</span>
        </div>
      </div>
      
      <button className="w-full mt-4 flex items-center justify-center gap-2 px-3 py-2 bg-gray-700/70 hover:bg-gray-700 text-white text-sm rounded-lg transition-colors">
        <Settings size={16} />
        Settings
      </button>
    </div>
  );
};

export default UserProfile;
