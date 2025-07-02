
import React, { useState } from 'react';
import { Plus, TrendingUp, TrendingDown } from 'lucide-react';

const StocksCryptoWidget = ({ style }: { style?: React.CSSProperties }) => {
  const [stocks] = useState([
    { symbol: 'AAPL', name: 'Apple Inc.', price: 189.25, change: +2.34, changePercent: +1.25 },
    { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 142.56, change: -1.23, changePercent: -0.85 },
    { symbol: 'TSLA', name: 'Tesla Inc.', price: 248.42, change: +5.67, changePercent: +2.34 }
  ]);

  const [cryptos] = useState([
    { symbol: 'BTC', name: 'Bitcoin', price: 43250.00, change: +1250.00, changePercent: +2.98 },
    { symbol: 'ETH', name: 'Ethereum', price: 2634.50, change: -45.20, changePercent: -1.69 },
    { symbol: 'ADA', name: 'Cardano', price: 0.487, change: +0.023, changePercent: +4.95 }
  ]);

  const formatPrice = (price: number) => {
    if (price < 1) return price.toFixed(3);
    return price.toFixed(2);
  };

  const formatChange = (change: number) => {
    return change > 0 ? `+${change.toFixed(2)}` : change.toFixed(2);
  };

  return (
    <div 
      className="h-full flex flex-col p-4"
      style={style}
    >
      {/* Header with Add Button */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-white font-semibold text-lg">Stocks & Crypto</h3>
        <button className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full transition-colors">
          <Plus size={16} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto space-y-4">
        {/* Stocks Section */}
        <div>
          <h4 className="text-gray-300 text-sm font-medium mb-2">STOCKS</h4>
          <div className="space-y-2">
            {stocks.map((stock) => (
              <div key={stock.symbol} className="bg-gray-800/50 rounded-lg p-3">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-white font-medium">{stock.symbol}</div>
                    <div className="text-gray-400 text-xs">{stock.name}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-white font-medium">${formatPrice(stock.price)}</div>
                    <div className={`text-xs flex items-center gap-1 ${
                      stock.change >= 0 ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {stock.change >= 0 ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                      {formatChange(stock.change)} ({formatChange(stock.changePercent)}%)
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Crypto Section */}
        <div>
          <h4 className="text-gray-300 text-sm font-medium mb-2">CRYPTO</h4>
          <div className="space-y-2">
            {cryptos.map((crypto) => (
              <div key={crypto.symbol} className="bg-gray-800/50 rounded-lg p-3">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-white font-medium">{crypto.symbol}</div>
                    <div className="text-gray-400 text-xs">{crypto.name}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-white font-medium">${formatPrice(crypto.price)}</div>
                    <div className={`text-xs flex items-center gap-1 ${
                      crypto.change >= 0 ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {crypto.change >= 0 ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                      {formatChange(crypto.change)} ({formatChange(crypto.changePercent)}%)
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StocksCryptoWidget;
