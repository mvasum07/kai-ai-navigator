
import React, { useState } from 'react';
import { ChevronDown, CreditCard } from 'lucide-react';

const Accounts = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-gray-700/80 backdrop-blur-sm rounded-lg p-3 min-w-[140px]">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-between w-full text-white"
      >
        <span className="flex items-center gap-2">
          <CreditCard size={16} />
          Accounts
        </span>
        <ChevronDown size={16} className={`transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
      </button>
      
      {isExpanded && (
        <div className="mt-2 pt-2 border-t border-gray-600 space-y-1">
          <div className="text-white/80 text-sm">Bank Account</div>
          <div className="text-white/80 text-sm">Credit Cards</div>
          <div className="text-white/80 text-sm">Investments</div>
        </div>
      )}
    </div>
  );
};

export default Accounts;
