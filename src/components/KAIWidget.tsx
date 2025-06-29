
import React from 'react';
import { Coins, Wallet, Timer, TrendingUp } from 'lucide-react';
import { useKAI } from '../contexts/KAIContext';

const KAIWidget = () => {
  const { 
    balance, 
    totalEarned, 
    connectWallet, 
    isWalletConnected, 
    walletAddress, 
    dailyEarnings,
    timeSpent 
  } = useKAI();

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 p-6 rounded-2xl shadow-lg relative overflow-hidden">
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-4">
          <Coins className="text-white" size={24} />
          <h2 className="text-white font-bold text-xl">KAI EARNINGS</h2>
        </div>
        
        <div className="space-y-4">
          {/* Current Balance */}
          <div className="bg-white/20 p-3 rounded-lg">
            <div className="text-white/80 text-sm">Current Balance</div>
            <div className="text-white font-bold text-2xl">
              {balance.toFixed(3)} KAI
            </div>
          </div>
          
          {/* Daily Stats */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white/20 p-3 rounded-lg">
              <div className="flex items-center gap-1 text-white/80 text-xs mb-1">
                <TrendingUp size={12} />
                Today
              </div>
              <div className="text-white font-semibold">
                +{dailyEarnings.toFixed(3)} KAI
              </div>
            </div>
            
            <div className="bg-white/20 p-3 rounded-lg">
              <div className="flex items-center gap-1 text-white/80 text-xs mb-1">
                <Timer size={12} />
                Active Time
              </div>
              <div className="text-white font-semibold">
                {formatTime(timeSpent)}
              </div>
            </div>
          </div>
          
          {/* Wallet Connection */}
          <div className="bg-white/20 p-3 rounded-lg">
            {isWalletConnected ? (
              <div>
                <div className="text-white/80 text-xs mb-1">Wallet Connected</div>
                <div className="text-white font-semibold text-sm">
                  {walletAddress}
                </div>
              </div>
            ) : (
              <button
                onClick={connectWallet}
                className="w-full bg-white/30 hover:bg-white/40 text-white font-semibold py-2 px-4 rounded-lg transition-all flex items-center justify-center gap-2"
              >
                <Wallet size={16} />
                Connect Wallet
              </button>
            )}
          </div>
          
          {/* Total Earned */}
          <div className="text-center pt-2 border-t border-white/20">
            <div className="text-white/80 text-xs">Total Lifetime Earned</div>
            <div className="text-white font-bold text-lg">
              {totalEarned.toFixed(3)} KAI
            </div>
          </div>
        </div>
        
        <div className="mt-4 text-center">
          <div className="text-white/60 text-xs">
            Earn 0.1 KAI every 30 seconds of active usage
          </div>
        </div>
      </div>
    </div>
  );
};

export default KAIWidget;
