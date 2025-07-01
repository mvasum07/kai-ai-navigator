
import React, { useState } from 'react';
import { ChevronDown, Mail } from 'lucide-react';

const Accounts = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const socialAccounts = [
    { 
      name: 'Gmail', 
      icon: <Mail size={16} className="text-red-500" />,
      connected: true 
    },
    { 
      name: 'Twitter', 
      icon: <div className="w-4 h-4 bg-blue-400 rounded-full flex items-center justify-center text-white text-xs font-bold">𝕏</div>,
      connected: false 
    },
    { 
      name: 'Instagram', 
      icon: <div className="w-4 h-4 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-sm flex items-center justify-center text-white text-xs">📷</div>,
      connected: true 
    },
    { 
      name: 'Facebook', 
      icon: <div className="w-4 h-4 bg-blue-600 rounded flex items-center justify-center text-white text-xs font-bold">f</div>,
      connected: false 
    }
  ];

  return (
    <div className="bg-gray-800/90 backdrop-blur-sm rounded-xl p-4 min-w-[200px] border border-gray-700/50">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-between w-full text-white hover:text-gray-200 transition-colors"
      >
        <span className="font-medium">Social Accounts</span>
        <ChevronDown 
          size={16} 
          className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} 
        />
      </button>
      
      {isExpanded && (
        <div className="mt-4 space-y-3">
          {socialAccounts.map((account, index) => (
            <div 
              key={index}
              className="flex items-center justify-between p-2 rounded-lg bg-gray-700/50 hover:bg-gray-700/70 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3">
                {account.icon}
                <span className="text-white/90 text-sm font-medium">{account.name}</span>
              </div>
              <div className={`w-2 h-2 rounded-full ${account.connected ? 'bg-green-400' : 'bg-gray-500'}`} />
            </div>
          ))}
          
          <button className="w-full mt-3 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors">
            Connect Account
          </button>
        </div>
      )}
    </div>
  );
};

export default Accounts;
