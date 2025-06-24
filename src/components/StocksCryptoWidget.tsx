
import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, Plus, X } from 'lucide-react';

interface Asset {
  id: number;
  symbol: string;
  price: number;
  change: number;
  changePercent: number;
}

const StocksCryptoWidget = () => {
  const [activeTab, setActiveTab] = useState<'stocks' | 'crypto'>('stocks');
  const [stocks] = useState<Asset[]>([
    { id: 1, symbol: 'AAPL', price: 185.25, change: 2.15, changePercent: 1.17 },
    { id: 2, symbol: 'GOOGL', price: 142.89, change: -1.23, changePercent: -0.85 },
    { id: 3, symbol: 'MSFT', price: 378.91, change: 4.56, changePercent: 1.22 },
    { id: 4, symbol: 'TSLA', price: 248.42, change: -5.67, changePercent: -2.23 },
  ]);
  
  const [crypto] = useState<Asset[]>([
    { id: 1, symbol: 'BTC', price: 43250.00, change: 1250.50, changePercent: 2.98 },
    { id: 2, symbol: 'ETH', price: 2650.25, change: -85.75, changePercent: -3.13 },
    { id: 3, symbol: 'ADA', price: 0.485, change: 0.012, changePercent: 2.54 },
    { id: 4, symbol: 'SOL', price: 98.75, change: 3.22, changePercent: 3.37 },
  ]);

  const renderAsset = (asset: Asset) => (
    <div key={asset.id} className="bg-white/10 p-3 rounded-lg flex justify-between items-center">
      <div>
        <span className="text-white font-semibold text-sm">{asset.symbol}</span>
        <div className="text-white/80 text-xs">
          ${asset.price.toLocaleString()}
        </div>
      </div>
      <div className="text-right">
        <div className={`flex items-center gap-1 text-xs ${
          asset.change >= 0 ? 'text-green-300' : 'text-red-300'
        }`}>
          {asset.change >= 0 ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
          {asset.changePercent >= 0 ? '+' : ''}{asset.changePercent.toFixed(2)}%
        </div>
        <div className={`text-xs ${asset.change >= 0 ? 'text-green-300' : 'text-red-300'}`}>
          {asset.change >= 0 ? '+' : ''}${asset.change.toFixed(2)}
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-gradient-to-br from-gray-900 to-blue-900 p-6 rounded-2xl shadow-lg relative overflow-hidden">
      <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <h2 className="text-white font-bold text-xl mb-4">STOCKS/CRYPTO</h2>
        
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setActiveTab('stocks')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeTab === 'stocks' 
                ? 'bg-cyan-500 text-white' 
                : 'bg-white/20 text-white/70 hover:bg-white/30'
            }`}
          >
            Stocks
          </button>
          <button
            onClick={() => setActiveTab('crypto')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeTab === 'crypto' 
                ? 'bg-cyan-500 text-white' 
                : 'bg-white/20 text-white/70 hover:bg-white/30'
            }`}
          >
            Crypto
          </button>
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-3 py-2 rounded-lg text-sm transition-all flex items-center gap-1">
            <Plus size={14} />
            ADD
          </button>
        </div>
        
        <div className="space-y-2 max-h-64 overflow-y-auto">
          {(activeTab === 'stocks' ? stocks : crypto).map(renderAsset)}
        </div>
        
        <div className="mt-4 text-center">
          <span className="text-white/60 text-xs">Last updated: {new Date().toLocaleTimeString()}</span>
        </div>
      </div>
    </div>
  );
};

export default StocksCryptoWidget;
