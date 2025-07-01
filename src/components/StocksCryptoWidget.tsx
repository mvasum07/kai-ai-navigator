
import React from 'react';

const StocksCryptoWidget = ({ style }: { style?: React.CSSProperties }) => {
  return (
    <div 
      className="h-full flex items-center justify-center"
      style={style}
    >
      <div className="grid grid-cols-2 gap-4 w-full">
        <div className="bg-gray-800 rounded-lg p-4 text-center">
          <div className="text-white font-semibold">STOCKS</div>
          <div className="text-gray-400 text-sm">Market Data</div>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 text-center">
          <div className="text-white font-semibold">CRYPTO</div>
          <div className="text-gray-400 text-sm">Digital Assets</div>
        </div>
      </div>
    </div>
  );
};

export default StocksCryptoWidget;
