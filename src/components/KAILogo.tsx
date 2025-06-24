
import React from 'react';

const KAILogo = () => {
  return (
    <div className="relative">
      <div className="w-48 h-48 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 shadow-2xl flex items-center justify-center">
        <div className="w-40 h-40 rounded-full bg-gradient-to-br from-pink-400 via-purple-500 to-blue-600 flex items-center justify-center">
          <span className="text-white font-bold text-4xl tracking-wider transform -skew-x-12 drop-shadow-lg">
            KAI
          </span>
        </div>
      </div>
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default KAILogo;
