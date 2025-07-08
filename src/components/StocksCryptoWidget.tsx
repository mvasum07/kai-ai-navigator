
import React, { useState } from 'react';
import { Plus, TrendingUp, TrendingDown, X } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';

const StocksCryptoWidget = ({ style }: { style?: React.CSSProperties }) => {
  const [stocks, setStocks] = useState([
    { symbol: 'AAPL', name: 'Apple Inc.', price: 189.25, change: +2.34, changePercent: +1.25 },
    { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 142.56, change: -1.23, changePercent: -0.85 },
    { symbol: 'TSLA', name: 'Tesla Inc.', price: 248.42, change: +5.67, changePercent: +2.34 }
  ]);

  const [cryptos, setCryptos] = useState([
    { symbol: 'BTC', name: 'Bitcoin', price: 43250.00, change: +1250.00, changePercent: +2.98 },
    { symbol: 'ETH', name: 'Ethereum', price: 2634.50, change: -45.20, changePercent: -1.69 },
    { symbol: 'ADA', name: 'Cardano', price: 0.487, change: +0.023, changePercent: +4.95 }
  ]);

  const [newSymbol, setNewSymbol] = useState('');
  const [newName, setNewName] = useState('');
  const [isStock, setIsStock] = useState(true);

  const formatPrice = (price: number) => {
    if (price < 1) return price.toFixed(3);
    return price.toFixed(2);
  };

  const formatChange = (change: number) => {
    return change > 0 ? `+${change.toFixed(2)}` : change.toFixed(2);
  };

  const addNewItem = () => {
    if (!newSymbol || !newName) return;
    
    const newItem = {
      symbol: newSymbol.toUpperCase(),
      name: newName,
      price: Math.random() * 1000 + 50, // Mock price
      change: (Math.random() - 0.5) * 20, // Mock change
      changePercent: (Math.random() - 0.5) * 5 // Mock change percent
    };

    if (isStock) {
      setStocks([...stocks, newItem]);
    } else {
      setCryptos([...cryptos, newItem]);
    }

    setNewSymbol('');
    setNewName('');
  };

  const removeItem = (symbol: string, fromStocks: boolean) => {
    if (fromStocks) {
      setStocks(stocks.filter(stock => stock.symbol !== symbol));
    } else {
      setCryptos(cryptos.filter(crypto => crypto.symbol !== symbol));
    }
  };

  return (
    <div 
      className="h-full flex flex-col p-4"
      style={style}
    >
      {/* Header with Add Button */}
      <div className="flex justify-between items-center mb-4 pr-16">
        <h3 className="text-white font-semibold text-lg">Stocks & Crypto</h3>
        <Dialog>
          <DialogTrigger asChild>
            <Button size="sm" className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2">
              <Plus size={16} />
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-gray-900 border-gray-700">
            <DialogHeader>
              <DialogTitle className="text-white">Add New Item</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="flex gap-2">
                <Button
                  variant={isStock ? "default" : "outline"}
                  onClick={() => setIsStock(true)}
                  size="sm"
                >
                  Stock
                </Button>
                <Button
                  variant={!isStock ? "default" : "outline"}
                  onClick={() => setIsStock(false)}
                  size="sm"
                >
                  Crypto
                </Button>
              </div>
              <Input
                placeholder="Symbol (e.g., AAPL, BTC)"
                value={newSymbol}
                onChange={(e) => setNewSymbol(e.target.value)}
                className="bg-gray-800 border-gray-600 text-white"
              />
              <Input
                placeholder="Name (e.g., Apple Inc., Bitcoin)"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                className="bg-gray-800 border-gray-600 text-white"
              />
              <Button onClick={addNewItem} className="w-full">
                Add {isStock ? 'Stock' : 'Crypto'}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex-1 overflow-y-auto space-y-4">
        {/* Stocks Section */}
        <div>
          <h4 className="text-gray-300 text-sm font-medium mb-2">STOCKS</h4>
          <div className="space-y-2">
            {stocks.map((stock) => (
              <div key={stock.symbol} className="bg-gray-800/50 rounded-lg p-3 group relative">
                <button
                  onClick={() => removeItem(stock.symbol, true)}
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity text-gray-400 hover:text-red-400"
                >
                  <X size={14} />
                </button>
                <div className="flex justify-between items-start pr-6">
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
              <div key={crypto.symbol} className="bg-gray-800/50 rounded-lg p-3 group relative">
                <button
                  onClick={() => removeItem(crypto.symbol, false)}
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity text-gray-400 hover:text-red-400"
                >
                  <X size={14} />
                </button>
                <div className="flex justify-between items-start pr-6">
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
