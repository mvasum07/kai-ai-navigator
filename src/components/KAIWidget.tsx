
import React from 'react';
import { Coins, Wallet, Timer, TrendingUp, DollarSign } from 'lucide-react';
import { useKAI } from '../contexts/KAIContext';

const KAIWidget = ({ style }: { style?: React.CSSProperties }) => {
  const { 
    balance, 
    totalEarned, 
    connectWallet, 
    isWalletConnected, 
    walletAddress, 
    dailyEarnings,
    timeSpent 
  } = useKAI();

  const currentKAIPrice = 0.0000041684; // Current KAI price in USD

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const formatUSDValue = (kaiAmount: number) => {
    return (kaiAmount * currentKAIPrice).toFixed(8);
  };

  return (
    <div 
      className="bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 p-4 rounded-2xl shadow-lg relative overflow-hidden h-full"
      style={style}
    >
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
      <div className="relative z-10 h-full flex flex-col">
        <div className="flex items-center gap-2 mb-3">
          <Coins className="text-white" size={20} />
          <h2 className="text-white font-bold text-lg">KAI EARNINGS</h2>
        </div>
        
        {/* Current KAI Price */}
        <div className="bg-white/20 p-2 rounded-lg mb-3">
          <div className="flex items-center gap-1 text-white/80 text-xs mb-1">
            <DollarSign size={14} />
            KAI Price
          </div>
          <div className="text-white font-bold text-sm">
            ${currentKAIPrice.toFixed(10)} USD
          </div>
        </div>
        
        <div className="space-y-3 flex-1 overflow-y-auto">
          {/* Current Balance */}
          <div className="bg-white/20 p-2 rounded-lg">
            <div className="text-white/80 text-xs">Current Balance</div>
            <div className="text-white font-bold text-lg">
              {balance.toFixed(3)} KAI
            </div>
            <div className="text-white/70 text-xs">
              ≈ ${formatUSDValue(balance)} USD
            </div>
          </div>
          
          {/* Daily Stats */}
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-white/20 p-2 rounded-lg">
              <div className="flex items-center gap-1 text-white/80 text-xs mb-1">
                <TrendingUp size={10} />
                Today
              </div>
              <div className="text-white font-semibold text-sm">
                +{dailyEarnings.toFixed(3)} KAI
              </div>
              <div className="text-white/70 text-xs">
                ≈ ${formatUSDValue(dailyEarnings)} USD
              </div>
            </div>
            
            <div className="bg-white/20 p-2 rounded-lg">
              <div className="flex items-center gap-1 text-white/80 text-xs mb-1">
                <Timer size={10} />
                Active Time
              </div>
              <div className="text-white font-semibold text-sm">
                {formatTime(timeSpent)}
              </div>
            </div>
          </div>
          
          {/* Wallet Connection */}
          <div className="bg-white/20 p-2 rounded-lg">
            {isWalletConnected ? (
              <div>
                <div className="text-white/80 text-xs mb-1">Wallet Connected</div>
                <div className="text-white font-semibold text-xs">
                  {walletAddress}
                </div>
              </div>
            ) : (
              <button
                onClick={connectWallet}
                className="w-full bg-white/30 hover:bg-white/40 text-white font-semibold py-2 px-3 rounded-lg transition-all flex items-center justify-center gap-2 text-sm"
              >
                <Wallet size={14} />
                Connect Wallet
              </button>
            )}
          </div>
          
          {/* Total Earned */}
          <div className="text-center pt-2 border-t border-white/20">
            <div className="text-white/80 text-xs">Total Lifetime Earned</div>
            <div className="text-white font-bold text-sm">
              {totalEarned.toFixed(3)} KAI
            </div>
            <div className="text-white/70 text-xs">
              ≈ ${formatUSDValue(totalEarned)} USD
            </div>
          </div>
        </div>
        
        <div className="mt-2 text-center">
          <div className="text-white/60 text-xs">
            Earn 0.1 KAI every 30 seconds of active usage
          </div>
        </div>
      </div>
    </div>
  );
};

export default KAIWidget;
