
import React, { useState } from 'react';
import { ChevronDown, User } from 'lucide-react';

const UserProfile = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-gray-700/80 backdrop-blur-sm rounded-lg p-3 min-w-[140px]">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-between w-full text-white"
      >
        <span className="flex items-center gap-2">
          <User size={16} />
          User Profile
        </span>
        <ChevronDown size={16} className={`transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
      </button>
      
      {isExpanded && (
        <div className="mt-2 pt-2 border-t border-gray-600 space-y-1">
          <div className="text-white/80 text-sm">Settings</div>
          <div className="text-white/80 text-sm">Logout</div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
