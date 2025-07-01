
import React, { useState } from 'react';
import { Plus, TrendingUp, TrendingDown } from 'lucide-react';

const StocksCryptoWidget = ({ style }: { style?: React.CSSProperties }) => {
  const [activeTab, setActiveTab] = useState<'stocks' | 'crypto'>('stocks');
  const [stocks] = useState([
    { symbol: 'AAPL', price: 185.25, change: +2.15, changePercent: +1.17 },
    { symbol: 'GOOGL', price: 142.89, change: -1.23, changePercent: -0.85 }
  ]);

  const [cryptos] = useState([
    { symbol: 'BTC', price: 43250.00, change: +1250.00, changePercent: +2.98 },
    { symbol: 'ETH', price: 2634.50, change: -45.20, changePercent: -1.69 }
  ]);

  const formatPrice = (price: number) => {
    if (price < 1) return price.toFixed(3);
    if (price > 1000) return price.toLocaleString();
    return price.toFixed(2);
  };

  const formatChange = (change: number) => {
    return change > 0 ? `+$${Math.abs(change).toFixed(2)}` : `-$${Math.abs(change).toFixed(2)}`;
  };

  const formatChangePercent = (changePercent: number) => {
    return changePercent > 0 ? `+${changePercent.toFixed(2)}%` : `${changePercent.toFixed(2)}%`;
  };

  const currentData = activeTab === 'stocks' ? stocks : cryptos;

  return (
    <div 
      className="h-full flex flex-col p-4 bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-lg"
      style={style}
    >
      {/* Header */}
      <div className="mb-4">
        <h3 className="text-white font-semibold text-lg mb-3">STOCKS/CRYPTO</h3>
        
        {/* Tabs and Add Button */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab('stocks')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeTab === 'stocks'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            Stocks
          </button>
          <button
            onClick={() => setActiveTab('crypto')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeTab === 'crypto'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            Crypto
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2">
            <Plus size={16} />
            ADD
          </button>
        </div>
      </div>

      {/* Data List */}
      <div className="flex-1 space-y-3">
        {currentData.map((item) => (
          <div key={item.symbol} className="bg-gray-800/50 rounded-lg p-4">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-white font-bold text-lg">{item.symbol}</div>
                <div className="text-white text-xl font-semibold">
                  ${formatPrice(item.price)}
                </div>
              </div>
              <div className="text-right">
                <div className={`flex items-center gap-1 text-sm font-medium ${
                  item.change >= 0 ? 'text-green-400' : 'text-red-400'
                }`}>
                  {item.change >= 0 ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                  {formatChangePercent(item.changePercent)}
                </div>
                <div className={`text-sm ${
                  item.change >= 0 ? 'text-green-400' : 'text-red-400'
                }`}>
                  {formatChange(item.change)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StocksCryptoWidget;
